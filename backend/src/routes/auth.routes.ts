import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

const router = Router();
const authController = new AuthController();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Inscription d’un nouvel utilisateur
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               prenom:
 *                 type: string
 *               email:
 *                 type: string
 *               mot_de_passe:
 *                 type: string
 *               role_id:
 *                 type: integer
 *                 nullable: true
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       400:
 *         description: Requête invalide
 */
router.post("/register", authController.register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Connexion d’un utilisateur
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               mot_de_passe:
 *                 type: string
 *     responses:
 *       200:
 *         description: Connexion réussie
 *       401:
 *         description: Identifiants invalides
 */
router.post("/login", authController.login);

/**
 * @swagger
 * /api/auth/forgot-password:
 *   post:
 *     summary: Demande de réinitialisation de mot de passe
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: L\'adresse e-mail de l\'utilisateur qui a oublié son mot de passe.
 *     responses:
 *       200:
 *         description: Si l\'utilisateur existe, un e-mail (simulé) avec un lien de réinitialisation a été envoyé.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 resetLink: 
 *                   type: string
 *                   description: (Pour test uniquement) Le lien de réinitialisation qui serait envoyé par e-mail.
 *       404:
 *         description: Utilisateur non trouvé avec cet e-mail.
 *       500:
 *         description: Erreur interne du serveur.
 */
router.post("/forgot-password", authController.forgotPassword);

/**
 * @swagger
 * /api/auth/reset-password:
 *   post:
 *     summary: Réinitialise le mot de passe avec un token valide.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *               - newPassword
 *             properties:
 *               token:
 *                 type: string
 *                 description: Le token de réinitialisation reçu par e-mail (simulé).
 *               newPassword:
 *                 type: string
 *                 format: password
 *                 minLength: 6
 *                 description: Le nouveau mot de passe.
 *     responses:
 *       200:
 *         description: Mot de passe réinitialisé avec succès.
 *       400:
 *         description: Token invalide ou expiré, ou nouveau mot de passe non conforme.
 *       500:
 *         description: Erreur interne du serveur.
 */
router.post("/reset-password", authController.resetPassword);

export default router;

