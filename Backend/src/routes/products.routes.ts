import express from 'express';
import { ProductsController } from '../controllers/products.controller';

const router = express.Router();
const productsController = new ProductsController();

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Récupère tous les produits
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Liste des produits récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.get('/', (req, res) => productsController.getAllProducts(req, res));

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Récupère un produit par son ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du produit
 *     responses:
 *       200:
 *         description: Produit récupéré avec succès
 *       404:
 *         description: Produit non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', (req, res) => productsController.getProductById(req, res));

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Crée un nouveau produit
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Produit créé avec succès
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */
router.post('/', (req, res) => productsController.createProduct(req, res));

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Met à jour un produit existant
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du produit
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Produit mis à jour avec succès
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Produit non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', (req, res) => productsController.updateProduct(req, res));

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Supprime un produit
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du produit
 *     responses:
 *       200:
 *         description: Produit supprimé avec succès
 *       404:
 *         description: Produit non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', (req, res) => productsController.deleteProduct(req, res));

export default router;
