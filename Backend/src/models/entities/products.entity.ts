/**
 * Modèle pour la table products
 */
export interface Product {
    id?: number;
    name: string;
    sku?: string;
    price?: number;
    stock?: number;
    category?: any; // JSONB dans PostgreSQL
    fav?: boolean;
    check?: boolean;
}
