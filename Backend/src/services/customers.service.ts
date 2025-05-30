import { Pool } from 'pg';
import { Customer } from '../models/entities/customers.entity';
import { db } from '../config/db';

/**
 * Service pour la gestion des clients
 */
export class CustomersService {
  private pool: Pool;

  constructor() {
    this.pool = db;
  }

  /**
   * Récupère tous les clients
   */
  async findAll(): Promise<Customer[]> {
    try {
      const result = await this.pool.query('SELECT * FROM customers ORDER BY id');
      return result.rows;
    } catch (error) {
      console.error('Erreur lors de la récupération des clients:', error);
      throw new Error('Erreur lors de la récupération des clients');
    }
  }

  /**
   * Récupère un client par son ID
   */
  async findById(id: number): Promise<Customer | null> {
    try {
      const result = await this.pool.query('SELECT * FROM customers WHERE id = $1', [id]);
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la récupération du client ${id}:`, error);
      throw new Error(`Erreur lors de la récupération du client ${id}`);
    }
  }

  /**
   * Crée un nouveau client
   */
  async create(customer: Customer): Promise<Customer> {
    try {
      const { name, theme, email, phone, company, card_type, card_number, joined, status } = customer;
      const result = await this.pool.query(
        'INSERT INTO customers (name, theme, email, phone, company, card_type, card_number, joined, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
        [name, theme, email, phone, company, card_type, card_number, joined, status]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Erreur lors de la création du client:', error);
      throw new Error('Erreur lors de la création du client');
    }
  }

  /**
   * Met à jour un client existant
   */
  async update(id: number, customer: Customer): Promise<Customer | null> {
    try {
      const { name, theme, email, phone, company, card_type, card_number, joined, status } = customer;
      const result = await this.pool.query(
        'UPDATE customers SET name = $1, theme = $2, email = $3, phone = $4, company = $5, card_type = $6, card_number = $7, joined = $8, status = $9 WHERE id = $10 RETURNING *',
        [name, theme, email, phone, company, card_type, card_number, joined, status, id]
      );
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du client ${id}:`, error);
      throw new Error(`Erreur lors de la mise à jour du client ${id}`);
    }
  }

  /**
   * Supprime un client
   */
  async delete(id: number): Promise<boolean> {
    try {
      const result = await this.pool.query('DELETE FROM customers WHERE id = $1 RETURNING id', [id]);
      return result.rows.length > 0;
    } catch (error) {
      console.error(`Erreur lors de la suppression du client ${id}:`, error);
      throw new Error(`Erreur lors de la suppression du client ${id}`);
    }
  }
}
