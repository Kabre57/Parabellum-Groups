import { Mission } from "./mission.model";
import { Technicien } from "./technicien.model";

export interface Intervention {
  id?: number;
  date_heure_debut?: Date;
  date_heure_fin?: Date;
  duree?: number;
  mission_id?: number;
  technicien_id?: number;
  mission?: Mission; // Pour la jointure
  technicien?: Technicien; // Pour la jointure
}
