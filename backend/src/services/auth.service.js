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
const errorHandler_middleware_1 = require("../middlewares/errorHandler.middleware");
dotenv_1.default.config();
// Définition du secret et de la durée du token JWT
const JWT_SECRET = process.env.JWT_SECRET || "your-very-strong-secret-key";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";
class AuthService {
    constructor(utilisateurService) {
        this.utilisateurService = utilisateurService;
    }
    /**
     * Inscription d'un nouvel utilisateur
     */
    register(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdUserId = yield this.utilisateurService.create(userData);
                // Création du token JWT
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
                if (error instanceof Error && error.message === "L'email existe déjà.") {
                    throw new errorHandler_middleware_1.HttpError(error.message, 409);
                }
                console.error("Erreur lors de l'enregistrement :", error);
                throw new errorHandler_middleware_1.HttpError("Erreur lors de l'enregistrement de l'utilisateur.", 500);
            }
        });
    }
    /**
     * Connexion d'un utilisateur existant
     */
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
    /**
     * Vérification d’un token JWT
     */
    verifyToken(token) {
        try {
            return jsonwebtoken_1.default.verify(token, JWT_SECRET);
        }
        catch (error) {
            throw new errorHandler_middleware_1.HttpError("Token invalide ou expiré.", 401);
        }
    }
}
exports.AuthService = AuthService;
