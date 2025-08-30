import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Globe, Heart, ArrowRight } from 'lucide-react';

const Vision = () => {
  return (
    <>
      {/* Hero Section with Background */}
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-800/85"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10 pt-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Notre
            <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent"> vision</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Un modèle intégré pour l'avenir de l'Afrique
          </p>
        </div>
      </section>

      {/* Vision Content */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-12 mb-16 border border-blue-100 shadow-xl">
              <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Notre mission</h2>
              <p className="text-xl text-slate-700 leading-relaxed mb-8 text-center">
                Créer un modèle intégré, circulaire et inclusif, capable de faire émerger des territoires 
                autosuffisants, dynamiques, économiquement forts, respectueux de l'environnement et 
                porteurs de sens pour leurs habitants.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed text-center">
                Parabellum Groups porte une vision où la technologie, l'intelligence collective et 
                l'investissement structurant s'unissent pour répondre aux grands défis de notre temps : 
                sécurité alimentaire, énergie, emploi, souveraineté économique et dignité humaine.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Innovation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Solutions technologiques adaptées aux réalités africaines, développées localement 
                  pour répondre aux besoins spécifiques de nos territoires.
                </p>
              </div>
              
              <div className="text-center group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Durabilité</h3>
                <p className="text-slate-600 leading-relaxed">
                  Respect de l'environnement et économie circulaire au cœur de tous nos projets, 
                  pour un développement responsable et pérenne.
                </p>
              </div>
              
              <div className="text-center group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Impact</h3>
                <p className="text-slate-600 leading-relaxed">
                  Développement communautaire et création d'emplois locaux pour un impact 
                  social positif et durable sur nos territoires.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link 
                to="/projets"
                className="inline-flex items-center bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span>Voir nos projets</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;