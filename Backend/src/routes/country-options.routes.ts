import express from 'express';
import { CountryOptionsController } from '../controllers/country-options.controller';

const router = express.Router();
const countryOptionsController = new CountryOptionsController();

/**
 * @swagger
 * /api/country-options:
 *   get:
 *     summary: Récupère toutes les options de pays
 *     tags: [CountryOptions]
 *     responses:
 *       200:
 *         description: Liste des options de pays récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.get('/', (req, res) => countryOptionsController.getAllCountryOptions(req, res));

/**
 * @swagger
 * /api/country-options/{id}:
 *   get:
 *     summary: Récupère une option de pays par son ID
 *     tags: [CountryOptions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'option de pays
 *     responses:
 *       200:
 *         description: Option de pays récupérée avec succès
 *       404:
 *         description: Option de pays non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', (req, res) => countryOptionsController.getCountryOptionById(req, res));

/**
 * @swagger
 * /api/country-options:
 *   post:
 *     summary: Crée une nouvelle option de pays
 *     tags: [CountryOptions]
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
 *         description: Option de pays créée avec succès
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */
router.post('/', (req, res) => countryOptionsController.createCountryOption(req, res));

/**
 * @swagger
 * /api/country-options/{id}:
 *   put:
 *     summary: Met à jour une option de pays existante
 *     tags: [CountryOptions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'option de pays
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
 *         description: Option de pays mise à jour avec succès
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Option de pays non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', (req, res) => countryOptionsController.updateCountryOption(req, res));

/**
 * @swagger
 * /api/country-options/{id}:
 *   delete:
 *     summary: Supprime une option de pays
 *     tags: [CountryOptions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'option de pays
 *     responses:
 *       200:
 *         description: Option de pays supprimée avec succès
 *       404:
 *         description: Option de pays non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', (req, res) => countryOptionsController.deleteCountryOption(req, res));

export default router;
