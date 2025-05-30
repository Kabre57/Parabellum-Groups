import { Request, Response } from "express";
import { TechnicienService } from "../services/technicien.service";
import { TechnicienSchema } from "../models/validation.schemas";
import { Technicien } from "../models/technicien.model";

const technicienService = new TechnicienService();

export class TechnicienController {
  public async getAllTechniciens(req: Request, res: Response): Promise<void> {
    try {
      const techniciens = await technicienService.getAll();
      res.status(200).json(techniciens);
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async getTechnicienById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        res.status(400).json({ error: true, message: "ID de technicien invalide." });
        return;
      }
      const technicien = await technicienService.getById(id);
      if (technicien) {
        res.status(200).json(technicien);
      } else {
        res.status(404).json({ error: true, message: "Technicien non trouvé." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async createTechnicien(req: Request, res: Response): Promise<void> {
    try {
      const validationResult = TechnicienSchema.safeParse(req.body);
      if (!validationResult.success) {
        res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
        return;
      }
      const technicienData: Technicien = validationResult.data;
      const nouveauTechnicien = await technicienService.create(technicienData);
      if (nouveauTechnicien) {
        res.status(201).json({ message: "Technicien créé avec succès", technicien: nouveauTechnicien });
      } else {
        res.status(400).json({ error: true, message: "Erreur lors de la création du technicien." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async updateTechnicien(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        res.status(400).json({ error: true, message: "ID de technicien invalide." });
        return;
      }
      const validationResult = TechnicienSchema.partial().safeParse(req.body);
      if (!validationResult.success) {
        res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
        return;
      }
      const technicienData: Partial<Technicien> = validationResult.data;
      if (Object.keys(technicienData).length === 0) {
        res.status(400).json({ error: true, message: "Aucune donnée à mettre à jour." });
        return;
      }
      const technicienModifie = await technicienService.update(id, technicienData);
      if (technicienModifie) {
        res.status(200).json({ message: "Technicien modifié avec succès", technicien: technicienModifie });
      } else {
        res.status(404).json({ error: true, message: "Technicien non trouvé ou erreur lors de la modification." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async deleteTechnicien(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        res.status(400).json({ error: true, message: "ID de technicien invalide." });
        return;
      }
      const success = await technicienService.delete(id);
      if (success) {
        res.status(200).json({ message: "Technicien supprimé avec succès." });
      } else {
        res.status(404).json({ error: true, message: "Technicien non trouvé ou erreur lors de la suppression." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }
}

