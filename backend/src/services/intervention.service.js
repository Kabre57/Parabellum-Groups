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
exports.InterventionService = void 0;
const db_1 = __importDefault(require("../config/db"));
class InterventionService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
      SELECT 
        i.id, i.date_heure_debut, i.date_heure_fin, i.duree, 
        i.mission_id, m.nature_intervention as mission_nature, 
        i.technicien_id, t.nom as technicien_nom, t.prenom as technicien_prenom
      FROM intervention i
      LEFT JOIN mission m ON i.mission_id = m.num_intervention
      LEFT JOIN technicien t ON i.technicien_id = t.id
    `;
            try {
                const result = yield db_1.default.query(query);
                return result.rows.map(row => ({
                    id: row.id,
                    date_heure_debut: row.date_heure_debut,
                    date_heure_fin: row.date_heure_fin,
                    duree: row.duree,
                    mission_id: row.mission_id,
                    mission: row.mission_id ? { num_intervention: row.mission_id, nature_intervention: row.mission_nature } : undefined,
                    technicien_id: row.technicien_id,
                    technicien: row.technicien_id ? { id: row.technicien_id, nom: row.technicien_nom, prenom: row.technicien_prenom } : undefined
                }));
            }
            catch (error) {
                console.error("Erreur lors de la récupération de toutes les interventions:", error);
                throw new Error("Erreur lors de la récupération des interventions.");
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
      SELECT 
        i.id, i.date_heure_debut, i.date_heure_fin, i.duree, 
        i.mission_id, m.nature_intervention as mission_nature, 
        i.technicien_id, t.nom as technicien_nom, t.prenom as technicien_prenom
      FROM intervention i
      LEFT JOIN mission m ON i.mission_id = m.num_intervention
      LEFT JOIN technicien t ON i.technicien_id = t.id
      WHERE i.id = $1
    `;
            try {
                const result = yield db_1.default.query(query, [id]);
                if (result.rows.length === 0) {
                    return null;
                }
                const row = result.rows[0];
                return {
                    id: row.id,
                    date_heure_debut: row.date_heure_debut,
                    date_heure_fin: row.date_heure_fin,
                    duree: row.duree,
                    mission_id: row.mission_id,
                    mission: row.mission_id ? { num_intervention: row.mission_id, nature_intervention: row.mission_nature } : undefined,
                    technicien_id: row.technicien_id,
                    technicien: row.technicien_id ? { id: row.technicien_id, nom: row.technicien_nom, prenom: row.technicien_prenom } : undefined
                };
            }
            catch (error) {
                console.error(`Erreur lors de la récupération de l'intervention avec l'ID ${id}:`, error);
                throw new Error("Erreur lors de la récupération de l'intervention.");
            }
        });
    }
    create(interventionData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { date_heure_debut, date_heure_fin, duree, mission_id, technicien_id } = interventionData;
            try {
                const query = "INSERT INTO intervention (date_heure_debut, date_heure_fin, duree, mission_id, technicien_id) VALUES ($1, $2, $3, $4, $5) RETURNING id";
                const result = yield db_1.default.query(query, [date_heure_debut, date_heure_fin, duree, mission_id, technicien_id]);
                if (result.rows.length > 0 && result.rows[0].id) {
                    return this.getById(result.rows[0].id);
                }
                return null;
            }
            catch (error) {
                console.error("Erreur lors de la création de l'intervention:", error);
                throw new Error("Erreur lors de la création de l'intervention.");
            }
        });
    }
    update(id, interventionData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { date_heure_debut, date_heure_fin, duree, mission_id, technicien_id } = interventionData;
            const fieldsToUpdate = [];
            const values = [];
            let placeholderCount = 1;
            if (date_heure_debut !== undefined) {
                fieldsToUpdate.push(`date_heure_debut = $${placeholderCount++}`);
                values.push(date_heure_debut);
            }
            if (date_heure_fin !== undefined) {
                fieldsToUpdate.push(`date_heure_fin = $${placeholderCount++}`);
                values.push(date_heure_fin);
            }
            if (duree !== undefined) {
                fieldsToUpdate.push(`duree = $${placeholderCount++}`);
                values.push(duree);
            }
            if (mission_id !== undefined) {
                fieldsToUpdate.push(`mission_id = $${placeholderCount++}`);
                values.push(mission_id);
            }
            if (technicien_id !== undefined) {
                fieldsToUpdate.push(`technicien_id = $${placeholderCount++}`);
                values.push(technicien_id);
            }
            if (fieldsToUpdate.length === 0) {
                return this.getById(id);
            }
            values.push(id);
            const query = `UPDATE intervention SET ${fieldsToUpdate.join(", ")} WHERE id = $${placeholderCount} RETURNING id`;
            try {
                const result = yield db_1.default.query(query, values);
                if (result.rowCount === 0) {
                    return null;
                }
                return this.getById(id);
            }
            catch (error) {
                console.error("Erreur lors de la mise à jour de l'intervention:", error);
                throw new Error("Erreur lors de la mise à jour de l'intervention.");
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield db_1.default.query("DELETE FROM intervention WHERE id = $1", [id]);
                return result.rowCount !== null && result.rowCount > 0;
            }
            catch (error) {
                console.error("Erreur lors de la suppression de l'intervention:", error);
                throw new Error("Erreur lors de la suppression de l'intervention.");
            }
        });
    }
}
exports.InterventionService = InterventionService;
