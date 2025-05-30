import { Request, Response } from 'express';
import { CustomersService } from '../services/customers.service';

/**
 * Contrôleur pour la gestion des clients
 */
export class CustomersController {
  private customersService: CustomersService;

  constructor() {
    this.customersService = new CustomersService();
  }

  /**
   * Récupère tous les clients
   */
  async getAllCustomers(req: Request, res: Response): Promise<void> {
    try {
      const customers = await this.customersService.findAll();
      res.status(200).json(customers);
    } catch (error) {
      console.error('Erreur dans getAllCustomers:', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des clients', error: error.message });
    }
  }

  /**
   * Récupère un client par son ID
   */
  async getCustomerById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de client invalide' });
        return;
      }

      const customer = await this.customersService.findById(id);
      if (!customer) {
        res.status(404).json({ message: `Client avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json(customer);
    } catch (error) {
      console.error(`Erreur dans getCustomerById:`, error);
      res.status(500).json({ message: 'Erreur lors de la récupération du client', error: error.message });
    }
  }

  /**
   * Crée un nouveau client
   */
  async createCustomer(req: Request, res: Response): Promise<void> {
    try {
      const newCustomer = req.body;
      if (!newCustomer.name) {
        res.status(400).json({ message: 'Le nom du client est requis' });
        return;
      }

      const customer = await this.customersService.create(newCustomer);
      res.status(201).json(customer);
    } catch (error) {
      console.error('Erreur dans createCustomer:', error);
      res.status(500).json({ message: 'Erreur lors de la création du client', error: error.message });
    }
  }

  /**
   * Met à jour un client existant
   */
  async updateCustomer(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de client invalide' });
        return;
      }

      const customerData = req.body;
      if (!customerData.name) {
        res.status(400).json({ message: 'Le nom du client est requis' });
        return;
      }

      const updatedCustomer = await this.customersService.update(id, customerData);
      if (!updatedCustomer) {
        res.status(404).json({ message: `Client avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json(updatedCustomer);
    } catch (error) {
      console.error(`Erreur dans updateCustomer:`, error);
      res.status(500).json({ message: 'Erreur lors de la mise à jour du client', error: error.message });
    }
  }

  /**
   * Supprime un client
   */
  async deleteCustomer(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de client invalide' });
        return;
      }

      const deleted = await this.customersService.delete(id);
      if (!deleted) {
        res.status(404).json({ message: `Client avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json({ message: `Client avec l'ID ${id} supprimé avec succès` });
    } catch (error) {
      console.error(`Erreur dans deleteCustomer:`, error);
      res.status(500).json({ message: 'Erreur lors de la suppression du client', error: error.message });
    }
  }
}
