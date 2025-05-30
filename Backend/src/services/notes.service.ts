import { Pool } from 'pg';
import { Note } from '../models/entities/notes.entity';
import { db } from '../config/db';

/**
 * Service pour la gestion des notes
 */
export class NotesService {
  private pool: Pool;

  constructor() {
    this.pool = db;
  }

  /**
   * Récupère toutes les notes
   */
  async findAll(): Promise<Note[]> {
    try {
      const result = await this.pool.query('SELECT * FROM notes ORDER BY id');
      return result.rows;
    } catch (error) {
      console.error('Erreur lors de la récupération des notes:', error);
      throw new Error('Erreur lors de la récupération des notes');
    }
  }

  /**
   * Récupère une note par son ID
   */
  async findById(id: number): Promise<Note | null> {
    try {
      const result = await this.pool.query('SELECT * FROM notes WHERE id = $1', [id]);
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la récupération de la note ${id}:`, error);
      throw new Error(`Erreur lors de la récupération de la note ${id}`);
    }
  }

  /**
   * Crée une nouvelle note
   */
  async create(note: Note): Promise<Note> {
    try {
      const { text, date, time, company } = note;
      const result = await this.pool.query(
        'INSERT INTO notes (text, date, time, company) VALUES ($1, $2, $3, $4) RETURNING *',
        [text, date, time, company]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Erreur lors de la création de la note:', error);
      throw new Error('Erreur lors de la création de la note');
    }
  }

  /**
   * Met à jour une note existante
   */
  async update(id: number, note: Note): Promise<Note | null> {
    try {
      const { text, date, time, company } = note;
      const result = await this.pool.query(
        'UPDATE notes SET text = $1, date = $2, time = $3, company = $4 WHERE id = $5 RETURNING *',
        [text, date, time, company, id]
      );
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de la note ${id}:`, error);
      throw new Error(`Erreur lors de la mise à jour de la note ${id}`);
    }
  }

  /**
   * Supprime une note
   */
  async delete(id: number): Promise<boolean> {
    try {
      const result = await this.pool.query('DELETE FROM notes WHERE id = $1 RETURNING id', [id]);
      return result.rows.length > 0;
    } catch (error) {
      console.error(`Erreur lors de la suppression de la note ${id}:`, error);
      throw new Error(`Erreur lors de la suppression de la note ${id}`);
    }
  }
}
