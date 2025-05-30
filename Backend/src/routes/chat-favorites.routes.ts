import express from 'express';
import { ChatFavoritesController } from '../controllers/chat-favorites.controller';

const router = express.Router();
const chatFavoritesController = new ChatFavoritesController();

/**
 * @swagger
 * /api/chat-favorites:
 *   get:
 *     summary: Récupère tous les favoris de chat
 *     tags: [ChatFavorites]
 *     responses:
 *       200:
 *         description: Liste des favoris de chat récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.get('/', (req, res) => chatFavoritesController.getAllChatFavorites(req, res));

/**
 * @swagger
 * /api/chat-favorites/{id}:
 *   get:
 *     summary: Récupère un favori de chat par son ID
 *     tags: [ChatFavorites]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du favori de chat
 *     responses:
 *       200:
 *         description: Favori de chat récupéré avec succès
 *       404:
 *         description: Favori de chat non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', (req, res) => chatFavoritesController.getChatFavoriteById(req, res));

/**
 * @swagger
 * /api/chat-favorites:
 *   post:
 *     summary: Crée un nouveau favori de chat
 *     tags: [ChatFavorites]
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
 *         description: Favori de chat créé avec succès
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */
router.post('/', (req, res) => chatFavoritesController.createChatFavorite(req, res));

/**
 * @swagger
 * /api/chat-favorites/{id}:
 *   put:
 *     summary: Met à jour un favori de chat existant
 *     tags: [ChatFavorites]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du favori de chat
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
 *         description: Favori de chat mis à jour avec succès
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Favori de chat non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', (req, res) => chatFavoritesController.updateChatFavorite(req, res));

/**
 * @swagger
 * /api/chat-favorites/{id}:
 *   delete:
 *     summary: Supprime un favori de chat
 *     tags: [ChatFavorites]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du favori de chat
 *     responses:
 *       200:
 *         description: Favori de chat supprimé avec succès
 *       404:
 *         description: Favori de chat non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', (req, res) => chatFavoritesController.deleteChatFavorite(req, res));

export default router;
