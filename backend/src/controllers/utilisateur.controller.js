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
exports.UtilisateurController = void 0;
const utilisateur_service_1 = require("../services/utilisateur.service");
const validation_schemas_1 = require("../models/validation.schemas"); // Assurez-vous que ce chemin est correct
const utilisateurService = new utilisateur_service_1.UtilisateurService();
class UtilisateurController {
    getAllUtilisateurs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const utilisateurs = yield utilisateurService.getAll();
                res.status(200).json(utilisateurs);
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    getUtilisateurById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    res.status(400).json({ error: true, message: "ID d'utilisateur invalide." });
                    return;
                }
                const utilisateur = yield utilisateurService.getById(id);
                if (utilisateur) {
                    res.status(200).json(utilisateur);
                }
                else {
                    res.status(404).json({ error: true, message: "Utilisateur non trouvé." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    createUtilisateur(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validationResult = validation_schemas_1.UtilisateurSchema.safeParse(req.body);
                if (!validationResult.success) {
                    res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
                    return;
                }
                const utilisateurData = validationResult.data;
                const nouvelUtilisateur = yield utilisateurService.create(utilisateurData);
                if (nouvelUtilisateur) {
                    res.status(201).json({ message: "Utilisateur créé avec succès", utilisateur: nouvelUtilisateur });
                }
                else {
                    // This case might not be reached if service throws error for null result
                    res.status(400).json({ error: true, message: "Erreur lors de la création de l'utilisateur." });
                }
            }
            catch (error) {
                if (error.message === 'Email already exists.') {
                    res.status(409).json({ error: true, message: error.message });
                }
                else {
                    res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
                }
            }
        });
    }
    updateUtilisateur(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    res.status(400).json({ error: true, message: "ID d'utilisateur invalide." });
                    return;
                }
                // For updates, you might want a partial schema or handle optional fields carefully
                // For simplicity, using the same schema but in a real app, consider a Partial<Utilisateur> schema
                const validationResult = validation_schemas_1.UtilisateurSchema.partial().safeParse(req.body);
                if (!validationResult.success) {
                    res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
                    return;
                }
                const utilisateurData = validationResult.data;
                if (Object.keys(utilisateurData).length === 0) {
                    res.status(400).json({ error: true, message: "Aucune donnée à mettre à jour." });
                    return;
                }
                const utilisateurModifie = yield utilisateurService.update(id, utilisateurData);
                if (utilisateurModifie) {
                    res.status(200).json({ message: "Utilisateur modifié avec succès", utilisateur: utilisateurModifie });
                }
                else {
                    res.status(404).json({ error: true, message: "Utilisateur non trouvé ou erreur lors de la modification." });
                }
            }
            catch (error) {
                if (error.message === 'Email already exists for another user.') {
                    res.status(409).json({ error: true, message: error.message });
                }
                else {
                    res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
                }
            }
        });
    }
    deleteUtilisateur(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    res.status(400).json({ error: true, message: "ID d'utilisateur invalide." });
                    return;
                }
                const success = yield utilisateurService.delete(id);
                if (success) {
                    res.status(200).json({ message: "Utilisateur supprimé avec succès." });
                }
                else {
                    res.status(404).json({ error: true, message: "Utilisateur non trouvé ou erreur lors de la suppression." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
}
exports.UtilisateurController = UtilisateurController;
