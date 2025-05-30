import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Adapter le chemin si nécessaire

// Ce composant protège les routes qui nécessitent une authentification.
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  // Si l'état d'authentification est encore en cours de chargement,
  // afficher un indicateur de chargement ou un composant squelette.
  if (loading) {
    // TODO: Remplacer par un composant de chargement plus élégant si disponible dans le template
    return <div>Chargement de la session...</div>;
  }

  // Si l'utilisateur n'est pas authentifié, le rediriger vers la page de connexion.
  // L'état `location` est passé pour pouvoir rediriger l'utilisateur vers la page
  // qu'il essayait d'accéder après une connexion réussie.
  if (!isAuthenticated) {
    // Adapter le chemin '/auths/login' si la page de connexion a une URL différente dans le projet cible
    return <Navigate to="/auths/login" state={{ from: location }} replace />;
  }

  // Si l'utilisateur est authentifié, afficher le composant enfant (la page protégée).
  return children;
};

export default ProtectedRoute;

