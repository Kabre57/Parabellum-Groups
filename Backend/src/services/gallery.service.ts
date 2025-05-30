import { Pool } from 'pg';
import { Gallery } from '../models/entities/gallery.entity';
import { db } from '../config/db';

/**
 * Service pour la gestion de la galerie
 */
export class GalleryService {
  private pool: Pool;

  constructor() {
    this.pool = db;
  }

  /**
   * Récupère tous les éléments de la galerie
   */
  async findAll(): Promise<Gallery[]> {
    try {
      const result = await this.pool.query('SELECT * FROM gallery ORDER BY id');
      return result.rows;
    } catch (error) {
      console.error('Erreur lors de la récupération des éléments de la galerie:', error);
      throw new Error('Erreur lors de la récupération des éléments de la galerie');
    }
  }

  /**
   * Récupère un élément de la galerie par son ID
   */
  async findById(id: number): Promise<Gallery | null> {
    try {
      const result = await this.pool.query('SELECT * FROM gallery WHERE id = $1', [id]);
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la récupération de l'élément de galerie ${id}:`, error);
      throw new Error(`Erreur lors de la récupération de l'élément de galerie ${id}`);
    }
  }

  /**
   * Crée un nouvel élément de galerie
   */
  async create(galleryItem: Gallery): Promise<Gallery> {
    try {
      const { user_name, user_email, theme, heart } = galleryItem;
      const result = await this.pool.query(
        'INSERT INTO gallery (user_name, user_email, theme, heart) VALUES ($1, $2, $3, $4) RETURNING *',
        [user_name, user_email, theme, heart]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Erreur lors de la création de l\'élément de galerie:', error);
      throw new Error('Erreur lors de la création de l\'élément de galerie');
    }
  }

  /**
   * Met à jour un élément de galerie existant
   */
  async update(id: number, galleryItem: Gallery): Promise<Gallery | null> {
    try {
      const { user_name, user_email, theme, heart } = galleryItem;
      const result = await this.pool.query(
        'UPDATE gallery SET user_name = $1, user_email = $2, theme = $3, heart = $4 WHERE id = $5 RETURNING *',
        [user_name, user_email, theme, heart, id]
      );
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de l'élément de galerie ${id}:`, error);
      throw new Error(`Erreur lors de la mise à jour de l'élément de galerie ${id}`);
    }
  }

  /**
   * Supprime un élément de galerie
   */
  async delete(id: number): Promise<boolean> {
    try {
      const result = await this.pool.query('DELETE FROM gallery WHERE id = $1 RETURNING id', [id]);
      return result.rows.length > 0;
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'élément de galerie ${id}:`, error);
      throw new Error(`Erreur lors de la suppression de l'élément de galerie ${id}`);
    }
  }
}
