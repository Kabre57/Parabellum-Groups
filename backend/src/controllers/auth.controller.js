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
exports.AuthController = void 0;
const auth_service_1 = require("../services/auth.service");
const utilisateur_service_1 = require("../services/utilisateur.service");
const utilisateurService = new utilisateur_service_1.UtilisateurService();
const authService = new auth_service_1.AuthService(utilisateurService);
class AuthController {
    /**
     * Enregistrement d’un nouvel utilisateur
     */
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const utilisateurData = req.body;
                const resultat = yield authService.register(utilisateurData);
                res.status(201).json({
                    message: "Utilisateur enregistré avec succès",
                    token: resultat.token,
                    utilisateur: resultat.utilisateur
                });
            }
            catch (error) {
                res.status(error.status || 500).json({
                    error: true,
                    message: error.message || "Erreur interne du serveur."
                });
            }
        });
    }
    /**
     * Connexion d’un utilisateur existant
     */
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, mot_de_passe } = req.body;
                const resultat = yield authService.login(email, mot_de_passe);
                res.status(200).json({
                    message: "Connexion réussie",
                    token: resultat.token,
                    utilisateur: resultat.utilisateur
                });
            }
            catch (error) {
                res.status(error.status || 500).json({
                    error: true,
                    message: error.message || "Erreur interne du serveur."
                });
            }
        });
    }
}
exports.AuthController = AuthController;
