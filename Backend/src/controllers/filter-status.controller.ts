import { Request, Response } from 'express';
import { FilterStatusService } from '../services/filter-status.service';

/**
 * Contrôleur pour la gestion des statuts de filtre
 */
export class FilterStatusController {
  private filterStatusService: FilterStatusService;

  constructor() {
    this.filterStatusService = new FilterStatusService();
  }

  /**
   * Récupère tous les statuts de filtre
   */
  async getAllFilterStatuses(req: Request, res: Response): Promise<void> {
    try {
      const statuses = await this.filterStatusService.findAll();
      res.status(200).json(statuses);
    } catch (error) {
      console.error('Erreur dans getAllFilterStatuses:', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des statuts de filtre', error: error.message });
    }
  }

  /**
   * Récupère un statut de filtre par son ID
   */
  async getFilterStatusById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de statut de filtre invalide' });
        return;
      }

      const status = await this.filterStatusService.findById(id);
      if (!status) {
        res.status(404).json({ message: `Statut de filtre avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json(status);
    } catch (error) {
      console.error(`Erreur dans getFilterStatusById:`, error);
      res.status(500).json({ message: 'Erreur lors de la récupération du statut de filtre', error: error.message });
    }
  }

  /**
   * Crée un nouveau statut de filtre
   */
  async createFilterStatus(req: Request, res: Response): Promise<void> {
    try {
      const newStatus = req.body;
      if (!newStatus.value || !newStatus.label) {
        res.status(400).json({ message: 'La valeur et le libellé du statut de filtre sont requis' });
        return;
      }

      const status = await this.filterStatusService.create(newStatus);
      res.status(201).json(status);
    } catch (error) {
      console.error('Erreur dans createFilterStatus:', error);
      res.status(500).json({ message: 'Erreur lors de la création du statut de filtre', error: error.message });
    }
  }

  /**
   * Met à jour un statut de filtre existant
   */
  async updateFilterStatus(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de statut de filtre invalide' });
        return;
      }

      const statusData = req.body;
      if (!statusData.value || !statusData.label) {
        res.status(400).json({ message: 'La valeur et le libellé du statut de filtre sont requis' });
        return;
      }

      const updatedStatus = await this.filterStatusService.update(id, statusData);
      if (!updatedStatus) {
        res.status(404).json({ message: `Statut de filtre avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json(updatedStatus);
    } catch (error) {
      console.error(`Erreur dans updateFilterStatus:`, error);
      res.status(500).json({ message: 'Erreur lors de la mise à jour du statut de filtre', error: error.message });
    }
  }

  /**
   * Supprime un statut de filtre
   */
  async deleteFilterStatus(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de statut de filtre invalide' });
        return;
      }

      const deleted = await this.filterStatusService.delete(id);
      if (!deleted) {
        res.status(404).json({ message: `Statut de filtre avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json({ message: `Statut de filtre avec l'ID ${id} supprimé avec succès` });
    } catch (error) {
      console.error(`Erreur dans deleteFilterStatus:`, error);
      res.status(500).json({ message: 'Erreur lors de la suppression du statut de filtre', error: error.message });
    }
  }
}
