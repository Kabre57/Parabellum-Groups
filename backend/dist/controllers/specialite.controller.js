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
exports.SpecialiteController = void 0;
const specialite_service_1 = require("../services/specialite.service");
const validation_schemas_1 = require("../models/validation.schemas");
const specialiteService = new specialite_service_1.SpecialiteService();
class SpecialiteController {
    getAllSpecialites(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const specialites = yield specialiteService.getAll();
                res.status(200).json(specialites);
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    getSpecialiteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    res.status(400).json({ error: true, message: "ID de spécialité invalide." });
                    return;
                }
                const specialite = yield specialiteService.getById(id);
                if (specialite) {
                    res.status(200).json(specialite);
                }
                else {
                    res.status(404).json({ error: true, message: "Spécialité non trouvée." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    createSpecialite(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validationResult = validation_schemas_1.SpecialiteSchema.safeParse(req.body);
                if (!validationResult.success) {
                    res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
                    return;
                }
                const specialiteData = validationResult.data;
                const nouvelleSpecialite = yield specialiteService.create(specialiteData);
                if (nouvelleSpecialite) {
                    res.status(201).json({ message: "Spécialité créée avec succès", specialite: nouvelleSpecialite });
                }
                else {
                    res.status(400).json({ error: true, message: "Erreur lors de la création de la spécialité." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    updateSpecialite(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    res.status(400).json({ error: true, message: "ID de spécialité invalide." });
                    return;
                }
                const validationResult = validation_schemas_1.SpecialiteSchema.partial().safeParse(req.body);
                if (!validationResult.success) {
                    res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
                    return;
                }
                const specialiteData = validationResult.data;
                if (Object.keys(specialiteData).length === 0) {
                    res.status(400).json({ error: true, message: "Aucune donnée à mettre à jour." });
                    return;
                }
                const specialiteModifiee = yield specialiteService.update(id, specialiteData);
                if (specialiteModifiee) {
                    res.status(200).json({ message: "Spécialité modifiée avec succès", specialite: specialiteModifiee });
                }
                else {
                    res.status(404).json({ error: true, message: "Spécialité non trouvée ou erreur lors de la modification." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    deleteSpecialite(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    res.status(400).json({ error: true, message: "ID de spécialité invalide." });
                    return;
                }
                const success = yield specialiteService.delete(id);
                if (success) {
                    res.status(200).json({ message: "Spécialité supprimée avec succès." });
                }
                else {
                    res.status(404).json({ error: true, message: "Spécialité non trouvée ou erreur lors de la suppression." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
}
exports.SpecialiteController = SpecialiteController;
//# sourceMappingURL=specialite.controller.js.map