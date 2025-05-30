/**
 * Modèle pour la table product_cards
 */
export interface ProductCard {
    id?: number;
    new?: boolean;
    hot?: boolean;
    slider?: any; // JSONB dans PostgreSQL
    category?: string;
    title: string;
    type?: string;
    model_number?: string;
    price?: number;
    current_price?: number;
}
