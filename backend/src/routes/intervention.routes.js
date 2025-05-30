"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const intervention_controller_1 = require("../controllers/intervention.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
const interventionController = new intervention_controller_1.InterventionController();
// Définir les rôles qui peuvent accéder à ces routes. 
// Exemple : Admin (1), Gestionnaire (3) peuvent tout faire, Technicien (4) peut voir et créer/modifier ses interventions.
const ADMIN_ROLE_ID = 1;
const MANAGER_ROLE_ID = 3;
const TECHNICIAN_ROLE_ID = 4; // Adaptez selon votre logique de rôles
// CRUD pour les interventions
router.get("/", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID, TECHNICIAN_ROLE_ID]), interventionController.getAllInterventions);
router.get("/:id", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID, TECHNICIAN_ROLE_ID]), interventionController.getInterventionById);
router.post("/", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID, TECHNICIAN_ROLE_ID]), interventionController.createIntervention); // Technicien pourrait créer une intervention le concernant
router.put("/:id", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID, TECHNICIAN_ROLE_ID]), interventionController.updateIntervention); // Technicien pourrait modifier son intervention
router.delete("/:id", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), interventionController.deleteIntervention); // Seuls Admin/Manager peuvent supprimer
exports.default = router;
