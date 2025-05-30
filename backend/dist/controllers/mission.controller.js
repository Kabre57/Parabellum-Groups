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
exports.MissionController = void 0;
const mission_service_1 = require("../services/mission.service");
const validation_schemas_1 = require("../models/validation.schemas");
const missionService = new mission_service_1.MissionService();
class MissionController {
    getAllMissions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const missions = yield missionService.getAll();
                res.status(200).json(missions);
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    getMissionById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    res.status(400).json({ error: true, message: "ID de mission invalide." });
                    return;
                }
                const mission = yield missionService.getById(id);
                if (mission) {
                    res.status(200).json(mission);
                }
                else {
                    res.status(404).json({ error: true, message: "Mission non trouvée." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    createMission(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validationResult = validation_schemas_1.MissionSchema.safeParse(req.body);
                if (!validationResult.success) {
                    res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
                    return;
                }
                const missionData = validationResult.data;
                const nouvelleMission = yield missionService.create(missionData);
                if (nouvelleMission) {
                    res.status(201).json({ message: "Mission créée avec succès", mission: nouvelleMission });
                }
                else {
                    res.status(400).json({ error: true, message: "Erreur lors de la création de la mission." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    updateMission(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    res.status(400).json({ error: true, message: "ID de mission invalide." });
                    return;
                }
                const validationResult = validation_schemas_1.MissionSchema.partial().safeParse(req.body);
                if (!validationResult.success) {
                    res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
                    return;
                }
                const missionData = validationResult.data;
                if (Object.keys(missionData).length === 0) {
                    res.status(400).json({ error: true, message: "Aucune donnée à mettre à jour." });
                    return;
                }
                const missionModifiee = yield missionService.update(id, missionData);
                if (missionModifiee) {
                    res.status(200).json({ message: "Mission modifiée avec succès", mission: missionModifiee });
                }
                else {
                    res.status(404).json({ error: true, message: "Mission non trouvée ou erreur lors de la modification." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    deleteMission(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    res.status(400).json({ error: true, message: "ID de mission invalide." });
                    return;
                }
                const success = yield missionService.delete(id);
                if (success) {
                    res.status(200).json({ message: "Mission supprimée avec succès." });
                }
                else {
                    res.status(404).json({ error: true, message: "Mission non trouvée ou erreur lors de la suppression." });
                }
            }
            catch (error) {
                if (error.message === "Cannot delete mission because it is referenced by interventions.") {
                    res.status(409).json({ error: true, message: error.message });
                }
                else {
                    res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
                }
            }
        });
    }
}
exports.MissionController = MissionController;
//# sourceMappingURL=mission.controller.js.map