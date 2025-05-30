import { Pool } from 'pg';
import { Project } from '../models/entities/projects.entity';
import { db } from '../config/db';

/**
 * Service pour la gestion des projets
 */
export class ProjectsService {
  private pool: Pool;

  constructor() {
    this.pool = db;
  }

  /**
   * Récupère tous les projets
   */
  async findAll(): Promise<Project[]> {
    try {
      const result = await this.pool.query('SELECT * FROM projects ORDER BY id');
      return result.rows;
    } catch (error) {
      console.error('Erreur lors de la récupération des projets:', error);
      throw new Error('Erreur lors de la récupération des projets');
    }
  }

  /**
   * Récupère un projet par son ID
   */
  async findById(id: string): Promise<Project | null> {
    try {
      const result = await this.pool.query('SELECT * FROM projects WHERE id = $1', [id]);
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la récupération du projet ${id}:`, error);
      throw new Error(`Erreur lors de la récupération du projet ${id}`);
    }
  }

  /**
   * Crée un nouveau projet
   */
  async create(project: Project): Promise<Project> {
    try {
      const { id, title, theme, client, description, tasks, progress, team, team_lead, team_count, status } = project;
      const result = await this.pool.query(
        'INSERT INTO projects (id, title, theme, client, description, tasks, progress, team, team_lead, team_count, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
        [id, title, theme, client, description, tasks, progress, team, team_lead, team_count, status]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Erreur lors de la création du projet:', error);
      throw new Error('Erreur lors de la création du projet');
    }
  }

  /**
   * Met à jour un projet existant
   */
  async update(id: string, project: Project): Promise<Project | null> {
    try {
      const { title, theme, client, description, tasks, progress, team, team_lead, team_count, status } = project;
      const result = await this.pool.query(
        'UPDATE projects SET title = $1, theme = $2, client = $3, description = $4, tasks = $5, progress = $6, team = $7, team_lead = $8, team_count = $9, status = $10 WHERE id = $11 RETURNING *',
        [title, theme, client, description, tasks, progress, team, team_lead, team_count, status, id]
      );
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du projet ${id}:`, error);
      throw new Error(`Erreur lors de la mise à jour du projet ${id}`);
    }
  }

  /**
   * Supprime un projet
   */
  async delete(id: string): Promise<boolean> {
    try {
      const result = await this.pool.query('DELETE FROM projects WHERE id = $1 RETURNING id', [id]);
      return result.rows.length > 0;
    } catch (error) {
      console.error(`Erreur lors de la suppression du projet ${id}:`, error);
      throw new Error(`Erreur lors de la suppression du projet ${id}`);
    }
  }
}
