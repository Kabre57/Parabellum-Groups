import express from 'express';
import { UtilisateurController } from '../controllers/utilisateur.controller';
import { validate } from '../middlewares/validation.middleware';
import { utilisateurValidationSchemas } from '../middlewares/utilisateur.validation';
import { authJwt } from '../middlewares/auth.middleware';

const router = express.Router();
const utilisateurController = new UtilisateurController();

/**
 * @swagger
 * /api/utilisateurs:
 *   get:
 *     summary: Récupère tous les utilisateurs
 *     tags: [Utilisateurs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des utilisateurs récupérée avec succès
 *       401:
 *         description: Non autorisé
 *       500:
 *         description: Erreur serveur
 */
router.get('/', authJwt.verifyToken, utilisateurController.getAllUtilisateurs);

/**
 * @swagger
 * /api/utilisateurs/{id}:
 *   get:
 *     summary: Récupère un utilisateur par son ID
 *     tags: [Utilisateurs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Utilisateur récupéré avec succès
 *       400:
 *         description: ID invalide
 *       401:
 *         description: Non autorisé
 *       404:
 *         description: Utilisateur non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', authJwt.verifyToken, validate(utilisateurValidationSchemas.id, 'params'), utilisateurController.getUtilisateurById);

/**
 * @swagger
 * /api/utilisateurs:
 *   post:
 *     summary: Crée un nouvel utilisateur
 *     tags: [Utilisateurs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - mot_de_passe
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               mot_de_passe:
 *                 type: string
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       400:
 *         description: Données invalides
 *       401:
 *         description: Non autorisé
 *       409:
 *         description: Email déjà existant
 *       500:
 *         description: Erreur serveur
 */
router.post('/', authJwt.verifyToken, authJwt.isAdmin, validate(utilisateurValidationSchemas.create), utilisateurController.createUtilisateur);

/**
 * @swagger
 * /api/utilisateurs/{id}:
 *   put:
 *     summary: Met à jour un utilisateur existant
 *     tags: [Utilisateurs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Utilisateur mis à jour avec succès
 *       400:
 *         description: Données invalides ou ID invalide
 *       401:
 *         description: Non autorisé
 *       404:
 *         description: Utilisateur non trouvé
 *       409:
 *         description: Email déjà existant pour un autre utilisateur
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', authJwt.verifyToken, authJwt.isAdmin, validate(utilisateurValidationSchemas.id, 'params'), validate(utilisateurValidationSchemas.update), utilisateurController.updateUtilisateur);

/**
 * @swagger
 * /api/utilisateurs/{id}:
 *   delete:
 *     summary: Supprime un utilisateur
 *     tags: [Utilisateurs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Utilisateur supprimé avec succès
 *       400:
 *         description: ID invalide
 *       401:
 *         description: Non autorisé
 *       404:
 *         description: Utilisateur non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', authJwt.verifyToken, authJwt.isAdmin, validate(utilisateurValidationSchemas.id, 'params'), utilisateurController.deleteUtilisateur);

export default router;
