import { Router } from "express";
import { MissionController } from "../controllers/mission.controller";
import { authenticateToken, authorizeRoles } from "../middlewares/auth.middleware";

const router = Router();
const missionController = new MissionController();

// Définir les rôles qui peuvent accéder à ces routes. Exemple : Admin (1), Gestionnaire (3), Technicien (4) pour voir
const ADMIN_ROLE_ID = 1;
const MANAGER_ROLE_ID = 3;
const TECHNICIAN_ROLE_ID = 4; // Adaptez selon votre logique de rôles

// CRUD pour les missions
router.get("/", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID, TECHNICIAN_ROLE_ID]), missionController.getAllMissions);
router.get("/:id", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID, TECHNICIAN_ROLE_ID]), missionController.getMissionById);
router.post("/", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), missionController.createMission);
router.put("/:id", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), missionController.updateMission);
router.delete("/:id", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), missionController.deleteMission);

export default router;

