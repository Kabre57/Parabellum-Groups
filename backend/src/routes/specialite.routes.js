"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const specialite_controller_1 = require("../controllers/specialite.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
const specialiteController = new specialite_controller_1.SpecialiteController();
// Définir les rôles qui peuvent accéder à ces routes. Exemple : Admin (1), Gestionnaire (3)
const ADMIN_ROLE_ID = 1;
const MANAGER_ROLE_ID = 3; // Adaptez selon votre logique de rôles
// CRUD pour les spécialités, accessible par Admin et Gestionnaire
router.get("/", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), specialiteController.getAllSpecialites);
router.get("/:id", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), specialiteController.getSpecialiteById);
router.post("/", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), specialiteController.createSpecialite);
router.put("/:id", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), specialiteController.updateSpecialite);
router.delete("/:id", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), specialiteController.deleteSpecialite);
exports.default = router;
