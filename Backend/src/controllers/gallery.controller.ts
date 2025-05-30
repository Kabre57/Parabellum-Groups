import { Request, Response } from 'express';
import { GalleryService } from '../services/gallery.service';

/**
 * Contrôleur pour la gestion de la galerie
 */
export class GalleryController {
  private galleryService: GalleryService;

  constructor() {
    this.galleryService = new GalleryService();
  }

  /**
   * Récupère tous les éléments de la galerie
   */
  async getAllGalleryItems(req: Request, res: Response): Promise<void> {
    try {
      const galleryItems = await this.galleryService.findAll();
      res.status(200).json(galleryItems);
    } catch (error) {
      console.error('Erreur dans getAllGalleryItems:', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des éléments de la galerie', error: error.message });
    }
  }

  /**
   * Récupère un élément de la galerie par son ID
   */
  async getGalleryItemById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID d\'élément de galerie invalide' });
        return;
      }

      const galleryItem = await this.galleryService.findById(id);
      if (!galleryItem) {
        res.status(404).json({ message: `Élément de galerie avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json(galleryItem);
    } catch (error) {
      console.error(`Erreur dans getGalleryItemById:`, error);
      res.status(500).json({ message: 'Erreur lors de la récupération de l\'élément de galerie', error: error.message });
    }
  }

  /**
   * Crée un nouvel élément de galerie
   */
  async createGalleryItem(req: Request, res: Response): Promise<void> {
    try {
      const newGalleryItem = req.body;
      if (!newGalleryItem.user_name) {
        res.status(400).json({ message: 'Le nom d\'utilisateur est requis pour l\'élément de galerie' });
        return;
      }

      const galleryItem = await this.galleryService.create(newGalleryItem);
      res.status(201).json(galleryItem);
    } catch (error) {
      console.error('Erreur dans createGalleryItem:', error);
      res.status(500).json({ message: 'Erreur lors de la création de l\'élément de galerie', error: error.message });
    }
  }

  /**
   * Met à jour un élément de galerie existant
   */
  async updateGalleryItem(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID d\'élément de galerie invalide' });
        return;
      }

      const galleryItemData = req.body;
      if (!galleryItemData.user_name) {
        res.status(400).json({ message: 'Le nom d\'utilisateur est requis pour l\'élément de galerie' });
        return;
      }

      const updatedGalleryItem = await this.galleryService.update(id, galleryItemData);
      if (!updatedGalleryItem) {
        res.status(404).json({ message: `Élément de galerie avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json(updatedGalleryItem);
    } catch (error) {
      console.error(`Erreur dans updateGalleryItem:`, error);
      res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'élément de galerie', error: error.message });
    }
  }

  /**
   * Supprime un élément de galerie
   */
  async deleteGalleryItem(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID d\'élément de galerie invalide' });
        return;
      }

      const deleted = await this.galleryService.delete(id);
      if (!deleted) {
        res.status(404).json({ message: `Élément de galerie avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json({ message: `Élément de galerie avec l'ID ${id} supprimé avec succès` });
    } catch (error) {
      console.error(`Erreur dans deleteGalleryItem:`, error);
      res.status(500).json({ message: 'Erreur lors de la suppression de l\'élément de galerie', error: error.message });
    }
  }
}
