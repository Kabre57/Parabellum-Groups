import express from 'express';
import { FilterRoleController } from '../controllers/filter-role.controller';

const router = express.Router();
const filterRoleController = new FilterRoleController();

/**
 * @swagger
 * /api/filter-role:
 *   get:
 *     summary: Récupère tous les rôles de filtre
 *     tags: [FilterRole]
 *     responses:
 *       200:
 *         description: Liste des rôles de filtre récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.get('/', (req, res) => filterRoleController.getAllFilterRoles(req, res));

/**
 * @swagger
 * /api/filter-role/{id}:
 *   get:
 *     summary: Récupère un rôle de filtre par son ID
 *     tags: [FilterRole]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du rôle de filtre
 *     responses:
 *       200:
 *         description: Rôle de filtre récupéré avec succès
 *       404:
 *         description: Rôle de filtre non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', (req, res) => filterRoleController.getFilterRoleById(req, res));

/**
 * @swagger
 * /api/filter-role:
 *   post:
 *     summary: Crée un nouveau rôle de filtre
 *     tags: [FilterRole]
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
 *         description: Rôle de filtre créé avec succès
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */
router.post('/', (req, res) => filterRoleController.createFilterRole(req, res));

/**
 * @swagger
 * /api/filter-role/{id}:
 *   put:
 *     summary: Met à jour un rôle de filtre existant
 *     tags: [FilterRole]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du rôle de filtre
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
 *         description: Rôle de filtre mis à jour avec succès
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Rôle de filtre non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', (req, res) => filterRoleController.updateFilterRole(req, res));

/**
 * @swagger
 * /api/filter-role/{id}:
 *   delete:
 *     summary: Supprime un rôle de filtre
 *     tags: [FilterRole]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du rôle de filtre
 *     responses:
 *       200:
 *         description: Rôle de filtre supprimé avec succès
 *       404:
 *         description: Rôle de filtre non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', (req, res) => filterRoleController.deleteFilterRole(req, res));

export default router;
