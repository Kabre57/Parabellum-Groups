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
const auth_service_1 = require("../../../src/services/auth.service");
const utilisateur_service_1 = require("../../../src/services/utilisateur.service");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const errorHandler_middleware_1 = require("../../../src/middlewares/errorHandler.middleware");
// Mock des dépendances
jest.mock("../../../src/services/utilisateur.service");
jest.mock("jsonwebtoken");
jest.mock("bcryptjs");
// Références vers les mocks
const mockJwtSign = jsonwebtoken_1.default.sign;
const mockJwtVerify = jsonwebtoken_1.default.verify;
const mockBcryptCompare = bcryptjs_1.default.compare;
const mockBcryptHash = bcryptjs_1.default.hash;
describe("AuthService", () => {
    let authService;
    let utilisateurServiceInstance;
    // Avant chaque test, créer une nouvelle instance mockée
    beforeEach(() => {
        utilisateurServiceInstance = new utilisateur_service_1.UtilisateurService();
        authService = new auth_service_1.AuthService(utilisateurServiceInstance);
        // Réinitialisation des mocks
        mockJwtSign.mockReset();
        mockJwtVerify.mockReset();
        mockBcryptCompare.mockReset();
        mockBcryptHash.mockReset();
        utilisateurServiceInstance.create.mockReset();
        utilisateurServiceInstance.findByEmailWithPassword.mockReset();
        utilisateurServiceInstance.getAll.mockReset();
        utilisateurServiceInstance.getById.mockReset();
        utilisateurServiceInstance.update.mockReset();
        utilisateurServiceInstance.delete.mockReset();
    });
    // ------------------------ //
    //        REGISTER          //
    // ------------------------ //
    describe("register", () => {
        // Données de test pour la création d’un utilisateur
        const userData = {
            nom: "Test",
            prenom: "User",
            email: "test@example.com",
            mot_de_passe: "password123",
            role_id: 2
        };
        const createdUserId = 1;
        const token = "fake_jwt_token";
        it("devrait enregistrer un nouvel utilisateur et retourner un token", () => __awaiter(void 0, void 0, void 0, function* () {
            utilisateurServiceInstance.create.mockResolvedValue(createdUserId);
            mockJwtSign.mockReturnValue(token);
            const result = yield authService.register(userData);
            expect(utilisateurServiceInstance.create).toHaveBeenCalledWith(userData);
            expect(mockJwtSign).toHaveBeenCalledWith({ userId: createdUserId, roleId: userData.role_id }, process.env.JWT_SECRET || "your-very-strong-secret-key", { expiresIn: "1h" });
            expect(result).toEqual({ token, userId: createdUserId, roleId: userData.role_id });
        }));
        it("devrait lever une HttpError si la création de l'utilisateur échoue", () => __awaiter(void 0, void 0, void 0, function* () {
            const errorMessage = "L'email existe déjà.";
            utilisateurServiceInstance.create.mockRejectedValue(new Error(errorMessage));
            yield expect(authService.register(userData)).rejects.toThrow(errorHandler_middleware_1.HttpError);
            yield expect(authService.register(userData)).rejects.toMatchObject({
                message: errorMessage,
                statusCode: 409
            });
        }));
    });
    // ------------------------ //
    //         LOGIN            //
    // ------------------------ //
    describe("login", () => {
        const loginCredentials = {
            email: "test@example.com",
            mot_de_passe: "password123"
        };
        const userFromDbMock = {
            id: 1,
            nom: "Test",
            prenom: "User",
            email: "test@example.com",
            mot_de_passe: "hashedPassword",
            role_id: 2,
            created_at: new Date(),
            updated_at: new Date(),
        }; // <-- autorise les propriétés inconnues
        const token = "fake_jwt_token";
        it("devrait connecter l'utilisateur et retourner un token si les identifiants sont valides", () => __awaiter(void 0, void 0, void 0, function* () {
            utilisateurServiceInstance.findByEmailWithPassword.mockResolvedValue(userFromDbMock);
            mockBcryptCompare.mockResolvedValue(true);
            mockJwtSign.mockReturnValue(token);
            const result = yield authService.login(loginCredentials.email, loginCredentials.mot_de_passe);
            expect(utilisateurServiceInstance.findByEmailWithPassword).toHaveBeenCalledWith(loginCredentials.email);
            expect(mockBcryptCompare).toHaveBeenCalledWith(loginCredentials.mot_de_passe, userFromDbMock.mot_de_passe);
            expect(mockJwtSign).toHaveBeenCalledWith({ userId: userFromDbMock.id, roleId: userFromDbMock.role_id }, process.env.JWT_SECRET || "your-very-strong-secret-key", { expiresIn: "1h" });
            expect(result).toEqual({
                token,
                userId: userFromDbMock.id,
                nom: userFromDbMock.nom,
                prenom: userFromDbMock.prenom,
                roleId: userFromDbMock.role_id,
                roleLibelle: undefined // Peut être défini si le rôle est joint
            });
        }));
        it("devrait lever une HttpError si l'utilisateur n'est pas trouvé", () => __awaiter(void 0, void 0, void 0, function* () {
            utilisateurServiceInstance.findByEmailWithPassword.mockResolvedValue(null);
            yield expect(authService.login(loginCredentials.email, loginCredentials.mot_de_passe)).rejects.toThrow(errorHandler_middleware_1.HttpError);
            yield expect(authService.login(loginCredentials.email, loginCredentials.mot_de_passe)).rejects.toMatchObject({
                message: "Email ou mot de passe incorrect.",
                statusCode: 401
            });
        }));
        it("devrait lever une HttpError si le mot de passe est incorrect", () => __awaiter(void 0, void 0, void 0, function* () {
            utilisateurServiceInstance.findByEmailWithPassword.mockResolvedValue(userFromDbMock);
            mockBcryptCompare.mockResolvedValue(false);
            yield expect(authService.login(loginCredentials.email, loginCredentials.mot_de_passe)).rejects.toThrow(errorHandler_middleware_1.HttpError);
            yield expect(authService.login(loginCredentials.email, loginCredentials.mot_de_passe)).rejects.toMatchObject({
                message: "Email ou mot de passe incorrect.",
                statusCode: 401
            });
        }));
    });
    // ------------------------ //
    //      VERIFY TOKEN        //
    // ------------------------ //
    describe("verifyToken", () => {
        const token = "valid_token";
        const decodedPayload = { userId: 1, roleId: 2, iat: 123, exp: 456 };
        it("devrait retourner le payload décodé pour un token valide", () => {
            mockJwtVerify.mockReturnValue(decodedPayload);
            const result = authService.verifyToken(token);
            expect(mockJwtVerify).toHaveBeenCalledWith(token, process.env.JWT_SECRET || "your-very-strong-secret-key");
            expect(result).toEqual(decodedPayload);
        });
        it("devrait lever une HttpError pour un token invalide ou expiré", () => {
            mockJwtVerify.mockImplementation(() => {
                throw new Error("jwt malformed");
            });
            expect(() => authService.verifyToken("invalid_token")).toThrow(errorHandler_middleware_1.HttpError);
            expect(() => authService.verifyToken("invalid_token")).toThrow("Token invalide ou expiré.");
        });
    });
});
//# sourceMappingURL=auth.service.test.js.map