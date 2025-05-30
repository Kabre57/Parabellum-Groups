import pool from "../config/db";
import { Role } from "../models/role.model";
import { QueryResult } from "pg";

export class RoleService {
  public async getAll(): Promise<Role[]> {
    try {
      const result: QueryResult<Role> = await pool.query("SELECT * FROM role");
      return result.rows;
    } catch (error) {
      console.error("Erreur lors de la récupération de tous les rôles:", error);
      throw new Error("Erreur lors de la récupération des rôles.");
    }
  }

  public async getById(id: number): Promise<Role | null> {
    try {
      const result: QueryResult<Role> = await pool.query("SELECT * FROM role WHERE id = $1", [id]);
      if (result.rows.length === 0) {
        return null;
      }
      return result.rows[0];
    } catch (error) {
      console.error(`Erreur lors de la récupération du rôle avec l'ID ${id}:`, error);
      throw new Error("Erreur lors de la récupération du rôle.");
    }
  }

  public async create(roleData: Omit<Role, "id">): Promise<Role | null> {
    const { libelle } = roleData;
    try {
      const result: QueryResult<Role> = await pool.query(
        "INSERT INTO role (libelle) VALUES ($1) RETURNING *",
        [libelle]
      );
      if (result.rows.length > 0) {
        return result.rows[0];
      }
      return null;
    } catch (error) {
      console.error("Erreur lors de la création du rôle:", error);
      throw new Error("Erreur lors de la création du rôle.");
    }
  }

  public async update(id: number, roleData: Partial<Omit<Role, "id">>): Promise<Role | null> {
    const { libelle } = roleData;
    if (!libelle) {
        const currentRole = await this.getById(id);
        if (!currentRole) return null;
        return currentRole; 
    }
    try {
      const result: QueryResult<Role> = await pool.query(
        "UPDATE role SET libelle = $1 WHERE id = $2 RETURNING *",
        [libelle, id]
      );
      if (result.rowCount === 0) {
        return null; 
      }
      return result.rows[0];
    } catch (error) {
      console.error("Erreur lors de la mise à jour du rôle:", error);
      throw new Error("Erreur lors de la mise à jour du rôle.");
    }
  }

  public async delete(id: number): Promise<boolean> {
    try {
      const result: QueryResult = await pool.query("DELETE FROM role WHERE id = $1", [id]);
      return result.rowCount !== null && result.rowCount > 0;
    } catch (error) {
      console.error("Erreur lors de la suppression du rôle:", error);
      throw new Error("Erreur lors de la suppression du rôle.");
    }
  }
}

