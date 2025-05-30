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
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
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
const logger_1 = __importStar(require("./config/logger"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT_STRING = process.env.PORT || "3001";
const PORT = parseInt(PORT_STRING, 10);
// Middlewares
// Configuration CORS plus permissive pour le débogage
app.use((0, cors_1.default)({
    origin: true, // Autorise dynamiquement l'origine de la requête ou true pour toutes les origines en développement
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(logger_1.httpLoggerMiddleware);
(0, swagger_1.setupSwagger)(app);
app.use("/api/auth", auth_routes_1.default);
app.use("/api/roles", role_routes_1.default);
app.use("/api/utilisateurs", utilisateur_routes_1.default);
app.use("/api/clients", client_routes_1.default);
app.use("/api/specialites", specialite_routes_1.default);
app.use("/api/techniciens", technicien_routes_1.default);
app.use("/api/missions", mission_routes_1.default);
app.use("/api/interventions", intervention_routes_1.default);
if (process.env.NODE_ENV === "production") {
    const frontendBuildPath = path_1.default.resolve(__dirname, "../../frontend/build");
    app.use(express_1.default.static(frontendBuildPath));
    app.get("*", (req, res, next) => {
        if (req.path.startsWith("/api/") || req.path.startsWith("/api-docs")) {
            return next();
        }
        res.sendFile(path_1.default.resolve(frontendBuildPath, "index.html"));
    });
}
else {
    app.get("/", (req, res) => {
        logger_1.default.info("Route de base appelée en développement");
        res.send("Bienvenue sur l'API de Parabellum Group ! Le frontend est servi séparément en développement.");
    });
}
app.use(errorHandler_middleware_1.globalErrorHandler);
if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, "0.0.0.0", () => {
        logger_1.default.info(`Serveur backend lancé sur http://0.0.0.0:${PORT} et accessible publiquement via l'URL d'exposition`);
        if (process.env.NODE_ENV !== "production") {
            logger_1.default.info(`Documentation Swagger disponible sur /api-docs`);
        }
    });
}
exports.default = app;
//# sourceMappingURL=server.js.map