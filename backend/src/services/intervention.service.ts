import pool from "../config/db";
import { Intervention } from "../models/intervention.model";
import { QueryResult } from "pg";

export class InterventionService {
  public async getAll(): Promise<Intervention[]> {
    const query = `
      SELECT 
        i.id, i.date_heure_debut, i.date_heure_fin, i.duree, 
        i.mission_id, m.nature_intervention as mission_nature, 
        i.technicien_id, t.nom as technicien_nom, t.prenom as technicien_prenom
      FROM intervention i
      LEFT JOIN mission m ON i.mission_id = m.num_intervention
      LEFT JOIN technicien t ON i.technicien_id = t.id
    `;
    try {
      const result: QueryResult<any> = await pool.query(query);
      return result.rows.map(row => ({
        id: row.id,
        date_heure_debut: row.date_heure_debut,
        date_heure_fin: row.date_heure_fin,
        duree: row.duree,
        mission_id: row.mission_id,
        mission: row.mission_id ? { num_intervention: row.mission_id, nature_intervention: row.mission_nature } : undefined,
        technicien_id: row.technicien_id,
        technicien: row.technicien_id ? { id: row.technicien_id, nom: row.technicien_nom, prenom: row.technicien_prenom } : undefined
      }));
    } catch (error) {
      console.error("Erreur lors de la récupération de toutes les interventions:", error);
      throw new Error("Erreur lors de la récupération des interventions.");
    }
  }

  public async getById(id: number): Promise<Intervention | null> {
    const query = `
      SELECT 
        i.id, i.date_heure_debut, i.date_heure_fin, i.duree, 
        i.mission_id, m.nature_intervention as mission_nature, 
        i.technicien_id, t.nom as technicien_nom, t.prenom as technicien_prenom
      FROM intervention i
      LEFT JOIN mission m ON i.mission_id = m.num_intervention
      LEFT JOIN technicien t ON i.technicien_id = t.id
      WHERE i.id = $1
    `;
    try {
      const result: QueryResult<any> = await pool.query(query, [id]);
      if (result.rows.length === 0) {
        return null;
      }
      const row = result.rows[0];
      return {
        id: row.id,
        date_heure_debut: row.date_heure_debut,
        date_heure_fin: row.date_heure_fin,
        duree: row.duree,
        mission_id: row.mission_id,
        mission: row.mission_id ? { num_intervention: row.mission_id, nature_intervention: row.mission_nature } : undefined,
        technicien_id: row.technicien_id,
        technicien: row.technicien_id ? { id: row.technicien_id, nom: row.technicien_nom, prenom: row.technicien_prenom } : undefined
      };
    } catch (error) {
      console.error(`Erreur lors de la récupération de l'intervention avec l'ID ${id}:`, error);
      throw new Error("Erreur lors de la récupération de l'intervention.");
    }
  }

  public async create(interventionData: Omit<Intervention, "id" | "mission" | "technicien">): Promise<Intervention | null> {
    const { date_heure_debut, date_heure_fin, duree, mission_id, technicien_id } = interventionData;
    try {
      const query = "INSERT INTO intervention (date_heure_debut, date_heure_fin, duree, mission_id, technicien_id) VALUES ($1, $2, $3, $4, $5) RETURNING id";
      const result: QueryResult<{ id: number }> = await pool.query(query, [date_heure_debut, date_heure_fin, duree, mission_id, technicien_id]);
      
      if (result.rows.length > 0 && result.rows[0].id) {
        return this.getById(result.rows[0].id);
      }
      return null;
    } catch (error) {
      console.error("Erreur lors de la création de l'intervention:", error);
      throw new Error("Erreur lors de la création de l'intervention.");
    }
  }

  public async update(id: number, interventionData: Partial<Omit<Intervention, "id" | "mission" | "technicien">>): Promise<Intervention | null> {
    const { date_heure_debut, date_heure_fin, duree, mission_id, technicien_id } = interventionData;
    const fieldsToUpdate: string[] = [];
    const values: any[] = [];
    let placeholderCount = 1;

    if (date_heure_debut !== undefined) { fieldsToUpdate.push(`date_heure_debut = $${placeholderCount++}`); values.push(date_heure_debut); }
    if (date_heure_fin !== undefined) { fieldsToUpdate.push(`date_heure_fin = $${placeholderCount++}`); values.push(date_heure_fin); }
    if (duree !== undefined) { fieldsToUpdate.push(`duree = $${placeholderCount++}`); values.push(duree); }
    if (mission_id !== undefined) { fieldsToUpdate.push(`mission_id = $${placeholderCount++}`); values.push(mission_id); }
    if (technicien_id !== undefined) { fieldsToUpdate.push(`technicien_id = $${placeholderCount++}`); values.push(technicien_id); }

    if (fieldsToUpdate.length === 0) {
      return this.getById(id);
    }

    values.push(id);
    const query = `UPDATE intervention SET ${fieldsToUpdate.join(", ")} WHERE id = $${placeholderCount} RETURNING id`;

    try {
      const result: QueryResult<{ id: number }> = await pool.query(query, values);
      if (result.rowCount === 0) {
        return null;
      }
      return this.getById(id);
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'intervention:", error);
      throw new Error("Erreur lors de la mise à jour de l'intervention.");
    }
  }

  public async delete(id: number): Promise<boolean> {
    try {
      const result: QueryResult = await pool.query("DELETE FROM intervention WHERE id = $1", [id]);
      return result.rowCount !== null && result.rowCount > 0;
    } catch (error) {
      console.error("Erreur lors de la suppression de l'intervention:", error);
      throw new Error("Erreur lors de la suppression de l'intervention.");
    }
  }
}

