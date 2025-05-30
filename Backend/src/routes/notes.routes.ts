import express from 'express';
import { NotesController } from '../controllers/notes.controller';

const router = express.Router();
const notesController = new NotesController();

/**
 * @swagger
 * /api/notes:
 *   get:
 *     summary: Récupère toutes les notes
 *     tags: [Notes]
 *     responses:
 *       200:
 *         description: Liste des notes récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.get('/', (req, res) => notesController.getAllNotes(req, res));

/**
 * @swagger
 * /api/notes/{id}:
 *   get:
 *     summary: Récupère une note par son ID
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la note
 *     responses:
 *       200:
 *         description: Note récupérée avec succès
 *       404:
 *         description: Note non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', (req, res) => notesController.getNoteById(req, res));

/**
 * @swagger
 * /api/notes:
 *   post:
 *     summary: Crée une nouvelle note
 *     tags: [Notes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - text
 *             properties:
 *               text:
 *                 type: string
 *     responses:
 *       201:
 *         description: Note créée avec succès
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */
router.post('/', (req, res) => notesController.createNote(req, res));

/**
 * @swagger
 * /api/notes/{id}:
 *   put:
 *     summary: Met à jour une note existante
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la note
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - text
 *             properties:
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: Note mise à jour avec succès
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Note non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', (req, res) => notesController.updateNote(req, res));

/**
 * @swagger
 * /api/notes/{id}:
 *   delete:
 *     summary: Supprime une note
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la note
 *     responses:
 *       200:
 *         description: Note supprimée avec succès
 *       404:
 *         description: Note non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', (req, res) => notesController.deleteNote(req, res));

export default router;
