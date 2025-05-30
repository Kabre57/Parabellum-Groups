/**
 * Modèle pour la table utilisateur
 */
export interface Utilisateur {
    id?: number;
    
    // Champs de la nouvelle structure
    theme?: string;
    name: string;
    display_name?: string;
    dob?: string;
    email: string;
    balance?: number;
    phone?: string;
    email_status?: string;
    kyc_status?: string;
    last_login?: string;
    status?: string;
    address?: string;
    state?: string;
    country?: string;
    designation?: string;
    projects?: string;
    performed?: string;
    tasks?: string;
    
    // Relation avec la table role
    role_id?: number;
    
    // Champs d'authentification
    mot_de_passe: string;
    reset_password_token?: string;
    reset_password_expires_at?: Date;
    
    // Timestamps
    created_at?: Date;
    updated_at?: Date;
}
