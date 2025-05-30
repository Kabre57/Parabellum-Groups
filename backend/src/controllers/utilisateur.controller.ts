import { Request, Response } from "express";
import { UtilisateurService } from "../services/utilisateur.service";
import { db } from "../config/db";
import { Utilisateur } from "../models/entities/utilisateur.entity";
import { validationSchemas } from "../middlewares/validation.middleware";
import { validate } from "../middlewares/validation.middleware";

const utilisateurService = new UtilisateurService(db);

export class UtilisateurController {
  /**
   * Récupère tous les utilisateurs
   */
  public async getAllUtilisateurs(req: Request, res: Response): Promise<void> {
    try {
      const utilisateurs = await utilisateurService.getAllUtilisateurs();
      res.status(200).json(utilisateurs);
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  /**
   * Récupère un utilisateur par son ID
   */
  public async getUtilisateurById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        res.status(400).json({ error: true, message: "ID d'utilisateur invalide." });
        return;
      }
      
      const utilisateur = await utilisateurService.getUtilisateurById(id);
      if (utilisateur) {
        res.status(200).json(utilisateur);
      } else {
        res.status(404).json({ error: true, message: "Utilisateur non trouvé." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  /**
   * Crée un nouvel utilisateur
   */
  public async createUtilisateur(req: Request, res: Response): Promise<void> {
    try {
      // La validation est gérée par le middleware validate
      const utilisateurData: Partial<Utilisateur> = req.body;
      
      const nouvelUtilisateurId = await utilisateurService.createUtilisateur(utilisateurData);
      
      if (nouvelUtilisateurId) {
        // Récupérer l'utilisateur complet
        const nouvelUtilisateur = await utilisateurService.getUtilisateurById(nouvelUtilisateurId);
        
        // Vérifier que l'utilisateur a bien été récupéré
        if (!nouvelUtilisateur) {
          console.error("Erreur: Utilisateur créé mais non récupérable avec l'ID:", nouvelUtilisateurId);
          res.status(500).json({ 
            error: true, 
            message: "Utilisateur créé mais impossible de récupérer ses informations." 
          });
          return;
        }
        
        // S'assurer que l'ID est bien présent dans l'objet utilisateur
        const utilisateurAvecId = {
          id: nouvelUtilisateurId,
          ...nouvelUtilisateur
        };
        
        // Log pour débogage
        console.log("Utilisateur créé:", utilisateurAvecId);
        
        // Retourner l'objet utilisateur complet avec son ID
        res.status(201).json({ 
          message: "Utilisateur créé avec succès", 
          utilisateur: utilisateurAvecId
        });
      } else {
        res.status(400).json({ error: true, message: "Erreur lors de la création de l'utilisateur." });
      }
    } catch (error: any) {
      if (error.message === "L'email existe déjà.") {
        res.status(409).json({ error: true, message: error.message });
      } else if (error.message === "Le nom et l'email sont requis." || 
                 error.message === "Le mot de passe est requis et ne peut pas être vide.") {
        res.status(400).json({ error: true, message: error.message });
      } else {
        res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
      }
    }
  }

  /**
   * Met à jour un utilisateur existant
   */
  public async updateUtilisateur(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        res.status(400).json({ error: true, message: "ID d'utilisateur invalide." });
        return;
      }
      
      // La validation est gérée par le middleware validate
      const utilisateurData: Partial<Utilisateur> = req.body;
      
      if (Object.keys(utilisateurData).length === 0) {
        res.status(400).json({ error: true, message: "Aucune donnée à mettre à jour." });
        return;
      }

      const utilisateurModifie = await utilisateurService.updateUtilisateur(id, utilisateurData);
      
      if (utilisateurModifie) {
        // S'assurer que l'ID est bien présent dans l'objet utilisateur
        const utilisateurAvecId = {
          id: id,
          ...utilisateurModifie
        };
        
        res.status(200).json({ 
          message: "Utilisateur modifié avec succès", 
          utilisateur: utilisateurAvecId
        });
      } else {
        res.status(404).json({ error: true, message: "Utilisateur non trouvé ou erreur lors de la modification." });
      }
    } catch (error: any) {
      if (error.message === "L'email existe déjà pour un autre utilisateur.") {
        res.status(409).json({ error: true, message: error.message });
      } else if (error.message === "Le nouveau mot de passe ne peut pas être vide.") {
        res.status(400).json({ error: true, message: error.message });
      } else {
        res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
      }
    }
  }

  /**
   * Supprime un utilisateur
   */
  public async deleteUtilisateur(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        res.status(400).json({ error: true, message: "ID d'utilisateur invalide." });
        return;
      }
      
      const success = await utilisateurService.deleteUtilisateur(id);
      
      if (success) {
        res.status(200).json({ message: "Utilisateur supprimé avec succès." });
      } else {
        res.status(404).json({ error: true, message: "Utilisateur non trouvé ou erreur lors de la suppression." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }
}
