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
exports.RoleService = void 0;
const db_1 = __importDefault(require("../config/db"));
class RoleService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield db_1.default.query("SELECT * FROM role");
                return result.rows;
            }
            catch (error) {
                console.error("Erreur lors de la récupération de tous les rôles:", error);
                throw new Error("Erreur lors de la récupération des rôles.");
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield db_1.default.query("SELECT * FROM role WHERE id = $1", [id]);
                if (result.rows.length === 0) {
                    return null;
                }
                return result.rows[0];
            }
            catch (error) {
                console.error(`Erreur lors de la récupération du rôle avec l'ID ${id}:`, error);
                throw new Error("Erreur lors de la récupération du rôle.");
            }
        });
    }
    create(roleData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { libelle } = roleData;
            try {
                const result = yield db_1.default.query("INSERT INTO role (libelle) VALUES ($1) RETURNING *", [libelle]);
                if (result.rows.length > 0) {
                    return result.rows[0];
                }
                return null;
            }
            catch (error) {
                console.error("Erreur lors de la création du rôle:", error);
                throw new Error("Erreur lors de la création du rôle.");
            }
        });
    }
    update(id, roleData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { libelle } = roleData;
            if (!libelle) {
                const currentRole = yield this.getById(id);
                if (!currentRole)
                    return null;
                return currentRole;
            }
            try {
                const result = yield db_1.default.query("UPDATE role SET libelle = $1 WHERE id = $2 RETURNING *", [libelle, id]);
                if (result.rowCount === 0) {
                    return null;
                }
                return result.rows[0];
            }
            catch (error) {
                console.error("Erreur lors de la mise à jour du rôle:", error);
                throw new Error("Erreur lors de la mise à jour du rôle.");
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield db_1.default.query("DELETE FROM role WHERE id = $1", [id]);
                return result.rowCount !== null && result.rowCount > 0;
            }
            catch (error) {
                console.error("Erreur lors de la suppression du rôle:", error);
                throw new Error("Erreur lors de la suppression du rôle.");
            }
        });
    }
}
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map