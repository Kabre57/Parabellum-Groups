import express from 'express';
import { ChatsController } from '../controllers/chats.controller';

const router = express.Router();
const chatsController = new ChatsController();

/**
 * @swagger
 * /api/chats:
 *   get:
 *     summary: Récupère tous les chats
 *     tags: [Chats]
 *     responses:
 *       200:
 *         description: Liste des chats récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.get('/', (req, res) => chatsController.getAllChats(req, res));

/**
 * @swagger
 * /api/chats/{id}:
 *   get:
 *     summary: Récupère un chat par son ID
 *     tags: [Chats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du chat
 *     responses:
 *       200:
 *         description: Chat récupéré avec succès
 *       404:
 *         description: Chat non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', (req, res) => chatsController.getChatById(req, res));

/**
 * @swagger
 * /api/chats:
 *   post:
 *     summary: Crée un nouveau chat
 *     tags: [Chats]
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
 *         description: Chat créé avec succès
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */
router.post('/', (req, res) => chatsController.createChat(req, res));

/**
 * @swagger
 * /api/chats/{id}:
 *   put:
 *     summary: Met à jour un chat existant
 *     tags: [Chats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du chat
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
 *         description: Chat mis à jour avec succès
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Chat non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', (req, res) => chatsController.updateChat(req, res));

/**
 * @swagger
 * /api/chats/{id}:
 *   delete:
 *     summary: Supprime un chat
 *     tags: [Chats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du chat
 *     responses:
 *       200:
 *         description: Chat supprimé avec succès
 *       404:
 *         description: Chat non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', (req, res) => chatsController.deleteChat(req, res));

export default router;
