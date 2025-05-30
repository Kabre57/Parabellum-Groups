import { RoleService } from "../../../src/services/role.service";
import pool from "../../../src/config/db";
import { Role } from "../../../src/models/role.model";
import { QueryResult, FieldDef } from "pg"; // Importer QueryResult et FieldDef de pg

// Mock the database pool
jest.mock("../../../src/config/db", () => ({
  query: jest.fn(),
}));

const mockPoolQuery = pool.query as jest.Mock;

// Helper pour créer des mocks QueryResult valides
const createMockQueryResult = <T extends {}>(rows: T[], rowCount?: number): QueryResult<T> => {
  return {
    rows,
    rowCount: rowCount !== undefined ? rowCount : rows.length,
    command: "SELECT", // Valeur factice
    oid: 0, // Valeur factice
    fields: [] as FieldDef[], // Valeur factice
  } as QueryResult<T>;
};

describe("RoleService", () => {
  let roleService: RoleService;

  beforeEach(() => {
    // Reset mocks before each test
    mockPoolQuery.mockReset();
    roleService = new RoleService();
  });

  describe("getAll", () => {
    it("devrait retourner tous les rôles", async () => {
      const mockRoles: Role[] = [
        { id: 1, libelle: "Admin" },
        { id: 2, libelle: "Utilisateur" },
      ];
      const mockQueryResult = createMockQueryResult(mockRoles);
      mockPoolQuery.mockResolvedValue(mockQueryResult);

      const roles = await roleService.getAll();

      expect(roles).toEqual(mockRoles);
      expect(mockPoolQuery).toHaveBeenCalledWith("SELECT * FROM role");
      expect(mockPoolQuery).toHaveBeenCalledTimes(1);
    });

    it("devrait retourner un tableau vide si aucun rôle n'est trouvé", async () => {
      const mockQueryResult = createMockQueryResult<Role>([]);
      mockPoolQuery.mockResolvedValue(mockQueryResult);

      const roles = await roleService.getAll();

      expect(roles).toEqual([]);
      expect(mockPoolQuery).toHaveBeenCalledWith("SELECT * FROM role");
      expect(mockPoolQuery).toHaveBeenCalledTimes(1);
    });

    it("devrait lever une exception en cas d'erreur de la base de données", async () => {
      const errorMessage = "Erreur de base de données";
      mockPoolQuery.mockRejectedValue(new Error(errorMessage));

      await expect(roleService.getAll()).rejects.toThrow("Erreur lors de la récupération des rôles.");
      expect(mockPoolQuery).toHaveBeenCalledWith("SELECT * FROM role");
      expect(mockPoolQuery).toHaveBeenCalledTimes(1);
    });
  });

  describe("getById", () => {
    it("devrait retourner un rôle par son ID", async () => {
      const mockRole: Role = { id: 1, libelle: "Admin" };
      const mockQueryResult = createMockQueryResult([mockRole]);
      mockPoolQuery.mockResolvedValue(mockQueryResult);

      const role = await roleService.getById(1);

      expect(role).toEqual(mockRole);
      expect(mockPoolQuery).toHaveBeenCalledWith("SELECT * FROM role WHERE id = $1", [1]);
      expect(mockPoolQuery).toHaveBeenCalledTimes(1);
    });

    it("devrait retourner null si le rôle n'est pas trouvé", async () => {
      const mockQueryResult = createMockQueryResult<Role>([]);
      mockPoolQuery.mockResolvedValue(mockQueryResult);

      const role = await roleService.getById(99);

      expect(role).toBeNull();
      expect(mockPoolQuery).toHaveBeenCalledWith("SELECT * FROM role WHERE id = $1", [99]);
      expect(mockPoolQuery).toHaveBeenCalledTimes(1);
    });

    it("devrait lever une exception en cas d'erreur de la base de données", async () => {
      mockPoolQuery.mockRejectedValue(new Error("DB error"));
      await expect(roleService.getById(1)).rejects.toThrow("Erreur lors de la récupération du rôle.");
    });
  });

  describe("create", () => {
    it("devrait créer un nouveau rôle et le retourner", async () => {
      const newRoleData = { libelle: "NouveauRôle" };
      const createdRole: Role = { id: 3, ...newRoleData };
      const mockQueryResult = createMockQueryResult([createdRole]);
      mockPoolQuery.mockResolvedValue(mockQueryResult);

      const role = await roleService.create(newRoleData);

      expect(role).toEqual(createdRole);
      expect(mockPoolQuery).toHaveBeenCalledWith("INSERT INTO role (libelle) VALUES ($1) RETURNING *", [newRoleData.libelle]);
    });

     it("devrait retourner null si la création échoue (pas de lignes retournées)", async () => {
      const newRoleData = { libelle: "NouveauRôle" };
      const mockQueryResult = createMockQueryResult<Role>([]); // Simule un échec où rien n'est retourné
      mockPoolQuery.mockResolvedValue(mockQueryResult);

      const role = await roleService.create(newRoleData);

      expect(role).toBeNull();
    });

    it("devrait lever une exception en cas d'erreur de la base de données", async () => {
      mockPoolQuery.mockRejectedValue(new Error("DB error"));
      await expect(roleService.create({ libelle: "Test" })).rejects.toThrow("Erreur lors de la création du rôle.");
    });
  });

  describe("update", () => {
    it("devrait mettre à jour un rôle et le retourner", async () => {
      const roleUpdateData = { libelle: "AdminModifié" };
      const updatedRole: Role = { id: 1, libelle: "AdminModifié" };
      const mockQueryResult = createMockQueryResult([updatedRole], 1);
      mockPoolQuery.mockResolvedValue(mockQueryResult);

      const role = await roleService.update(1, roleUpdateData);

      expect(role).toEqual(updatedRole);
      expect(mockPoolQuery).toHaveBeenCalledWith("UPDATE role SET libelle = $1 WHERE id = $2 RETURNING *", [roleUpdateData.libelle, 1]);
    });

    it("devrait retourner null si le rôle à mettre à jour n'est pas trouvé", async () => {
      const mockQueryResult = createMockQueryResult<Role>([], 0);
      mockPoolQuery.mockResolvedValue(mockQueryResult);

      const role = await roleService.update(99, { libelle: "Inexistant" });

      expect(role).toBeNull();
    });

    it("devrait lever une exception en cas d'erreur de la base de données", async () => {
      mockPoolQuery.mockRejectedValue(new Error("DB error"));
      await expect(roleService.update(1, { libelle: "Test" })).rejects.toThrow("Erreur lors de la mise à jour du rôle.");
    });
  });

  describe("delete", () => {
    it("devrait supprimer un rôle et retourner true", async () => {
      const mockQueryResult = createMockQueryResult<any>([], 1); // rowCount est important ici
      mockPoolQuery.mockResolvedValue(mockQueryResult);

      const result = await roleService.delete(1);

      expect(result).toBe(true);
      expect(mockPoolQuery).toHaveBeenCalledWith("DELETE FROM role WHERE id = $1", [1]);
    });

    it("devrait retourner false si le rôle à supprimer n'est pas trouvé", async () => {
      const mockQueryResult = createMockQueryResult<any>([], 0); // rowCount est important ici
      mockPoolQuery.mockResolvedValue(mockQueryResult);

      const result = await roleService.delete(99);

      expect(result).toBe(false);
    });

    it("devrait lever une exception en cas d'erreur de la base de données", async () => {
      mockPoolQuery.mockRejectedValue(new Error("DB error"));
      await expect(roleService.delete(1)).rejects.toThrow("Erreur lors de la suppression du rôle.");
    });
  });
});

