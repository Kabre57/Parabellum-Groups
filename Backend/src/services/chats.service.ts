import { Pool } from 'pg';
import { Chat } from '../models/entities/chats.entity';
import { db } from '../config/db';

/**
 * Service pour la gestion des chats
 */
export class ChatsService {
  private pool: Pool;

  constructor() {
    this.pool = db;
  }

  /**
   * Récupère tous les chats
   */
  async findAll(): Promise<Chat[]> {
    try {
      const result = await this.pool.query('SELECT * FROM chats ORDER BY id');
      return result.rows;
    } catch (error) {
      console.error('Erreur lors de la récupération des chats:', error);
      throw new Error('Erreur lors de la récupération des chats');
    }
  }

  /**
   * Récupère un chat par son ID
   */
  async findById(id: number): Promise<Chat | null> {
    try {
      const result = await this.pool.query('SELECT * FROM chats WHERE id = $1', [id]);
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la récupération du chat ${id}:`, error);
      throw new Error(`Erreur lors de la récupération du chat ${id}`);
    }
  }

  /**
   * Crée un nouveau chat
   */
  async create(chat: Chat): Promise<Chat> {
    try {
      const { name, nickname, theme, chat_theme, fav, last_online, date, online, last_status, messages, chat_group, user } = chat;
      const result = await this.pool.query(
        'INSERT INTO chats (name, nickname, theme, chat_theme, fav, last_online, date, online, last_status, messages, chat_group, user) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *',
        [name, nickname, theme, chat_theme, fav, last_online, date, online, last_status, messages, chat_group, user]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Erreur lors de la création du chat:', error);
      throw new Error('Erreur lors de la création du chat');
    }
  }

  /**
   * Met à jour un chat existant
   */
  async update(id: number, chat: Chat): Promise<Chat | null> {
    try {
      const { name, nickname, theme, chat_theme, fav, last_online, date, online, last_status, messages, chat_group, user } = chat;
      const result = await this.pool.query(
        'UPDATE chats SET name = $1, nickname = $2, theme = $3, chat_theme = $4, fav = $5, last_online = $6, date = $7, online = $8, last_status = $9, messages = $10, chat_group = $11, user = $12 WHERE id = $13 RETURNING *',
        [name, nickname, theme, chat_theme, fav, last_online, date, online, last_status, messages, chat_group, user, id]
      );
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du chat ${id}:`, error);
      throw new Error(`Erreur lors de la mise à jour du chat ${id}`);
    }
  }

  /**
   * Supprime un chat
   */
  async delete(id: number): Promise<boolean> {
    try {
      const result = await this.pool.query('DELETE FROM chats WHERE id = $1 RETURNING id', [id]);
      return result.rows.length > 0;
    } catch (error) {
      console.error(`Erreur lors de la suppression du chat ${id}:`, error);
      throw new Error(`Erreur lors de la suppression du chat ${id}`);
    }
  }
}
