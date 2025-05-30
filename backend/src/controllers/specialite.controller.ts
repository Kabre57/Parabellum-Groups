import { Request, Response } from "express";
import { SpecialiteService } from "../services/specialite.service";
import { SpecialiteSchema } from "../models/validation.schemas";
import { Specialite } from "../models/specialite.model";

const specialiteService = new SpecialiteService();

export class SpecialiteController {
  public async getAllSpecialites(req: Request, res: Response): Promise<void> {
    try {
      const specialites = await specialiteService.getAll();
      res.status(200).json(specialites);
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async getSpecialiteById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        res.status(400).json({ error: true, message: "ID de spécialité invalide." });
        return;
      }
      const specialite = await specialiteService.getById(id);
      if (specialite) {
        res.status(200).json(specialite);
      } else {
        res.status(404).json({ error: true, message: "Spécialité non trouvée." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async createSpecialite(req: Request, res: Response): Promise<void> {
    try {
      const validationResult = SpecialiteSchema.safeParse(req.body);
      if (!validationResult.success) {
        res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
        return;
      }
      const specialiteData: Specialite = validationResult.data;
      const nouvelleSpecialite = await specialiteService.create(specialiteData);
      if (nouvelleSpecialite) {
        res.status(201).json({ message: "Spécialité créée avec succès", specialite: nouvelleSpecialite });
      } else {
        res.status(400).json({ error: true, message: "Erreur lors de la création de la spécialité." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async updateSpecialite(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        res.status(400).json({ error: true, message: "ID de spécialité invalide." });
        return;
      }
      const validationResult = SpecialiteSchema.partial().safeParse(req.body);
      if (!validationResult.success) {
        res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
        return;
      }
      const specialiteData: Partial<Specialite> = validationResult.data;
       if (Object.keys(specialiteData).length === 0) {
        res.status(400).json({ error: true, message: "Aucune donnée à mettre à jour." });
        return;
      }
      const specialiteModifiee = await specialiteService.update(id, specialiteData);
      if (specialiteModifiee) {
        res.status(200).json({ message: "Spécialité modifiée avec succès", specialite: specialiteModifiee });
      } else {
        res.status(404).json({ error: true, message: "Spécialité non trouvée ou erreur lors de la modification." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async deleteSpecialite(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        res.status(400).json({ error: true, message: "ID de spécialité invalide." });
        return;
      }
      const success = await specialiteService.delete(id);
      if (success) {
        res.status(200).json({ message: "Spécialité supprimée avec succès." });
      } else {
        res.status(404).json({ error: true, message: "Spécialité non trouvée ou erreur lors de la suppression." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }
}

