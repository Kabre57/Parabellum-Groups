import express from 'express';
import { CustomersController } from '../controllers/customers.controller';

const router = express.Router();
const customersController = new CustomersController();

/**
 * @swagger
 * /api/customers:
 *   get:
 *     summary: Récupère tous les clients
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: Liste des clients récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.get('/', (req, res) => customersController.getAllCustomers(req, res));

/**
 * @swagger
 * /api/customers/{id}:
 *   get:
 *     summary: Récupère un client par son ID
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du client
 *     responses:
 *       200:
 *         description: Client récupéré avec succès
 *       404:
 *         description: Client non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', (req, res) => customersController.getCustomerById(req, res));

/**
 * @swagger
 * /api/customers:
 *   post:
 *     summary: Crée un nouveau client
 *     tags: [Customers]
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
 *         description: Client créé avec succès
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */
router.post('/', (req, res) => customersController.createCustomer(req, res));

/**
 * @swagger
 * /api/customers/{id}:
 *   put:
 *     summary: Met à jour un client existant
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du client
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
 *         description: Client mis à jour avec succès
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Client non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', (req, res) => customersController.updateCustomer(req, res));

/**
 * @swagger
 * /api/customers/{id}:
 *   delete:
 *     summary: Supprime un client
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du client
 *     responses:
 *       200:
 *         description: Client supprimé avec succès
 *       404:
 *         description: Client non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', (req, res) => customersController.deleteCustomer(req, res));

export default router;
