"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const technicien_controller_1 = require("../controllers/technicien.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
const technicienController = new technicien_controller_1.TechnicienController();
// Définir les rôles qui peuvent accéder à ces routes. Exemple : Admin (1), Gestionnaire (3)
const ADMIN_ROLE_ID = 1;
const MANAGER_ROLE_ID = 3; // Adaptez selon votre logique de rôles
// CRUD pour les techniciens, accessible par Admin et Gestionnaire
router.get("/", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), technicienController.getAllTechniciens);
router.get("/:id", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), technicienController.getTechnicienById);
router.post("/", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), technicienController.createTechnicien);
router.put("/:id", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), technicienController.updateTechnicien);
router.delete("/:id", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), technicienController.deleteTechnicien);
exports.default = router;
//# sourceMappingURL=technicien.routes.js.map