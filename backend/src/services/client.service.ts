import pool from "../config/db";
import { Client } from "../models/client.model";
import { QueryResult } from "pg";

export class ClientService {
  public async getAll(): Promise<Client[]> {
    try {
      const result: QueryResult<Client> = await pool.query("SELECT * FROM client");
      return result.rows;
    } catch (error) {
      console.error("Erreur lors de la récupération de tous les clients:", error);
      throw new Error("Erreur lors de la récupération des clients.");
    }
  }

  public async getById(id: number): Promise<Client | null> {
    try {
      const result: QueryResult<Client> = await pool.query("SELECT * FROM client WHERE id = $1", [id]);
      if (result.rows.length === 0) {
        return null;
      }
      return result.rows[0];
    } catch (error) {
      console.error(`Erreur lors de la récupération du client avec l'ID ${id}:`, error);
      throw new Error("Erreur lors de la récupération du client.");
    }
  }

  public async create(clientData: Client): Promise<Client | null> {
    const { nom, contact, localisation } = clientData;
    try {
      const result: QueryResult<Client> = await pool.query(
        "INSERT INTO client (nom, contact, localisation) VALUES ($1, $2, $3) RETURNING *",
        [nom, contact, localisation]
      );
      if (result.rows.length > 0) {
        return result.rows[0];
      }
      return null;
    } catch (error) {
      console.error("Erreur lors de la création du client:", error);
      throw new Error("Erreur lors de la création du client.");
    }
  }

  public async update(id: number, clientData: Partial<Client>): Promise<Client | null> {
    const { nom, contact, localisation } = clientData;
    const fieldsToUpdate: string[] = [];
    const values: any[] = [];
    let placeholderCount = 1;

    if (nom !== undefined) { fieldsToUpdate.push(`nom = $${placeholderCount++}`); values.push(nom); }
    if (contact !== undefined) { fieldsToUpdate.push(`contact = $${placeholderCount++}`); values.push(contact); }
    if (localisation !== undefined) { fieldsToUpdate.push(`localisation = $${placeholderCount++}`); values.push(localisation); }

    if (fieldsToUpdate.length === 0) {
      return this.getById(id);
    }

    values.push(id);
    const query = `UPDATE client SET ${fieldsToUpdate.join(", ")} WHERE id = $${placeholderCount} RETURNING *`;

    try {
      const result: QueryResult<Client> = await pool.query(query, values);
      if (result.rowCount === 0) {
        return null;
      }
      return result.rows[0];
    } catch (error) {
      console.error("Erreur lors de la mise à jour du client:", error);
      throw new Error("Erreur lors de la mise à jour du client.");
    }
  }

  public async delete(id: number): Promise<boolean> {
    try {
      const result: QueryResult = await pool.query("DELETE FROM client WHERE id = $1", [id]);
      return result.rowCount !== null && result.rowCount > 0;
    } catch (error) {
      console.error("Erreur lors de la suppression du client:", error);
      throw new Error("Erreur lors de la suppression du client.");
    }
  }
}

