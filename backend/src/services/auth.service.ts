import bcrypt from "bcryptjs";
import jwt, { SignOptions, Secret, JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import crypto from "crypto";
import { UtilisateurService } from "./utilisateur.service";
import { UtilisateurCreation } from "../models/utilisateur.model";
import { HttpError } from "../middlewares/errorHandler.middleware"; // Assuming this will be created or exists

dotenv.config();

const JWT_SECRET: Secret = process.env.JWT_SECRET || "your-very-strong-secret-key";
const JWT_EXPIRES_IN: string = process.env.JWT_EXPIRES_IN || "1h";
const RESET_TOKEN_EXPIRES_IN_MS = 3600000; // 1 heure en millisecondes

type StringValue = `${number}${"s" | "m" | "h" | "d"}`;

export class AuthService {
  private utilisateurService: UtilisateurService;

  constructor(utilisateurService: UtilisateurService) {
    this.utilisateurService = utilisateurService;
  }

  public async register(userData: UtilisateurCreation): Promise<{
    token: string;
    utilisateur: {
      userId: number;
      roleId?: number;
    };
  }> {
    try {
      const createdUserId = await this.utilisateurService.create(userData);
      if (typeof createdUserId !== 'number') {
        // This case should ideally be handled by an error thrown from utilisateurService.create
        console.error("[AuthService] Erreur: La création de l\"utilisateur n\"a pas retourné un ID numérique valide.");
        throw new HttpError("Erreur lors de la finalisation de l\"inscription.", 500);
      }
      const jwtSignOptions: SignOptions = { expiresIn: JWT_EXPIRES_IN as StringValue };
      const token = jwt.sign(
        { userId: createdUserId, roleId: userData.role_id },
        JWT_SECRET,
        jwtSignOptions
      );
      return {
        token,
        utilisateur: {
          userId: createdUserId,
          roleId: userData.role_id
        }
      };
    } catch (error: any) {
      if (error instanceof HttpError) throw error;
      if (error instanceof Error && error.message === "L\"email existe déjà.") {
        throw new HttpError(error.message, 409);
      }
      console.error("Erreur lors de l\"enregistrement :", error);
      throw new HttpError("Erreur lors de l\"enregistrement de l\"utilisateur.", 500);
    }
  }

  public async login(email: string, mot_de_passe_clair: string): Promise<{
    token: string;
    utilisateur: {
      userId: number;
      nom: string;
      prenom: string;
      email: string; // Added email to the return type
      roleId?: number;
      roleLibelle?: string;
    };
  }> {
    try {
      const utilisateur = await this.utilisateurService.findByEmailWithPassword(email);
      if (!utilisateur) {
        throw new HttpError("Email ou mot de passe incorrect.", 401);
      }
      const isPasswordMatch = await bcrypt.compare(mot_de_passe_clair, utilisateur.mot_de_passe);
      if (!isPasswordMatch) {
        throw new HttpError("Email ou mot de passe incorrect.", 401);
      }
      const jwtSignOptions: SignOptions = { expiresIn: JWT_EXPIRES_IN as StringValue };
      const token = jwt.sign(
        { userId: utilisateur.id, roleId: utilisateur.role_id },
        JWT_SECRET,
        jwtSignOptions
      );
      return {
        token,
        utilisateur: {
          userId: utilisateur.id!,
          nom: utilisateur.nom,
          prenom: utilisateur.prenom,
          email: utilisateur.email, // Added email
          roleId: utilisateur.role_id,
          roleLibelle: utilisateur.role?.libelle
        }
      };
    } catch (error: any) {
      if (error instanceof HttpError) {
        throw error;
      }
      console.error("Erreur lors de la connexion :", error);
      throw new HttpError("Erreur lors de la connexion.", 500);
    }
  }

  public verifyToken(token: string): JwtPayload | null {
    try {
      return jwt.verify(token, JWT_SECRET) as JwtPayload;
    } catch (error) {
      // Log the error for debugging, but throw a generic HttpError
      console.error("[AuthService] Erreur de vérification du token:", error);
      throw new HttpError("Token invalide ou expiré.", 401);
    }
  }

  public async forgotPassword(email: string): Promise<{ resetLink: string | null }> {
    const utilisateur = await this.utilisateurService.findByEmail(email);
    if (!utilisateur || !utilisateur.id) {
      console.warn(`[AuthService] Tentative de réinitialisation pour un email non trouvé: ${email}`);
      // To prevent email enumeration, always return a success-like message to the controller.
      // The controller will then send a generic message to the user.
      // For simulation/testing, we can still return null for the link.
      return { resetLink: null }; 
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpiresAt = new Date(Date.now() + RESET_TOKEN_EXPIRES_IN_MS);

    try {
      await this.utilisateurService.setResetPasswordToken(utilisateur.id, resetToken, resetTokenExpiresAt);
      const resetLink = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/reset-password/${resetToken}`;
      console.log(`[AuthService] Lien de réinitialisation généré pour ${email}: ${resetLink}`);
      return { resetLink };
    } catch (error) {
        console.error("[AuthService] Erreur lors de la configuration du token de réinitialisation:", error);
        // Even if setting token fails, for security, don't reveal specific error to controller if it could leak info.
        // However, this is an internal error, so throwing HttpError is appropriate.
        throw new HttpError("Erreur lors de la génération du lien de réinitialisation.", 500);
    }
  }

  public async resetPassword(token: string, newPassword: string): Promise<void> {
    // Basic password validation (can be enhanced with Zod schema)
    if (!newPassword || newPassword.length < 8) { 
        throw new HttpError("Le nouveau mot de passe doit contenir au moins 8 caractères.", 400);
    }

    const utilisateur = await this.utilisateurService.findByValidResetToken(token);

    if (!utilisateur || !utilisateur.id) {
      throw new HttpError("Token de réinitialisation invalide ou expiré.", 400);
    }
    // No need to hash here, utilisateurService.updatePassword should handle it.
    await this.utilisateurService.updatePassword(utilisateur.id, newPassword);
  }
}

