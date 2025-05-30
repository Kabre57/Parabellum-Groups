import { z } from "zod";

export const RoleSchema = z.object({
  libelle: z.string().min(1, { message: "Le libellé du rôle est requis." }).max(100, { message: "Le libellé du rôle ne peut pas dépasser 100 caractères." }),
});

export const UtilisateurSchema = z.object({
  nom: z.string().min(1, { message: "Le nom est requis." }).max(100),
  prenom: z.string().min(1, { message: "Le prénom est requis." }).max(100),
  email: z.string().email({ message: "Format d'email invalide." }).max(100),
  mot_de_passe: z.string().min(8, { message: "Le mot de passe doit contenir au moins 8 caractères." }),
  role_id: z.number().int().positive().optional(), // facultatif si souhaité
});


export const SpecialiteSchema = z.object({
  libelle: z.string().min(1).max(100),
});

export const TechnicienSchema = z.object({
  nom: z.string().max(100).optional(),
  prenom: z.string().max(100).optional(),
  contact: z.string().max(100).optional(),
  specialite_id: z.number().int().positive().optional(),
});

export const ClientSchema = z.object({
  nom: z.string().max(100).optional(),
  contact: z.string().max(100).optional(),
  localisation: z.string().max(150).optional(),
});

export const MissionSchema = z.object({
  nature_intervention: z.string().max(150).optional(),
  objectif_du_contrat: z.string().optional(),
  description: z.string().optional(),
  date_sortie_fiche_intervention: z.coerce.date().optional(),
  client_id: z.number().int().positive().optional(),
});

export const InterventionSchema = z.object({
  date_heure_debut: z.coerce.date().optional(),
  date_heure_fin: z.coerce.date().optional(),
  duree: z.number().int().optional(),
  mission_id: z.number().int().positive().optional(),
  technicien_id: z.number().int().positive().optional(),
});

