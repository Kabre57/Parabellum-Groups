import { Router } from "express";
import { ClientController } from "../controllers/client.controller";
import { authenticateToken, authorizeRoles } from "../middlewares/auth.middleware";

const router = Router();
const clientController = new ClientController();

// Définir les rôles qui peuvent accéder à ces routes. Exemple : Admin (1), Gestionnaire (3)
const ADMIN_ROLE_ID = 1;
const MANAGER_ROLE_ID = 3; // Adaptez selon votre logique de rôles

// CRUD pour les clients, accessible par Admin et Gestionnaire
router.get("/", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), clientController.getAllClients);
router.get("/:id", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), clientController.getClientById);
router.post("/", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), clientController.createClient);
router.put("/:id", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), clientController.updateClient);
router.delete("/:id", authenticateToken, authorizeRoles([ADMIN_ROLE_ID, MANAGER_ROLE_ID]), clientController.deleteClient);

export default router;

