"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_controller_1 = require("../controllers/client.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
const clientController = new client_controller_1.ClientController();
// Définir les rôles qui peuvent accéder à ces routes. Exemple : Admin (1), Gestionnaire (3)
const ADMIN_ROLE_ID = 1;
const MANAGER_ROLE_ID = 3; // Adaptez selon votre logique de rôles
// CRUD pour les clients, accessible par Admin et Gestionnaire
router.get("/", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), clientController.getAllClients);
router.get("/:id", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), clientController.getClientById);
router.post("/", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), clientController.createClient);
router.put("/:id", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), clientController.updateClient);
router.delete("/:id", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), clientController.deleteClient);
exports.default = router;
