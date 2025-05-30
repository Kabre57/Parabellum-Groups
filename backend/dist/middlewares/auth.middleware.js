"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeRoles = exports.authenticateToken = void 0;
const auth_service_1 = require("../services/auth.service");
const utilisateur_service_1 = require("../services/utilisateur.service"); // <-- À importer obligatoirement
// Instanciation du service utilisateur et injection dans le service d'authentification
const utilisateurService = new utilisateur_service_1.UtilisateurService();
const authService = new auth_service_1.AuthService(utilisateurService);
/**
 * Middleware pour vérifier que le token JWT est valide
 */
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Format attendu : Bearer TOKEN
    if (!token) {
        return res.status(401).json({ error: true, message: "Accès non autorisé. Token manquant." });
    }
    try {
        const userData = authService.verifyToken(token);
        req.user = userData; // Stocker les infos du token dans la requête
        next();
    }
    catch (err) {
        return res.status(403).json({ error: true, message: "Token invalide ou expiré." });
    }
};
exports.authenticateToken = authenticateToken;
/**
 * Middleware pour restreindre l'accès selon les rôles autorisés
 */
const authorizeRoles = (allowedRoles) => {
    return (req, res, next) => {
        if (!req.user || typeof req.user.roleId === "undefined") {
            return res.status(403).json({ error: true, message: "Accès interdit. Rôle utilisateur non défini." });
        }
        if (!allowedRoles.includes(req.user.roleId)) {
            return res.status(403).json({ error: true, message: "Accès interdit. Vous n'avez pas les permissions nécessaires." });
        }
        next();
    };
};
exports.authorizeRoles = authorizeRoles;
//# sourceMappingURL=auth.middleware.js.map