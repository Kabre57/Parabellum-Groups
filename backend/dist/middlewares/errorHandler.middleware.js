"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = exports.HttpError = void 0;
// Classe d'erreur personnalisée pour mieux gérer les erreurs HTTP
class HttpError extends Error {
    constructor(message, statusCode, details) {
        super(message);
        this.statusCode = statusCode;
        this.details = details;
        Object.setPrototypeOf(this, HttpError.prototype); // Pour maintenir la chaîne de prototypes
    }
}
exports.HttpError = HttpError;
const globalErrorHandler = (err, req, res, next) => {
    console.error("[Global Error Handler]:", err); // Log l'erreur pour le débogage
    const errorResponse = {
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
    }
    else if (err.name === "UnauthorizedError") { // Exemple pour jwt-express ou erreurs similaires
        errorResponse.message = "Accès non autorisé. Token invalide ou manquant.";
        errorResponse.statusCode = 401;
    }
    else if (err.name === 'ZodError') { // Gestion spécifique des erreurs Zod
        errorResponse.message = "Erreur de validation des données.";
        errorResponse.statusCode = 400;
        errorResponse.details = err.format();
    }
    // Ajouter d'autres types d'erreurs spécifiques ici si nécessaire
    // Assurer que statusCode est bien défini avant de l'envoyer
    const statusCodeToSend = errorResponse.statusCode || 500;
    // Retirer statusCode du corps de la réponse JSON si vous ne voulez pas l'exposer directement
    const { statusCode } = errorResponse, responseBody = __rest(errorResponse, ["statusCode"]);
    res.status(statusCodeToSend).json(responseBody);
};
exports.globalErrorHandler = globalErrorHandler;
//# sourceMappingURL=errorHandler.middleware.js.map