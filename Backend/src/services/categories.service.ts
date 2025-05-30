import { Pool } from 'pg';
import { Category } from '../models/entities/categories.entity';
import { db } from '../config/db';

/**
 * Service pour la gestion des catégories
 */
export class CategoriesService {
  private pool: Pool;

  constructor() {
    this.pool = db;
  }

  /**
   * Récupère toutes les catégories
   */
  async findAll(): Promise<Category[]> {
    try {
      const result = await this.pool.query('SELECT * FROM categories ORDER BY id');
      return result.rows;
    } catch (error) {
      console.error('Erreur lors de la récupération des catégories:', error);
      throw new Error('Erreur lors de la récupération des catégories');
    }
  }

  /**
   * Récupère une catégorie par son ID
   */
  async findById(id: number): Promise<Category | null> {
    try {
      const result = await this.pool.query('SELECT * FROM categories WHERE id = $1', [id]);
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la récupération de la catégorie ${id}:`, error);
      throw new Error(`Erreur lors de la récupération de la catégorie ${id}`);
    }
  }

  /**
   * Crée une nouvelle catégorie
   */
  async create(category: Category): Promise<Category> {
    try {
      const { value, label } = category;
      const result = await this.pool.query(
        'INSERT INTO categories (value, label) VALUES ($1, $2) RETURNING *',
        [value, label]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Erreur lors de la création de la catégorie:', error);
      throw new Error('Erreur lors de la création de la catégorie');
    }
  }

  /**
   * Met à jour une catégorie existante
   */
  async update(id: number, category: Category): Promise<Category | null> {
    try {
      const { value, label } = category;
      const result = await this.pool.query(
        'UPDATE categories SET value = $1, label = $2 WHERE id = $3 RETURNING *',
        [value, label, id]
      );
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de la catégorie ${id}:`, error);
      throw new Error(`Erreur lors de la mise à jour de la catégorie ${id}`);
    }
  }

  /**
   * Supprime une catégorie
   */
  async delete(id: number): Promise<boolean> {
    try {
      const result = await this.pool.query('DELETE FROM categories WHERE id = $1 RETURNING id', [id]);
      return result.rows.length > 0;
    } catch (error) {
      console.error(`Erreur lors de la suppression de la catégorie ${id}:`, error);
      throw new Error(`Erreur lors de la suppression de la catégorie ${id}`);
    }
  }
}
