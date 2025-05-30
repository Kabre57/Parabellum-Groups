import { Request, Response } from 'express';
import { EventOptionsService } from '../services/event-options.service';

/**
 * Contrôleur pour la gestion des options d'événements
 */
export class EventOptionsController {
  private eventOptionsService: EventOptionsService;

  constructor() {
    this.eventOptionsService = new EventOptionsService();
  }

  /**
   * Récupère toutes les options d'événements
   */
  async getAllEventOptions(req: Request, res: Response): Promise<void> {
    try {
      const options = await this.eventOptionsService.findAll();
      res.status(200).json(options);
    } catch (error) {
      console.error('Erreur dans getAllEventOptions:', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des options d\'événements', error: error.message });
    }
  }

  /**
   * Récupère une option d'événement par son ID
   */
  async getEventOptionById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID d\'option d\'événement invalide' });
        return;
      }

      const option = await this.eventOptionsService.findById(id);
      if (!option) {
        res.status(404).json({ message: `Option d'événement avec l'ID ${id} non trouvée` });
        return;
      }

      res.status(200).json(option);
    } catch (error) {
      console.error(`Erreur dans getEventOptionById:`, error);
      res.status(500).json({ message: 'Erreur lors de la récupération de l\'option d\'événement', error: error.message });
    }
  }

  /**
   * Crée une nouvelle option d'événement
   */
  async createEventOption(req: Request, res: Response): Promise<void> {
    try {
      const newOption = req.body;
      if (!newOption.value || !newOption.label) {
        res.status(400).json({ message: 'La valeur et le libellé de l\'option d\'événement sont requis' });
        return;
      }

      const option = await this.eventOptionsService.create(newOption);
      res.status(201).json(option);
    } catch (error) {
      console.error('Erreur dans createEventOption:', error);
      res.status(500).json({ message: 'Erreur lors de la création de l\'option d\'événement', error: error.message });
    }
  }

  /**
   * Met à jour une option d'événement existante
   */
  async updateEventOption(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID d\'option d\'événement invalide' });
        return;
      }

      const optionData = req.body;
      if (!optionData.value || !optionData.label) {
        res.status(400).json({ message: 'La valeur et le libellé de l\'option d\'événement sont requis' });
        return;
      }

      const updatedOption = await this.eventOptionsService.update(id, optionData);
      if (!updatedOption) {
        res.status(404).json({ message: `Option d'événement avec l'ID ${id} non trouvée` });
        return;
      }

      res.status(200).json(updatedOption);
    } catch (error) {
      console.error(`Erreur dans updateEventOption:`, error);
      res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'option d\'événement', error: error.message });
    }
  }

  /**
   * Supprime une option d'événement
   */
  async deleteEventOption(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID d\'option d\'événement invalide' });
        return;
      }

      const deleted = await this.eventOptionsService.delete(id);
      if (!deleted) {
        res.status(404).json({ message: `Option d'événement avec l'ID ${id} non trouvée` });
        return;
      }

      res.status(200).json({ message: `Option d'événement avec l'ID ${id} supprimée avec succès` });
    } catch (error) {
      console.error(`Erreur dans deleteEventOption:`, error);
      res.status(500).json({ message: 'Erreur lors de la suppression de l\'option d\'événement', error: error.message });
    }
  }
}
