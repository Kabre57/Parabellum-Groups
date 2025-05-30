import express from 'express';
import { EventOptionsController } from '../controllers/event-options.controller';

const router = express.Router();
const eventOptionsController = new EventOptionsController();

/**
 * @swagger
 * /api/event-options:
 *   get:
 *     summary: Récupère toutes les options d'événements
 *     tags: [EventOptions]
 *     responses:
 *       200:
 *         description: Liste des options d'événements récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.get('/', (req, res) => eventOptionsController.getAllEventOptions(req, res));

/**
 * @swagger
 * /api/event-options/{id}:
 *   get:
 *     summary: Récupère une option d'événement par son ID
 *     tags: [EventOptions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'option d'événement
 *     responses:
 *       200:
 *         description: Option d'événement récupérée avec succès
 *       404:
 *         description: Option d'événement non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', (req, res) => eventOptionsController.getEventOptionById(req, res));

/**
 * @swagger
 * /api/event-options:
 *   post:
 *     summary: Crée une nouvelle option d'événement
 *     tags: [EventOptions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - value
 *               - label
 *             properties:
 *               value:
 *                 type: string
 *               label:
 *                 type: string
 *     responses:
 *       201:
 *         description: Option d'événement créée avec succès
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */
router.post('/', (req, res) => eventOptionsController.createEventOption(req, res));

/**
 * @swagger
 * /api/event-options/{id}:
 *   put:
 *     summary: Met à jour une option d'événement existante
 *     tags: [EventOptions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'option d'événement
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - value
 *               - label
 *             properties:
 *               value:
 *                 type: string
 *               label:
 *                 type: string
 *     responses:
 *       200:
 *         description: Option d'événement mise à jour avec succès
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Option d'événement non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', (req, res) => eventOptionsController.updateEventOption(req, res));

/**
 * @swagger
 * /api/event-options/{id}:
 *   delete:
 *     summary: Supprime une option d'événement
 *     tags: [EventOptions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'option d'événement
 *     responses:
 *       200:
 *         description: Option d'événement supprimée avec succès
 *       404:
 *         description: Option d'événement non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', (req, res) => eventOptionsController.deleteEventOption(req, res));

export default router;
