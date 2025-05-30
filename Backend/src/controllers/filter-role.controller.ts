import { Request, Response } from 'express';
import { FilterRoleService } from '../services/filter-role.service';

/**
 * Contrôleur pour la gestion des rôles de filtre
 */
export class FilterRoleController {
  private filterRoleService: FilterRoleService;

  constructor() {
    this.filterRoleService = new FilterRoleService();
  }

  /**
   * Récupère tous les rôles de filtre
   */
  async getAllFilterRoles(req: Request, res: Response): Promise<void> {
    try {
      const roles = await this.filterRoleService.findAll();
      res.status(200).json(roles);
    } catch (error) {
      console.error('Erreur dans getAllFilterRoles:', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des rôles de filtre', error: error.message });
    }
  }

  /**
   * Récupère un rôle de filtre par son ID
   */
  async getFilterRoleById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de rôle de filtre invalide' });
        return;
      }

      const role = await this.filterRoleService.findById(id);
      if (!role) {
        res.status(404).json({ message: `Rôle de filtre avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json(role);
    } catch (error) {
      console.error(`Erreur dans getFilterRoleById:`, error);
      res.status(500).json({ message: 'Erreur lors de la récupération du rôle de filtre', error: error.message });
    }
  }

  /**
   * Crée un nouveau rôle de filtre
   */
  async createFilterRole(req: Request, res: Response): Promise<void> {
    try {
      const newRole = req.body;
      if (!newRole.value || !newRole.label) {
        res.status(400).json({ message: 'La valeur et le libellé du rôle de filtre sont requis' });
        return;
      }

      const role = await this.filterRoleService.create(newRole);
      res.status(201).json(role);
    } catch (error) {
      console.error('Erreur dans createFilterRole:', error);
      res.status(500).json({ message: 'Erreur lors de la création du rôle de filtre', error: error.message });
    }
  }

  /**
   * Met à jour un rôle de filtre existant
   */
  async updateFilterRole(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de rôle de filtre invalide' });
        return;
      }

      const roleData = req.body;
      if (!roleData.value || !roleData.label) {
        res.status(400).json({ message: 'La valeur et le libellé du rôle de filtre sont requis' });
        return;
      }

      const updatedRole = await this.filterRoleService.update(id, roleData);
      if (!updatedRole) {
        res.status(404).json({ message: `Rôle de filtre avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json(updatedRole);
    } catch (error) {
      console.error(`Erreur dans updateFilterRole:`, error);
      res.status(500).json({ message: 'Erreur lors de la mise à jour du rôle de filtre', error: error.message });
    }
  }

  /**
   * Supprime un rôle de filtre
   */
  async deleteFilterRole(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de rôle de filtre invalide' });
        return;
      }

      const deleted = await this.filterRoleService.delete(id);
      if (!deleted) {
        res.status(404).json({ message: `Rôle de filtre avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json({ message: `Rôle de filtre avec l'ID ${id} supprimé avec succès` });
    } catch (error) {
      console.error(`Erreur dans deleteFilterRole:`, error);
      res.status(500).json({ message: 'Erreur lors de la suppression du rôle de filtre', error: error.message });
    }
  }
}
