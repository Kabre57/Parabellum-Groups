"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpLoggerMiddleware = void 0;
const winston_1 = __importDefault(require("winston"));
// Définir les niveaux de log (facultatif, Winston a des niveaux par défaut)
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3, // Pour les requêtes HTTP
    verbose: 4,
    debug: 5,
    silly: 6
};
// Définir les couleurs pour chaque niveau (facultatif, pour la console)
const colors = {
    error: "red",
    warn: "yellow",
    info: "green",
    http: "magenta",
    debug: "white"
};
winston_1.default.addColors(colors);
// Format des logs
const logFormat = winston_1.default.format.combine(winston_1.default.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }), winston_1.default.format.colorize({ all: true }), // Colorize pour la console
winston_1.default.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`));
const jsonLogFormat = winston_1.default.format.combine(winston_1.default.format.timestamp(), winston_1.default.format.json());
// Transports (où envoyer les logs)
const transports = [
    // Log en console pour le développement
    new winston_1.default.transports.Console({
        format: logFormat,
        level: process.env.LOG_LEVEL || "debug", // Niveau de log pour la console
    }),
    // Log dans un fichier pour les erreurs
    new winston_1.default.transports.File({
        filename: "logs/error.log",
        level: "error",
        format: jsonLogFormat, // Format JSON pour les fichiers
        maxsize: 5242880, // 5MB
        maxFiles: 5,
    }),
    // Log dans un fichier pour tous les logs (combinés)
    new winston_1.default.transports.File({
        filename: "logs/all.log",
        format: jsonLogFormat,
        level: "info", // Ou un niveau plus bas si nécessaire
        maxsize: 5242880, // 5MB
        maxFiles: 5,
    }),
    // Optionnel: Transport pour les logs HTTP si vous voulez les séparer
    new winston_1.default.transports.File({
        filename: "logs/http.log",
        level: "http", // Niveau spécifique pour les requêtes HTTP
        format: jsonLogFormat,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
    })
];
// Créer le logger
const logger = winston_1.default.createLogger({
    level: process.env.LOG_LEVEL || "info", // Niveau de log global par défaut
    levels, // Utiliser nos niveaux personnalisés si définis
    format: jsonLogFormat, // Format par défaut pour les transports qui ne le spécifient pas
    transports,
    exitOnError: false, // Ne pas quitter l'application en cas d'erreur de logging
});
// Middleware pour logger les requêtes HTTP avec Morgan (ou un simple logger Winston)
// Pour un simple logger Winston pour les requêtes HTTP:
const httpLoggerMiddleware = (req, res, next) => {
    // Attendre que la requête soit terminée pour logger le statut
    res.on("finish", () => {
        logger.http(`${req.method} ${req.originalUrl} ${res.statusCode} - ${req.ip}`);
    });
    next();
};
exports.httpLoggerMiddleware = httpLoggerMiddleware;
exports.default = logger;
//# sourceMappingURL=logger.js.map