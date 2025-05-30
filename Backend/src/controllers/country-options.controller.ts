import { Request, Response } from 'express';
import { CountryOptionsService } from '../services/country-options.service';

/**
 * Contrôleur pour la gestion des options de pays
 */
export class CountryOptionsController {
  private countryOptionsService: CountryOptionsService;

  constructor() {
    this.countryOptionsService = new CountryOptionsService();
  }

  /**
   * Récupère toutes les options de pays
   */
  async getAllCountryOptions(req: Request, res: Response): Promise<void> {
    try {
      const options = await this.countryOptionsService.findAll();
      res.status(200).json(options);
    } catch (error) {
      console.error('Erreur dans getAllCountryOptions:', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des options de pays', error: error.message });
    }
  }

  /**
   * Récupère une option de pays par son ID
   */
  async getCountryOptionById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID d\'option de pays invalide' });
        return;
      }

      const option = await this.countryOptionsService.findById(id);
      if (!option) {
        res.status(404).json({ message: `Option de pays avec l'ID ${id} non trouvée` });
        return;
      }

      res.status(200).json(option);
    } catch (error) {
      console.error(`Erreur dans getCountryOptionById:`, error);
      res.status(500).json({ message: 'Erreur lors de la récupération de l\'option de pays', error: error.message });
    }
  }

  /**
   * Crée une nouvelle option de pays
   */
  async createCountryOption(req: Request, res: Response): Promise<void> {
    try {
      const newOption = req.body;
      if (!newOption.value || !newOption.label) {
        res.status(400).json({ message: 'La valeur et le libellé de l\'option de pays sont requis' });
        return;
      }

      const option = await this.countryOptionsService.create(newOption);
      res.status(201).json(option);
    } catch (error) {
      console.error('Erreur dans createCountryOption:', error);
      res.status(500).json({ message: 'Erreur lors de la création de l\'option de pays', error: error.message });
    }
  }

  /**
   * Met à jour une option de pays existante
   */
  async updateCountryOption(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID d\'option de pays invalide' });
        return;
      }

      const optionData = req.body;
      if (!optionData.value || !optionData.label) {
        res.status(400).json({ message: 'La valeur et le libellé de l\'option de pays sont requis' });
        return;
      }

      const updatedOption = await this.countryOptionsService.update(id, optionData);
      if (!updatedOption) {
        res.status(404).json({ message: `Option de pays avec l'ID ${id} non trouvée` });
        return;
      }

      res.status(200).json(updatedOption);
    } catch (error) {
      console.error(`Erreur dans updateCountryOption:`, error);
      res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'option de pays', error: error.message });
    }
  }

  /**
   * Supprime une option de pays
   */
  async deleteCountryOption(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID d\'option de pays invalide' });
        return;
      }

      const deleted = await this.countryOptionsService.delete(id);
      if (!deleted) {
        res.status(404).json({ message: `Option de pays avec l'ID ${id} non trouvée` });
        return;
      }

      res.status(200).json({ message: `Option de pays avec l'ID ${id} supprimée avec succès` });
    } catch (error) {
      console.error(`Erreur dans deleteCountryOption:`, error);
      res.status(500).json({ message: 'Erreur lors de la suppression de l\'option de pays', error: error.message });
    }
  }
}
