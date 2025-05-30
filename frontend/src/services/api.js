import axios from 'axios';

// Récupérer l'URL de l'API depuis les variables d'environnement Vite
const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api'; // URL par défaut si non définie

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour ajouter le token JWT aux requêtes
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur pour gérer les erreurs globales (ex: 401 Unauthorized)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      console.error('Erreur API:', status, data);

      // Gestion spécifique des erreurs HTTP
      switch (status) {
        case 401: // Non autorisé (token invalide/expiré)
          // Supprimer le token invalide et rediriger vers la page de connexion
          localStorage.removeItem('authToken');
          // Idéalement, utiliser le contexte d'authentification pour déconnecter l'utilisateur
          // et le router de React pour la redirection.
          // Pour l'instant, une simple redirection si on n'est pas déjà sur la page de connexion.
          if (window.location.pathname !== '/auths/login') { // Adapter le chemin si nécessaire
            // window.location.href = '/auths/login'; // Éviter le rechargement complet si possible
            alert("Session expirée ou invalide. Veuillez vous reconnecter.");
            // TODO: Implémenter une redirection propre avec useNavigate ou contexte
          }
          break;
        case 403: // Interdit (droits insuffisants)
          alert("Accès refusé. Vous n'avez pas les permissions nécessaires.");
          // TODO: Rediriger vers une page /acces-refuse
          break;
        case 500: // Erreur serveur
          alert("Une erreur interne du serveur s'est produite. Veuillez réessayer plus tard.");
          // TODO: Rediriger vers une page /erreur-serveur
          break;
        // Gérer d'autres codes d'erreur si nécessaire
        default:
          // Pour les autres erreurs (ex: 400, 404 non gérées spécifiquement ici),
          // l'erreur sera rejetée et pourra être traitée dans le composant appelant.
          break;
      }
    } else if (error.request) {
      // La requête a été faite mais aucune réponse n'a été reçue
      console.error('Erreur réseau ou serveur inaccessible:', error.request);
      alert("Impossible de joindre le serveur. Vérifiez votre connexion internet ou réessayez plus tard.");
    } else {
      // Une erreur s'est produite lors de la configuration de la requête
      console.error('Erreur de configuration Axios:', error.message);
      alert("Une erreur s'est produite lors de la préparation de la requête.");
    }
    // Rejeter la promesse pour que l'erreur puisse être traitée dans le .catch() du composant
    return Promise.reject(error);
  }
);

export default api;

