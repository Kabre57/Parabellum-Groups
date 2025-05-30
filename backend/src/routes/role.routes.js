"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const role_controller_1 = require("../controllers/role.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware"); // Assuming roles 1 for admin
const router = (0, express_1.Router)();
const roleController = new role_controller_1.RoleController();
// Pour l'exemple, on considère que seul un admin (role_id = 1) peut gérer les rôles.
// Adaptez les rôles autorisés selon vos besoins.
const ADMIN_ROLE_ID = 1; // Example, define this in a config or enum
router.get("/", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID]), roleController.getAllRoles);
router.get("/:id", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID]), roleController.getRoleById);
router.post("/", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID]), roleController.createRole);
router.put("/:id", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID]), roleController.updateRole);
router.delete("/:id", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID]), roleController.deleteRole);
exports.default = router;
