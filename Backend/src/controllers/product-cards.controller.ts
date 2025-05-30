import { Request, Response } from 'express';
import { ProductCardsService } from '../services/product-cards.service';

/**
 * Contrôleur pour la gestion des cartes produits
 */
export class ProductCardsController {
  private productCardsService: ProductCardsService;

  constructor() {
    this.productCardsService = new ProductCardsService();
  }

  /**
   * Récupère toutes les cartes produits
   */
  async getAllProductCards(req: Request, res: Response): Promise<void> {
    try {
      const productCards = await this.productCardsService.findAll();
      res.status(200).json(productCards);
    } catch (error) {
      console.error('Erreur dans getAllProductCards:', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des cartes produits', error: error.message });
    }
  }

  /**
   * Récupère une carte produit par son ID
   */
  async getProductCardById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de carte produit invalide' });
        return;
      }

      const productCard = await this.productCardsService.findById(id);
      if (!productCard) {
        res.status(404).json({ message: `Carte produit avec l'ID ${id} non trouvée` });
        return;
      }

      res.status(200).json(productCard);
    } catch (error) {
      console.error(`Erreur dans getProductCardById:`, error);
      res.status(500).json({ message: 'Erreur lors de la récupération de la carte produit', error: error.message });
    }
  }

  /**
   * Crée une nouvelle carte produit
   */
  async createProductCard(req: Request, res: Response): Promise<void> {
    try {
      const newProductCard = req.body;
      if (!newProductCard.title) {
        res.status(400).json({ message: 'Le titre de la carte produit est requis' });
        return;
      }

      const productCard = await this.productCardsService.create(newProductCard);
      res.status(201).json(productCard);
    } catch (error) {
      console.error('Erreur dans createProductCard:', error);
      res.status(500).json({ message: 'Erreur lors de la création de la carte produit', error: error.message });
    }
  }

  /**
   * Met à jour une carte produit existante
   */
  async updateProductCard(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de carte produit invalide' });
        return;
      }

      const productCardData = req.body;
      if (!productCardData.title) {
        res.status(400).json({ message: 'Le titre de la carte produit est requis' });
        return;
      }

      const updatedProductCard = await this.productCardsService.update(id, productCardData);
      if (!updatedProductCard) {
        res.status(404).json({ message: `Carte produit avec l'ID ${id} non trouvée` });
        return;
      }

      res.status(200).json(updatedProductCard);
    } catch (error) {
      console.error(`Erreur dans updateProductCard:`, error);
      res.status(500).json({ message: 'Erreur lors de la mise à jour de la carte produit', error: error.message });
    }
  }

  /**
   * Supprime une carte produit
   */
  async deleteProductCard(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de carte produit invalide' });
        return;
      }

      const deleted = await this.productCardsService.delete(id);
      if (!deleted) {
        res.status(404).json({ message: `Carte produit avec l'ID ${id} non trouvée` });
        return;
      }

      res.status(200).json({ message: `Carte produit avec l'ID ${id} supprimée avec succès` });
    } catch (error) {
      console.error(`Erreur dans deleteProductCard:`, error);
      res.status(500).json({ message: 'Erreur lors de la suppression de la carte produit', error: error.message });
    }
  }
}
