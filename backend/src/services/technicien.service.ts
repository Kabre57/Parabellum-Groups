import pool from "../config/db";
import { Technicien } from "../models/technicien.model";
import { QueryResult } from "pg";

export class TechnicienService {
  public async getAll(): Promise<Technicien[]> {
    const query = `
      SELECT t.id, t.nom, t.prenom, t.contact, t.specialite_id, s.libelle as specialite_libelle
      FROM technicien t
      LEFT JOIN specialite s ON t.specialite_id = s.id
    `;
    try {
      const result: QueryResult<any> = await pool.query(query);
      return result.rows.map(row => ({
        id: row.id,
        nom: row.nom,
        prenom: row.prenom,
        contact: row.contact,
        specialite_id: row.specialite_id,
        specialite: row.specialite_id ? { id: row.specialite_id, libelle: row.specialite_libelle } : undefined
      }));
    } catch (error) {
      console.error("Erreur lors de la récupération de tous les techniciens:", error);
      throw new Error("Erreur lors de la récupération des techniciens.");
    }
  }

  public async getById(id: number): Promise<Technicien | null> {
    const query = `
      SELECT t.id, t.nom, t.prenom, t.contact, t.specialite_id, s.libelle as specialite_libelle
      FROM technicien t
      LEFT JOIN specialite s ON t.specialite_id = s.id
      WHERE t.id = $1
    `;
    try {
      const result: QueryResult<any> = await pool.query(query, [id]);
      if (result.rows.length === 0) {
        return null;
      }
      const row = result.rows[0];
      return {
        id: row.id,
        nom: row.nom,
        prenom: row.prenom,
        contact: row.contact,
        specialite_id: row.specialite_id,
        specialite: row.specialite_id ? { id: row.specialite_id, libelle: row.specialite_libelle } : undefined
      };
    } catch (error) {
      console.error(`Erreur lors de la récupération du technicien avec l'ID ${id}:`, error);
      throw new Error("Erreur lors de la récupération du technicien.");
    }
  }

  public async create(technicienData: Omit<Technicien, "id" | "specialite">): Promise<Technicien | null> {
    const { nom, prenom, contact, specialite_id } = technicienData;
    try {
      // First, insert the technicien
      const insertQuery = "INSERT INTO technicien (nom, prenom, contact, specialite_id) VALUES ($1, $2, $3, $4) RETURNING id";
      const insertResult: QueryResult<{ id: number }> = await pool.query(insertQuery, [nom, prenom, contact, specialite_id]);
      
      if (insertResult.rows.length > 0 && insertResult.rows[0].id) {
        // Then, fetch the newly created technicien with its specialite details
        return this.getById(insertResult.rows[0].id);
      }
      return null;
    } catch (error) {
      console.error("Erreur lors de la création du technicien:", error);
      throw new Error("Erreur lors de la création du technicien.");
    }
  }

  public async update(id: number, technicienData: Partial<Omit<Technicien, "id" | "specialite">>): Promise<Technicien | null> {
    const { nom, prenom, contact, specialite_id } = technicienData;
    const fieldsToUpdate: string[] = [];
    const values: any[] = [];
    let placeholderCount = 1;

    if (nom !== undefined) { fieldsToUpdate.push(`nom = $${placeholderCount++}`); values.push(nom); }
    if (prenom !== undefined) { fieldsToUpdate.push(`prenom = $${placeholderCount++}`); values.push(prenom); }
    if (contact !== undefined) { fieldsToUpdate.push(`contact = $${placeholderCount++}`); values.push(contact); }
    if (specialite_id !== undefined) { fieldsToUpdate.push(`specialite_id = $${placeholderCount++}`); values.push(specialite_id); }

    if (fieldsToUpdate.length === 0) {
      return this.getById(id); // No fields to update, return current state
    }

    values.push(id); // Add the ID for the WHERE clause
    const updateQuery = `UPDATE technicien SET ${fieldsToUpdate.join(", ")} WHERE id = $${placeholderCount} RETURNING id`;

    try {
      const updateResult: QueryResult<{ id: number }> = await pool.query(updateQuery, values);
      if (updateResult.rowCount === 0) {
        return null; // Technicien not found or not updated
      }
      // Fetch the updated technicien with its specialite details
      return this.getById(id);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du technicien:", error);
      throw new Error("Erreur lors de la mise à jour du technicien.");
    }
  }

  public async delete(id: number): Promise<boolean> {
    try {
      const result: QueryResult = await pool.query("DELETE FROM technicien WHERE id = $1", [id]);
      return result.rowCount !== null && result.rowCount > 0;
    } catch (error) {
      console.error("Erreur lors de la suppression du technicien:", error);
      throw new Error("Erreur lors de la suppression du technicien.");
    }
  }
}

