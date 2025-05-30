import { Request, Response, NextFunction } from "express";

// Interface pour standardiser la réponse d'erreur
interface ErrorResponse {
  error: boolean;
  message: string;
  details?: any; // Pour les erreurs de validation ou autres détails spécifiques
  statusCode?: number;
}

// Classe d'erreur personnalisée pour mieux gérer les erreurs HTTP
export class HttpError extends Error {
  statusCode: number;
  details?: any;

  constructor(message: string, statusCode: number, details?: any) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    Object.setPrototypeOf(this, HttpError.prototype); // Pour maintenir la chaîne de prototypes
  }
}

export const globalErrorHandler = (
  err: Error | HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("[Global Error Handler]:", err); // Log l'erreur pour le débogage

  const errorResponse: ErrorResponse = {
    error: true,
    message: "Une erreur interne du serveur est survenue.",
    statusCode: 500, // Default status code
  };

  if (err instanceof HttpError) {
    errorResponse.message = err.message;
    errorResponse.statusCode = err.statusCode;
    if (err.details) {
      errorResponse.details = err.details;
    }
  } else if (err.name === "UnauthorizedError") { // Exemple pour jwt-express ou erreurs similaires
    errorResponse.message = "Accès non autorisé. Token invalide ou manquant.";
    errorResponse.statusCode = 401;
  } else if ((err as any).name === 'ZodError') { // Gestion spécifique des erreurs Zod
    errorResponse.message = "Erreur de validation des données.";
    errorResponse.statusCode = 400;
    errorResponse.details = (err as any).format();
  }
  // Ajouter d'autres types d'erreurs spécifiques ici si nécessaire

  // Assurer que statusCode est bien défini avant de l'envoyer
  const statusCodeToSend = errorResponse.statusCode || 500;
  
  // Retirer statusCode du corps de la réponse JSON si vous ne voulez pas l'exposer directement
  const { statusCode, ...responseBody } = errorResponse;

  res.status(statusCodeToSend).json(responseBody);
};

