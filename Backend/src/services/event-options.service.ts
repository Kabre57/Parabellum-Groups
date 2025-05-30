import { Pool } from 'pg';
import { EventOption } from '../models/entities/event-options.entity';
import { db } from '../config/db';

/**
 * Service pour la gestion des options d'événements
 */
export class EventOptionsService {
  private pool: Pool;

  constructor() {
    this.pool = db;
  }

  /**
   * Récupère toutes les options d'événements
   */
  async findAll(): Promise<EventOption[]> {
    try {
      const result = await this.pool.query('SELECT * FROM event_options ORDER BY id');
      return result.rows;
    } catch (error) {
      console.error('Erreur lors de la récupération des options d\'événements:', error);
      throw new Error('Erreur lors de la récupération des options d\'événements');
    }
  }

  /**
   * Récupère une option d'événement par son ID
   */
  async findById(id: number): Promise<EventOption | null> {
    try {
      const result = await this.pool.query('SELECT * FROM event_options WHERE id = $1', [id]);
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la récupération de l'option d'événement ${id}:`, error);
      throw new Error(`Erreur lors de la récupération de l'option d'événement ${id}`);
    }
  }

  /**
   * Crée une nouvelle option d'événement
   */
  async create(option: EventOption): Promise<EventOption> {
    try {
      const { value, label } = option;
      const result = await this.pool.query(
        'INSERT INTO event_options (value, label) VALUES ($1, $2) RETURNING *',
        [value, label]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Erreur lors de la création de l\'option d\'événement:', error);
      throw new Error('Erreur lors de la création de l\'option d\'événement');
    }
  }

  /**
   * Met à jour une option d'événement existante
   */
  async update(id: number, option: EventOption): Promise<EventOption | null> {
    try {
      const { value, label } = option;
      const result = await this.pool.query(
        'UPDATE event_options SET value = $1, label = $2 WHERE id = $3 RETURNING *',
        [value, label, id]
      );
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de l'option d'événement ${id}:`, error);
      throw new Error(`Erreur lors de la mise à jour de l'option d'événement ${id}`);
    }
  }

  /**
   * Supprime une option d'événement
   */
  async delete(id: number): Promise<boolean> {
    try {
      const result = await this.pool.query('DELETE FROM event_options WHERE id = $1 RETURNING id', [id]);
      return result.rows.length > 0;
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'option d'événement ${id}:`, error);
      throw new Error(`Erreur lors de la suppression de l'option d'événement ${id}`);
    }
  }
}
