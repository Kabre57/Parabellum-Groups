import { Request, Response } from 'express';
import { ChatsService } from '../services/chats.service';

/**
 * Contrôleur pour la gestion des chats
 */
export class ChatsController {
  private chatsService: ChatsService;

  constructor() {
    this.chatsService = new ChatsService();
  }

  /**
   * Récupère tous les chats
   */
  async getAllChats(req: Request, res: Response): Promise<void> {
    try {
      const chats = await this.chatsService.findAll();
      res.status(200).json(chats);
    } catch (error) {
      console.error('Erreur dans getAllChats:', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des chats', error: error.message });
    }
  }

  /**
   * Récupère un chat par son ID
   */
  async getChatById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de chat invalide' });
        return;
      }

      const chat = await this.chatsService.findById(id);
      if (!chat) {
        res.status(404).json({ message: `Chat avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json(chat);
    } catch (error) {
      console.error(`Erreur dans getChatById:`, error);
      res.status(500).json({ message: 'Erreur lors de la récupération du chat', error: error.message });
    }
  }

  /**
   * Crée un nouveau chat
   */
  async createChat(req: Request, res: Response): Promise<void> {
    try {
      const newChat = req.body;
      if (!newChat.name) {
        res.status(400).json({ message: 'Le nom du chat est requis' });
        return;
      }

      const chat = await this.chatsService.create(newChat);
      res.status(201).json(chat);
    } catch (error) {
      console.error('Erreur dans createChat:', error);
      res.status(500).json({ message: 'Erreur lors de la création du chat', error: error.message });
    }
  }

  /**
   * Met à jour un chat existant
   */
  async updateChat(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de chat invalide' });
        return;
      }

      const chatData = req.body;
      if (!chatData.name) {
        res.status(400).json({ message: 'Le nom du chat est requis' });
        return;
      }

      const updatedChat = await this.chatsService.update(id, chatData);
      if (!updatedChat) {
        res.status(404).json({ message: `Chat avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json(updatedChat);
    } catch (error) {
      console.error(`Erreur dans updateChat:`, error);
      res.status(500).json({ message: 'Erreur lors de la mise à jour du chat', error: error.message });
    }
  }

  /**
   * Supprime un chat
   */
  async deleteChat(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de chat invalide' });
        return;
      }

      const deleted = await this.chatsService.delete(id);
      if (!deleted) {
        res.status(404).json({ message: `Chat avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json({ message: `Chat avec l'ID ${id} supprimé avec succès` });
    } catch (error) {
      console.error(`Erreur dans deleteChat:`, error);
      res.status(500).json({ message: 'Erreur lors de la suppression du chat', error: error.message });
    }
  }
}
