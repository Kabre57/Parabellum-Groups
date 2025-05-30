import { UtilisateurService } from "../../../src/services/utilisateur.service";
import pool from "../../../src/config/db";
import { Utilisateur, UtilisateurCreation, UtilisateurPublic } from "../../../src/models/utilisateur.model";
import bcrypt from "bcryptjs";

// Mock de la base de données et de bcrypt
jest.mock("../../../src/config/db", () => ({
  query: jest.fn(),
}));
jest.mock("bcryptjs");

const mockPoolQuery = pool.query as jest.Mock;
const mockBcryptHash = bcrypt.hash as jest.Mock;
const mockBcryptCompare = bcrypt.compare as jest.Mock;

describe("UtilisateurService", () => {
  let utilisateurService: UtilisateurService;

  beforeEach(() => {
    mockPoolQuery.mockReset();
    mockBcryptHash.mockReset();
    mockBcryptCompare.mockReset();
    utilisateurService = new UtilisateurService();
  });

  describe("getAll", () => {
    it("devrait retourner tous les utilisateurs (sans mot de passe)", async () => {
      // Données simulées retournées par la base de données
      const mockDbResultRows: any[] = [
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

      const utilisateurs = await utilisateurService.getAll();

      const expectedUtilisateurs: UtilisateurPublic[] = mockDbResultRows.map(u => ({
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
    });
  });

  describe("getById", () => {
    it("devrait retourner un utilisateur par son ID (sans mot de passe)", async () => {
      const mockDbUtilisateur: any = {
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

      const utilisateur = await utilisateurService.getById(1);

      const expectedUtilisateur: UtilisateurPublic = {
        id: mockDbUtilisateur.id,
        nom: mockDbUtilisateur.nom,
        prenom: mockDbUtilisateur.prenom,
        email: mockDbUtilisateur.email,
        role_id: mockDbUtilisateur.role_id,
        created_at: mockDbUtilisateur.created_at,
        updated_at: mockDbUtilisateur.updated_at,
      };

      expect(utilisateur).toEqual(expectedUtilisateur);
      expect(mockPoolQuery).toHaveBeenCalledWith(
        "SELECT id, nom, prenom, email, role_id, created_at, updated_at FROM utilisateur WHERE id = $1",
        [1]
      );
    });

    it("devrait retourner null si l'utilisateur n'est pas trouvé", async () => {
      mockPoolQuery.mockResolvedValue({ rows: [] });

      const utilisateur = await utilisateurService.getById(99);
      expect(utilisateur).toBeNull();
    });
  });

  describe("create", () => {
    it("devrait créer un nouvel utilisateur et retourner son ID", async () => {
      const newUser: UtilisateurCreation = {
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

      const createdUserId = await utilisateurService.create(newUser);

      expect(mockBcryptHash).toHaveBeenCalledWith(newUser.mot_de_passe, 10);
      expect(mockPoolQuery).toHaveBeenNthCalledWith(1, "SELECT * FROM utilisateur WHERE email = $1", [newUser.email]);
      expect(mockPoolQuery).toHaveBeenNthCalledWith(2,
        "INSERT INTO utilisateur (nom, prenom, email, mot_de_passe, role_id) VALUES ($1, $2, $3, $4, $5) RETURNING id",
        [newUser.nom, newUser.prenom, newUser.email, hashedPassword, newUser.role_id]
      );
      expect(createdUserId).toBe(mockReturnedId.id);
    });

    it("devrait lever une exception si l'email existe déjà", async () => {
      const newUser: UtilisateurCreation = {
        nom: "New",
        prenom: "User",
        email: "existing@example.com",
        mot_de_passe: "password123",
        role_id: 2
      };

      mockPoolQuery.mockResolvedValueOnce({ rows: [{ id: 1, email: "existing@example.com", mot_de_passe: "hashed" }] });

      await expect(utilisateurService.create(newUser)).rejects.toThrow("L'email existe déjà.");
      expect(mockBcryptHash).not.toHaveBeenCalled();
    });
  });

  // TODO: Ajouter les tests pour update, delete, findByEmailWithPassword
});
