import { Pool } from 'pg';
import { User } from '../models/entities/users.entity';
import { db } from '../config/db';

/**
 * Service pour la gestion des utilisateurs
 */
export class UsersService {
  private pool: Pool;

  constructor() {
    this.pool = db;
  }

  /**
   * Récupère tous les utilisateurs
   */
  async findAll(): Promise<User[]> {
    try {
      const result = await this.pool.query('SELECT * FROM users ORDER BY id');
      return result.rows;
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs:', error);
      throw new Error('Erreur lors de la récupération des utilisateurs');
    }
  }

  /**
   * Récupère un utilisateur par son ID
   */
  async findById(id: number): Promise<User | null> {
    try {
      const result = await this.pool.query('SELECT * FROM users WHERE id = $1', [id]);
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la récupération de l'utilisateur ${id}:`, error);
      throw new Error(`Erreur lors de la récupération de l'utilisateur ${id}`);
    }
  }

  /**
   * Crée un nouvel utilisateur
   */
  async create(user: User): Promise<User> {
    try {
      const { 
        name, theme, display_name, dob, role, email, balance, phone, 
        email_status, kyc_status, last_login, status, address, state, 
        country, designation, projects, performed, tasks 
      } = user;
      
      const result = await this.pool.query(
        `INSERT INTO users (
          name, theme, display_name, dob, role, email, balance, phone, 
          email_status, kyc_status, last_login, status, address, state, 
          country, designation, projects, performed, tasks
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *`,
        [
          name, theme, display_name, dob, role, email, balance, phone, 
          email_status, kyc_status, last_login, status, address, state, 
          country, designation, projects, performed, tasks
        ]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur:', error);
      throw new Error('Erreur lors de la création de l\'utilisateur');
    }
  }

  /**
   * Met à jour un utilisateur existant
   */
  async update(id: number, user: User): Promise<User | null> {
    try {
      const { 
        name, theme, display_name, dob, role, email, balance, phone, 
        email_status, kyc_status, last_login, status, address, state, 
        country, designation, projects, performed, tasks 
      } = user;
      
      const result = await this.pool.query(
        `UPDATE users SET 
          name = $1, theme = $2, display_name = $3, dob = $4, role = $5, 
          email = $6, balance = $7, phone = $8, email_status = $9, 
          kyc_status = $10, last_login = $11, status = $12, address = $13, 
          state = $14, country = $15, designation = $16, projects = $17, 
          performed = $18, tasks = $19 
        WHERE id = $20 RETURNING *`,
        [
          name, theme, display_name, dob, role, email, balance, phone, 
          email_status, kyc_status, last_login, status, address, state, 
          country, designation, projects, performed, tasks, id
        ]
      );
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de l'utilisateur ${id}:`, error);
      throw new Error(`Erreur lors de la mise à jour de l'utilisateur ${id}`);
    }
  }

  /**
   * Supprime un utilisateur
   */
  async delete(id: number): Promise<boolean> {
    try {
      const result = await this.pool.query('DELETE FROM users WHERE id = $1 RETURNING id', [id]);
      return result.rows.length > 0;
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'utilisateur ${id}:`, error);
      throw new Error(`Erreur lors de la suppression de l'utilisateur ${id}`);
    }
  }
}
