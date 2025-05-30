import api from "./api"; // Importer l'instance Axios configurée du projet cible

const AuthService = {
  login: async (credentials) => {
    // L'endpoint peut varier, vérifier l'API backend cible. Supposons /auth/login
    const response = await api.post("/auth/login", credentials);
    // La structure de la réponse peut varier. Supposons qu'elle contient { token, user }
    if (response.data.token) {
      localStorage.setItem("authToken", response.data.token);
      // L'intercepteur dans api.js devrait automatiquement ajouter le token aux futures requêtes
    }
    return response.data; // Retourner toute la donnée (token + user info)
  },

  register: async (userData) => {
    // Adapter l'endpoint si nécessaire. Supposons /auth/register
    const response = await api.post("/auth/register", userData);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("authToken");
    // L'intercepteur dans api.js gère la suppression du header pour les futures requêtes
    // La redirection sera gérée par le contexte ou le composant appelant
  },

  forgotPassword: async (email) => {
    // Adapter l'endpoint si nécessaire. Supposons /auth/forgot-password
    const response = await api.post("/auth/forgot-password", { email });
    return response.data;
  },

  resetPassword: async (token, newPassword) => {
    // Adapter l'endpoint et la structure du payload si nécessaire. Supposons /auth/reset-password
    const response = await api.post("/auth/reset-password", { token: token, newPassword: newPassword });
    return response.data;
  },

  // Optionnel: Ajouter une fonction pour récupérer l'utilisateur actuel si le backend le permet
  getCurrentUser: async () => {
    // Adapter l'endpoint. Supposons /auth/me ou /users/me
    try {
      const response = await api.get("/auth/me"); 
      return response.data; // Devrait retourner les informations de l'utilisateur
    } catch (error) {
      // Si l'API renvoie 401 ici, l'intercepteur devrait déjà gérer la déconnexion.
      // Sinon, on peut forcer la déconnexion.
      console.error("Impossible de récupérer l'utilisateur actuel:", error);
      AuthService.logout(); // Assurer la déconnexion en cas d'échec
      throw error; // Renvoyer l'erreur pour que le contexte puisse réagir
    }
  },
};

export default AuthService;

