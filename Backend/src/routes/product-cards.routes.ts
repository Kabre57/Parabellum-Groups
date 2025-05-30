import express from 'express';
import { ProductCardsController } from '../controllers/product-cards.controller';

const router = express.Router();
const productCardsController = new ProductCardsController();

/**
 * @swagger
 * /api/product-cards:
 *   get:
 *     summary: Récupère toutes les cartes produits
 *     tags: [ProductCards]
 *     responses:
 *       200:
 *         description: Liste des cartes produits récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.get('/', (req, res) => productCardsController.getAllProductCards(req, res));

/**
 * @swagger
 * /api/product-cards/{id}:
 *   get:
 *     summary: Récupère une carte produit par son ID
 *     tags: [ProductCards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la carte produit
 *     responses:
 *       200:
 *         description: Carte produit récupérée avec succès
 *       404:
 *         description: Carte produit non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', (req, res) => productCardsController.getProductCardById(req, res));

/**
 * @swagger
 * /api/product-cards:
 *   post:
 *     summary: Crée une nouvelle carte produit
 *     tags: [ProductCards]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       201:
 *         description: Carte produit créée avec succès
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */
router.post('/', (req, res) => productCardsController.createProductCard(req, res));

/**
 * @swagger
 * /api/product-cards/{id}:
 *   put:
 *     summary: Met à jour une carte produit existante
 *     tags: [ProductCards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la carte produit
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       200:
 *         description: Carte produit mise à jour avec succès
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Carte produit non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', (req, res) => productCardsController.updateProductCard(req, res));

/**
 * @swagger
 * /api/product-cards/{id}:
 *   delete:
 *     summary: Supprime une carte produit
 *     tags: [ProductCards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la carte produit
 *     responses:
 *       200:
 *         description: Carte produit supprimée avec succès
 *       404:
 *         description: Carte produit non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', (req, res) => productCardsController.deleteProductCard(req, res));

export default router;
