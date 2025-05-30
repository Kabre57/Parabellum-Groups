"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleController = void 0;
const role_service_1 = require("../services/role.service");
const validation_schemas_1 = require("../models/validation.schemas");
const roleService = new role_service_1.RoleService();
class RoleController {
    getAllRoles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const roles = yield roleService.getAll();
                res.status(200).json(roles);
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    getRoleById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    res.status(400).json({ error: true, message: "ID de rôle invalide." });
                    return;
                }
                const role = yield roleService.getById(id);
                if (role) {
                    res.status(200).json(role);
                }
                else {
                    res.status(404).json({ error: true, message: "Rôle non trouvé." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    createRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validationResult = validation_schemas_1.RoleSchema.safeParse(req.body);
                if (!validationResult.success) {
                    res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
                    return;
                }
                const roleData = validationResult.data;
                const nouveauRole = yield roleService.create(roleData);
                if (nouveauRole) {
                    res.status(201).json({ message: "Rôle créé avec succès", role: nouveauRole });
                }
                else {
                    res.status(400).json({ error: true, message: "Erreur lors de la création du rôle." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    updateRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    res.status(400).json({ error: true, message: "ID de rôle invalide." });
                    return;
                }
                const validationResult = validation_schemas_1.RoleSchema.safeParse(req.body);
                if (!validationResult.success) {
                    res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
                    return;
                }
                const roleData = validationResult.data;
                const roleModifie = yield roleService.update(id, roleData);
                if (roleModifie) {
                    res.status(200).json({ message: "Rôle modifié avec succès", role: roleModifie });
                }
                else {
                    res.status(404).json({ error: true, message: "Rôle non trouvé ou erreur lors de la modification." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    deleteRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    res.status(400).json({ error: true, message: "ID de rôle invalide." });
                    return;
                }
                const success = yield roleService.delete(id);
                if (success) {
                    res.status(200).json({ message: "Rôle supprimé avec succès." }); // Changed to 200 as 204 should not have a body
                }
                else {
                    res.status(404).json({ error: true, message: "Rôle non trouvé ou erreur lors de la suppression." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
}
exports.RoleController = RoleController;
