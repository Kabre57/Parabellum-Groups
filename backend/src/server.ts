import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Routes
import authRoutes from './routes/auth.routes';
import customersRoutes from './routes/customers.routes';
import productsRoutes from './routes/products.routes';
import productCardsRoutes from './routes/product-cards.routes';
import categoriesRoutes from './routes/categories.routes';
import calendarEventsRoutes from './routes/calendar-events.routes';
import eventOptionsRoutes from './routes/event-options.routes';
import chatFavoritesRoutes from './routes/chat-favorites.routes';
import chatsRoutes from './routes/chats.routes';
import galleryRoutes from './routes/gallery.routes';
import usersRoutes from './routes/users.routes';
import notesRoutes from './routes/notes.routes';
import filterStatusRoutes from './routes/filter-status.routes';
import filterRoleRoutes from './routes/filter-role.routes';
import countryOptionsRoutes from './routes/country-options.routes';
import projectsRoutes from './routes/projects.routes';

// Middlewares
import { errorHandler } from './middlewares/error.middleware';
import { authJwt } from './middlewares/auth.middleware';

// Configuration
import { config } from './config/config';
import { db } from './config/db';
import { logger } from './utils/logger';

// Initialisation de l'application Express
const app = express();

// Middlewares de base
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Documentation Swagger
try {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const swaggerPath = path.join(__dirname, '../swagger.yaml');
  
  if (fs.existsSync(swaggerPath)) {
    const swaggerDocument = YAML.load(swaggerPath);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    logger.info('Documentation Swagger (depuis YAML) disponible sur http://localhost:' + config.port + '/api-docs');
  } else {
    const options = {
      definition: {
        openapi: '3.0.0',
        info: {
          title: 'API Backend',
          version: '1.0.0',
          description: 'Documentation de l\'API Backend',
        },
        servers: [
          {
            url: `http://localhost:${config.port}`,
            description: 'Serveur de développement',
          },
        ],
      },
      apis: ['./src/routes/*.ts'],
    };
    
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, options));
    logger.info('Documentation Swagger disponible sur /api-docs');
  }
} catch (error) {
  logger.error('Erreur lors de la configuration de Swagger:', error);
}

// Routes API
app.use('/api/auth', authRoutes);
app.use('/api/customers', authJwt.verifyToken, customersRoutes);
app.use('/api/products', authJwt.verifyToken, productsRoutes);
app.use('/api/product-cards', authJwt.verifyToken, productCardsRoutes);
app.use('/api/categories', authJwt.verifyToken, categoriesRoutes);
app.use('/api/calendar-events', authJwt.verifyToken, calendarEventsRoutes);
app.use('/api/event-options', authJwt.verifyToken, eventOptionsRoutes);
app.use('/api/chat-favorites', authJwt.verifyToken, chatFavoritesRoutes);
app.use('/api/chats', authJwt.verifyToken, chatsRoutes);
app.use('/api/gallery', authJwt.verifyToken, galleryRoutes);
app.use('/api/users', authJwt.verifyToken, usersRoutes);
app.use('/api/notes', authJwt.verifyToken, notesRoutes);
app.use('/api/filter-status', authJwt.verifyToken, filterStatusRoutes);
app.use('/api/filter-role', authJwt.verifyToken, filterRoleRoutes);
app.use('/api/country-options', authJwt.verifyToken, countryOptionsRoutes);
app.use('/api/projects', authJwt.verifyToken, projectsRoutes);

// Route de base
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenue sur l\'API Backend' });
});

// Middleware de gestion des erreurs
app.use(errorHandler);

// Démarrage du serveur
const PORT = config.port || 3001;
const HOST = config.host || '0.0.0.0';

app.listen(PORT, HOST, async () => {
  logger.info(`Serveur backend lancé sur http://${HOST}:${PORT} et accessible publiquement via l'URL d'exposition`);
  
  try {
    const result = await db.query('SELECT NOW()');
    console.log('Connecté avec succès à PostgreSQL. Heure actuelle de la base de données:', result.rows[0].now);
  } catch (error) {
    logger.error('Erreur de connexion à PostgreSQL:', error);
  }
});

export default app;
