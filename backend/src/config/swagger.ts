// Importation des modules nécessaires pour Swagger
import swaggerUi from "swagger-ui-express"; // Sert l’interface Swagger via Express
import { Application } from "express"; // Le bon type à utiliser pour l’application Express
import YAML from "yamljs"; // Pour parser le fichier YAML
import fs from "fs"; // Pour lire le fichier
import path from "path"; // Pour construire le chemin du fichier
import logger from "./logger"; // Importer le logger

// Fonction pour intégrer Swagger dans une application Express à partir d'un fichier YAML
export const setupSwagger = (app: Application) => {
  try {
    // Construire le chemin absolu vers le fichier YAML
    // __dirname est le répertoire du fichier actuel (src/config)
    const swaggerFilePath = path.resolve(__dirname, "../../parabellum_swagger.yaml");

    // Vérifier si le fichier existe
    if (!fs.existsSync(swaggerFilePath)) {
      logger.error(`Fichier Swagger YAML non trouvé à l'emplacement: ${swaggerFilePath}`);
      // Optionnel: lancer une erreur ou retourner pour ne pas planter le serveur
      // throw new Error(`Fichier Swagger YAML non trouvé: ${swaggerFilePath}`);
      console.error(`Fichier Swagger YAML non trouvé à l'emplacement: ${swaggerFilePath}`);
      return; // Ne pas configurer Swagger si le fichier n'est pas trouvé
    }

    // Charger et parser le fichier YAML
    const swaggerDocument = YAML.load(swaggerFilePath);

    // Servir l'interface Swagger UI sur l'URL /api-docs
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    const port = process.env.PORT || 3001;
    logger.info(`Documentation Swagger (depuis YAML) disponible sur http://localhost:${port}/api-docs`);
    console.log(`📘 Documentation Swagger (depuis YAML) disponible sur http://localhost:${port}/api-docs`);

  } catch (error) {
    logger.error("Erreur lors de la configuration de Swagger à partir du fichier YAML:", error);
    console.error("Erreur lors de la configuration de Swagger à partir du fichier YAML:", error);
    // Gérer l'erreur comme il convient, par exemple en ne configurant pas Swagger
  }
};

