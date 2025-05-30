import { Request, Response } from 'express';
import { ProductsService } from '../services/products.service';

/**
 * Contrôleur pour la gestion des produits
 */
export class ProductsController {
  private productsService: ProductsService;

  constructor() {
    this.productsService = new ProductsService();
  }

  /**
   * Récupère tous les produits
   */
  async getAllProducts(req: Request, res: Response): Promise<void> {
    try {
      const products = await this.productsService.findAll();
      res.status(200).json(products);
    } catch (error) {
      console.error('Erreur dans getAllProducts:', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des produits', error: error.message });
    }
  }

  /**
   * Récupère un produit par son ID
   */
  async getProductById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de produit invalide' });
        return;
      }

      const product = await this.productsService.findById(id);
      if (!product) {
        res.status(404).json({ message: `Produit avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json(product);
    } catch (error) {
      console.error(`Erreur dans getProductById:`, error);
      res.status(500).json({ message: 'Erreur lors de la récupération du produit', error: error.message });
    }
  }

  /**
   * Crée un nouveau produit
   */
  async createProduct(req: Request, res: Response): Promise<void> {
    try {
      const newProduct = req.body;
      if (!newProduct.name) {
        res.status(400).json({ message: 'Le nom du produit est requis' });
        return;
      }

      const product = await this.productsService.create(newProduct);
      res.status(201).json(product);
    } catch (error) {
      console.error('Erreur dans createProduct:', error);
      res.status(500).json({ message: 'Erreur lors de la création du produit', error: error.message });
    }
  }

  /**
   * Met à jour un produit existant
   */
  async updateProduct(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de produit invalide' });
        return;
      }

      const productData = req.body;
      if (!productData.name) {
        res.status(400).json({ message: 'Le nom du produit est requis' });
        return;
      }

      const updatedProduct = await this.productsService.update(id, productData);
      if (!updatedProduct) {
        res.status(404).json({ message: `Produit avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error(`Erreur dans updateProduct:`, error);
      res.status(500).json({ message: 'Erreur lors de la mise à jour du produit', error: error.message });
    }
  }

  /**
   * Supprime un produit
   */
  async deleteProduct(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de produit invalide' });
        return;
      }

      const deleted = await this.productsService.delete(id);
      if (!deleted) {
        res.status(404).json({ message: `Produit avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json({ message: `Produit avec l'ID ${id} supprimé avec succès` });
    } catch (error) {
      console.error(`Erreur dans deleteProduct:`, error);
      res.status(500).json({ message: 'Erreur lors de la suppression du produit', error: error.message });
    }
  }
}
