import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Notre histoire', path: '/histoire' },
    { label: 'Notre vision', path: '/vision' },
    { label: 'Nos projets', path: '/projets' },
    { label: 'Nos structures', path: '/structures' },
    { label: 'Contact', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
              <img 
                src="/parrabellum.jpg" 
                alt="Parabellum Groups Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xl font-bold">
              <span className={`transition-colors ${
                isScrolled || !isHomePage ? 'text-slate-800' : 'text-white'
              }`}>
                PARABELLUM
              </span>
              <br />
              <span className={`text-sm font-normal transition-colors ${
                isScrolled || !isHomePage ? 'text-slate-600' : 'text-blue-200'
              }`}>
                GROUPS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`font-medium transition-all duration-200 hover:scale-105 relative ${
                  location.pathname === item.path
                    ? (isScrolled || !isHomePage ? 'text-blue-600' : 'text-orange-300')
                    : (isScrolled || !isHomePage 
                        ? 'text-slate-700 hover:text-blue-600' 
                        : 'text-white hover:text-orange-300')
                }`}
              >
                {location.pathname === item.path && (
                  <span className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-current"></span>
                )}
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled || !isHomePage ? 'text-slate-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-md mx-2 transition-colors ${
                  location.pathname === item.path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;