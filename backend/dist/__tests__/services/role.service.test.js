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
const role_service_1 = require("../../../src/services/role.service");
const db_1 = __importDefault(require("../../../src/config/db"));
// Mock the database pool
jest.mock("../../../src/config/db", () => ({
    query: jest.fn(),
}));
const mockPoolQuery = db_1.default.query;
// Helper pour créer des mocks QueryResult valides
const createMockQueryResult = (rows, rowCount) => {
    return {
        rows,
        rowCount: rowCount !== undefined ? rowCount : rows.length,
        command: "SELECT", // Valeur factice
        oid: 0, // Valeur factice
        fields: [], // Valeur factice
    };
};
describe("RoleService", () => {
    let roleService;
    beforeEach(() => {
        // Reset mocks before each test
        mockPoolQuery.mockReset();
        roleService = new role_service_1.RoleService();
    });
    describe("getAll", () => {
        it("devrait retourner tous les rôles", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockRoles = [
                { id: 1, libelle: "Admin" },
                { id: 2, libelle: "Utilisateur" },
            ];
            const mockQueryResult = createMockQueryResult(mockRoles);
            mockPoolQuery.mockResolvedValue(mockQueryResult);
            const roles = yield roleService.getAll();
            expect(roles).toEqual(mockRoles);
            expect(mockPoolQuery).toHaveBeenCalledWith("SELECT * FROM role");
            expect(mockPoolQuery).toHaveBeenCalledTimes(1);
        }));
        it("devrait retourner un tableau vide si aucun rôle n'est trouvé", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockQueryResult = createMockQueryResult([]);
            mockPoolQuery.mockResolvedValue(mockQueryResult);
            const roles = yield roleService.getAll();
            expect(roles).toEqual([]);
            expect(mockPoolQuery).toHaveBeenCalledWith("SELECT * FROM role");
            expect(mockPoolQuery).toHaveBeenCalledTimes(1);
        }));
        it("devrait lever une exception en cas d'erreur de la base de données", () => __awaiter(void 0, void 0, void 0, function* () {
            const errorMessage = "Erreur de base de données";
            mockPoolQuery.mockRejectedValue(new Error(errorMessage));
            yield expect(roleService.getAll()).rejects.toThrow("Erreur lors de la récupération des rôles.");
            expect(mockPoolQuery).toHaveBeenCalledWith("SELECT * FROM role");
            expect(mockPoolQuery).toHaveBeenCalledTimes(1);
        }));
    });
    describe("getById", () => {
        it("devrait retourner un rôle par son ID", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockRole = { id: 1, libelle: "Admin" };
            const mockQueryResult = createMockQueryResult([mockRole]);
            mockPoolQuery.mockResolvedValue(mockQueryResult);
            const role = yield roleService.getById(1);
            expect(role).toEqual(mockRole);
            expect(mockPoolQuery).toHaveBeenCalledWith("SELECT * FROM role WHERE id = $1", [1]);
            expect(mockPoolQuery).toHaveBeenCalledTimes(1);
        }));
        it("devrait retourner null si le rôle n'est pas trouvé", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockQueryResult = createMockQueryResult([]);
            mockPoolQuery.mockResolvedValue(mockQueryResult);
            const role = yield roleService.getById(99);
            expect(role).toBeNull();
            expect(mockPoolQuery).toHaveBeenCalledWith("SELECT * FROM role WHERE id = $1", [99]);
            expect(mockPoolQuery).toHaveBeenCalledTimes(1);
        }));
        it("devrait lever une exception en cas d'erreur de la base de données", () => __awaiter(void 0, void 0, void 0, function* () {
            mockPoolQuery.mockRejectedValue(new Error("DB error"));
            yield expect(roleService.getById(1)).rejects.toThrow("Erreur lors de la récupération du rôle.");
        }));
    });
    describe("create", () => {
        it("devrait créer un nouveau rôle et le retourner", () => __awaiter(void 0, void 0, void 0, function* () {
            const newRoleData = { libelle: "NouveauRôle" };
            const createdRole = Object.assign({ id: 3 }, newRoleData);
            const mockQueryResult = createMockQueryResult([createdRole]);
            mockPoolQuery.mockResolvedValue(mockQueryResult);
            const role = yield roleService.create(newRoleData);
            expect(role).toEqual(createdRole);
            expect(mockPoolQuery).toHaveBeenCalledWith("INSERT INTO role (libelle) VALUES ($1) RETURNING *", [newRoleData.libelle]);
        }));
        it("devrait retourner null si la création échoue (pas de lignes retournées)", () => __awaiter(void 0, void 0, void 0, function* () {
            const newRoleData = { libelle: "NouveauRôle" };
            const mockQueryResult = createMockQueryResult([]); // Simule un échec où rien n'est retourné
            mockPoolQuery.mockResolvedValue(mockQueryResult);
            const role = yield roleService.create(newRoleData);
            expect(role).toBeNull();
        }));
        it("devrait lever une exception en cas d'erreur de la base de données", () => __awaiter(void 0, void 0, void 0, function* () {
            mockPoolQuery.mockRejectedValue(new Error("DB error"));
            yield expect(roleService.create({ libelle: "Test" })).rejects.toThrow("Erreur lors de la création du rôle.");
        }));
    });
    describe("update", () => {
        it("devrait mettre à jour un rôle et le retourner", () => __awaiter(void 0, void 0, void 0, function* () {
            const roleUpdateData = { libelle: "AdminModifié" };
            const updatedRole = { id: 1, libelle: "AdminModifié" };
            const mockQueryResult = createMockQueryResult([updatedRole], 1);
            mockPoolQuery.mockResolvedValue(mockQueryResult);
            const role = yield roleService.update(1, roleUpdateData);
            expect(role).toEqual(updatedRole);
            expect(mockPoolQuery).toHaveBeenCalledWith("UPDATE role SET libelle = $1 WHERE id = $2 RETURNING *", [roleUpdateData.libelle, 1]);
        }));
        it("devrait retourner null si le rôle à mettre à jour n'est pas trouvé", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockQueryResult = createMockQueryResult([], 0);
            mockPoolQuery.mockResolvedValue(mockQueryResult);
            const role = yield roleService.update(99, { libelle: "Inexistant" });
            expect(role).toBeNull();
        }));
        it("devrait lever une exception en cas d'erreur de la base de données", () => __awaiter(void 0, void 0, void 0, function* () {
            mockPoolQuery.mockRejectedValue(new Error("DB error"));
            yield expect(roleService.update(1, { libelle: "Test" })).rejects.toThrow("Erreur lors de la mise à jour du rôle.");
        }));
    });
    describe("delete", () => {
        it("devrait supprimer un rôle et retourner true", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockQueryResult = createMockQueryResult([], 1); // rowCount est important ici
            mockPoolQuery.mockResolvedValue(mockQueryResult);
            const result = yield roleService.delete(1);
            expect(result).toBe(true);
            expect(mockPoolQuery).toHaveBeenCalledWith("DELETE FROM role WHERE id = $1", [1]);
        }));
        it("devrait retourner false si le rôle à supprimer n'est pas trouvé", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockQueryResult = createMockQueryResult([], 0); // rowCount est important ici
            mockPoolQuery.mockResolvedValue(mockQueryResult);
            const result = yield roleService.delete(99);
            expect(result).toBe(false);
        }));
        it("devrait lever une exception en cas d'erreur de la base de données", () => __awaiter(void 0, void 0, void 0, function* () {
            mockPoolQuery.mockRejectedValue(new Error("DB error"));
            yield expect(roleService.delete(1)).rejects.toThrow("Erreur lors de la suppression du rôle.");
        }));
    });
});
//# sourceMappingURL=role.service.test.js.map