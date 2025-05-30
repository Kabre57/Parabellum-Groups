import React, { useState, useEffect } from "react";
import { Head, Button, CheckBox, Form, Icon, Input } from "../../componenets";
import { Link, useNavigate } from "react-router-dom"; // Importer useNavigate
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useAuth } from "../../contexts/AuthContext"; // Importer useAuth

import { Menu } from "@headlessui/react";
import { usePopper } from 'react-popper';
import { useTheme } from "../../layout/context";

// LanguageDropdown reste inchangé
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
                    <button className="inline-flex items-center text-xs leading-none whitespace-nowrap transition-all duration-300 font-normal font-body text-primary-600 hover:text-primary-700 p-3">
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

const RegisterPage = () => {
  const [passwordState, setPasswordState] = useState(false);
  const [pageAside, setPageAside] = useState(false);
  const [nom, setNom] = useState(''); // État pour le nom
  const [prenom, setPrenom] = useState(''); // État pour le prénom
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Garder l'état local comme 'password'
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState(''); // État pour les erreurs locales ou du backend
  const [success, setSuccess] = useState(''); // État pour les messages de succès
  const [loading, setLoading] = useState(false); // État de chargement local
  const { register } = useAuth(); // Obtenir la fonction register du contexte
  const navigate = useNavigate(); // Hook pour la navigation

  useEffect(() => {
    const handleAside = () => {
        if (window.innerWidth > 1023) {
          setPageAside(false);
        }
    }
    handleAside();
    window.addEventListener('resize', handleAside);
    return () => {
     window.removeEventListener('resize', handleAside);
    };
  }, []);

  const handleRegister = async (event) => {
    event.preventDefault();
    setError(''); // Réinitialiser les erreurs
    setSuccess(''); // Réinitialiser les succès

    if (!agree) {
      setError("Vous devez accepter la politique de confidentialité et les termes.");
      return;
    }
    
    // Vérification de la longueur du mot de passe côté client
    if (password.length < 8) {
        setError("Le mot de passe doit contenir au moins 8 caractères.");
        return;
    }

    setLoading(true);
    try {
      // Appeler la fonction register du contexte avec les clés attendues par le backend
      const response = await register({ 
          nom: nom, 
          prenom: prenom, 
          email: email, 
          mot_de_passe: password // Envoyer la valeur de l'état 'password' avec la clé 'mot_de_passe'
      });
      // Afficher un message de succès et rediriger vers la page de connexion
      setSuccess("Inscription réussie ! Vous pouvez maintenant vous connecter.");
      // Optionnel: rediriger après un court délai
      setTimeout(() => {
          navigate('/auths/login'); // Rediriger vers la page de connexion
      }, 2000); // Délai de 2 secondes

    } catch (err) {
      // Afficher l'erreur renvoyée par le backend ou une erreur générique
      let errorMessage = err.response?.data?.message || err.message || "Échec de l'inscription.";
      if (err.response?.data?.details) {
          try {
              const details = err.response.data.details;
              // Formatage spécifique pour Zod
              const formattedDetails = Object.entries(details)
                  .map(([field, fieldErrors]) => {
                      if (fieldErrors && fieldErrors._errors && Array.isArray(fieldErrors._errors)) {
                          return `${field}: ${fieldErrors._errors.join(', ')}`;
                      }
                      return ''; // Retourner une chaîne vide si le format n'est pas attendu
                  })
                  .filter(detail => detail !== '') // Filtrer les chaînes vides
                  .join('\n');
              if (formattedDetails) {
                 errorMessage += `\nDétails:\n${formattedDetails}`;
              }
          } catch (formatError) {
              console.error("Erreur de formatage des détails Zod:", formatError);
          }
      }
      setError(errorMessage);
      console.error('Register error caught in component:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <> 
        <Head title="Registration" />
        <div className="relative flex min-h-screen">
            <div className="relative flex flex-col min-h-full bg-white dark:bg-gray-950 w-full lg:w-[45%] flex-shrink-0">
                <div className="absolute lg:hidden top-0 end-0 p-5 sm:p-11 z-10">
                    <Button  onClick={()=>{
                        setPageAside(!pageAside)
                    }} icon size="rg" variant="white-outline"><Icon className="text-xl" name="info" /></Button>
                </div>

                <div className="m-auto w-full max-w-[420px] p-5 2xl:me-[90px]">
                    <div className="relative flex flex-shrink-0 pb-11">
                        <Link to="/" className="relative inline-block transition-opacity duration-300 h-10">
                            <img className="h-full opacity-0 dark:opacity-100" src="/logo.png" srcSet="/logo2x.png 2x" alt="logo" />
                            <img className="h-full opacity-100 dark:opacity-0 absolute start-0 top-0" src="/logo-dark.png" srcSet="/logo-dark2x.png 2x" alt="logo" />
                        </Link>
                    </div>
                    <div className="pb-5">
                        <h5 className="text-xl font-heading font-bold -tracking-snug text-slate-700 dark:text-white leading-tighter mb-2">Register</h5>
                        <p className="text-sm leading-6 text-slate-400">Create New DashParabellumGroups Account</p>
                    </div>

                    {/* Afficher les messages d'erreur ou de succès */} 
                    {error && (
                        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded whitespace-pre-wrap">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                            {success}
                        </div>
                    )}
                    
                    {/* Utiliser handleRegister pour onSubmit */} 
                    <form onSubmit={handleRegister}>
                        {/* Champ Nom */}
                        <Form.Group>
                            <Form.Label className="flex justify-between items-center mb-2" htmlFor="nom">
                                <span>Nom </span>
                            </Form.Label>
                            <Input.Wrap>
                                <Input 
                                    id="nom" 
                                    placeholder="Entrez votre nom" 
                                    autoComplete="family-name" 
                                    size="lg" 
                                    value={nom}
                                    onChange={(e) => setNom(e.target.value)}
                                    required
                                    disabled={loading}
                                />
                            </Input.Wrap>
                        </Form.Group>
                        {/* Champ Prénom */}
                        <Form.Group>
                            <Form.Label className="flex justify-between items-center mb-2" htmlFor="prenom">
                                <span>Prénom </span>
                            </Form.Label>
                            <Input.Wrap>
                                <Input 
                                    id="prenom" 
                                    placeholder="Entrez votre prénom" 
                                    autoComplete="given-name" 
                                    size="lg" 
                                    value={prenom}
                                    onChange={(e) => setPrenom(e.target.value)}
                                    required
                                    disabled={loading}
                                />
                            </Input.Wrap>
                        </Form.Group>
                        {/* Champ Email */}
                        <Form.Group>
                            <Form.Label className="flex justify-between items-center mb-2" htmlFor="emailAddress">
                                <span>Email </span>
                            </Form.Label>
                            <Input.Wrap>
                                <Input 
                                    id="emailAddress" 
                                    type="email" 
                                    placeholder="Entrez votre adresse email" 
                                    autoComplete="email" 
                                    size="lg" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={loading}
                                />
                            </Input.Wrap>
                        </Form.Group>
                        {/* Champ Mot de passe */}
                        <Form.Group>
                            <Form.Label className="flex justify-between items-center mb-2" htmlFor="password">
                                <span>Mot de passe (8+ caractères)</span>
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
                                    placeholder="Entrez votre mot de passe" 
                                    autoComplete="new-password" 
                                    size="lg" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    disabled={loading}
                                />
                            </Input.Wrap>
                        </Form.Group>
                        {/* Checkbox Accord */}
                        <Form.Group className="flex">
                            <CheckBox 
                                id="checkAgree" 
                                checked={agree}
                                onChange={(e) => setAgree(e.target.checked)}
                                disabled={loading}
                            >
                            J'accepte la <Link className="text-primary-500 hover:text-primary-600 transition-all duration-300" to="/terms-policy">Politique de confidentialité</Link> &amp; les <Link className="text-primary-500 hover:text-primary-600 transition-all duration-300" to="/terms-policy">Termes</Link> de DashParabellumGroups.
                            </CheckBox>
                        </Form.Group>
                        {/* Bouton S'inscrire */}
                        <Form.Group>
                            <Button type="submit" size="lg" variant="primary" block disabled={loading || !agree}>
                                {loading ? 'Inscription en cours...' : 'S\'inscrire'}
                            </Button>
                        </Form.Group>
                    </form>
                    <div className="pt-6"> 
                        Déjà un compte ?
                        <Link className="text-primary-500 hover:text-primary-600 font-medium transition-all duration-300 " to="/auths/login"> Se connecter</Link>
                    </div>
                    <div className="text-center pt-6 pb-4">
                        <h6 className="text-slate-300 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight px-1.5 inline-block relative before:absolute before:h-px before:w-5 before:bg-slate-300 before:top-1/2 before:-translate-y-1/2 before:end-full after:absolute after:h-px after:w-5 after:bg-slate-300 after:top-1/2 after:-translate-y-1/2 after:start-full">Ou</h6>
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
                <div className="mx-auto w-full max-w-[420px] px-5 pt-7 pb-10 2xl:me-[90px]">
                    <ul className="flex flex-wrap items-center -m-3 relative">
                        <li>
                            <Link className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-normal font-body text-primary-600 hover:text-primary-700 p-3" to="/terms-policy">Termes &amp; Condition</Link>
                        </li>
                        <li>
                            <Link className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-normal font-body text-primary-600 hover:text-primary-700 p-3" to="/terms-policy">Politique de confidentialité</Link>
                        </li>
                        <li>
                            <Link className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-normal font-body text-primary-600 hover:text-primary-700 p-3" to="/faqs">Aide</Link>
                        </li>
                        <li>
                            <LanguageDropdown />
                        </li>
                    </ul>
                    <div className="mt-4.5">
                        <p>&copy; 2025 ParabellumGroups. Tous droits réservés.</p>
                    </div>
                </div>
            </div>
            {/* La partie droite (Aside) reste inchangée */} 
            <div id="pageAside" className={`peer min-w-[260px] max-w-[calc(100%-2.5rem)] flex flex-col w-full min-h-screen bg-gray-50 dark:bg-gray-900 flex-shrink flex-grow fixed lg:static top-0 end-0 z-[999] transition-transform duration-500 lg:transition-none translate-x-full rtl:-translate-x-full [&.active]:transform-none lg:transform-none lg:rtl:transform-none ${pageAside ? "active" : ''}`}>
                <div className="m-auto w-full max-w-[550px] p-4 sm:p-11">
                    <Swiper
                    dir="rtl"
                    modules={[Pagination]}
                    pagination={{clickable: true}}
                    slidesPerView={1}
                    className="[&>.swiper-pagination]:relative [&>.swiper-pagination]:flex [&>.swiper-pagination]:justify-center [&>.swiper-pagination]:gap-1 [&>.swiper-pagination]:pt-6 [&>.swiper-pagination_.swiper-pagination-bullet]:bg-gray-300 [&>.swiper-pagination_.swiper-pagination-bullet]:opacity-100 [&>.swiper-pagination_.swiper-pagination-bullet.swiper-pagination-bullet-active]:bg-slate-400"
                    >
                        <SwiperSlide>
                            <div className="text-center">
                                <img src="/images/slides/promo-a.png" srcSet="/images/slides/promo-a2x.png 2x" alt="" />
                                <div className="py-6 sm:p-11">
                                    <h4 className="text-xl lg:text-2xl font-heading font-bold -tracking-tight text-slate-700 dark:text-white leading-tighter mb-2">DashParabellumGroups</h4>
                                    <p>You can start to create your products easily with its user-friendly design &amp; most completed responsive layout.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-center">
                                <img src="/images/slides/promo-b.png" srcSet="/images/slides/promo-b2x.png 2x" alt="" />
                                <div className="py-6 sm:p-11">
                                    <h4 className="text-xl lg:text-2xl font-heading font-bold -tracking-tight text-slate-700 dark:text-white leading-tighter mb-2">DashParabellumGroups</h4>
                                    <p>You can start to create your products easily with its user-friendly design &amp; most completed responsive layout.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-center">
                                <img src="/images/slides/promo-c.png" srcSet="/images/slides/promo-c2x.png 2x" alt="" />
                                <div className="py-6 sm:p-11">
                                    <h4 className="text-xl lg:text-2xl font-heading font-bold -tracking-tight text-slate-700 dark:text-white leading-tighter mb-2">DashParabellumGroups</h4>
                                    <p>You can start to create your products easily with its user-friendly design &amp; most completed responsive layout.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div onClick={()=>{
                setPageAside(false)
            }} className="class-toggle fixed inset-0 bg-slate-950 bg-opacity-20 z-[900] opacity-0 invisible peer-[.active]:opacity-100 peer-[.active]:visible lg:!opacity-0 lg:!invisible"></div>
        </div>
    </>
  );
};
export default RegisterPage;

