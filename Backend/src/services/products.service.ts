import { Pool } from 'pg';
import { Product } from '../models/entities/products.entity';
import { db } from '../config/db';

/**
 * Service pour la gestion des produits
 */
export class ProductsService {
  private pool: Pool;

  constructor() {
    this.pool = db;
  }

  /**
   * Récupère tous les produits
   */
  async findAll(): Promise<Product[]> {
    try {
      const result = await this.pool.query('SELECT * FROM products ORDER BY id');
      return result.rows;
    } catch (error) {
      console.error('Erreur lors de la récupération des produits:', error);
      throw new Error('Erreur lors de la récupération des produits');
    }
  }

  /**
   * Récupère un produit par son ID
   */
  async findById(id: number): Promise<Product | null> {
    try {
      const result = await this.pool.query('SELECT * FROM products WHERE id = $1', [id]);
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la récupération du produit ${id}:`, error);
      throw new Error(`Erreur lors de la récupération du produit ${id}`);
    }
  }

  /**
   * Crée un nouveau produit
   */
  async create(product: Product): Promise<Product> {
    try {
      const { name, sku, price, stock, category, fav, check } = product;
      const result = await this.pool.query(
        'INSERT INTO products (name, sku, price, stock, category, fav, check) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [name, sku, price, stock, category, fav, check]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Erreur lors de la création du produit:', error);
      throw new Error('Erreur lors de la création du produit');
    }
  }

  /**
   * Met à jour un produit existant
   */
  async update(id: number, product: Product): Promise<Product | null> {
    try {
      const { name, sku, price, stock, category, fav, check } = product;
      const result = await this.pool.query(
        'UPDATE products SET name = $1, sku = $2, price = $3, stock = $4, category = $5, fav = $6, check = $7 WHERE id = $8 RETURNING *',
        [name, sku, price, stock, category, fav, check, id]
      );
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du produit ${id}:`, error);
      throw new Error(`Erreur lors de la mise à jour du produit ${id}`);
    }
  }

  /**
   * Supprime un produit
   */
  async delete(id: number): Promise<boolean> {
    try {
      const result = await this.pool.query('DELETE FROM products WHERE id = $1 RETURNING id', [id]);
      return result.rows.length > 0;
    } catch (error) {
      console.error(`Erreur lors de la suppression du produit ${id}:`, error);
      throw new Error(`Erreur lors de la suppression du produit ${id}`);
    }
  }
}
