"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path")); // Ajout de l'import pour path
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const role_routes_1 = __importDefault(require("./routes/role.routes"));
const utilisateur_routes_1 = __importDefault(require("./routes/utilisateur.routes"));
const client_routes_1 = __importDefault(require("./routes/client.routes"));
const specialite_routes_1 = __importDefault(require("./routes/specialite.routes"));
const technicien_routes_1 = __importDefault(require("./routes/technicien.routes"));
const mission_routes_1 = __importDefault(require("./routes/mission.routes"));
const intervention_routes_1 = __importDefault(require("./routes/intervention.routes"));
const errorHandler_middleware_1 = require("./middlewares/errorHandler.middleware");
const swagger_1 = require("./config/swagger");
const logger_1 = __importStar(require("./config/logger")); // Importer le logger et le middleware HTTP
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
// Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Middleware de logging HTTP (doit être parmi les premiers)
app.use(logger_1.httpLoggerMiddleware);
// Configuration de Swagger
(0, swagger_1.setupSwagger)(app);
// Routes de l'API
app.use("/api/auth", auth_routes_1.default);
app.use("/api/roles", role_routes_1.default);
app.use("/api/utilisateurs", utilisateur_routes_1.default);
app.use("/api/clients", client_routes_1.default);
app.use("/api/specialites", specialite_routes_1.default);
app.use("/api/techniciens", technicien_routes_1.default);
app.use("/api/missions", mission_routes_1.default);
app.use("/api/interventions", intervention_routes_1.default);
// Servir les fichiers statiques du frontend en production
if (process.env.NODE_ENV === "production") {
    // Définir le chemin vers le build du frontend
    // Assurez-vous que ce chemin correspond à l'emplacement de votre build React après `npm run build` dans le dossier frontend
    const frontendBuildPath = path_1.default.resolve(__dirname, "../../frontend/build");
    app.use(express_1.default.static(frontendBuildPath));
    // Pour toutes les autres requêtes non-API, renvoyer l'index.html du frontend
    // Cela permet à React Router de gérer la navigation côté client
    app.get("*", (req, res) => {
        if (!req.path.startsWith("/api/")) { // Ne pas interférer avec les routes API
            res.sendFile(path_1.default.resolve(frontendBuildPath, "index.html"));
        }
        else {
            // Si c'est une route API non trouvée, elle sera gérée par le errorHandler ou renverra 404 implicitement
            // Pour l'instant, on laisse le errorHandler s'en occuper ou Express renvoyer 404
        }
    });
}
else {
    // Route de base pour le développement (Swagger et API uniquement)
    app.get("/", (req, res) => {
        logger_1.default.info("Route de base appelée en développement");
        res.send("Bienvenue sur l\"API de Parabellum Group ! Le frontend est servi séparément en développement.");
    });
}
// Middleware de gestion des erreurs global (doit être le dernier middleware d"application)
app.use(errorHandler_middleware_1.globalErrorHandler);
// Démarrage du serveur
if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, () => {
        logger_1.default.info(`Serveur backend lancé sur http://localhost:${PORT}`);
        if (process.env.NODE_ENV !== "production") {
            logger_1.default.info(`Documentation Swagger disponible sur http://localhost:${PORT}/api-docs`);
        }
    });
}
exports.default = app;
