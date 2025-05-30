import { Router } from "express";
import { InterventionController } from "../controllers/intervention.controller";
import { authenticateToken, authorizeRoles } from "../middlewares/auth.middleware";

const router = Router();
const interventionController = new InterventionController();

// Définir les rôles qui peuvent accéder à ces routes. 
// Exemple : Admin (1), Gestionnaire (3) peuvent tout faire, Technicien (4) peut voir et créer/modifier ses interventions.
const ADMIN_ROLE_ID = 1;
const MANAGER_ROLE_ID = 3;
const TECHNICIAN_ROLE_ID = 4; // Adaptez selon votre logique de rôles

// CRUD pour les interventions
router.get("/", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID, TECHNICIAN_ROLE_ID]), interventionController.getAllInterventions);
router.get("/:id", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID, TECHNICIAN_ROLE_ID]), interventionController.getInterventionById);
router.post("/", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID, TECHNICIAN_ROLE_ID]), interventionController.createIntervention); // Technicien pourrait créer une intervention le concernant
router.put("/:id", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID, TECHNICIAN_ROLE_ID]), interventionController.updateIntervention); // Technicien pourrait modifier son intervention
router.delete("/:id", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), interventionController.deleteIntervention); // Seuls Admin/Manager peuvent supprimer

export default router;

