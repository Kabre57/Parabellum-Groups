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
exports.TechnicienController = void 0;
const technicien_service_1 = require("../services/technicien.service");
const validation_schemas_1 = require("../models/validation.schemas");
const technicienService = new technicien_service_1.TechnicienService();
class TechnicienController {
    getAllTechniciens(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const techniciens = yield technicienService.getAll();
                res.status(200).json(techniciens);
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    getTechnicienById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    res.status(400).json({ error: true, message: "ID de technicien invalide." });
                    return;
                }
                const technicien = yield technicienService.getById(id);
                if (technicien) {
                    res.status(200).json(technicien);
                }
                else {
                    res.status(404).json({ error: true, message: "Technicien non trouvé." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    createTechnicien(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validationResult = validation_schemas_1.TechnicienSchema.safeParse(req.body);
                if (!validationResult.success) {
                    res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
                    return;
                }
                const technicienData = validationResult.data;
                const nouveauTechnicien = yield technicienService.create(technicienData);
                if (nouveauTechnicien) {
                    res.status(201).json({ message: "Technicien créé avec succès", technicien: nouveauTechnicien });
                }
                else {
                    res.status(400).json({ error: true, message: "Erreur lors de la création du technicien." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    updateTechnicien(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    res.status(400).json({ error: true, message: "ID de technicien invalide." });
                    return;
                }
                const validationResult = validation_schemas_1.TechnicienSchema.partial().safeParse(req.body);
                if (!validationResult.success) {
                    res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
                    return;
                }
                const technicienData = validationResult.data;
                if (Object.keys(technicienData).length === 0) {
                    res.status(400).json({ error: true, message: "Aucune donnée à mettre à jour." });
                    return;
                }
                const technicienModifie = yield technicienService.update(id, technicienData);
                if (technicienModifie) {
                    res.status(200).json({ message: "Technicien modifié avec succès", technicien: technicienModifie });
                }
                else {
                    res.status(404).json({ error: true, message: "Technicien non trouvé ou erreur lors de la modification." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    deleteTechnicien(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    res.status(400).json({ error: true, message: "ID de technicien invalide." });
                    return;
                }
                const success = yield technicienService.delete(id);
                if (success) {
                    res.status(200).json({ message: "Technicien supprimé avec succès." });
                }
                else {
                    res.status(404).json({ error: true, message: "Technicien non trouvé ou erreur lors de la suppression." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
}
exports.TechnicienController = TechnicienController;
//# sourceMappingURL=technicien.controller.js.map