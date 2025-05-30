"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pool = new pg_1.Pool({
    user: process.env.DB_USER || "postgres", // Default PostgreSQL user
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_DATABASE || "parabellum_db", // Adjusted default DB name
    password: process.env.DB_PASSWORD || "password", // Common default for local pg
    port: parseInt(process.env.DB_PORT || "5432", 10), // Default PostgreSQL port
    // PostgreSQL Pool options (optional, can be added as needed)
    // max: 20, // example: max number of clients in the pool
    // idleTimeoutMillis: 30000, // example: how long a client is allowed to remain idle before being closed
});
// Test the connection (optional, but good for immediate feedback)
pool.connect((err, client, release) => {
    if (err) {
        return console.error("Erreur de connexion à la base de données PostgreSQL", err.stack);
    }
    if (client) {
        client.query("SELECT NOW()", (err, result) => {
            release(); // Release the client back to the pool
            if (err) {
                return console.error("Erreur lors de l'exécution de la requête de test", err.stack);
            }
            console.log("Connecté avec succès à PostgreSQL. Heure actuelle de la base de données:", result.rows[0].now);
        });
    }
});
exports.default = pool;
