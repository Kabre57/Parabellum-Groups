/**
 * Modèle pour la table chats
 */
export interface Chat {
    id?: number;
    name: string;
    nickname?: string;
    theme?: string;
    chat_theme?: string;
    fav?: boolean;
    last_online?: string;
    date?: string;
    online?: string;
    last_status?: string;
    messages?: any; // JSONB dans PostgreSQL
    chat_group?: boolean;
    user?: any; // JSONB dans PostgreSQL
}
