import { Request, Response } from 'express';
import { ChatFavoritesService } from '../services/chat-favorites.service';

/**
 * Contrôleur pour la gestion des favoris de chat
 */
export class ChatFavoritesController {
  private chatFavoritesService: ChatFavoritesService;

  constructor() {
    this.chatFavoritesService = new ChatFavoritesService();
  }

  /**
   * Récupère tous les favoris de chat
   */
  async getAllChatFavorites(req: Request, res: Response): Promise<void> {
    try {
      const favorites = await this.chatFavoritesService.findAll();
      res.status(200).json(favorites);
    } catch (error) {
      console.error('Erreur dans getAllChatFavorites:', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des favoris de chat', error: error.message });
    }
  }

  /**
   * Récupère un favori de chat par son ID
   */
  async getChatFavoriteById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de favori de chat invalide' });
        return;
      }

      const favorite = await this.chatFavoritesService.findById(id);
      if (!favorite) {
        res.status(404).json({ message: `Favori de chat avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json(favorite);
    } catch (error) {
      console.error(`Erreur dans getChatFavoriteById:`, error);
      res.status(500).json({ message: 'Erreur lors de la récupération du favori de chat', error: error.message });
    }
  }

  /**
   * Crée un nouveau favori de chat
   */
  async createChatFavorite(req: Request, res: Response): Promise<void> {
    try {
      const newFavorite = req.body;
      if (!newFavorite.name) {
        res.status(400).json({ message: 'Le nom du favori de chat est requis' });
        return;
      }

      const favorite = await this.chatFavoritesService.create(newFavorite);
      res.status(201).json(favorite);
    } catch (error) {
      console.error('Erreur dans createChatFavorite:', error);
      res.status(500).json({ message: 'Erreur lors de la création du favori de chat', error: error.message });
    }
  }

  /**
   * Met à jour un favori de chat existant
   */
  async updateChatFavorite(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de favori de chat invalide' });
        return;
      }

      const favoriteData = req.body;
      if (!favoriteData.name) {
        res.status(400).json({ message: 'Le nom du favori de chat est requis' });
        return;
      }

      const updatedFavorite = await this.chatFavoritesService.update(id, favoriteData);
      if (!updatedFavorite) {
        res.status(404).json({ message: `Favori de chat avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json(updatedFavorite);
    } catch (error) {
      console.error(`Erreur dans updateChatFavorite:`, error);
      res.status(500).json({ message: 'Erreur lors de la mise à jour du favori de chat', error: error.message });
    }
  }

  /**
   * Supprime un favori de chat
   */
  async deleteChatFavorite(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de favori de chat invalide' });
        return;
      }

      const deleted = await this.chatFavoritesService.delete(id);
      if (!deleted) {
        res.status(404).json({ message: `Favori de chat avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json({ message: `Favori de chat avec l'ID ${id} supprimé avec succès` });
    } catch (error) {
      console.error(`Erreur dans deleteChatFavorite:`, error);
      res.status(500).json({ message: 'Erreur lors de la suppression du favori de chat', error: error.message });
    }
  }
}
