import { Pool } from 'pg';
import { FilterRole } from '../models/entities/filter-role.entity';
import { db } from '../config/db';

/**
 * Service pour la gestion des rôles de filtre
 */
export class FilterRoleService {
  private pool: Pool;

  constructor() {
    this.pool = db;
  }

  /**
   * Récupère tous les rôles de filtre
   */
  async findAll(): Promise<FilterRole[]> {
    try {
      const result = await this.pool.query('SELECT * FROM filter_role ORDER BY id');
      return result.rows;
    } catch (error) {
      console.error('Erreur lors de la récupération des rôles de filtre:', error);
      throw new Error('Erreur lors de la récupération des rôles de filtre');
    }
  }

  /**
   * Récupère un rôle de filtre par son ID
   */
  async findById(id: number): Promise<FilterRole | null> {
    try {
      const result = await this.pool.query('SELECT * FROM filter_role WHERE id = $1', [id]);
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la récupération du rôle de filtre ${id}:`, error);
      throw new Error(`Erreur lors de la récupération du rôle de filtre ${id}`);
    }
  }

  /**
   * Crée un nouveau rôle de filtre
   */
  async create(filterRole: FilterRole): Promise<FilterRole> {
    try {
      const { value, label } = filterRole;
      const result = await this.pool.query(
        'INSERT INTO filter_role (value, label) VALUES ($1, $2) RETURNING *',
        [value, label]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Erreur lors de la création du rôle de filtre:', error);
      throw new Error('Erreur lors de la création du rôle de filtre');
    }
  }

  /**
   * Met à jour un rôle de filtre existant
   */
  async update(id: number, filterRole: FilterRole): Promise<FilterRole | null> {
    try {
      const { value, label } = filterRole;
      const result = await this.pool.query(
        'UPDATE filter_role SET value = $1, label = $2 WHERE id = $3 RETURNING *',
        [value, label, id]
      );
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du rôle de filtre ${id}:`, error);
      throw new Error(`Erreur lors de la mise à jour du rôle de filtre ${id}`);
    }
  }

  /**
   * Supprime un rôle de filtre
   */
  async delete(id: number): Promise<boolean> {
    try {
      const result = await this.pool.query('DELETE FROM filter_role WHERE id = $1 RETURNING id', [id]);
      return result.rows.length > 0;
    } catch (error) {
      console.error(`Erreur lors de la suppression du rôle de filtre ${id}:`, error);
      throw new Error(`Erreur lors de la suppression du rôle de filtre ${id}`);
    }
  }
}
