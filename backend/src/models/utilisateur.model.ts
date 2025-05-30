import { Role } from "./role.model";

// Interface principale représentant un utilisateur en BDD (lecture complète)
export interface Utilisateur {
  id?: number;
  nom: string;
  prenom: string;
  email: string;
  mot_de_passe: string; // Interne uniquement, jamais renvoyé au client
  role_id?: number;
  role?: Role; // Jointure avec le rôle
  reset_password_token?: string | null; // Token pour la réinitialisation du mot de passe
  reset_password_expires_at?: Date | null; // Date d'expiration du token de réinitialisation
  created_at?: Date;
  updated_at?: Date;
}

// Interface pour la création d'un utilisateur (sans champs générés par la BDD)
export type UtilisateurCreation = Pick<Utilisateur, "nom" | "prenom" | "email" | "mot_de_passe" | "role_id">;

// Interface pour l'affichage d'un utilisateur au public (sans mot de passe)
export type UtilisateurPublic = Omit<Utilisateur, "mot_de_passe" | "reset_password_token" | "reset_password_expires_at">;

// Interface pour l’usage interne quand on a besoin du mot de passe aussi
export type UtilisateurWithPassword = Utilisateur;

