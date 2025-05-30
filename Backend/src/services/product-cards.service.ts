import { Pool } from 'pg';
import { ProductCard } from '../models/entities/product-cards.entity';
import { db } from '../config/db';

/**
 * Service pour la gestion des cartes produits
 */
export class ProductCardsService {
  private pool: Pool;

  constructor() {
    this.pool = db;
  }

  /**
   * Récupère toutes les cartes produits
   */
  async findAll(): Promise<ProductCard[]> {
    try {
      const result = await this.pool.query('SELECT * FROM product_cards ORDER BY id');
      return result.rows;
    } catch (error) {
      console.error('Erreur lors de la récupération des cartes produits:', error);
      throw new Error('Erreur lors de la récupération des cartes produits');
    }
  }

  /**
   * Récupère une carte produit par son ID
   */
  async findById(id: number): Promise<ProductCard | null> {
    try {
      const result = await this.pool.query('SELECT * FROM product_cards WHERE id = $1', [id]);
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la récupération de la carte produit ${id}:`, error);
      throw new Error(`Erreur lors de la récupération de la carte produit ${id}`);
    }
  }

  /**
   * Crée une nouvelle carte produit
   */
  async create(productCard: ProductCard): Promise<ProductCard> {
    try {
      const { new: isNew, hot, slider, category, title, type, model_number, price, current_price } = productCard;
      const result = await this.pool.query(
        'INSERT INTO product_cards (new, hot, slider, category, title, type, model_number, price, current_price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
        [isNew, hot, slider, category, title, type, model_number, price, current_price]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Erreur lors de la création de la carte produit:', error);
      throw new Error('Erreur lors de la création de la carte produit');
    }
  }

  /**
   * Met à jour une carte produit existante
   */
  async update(id: number, productCard: ProductCard): Promise<ProductCard | null> {
    try {
      const { new: isNew, hot, slider, category, title, type, model_number, price, current_price } = productCard;
      const result = await this.pool.query(
        'UPDATE product_cards SET new = $1, hot = $2, slider = $3, category = $4, title = $5, type = $6, model_number = $7, price = $8, current_price = $9 WHERE id = $10 RETURNING *',
        [isNew, hot, slider, category, title, type, model_number, price, current_price, id]
      );
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de la carte produit ${id}:`, error);
      throw new Error(`Erreur lors de la mise à jour de la carte produit ${id}`);
    }
  }

  /**
   * Supprime une carte produit
   */
  async delete(id: number): Promise<boolean> {
    try {
      const result = await this.pool.query('DELETE FROM product_cards WHERE id = $1 RETURNING id', [id]);
      return result.rows.length > 0;
    } catch (error) {
      console.error(`Erreur lors de la suppression de la carte produit ${id}:`, error);
      throw new Error(`Erreur lors de la suppression de la carte produit ${id}`);
    }
  }
}
