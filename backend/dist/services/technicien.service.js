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
exports.TechnicienService = void 0;
const db_1 = __importDefault(require("../config/db"));
class TechnicienService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
      SELECT t.id, t.nom, t.prenom, t.contact, t.specialite_id, s.libelle as specialite_libelle
      FROM technicien t
      LEFT JOIN specialite s ON t.specialite_id = s.id
    `;
            try {
                const result = yield db_1.default.query(query);
                return result.rows.map(row => ({
                    id: row.id,
                    nom: row.nom,
                    prenom: row.prenom,
                    contact: row.contact,
                    specialite_id: row.specialite_id,
                    specialite: row.specialite_id ? { id: row.specialite_id, libelle: row.specialite_libelle } : undefined
                }));
            }
            catch (error) {
                console.error("Erreur lors de la récupération de tous les techniciens:", error);
                throw new Error("Erreur lors de la récupération des techniciens.");
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
      SELECT t.id, t.nom, t.prenom, t.contact, t.specialite_id, s.libelle as specialite_libelle
      FROM technicien t
      LEFT JOIN specialite s ON t.specialite_id = s.id
      WHERE t.id = $1
    `;
            try {
                const result = yield db_1.default.query(query, [id]);
                if (result.rows.length === 0) {
                    return null;
                }
                const row = result.rows[0];
                return {
                    id: row.id,
                    nom: row.nom,
                    prenom: row.prenom,
                    contact: row.contact,
                    specialite_id: row.specialite_id,
                    specialite: row.specialite_id ? { id: row.specialite_id, libelle: row.specialite_libelle } : undefined
                };
            }
            catch (error) {
                console.error(`Erreur lors de la récupération du technicien avec l'ID ${id}:`, error);
                throw new Error("Erreur lors de la récupération du technicien.");
            }
        });
    }
    create(technicienData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nom, prenom, contact, specialite_id } = technicienData;
            try {
                // First, insert the technicien
                const insertQuery = "INSERT INTO technicien (nom, prenom, contact, specialite_id) VALUES ($1, $2, $3, $4) RETURNING id";
                const insertResult = yield db_1.default.query(insertQuery, [nom, prenom, contact, specialite_id]);
                if (insertResult.rows.length > 0 && insertResult.rows[0].id) {
                    // Then, fetch the newly created technicien with its specialite details
                    return this.getById(insertResult.rows[0].id);
                }
                return null;
            }
            catch (error) {
                console.error("Erreur lors de la création du technicien:", error);
                throw new Error("Erreur lors de la création du technicien.");
            }
        });
    }
    update(id, technicienData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nom, prenom, contact, specialite_id } = technicienData;
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
            if (contact !== undefined) {
                fieldsToUpdate.push(`contact = $${placeholderCount++}`);
                values.push(contact);
            }
            if (specialite_id !== undefined) {
                fieldsToUpdate.push(`specialite_id = $${placeholderCount++}`);
                values.push(specialite_id);
            }
            if (fieldsToUpdate.length === 0) {
                return this.getById(id); // No fields to update, return current state
            }
            values.push(id); // Add the ID for the WHERE clause
            const updateQuery = `UPDATE technicien SET ${fieldsToUpdate.join(", ")} WHERE id = $${placeholderCount} RETURNING id`;
            try {
                const updateResult = yield db_1.default.query(updateQuery, values);
                if (updateResult.rowCount === 0) {
                    return null; // Technicien not found or not updated
                }
                // Fetch the updated technicien with its specialite details
                return this.getById(id);
            }
            catch (error) {
                console.error("Erreur lors de la mise à jour du technicien:", error);
                throw new Error("Erreur lors de la mise à jour du technicien.");
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield db_1.default.query("DELETE FROM technicien WHERE id = $1", [id]);
                return result.rowCount !== null && result.rowCount > 0;
            }
            catch (error) {
                console.error("Erreur lors de la suppression du technicien:", error);
                throw new Error("Erreur lors de la suppression du technicien.");
            }
        });
    }
}
exports.TechnicienService = TechnicienService;
//# sourceMappingURL=technicien.service.js.map