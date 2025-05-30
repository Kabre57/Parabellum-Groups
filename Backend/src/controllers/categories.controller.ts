import { Request, Response } from 'express';
import { CategoriesService } from '../services/categories.service';

/**
 * Contrôleur pour la gestion des catégories
 */
export class CategoriesController {
  private categoriesService: CategoriesService;

  constructor() {
    this.categoriesService = new CategoriesService();
  }

  /**
   * Récupère toutes les catégories
   */
  async getAllCategories(req: Request, res: Response): Promise<void> {
    try {
      const categories = await this.categoriesService.findAll();
      res.status(200).json(categories);
    } catch (error) {
      console.error('Erreur dans getAllCategories:', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des catégories', error: error.message });
    }
  }

  /**
   * Récupère une catégorie par son ID
   */
  async getCategoryById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de catégorie invalide' });
        return;
      }

      const category = await this.categoriesService.findById(id);
      if (!category) {
        res.status(404).json({ message: `Catégorie avec l'ID ${id} non trouvée` });
        return;
      }

      res.status(200).json(category);
    } catch (error) {
      console.error(`Erreur dans getCategoryById:`, error);
      res.status(500).json({ message: 'Erreur lors de la récupération de la catégorie', error: error.message });
    }
  }

  /**
   * Crée une nouvelle catégorie
   */
  async createCategory(req: Request, res: Response): Promise<void> {
    try {
      const newCategory = req.body;
      if (!newCategory.value || !newCategory.label) {
        res.status(400).json({ message: 'La valeur et le libellé de la catégorie sont requis' });
        return;
      }

      const category = await this.categoriesService.create(newCategory);
      res.status(201).json(category);
    } catch (error) {
      console.error('Erreur dans createCategory:', error);
      res.status(500).json({ message: 'Erreur lors de la création de la catégorie', error: error.message });
    }
  }

  /**
   * Met à jour une catégorie existante
   */
  async updateCategory(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de catégorie invalide' });
        return;
      }

      const categoryData = req.body;
      if (!categoryData.value || !categoryData.label) {
        res.status(400).json({ message: 'La valeur et le libellé de la catégorie sont requis' });
        return;
      }

      const updatedCategory = await this.categoriesService.update(id, categoryData);
      if (!updatedCategory) {
        res.status(404).json({ message: `Catégorie avec l'ID ${id} non trouvée` });
        return;
      }

      res.status(200).json(updatedCategory);
    } catch (error) {
      console.error(`Erreur dans updateCategory:`, error);
      res.status(500).json({ message: 'Erreur lors de la mise à jour de la catégorie', error: error.message });
    }
  }

  /**
   * Supprime une catégorie
   */
  async deleteCategory(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de catégorie invalide' });
        return;
      }

      const deleted = await this.categoriesService.delete(id);
      if (!deleted) {
        res.status(404).json({ message: `Catégorie avec l'ID ${id} non trouvée` });
        return;
      }

      res.status(200).json({ message: `Catégorie avec l'ID ${id} supprimée avec succès` });
    } catch (error) {
      console.error(`Erreur dans deleteCategory:`, error);
      res.status(500).json({ message: 'Erreur lors de la suppression de la catégorie', error: error.message });
    }
  }
}
