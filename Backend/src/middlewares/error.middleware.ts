/**
 * Middleware de gestion des erreurs
 */
import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

/**
 * Middleware pour gérer les erreurs globales de l'application
 */
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  // Log de l'erreur
  logger.error(`Erreur: ${err.message}`);
  logger.error(err.stack);

  // Déterminer le code d'état HTTP
  const statusCode = err.statusCode || 500;

  // Réponse au client
  res.status(statusCode).json({
    error: true,
    message: err.message || 'Une erreur interne est survenue',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};

/**
 * Middleware pour gérer les routes non trouvées
 */
export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  const error: any = new Error(`Route non trouvée - ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
};
