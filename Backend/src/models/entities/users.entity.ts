/**
 * Modèle pour la table users
 */
export interface User {
    id?: number;
    theme?: string;
    name: string;
    display_name?: string;
    dob?: string;
    role?: string;
    email?: string;
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
}
