import { Router } from "express";
import { TechnicienController } from "../controllers/technicien.controller";
import { authenticateToken, authorizeRoles } from "../middlewares/auth.middleware";

const router = Router();
const technicienController = new TechnicienController();

// Définir les rôles qui peuvent accéder à ces routes. Exemple : Admin (1), Gestionnaire (3)
const ADMIN_ROLE_ID = 1;
const MANAGER_ROLE_ID = 3; // Adaptez selon votre logique de rôles

// CRUD pour les techniciens, accessible par Admin et Gestionnaire
router.get("/", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), technicienController.getAllTechniciens);
router.get("/:id", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), technicienController.getTechnicienById);
router.post("/", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), technicienController.createTechnicien);
router.put("/:id", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), technicienController.updateTechnicien);
router.delete("/:id", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), technicienController.deleteTechnicien);

export default router;

