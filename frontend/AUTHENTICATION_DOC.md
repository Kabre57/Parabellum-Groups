# Documentation de l'implémentation de l'authentification

Ce document décrit l'implémentation du système d'authentification complet dans le projet frontend React, en utilisant les composants existants dans le dossier `/src/pages/auths/`.

## 1. Structure des fichiers

Les principaux fichiers et dossiers liés à l'authentification sont organisés comme suit :

-   **/src/contexts/AuthContext.jsx**: Contient le `AuthProvider` et le hook `useAuth`. Il gère l'état global de l'authentification (utilisateur connecté, état de chargement, erreurs) et expose les fonctions `login`, `register`, `logout`, `forgotPassword`, `resetPassword`.
-   **/src/services/auth.service.js**: Centralise les appels à l'API backend pour les opérations d'authentification (login, register, forgot password, reset password, get current user). Il interagit avec l'instance Axios configurée dans `/src/services/api.js` qui gère automatiquement l'ajout du token JWT aux requêtes et la gestion des erreurs globales (comme 401 Unauthorized).
-   **/src/route/ProtectedRoute.jsx**: Composant d'ordre supérieur (HOC) qui protège les routes nécessitant une authentification. Il vérifie l'état d'authentification via `useAuth` et redirige vers la page de connexion (`/auths/login`) si l'utilisateur n'est pas authentifié ou si l'état est en cours de chargement.
-   **/src/pages/auths/**: Ce dossier contient les pages spécifiques à l'authentification, qui ont été adaptées pour utiliser le nouveau système :
    -   `Login.jsx`: Page et formulaire de connexion, utilise `useAuth` pour la logique.
    -   `Forgot.jsx`: Page pour demander la réinitialisation du mot de passe, utilise `AuthService.forgotPassword`.
    -   `ResetPasswordPage.jsx`: **Nouvelle page ajoutée** dans ce dossier pour définir un nouveau mot de passe après avoir cliqué sur le lien de réinitialisation, utilise `AuthService.resetPassword`.
    -   `Register.jsx`: Page d'inscription existante. **Note :** Ce fichier n'a pas été modifié dans cette passe. Si la fonctionnalité d'inscription est requise, il faudra l'adapter pour utiliser `useAuth` et `AuthService.register`.
    -   `Success.jsx`: Page de succès existante. **Note :** Ce fichier n'a pas été modifié et n'est actuellement pas utilisé dans le flux de réinitialisation de mot de passe.
-   **/src/route/index.jsx**: Fichier principal du routeur de l'application. Il a été mis à jour pour :
    -   Intégrer `AuthProvider` autour de toute l'application.
    -   Définir les routes publiques pour les pages d'authentification dans `/auths/` (`/auths/login`, `/auths/register`, `/auths/forgot`, `/auths/reset-password/:token`).
    -   Utiliser le composant `ProtectedRoute` pour envelopper les routes nécessitant une authentification.

## 2. Flux d'authentification

1.  **Initialisation**: Au chargement de l'application, `AuthProvider` vérifie la présence d'un token JWT dans le `localStorage`. Si un token existe, il tente de récupérer les informations de l'utilisateur via `AuthService.getCurrentUser()` pour valider le token. L'état `loading` du contexte est `true` pendant cette phase.
2.  **Connexion**: L'utilisateur soumet ses identifiants sur la page `/auths/Login.jsx`. La fonction `login` du `AuthContext` est appelée, qui utilise `AuthService.login` pour contacter l'API. En cas de succès, le token et les informations utilisateur sont stockés (token dans `localStorage` par `AuthService`, utilisateur dans l'état du contexte), et l'utilisateur est redirigé vers la page demandée ou l'accueil.
3.  **Accès aux routes protégées**: Lorsqu'un utilisateur tente d'accéder à une route protégée, `ProtectedRoute` vérifie l'état `isAuthenticated` du `AuthContext`. Si `true`, l'accès est autorisé. Si `false`, l'utilisateur est redirigé vers `/auths/login`.
4.  **Déconnexion**: L'appel à la fonction `logout` du `AuthContext` supprime le token du `localStorage` (via `AuthService.logout`) et met l'état `user` à `null`. Les composants protégés redirigeront automatiquement vers la page de connexion.
5.  **Mot de passe oublié**: Sur `/auths/Forgot.jsx`, l'utilisateur entre son email. `AuthService.forgotPassword` est appelé pour demander un lien de réinitialisation à l'API.
6.  **Réinitialisation de mot de passe**: L'utilisateur clique sur le lien reçu (contenant un token unique) qui mène à `/auths/ResetPasswordPage.jsx` (route `/auths/reset-password/:token`). Il entre et confirme son nouveau mot de passe. `AuthService.resetPassword` est appelé avec le token et le nouveau mot de passe pour mettre à jour le mot de passe via l'API. Après succès, il est redirigé vers `/auths/login`.

## 3. Utilisation

-   **Protection d'une route**: Enveloppez le composant de la route avec `<ProtectedRoute>` dans `/src/route/index.jsx`.
    ```jsx
    <Route 
      path="/dashboard" 
      element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      }
    />
    ```
-   **Accès aux informations utilisateur**: Utilisez le hook `useAuth` dans n'importe quel composant enfant de `AuthProvider`.
    ```jsx
    import { useAuth } from '../contexts/AuthContext'; // Adapter le chemin si nécessaire

    const UserProfile = () => {
      const { user, logout } = useAuth();

      if (!user) return null;

      return (
        <div>
          <p>Bonjour, {user.name}</p> 
          <button onClick={logout}>Déconnexion</button>
        </div>
      );
    }
    ```

## 4. Dépendances

-   `react-router-dom` pour le routage.
-   `axios` pour les appels API (configuré dans `api.js`).

## 5. Points à vérifier / Améliorations possibles

-   **Styling**: Les pages d'authentification adaptées (`/auths/Login.jsx`, `/auths/Forgot.jsx`) et la nouvelle page (`/auths/ResetPasswordPage.jsx`) utilisent les composants du template, mais des ajustements de style mineurs pourraient être nécessaires pour une intégration parfaite.
-   **Gestion des erreurs**: La gestion des erreurs a été intégrée via `AuthContext` et `AuthService`. Les messages d'erreur du backend sont affichés. Des améliorations pourraient inclure des notifications plus visuelles (toasts) en utilisant les composants du template.
-   **Page d'inscription**: La page `/auths/Register.jsx` existe mais n'a pas été adaptée pour utiliser le nouveau système (`useAuth`, `AuthService.register`). Si cette fonctionnalité est requise, une adaptation similaire à celle de `Login.jsx` sera nécessaire.
-   **Validation**: La validation des formulaires est basique. L'utilisation de `react-hook-form` (si déjà présent ou ajouté) pourrait améliorer la validation côté client.
-   **Tests**: Ajouter des tests unitaires et d'intégration pour couvrir les différents scénarios d'authentification avec la structure actuelle.

