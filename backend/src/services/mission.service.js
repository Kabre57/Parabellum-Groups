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
exports.MissionService = void 0;
const db_1 = __importDefault(require("../config/db"));
class MissionService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
      SELECT m.num_intervention, m.nature_intervention, m.objectif_du_contrat, m.description, m.date_sortie_fiche_intervention, m.client_id, c.nom as client_nom, c.contact as client_contact, c.localisation as client_localisation
      FROM mission m
      LEFT JOIN client c ON m.client_id = c.id
    `;
            try {
                const result = yield db_1.default.query(query);
                return result.rows.map(row => ({
                    num_intervention: row.num_intervention,
                    nature_intervention: row.nature_intervention,
                    objectif_du_contrat: row.objectif_du_contrat,
                    description: row.description,
                    date_sortie_fiche_intervention: row.date_sortie_fiche_intervention,
                    client_id: row.client_id,
                    client: row.client_id ? { id: row.client_id, nom: row.client_nom, contact: row.client_contact, localisation: row.client_localisation } : undefined
                }));
            }
            catch (error) {
                console.error("Erreur lors de la récupération de toutes les missions:", error);
                throw new Error("Erreur lors de la récupération des missions.");
            }
        });
    }
    getById(num_intervention) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
      SELECT m.num_intervention, m.nature_intervention, m.objectif_du_contrat, m.description, m.date_sortie_fiche_intervention, m.client_id, c.nom as client_nom, c.contact as client_contact, c.localisation as client_localisation
      FROM mission m
      LEFT JOIN client c ON m.client_id = c.id
      WHERE m.num_intervention = $1
    `;
            try {
                const result = yield db_1.default.query(query, [num_intervention]);
                if (result.rows.length === 0) {
                    return null;
                }
                const row = result.rows[0];
                return {
                    num_intervention: row.num_intervention,
                    nature_intervention: row.nature_intervention,
                    objectif_du_contrat: row.objectif_du_contrat,
                    description: row.description,
                    date_sortie_fiche_intervention: row.date_sortie_fiche_intervention,
                    client_id: row.client_id,
                    client: row.client_id ? { id: row.client_id, nom: row.client_nom, contact: row.client_contact, localisation: row.client_localisation } : undefined
                };
            }
            catch (error) {
                console.error(`Erreur lors de la récupération de la mission avec le numéro ${num_intervention}:`, error);
                throw new Error("Erreur lors de la récupération de la mission.");
            }
        });
    }
    create(missionData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nature_intervention, objectif_du_contrat, description, date_sortie_fiche_intervention, client_id } = missionData;
            try {
                const query = "INSERT INTO mission (nature_intervention, objectif_du_contrat, description, date_sortie_fiche_intervention, client_id) VALUES ($1, $2, $3, $4, $5) RETURNING num_intervention";
                const result = yield db_1.default.query(query, [nature_intervention, objectif_du_contrat, description, date_sortie_fiche_intervention, client_id]);
                if (result.rows.length > 0 && result.rows[0].num_intervention) {
                    return this.getById(result.rows[0].num_intervention);
                }
                return null;
            }
            catch (error) {
                console.error("Erreur lors de la création de la mission:", error);
                throw new Error("Erreur lors de la création de la mission.");
            }
        });
    }
    update(num_intervention, missionData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nature_intervention, objectif_du_contrat, description, date_sortie_fiche_intervention, client_id } = missionData;
            const fieldsToUpdate = [];
            const values = [];
            let placeholderCount = 1;
            if (nature_intervention !== undefined) {
                fieldsToUpdate.push(`nature_intervention = $${placeholderCount++}`);
                values.push(nature_intervention);
            }
            if (objectif_du_contrat !== undefined) {
                fieldsToUpdate.push(`objectif_du_contrat = $${placeholderCount++}`);
                values.push(objectif_du_contrat);
            }
            if (description !== undefined) {
                fieldsToUpdate.push(`description = $${placeholderCount++}`);
                values.push(description);
            }
            if (date_sortie_fiche_intervention !== undefined) {
                fieldsToUpdate.push(`date_sortie_fiche_intervention = $${placeholderCount++}`);
                values.push(date_sortie_fiche_intervention);
            }
            if (client_id !== undefined) {
                fieldsToUpdate.push(`client_id = $${placeholderCount++}`);
                values.push(client_id);
            }
            if (fieldsToUpdate.length === 0) {
                return this.getById(num_intervention);
            }
            values.push(num_intervention);
            const query = `UPDATE mission SET ${fieldsToUpdate.join(", ")} WHERE num_intervention = $${placeholderCount} RETURNING num_intervention`;
            try {
                const result = yield db_1.default.query(query, values);
                if (result.rowCount === 0) {
                    return null;
                }
                return this.getById(num_intervention);
            }
            catch (error) {
                console.error("Erreur lors de la mise à jour de la mission:", error);
                throw new Error("Erreur lors de la mise à jour de la mission.");
            }
        });
    }
    delete(num_intervention) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield db_1.default.query("DELETE FROM mission WHERE num_intervention = $1", [num_intervention]);
                return result.rowCount !== null && result.rowCount > 0;
            }
            catch (error) {
                console.error("Erreur lors de la suppression de la mission:", error);
                // PostgreSQL error code for foreign_key_violation is '23503'
                if (error.code === "23503") {
                    throw new Error("Impossible de supprimer la mission car elle est référencée par des interventions.");
                }
                throw new Error("Erreur lors de la suppression de la mission.");
            }
        });
    }
}
exports.MissionService = MissionService;
