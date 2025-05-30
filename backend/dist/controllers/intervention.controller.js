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
exports.InterventionController = void 0;
const intervention_service_1 = require("../services/intervention.service");
const validation_schemas_1 = require("../models/validation.schemas");
const interventionService = new intervention_service_1.InterventionService();
class InterventionController {
    getAllInterventions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const interventions = yield interventionService.getAll();
                res.status(200).json(interventions);
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    getInterventionById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    res.status(400).json({ error: true, message: "ID d'intervention invalide." });
                    return;
                }
                const intervention = yield interventionService.getById(id);
                if (intervention) {
                    res.status(200).json(intervention);
                }
                else {
                    res.status(404).json({ error: true, message: "Intervention non trouvée." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    createIntervention(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validationResult = validation_schemas_1.InterventionSchema.safeParse(req.body);
                if (!validationResult.success) {
                    res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
                    return;
                }
                const interventionData = validationResult.data;
                const nouvelleIntervention = yield interventionService.create(interventionData);
                if (nouvelleIntervention) {
                    res.status(201).json({ message: "Intervention créée avec succès", intervention: nouvelleIntervention });
                }
                else {
                    res.status(400).json({ error: true, message: "Erreur lors de la création de l'intervention." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    updateIntervention(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    res.status(400).json({ error: true, message: "ID d'intervention invalide." });
                    return;
                }
                const validationResult = validation_schemas_1.InterventionSchema.partial().safeParse(req.body);
                if (!validationResult.success) {
                    res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
                    return;
                }
                const interventionData = validationResult.data;
                if (Object.keys(interventionData).length === 0) {
                    res.status(400).json({ error: true, message: "Aucune donnée à mettre à jour." });
                    return;
                }
                const interventionModifiee = yield interventionService.update(id, interventionData);
                if (interventionModifiee) {
                    res.status(200).json({ message: "Intervention modifiée avec succès", intervention: interventionModifiee });
                }
                else {
                    res.status(404).json({ error: true, message: "Intervention non trouvée ou erreur lors de la modification." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    deleteIntervention(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    res.status(400).json({ error: true, message: "ID d'intervention invalide." });
                    return;
                }
                const success = yield interventionService.delete(id);
                if (success) {
                    res.status(200).json({ message: "Intervention supprimée avec succès." });
                }
                else {
                    res.status(404).json({ error: true, message: "Intervention non trouvée ou erreur lors de la suppression." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
}
exports.InterventionController = InterventionController;
//# sourceMappingURL=intervention.controller.js.map