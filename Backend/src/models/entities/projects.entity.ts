/**
 * Modèle pour la table projects
 */
export interface Project {
    id: string;
    title: string;
    theme?: string;
    client?: string;
    description?: string;
    tasks?: string;
    progress?: string;
    team?: any; // JSONB dans PostgreSQL
    team_lead?: string;
    team_count?: number;
    status?: any; // JSONB dans PostgreSQL
}
