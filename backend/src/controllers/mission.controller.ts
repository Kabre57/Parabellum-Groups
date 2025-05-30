import { Request, Response } from "express";
import { MissionService } from "../services/mission.service";
import { MissionSchema } from "../models/validation.schemas";
import { Mission } from "../models/mission.model";

const missionService = new MissionService();

export class MissionController {
  public async getAllMissions(req: Request, res: Response): Promise<void> {
    try {
      const missions = await missionService.getAll();
      res.status(200).json(missions);
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async getMissionById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        res.status(400).json({ error: true, message: "ID de mission invalide." });
        return;
      }
      const mission = await missionService.getById(id);
      if (mission) {
        res.status(200).json(mission);
      } else {
        res.status(404).json({ error: true, message: "Mission non trouvée." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async createMission(req: Request, res: Response): Promise<void> {
    try {
      const validationResult = MissionSchema.safeParse(req.body);
      if (!validationResult.success) {
        res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
        return;
      }
      const missionData: Mission = validationResult.data;
      const nouvelleMission = await missionService.create(missionData);
      if (nouvelleMission) {
        res.status(201).json({ message: "Mission créée avec succès", mission: nouvelleMission });
      } else {
        res.status(400).json({ error: true, message: "Erreur lors de la création de la mission." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async updateMission(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        res.status(400).json({ error: true, message: "ID de mission invalide." });
        return;
      }
      const validationResult = MissionSchema.partial().safeParse(req.body);
      if (!validationResult.success) {
        res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
        return;
      }
      const missionData: Partial<Mission> = validationResult.data;
      if (Object.keys(missionData).length === 0) {
        res.status(400).json({ error: true, message: "Aucune donnée à mettre à jour." });
        return;
      }
      const missionModifiee = await missionService.update(id, missionData);
      if (missionModifiee) {
        res.status(200).json({ message: "Mission modifiée avec succès", mission: missionModifiee });
      } else {
        res.status(404).json({ error: true, message: "Mission non trouvée ou erreur lors de la modification." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async deleteMission(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        res.status(400).json({ error: true, message: "ID de mission invalide." });
        return;
      }
      const success = await missionService.delete(id);
      if (success) {
        res.status(200).json({ message: "Mission supprimée avec succès." });
      } else {
        res.status(404).json({ error: true, message: "Mission non trouvée ou erreur lors de la suppression." });
      }
    } catch (error: any) {
      if (error.message === "Cannot delete mission because it is referenced by interventions.") {
        res.status(409).json({ error: true, message: error.message });
      } else {
        res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
      }
    }
  }
}

