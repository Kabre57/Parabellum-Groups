import express from 'express';
import { ProjectsController } from '../controllers/projects.controller';

const router = express.Router();
const projectsController = new ProjectsController();

/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: Récupère tous les projets
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: Liste des projets récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.get('/', (req, res) => projectsController.getAllProjects(req, res));

/**
 * @swagger
 * /api/projects/{id}:
 *   get:
 *     summary: Récupère un projet par son ID
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du projet
 *     responses:
 *       200:
 *         description: Projet récupéré avec succès
 *       404:
 *         description: Projet non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', (req, res) => projectsController.getProjectById(req, res));

/**
 * @swagger
 * /api/projects:
 *   post:
 *     summary: Crée un nouveau projet
 *     tags: [Projects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - title
 *             properties:
 *               id:
 *                 type: string
 *               title:
 *                 type: string
 *     responses:
 *       201:
 *         description: Projet créé avec succès
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */
router.post('/', (req, res) => projectsController.createProject(req, res));

/**
 * @swagger
 * /api/projects/{id}:
 *   put:
 *     summary: Met à jour un projet existant
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du projet
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
 *         description: Projet mis à jour avec succès
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Projet non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', (req, res) => projectsController.updateProject(req, res));

/**
 * @swagger
 * /api/projects/{id}:
 *   delete:
 *     summary: Supprime un projet
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du projet
 *     responses:
 *       200:
 *         description: Projet supprimé avec succès
 *       404:
 *         description: Projet non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', (req, res) => projectsController.deleteProject(req, res));

export default router;
