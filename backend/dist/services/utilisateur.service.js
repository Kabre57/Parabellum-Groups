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
const DEFAULT_ROLE_ID = 1; // Rôle client par défaut
class UtilisateurService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield db_1.default.query("SELECT id, nom, prenom, email, role_id, created_at, updated_at FROM utilisateur");
                return result.rows.map((_a) => {
                    var { mot_de_passe, reset_password_token, reset_password_expires_at } = _a, rest = __rest(_a, ["mot_de_passe", "reset_password_token", "reset_password_expires_at"]);
                    return rest;
                });
            }
            catch (error) {
                console.error("Erreur lors de la récupération de tous les utilisateurs:", error);
                throw new Error("Erreur lors de la récupération des utilisateurs.");
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield db_1.default.query("SELECT id, nom, prenom, email, role_id, created_at, updated_at FROM utilisateur WHERE id = $1", [id]);
                if (result.rows.length === 0)
                    return null;
                const _a = result.rows[0], { mot_de_passe, reset_password_token, reset_password_expires_at } = _a, rest = __rest(_a, ["mot_de_passe", "reset_password_token", "reset_password_expires_at"]);
                return rest;
            }
            catch (error) {
                console.error(`Erreur lors de la récupération de l\'utilisateur avec l\'ID ${id}:`, error);
                throw new Error("Erreur lors de la récupération de l\'utilisateur.");
            }
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield db_1.default.query("SELECT * FROM utilisateur WHERE email = $1", [email]);
                return result.rows.length ? result.rows[0] : null;
            }
            catch (error) {
                console.error(`Erreur lors de la recherche de l\'utilisateur par email ${email}:`, error);
                throw new Error("Erreur lors de la recherche de l\'utilisateur par email.");
            }
        });
    }
    findByEmailWithPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield db_1.default.query("SELECT * FROM utilisateur WHERE email = $1", [email]);
                return result.rows.length ? result.rows[0] : null;
            }
            catch (error) {
                console.error(`Erreur lors de la recherche de l\'utilisateur par email ${email}:`, error);
                throw new Error("Erreur lors de la recherche de l\'utilisateur par email.");
            }
        });
    }
    create(utilisateurData) {
        return __awaiter(this, void 0, void 0, function* () {
            let { nom, prenom, email, mot_de_passe, role_id } = utilisateurData;
            if (!mot_de_passe || typeof mot_de_passe !== 'string' || mot_de_passe.trim() === '') {
                console.error("Tentative de création d\'utilisateur avec un mot de passe invalide ou manquant.");
                throw new Error("Le mot de passe est requis et ne peut pas être vide.");
            }
            if (role_id === undefined || role_id === null) {
                role_id = DEFAULT_ROLE_ID;
            }
            try {
                const existingUser = yield this.findByEmailWithPassword(email);
                if (existingUser)
                    throw new Error("L\'email existe déjà.");
                const hashedPassword = yield bcryptjs_1.default.hash(mot_de_passe, SALT_ROUNDS);
                const result = yield db_1.default.query("INSERT INTO utilisateur (nom, prenom, email, mot_de_passe, role_id) VALUES ($1, $2, $3, $4, $5) RETURNING id", [nom, prenom, email, hashedPassword, role_id]);
                if (result.rows.length > 0 && result.rows[0].id)
                    return result.rows[0].id;
                throw new Error("Erreur lors de la création de l\'utilisateur: ID non retourné.");
            }
            catch (error) {
                console.error("Erreur lors de la création de l\'utilisateur:", error);
                if (error instanceof Error && (error.message === "L\'email existe déjà." || error.message === "Le mot de passe est requis et ne peut pas être vide.")) {
                    throw error;
                }
                throw new Error("Erreur interne lors de la création de l\'utilisateur.");
            }
        });
    }
    update(id, utilisateurData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nom, prenom, mot_de_passe, role_id } = utilisateurData;
            let hashedPassword;
            if (mot_de_passe) {
                if (typeof mot_de_passe !== 'string' || mot_de_passe.trim() === '') {
                    console.error("Tentative de mise à jour du mot de passe avec une valeur invalide.");
                    throw new Error("Le nouveau mot de passe ne peut pas être vide.");
                }
                hashedPassword = yield bcryptjs_1.default.hash(mot_de_passe, SALT_ROUNDS);
            }
            const fieldsToUpdate = [];
            const values = [];
            let placeholderCount = 1;
            if (nom !== undefined) {
                fieldsToUpdate.push(`nom = $${placeholderCount++}`);
                values.push(nom);
            }
            if (prenom !== undefined) {
                fieldsToUpdate.push(`prenom = $${placeholderCount++}`);
                values.push(prenom);
            }
            if (hashedPassword !== undefined) {
                fieldsToUpdate.push(`mot_de_passe = $${placeholderCount++}`);
                values.push(hashedPassword);
            }
            if (role_id !== undefined) {
                fieldsToUpdate.push(`role_id = $${placeholderCount++}`);
                values.push(role_id);
            }
            if (fieldsToUpdate.length === 0)
                return this.getById(id);
            values.push(id);
            const query = `
      UPDATE utilisateur 
      SET ${fieldsToUpdate.join(", ")}, updated_at = CURRENT_TIMESTAMP
      WHERE id = $${placeholderCount} 
      RETURNING id, nom, prenom, email, role_id, created_at, updated_at
    `;
            try {
                const result = yield db_1.default.query(query, values);
                if (result.rowCount === 0)
                    return null;
                const _a = result.rows[0], { mot_de_passe: _, reset_password_token, reset_password_expires_at } = _a, updatedUser = __rest(_a, ["mot_de_passe", "reset_password_token", "reset_password_expires_at"]);
                return updatedUser;
            }
            catch (error) {
                console.error("Erreur lors de la mise à jour de l\'utilisateur:", error);
                if (error instanceof Error && error.message === "Le nouveau mot de passe ne peut pas être vide.") {
                    throw error;
                }
                throw new Error("Erreur interne lors de la mise à jour de l\'utilisateur.");
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield db_1.default.query("DELETE FROM utilisateur WHERE id = $1", [id]);
                return result.rowCount !== null && result.rowCount > 0;
            }
            catch (error) {
                console.error("Erreur lors de la suppression de l\'utilisateur:", error);
                throw new Error("Erreur interne lors de la suppression de l\'utilisateur.");
            }
        });
    }
    setResetPasswordToken(userId, token, expiresAt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(`[SERVICE UTILISATEUR] Définition du token de réinitialisation pour l\'utilisateur ${userId}:`);
                console.log(`  - Token: ${token}`);
                console.log(`  - ExpiresAt: ${expiresAt.toISOString()}`);
                yield db_1.default.query("UPDATE utilisateur SET reset_password_token = $1, reset_password_expires_at = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3", [token, expiresAt, userId]);
            }
            catch (error) {
                console.error(`Erreur lors de la définition du token de réinitialisation pour l\'utilisateur ${userId}:`, error);
                throw new Error("Erreur lors de la mise à jour du token de réinitialisation.");
            }
        });
    }
    findByValidResetToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`[SERVICE UTILISATEUR] Recherche par token de réinitialisation valide.`);
            console.log(`  - Token reçu: ${token}`);
            console.log(`  - Heure actuelle (UTC): ${new Date().toISOString()}`);
            try {
                const result = yield db_1.default.query("SELECT *, reset_password_expires_at AT TIME ZONE 'UTC' as expires_at_utc FROM utilisateur WHERE reset_password_token = $1 AND reset_password_expires_at > NOW()", [token]);
                if (result.rows.length > 0) {
                    console.log(`  - Utilisateur trouvé avec le token.`);
                    console.log(`    - ID Utilisateur: ${result.rows[0].id}`);
                    console.log(`    - Token stocké: ${result.rows[0].reset_password_token}`);
                    console.log(`    - Expiration stockée (UTC): ${result.rows[0].expires_at_utc}`);
                    console.log(`    - Expiration stockée (Locale DB): ${result.rows[0].reset_password_expires_at}`);
                    return result.rows[0];
                }
                else {
                    console.log(`  - Aucun utilisateur trouvé avec ce token ou token expiré.`);
                    const checkExpiredOrInvalid = yield db_1.default.query("SELECT *, reset_password_expires_at AT TIME ZONE 'UTC' as expires_at_utc FROM utilisateur WHERE reset_password_token = $1", [token]);
                    if (checkExpiredOrInvalid.rows.length > 0) {
                        console.log(`    - Token trouvé en base, mais expiré ou condition de date non remplie.`);
                        console.log(`    - ID Utilisateur: ${checkExpiredOrInvalid.rows[0].id}`);
                        console.log(`    - Token stocké: ${checkExpiredOrInvalid.rows[0].reset_password_token}`);
                        console.log(`    - Expiration stockée (UTC): ${checkExpiredOrInvalid.rows[0].expires_at_utc}`);
                        console.log(`    - Expiration stockée (Locale DB): ${checkExpiredOrInvalid.rows[0].reset_password_expires_at}`);
                    }
                    else {
                        console.log(`    - Token non trouvé en base.`);
                    }
                    return null;
                }
            }
            catch (error) {
                console.error(`Erreur lors de la recherche par token de réinitialisation valide:`, error);
                throw new Error("Erreur lors de la validation du token de réinitialisation.");
            }
        });
    }
    updatePassword(userId, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!newPassword || typeof newPassword !== 'string' || newPassword.trim() === '') {
                console.error("Tentative de mise à jour avec un mot de passe invalide ou manquant.");
                throw new Error("Le nouveau mot de passe est requis et ne peut pas être vide.");
            }
            const hashedPassword = yield bcryptjs_1.default.hash(newPassword, SALT_ROUNDS);
            try {
                console.log(`[SERVICE UTILISATEUR] Mise à jour du mot de passe pour l\'utilisateur ${userId}.`);
                yield db_1.default.query("UPDATE utilisateur SET mot_de_passe = $1, reset_password_token = NULL, reset_password_expires_at = NULL, updated_at = CURRENT_TIMESTAMP WHERE id = $2", [hashedPassword, userId]);
                console.log(`  - Mot de passe mis à jour et token de réinitialisation effacé pour l\'utilisateur ${userId}.`);
            }
            catch (error) {
                console.error(`Erreur lors de la mise à jour du mot de passe pour l\'utilisateur ${userId}:`, error);
                if (error instanceof Error && error.message === "Le nouveau mot de passe est requis et ne peut pas être vide.") {
                    throw error;
                }
                throw new Error("Erreur lors de la mise à jour du mot de passe.");
            }
        });
    }
}
exports.UtilisateurService = UtilisateurService;
//# sourceMappingURL=utilisateur.service.js.map