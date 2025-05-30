import { Specialite } from "./specialite.model";

export interface Technicien {
  id?: number;
  nom?: string;
  prenom?: string;
  contact?: string;
  specialite_id?: number;
  specialite?: Specialite; // Pour la jointure
}
