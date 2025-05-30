import { Router } from "express";
import { SpecialiteController } from "../controllers/specialite.controller";
import { authenticateToken, authorizeRoles } from "../middlewares/auth.middleware";

const router = Router();
const specialiteController = new SpecialiteController();

// Définir les rôles qui peuvent accéder à ces routes. Exemple : Admin (1), Gestionnaire (3)
const ADMIN_ROLE_ID = 1;
const MANAGER_ROLE_ID = 3; // Adaptez selon votre logique de rôles

// CRUD pour les spécialités, accessible par Admin et Gestionnaire
router.get("/", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), specialiteController.getAllSpecialites);
router.get("/:id", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), specialiteController.getSpecialiteById);
router.post("/", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), specialiteController.createSpecialite);
router.put("/:id", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), specialiteController.updateSpecialite);
router.delete("/:id", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), specialiteController.deleteSpecialite);

export default router;

