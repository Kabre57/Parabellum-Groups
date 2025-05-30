import { Client } from "./client.model";

export interface Mission {
  num_intervention?: number;
  nature_intervention?: string;
  objectif_du_contrat?: string;
  description?: string;
  date_sortie_fiche_intervention?: Date;
  client_id?: number;
  client?: Client; // Pour la jointure
}
