"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterventionSchema = exports.MissionSchema = exports.ClientSchema = exports.TechnicienSchema = exports.SpecialiteSchema = exports.UtilisateurSchema = exports.RoleSchema = void 0;
const zod_1 = require("zod");
exports.RoleSchema = zod_1.z.object({
    libelle: zod_1.z.string().min(1, { message: "Le libellé du rôle est requis." }).max(100, { message: "Le libellé du rôle ne peut pas dépasser 100 caractères." }),
});
exports.UtilisateurSchema = zod_1.z.object({
    nom: zod_1.z.string().min(1, { message: "Le nom est requis." }).max(100),
    prenom: zod_1.z.string().min(1, { message: "Le prénom est requis." }).max(100),
    email: zod_1.z.string().email({ message: "Format d'email invalide." }).max(100),
    mot_de_passe: zod_1.z.string().min(8, { message: "Le mot de passe doit contenir au moins 8 caractères." }),
    role_id: zod_1.z.number().int().positive().optional(), // facultatif si souhaité
});
exports.SpecialiteSchema = zod_1.z.object({
    libelle: zod_1.z.string().min(1).max(100),
});
exports.TechnicienSchema = zod_1.z.object({
    nom: zod_1.z.string().max(100).optional(),
    prenom: zod_1.z.string().max(100).optional(),
    contact: zod_1.z.string().max(100).optional(),
    specialite_id: zod_1.z.number().int().positive().optional(),
});
exports.ClientSchema = zod_1.z.object({
    nom: zod_1.z.string().max(100).optional(),
    contact: zod_1.z.string().max(100).optional(),
    localisation: zod_1.z.string().max(150).optional(),
});
exports.MissionSchema = zod_1.z.object({
    nature_intervention: zod_1.z.string().max(150).optional(),
    objectif_du_contrat: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    date_sortie_fiche_intervention: zod_1.z.coerce.date().optional(),
    client_id: zod_1.z.number().int().positive().optional(),
});
exports.InterventionSchema = zod_1.z.object({
    date_heure_debut: zod_1.z.coerce.date().optional(),
    date_heure_fin: zod_1.z.coerce.date().optional(),
    duree: zod_1.z.number().int().optional(),
    mission_id: zod_1.z.number().int().positive().optional(),
    technicien_id: zod_1.z.number().int().positive().optional(),
});
