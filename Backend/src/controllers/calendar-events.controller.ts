import { Request, Response } from 'express';
import { CalendarEventsService } from '../services/calendar-events.service';

/**
 * Contrôleur pour la gestion des événements du calendrier
 */
export class CalendarEventsController {
  private calendarEventsService: CalendarEventsService;

  constructor() {
    this.calendarEventsService = new CalendarEventsService();
  }

  /**
   * Récupère tous les événements du calendrier
   */
  async getAllCalendarEvents(req: Request, res: Response): Promise<void> {
    try {
      const events = await this.calendarEventsService.findAll();
      res.status(200).json(events);
    } catch (error) {
      console.error('Erreur dans getAllCalendarEvents:', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des événements du calendrier', error: error.message });
    }
  }

  /**
   * Récupère un événement du calendrier par son ID
   */
  async getCalendarEventById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      if (!id) {
        res.status(400).json({ message: 'ID d\'événement invalide' });
        return;
      }

      const event = await this.calendarEventsService.findById(id);
      if (!event) {
        res.status(404).json({ message: `Événement avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json(event);
    } catch (error) {
      console.error(`Erreur dans getCalendarEventById:`, error);
      res.status(500).json({ message: 'Erreur lors de la récupération de l\'événement', error: error.message });
    }
  }

  /**
   * Crée un nouvel événement du calendrier
   */
  async createCalendarEvent(req: Request, res: Response): Promise<void> {
    try {
      const newEvent = req.body;
      if (!newEvent.id || !newEvent.title) {
        res.status(400).json({ message: 'L\'ID et le titre de l\'événement sont requis' });
        return;
      }

      const event = await this.calendarEventsService.create(newEvent);
      res.status(201).json(event);
    } catch (error) {
      console.error('Erreur dans createCalendarEvent:', error);
      res.status(500).json({ message: 'Erreur lors de la création de l\'événement', error: error.message });
    }
  }

  /**
   * Met à jour un événement du calendrier existant
   */
  async updateCalendarEvent(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      if (!id) {
        res.status(400).json({ message: 'ID d\'événement invalide' });
        return;
      }

      const eventData = req.body;
      if (!eventData.title) {
        res.status(400).json({ message: 'Le titre de l\'événement est requis' });
        return;
      }

      const updatedEvent = await this.calendarEventsService.update(id, eventData);
      if (!updatedEvent) {
        res.status(404).json({ message: `Événement avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json(updatedEvent);
    } catch (error) {
      console.error(`Erreur dans updateCalendarEvent:`, error);
      res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'événement', error: error.message });
    }
  }

  /**
   * Supprime un événement du calendrier
   */
  async deleteCalendarEvent(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      if (!id) {
        res.status(400).json({ message: 'ID d\'événement invalide' });
        return;
      }

      const deleted = await this.calendarEventsService.delete(id);
      if (!deleted) {
        res.status(404).json({ message: `Événement avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json({ message: `Événement avec l'ID ${id} supprimé avec succès` });
    } catch (error) {
      console.error(`Erreur dans deleteCalendarEvent:`, error);
      res.status(500).json({ message: 'Erreur lors de la suppression de l\'événement', error: error.message });
    }
  }
}
