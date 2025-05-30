import { Request, Response } from "express";
import { InterventionService } from "../services/intervention.service";
import { InterventionSchema } from "../models/validation.schemas";
import { Intervention } from "../models/intervention.model";

const interventionService = new InterventionService();

export class InterventionController {
  public async getAllInterventions(req: Request, res: Response): Promise<void> {
    try {
      const interventions = await interventionService.getAll();
      res.status(200).json(interventions);
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async getInterventionById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        res.status(400).json({ error: true, message: "ID d'intervention invalide." });
        return;
      }
      const intervention = await interventionService.getById(id);
      if (intervention) {
        res.status(200).json(intervention);
      } else {
        res.status(404).json({ error: true, message: "Intervention non trouvée." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async createIntervention(req: Request, res: Response): Promise<void> {
    try {
      const validationResult = InterventionSchema.safeParse(req.body);
      if (!validationResult.success) {
        res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
        return;
      }
      const interventionData: Intervention = validationResult.data;
      const nouvelleIntervention = await interventionService.create(interventionData);
      if (nouvelleIntervention) {
        res.status(201).json({ message: "Intervention créée avec succès", intervention: nouvelleIntervention });
      } else {
        res.status(400).json({ error: true, message: "Erreur lors de la création de l'intervention." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async updateIntervention(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        res.status(400).json({ error: true, message: "ID d'intervention invalide." });
        return;
      }
      const validationResult = InterventionSchema.partial().safeParse(req.body);
      if (!validationResult.success) {
        res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
        return;
      }
      const interventionData: Partial<Intervention> = validationResult.data;
      if (Object.keys(interventionData).length === 0) {
        res.status(400).json({ error: true, message: "Aucune donnée à mettre à jour." });
        return;
      }
      const interventionModifiee = await interventionService.update(id, interventionData);
      if (interventionModifiee) {
        res.status(200).json({ message: "Intervention modifiée avec succès", intervention: interventionModifiee });
      } else {
        res.status(404).json({ error: true, message: "Intervention non trouvée ou erreur lors de la modification." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async deleteIntervention(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        res.status(400).json({ error: true, message: "ID d'intervention invalide." });
        return;
      }
      const success = await interventionService.delete(id);
      if (success) {
        res.status(200).json({ message: "Intervention supprimée avec succès." });
      } else {
        res.status(404).json({ error: true, message: "Intervention non trouvée ou erreur lors de la suppression." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }
}

