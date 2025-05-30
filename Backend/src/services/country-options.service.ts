import { Pool } from 'pg';
import { CountryOption } from '../models/entities/country-options.entity';
import { db } from '../config/db';

/**
 * Service pour la gestion des options de pays
 */
export class CountryOptionsService {
  private pool: Pool;

  constructor() {
    this.pool = db;
  }

  /**
   * Récupère toutes les options de pays
   */
  async findAll(): Promise<CountryOption[]> {
    try {
      const result = await this.pool.query('SELECT * FROM country_options ORDER BY id');
      return result.rows;
    } catch (error) {
      console.error('Erreur lors de la récupération des options de pays:', error);
      throw new Error('Erreur lors de la récupération des options de pays');
    }
  }

  /**
   * Récupère une option de pays par son ID
   */
  async findById(id: number): Promise<CountryOption | null> {
    try {
      const result = await this.pool.query('SELECT * FROM country_options WHERE id = $1', [id]);
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la récupération de l'option de pays ${id}:`, error);
      throw new Error(`Erreur lors de la récupération de l'option de pays ${id}`);
    }
  }

  /**
   * Crée une nouvelle option de pays
   */
  async create(countryOption: CountryOption): Promise<CountryOption> {
    try {
      const { value, label } = countryOption;
      const result = await this.pool.query(
        'INSERT INTO country_options (value, label) VALUES ($1, $2) RETURNING *',
        [value, label]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Erreur lors de la création de l\'option de pays:', error);
      throw new Error('Erreur lors de la création de l\'option de pays');
    }
  }

  /**
   * Met à jour une option de pays existante
   */
  async update(id: number, countryOption: CountryOption): Promise<CountryOption | null> {
    try {
      const { value, label } = countryOption;
      const result = await this.pool.query(
        'UPDATE country_options SET value = $1, label = $2 WHERE id = $3 RETURNING *',
        [value, label, id]
      );
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de l'option de pays ${id}:`, error);
      throw new Error(`Erreur lors de la mise à jour de l'option de pays ${id}`);
    }
  }

  /**
   * Supprime une option de pays
   */
  async delete(id: number): Promise<boolean> {
    try {
      const result = await this.pool.query('DELETE FROM country_options WHERE id = $1 RETURNING id', [id]);
      return result.rows.length > 0;
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'option de pays ${id}:`, error);
      throw new Error(`Erreur lors de la suppression de l'option de pays ${id}`);
    }
  }
}
