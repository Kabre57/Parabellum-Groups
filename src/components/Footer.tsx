import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
  ];

  const legalLinks = [
    'Mentions légales',
    'Politique en matière de cookies',
    'Politique de confidentialité',
    'Conditions d\'utilisation',
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">PARABELLUM</div>
                  <div className="text-sm text-blue-200">GROUPS</div>
                </div>
              </div>
              <p className="text-blue-200 leading-relaxed mb-6">
                Transformer les ressources et les savoirs locaux en leviers durables de souveraineté 
                et de prospérité pour l'Afrique de l'Ouest.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-md"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Navigation</h3>
              <ul className="space-y-3">
                {['Accueil', 'Notre histoire', 'Notre vision', 'Nos projets', 'Nos structures', 'Contact'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase().replace(/\s/g, '-').replace('notre-', '').replace('nos-', '')}`}
                      className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <div className="space-y-4 text-blue-200">
                <p>
                  <strong className="text-white">Adresse:</strong><br />
                  Résidence Simon Pierre<br />
                  Palmeraie
                </p>
                <p>
                  <strong className="text-white">Téléphone:</strong><br />
                  +225 05 86 63 83 25
                </p>
                <p>
                  <strong className="text-white">Email:</strong><br />
                  communication@parabellumgroups.com
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <p className="text-blue-200 text-sm">
                © 2025 Parabellum Groups. Tous droits réservés.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-end gap-4 text-sm">
                {legalLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;