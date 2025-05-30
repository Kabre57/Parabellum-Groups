/**
 * Modèle pour la table calendar_events
 */
export interface CalendarEvent {
    id: string;
    title: string;
    start_date?: Date;
    end_date?: Date;
    class_name?: string;
    description?: string;
}
