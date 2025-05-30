import express from 'express';
import { FilterStatusController } from '../controllers/filter-status.controller';

const router = express.Router();
const filterStatusController = new FilterStatusController();

/**
 * @swagger
 * /api/filter-status:
 *   get:
 *     summary: Récupère tous les statuts de filtre
 *     tags: [FilterStatus]
 *     responses:
 *       200:
 *         description: Liste des statuts de filtre récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.get('/', (req, res) => filterStatusController.getAllFilterStatuses(req, res));

/**
 * @swagger
 * /api/filter-status/{id}:
 *   get:
 *     summary: Récupère un statut de filtre par son ID
 *     tags: [FilterStatus]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du statut de filtre
 *     responses:
 *       200:
 *         description: Statut de filtre récupéré avec succès
 *       404:
 *         description: Statut de filtre non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', (req, res) => filterStatusController.getFilterStatusById(req, res));

/**
 * @swagger
 * /api/filter-status:
 *   post:
 *     summary: Crée un nouveau statut de filtre
 *     tags: [FilterStatus]
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
 *         description: Statut de filtre créé avec succès
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */
router.post('/', (req, res) => filterStatusController.createFilterStatus(req, res));

/**
 * @swagger
 * /api/filter-status/{id}:
 *   put:
 *     summary: Met à jour un statut de filtre existant
 *     tags: [FilterStatus]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du statut de filtre
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
 *         description: Statut de filtre mis à jour avec succès
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Statut de filtre non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', (req, res) => filterStatusController.updateFilterStatus(req, res));

/**
 * @swagger
 * /api/filter-status/{id}:
 *   delete:
 *     summary: Supprime un statut de filtre
 *     tags: [FilterStatus]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du statut de filtre
 *     responses:
 *       200:
 *         description: Statut de filtre supprimé avec succès
 *       404:
 *         description: Statut de filtre non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', (req, res) => filterStatusController.deleteFilterStatus(req, res));

export default router;
