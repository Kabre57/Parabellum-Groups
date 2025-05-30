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
exports.ClientController = void 0;
const client_service_1 = require("../services/client.service");
const validation_schemas_1 = require("../models/validation.schemas");
const clientService = new client_service_1.ClientService();
class ClientController {
    getAllClients(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clients = yield clientService.getAll();
                res.status(200).json(clients);
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    getClientById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    res.status(400).json({ error: true, message: "ID de client invalide." });
                    return;
                }
                const client = yield clientService.getById(id);
                if (client) {
                    res.status(200).json(client);
                }
                else {
                    res.status(404).json({ error: true, message: "Client non trouvé." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    createClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validationResult = validation_schemas_1.ClientSchema.safeParse(req.body);
                if (!validationResult.success) {
                    res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
                    return;
                }
                const clientData = validationResult.data;
                const nouveauClient = yield clientService.create(clientData);
                if (nouveauClient) {
                    res.status(201).json({ message: "Client créé avec succès", client: nouveauClient });
                }
                else {
                    res.status(400).json({ error: true, message: "Erreur lors de la création du client." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    updateClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    res.status(400).json({ error: true, message: "ID de client invalide." });
                    return;
                }
                const validationResult = validation_schemas_1.ClientSchema.partial().safeParse(req.body);
                if (!validationResult.success) {
                    res.status(400).json({ error: true, message: "Données invalides", details: validationResult.error.format() });
                    return;
                }
                const clientData = validationResult.data;
                if (Object.keys(clientData).length === 0) {
                    res.status(400).json({ error: true, message: "Aucune donnée à mettre à jour." });
                    return;
                }
                const clientModifie = yield clientService.update(id, clientData);
                if (clientModifie) {
                    res.status(200).json({ message: "Client modifié avec succès", client: clientModifie });
                }
                else {
                    res.status(404).json({ error: true, message: "Client non trouvé ou erreur lors de la modification." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
    deleteClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    res.status(400).json({ error: true, message: "ID de client invalide." });
                    return;
                }
                const success = yield clientService.delete(id);
                if (success) {
                    res.status(200).json({ message: "Client supprimé avec succès." });
                }
                else {
                    res.status(404).json({ error: true, message: "Client non trouvé ou erreur lors de la suppression." });
                }
            }
            catch (error) {
                res.status(500).json({ error: true, message: error.message || "Erreur interne du serveur." });
            }
        });
    }
}
exports.ClientController = ClientController;
//# sourceMappingURL=client.controller.js.map