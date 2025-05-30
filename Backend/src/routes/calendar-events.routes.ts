import express from 'express';
import { CalendarEventsController } from '../controllers/calendar-events.controller';

const router = express.Router();
const calendarEventsController = new CalendarEventsController();

/**
 * @swagger
 * /api/calendar-events:
 *   get:
 *     summary: Récupère tous les événements du calendrier
 *     tags: [CalendarEvents]
 *     responses:
 *       200:
 *         description: Liste des événements récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.get('/', (req, res) => calendarEventsController.getAllCalendarEvents(req, res));

/**
 * @swagger
 * /api/calendar-events/{id}:
 *   get:
 *     summary: Récupère un événement du calendrier par son ID
 *     tags: [CalendarEvents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'événement
 *     responses:
 *       200:
 *         description: Événement récupéré avec succès
 *       404:
 *         description: Événement non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', (req, res) => calendarEventsController.getCalendarEventById(req, res));

/**
 * @swagger
 * /api/calendar-events:
 *   post:
 *     summary: Crée un nouvel événement du calendrier
 *     tags: [CalendarEvents]
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
 *         description: Événement créé avec succès
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */
router.post('/', (req, res) => calendarEventsController.createCalendarEvent(req, res));

/**
 * @swagger
 * /api/calendar-events/{id}:
 *   put:
 *     summary: Met à jour un événement du calendrier existant
 *     tags: [CalendarEvents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'événement
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
 *         description: Événement mis à jour avec succès
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Événement non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', (req, res) => calendarEventsController.updateCalendarEvent(req, res));

/**
 * @swagger
 * /api/calendar-events/{id}:
 *   delete:
 *     summary: Supprime un événement du calendrier
 *     tags: [CalendarEvents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'événement
 *     responses:
 *       200:
 *         description: Événement supprimé avec succès
 *       404:
 *         description: Événement non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', (req, res) => calendarEventsController.deleteCalendarEvent(req, res));

export default router;
