import winston from "winston";

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

winston.addColors(colors);

// Format des logs
const logFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.colorize({ all: true }), // Colorize pour la console
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

const jsonLogFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
);

// Transports (où envoyer les logs)
const transports = [
  // Log en console pour le développement
  new winston.transports.Console({
    format: logFormat,
    level: process.env.LOG_LEVEL || "debug", // Niveau de log pour la console
  }),
  // Log dans un fichier pour les erreurs
  new winston.transports.File({
    filename: "logs/error.log",
    level: "error",
    format: jsonLogFormat, // Format JSON pour les fichiers
    maxsize: 5242880, // 5MB
    maxFiles: 5,
  }),
  // Log dans un fichier pour tous les logs (combinés)
  new winston.transports.File({
    filename: "logs/all.log",
    format: jsonLogFormat,
    level: "info", // Ou un niveau plus bas si nécessaire
    maxsize: 5242880, // 5MB
    maxFiles: 5,
  }),
  // Optionnel: Transport pour les logs HTTP si vous voulez les séparer
  new winston.transports.File({
    filename: "logs/http.log",
    level: "http", // Niveau spécifique pour les requêtes HTTP
    format: jsonLogFormat,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
  })
];

// Créer le logger
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info", // Niveau de log global par défaut
  levels, // Utiliser nos niveaux personnalisés si définis
  format: jsonLogFormat, // Format par défaut pour les transports qui ne le spécifient pas
  transports,
  exitOnError: false, // Ne pas quitter l'application en cas d'erreur de logging
});

// Middleware pour logger les requêtes HTTP avec Morgan (ou un simple logger Winston)
// Pour un simple logger Winston pour les requêtes HTTP:
export const httpLoggerMiddleware = (req: any, res: any, next: any) => {
    // Attendre que la requête soit terminée pour logger le statut
    res.on("finish", () => {
        logger.http(`${req.method} ${req.originalUrl} ${res.statusCode} - ${req.ip}`);
    });
    next();
};

export default logger;

