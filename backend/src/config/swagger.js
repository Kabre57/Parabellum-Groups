"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
// Importation des modules nécessaires pour Swagger
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc")); // Génère automatiquement la spécification OpenAPI à partir des JSDoc
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express")); // Sert l’interface Swagger via Express
// Définition des options Swagger/OpenAPI
const options = {
    definition: {
        openapi: "3.0.0", // Version OpenAPI utilisée
        info: {
            title: "API de Gestion Parabellum Group", // Titre de l'API
            version: "1.0.0", // Version de l'API
            description: "Documentation de l'API pour l'application de gestion du Parabellum Group", // Brève description
            contact: {
                name: "Support Parabellum", // Nom du contact de support
                email: "support@parabellum.com", // Email de contact
            },
        },
        servers: [
            {
                // URL du serveur sur lequel tourne l’API
                url: `http://localhost:${process.env.PORT || 3001}/api`, // Utilise la variable d'environnement PORT ou 3001
                description: "Serveur de développement", // Description de l'environnement
            },
        ],
        components: {
            // Déclaration des schémas de sécurité
            securitySchemes: {
                bearerAuth: {
                    type: "http", // Type d'authentification HTTP
                    scheme: "bearer", // Utilisation d'un token Bearer
                    bearerFormat: "JWT", // Format du token (ici, JWT)
                },
            },
        },
        security: [
            {
                bearerAuth: [], // Activation de l’authentification globale via bearerAuth
            },
        ],
    },
    // Déclaration des chemins de fichiers à analyser pour générer la documentation OpenAPI via les JSDoc
    apis: [
        "./src/routes/*.ts", // Fichiers de routes
        "./src/models/*.ts", // Fichiers de modèles (ex : schémas de validation ou types)
        "./src/controllers/*.ts", // Fichiers des contrôleurs où des routes peuvent aussi être définies
    ],
};
// Génère automatiquement le JSON OpenAPI à partir des options et des annotations JSDoc
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
// Fonction pour intégrer Swagger dans une application Express
const setupSwagger = (app) => {
    // Sert l'interface Swagger UI sur l'URL /api-docs
    app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    // Log dans la console pour confirmation de l'URL de documentation
    console.log(`📘 Documentation Swagger disponible sur http://localhost:${process.env.PORT || 3001}/api-docs`);
};
exports.setupSwagger = setupSwagger;
