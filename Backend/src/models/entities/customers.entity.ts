/**
 * Modèle pour la table customers
 */
export interface Customer {
    id?: number;
    name: string;
    theme?: string;
    email?: string;
    phone?: string;
    company?: string;
    card_type?: string;
    card_number?: string;
    joined?: Date;
    status?: string;
}
