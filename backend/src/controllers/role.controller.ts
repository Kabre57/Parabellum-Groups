import { Request, Response } from "express";
import { RoleService } from "../services/role.service";
import { RoleSchema } from "../models/validation.schemas";
import { Role } from "../models/role.model";

const roleService = new RoleService();

export class RoleController {
  public async getAllRoles(req: Request, res: Response): Promise<void> {
    try {
      const roles = await roleService.getAll();
      res.status(200).json(roles);
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async getRoleById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        res.status(400).json({ error: true, message: "ID de rôle invalide." });
        return;
      }
      const role = await roleService.getById(id);
      if (role) {
        res.status(200).json(role);
      } else {
        res.status(404).json({ error: true, message: "Rôle non trouvé." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async createRole(req: Request, res: Response): Promise<void> {
    try {
      const validationResult = RoleSchema.safeParse(req.body);
      if (!validationResult.success) {
        res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
        return;
      }
      const roleData: Role = validationResult.data;
      const nouveauRole = await roleService.create(roleData);
      if (nouveauRole) {
        res.status(201).json({ message: "Rôle créé avec succès", role: nouveauRole });
      } else {
        res.status(400).json({ error: true, message: "Erreur lors de la création du rôle." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async updateRole(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        res.status(400).json({ error: true, message: "ID de rôle invalide." });
        return;
      }
      const validationResult = RoleSchema.safeParse(req.body);
      if (!validationResult.success) {
        res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
        return;
      }
      const roleData: Role = validationResult.data;
      const roleModifie = await roleService.update(id, roleData);
      if (roleModifie) {
        res.status(200).json({ message: "Rôle modifié avec succès", role: roleModifie });
      } else {
        res.status(404).json({ error: true, message: "Rôle non trouvé ou erreur lors de la modification." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async deleteRole(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        res.status(400).json({ error: true, message: "ID de rôle invalide." });
        return;
      }
      const success = await roleService.delete(id);
      if (success) {
        res.status(200).json({ message: "Rôle supprimé avec succès." }); // Changed to 200 as 204 should not have a body
      } else {
        res.status(404).json({ error: true, message: "Rôle non trouvé ou erreur lors de la suppression." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }
}

