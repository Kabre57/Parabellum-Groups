import { Request, Response } from 'express';
import { NotesService } from '../services/notes.service';

/**
 * Contrôleur pour la gestion des notes
 */
export class NotesController {
  private notesService: NotesService;

  constructor() {
    this.notesService = new NotesService();
  }

  /**
   * Récupère toutes les notes
   */
  async getAllNotes(req: Request, res: Response): Promise<void> {
    try {
      const notes = await this.notesService.findAll();
      res.status(200).json(notes);
    } catch (error) {
      console.error('Erreur dans getAllNotes:', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des notes', error: error.message });
    }
  }

  /**
   * Récupère une note par son ID
   */
  async getNoteById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de note invalide' });
        return;
      }

      const note = await this.notesService.findById(id);
      if (!note) {
        res.status(404).json({ message: `Note avec l'ID ${id} non trouvée` });
        return;
      }

      res.status(200).json(note);
    } catch (error) {
      console.error(`Erreur dans getNoteById:`, error);
      res.status(500).json({ message: 'Erreur lors de la récupération de la note', error: error.message });
    }
  }

  /**
   * Crée une nouvelle note
   */
  async createNote(req: Request, res: Response): Promise<void> {
    try {
      const newNote = req.body;
      if (!newNote.text) {
        res.status(400).json({ message: 'Le texte de la note est requis' });
        return;
      }

      const note = await this.notesService.create(newNote);
      res.status(201).json(note);
    } catch (error) {
      console.error('Erreur dans createNote:', error);
      res.status(500).json({ message: 'Erreur lors de la création de la note', error: error.message });
    }
  }

  /**
   * Met à jour une note existante
   */
  async updateNote(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de note invalide' });
        return;
      }

      const noteData = req.body;
      if (!noteData.text) {
        res.status(400).json({ message: 'Le texte de la note est requis' });
        return;
      }

      const updatedNote = await this.notesService.update(id, noteData);
      if (!updatedNote) {
        res.status(404).json({ message: `Note avec l'ID ${id} non trouvée` });
        return;
      }

      res.status(200).json(updatedNote);
    } catch (error) {
      console.error(`Erreur dans updateNote:`, error);
      res.status(500).json({ message: 'Erreur lors de la mise à jour de la note', error: error.message });
    }
  }

  /**
   * Supprime une note
   */
  async deleteNote(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID de note invalide' });
        return;
      }

      const deleted = await this.notesService.delete(id);
      if (!deleted) {
        res.status(404).json({ message: `Note avec l'ID ${id} non trouvée` });
        return;
      }

      res.status(200).json({ message: `Note avec l'ID ${id} supprimée avec succès` });
    } catch (error) {
      console.error(`Erreur dans deleteNote:`, error);
      res.status(500).json({ message: 'Erreur lors de la suppression de la note', error: error.message });
    }
  }
}
