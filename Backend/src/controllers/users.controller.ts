import { Request, Response } from 'express';
import { UsersService } from '../services/users.service';

/**
 * Contrôleur pour la gestion des utilisateurs
 */
export class UsersController {
  private usersService: UsersService;

  constructor() {
    this.usersService = new UsersService();
  }

  /**
   * Récupère tous les utilisateurs
   */
  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.usersService.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.error('Erreur dans getAllUsers:', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs', error: error.message });
    }
  }

  /**
   * Récupère un utilisateur par son ID
   */
  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID d\'utilisateur invalide' });
        return;
      }

      const user = await this.usersService.findById(id);
      if (!user) {
        res.status(404).json({ message: `Utilisateur avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json(user);
    } catch (error) {
      console.error(`Erreur dans getUserById:`, error);
      res.status(500).json({ message: 'Erreur lors de la récupération de l\'utilisateur', error: error.message });
    }
  }

  /**
   * Crée un nouvel utilisateur
   */
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const newUser = req.body;
      if (!newUser.name) {
        res.status(400).json({ message: 'Le nom de l\'utilisateur est requis' });
        return;
      }

      const user = await this.usersService.create(newUser);
      res.status(201).json(user);
    } catch (error) {
      console.error('Erreur dans createUser:', error);
      res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur', error: error.message });
    }
  }

  /**
   * Met à jour un utilisateur existant
   */
  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID d\'utilisateur invalide' });
        return;
      }

      const userData = req.body;
      if (!userData.name) {
        res.status(400).json({ message: 'Le nom de l\'utilisateur est requis' });
        return;
      }

      const updatedUser = await this.usersService.update(id, userData);
      if (!updatedUser) {
        res.status(404).json({ message: `Utilisateur avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json(updatedUser);
    } catch (error) {
      console.error(`Erreur dans updateUser:`, error);
      res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'utilisateur', error: error.message });
    }
  }

  /**
   * Supprime un utilisateur
   */
  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID d\'utilisateur invalide' });
        return;
      }

      const deleted = await this.usersService.delete(id);
      if (!deleted) {
        res.status(404).json({ message: `Utilisateur avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json({ message: `Utilisateur avec l'ID ${id} supprimé avec succès` });
    } catch (error) {
      console.error(`Erreur dans deleteUser:`, error);
      res.status(500).json({ message: 'Erreur lors de la suppression de l\'utilisateur', error: error.message });
    }
  }
}
