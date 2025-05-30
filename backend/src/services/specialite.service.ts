import pool from "../config/db";
import { Specialite } from "../models/specialite.model";
import { QueryResult } from "pg";

export class SpecialiteService {
  public async getAll(): Promise<Specialite[]> {
    try {
      const result: QueryResult<Specialite> = await pool.query("SELECT * FROM specialite");
      return result.rows;
    } catch (error) {
      console.error("Erreur lors de la récupération de toutes les spécialités:", error);
      throw new Error("Erreur lors de la récupération des spécialités.");
    }
  }

  public async getById(id: number): Promise<Specialite | null> {
    try {
      const result: QueryResult<Specialite> = await pool.query("SELECT * FROM specialite WHERE id = $1", [id]);
      if (result.rows.length === 0) {
        return null;
      }
      return result.rows[0];
    } catch (error) {
      console.error(`Erreur lors de la récupération de la spécialité avec l'ID ${id}:`, error);
      throw new Error("Erreur lors de la récupération de la spécialité.");
    }
  }

  public async create(specialiteData: Omit<Specialite, "id">): Promise<Specialite | null> {
    const { libelle } = specialiteData;
    try {
      const result: QueryResult<Specialite> = await pool.query(
        "INSERT INTO specialite (libelle) VALUES ($1) RETURNING *",
        [libelle]
      );
      if (result.rows.length > 0) {
        return result.rows[0];
      }
      return null;
    } catch (error) {
      console.error("Erreur lors de la création de la spécialité:", error);
      throw new Error("Erreur lors de la création de la spécialité.");
    }
  }

  public async update(id: number, specialiteData: Partial<Omit<Specialite, "id">>): Promise<Specialite | null> {
    const { libelle } = specialiteData;
    if (!libelle) {
        const currentSpecialite = await this.getById(id);
        if (!currentSpecialite) return null;
        return currentSpecialite; 
    }
    try {
      const result: QueryResult<Specialite> = await pool.query(
        "UPDATE specialite SET libelle = $1 WHERE id = $2 RETURNING *",
        [libelle, id]
      );
      if (result.rowCount === 0) {
        return null; 
      }
      return result.rows[0];
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la spécialité:", error);
      throw new Error("Erreur lors de la mise à jour de la spécialité.");
    }
  }

  public async delete(id: number): Promise<boolean> {
    try {
      const result: QueryResult = await pool.query("DELETE FROM specialite WHERE id = $1", [id]);
      return result.rowCount !== null && result.rowCount > 0;
    } catch (error) {
      console.error("Erreur lors de la suppression de la spécialité:", error);
      throw new Error("Erreur lors de la suppression de la spécialité.");
    }
  }
}

