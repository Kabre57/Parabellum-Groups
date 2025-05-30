import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/auth.service";
import { UtilisateurService } from "../services/utilisateur.service"; // <-- À importer obligatoirement

// Instanciation du service utilisateur et injection dans le service d'authentification
const utilisateurService = new UtilisateurService();
const authService = new AuthService(utilisateurService);

// Interface personnalisée pour inclure les infos de l'utilisateur dans la requête
interface AuthenticatedRequest extends Request {
  user?: any; // Idéalement tu peux typer selon ta payload JWT
}

/**
 * Middleware pour vérifier que le token JWT est valide
 */
export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Format attendu : Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: true, message: "Accès non autorisé. Token manquant." });
  }

  try {
    const userData = authService.verifyToken(token);
    req.user = userData; // Stocker les infos du token dans la requête
    next();
  } catch (err: any) {
    return res.status(403).json({ error: true, message: "Token invalide ou expiré." });
  }
};

/**
 * Middleware pour restreindre l'accès selon les rôles autorisés
 */
export const authorizeRoles = (allowedRoles: number[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user || typeof req.user.roleId === "undefined") {
      return res.status(403).json({ error: true, message: "Accès interdit. Rôle utilisateur non défini." });
    }

    if (!allowedRoles.includes(req.user.roleId)) {
      return res.status(403).json({ error: true, message: "Accès interdit. Vous n'avez pas les permissions nécessaires." });
    }

    next();
  };
};
