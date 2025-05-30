import { Pool } from 'pg';
import { ChatFavorite } from '../models/entities/chat-favorites.entity';
import { db } from '../config/db';

/**
 * Service pour la gestion des favoris de chat
 */
export class ChatFavoritesService {
  private pool: Pool;

  constructor() {
    this.pool = db;
  }

  /**
   * Récupère tous les favoris de chat
   */
  async findAll(): Promise<ChatFavorite[]> {
    try {
      const result = await this.pool.query('SELECT * FROM chat_favorites ORDER BY id');
      return result.rows;
    } catch (error) {
      console.error('Erreur lors de la récupération des favoris de chat:', error);
      throw new Error('Erreur lors de la récupération des favoris de chat');
    }
  }

  /**
   * Récupère un favori de chat par son ID
   */
  async findById(id: number): Promise<ChatFavorite | null> {
    try {
      const result = await this.pool.query('SELECT * FROM chat_favorites WHERE id = $1', [id]);
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la récupération du favori de chat ${id}:`, error);
      throw new Error(`Erreur lors de la récupération du favori de chat ${id}`);
    }
  }

  /**
   * Crée un nouveau favori de chat
   */
  async create(favorite: ChatFavorite): Promise<ChatFavorite> {
    try {
      const { name, theme, image } = favorite;
      const result = await this.pool.query(
        'INSERT INTO chat_favorites (name, theme, image) VALUES ($1, $2, $3) RETURNING *',
        [name, theme, image]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Erreur lors de la création du favori de chat:', error);
      throw new Error('Erreur lors de la création du favori de chat');
    }
  }

  /**
   * Met à jour un favori de chat existant
   */
  async update(id: number, favorite: ChatFavorite): Promise<ChatFavorite | null> {
    try {
      const { name, theme, image } = favorite;
      const result = await this.pool.query(
        'UPDATE chat_favorites SET name = $1, theme = $2, image = $3 WHERE id = $4 RETURNING *',
        [name, theme, image, id]
      );
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du favori de chat ${id}:`, error);
      throw new Error(`Erreur lors de la mise à jour du favori de chat ${id}`);
    }
  }

  /**
   * Supprime un favori de chat
   */
  async delete(id: number): Promise<boolean> {
    try {
      const result = await this.pool.query('DELETE FROM chat_favorites WHERE id = $1 RETURNING id', [id]);
      return result.rows.length > 0;
    } catch (error) {
      console.error(`Erreur lors de la suppression du favori de chat ${id}:`, error);
      throw new Error(`Erreur lors de la suppression du favori de chat ${id}`);
    }
  }
}
