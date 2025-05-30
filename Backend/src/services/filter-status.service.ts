import { Pool } from 'pg';
import { FilterStatus } from '../models/entities/filter-status.entity';
import { db } from '../config/db';

/**
 * Service pour la gestion des statuts de filtre
 */
export class FilterStatusService {
  private pool: Pool;

  constructor() {
    this.pool = db;
  }

  /**
   * Récupère tous les statuts de filtre
   */
  async findAll(): Promise<FilterStatus[]> {
    try {
      const result = await this.pool.query('SELECT * FROM filter_status ORDER BY id');
      return result.rows;
    } catch (error) {
      console.error('Erreur lors de la récupération des statuts de filtre:', error);
      throw new Error('Erreur lors de la récupération des statuts de filtre');
    }
  }

  /**
   * Récupère un statut de filtre par son ID
   */
  async findById(id: number): Promise<FilterStatus | null> {
    try {
      const result = await this.pool.query('SELECT * FROM filter_status WHERE id = $1', [id]);
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la récupération du statut de filtre ${id}:`, error);
      throw new Error(`Erreur lors de la récupération du statut de filtre ${id}`);
    }
  }

  /**
   * Crée un nouveau statut de filtre
   */
  async create(filterStatus: FilterStatus): Promise<FilterStatus> {
    try {
      const { value, label } = filterStatus;
      const result = await this.pool.query(
        'INSERT INTO filter_status (value, label) VALUES ($1, $2) RETURNING *',
        [value, label]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Erreur lors de la création du statut de filtre:', error);
      throw new Error('Erreur lors de la création du statut de filtre');
    }
  }

  /**
   * Met à jour un statut de filtre existant
   */
  async update(id: number, filterStatus: FilterStatus): Promise<FilterStatus | null> {
    try {
      const { value, label } = filterStatus;
      const result = await this.pool.query(
        'UPDATE filter_status SET value = $1, label = $2 WHERE id = $3 RETURNING *',
        [value, label, id]
      );
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du statut de filtre ${id}:`, error);
      throw new Error(`Erreur lors de la mise à jour du statut de filtre ${id}`);
    }
  }

  /**
   * Supprime un statut de filtre
   */
  async delete(id: number): Promise<boolean> {
    try {
      const result = await this.pool.query('DELETE FROM filter_status WHERE id = $1 RETURNING id', [id]);
      return result.rows.length > 0;
    } catch (error) {
      console.error(`Erreur lors de la suppression du statut de filtre ${id}:`, error);
      throw new Error(`Erreur lors de la suppression du statut de filtre ${id}`);
    }
  }
}
