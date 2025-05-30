import React, { useState, useEffect } from "react";
// Import useAuth hook
import { useAuth } from "../../contexts/AuthContext"; // Adapter le chemin si nécessaire
import { Head, Button, Form, Icon, Input } from "../../componenets";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { Menu } from "@headlessui/react";
import { usePopper } from 'react-popper';
import { useTheme } from "../../layout/context";

// Le composant LanguageDropdown reste inchangé
const LanguageDropdown = ({className}) => {
    const theme = useTheme();
    let [dropdownToggle, setDropdownToggle] = useState()
    let [dropdownContent, setDropdownContent] = useState()
    let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
        placement : theme.direction === "rtl" ? "bottom-start" : "bottom-end",
        modifiers: [
            {name: 'offset', options: { offset: [0, 0]}},
            {name: 'preventOverflow', options: { padding: 8 }},
        ],
    })
  return (
    <Menu as="div" className={`inline-flex relative ${className ? className : ''}`}>
        {({ open }) => (
            <>
                <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                    <button className="inline-flex items-center text-xs leading-none whitespace-nowrap transition-all duration-300 font-normal font-body text-primary-600 hover:text-primary-700 py-2 px-3">
                        <span>Français</span> 
                        <Icon className="text-sm ms-1" name="chevron-up" />
                    </button>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[140px]">
                    <ul>
                        <li className="first:rounded-t-md last:rounded-b-md first:border-t-0 border-t border-gray-200 dark:border-gray-800">
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <img src="/images/flags/english.png" alt="" className="w-6 me-3" />
                                <span>English</span>
                            </Menu.Item>
                        </li>
                        <li className="first:rounded-t-md last:rounded-b-md first:border-t-0 border-t border-gray-200 dark:border-gray-800">
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <img src="/images/flags/french.png" alt="" className="w-6 me-3" />
                                <span>Français</span>
                            </Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}

const LoginPage = () => {
  const [passwordState, setPasswordState] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Utiliser le contexte d'authentification
  // Récupérer login, loading, error et clearError du contexte
  const { login, loading: authLoading, error: authError, clearError } = useAuth(); 
  const navigate = useNavigate();
  const location = useLocation();

  // Déterminer la redirection après connexion
  const from = location.state?.from?.pathname || '/'; // Redirige vers la page précédente ou l'accueil

  // Effacer les erreurs précédentes lorsque l'email/mot de passe change ou au montage
  useEffect(() => {
    clearError(); // Effacer les erreurs du contexte au montage/changement
  }, [email, password, clearError]); // Ajouter clearError aux dépendances

  const handleLogin = async (event) => {
    event.preventDefault();
    clearError(); // Réinitialiser l'erreur du contexte avant une nouvelle tentative
    console.log("--- handleLogin triggered ---"); // Log début fonction
    console.log("Current email state:", email); // Log état email
    console.log("Current password state:", password); // Log état password
    const credentials = {
        email: email,
        mot_de_passe: password // Utiliser la clé correcte attendue par le backend
    };
    console.log("Credentials object created:", credentials); // Log objet credentials
    try {
      // Utiliser la fonction login du contexte
      const loggedInUser = await login(credentials);
      
      // Si login réussit (ne lance pas d'erreur et retourne un utilisateur)
      if (loggedInUser) {
          navigate(from, { replace: true }); 
      } 
      // Si login échoue, l'erreur sera dans authError du contexte
      // Pas besoin de gérer l'erreur ici car elle est gérée globalement

    } catch (err) {
      // Normalement, le catch ici ne devrait pas être atteint si AuthContext gère l'erreur
      // Mais on le garde par sécurité
      console.error('Login error caught directly in component (should be handled by context):', err);
    } 
  };

  return (
    <>
        <Head title="Login" />
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
                        <h5 className="text-xl font-heading font-bold -tracking-snug text-slate-700 dark:text-white leading-tighter mb-2">Sign-In</h5>
                        <p className="text-sm leading-6 text-slate-400">veuillez entrer votre email et votre mot de passe.</p>
                    </div>

                    {/* Afficher l'erreur du contexte */} 
                    {authError && (
                        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                            {authError}
                        </div>
                    )}
                    
                    <form onSubmit={handleLogin}>
                        <Form.Group>
                            <Form.Label className="flex justify-between items-center mb-2" htmlFor="emailAddress">
                                <span>Email or Username </span>
                            </Form.Label>
                            <Input.Wrap>
                                <Input 
                                    id="emailAddress" 
                                    type="email" 
                                    placeholder="Enter your email address" 
                                    autoComplete="email" 
                                    size="lg" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={authLoading} // Désactiver pendant le chargement
                                />
                            </Input.Wrap>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="flex justify-between items-center mb-2" htmlFor="password">
                                <span>Passcode </span>
                                {/* Lien vers la page de mot de passe oublié dans auths */} 
                                <Link to="/auths/forgot" className="inline-flex text-xs leading-none whitespace-nowrap transition-all duration-300 font-medium font-body text-primary-500 hover:text-primary-600">Forgot Code?</Link>
                            </Form.Label>
                            <Input.Wrap>
                                <a tabIndex="-1" href="#password" onClick={(ev) => {
                                    ev.preventDefault();
                                    setPasswordState(!passwordState);
                                    }} className={`absolute h-11 w-11 top-0 end-0 flex items-center justify-center js-password-toggle group/password ${passwordState ? "" : "is-shown"}`}>
                                    <em className="group-[.is-shown]/password:hidden text-slate-400 text-base leading-none ni ni-eye"></em>
                                    <em className="hidden group-[.is-shown]/password:block text-slate-400 text-base leading-none ni ni-eye-off"></em>
                                </a>
                                <Input 
                                    id="password" 
                                    type={passwordState ? "text" : "password"} 
                                    placeholder="Enter your passcode" 
                                    autoComplete="current-password" 
                                    size="lg" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    disabled={authLoading} // Désactiver pendant le chargement
                                />
                            </Input.Wrap>
                        </Form.Group>
                        <Form.Group>
                            {/* Utiliser authLoading pour l'état désactivé */} 
                            <Button type="submit" size="lg" variant="primary" block disabled={authLoading}>
                                {authLoading ? 'Signing In...' : 'Sign In'}
                            </Button>
                        </Form.Group>
                    </form>
                    <div className="pt-6"> 
                        New on our platform? 
                        {/* Lien vers la page d'inscription dans auths */} 
                        <Link className="text-primary-500 hover:text-primary-600 transition-all duration-300" to="/auths/register"> Create an account</Link>
                    </div>
                    <div className="text-center pt-6 pb-4">
                        <h6 className="text-slate-300 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight px-1.5 inline-block relative before:absolute before:h-px before:w-5 before:bg-slate-300 before:top-1/2 before:-translate-y-1/2 before:end-full after:absolute after:h-px after:w-5 after:bg-slate-300 after:top-1/2 after:-translate-y-1/2 after:start-full">Or</h6>
                    </div>
                    <ul className="flex flex-wrap justify-center gap-x-6">
                        <li>
                            <a className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-normal font-body text-primary-600 hover:text-primary-700 px-4 py-3" href="#link" onClick={(e)=> e.preventDefault()}>Facebook</a>
                        </li>
                        <li>
                            <a className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-normal font-body text-primary-600 hover:text-primary-700 px-4 py-3" href="#link" onClick={(e)=> e.preventDefault()}>Google</a>
                        </li>
                    </ul>
                    </div>
                </div>
                {/* Le pied de page reste inchangé */} 
                <div className="border-t border-gray-200 dark:border-gray-800 py-6 px-5.5">
                    <div className="container max-w-7xl">
                        <div className="flex flex-wrap -m-2">
                            <div className="w-full lg:w-1/2 p-2 lg:order-last">
                            <ul className="flex flex-wrap justify-center lg:justify-end -m-3 relative">
                                <li>
                                    <Link className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-normal font-body text-primary-600 hover:text-primary-700 p-3" to="/terms-policy">Terms &amp; Condition</Link>
                                </li>
                                <li>
                                    <Link className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-normal font-body text-primary-600 hover:text-primary-700 p-3" to="/terms-policy">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-normal font-body text-primary-600 hover:text-primary-700 p-3" to="/faqs">Help</Link>
                                </li>
                                <li>
                                    <LanguageDropdown />
                                </li>
                            </ul>
                            </div>
                            <div className="w-full lg:w-1/2 p-2">
                                <p className="text-slate-400 text-center lg:text-start text-sm/4">&copy; 2025 ParabellumGroups. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};
export default LoginPage;

