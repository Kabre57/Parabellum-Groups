import express from 'express';
import { GalleryController } from '../controllers/gallery.controller';

const router = express.Router();
const galleryController = new GalleryController();

/**
 * @swagger
 * /api/gallery:
 *   get:
 *     summary: Récupère tous les éléments de la galerie
 *     tags: [Gallery]
 *     responses:
 *       200:
 *         description: Liste des éléments de la galerie récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.get('/', (req, res) => galleryController.getAllGalleryItems(req, res));

/**
 * @swagger
 * /api/gallery/{id}:
 *   get:
 *     summary: Récupère un élément de la galerie par son ID
 *     tags: [Gallery]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'élément de galerie
 *     responses:
 *       200:
 *         description: Élément de galerie récupéré avec succès
 *       404:
 *         description: Élément de galerie non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', (req, res) => galleryController.getGalleryItemById(req, res));

/**
 * @swagger
 * /api/gallery:
 *   post:
 *     summary: Crée un nouvel élément de galerie
 *     tags: [Gallery]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user_name
 *             properties:
 *               user_name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Élément de galerie créé avec succès
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */
router.post('/', (req, res) => galleryController.createGalleryItem(req, res));

/**
 * @swagger
 * /api/gallery/{id}:
 *   put:
 *     summary: Met à jour un élément de galerie existant
 *     tags: [Gallery]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'élément de galerie
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user_name
 *             properties:
 *               user_name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Élément de galerie mis à jour avec succès
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Élément de galerie non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', (req, res) => galleryController.updateGalleryItem(req, res));

/**
 * @swagger
 * /api/gallery/{id}:
 *   delete:
 *     summary: Supprime un élément de galerie
 *     tags: [Gallery]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'élément de galerie
 *     responses:
 *       200:
 *         description: Élément de galerie supprimé avec succès
 *       404:
 *         description: Élément de galerie non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', (req, res) => galleryController.deleteGalleryItem(req, res));

export default router;
