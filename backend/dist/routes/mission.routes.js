"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mission_controller_1 = require("../controllers/mission.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
const missionController = new mission_controller_1.MissionController();
// Définir les rôles qui peuvent accéder à ces routes. Exemple : Admin (1), Gestionnaire (3), Technicien (4) pour voir
const ADMIN_ROLE_ID = 1;
const MANAGER_ROLE_ID = 3;
const TECHNICIAN_ROLE_ID = 4; // Adaptez selon votre logique de rôles
// CRUD pour les missions
router.get("/", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID, TECHNICIAN_ROLE_ID]), missionController.getAllMissions);
router.get("/:id", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID, TECHNICIAN_ROLE_ID]), missionController.getMissionById);
router.post("/", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), missionController.createMission);
router.put("/:id", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), missionController.updateMission);
router.delete("/:id", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), missionController.deleteMission);
exports.default = router;
//# sourceMappingURL=mission.routes.js.map