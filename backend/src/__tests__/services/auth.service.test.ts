import { AuthService } from "../../../src/services/auth.service";
import { UtilisateurService } from "../../../src/services/utilisateur.service";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { HttpError } from "../../../src/middlewares/errorHandler.middleware";
import { UtilisateurCreation, UtilisateurWithPassword } from "../../../src/models/utilisateur.model";

// Mock des dépendances
jest.mock("../../../src/services/utilisateur.service");
jest.mock("jsonwebtoken");
jest.mock("bcryptjs");

// Références vers les mocks
const mockJwtSign = jwt.sign as jest.Mock;
const mockJwtVerify = jwt.verify as jest.Mock;
const mockBcryptCompare = bcrypt.compare as jest.Mock;
const mockBcryptHash = bcrypt.hash as jest.Mock;

describe("AuthService", () => {
  let authService: AuthService;
  let utilisateurServiceInstance: jest.Mocked<UtilisateurService>;

  // Avant chaque test, créer une nouvelle instance mockée
  beforeEach(() => {
    utilisateurServiceInstance = new UtilisateurService() as jest.Mocked<UtilisateurService>;
    authService = new AuthService(utilisateurServiceInstance);

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
    const userData: UtilisateurCreation = {
      nom: "Test",
      prenom: "User",
      email: "test@example.com",
      mot_de_passe: "password123",
      role_id: 2
    };
    const createdUserId = 1;
    const token = "fake_jwt_token";

    it("devrait enregistrer un nouvel utilisateur et retourner un token", async () => {
      utilisateurServiceInstance.create.mockResolvedValue(createdUserId);
      mockJwtSign.mockReturnValue(token);

      const result = await authService.register(userData);

      expect(utilisateurServiceInstance.create).toHaveBeenCalledWith(userData);
      expect(mockJwtSign).toHaveBeenCalledWith(
        { userId: createdUserId, roleId: userData.role_id },
        process.env.JWT_SECRET || "your-very-strong-secret-key",
        { expiresIn: "1h" }
      );
      expect(result).toEqual({ token, userId: createdUserId, roleId: userData.role_id });
    });

    it("devrait lever une HttpError si la création de l'utilisateur échoue", async () => {
      const errorMessage = "L'email existe déjà.";
      utilisateurServiceInstance.create.mockRejectedValue(new Error(errorMessage));

      await expect(authService.register(userData)).rejects.toThrow(HttpError);
      await expect(authService.register(userData)).rejects.toMatchObject({
        message: errorMessage,
        statusCode: 409
      });
    });
  });

  // ------------------------ //
  //         LOGIN            //
  // ------------------------ //
  describe("login", () => {
    const loginCredentials = {
      email: "test@example.com",
      mot_de_passe: "password123"
    };

    const userFromDbMock: UtilisateurWithPassword = {
      id: 1,
      nom: "Test",
      prenom: "User",
      email: "test@example.com",
      mot_de_passe: "hashedPassword",
      role_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    } as any ;// <-- autorise les propriétés inconnues

    const token = "fake_jwt_token";

    it("devrait connecter l'utilisateur et retourner un token si les identifiants sont valides", async () => {
      utilisateurServiceInstance.findByEmailWithPassword.mockResolvedValue(userFromDbMock);
      mockBcryptCompare.mockResolvedValue(true as never);
      mockJwtSign.mockReturnValue(token);

      const result = await authService.login(loginCredentials.email, loginCredentials.mot_de_passe);

      expect(utilisateurServiceInstance.findByEmailWithPassword).toHaveBeenCalledWith(loginCredentials.email);
      expect(mockBcryptCompare).toHaveBeenCalledWith(loginCredentials.mot_de_passe, userFromDbMock.mot_de_passe);
      expect(mockJwtSign).toHaveBeenCalledWith(
        { userId: userFromDbMock.id, roleId: userFromDbMock.role_id },
        process.env.JWT_SECRET || "your-very-strong-secret-key",
        { expiresIn: "1h" }
      );

      expect(result).toEqual({
        token,
        userId: userFromDbMock.id!,
        nom: userFromDbMock.nom,
        prenom: userFromDbMock.prenom,
        roleId: userFromDbMock.role_id,
        roleLibelle: undefined // Peut être défini si le rôle est joint
      });
    });

    it("devrait lever une HttpError si l'utilisateur n'est pas trouvé", async () => {
      utilisateurServiceInstance.findByEmailWithPassword.mockResolvedValue(null);

      await expect(authService.login(loginCredentials.email, loginCredentials.mot_de_passe)).rejects.toThrow(HttpError);
      await expect(authService.login(loginCredentials.email, loginCredentials.mot_de_passe)).rejects.toMatchObject({
        message: "Email ou mot de passe incorrect.",
        statusCode: 401
      });
    });

    it("devrait lever une HttpError si le mot de passe est incorrect", async () => {
      utilisateurServiceInstance.findByEmailWithPassword.mockResolvedValue(userFromDbMock);
      mockBcryptCompare.mockResolvedValue(false as never);

      await expect(authService.login(loginCredentials.email, loginCredentials.mot_de_passe)).rejects.toThrow(HttpError);
      await expect(authService.login(loginCredentials.email, loginCredentials.mot_de_passe)).rejects.toMatchObject({
        message: "Email ou mot de passe incorrect.",
        statusCode: 401
      });
    });
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

      expect(() => authService.verifyToken("invalid_token")).toThrow(HttpError);
      expect(() => authService.verifyToken("invalid_token")).toThrow("Token invalide ou expiré.");
    });
  });
});
