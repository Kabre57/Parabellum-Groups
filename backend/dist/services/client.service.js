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
exports.ClientService = void 0;
const db_1 = __importDefault(require("../config/db"));
class ClientService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield db_1.default.query("SELECT * FROM client");
                return result.rows;
            }
            catch (error) {
                console.error("Erreur lors de la récupération de tous les clients:", error);
                throw new Error("Erreur lors de la récupération des clients.");
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield db_1.default.query("SELECT * FROM client WHERE id = $1", [id]);
                if (result.rows.length === 0) {
                    return null;
                }
                return result.rows[0];
            }
            catch (error) {
                console.error(`Erreur lors de la récupération du client avec l'ID ${id}:`, error);
                throw new Error("Erreur lors de la récupération du client.");
            }
        });
    }
    create(clientData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nom, contact, localisation } = clientData;
            try {
                const result = yield db_1.default.query("INSERT INTO client (nom, contact, localisation) VALUES ($1, $2, $3) RETURNING *", [nom, contact, localisation]);
                if (result.rows.length > 0) {
                    return result.rows[0];
                }
                return null;
            }
            catch (error) {
                console.error("Erreur lors de la création du client:", error);
                throw new Error("Erreur lors de la création du client.");
            }
        });
    }
    update(id, clientData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nom, contact, localisation } = clientData;
            const fieldsToUpdate = [];
            const values = [];
            let placeholderCount = 1;
            if (nom !== undefined) {
                fieldsToUpdate.push(`nom = $${placeholderCount++}`);
                values.push(nom);
            }
            if (contact !== undefined) {
                fieldsToUpdate.push(`contact = $${placeholderCount++}`);
                values.push(contact);
            }
            if (localisation !== undefined) {
                fieldsToUpdate.push(`localisation = $${placeholderCount++}`);
                values.push(localisation);
            }
            if (fieldsToUpdate.length === 0) {
                return this.getById(id);
            }
            values.push(id);
            const query = `UPDATE client SET ${fieldsToUpdate.join(", ")} WHERE id = $${placeholderCount} RETURNING *`;
            try {
                const result = yield db_1.default.query(query, values);
                if (result.rowCount === 0) {
                    return null;
                }
                return result.rows[0];
            }
            catch (error) {
                console.error("Erreur lors de la mise à jour du client:", error);
                throw new Error("Erreur lors de la mise à jour du client.");
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield db_1.default.query("DELETE FROM client WHERE id = $1", [id]);
                return result.rowCount !== null && result.rowCount > 0;
            }
            catch (error) {
                console.error("Erreur lors de la suppression du client:", error);
                throw new Error("Erreur lors de la suppression du client.");
            }
        });
    }
}
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map