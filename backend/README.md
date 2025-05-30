# Backend de Gestion Parabellum Group

Ce projet est un backend Node.js avec Express.js et TypeScript, conçu pour l'application de gestion du Parabellum Group. Il inclut des fonctionnalités d'authentification, de gestion des rôles, des opérations CRUD pour diverses entités (utilisateurs, clients, missions, etc.), une documentation API Swagger, et un système de logging.

## Prérequis

- Node.js (version 20.x ou supérieure recommandée)
- npm (généralement inclus avec Node.js)
- Une instance de base de données PostgreSQL en cours d'exécution (version 17 recommandée).

## Installation

1.  Clonez ce dépôt (ou décompressez l'archive fournie) dans un répertoire local.
    ```bash
    # Si vous avez un dépôt git
    # git clone <url_du_repo>
    cd parabellum_backend
    ```
2.  Installez les dépendances du projet :
    ```bash
    npm install
    ```
3.  Créez un fichier `.env` à la racine du projet en vous basant sur le fichier `.env.example` fourni. Remplissez les variables d'environnement requises, notamment les informations de connexion à votre base de données PostgreSQL et les secrets JWT.
    ```bash
    cp .env.example .env
    # Modifiez le fichier .env avec vos propres valeurs
    ```

## Configuration de la Base de Données

Assurez-vous que votre serveur PostgreSQL est accessible et que la base de données spécifiée dans votre fichier `.env` existe (vous devrez peut-être la créer manuellement, par exemple `CREATE DATABASE parabellum_db;`). 

Vous devrez ensuite exécuter le script SQL fourni (`schema.postgresql.sql` situé à la racine du projet) pour créer la structure des tables nécessaires. Vous pouvez utiliser un outil comme `psql` ou pgAdmin pour exécuter ce script :

```bash
# Exemple avec psql
psql -U votre_utilisateur_pg -d votre_base_de_donnees_pg -a -f schema.postgresql.sql
```

## Variables d'Environnement

Le fichier `.env` doit contenir les variables suivantes (voir `.env.example` pour les valeurs par défaut et les descriptions) :

- `DB_HOST`: L'hôte de votre base de données PostgreSQL.
- `DB_USER`: L'utilisateur de la base de données PostgreSQL.
- `DB_PASSWORD`: Le mot de passe de l'utilisateur de la base de données PostgreSQL.
- `DB_DATABASE`: Le nom de la base de données PostgreSQL.
- `DB_PORT`: Le port de votre base de données PostgreSQL (par défaut 5432).
- `PORT`: Le port sur lequel le serveur Express va écouter (par défaut 3000).
- `JWT_SECRET`: Une chaîne secrète longue et aléatoire pour signer les tokens JWT.
- `JWT_EXPIRES_IN`: La durée de validité des tokens JWT (par exemple, `1h`, `7d`).
- `LOG_LEVEL`: Le niveau de logging (par exemple, `info`, `debug`, `error`).

## Démarrage de l'Application

Pour démarrer le serveur en mode développement (avec rechargement automatique grâce à Nodemon) :

```bash
npm run dev
```

Pour compiler le code TypeScript en JavaScript (génère un dossier `dist`) et démarrer le serveur en mode production :

```bash
npm run build
npm start
```

L'application sera alors accessible à l'adresse `http://localhost:PORT` (où `PORT` est la valeur définie dans votre fichier `.env`).

## Documentation de l'API

Une fois le serveur démarré, la documentation de l'API (générée avec Swagger/OpenAPI) est accessible à l'adresse :

`http://localhost:PORT/api-docs`

Cette documentation interactive vous permet de visualiser toutes les routes disponibles, leurs paramètres, les corps de requête attendus et les réponses possibles. Vous pouvez également tester les routes directement depuis cette interface.

## Structure du Projet

Le projet suit une structure modulaire classique pour les applications Express.js :

```
/parabellum_backend
|-- /dist                   # Code JavaScript compilé (après `npm run build`)
|-- /node_modules           # Dépendances du projet
|-- /src                    # Code source TypeScript
|   |-- /__tests__          # Tests unitaires et d'intégration
|   |   |-- /services       # Tests pour les services
|   |-- /config             # Fichiers de configuration (db, logger, swagger)
|   |-- /controllers        # Logique de gestion des requêtes et réponses HTTP
|   |-- /middlewares        # Middlewares Express (authentification, gestion des erreurs, etc.)
|   |-- /models             # Interfaces TypeScript pour les modèles de données et schémas de validation Zod
|   |-- /routes             # Définition des routes de l'API
|   |-- /services           # Logique métier et interaction avec la base de données
|   |-- /utils              # Fonctions utilitaires
|   |-- server.ts           # Point d'entrée principal de l'application Express
|-- .env                    # Variables d'environnement (à créer à partir de .env.example)
|-- .env.example            # Exemple de fichier de variables d'environnement
|-- .gitignore              # Fichiers et dossiers ignorés par Git
|-- package.json            # Métadonnées du projet et scripts npm
|-- package-lock.json       # Versions exactes des dépendances
|-- tsconfig.json           # Configuration du compilateur TypeScript
|-- jest.config.js          # Configuration de Jest pour les tests
|-- README.md               # Ce fichier
|-- schema.postgresql.sql   # Script de création des tables pour PostgreSQL
```

## Scripts Disponibles

Dans le fichier `package.json`, vous trouverez plusieurs scripts utiles :

- `npm run dev`: Démarre le serveur en mode développement avec Nodemon et ts-node.
- `npm run build`: Compile le code TypeScript en JavaScript dans le dossier `dist`.
- `npm start`: Démarre le serveur en mode production à partir des fichiers compilés dans `dist`.
- `npm test`: Exécute les tests unitaires et d'intégration avec Jest.

## Tests

Le projet utilise Jest pour les tests unitaires et Supertest (implicitement via les tests de routes si ajoutés) pour les tests d'intégration.

Pour exécuter tous les tests :

```bash
npm test
```

Les fichiers de test se trouvent dans le dossier `src/__tests__`. La couverture des tests actuelle concerne principalement les services d'authentification, de gestion des rôles et des utilisateurs. Vous pouvez étendre cette couverture en ajoutant plus de tests unitaires et d'intégration pour les autres services et routes.

## Fonctionnalités Implémentées

- **Authentification JWT** : Inscription et connexion des utilisateurs avec génération de tokens JWT.
- **Gestion des Rôles** : CRUD pour les rôles et association aux utilisateurs.
- **Gestion des Utilisateurs** : CRUD pour les utilisateurs, avec hachage des mots de passe (bcrypt).
- **CRUD pour les entités principales** : Clients, Spécialités, Techniciens, Missions, Interventions.
- **Validation des Données** : Utilisation de Zod pour valider les données d'entrée des requêtes API.
- **Gestion Centralisée des Erreurs** : Middleware pour formater les erreurs de manière cohérente.
- **Documentation API** : Génération automatique avec Swagger UI Express.
- **Logging Avancé** : Utilisation de Winston pour une journalisation structurée en JSON.

## Fonctionnalités Prévues (Non implémentées ou partiellement implémentées dans cette version)

Les modules suivants ont été conçus mais leur implémentation complète n'est pas incluse dans cette version de base. Ils peuvent être développés ultérieurement :

- Module de notifications (email/in-app)
- Module d'audit log
- Module de génération de rapports (PDF/Excel)
- Module de workflow de validation
- Module d'export/import de données en CSV
- Module de planification de tâches (via des routes API sécurisées à appeler par un cron externe)

## Contribuer

Si vous souhaitez contribuer à ce projet, veuillez suivre les étapes habituelles de contribution (fork, branches de fonctionnalités, pull requests).

## Licence

Ce projet est fourni à titre d'exemple et n'est pas sous une licence spécifique. Veuillez me contacter si vous avez des questions concernant son utilisation.

