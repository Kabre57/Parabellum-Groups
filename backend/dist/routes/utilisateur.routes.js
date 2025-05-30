"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const utilisateur_controller_1 = require("../controllers/utilisateur.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
const utilisateurController = new utilisateur_controller_1.UtilisateurController();
// Exemple de rôles : 1 pour Admin, 2 pour un rôle qui peut voir les utilisateurs
const ADMIN_ROLE_ID = 1;
const VIEW_USERS_ROLE_ID = 2; // Adaptez selon votre logique de rôles
// Accès pour Admin : CRUD complet
router.get("/", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, VIEW_USERS_ROLE_ID]), utilisateurController.getAllUtilisateurs);
router.get("/:id", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID, VIEW_USERS_ROLE_ID]), utilisateurController.getUtilisateurById);
router.post("/", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID]), utilisateurController.createUtilisateur);
router.put("/:id", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID]), utilisateurController.updateUtilisateur);
router.delete("/:id", auth_middleware_1.authenticateToken, (0, auth_middleware_1.authorizeRoles)([ADMIN_ROLE_ID]), utilisateurController.deleteUtilisateur);
exports.default = router;
//# sourceMappingURL=utilisateur.routes.js.map