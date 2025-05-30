import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import AuthService from '../services/auth.service'; // Adapter le chemin si nécessaire
import api from '../services/api'; // Assurer que l'instance api est correctement configurée pour les headers

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Indique si l'état initial est en cours de chargement
  const [error, setError] = useState(null); // Ajouter un état pour gérer les erreurs d'authentification

  // Fonction pour effacer les erreurs
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Utiliser useCallback pour mémoriser la fonction et éviter des re-render inutiles
  const initializeAuth = useCallback(async () => {
    setLoading(true);
    clearError(); // Effacer les erreurs précédentes au démarrage
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        // Tenter de récupérer les informations de l'utilisateur pour valider le token
        // Assumons que getCurrentUser retourne l'objet utilisateur directement
        const userData = await AuthService.getCurrentUser(); 
        setUser(userData); // Mettre à jour l'état utilisateur avec les données reçues
      } catch (err) {
        console.error("Échec de l'initialisation de l'authentification:", err);
        setUser(null);
      }
    } else {
      setUser(null);
    }
    setLoading(false);
  }, [clearError]);

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  const login = async (credentials) => {
    setLoading(true);
    clearError();
    try {
      const data = await AuthService.login(credentials);
      // AuthService.login stocke le token
      // La réponse backend contient { message, token, utilisateur }
      // Utiliser data.utilisateur pour mettre à jour l'état
      setUser(data.utilisateur); // *** Correction ici: utiliser data.utilisateur ***
      setLoading(false);
      return data.utilisateur; // Retourner l'objet utilisateur reçu
    } catch (err) {
      console.error('Erreur de connexion dans AuthContext:', err);
      const errorMessage = err.response?.data?.message || err.message || 'Échec de la connexion.';
      setError(errorMessage);
      setUser(null);
      setLoading(false);
      // L'erreur est gérée par l'état 'error', pas besoin de la relancer
    }
  };

  const register = async (userData) => {
    setLoading(true);
    clearError();
    try {
      // La réponse backend contient { message, token, utilisateur }
      const response = await AuthService.register(userData);
      setLoading(false);
      // L'inscription ne connecte pas automatiquement, donc on ne met pas à jour setUser ici.
      // On retourne juste la réponse pour que le composant puisse afficher un message.
      return response; 
    } catch (err) {
      console.error('Erreur d\'inscription dans AuthContext:', err);
      const errorMessage = err.response?.data?.message || err.message || 'Échec de l\inscription.';
      setError(errorMessage);
      setLoading(false);
      // L'erreur est gérée par l'état 'error'
    }
  };

  const logout = () => {
    AuthService.logout();
    setUser(null);
    clearError();
  };

  // Fournir user, loading, error, clearError et les fonctions d'authentification
  const value = {
    user,
    setUser,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    loading,
    error, // Exposer l'état d'erreur
    clearError, // Exposer la fonction pour effacer l'erreur
  };

  return (
    <AuthContext.Provider value={value}>
      {children} 
    </AuthContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte d'authentification
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

