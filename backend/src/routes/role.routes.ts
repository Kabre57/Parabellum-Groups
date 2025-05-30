import { Router } from "express";
import { RoleController } from "../controllers/role.controller";
import { authenticateToken, authorizeRoles } from "../middlewares/auth.middleware"; // Assuming roles 1 for admin

const router = Router();
const roleController = new RoleController();

// Pour l'exemple, on considère que seul un admin (role_id = 1) peut gérer les rôles.
// Adaptez les rôles autorisés selon vos besoins.
const ADMIN_ROLE_ID = 1; // Example, define this in a config or enum

router.get("/", authenticateToken, authorizeRoles([ADMIN_ROLE_ID]), roleController.getAllRoles);
router.get("/:id", authenticateToken, authorizeRoles([ADMIN_ROLE_ID]), roleController.getRoleById);
router.post("/", authenticateToken, authorizeRoles([ADMIN_ROLE_ID]), roleController.createRole);
router.put("/:id", authenticateToken, authorizeRoles([ADMIN_ROLE_ID]), roleController.updateRole);
router.delete("/:id", authenticateToken, authorizeRoles([ADMIN_ROLE_ID]), roleController.deleteRole);

export default router;

