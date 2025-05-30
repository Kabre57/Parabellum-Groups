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
const utilisateur_service_1 = require("../../../src/services/utilisateur.service");
const db_1 = __importDefault(require("../../../src/config/db"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// Mock de la base de données et de bcrypt
jest.mock("../../../src/config/db", () => ({
    query: jest.fn(),
}));
jest.mock("bcryptjs");
const mockPoolQuery = db_1.default.query;
const mockBcryptHash = bcryptjs_1.default.hash;
const mockBcryptCompare = bcryptjs_1.default.compare;
describe("UtilisateurService", () => {
    let utilisateurService;
    beforeEach(() => {
        mockPoolQuery.mockReset();
        mockBcryptHash.mockReset();
        mockBcryptCompare.mockReset();
        utilisateurService = new utilisateur_service_1.UtilisateurService();
    });
    describe("getAll", () => {
        it("devrait retourner tous les utilisateurs (sans mot de passe)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Données simulées retournées par la base de données
            const mockDbResultRows = [
                {
                    id: 1,
                    nom: "Doe",
                    prenom: "John",
                    email: "john@example.com",
                    role_id: 1,
                    created_at: new Date(),
                    updated_at: new Date(),
                    mot_de_passe: "hashed"
                },
                {
                    id: 2,
                    nom: "Smith",
                    prenom: "Anna",
                    email: "anna@example.com",
                    role_id: 2,
                    created_at: new Date(),
                    updated_at: new Date(),
                    mot_de_passe: "hashed"
                },
            ];
            mockPoolQuery.mockResolvedValue({ rows: mockDbResultRows });
            const utilisateurs = yield utilisateurService.getAll();
            const expectedUtilisateurs = mockDbResultRows.map(u => ({
                id: u.id,
                nom: u.nom,
                prenom: u.prenom,
                email: u.email,
                role_id: u.role_id,
                created_at: u.created_at,
                updated_at: u.updated_at,
            }));
            expect(utilisateurs).toEqual(expectedUtilisateurs);
            expect(mockPoolQuery).toHaveBeenCalledWith("SELECT id, nom, prenom, email, role_id, created_at, updated_at FROM utilisateur");
        }));
    });
    describe("getById", () => {
        it("devrait retourner un utilisateur par son ID (sans mot de passe)", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockDbUtilisateur = {
                id: 1,
                nom: "Doe",
                prenom: "John",
                email: "john@example.com",
                role_id: 1,
                created_at: new Date(),
                updated_at: new Date(),
                mot_de_passe: "hashed"
            };
            mockPoolQuery.mockResolvedValue({ rows: [mockDbUtilisateur] });
            const utilisateur = yield utilisateurService.getById(1);
            const expectedUtilisateur = {
                id: mockDbUtilisateur.id,
                nom: mockDbUtilisateur.nom,
                prenom: mockDbUtilisateur.prenom,
                email: mockDbUtilisateur.email,
                role_id: mockDbUtilisateur.role_id,
                created_at: mockDbUtilisateur.created_at,
                updated_at: mockDbUtilisateur.updated_at,
            };
            expect(utilisateur).toEqual(expectedUtilisateur);
            expect(mockPoolQuery).toHaveBeenCalledWith("SELECT id, nom, prenom, email, role_id, created_at, updated_at FROM utilisateur WHERE id = $1", [1]);
        }));
        it("devrait retourner null si l'utilisateur n'est pas trouvé", () => __awaiter(void 0, void 0, void 0, function* () {
            mockPoolQuery.mockResolvedValue({ rows: [] });
            const utilisateur = yield utilisateurService.getById(99);
            expect(utilisateur).toBeNull();
        }));
    });
    describe("create", () => {
        it("devrait créer un nouvel utilisateur et retourner son ID", () => __awaiter(void 0, void 0, void 0, function* () {
            const newUser = {
                nom: "New",
                prenom: "User",
                email: "new@example.com",
                mot_de_passe: "password123",
                role_id: 2
            };
            const hashedPassword = "hashedPassword123";
            const mockReturnedId = { id: 3 };
            mockBcryptHash.mockResolvedValue(hashedPassword);
            mockPoolQuery.mockResolvedValueOnce({ rows: [] }); // Aucun utilisateur existant
            mockPoolQuery.mockResolvedValueOnce({ rows: [mockReturnedId] }); // Retourne l'ID inséré
            const createdUserId = yield utilisateurService.create(newUser);
            expect(mockBcryptHash).toHaveBeenCalledWith(newUser.mot_de_passe, 10);
            expect(mockPoolQuery).toHaveBeenNthCalledWith(1, "SELECT * FROM utilisateur WHERE email = $1", [newUser.email]);
            expect(mockPoolQuery).toHaveBeenNthCalledWith(2, "INSERT INTO utilisateur (nom, prenom, email, mot_de_passe, role_id) VALUES ($1, $2, $3, $4, $5) RETURNING id", [newUser.nom, newUser.prenom, newUser.email, hashedPassword, newUser.role_id]);
            expect(createdUserId).toBe(mockReturnedId.id);
        }));
        it("devrait lever une exception si l'email existe déjà", () => __awaiter(void 0, void 0, void 0, function* () {
            const newUser = {
                nom: "New",
                prenom: "User",
                email: "existing@example.com",
                mot_de_passe: "password123",
                role_id: 2
            };
            mockPoolQuery.mockResolvedValueOnce({ rows: [{ id: 1, email: "existing@example.com", mot_de_passe: "hashed" }] });
            yield expect(utilisateurService.create(newUser)).rejects.toThrow("L'email existe déjà.");
            expect(mockBcryptHash).not.toHaveBeenCalled();
        }));
    });
    // TODO: Ajouter les tests pour update, delete, findByEmailWithPassword
});
//# sourceMappingURL=utilisateur.service.test.js.map