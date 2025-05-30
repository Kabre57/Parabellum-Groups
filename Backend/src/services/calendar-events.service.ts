import { Pool } from 'pg';
import { CalendarEvent } from '../models/entities/calendar-events.entity';
import { db } from '../config/db';

/**
 * Service pour la gestion des événements du calendrier
 */
export class CalendarEventsService {
  private pool: Pool;

  constructor() {
    this.pool = db;
  }

  /**
   * Récupère tous les événements du calendrier
   */
  async findAll(): Promise<CalendarEvent[]> {
    try {
      const result = await this.pool.query('SELECT * FROM calendar_events ORDER BY start_date');
      return result.rows;
    } catch (error) {
      console.error('Erreur lors de la récupération des événements du calendrier:', error);
      throw new Error('Erreur lors de la récupération des événements du calendrier');
    }
  }

  /**
   * Récupère un événement du calendrier par son ID
   */
  async findById(id: string): Promise<CalendarEvent | null> {
    try {
      const result = await this.pool.query('SELECT * FROM calendar_events WHERE id = $1', [id]);
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la récupération de l'événement ${id}:`, error);
      throw new Error(`Erreur lors de la récupération de l'événement ${id}`);
    }
  }

  /**
   * Crée un nouvel événement du calendrier
   */
  async create(event: CalendarEvent): Promise<CalendarEvent> {
    try {
      const { id, title, start_date, end_date, class_name, description } = event;
      const result = await this.pool.query(
        'INSERT INTO calendar_events (id, title, start_date, end_date, class_name, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [id, title, start_date, end_date, class_name, description]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Erreur lors de la création de l\'événement:', error);
      throw new Error('Erreur lors de la création de l\'événement');
    }
  }

  /**
   * Met à jour un événement du calendrier existant
   */
  async update(id: string, event: CalendarEvent): Promise<CalendarEvent | null> {
    try {
      const { title, start_date, end_date, class_name, description } = event;
      const result = await this.pool.query(
        'UPDATE calendar_events SET title = $1, start_date = $2, end_date = $3, class_name = $4, description = $5 WHERE id = $6 RETURNING *',
        [title, start_date, end_date, class_name, description, id]
      );
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de l'événement ${id}:`, error);
      throw new Error(`Erreur lors de la mise à jour de l'événement ${id}`);
    }
  }

  /**
   * Supprime un événement du calendrier
   */
  async delete(id: string): Promise<boolean> {
    try {
      const result = await this.pool.query('DELETE FROM calendar_events WHERE id = $1 RETURNING id', [id]);
      return result.rows.length > 0;
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'événement ${id}:`, error);
      throw new Error(`Erreur lors de la suppression de l'événement ${id}`);
    }
  }
}
