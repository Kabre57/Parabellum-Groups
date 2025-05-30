import { Request, Response } from 'express';
import { ProjectsService } from '../services/projects.service';

/**
 * Contrôleur pour la gestion des projets
 */
export class ProjectsController {
  private projectsService: ProjectsService;

  constructor() {
    this.projectsService = new ProjectsService();
  }

  /**
   * Récupère tous les projets
   */
  async getAllProjects(req: Request, res: Response): Promise<void> {
    try {
      const projects = await this.projectsService.findAll();
      res.status(200).json(projects);
    } catch (error) {
      console.error('Erreur dans getAllProjects:', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des projets', error: error.message });
    }
  }

  /**
   * Récupère un projet par son ID
   */
  async getProjectById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      if (!id) {
        res.status(400).json({ message: 'ID de projet invalide' });
        return;
      }

      const project = await this.projectsService.findById(id);
      if (!project) {
        res.status(404).json({ message: `Projet avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json(project);
    } catch (error) {
      console.error(`Erreur dans getProjectById:`, error);
      res.status(500).json({ message: 'Erreur lors de la récupération du projet', error: error.message });
    }
  }

  /**
   * Crée un nouveau projet
   */
  async createProject(req: Request, res: Response): Promise<void> {
    try {
      const newProject = req.body;
      if (!newProject.id || !newProject.title) {
        res.status(400).json({ message: 'L\'ID et le titre du projet sont requis' });
        return;
      }

      const project = await this.projectsService.create(newProject);
      res.status(201).json(project);
    } catch (error) {
      console.error('Erreur dans createProject:', error);
      res.status(500).json({ message: 'Erreur lors de la création du projet', error: error.message });
    }
  }

  /**
   * Met à jour un projet existant
   */
  async updateProject(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      if (!id) {
        res.status(400).json({ message: 'ID de projet invalide' });
        return;
      }

      const projectData = req.body;
      if (!projectData.title) {
        res.status(400).json({ message: 'Le titre du projet est requis' });
        return;
      }

      const updatedProject = await this.projectsService.update(id, projectData);
      if (!updatedProject) {
        res.status(404).json({ message: `Projet avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json(updatedProject);
    } catch (error) {
      console.error(`Erreur dans updateProject:`, error);
      res.status(500).json({ message: 'Erreur lors de la mise à jour du projet', error: error.message });
    }
  }

  /**
   * Supprime un projet
   */
  async deleteProject(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      if (!id) {
        res.status(400).json({ message: 'ID de projet invalide' });
        return;
      }

      const deleted = await this.projectsService.delete(id);
      if (!deleted) {
        res.status(404).json({ message: `Projet avec l'ID ${id} non trouvé` });
        return;
      }

      res.status(200).json({ message: `Projet avec l'ID ${id} supprimé avec succès` });
    } catch (error) {
      console.error(`Erreur dans deleteProject:`, error);
      res.status(500).json({ message: 'Erreur lors de la suppression du projet', error: error.message });
    }
  }
}
