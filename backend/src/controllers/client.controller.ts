import { Request, Response } from "express";
import { ClientService } from "../services/client.service";
import { ClientSchema } from "../models/validation.schemas";
import { Client } from "../models/client.model";

const clientService = new ClientService();

export class ClientController {
  public async getAllClients(req: Request, res: Response): Promise<void> {
    try {
      const clients = await clientService.getAll();
      res.status(200).json(clients);
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async getClientById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        res.status(400).json({ error: true, message: "ID de client invalide." });
        return;
      }
      const client = await clientService.getById(id);
      if (client) {
        res.status(200).json(client);
      } else {
        res.status(404).json({ error: true, message: "Client non trouvé." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async createClient(req: Request, res: Response): Promise<void> {
    try {
      const validationResult = ClientSchema.safeParse(req.body);
      if (!validationResult.success) {
        res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
        return;
      }
      const clientData: Client = validationResult.data;
      const nouveauClient = await clientService.create(clientData);
      if (nouveauClient) {
        res.status(201).json({ message: "Client créé avec succès", client: nouveauClient });
      } else {
        res.status(400).json({ error: true, message: "Erreur lors de la création du client." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async updateClient(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        res.status(400).json({ error: true, message: "ID de client invalide." });
        return;
      }
      const validationResult = ClientSchema.partial().safeParse(req.body);
      if (!validationResult.success) {
        res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
        return;
      }
      const clientData: Partial<Client> = validationResult.data;
      if (Object.keys(clientData).length === 0) {
        res.status(400).json({ error: true, message: "Aucune donnée à mettre à jour." });
        return;
      }
      const clientModifie = await clientService.update(id, clientData);
      if (clientModifie) {
        res.status(200).json({ message: "Client modifié avec succès", client: clientModifie });
      } else {
        res.status(404).json({ error: true, message: "Client non trouvé ou erreur lors de la modification." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }

  public async deleteClient(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        res.status(400).json({ error: true, message: "ID de client invalide." });
        return;
      }
      const success = await clientService.delete(id);
      if (success) {
        res.status(200).json({ message: "Client supprimé avec succès." });
      } else {
        res.status(404).json({ error: true, message: "Client non trouvé ou erreur lors de la suppression." });
      }
    } catch (error: any) {
      res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
    }
  }
}

