import { Pool } from 'pg';
import bcrypt from 'bcryptjs';
import { Utilisateur } from '../models/entities/utilisateur.entity';

const SALT_ROUNDS = 10;
const DEFAULT_ROLE_ID = 1; // Rôle par défaut

export class UtilisateurService {
  private db: Pool;

  constructor(db: Pool) {
    this.db = db;
  }

  /**
   * Récupère tous les utilisateurs sans les informations sensibles
   */
  public async getAllUtilisateurs(): Promise<Omit<Utilisateur, 'mot_de_passe' | 'reset_password_token' | 'reset_password_expires_at'>[]> {
    try {
      const result = await this.db.query(`
        SELECT id, theme, name, display_name, dob, email, balance, phone, 
               email_status, kyc_status, last_login, status, address, state, 
               country, designation, projects, performed, tasks, role_id, 
               created_at, updated_at 
        FROM utilisateur
      `);
      
      return result.rows;
    } catch (error) {
      console.error("Erreur lors de la récupération de tous les utilisateurs:", error);
      throw new Error("Erreur lors de la récupération des utilisateurs.");
    }
  }

  /**
   * Récupère un utilisateur par son ID sans les informations sensibles
   */
  public async getUtilisateurById(id: number): Promise<Omit<Utilisateur, 'mot_de_passe' | 'reset_password_token' | 'reset_password_expires_at'> | null> {
    try {
      const result = await this.db.query(`
        SELECT id, theme, name, display_name, dob, email, balance, phone, 
               email_status, kyc_status, last_login, status, address, state, 
               country, designation, projects, performed, tasks, role_id, 
               created_at, updated_at 
        FROM utilisateur 
        WHERE id = $1
      `, [id]);
      
      if (result.rows.length === 0) return null;
      return result.rows[0];
    } catch (error) {
      console.error(`Erreur lors de la récupération de l'utilisateur avec l'ID ${id}:`, error);
      throw new Error("Erreur lors de la récupération de l'utilisateur.");
    }
  }

  /**
   * Recherche un utilisateur par email (usage interne avec données sensibles)
   */
  public async findByEmail(email: string): Promise<Utilisateur | null> {
    try {
      const result = await this.db.query(
        "SELECT * FROM utilisateur WHERE email = $1",
        [email]
      );
      return result.rows.length ? result.rows[0] : null;
    } catch (error) {
      console.error(`Erreur lors de la recherche de l'utilisateur par email ${email}:`, error);
      throw new Error("Erreur lors de la recherche de l'utilisateur par email.");
    }
  }

  /**
   * Crée un nouvel utilisateur
   */
  public async createUtilisateur(utilisateurData: Partial<Utilisateur>): Promise<number> {
    const { 
      theme, name, display_name, dob, email, balance, phone, 
      email_status, kyc_status, last_login, status, address, state, 
      country, designation, projects, performed, tasks, role_id, mot_de_passe 
    } = utilisateurData;

    if (!mot_de_passe || typeof mot_de_passe !== 'string' || mot_de_passe.trim() === '') {
      throw new Error("Le mot de passe est requis et ne peut pas être vide.");
    }

    if (!name || !email) {
      throw new Error("Le nom et l'email sont requis.");
    }

    try {
      const existingUser = await this.findByEmail(email);
      if (existingUser) throw new Error("L'email existe déjà.");
      
      const hashedPassword = await bcrypt.hash(mot_de_passe, SALT_ROUNDS);
      
      const result = await this.db.query(`
        INSERT INTO utilisateur (
          theme, name, display_name, dob, email, balance, phone, 
          email_status, kyc_status, last_login, status, address, state, 
          country, designation, projects, performed, tasks, role_id, mot_de_passe
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20
        ) RETURNING id
      `, [
        theme, name, display_name, dob, email, balance, phone, 
        email_status, kyc_status, last_login, status, address, state, 
        country, designation, projects, performed, tasks, 
        role_id || DEFAULT_ROLE_ID, hashedPassword
      ]);
      
      if (result.rows.length > 0 && result.rows[0].id) return result.rows[0].id;
      throw new Error("Erreur lors de la création de l'utilisateur: ID non retourné.");
    } catch (error) {
      console.error("Erreur lors de la création de l'utilisateur:", error);
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("Erreur interne lors de la création de l'utilisateur.");
    }
  }

  /**
   * Met à jour un utilisateur existant
   */
  public async updateUtilisateur(id: number, utilisateurData: Partial<Utilisateur>): Promise<Omit<Utilisateur, 'mot_de_passe' | 'reset_password_token' | 'reset_password_expires_at'> | null> {
    const { 
      theme, name, display_name, dob, balance, phone, 
      email_status, kyc_status, last_login, status, address, state, 
      country, designation, projects, performed, tasks, role_id, mot_de_passe 
    } = utilisateurData;

    let hashedPassword;
    if (mot_de_passe) {
      if (typeof mot_de_passe !== 'string' || mot_de_passe.trim() === '') {
        throw new Error("Le nouveau mot de passe ne peut pas être vide.");
      }
      hashedPassword = await bcrypt.hash(mot_de_passe, SALT_ROUNDS);
    }

    const fieldsToUpdate: string[] = [];
    const values: any[] = [];
    let placeholderCount = 1;

    // Ajouter tous les champs à mettre à jour
    if (theme !== undefined) {
      fieldsToUpdate.push(`theme = $${placeholderCount++}`);
      values.push(theme);
    }
    if (name !== undefined) {
      fieldsToUpdate.push(`name = $${placeholderCount++}`);
      values.push(name);
    }
    if (display_name !== undefined) {
      fieldsToUpdate.push(`display_name = $${placeholderCount++}`);
      values.push(display_name);
    }
    if (dob !== undefined) {
      fieldsToUpdate.push(`dob = $${placeholderCount++}`);
      values.push(dob);
    }
    if (balance !== undefined) {
      fieldsToUpdate.push(`balance = $${placeholderCount++}`);
      values.push(balance);
    }
    if (phone !== undefined) {
      fieldsToUpdate.push(`phone = $${placeholderCount++}`);
      values.push(phone);
    }
    if (email_status !== undefined) {
      fieldsToUpdate.push(`email_status = $${placeholderCount++}`);
      values.push(email_status);
    }
    if (kyc_status !== undefined) {
      fieldsToUpdate.push(`kyc_status = $${placeholderCount++}`);
      values.push(kyc_status);
    }
    if (last_login !== undefined) {
      fieldsToUpdate.push(`last_login = $${placeholderCount++}`);
      values.push(last_login);
    }
    if (status !== undefined) {
      fieldsToUpdate.push(`status = $${placeholderCount++}`);
      values.push(status);
    }
    if (address !== undefined) {
      fieldsToUpdate.push(`address = $${placeholderCount++}`);
      values.push(address);
    }
    if (state !== undefined) {
      fieldsToUpdate.push(`state = $${placeholderCount++}`);
      values.push(state);
    }
    if (country !== undefined) {
      fieldsToUpdate.push(`country = $${placeholderCount++}`);
      values.push(country);
    }
    if (designation !== undefined) {
      fieldsToUpdate.push(`designation = $${placeholderCount++}`);
      values.push(designation);
    }
    if (projects !== undefined) {
      fieldsToUpdate.push(`projects = $${placeholderCount++}`);
      values.push(projects);
    }
    if (performed !== undefined) {
      fieldsToUpdate.push(`performed = $${placeholderCount++}`);
      values.push(performed);
    }
    if (tasks !== undefined) {
      fieldsToUpdate.push(`tasks = $${placeholderCount++}`);
      values.push(tasks);
    }
    if (role_id !== undefined) {
      fieldsToUpdate.push(`role_id = $${placeholderCount++}`);
      values.push(role_id);
    }
    if (hashedPassword !== undefined) {
      fieldsToUpdate.push(`mot_de_passe = $${placeholderCount++}`);
      values.push(hashedPassword);
    }

    if (fieldsToUpdate.length === 0) return this.getUtilisateurById(id);
    
    values.push(id);
    const query = `
      UPDATE utilisateur 
      SET ${fieldsToUpdate.join(", ")}, updated_at = CURRENT_TIMESTAMP
      WHERE id = $${placeholderCount} 
      RETURNING id, theme, name, display_name, dob, email, balance, phone, 
                email_status, kyc_status, last_login, status, address, state, 
                country, designation, projects, performed, tasks, role_id, 
                created_at, updated_at
    `;

    try {
      const result = await this.db.query(query, values);
      if (result.rowCount === 0) return null;
      return result.rows[0];
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("Erreur interne lors de la mise à jour de l'utilisateur.");
    }
  }

  /**
   * Supprime un utilisateur
   */
  public async deleteUtilisateur(id: number): Promise<boolean> {
    try {
      const result = await this.db.query("DELETE FROM utilisateur WHERE id = $1", [id]);
      return result.rowCount !== null && result.rowCount > 0;
    } catch (error) {
      console.error("Erreur lors de la suppression de l'utilisateur:", error);
      throw new Error("Erreur interne lors de la suppression de l'utilisateur.");
    }
  }

  /**
   * Définit un token de réinitialisation de mot de passe
   */
  public async setResetPasswordToken(userId: number, token: string, expiresAt: Date): Promise<void> {
    try {
      console.log(`[SERVICE UTILISATEUR] Définition du token de réinitialisation pour l'utilisateur ${userId}:`);
      console.log(`  - Token: ${token}`);
      console.log(`  - ExpiresAt: ${expiresAt.toISOString()}`);
      
      await this.db.query(
        "UPDATE utilisateur SET reset_password_token = $1, reset_password_expires_at = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3",
        [token, expiresAt, userId]
      );
    } catch (error) {
      console.error(`Erreur lors de la définition du token de réinitialisation pour l'utilisateur ${userId}:`, error);
      throw new Error("Erreur lors de la mise à jour du token de réinitialisation.");
    }
  }

  /**
   * Recherche un utilisateur par token de réinitialisation valide
   */
  public async findByValidResetToken(token: string): Promise<Utilisateur | null> {
    console.log(`[SERVICE UTILISATEUR] Recherche par token de réinitialisation valide.`);
    console.log(`  - Token reçu: ${token}`);
    console.log(`  - Heure actuelle (UTC): ${new Date().toISOString()}`);
    
    try {
      const result = await this.db.query(
        "SELECT *, reset_password_expires_at AT TIME ZONE 'UTC' as expires_at_utc FROM utilisateur WHERE reset_password_token = $1 AND reset_password_expires_at > NOW()",
        [token]
      );
      
      if (result.rows.length > 0) {
        console.log(`  - Utilisateur trouvé avec le token.`);
        console.log(`    - ID Utilisateur: ${result.rows[0].id}`);
        console.log(`    - Token stocké: ${result.rows[0].reset_password_token}`);
        console.log(`    - Expiration stockée (UTC): ${result.rows[0].expires_at_utc}`);
        console.log(`    - Expiration stockée (Locale DB): ${result.rows[0].reset_password_expires_at}`);
        return result.rows[0];
      } else {
        console.log(`  - Aucun utilisateur trouvé avec ce token ou token expiré.`);
        const checkExpiredOrInvalid = await this.db.query(
          "SELECT *, reset_password_expires_at AT TIME ZONE 'UTC' as expires_at_utc FROM utilisateur WHERE reset_password_token = $1",
          [token]
        );
        
        if (checkExpiredOrInvalid.rows.length > 0) {
          console.log(`    - Token trouvé en base, mais expiré ou condition de date non remplie.`);
          console.log(`    - ID Utilisateur: ${checkExpiredOrInvalid.rows[0].id}`);
          console.log(`    - Token stocké: ${checkExpiredOrInvalid.rows[0].reset_password_token}`);
          console.log(`    - Expiration stockée (UTC): ${checkExpiredOrInvalid.rows[0].expires_at_utc}`);
          console.log(`    - Expiration stockée (Locale DB): ${checkExpiredOrInvalid.rows[0].reset_password_expires_at}`);
        } else {
          console.log(`    - Token non trouvé en base.`);
        }
        return null;
      }
    } catch (error) {
      console.error(`Erreur lors de la recherche par token de réinitialisation valide:`, error);
      throw new Error("Erreur lors de la validation du token de réinitialisation.");
    }
  }

  /**
   * Met à jour le mot de passe d'un utilisateur
   */
  public async updatePassword(userId: number, newPassword: string): Promise<void> {
    if (!newPassword || typeof newPassword !== 'string' || newPassword.trim() === '') {
      console.error("Tentative de mise à jour avec un mot de passe invalide ou manquant.");
      throw new Error("Le nouveau mot de passe est requis et ne peut pas être vide.");
    }
    
    const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);
    
    try {
      console.log(`[SERVICE UTILISATEUR] Mise à jour du mot de passe pour l'utilisateur ${userId}.`);
      
      await this.db.query(
        "UPDATE utilisateur SET mot_de_passe = $1, reset_password_token = NULL, reset_password_expires_at = NULL, updated_at = CURRENT_TIMESTAMP WHERE id = $2",
        [hashedPassword, userId]
      );
      
      console.log(`  - Mot de passe mis à jour et token de réinitialisation effacé pour l'utilisateur ${userId}.`);
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du mot de passe pour l'utilisateur ${userId}:`, error);
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("Erreur lors de la mise à jour du mot de passe.");
    }
  }
}
