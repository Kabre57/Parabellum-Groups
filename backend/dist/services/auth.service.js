"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const crypto_1 = __importDefault(require("crypto"));
const errorHandler_middleware_1 = require("../middlewares/errorHandler.middleware"); // Assuming this will be created or exists
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET || "your-very-strong-secret-key";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";
const RESET_TOKEN_EXPIRES_IN_MS = 3600000; // 1 heure en millisecondes
class AuthService {
    constructor(utilisateurService) {
        this.utilisateurService = utilisateurService;
    }
    register(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdUserId = yield this.utilisateurService.create(userData);
                if (typeof createdUserId !== 'number') {
                    // This case should ideally be handled by an error thrown from utilisateurService.create
                    console.error("[AuthService] Erreur: La création de l\"utilisateur n\"a pas retourné un ID numérique valide.");
                    throw new errorHandler_middleware_1.HttpError("Erreur lors de la finalisation de l\"inscription.", 500);
                }
                const jwtSignOptions = { expiresIn: JWT_EXPIRES_IN };
                const token = jsonwebtoken_1.default.sign({ userId: createdUserId, roleId: userData.role_id }, JWT_SECRET, jwtSignOptions);
                return {
                    token,
                    utilisateur: {
                        userId: createdUserId,
                        roleId: userData.role_id
                    }
                };
            }
            catch (error) {
                if (error instanceof errorHandler_middleware_1.HttpError)
                    throw error;
                if (error instanceof Error && error.message === "L\"email existe déjà.") {
                    throw new errorHandler_middleware_1.HttpError(error.message, 409);
                }
                console.error("Erreur lors de l\"enregistrement :", error);
                throw new errorHandler_middleware_1.HttpError("Erreur lors de l\"enregistrement de l\"utilisateur.", 500);
            }
        });
    }
    login(email, mot_de_passe_clair) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const utilisateur = yield this.utilisateurService.findByEmailWithPassword(email);
                if (!utilisateur) {
                    throw new errorHandler_middleware_1.HttpError("Email ou mot de passe incorrect.", 401);
                }
                const isPasswordMatch = yield bcryptjs_1.default.compare(mot_de_passe_clair, utilisateur.mot_de_passe);
                if (!isPasswordMatch) {
                    throw new errorHandler_middleware_1.HttpError("Email ou mot de passe incorrect.", 401);
                }
                const jwtSignOptions = { expiresIn: JWT_EXPIRES_IN };
                const token = jsonwebtoken_1.default.sign({ userId: utilisateur.id, roleId: utilisateur.role_id }, JWT_SECRET, jwtSignOptions);
                return {
                    token,
                    utilisateur: {
                        userId: utilisateur.id,
                        nom: utilisateur.nom,
                        prenom: utilisateur.prenom,
                        email: utilisateur.email, // Added email
                        roleId: utilisateur.role_id,
                        roleLibelle: (_a = utilisateur.role) === null || _a === void 0 ? void 0 : _a.libelle
                    }
                };
            }
            catch (error) {
                if (error instanceof errorHandler_middleware_1.HttpError) {
                    throw error;
                }
                console.error("Erreur lors de la connexion :", error);
                throw new errorHandler_middleware_1.HttpError("Erreur lors de la connexion.", 500);
            }
        });
    }
    verifyToken(token) {
        try {
            return jsonwebtoken_1.default.verify(token, JWT_SECRET);
        }
        catch (error) {
            // Log the error for debugging, but throw a generic HttpError
            console.error("[AuthService] Erreur de vérification du token:", error);
            throw new errorHandler_middleware_1.HttpError("Token invalide ou expiré.", 401);
        }
    }
    forgotPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const utilisateur = yield this.utilisateurService.findByEmail(email);
            if (!utilisateur || !utilisateur.id) {
                console.warn(`[AuthService] Tentative de réinitialisation pour un email non trouvé: ${email}`);
                // To prevent email enumeration, always return a success-like message to the controller.
                // The controller will then send a generic message to the user.
                // For simulation/testing, we can still return null for the link.
                return { resetLink: null };
            }
            const resetToken = crypto_1.default.randomBytes(32).toString("hex");
            const resetTokenExpiresAt = new Date(Date.now() + RESET_TOKEN_EXPIRES_IN_MS);
            try {
                yield this.utilisateurService.setResetPasswordToken(utilisateur.id, resetToken, resetTokenExpiresAt);
                const resetLink = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/reset-password/${resetToken}`;
                console.log(`[AuthService] Lien de réinitialisation généré pour ${email}: ${resetLink}`);
                return { resetLink };
            }
            catch (error) {
                console.error("[AuthService] Erreur lors de la configuration du token de réinitialisation:", error);
                // Even if setting token fails, for security, don't reveal specific error to controller if it could leak info.
                // However, this is an internal error, so throwing HttpError is appropriate.
                throw new errorHandler_middleware_1.HttpError("Erreur lors de la génération du lien de réinitialisation.", 500);
            }
        });
    }
    resetPassword(token, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            // Basic password validation (can be enhanced with Zod schema)
            if (!newPassword || newPassword.length < 8) {
                throw new errorHandler_middleware_1.HttpError("Le nouveau mot de passe doit contenir au moins 8 caractères.", 400);
            }
            const utilisateur = yield this.utilisateurService.findByValidResetToken(token);
            if (!utilisateur || !utilisateur.id) {
                throw new errorHandler_middleware_1.HttpError("Token de réinitialisation invalide ou expiré.", 400);
            }
            // No need to hash here, utilisateurService.updatePassword should handle it.
            yield this.utilisateurService.updatePassword(utilisateur.id, newPassword);
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map