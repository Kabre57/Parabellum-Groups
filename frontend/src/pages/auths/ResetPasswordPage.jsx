import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
// Importer AuthService
import AuthService from '../../services/auth.service.js'; 
// Importer les composants UI du template
import { Head, Button, Form, Icon, Input } from "../../componenets";

const ResetPasswordPage = () => {
  const { token } = useParams(); // Récupère le token depuis l'URL (ex: /auths/reset-password/:token)
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      setError('Token de réinitialisation manquant ou invalide. Veuillez refaire une demande.');
      // Optionnel: rediriger si pas de token après un délai
      // setTimeout(() => navigate('/auths/login'), 5000); // Adapter le chemin
    }
  }, [token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!token) {
      setError('Token de réinitialisation manquant. Impossible de continuer.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    // Ajouter une validation de complexité si nécessaire
    if (newPassword.length < 6) { 
      setError('Le nouveau mot de passe doit contenir au moins 6 caractères.');
      return;
    }

    setLoading(true);
    try {
      // Utiliser AuthService pour réinitialiser le mot de passe
      await AuthService.resetPassword(token, newPassword);
      setMessage('Votre mot de passe a été réinitialisé avec succès ! Vous allez être redirigé vers la page de connexion.');
      // Rediriger vers la page de connexion après un court délai
      setTimeout(() => {
        navigate('/auths/login'); // Adapter le chemin si nécessaire
      }, 3000);
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Échec de la réinitialisation. Le lien est peut-être expiré ou invalide.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head title="Reset Password" />
      {/* Utiliser une structure similaire aux autres pages auths si possible */}
      <div className="relative flex min-h-screen">
        <div className="relative flex flex-col min-h-full bg-white dark:bg-gray-950 w-full flex-shrink-0">
          <div className="m-auto w-full max-w-[420px] xs:max-w-[520px] p-5">
            <div className="relative flex justify-center flex-shrink-0 pb-6">
              <Link to="/" className="relative inline-block transition-opacity duration-300 h-10">
                  <img className="h-full opacity-0 dark:opacity-100" src="/logo.png" srcSet="/logo2x.png 2x" alt="logo" />
                  <img className="h-full opacity-100 dark:opacity-0 absolute start-0 top-0" src="/logo-dark.png" srcSet="/logo-dark2x.png 2x" alt="logo" />
              </Link>
            </div>
            <div className="border border-gray-300 dark:border-gray-900 rounded p-5 sm:p-6 md:p-10">
              <div className="pb-5">
                  <h5 className="text-xl font-heading font-bold -tracking-snug text-slate-700 dark:text-white leading-tighter mb-2">Réinitialiser le mot de passe</h5>
              </div>

              {/* Affichage des messages et erreurs */} 
              {message && (
                  <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                      {message}
                  </div>
              )}
              {error && (
                  <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                      {error}
                  </div>
              )}

              {/* Afficher le formulaire seulement si un token est présent et qu'il n'y a pas de message de succès */} 
              {token && !message && (
                <form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label htmlFor="newPassword">Nouveau mot de passe:</Form.Label>
                    <Input.Wrap>
                      <Input
                        type="password"
                        id="newPassword"
                        placeholder="Entrez votre nouveau mot de passe"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        size="lg"
                        disabled={loading}
                      />
                    </Input.Wrap>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="confirmPassword">Confirmer le nouveau mot de passe:</Form.Label>
                    <Input.Wrap>
                      <Input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirmez votre nouveau mot de passe"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        size="lg"
                        disabled={loading}
                      />
                    </Input.Wrap>
                  </Form.Group>
                  <Form.Group>
                    <Button 
                      type="submit" 
                      size="lg" 
                      variant="primary" 
                      block 
                      disabled={loading || !token}
                    >
                      {loading ? 'Réinitialisation...' : 'Réinitialiser le mot de passe'}
                    </Button>
                  </Form.Group>
                </form>
              )}

              {/* Toujours afficher le lien de retour, sauf si succès et redirection imminente */} 
              {!message && (
                 <div className="pt-6">
                   {/* Adapter le chemin si nécessaire */} 
                   <Link className="text-primary-500 hover:text-primary-600 font-medium transition-all duration-300" to="/auths/login">Retour à la connexion</Link>
                 </div>
              )}
            </div>
          </div>
          {/* Footer similaire aux autres pages auths */} 
          <div className="mx-auto w-full max-w-[420px] px-5 pt-7 pb-10">
              <p className="text-slate-400 text-center text-sm/4">&copy; 2025 Parabellum Groups. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;

