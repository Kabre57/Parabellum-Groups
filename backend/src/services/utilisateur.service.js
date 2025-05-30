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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurService = void 0;
const db_1 = __importDefault(require("../config/db"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const SALT_ROUNDS = 10;

class UtilisateurService {
    // ... autres méthodes inchangées ...

    /**
     * Crée un nouvel utilisateur avec validation améliorée
     */
    create(utilisateurData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nom, prenom, email, mot_de_passe, role_id } = utilisateurData;
            
            // Validation renforcée
            if (!nom || !prenom || !email || !mot_de_passe) {
                throw new Error("Tous les champs sont obligatoires");
            }
            
            if (mot_de_passe.length < 6) {
                throw new Error("Le mot de passe doit contenir au moins 6 caractères");
            }

            try {
                // Vérification email unique
                const existingUser = yield this.findByEmailWithPassword(email);
                if (existingUser) {
                    throw new Error("L'email existe déjà");
                }

                // Hashage sécurisé du mot de passe
                const hashedPassword = yield bcryptjs_1.default.hash(mot_de_passe, SALT_ROUNDS);
                if (!hashedPassword) {
                    throw new Error("Erreur lors du hashage du mot de passe");
                }

                // Insertion avec rôle par défaut (2 = utilisateur standard)
                const result = yield db_1.default.query(
                    `INSERT INTO utilisateur 
                    (nom, prenom, email, mot_de_passe, role_id) 
                    VALUES ($1, $2, $3, $4, $5) 
                    RETURNING id, nom, prenom, email, role_id`,
                    [nom, prenom, email, hashedPassword, role_id || 2]
                );

                if (!result.rows[0]) {
                    throw new Error("Erreur lors de la création de l'utilisateur");
                }

                return result.rows[0];
            } catch (error) {
                console.error("Erreur création utilisateur:", error);
                throw error;
            }
        });
    }

    /**
     * Met à jour le mot de passe d'un utilisateur
     */
    updatePassword(userId, newHashedPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield db_1.default.query(
                    `UPDATE utilisateur 
                    SET mot_de_passe = $1, 
                        reset_password_token = NULL, 
                        reset_token_expires = NULL 
                    WHERE id = $2 
                    RETURNING id`,
                    [newHashedPassword, userId]
                );
                
                return result.rowCount > 0;
            } catch (error) {
                console.error("Erreur mise à jour mot de passe:", error);
                throw new Error("Erreur lors de la mise à jour du mot de passe");
            }
        });
    }

    /**
     * Définit le token de réinitialisation
     */
    setResetPasswordToken(userId, token, expiresAt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield db_1.default.query(
                    `UPDATE utilisateur 
                    SET reset_password_token = $1, 
                        reset_token_expires = $2 
                    WHERE id = $3`,
                    [token, expiresAt, userId]
                );
            } catch (error) {
                console.error("Erreur définition token reset:", error);
                throw new Error("Erreur lors de la génération du lien de réinitialisation");
            }
        });
    }

    /**
     * Trouve un utilisateur par son token valide
     */
    findByValidResetToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield db_1.default.query(
                    `SELECT id, email, reset_token_expires 
                    FROM utilisateur 
                    WHERE reset_password_token = $1 
                    AND reset_token_expires > NOW()`,
                    [token]
                );
                
                return result.rows[0] || null;
            } catch (error) {
                console.error("Erreur recherche par token:", error);
                throw new Error("Erreur lors de la vérification du token");
            }
        });
    }
}
exports.UtilisateurService = UtilisateurService;