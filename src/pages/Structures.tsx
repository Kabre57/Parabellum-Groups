import React from 'react';
import { Cpu, Wheat, Home, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Structures = () => {
  const structures = [
    {
      name: 'Progiteck',
      description: 'Solutions IoT, intelligence artificielle appliquée, plateformes de gestion agricole/industrielle, cybersécurité locale. Les solutions développées sont le fruit d\'un travail collaboratif entre ingénierie expérimentée et nouvelles générations tech.',
      tagline: 'Technologie intégrée & souveraineté numérique',
      icon: <Cpu className="w-8 h-8" />,
      gradient: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Parabellum Agri',
      description: 'Production agricole et agro-industrie intégrée à haute valeur humaine et territoriale. Focus sur l\'innovation agricole et la transformation locale des produits.',
      tagline: 'Production agricole et Agro-industrie intégrée à haute valeur humaine et territoriale',
      icon: <Wheat className="w-8 h-8" />,
      gradient: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'SOAN',
      description: 'Matériaux locaux recyclés, design bioclimatique, chantiers solidaires, urbanisme circulaire. Chaque projet associe expérience de chantier et sensibilité nouvelle aux enjeux écologiques.',
      tagline: 'Construction verte & habitat communautaire résilient, aménagement foncier et agence immobilière',
      icon: <Home className="w-8 h-8" />,
      gradient: 'from-orange-500 to-amber-600',
      bgColor: 'bg-orange-50',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Biomed Tech',
      description: 'Recherche locale, diagnostics low-cost, équipement hospitalier souverain, prévention collective. La dynamique repose sur une expertise biomédicale confirmée, soutenue par de jeunes chercheurs engagés.',
      tagline: 'Santé communautaire & technologie biomédicale africaine',
      icon: <Activity className="w-8 h-8" />,
      gradient: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <>
      {/* Hero Section with Background */}
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-800/85"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10 pt-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Nos
            <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent"> structures</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Leur ADN d'innovation prête à vous accompagner dans chacun de vos projets
          </p>
        </div>
      </section>

      {/* Structures Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {structures.map((structure, index) => (
                <div 
                  key={structure.name}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                >
                  {/* Image Header */}
                  <div 
                    className="h-48 relative overflow-hidden"
                    style={{
                      backgroundImage: `url(${structure.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${structure.gradient}/70`}></div>
                    <div className="absolute top-6 left-6">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                        {structure.icon}
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-1">{structure.name}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                      structure.gradient === 'from-blue-500 to-indigo-600' ? 'text-blue-700' :
                      structure.gradient === 'from-green-500 to-emerald-600' ? 'text-green-700' :
                      structure.gradient === 'from-orange-500 to-amber-600' ? 'text-orange-700' : 'text-purple-700'
                    }`}>
                      {structure.tagline}
                    </p>
                    
                    <p className="text-slate-700 leading-relaxed mb-6">
                      {structure.description}
                    </p>

                    <button className="group/btn flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                    <Link 
                      to={`/structures/${
                        structure.name === 'Progiteck' ? 'progiteck' :
                        structure.name === 'Parabellum Agri' ? 'parabellum-agri' :
                        structure.name === 'SOAN' ? 'soan' : 'biomed-tech'
                      }`}
                      className="group/btn flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      <span>En savoir plus</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    </button>
                  </div>
                </div>
              ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Structures;