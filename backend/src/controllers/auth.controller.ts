import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { UtilisateurService } from "../services/utilisateur.service";
import { UtilisateurSchema } from "../models/validation.schemas";
import { ILoginRequestBody } from "../models/auth.model";
import { verifyToken } from "../utils/jwt.utils"; // Assuming this will be created

const utilisateurService = new UtilisateurService();
const authService = new AuthService(utilisateurService); // Pass utilisateurService instance

export class AuthController {
  public async register(req: Request, res: Response): Promise<void> {
    try {
      const validationResult = UtilisateurSchema.safeParse(req.body);
      if (!validationResult.success) {
        const formattedErrors = validationResult.error.format();
        res.status(400).json({
          error: true,
          message: "Données d'inscription invalides.",
          details: formattedErrors,
        });
        return;
      }

      const { nom, prenom, email, mot_de_passe, role_id } = validationResult.data;
      // AuthService.register now returns an object { token, utilisateur: { userId, roleId} }
      // The controller was expecting only the ID. This needs to be adjusted if we want to keep the new service signature.
      // For now, let's assume the service's register method is what we want to use.
      const registrationResult = await authService.register({ nom, prenom, email, mot_de_passe, role_id });

      // Récupérer les informations de l'utilisateur créé (sans le mot de passe) pour la réponse
      // The registrationResult.utilisateur already contains userId and roleId.
      // If we need more details, we fetch, otherwise, we can adapt.
      // The service's register method was changed to return {token, utilisateur: {userId, roleId}}
      // The controller previously expected nouvelUtilisateurId to be just the ID.
      // Let's get the full user details for the response as it was before.
      const utilisateurCree = await utilisateurService.getById(registrationResult.utilisateur.userId);
      if (!utilisateurCree) {
        console.error("[AuthController] Erreur: Utilisateur non trouvé après création avec ID:", registrationResult.utilisateur.userId);
        res.status(500).json({
          error: true,
          message: "Erreur lors de la récupération des informations utilisateur après inscription.",
        });
        return;
      }

      res.status(201).json({
        message: "Inscription réussie. Vous pouvez maintenant vous connecter.",
        token: registrationResult.token, // Send token back
        utilisateur: utilisateurCree, // Send full user details (without password)
      });

    } catch (error: any) {
      console.error("[AuthController] Erreur lors de l'inscription:", error.message, error.stack);
      if (error.message === "L'email existe déjà.") {
        res.status(409).json({ error: true, message: "Cet email est déjà utilisé. Veuillez en choisir un autre ou vous connecter." });
      } else if (error.message === "Le mot de passe est requis et ne peut pas être vide.") {
        res.status(400).json({ error: true, message: "Le mot de passe est requis et ne doit pas être vide." });
      } else if (error.message === "Erreur lors de la création de l'utilisateur: ID non retourné.") {
        res.status(500).json({ error: true, message: "Une erreur s'est produite lors de la finalisation de votre inscription. Veuillez réessayer." });
      } else if (error.message === "Erreur interne lors de la création de l'utilisateur.") {
        res.status(500).json({ error: true, message: "Une erreur interne est survenue lors de l'inscription. Veuillez contacter le support si le problème persiste." });
      }
      else {
        res.status(500).json({ error: true, message: "Une erreur inattendue est survenue lors de l'inscription. Veuillez réessayer." });
      }
    }
  }

  public async login(req: Request<{}, {}, ILoginRequestBody>, res: Response): Promise<void> {
    try {
      const { email, mot_de_passe } = req.body;
      if (!email || !mot_de_passe) {
        // Log si l'email ou le mot de passe est manquant après le parsing
        console.error("[AuthController] Missing email or password in parsed body:", { email, mot_de_passe });
        res.status(400).json({ error: true, message: "Email et mot de passe sont requis." });
        return;
      }

      const result = await authService.login(email, mot_de_passe);

      if (result) {
        const { token, utilisateur } = result;
        // The utilisateur object from authService.login is already shaped correctly
        res.status(200).json({ message: "Connexion réussie.", token, utilisateur });
      } else {
        // Ce cas ne devrait pas être atteint si authService.login lève une erreur pour les identifiants incorrects
        console.error("[AuthController] authService.login returned null/undefined unexpectedly.");
        res.status(401).json({ error: true, message: "Échec de la connexion. Vérifiez vos identifiants." });
      }
    } catch (error: any) {
      console.error("[AuthController] Erreur de connexion:", error.message);
      if (error.message === "Email ou mot de passe incorrect." || error.message === "Email non trouvé." || error.message === "Mot de passe incorrect.") {
        res.status(401).json({ error: true, message: "Identifiants incorrects. Veuillez vérifier votre email et mot de passe." });
      } else {
        res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur lors de la connexion." });
      }
    }
  }

  public async verifyAuth(req: Request, res: Response): Promise<void> {
    const token = req.headers.authorization?.split(" ")?.[1];
    if (!token) {
      res.status(401).json({ isAuthenticated: false, message: "Token non fourni." });
      return;
    }
    try {
      const decoded = authService.verifyToken(token); // Use authService.verifyToken
      if (!decoded || typeof decoded === 'string' || !decoded.userId) { // Check if decoded is valid JwtPayload
        res.status(401).json({ isAuthenticated: false, message: "Token invalide ou expiré." });
        return;
      }
      const utilisateur = await utilisateurService.getById(decoded.userId as number);
      if (!utilisateur) {
        res.status(404).json({ isAuthenticated: false, message: "Utilisateur associé au token non trouvé." });
        return;
      }
      res.status(200).json({ isAuthenticated: true, utilisateur });
    } catch (error) {
      res.status(401).json({ isAuthenticated: false, message: "Token invalide ou expiré." });
    }
  }

  public async forgotPassword(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.body;
      if (!email) {
        res.status(400).json({ error: true, message: "L'adresse email est requise." });
        return;
      }
      // Use the renamed method in authService
      await authService.forgotPassword(email);
      res.status(200).json({ message: "Si un compte avec cet email existe, un email de réinitialisation de mot de passe a été envoyé." });
    } catch (error: any) {
      console.error("[AuthController] Erreur lors de la demande de mot de passe oublié:", error.message);
      if (error.message === "Aucun utilisateur trouvé avec cet e-mail.") {
         console.warn(`[AuthController] Tentative de réinitialisation pour email non trouvé: ${req.body.email}`);
      }
      // Toujours renvoyer un message générique pour éviter l'énumération d'emails
      res.status(200).json({ message: "Si un compte avec cet email existe, un email de réinitialisation de mot de passe a été envoyé." });
    }
  }

  public async resetPassword(req: Request, res: Response): Promise<void> {
    try {
      const { token } = req.params;
      const { newPassword } = req.body;

      if (!newPassword) {
        res.status(400).json({ error: true, message: "Le nouveau mot de passe est requis." });
        return;
      }
      // Use the renamed method in authService
      await authService.resetPassword(token, newPassword);
      res.status(200).json({ message: "Votre mot de passe a été réinitialisé avec succès." });
    } catch (error: any) {
      console.error("[AuthController] Erreur lors de la réinitialisation du mot de passe:", error.message, error.stack);
      if (error.message === "Token de réinitialisation invalide ou expiré." || error.message === "Token invalide ou expiré." || error.message === "Utilisateur non trouvé pour ce token.") {
        res.status(400).json({ error: true, message: "Le lien de réinitialisation est invalide ou a expiré. Veuillez refaire une demande." });
      } else if (error.message === "Le nouveau mot de passe est requis et ne peut pas être vide." || error.message === "Le nouveau mot de passe doit contenir au moins 6 caractères.") {
        res.status(400).json({ error: true, message: error.message });
      } else {
        res.status(500).json({ error: true, message: "Une erreur interne est survenue lors de la réinitialisation du mot de passe." });
      }
    }
  }
}

