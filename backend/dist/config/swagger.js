"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
// Importation des modules nécessaires pour Swagger
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express")); // Sert l’interface Swagger via Express
const yamljs_1 = __importDefault(require("yamljs")); // Pour parser le fichier YAML
const fs_1 = __importDefault(require("fs")); // Pour lire le fichier
const path_1 = __importDefault(require("path")); // Pour construire le chemin du fichier
const logger_1 = __importDefault(require("./logger")); // Importer le logger
// Fonction pour intégrer Swagger dans une application Express à partir d'un fichier YAML
const setupSwagger = (app) => {
    try {
        // Construire le chemin absolu vers le fichier YAML
        // __dirname est le répertoire du fichier actuel (src/config)
        const swaggerFilePath = path_1.default.resolve(__dirname, "../../parabellum_swagger.yaml");
        // Vérifier si le fichier existe
        if (!fs_1.default.existsSync(swaggerFilePath)) {
            logger_1.default.error(`Fichier Swagger YAML non trouvé à l'emplacement: ${swaggerFilePath}`);
            // Optionnel: lancer une erreur ou retourner pour ne pas planter le serveur
            // throw new Error(`Fichier Swagger YAML non trouvé: ${swaggerFilePath}`);
            console.error(`Fichier Swagger YAML non trouvé à l'emplacement: ${swaggerFilePath}`);
            return; // Ne pas configurer Swagger si le fichier n'est pas trouvé
        }
        // Charger et parser le fichier YAML
        const swaggerDocument = yamljs_1.default.load(swaggerFilePath);
        // Servir l'interface Swagger UI sur l'URL /api-docs
        app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
        const port = process.env.PORT || 3001;
        logger_1.default.info(`Documentation Swagger (depuis YAML) disponible sur http://localhost:${port}/api-docs`);
        console.log(`📘 Documentation Swagger (depuis YAML) disponible sur http://localhost:${port}/api-docs`);
    }
    catch (error) {
        logger_1.default.error("Erreur lors de la configuration de Swagger à partir du fichier YAML:", error);
        console.error("Erreur lors de la configuration de Swagger à partir du fichier YAML:", error);
        // Gérer l'erreur comme il convient, par exemple en ne configurant pas Swagger
    }
};
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=swagger.js.map