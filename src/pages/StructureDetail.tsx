import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Wheat, Home, Activity, CheckCircle, Users, Target, ArrowRight } from 'lucide-react';

const StructureDetail = () => {
  const { id } = useParams();

  const structures = {
    'progiteck': {
      name: 'Progiteck',
      tagline: 'Technologie intégrée & souveraineté numérique',
      description: 'Solutions IoT, intelligence artificielle appliquée, plateformes de gestion agricole/industrielle, cybersécurité locale. Les solutions développées sont le fruit d\'un travail collaboratif entre ingénierie expérimentée et nouvelles générations tech.',
      icon: <Cpu className="w-8 h-8" />,
      gradient: 'from-blue-500 to-indigo-600',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      history: 'Progiteck a été créée en 2020 pour répondre aux besoins croissants de digitalisation des entreprises africaines. Notre équipe combine l\'expertise technique internationale avec une compréhension profonde des défis locaux.',
      mission: 'Développer des solutions technologiques souveraines et adaptées aux réalités africaines, en formant les talents locaux et en créant un écosystème tech durable.',
      services: [
        'Solutions IoT pour l\'agriculture et l\'industrie',
        'Intelligence artificielle appliquée',
        'Plateformes de gestion intégrées',
        'Cybersécurité locale',
        'Formation et accompagnement tech',
        'Développement d\'applications mobiles'
      ]
    },
    'parabellum-agri': {
      name: 'Parabellum Agri',
      tagline: 'Production agricole et Agro-industrie intégrée à haute valeur humaine et territoriale',
      description: 'Production agricole et agro-industrie intégrée à haute valeur humaine et territoriale. Focus sur l\'innovation agricole et la transformation locale des produits.',
      icon: <Wheat className="w-8 h-8" />,
      gradient: 'from-green-500 to-emerald-600',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      history: 'Parabellum Agri est née de la volonté de révolutionner l\'agriculture ouest-africaine en combinant techniques traditionnelles et innovations modernes. Depuis 2019, nous développons des solutions agricoles durables.',
      mission: 'Transformer l\'agriculture africaine en créant des chaînes de valeur locales, en valorisant les savoirs traditionnels et en intégrant les technologies modernes pour une agriculture productive et respectueuse de l\'environnement.',
      services: [
        'Production agricole biologique',
        'Transformation agroalimentaire',
        'Conseil en agriculture durable',
        'Formation des agriculteurs',
        'Commercialisation de produits locaux',
        'Recherche et développement agricole'
      ]
    },
    'soan': {
      name: 'SOAN',
      tagline: 'Construction verte & habitat communautaire résilient, aménagement foncier et agence immobilière',
      description: 'Matériaux locaux recyclés, design bioclimatique, chantiers solidaires, urbanisme circulaire. Chaque projet associe expérience de chantier et sensibilité nouvelle aux enjeux écologiques.',
      icon: <Home className="w-8 h-8" />,
      gradient: 'from-orange-500 to-amber-600',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      history: 'SOAN a été fondée avec la vision de révolutionner le secteur de la construction en Afrique de l\'Ouest. Nous privilégions les matériaux locaux et les techniques de construction respectueuses de l\'environnement.',
      mission: 'Créer des habitats durables et accessibles en utilisant des matériaux locaux, en formant les artisans locaux et en développant un urbanisme circulaire adapté aux réalités africaines.',
      services: [
        'Construction écologique',
        'Aménagement foncier',
        'Agence immobilière',
        'Design bioclimatique',
        'Formation en éco-construction',
        'Urbanisme participatif'
      ]
    },
    'biomed-tech': {
      name: 'Biomed Tech',
      tagline: 'Santé communautaire & technologie biomédicale africaine',
      description: 'Recherche locale, diagnostics low-cost, équipement hospitalier souverain, prévention collective. La dynamique repose sur une expertise biomédicale confirmée, soutenue par de jeunes chercheurs engagés.',
      icon: <Activity className="w-8 h-8" />,
      gradient: 'from-purple-500 to-violet-600',
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      history: 'Biomed Tech est née de la nécessité de développer des solutions de santé adaptées aux réalités africaines. Notre équipe de chercheurs et médecins travaille sur des innovations accessibles et efficaces.',
      mission: 'Démocratiser l\'accès aux soins de qualité en développant des technologies biomédicales abordables, en formant les professionnels de santé locaux et en renforçant les systèmes de santé communautaires.',
      services: [
        'Recherche biomédicale appliquée',
        'Développement d\'équipements médicaux',
        'Diagnostics low-cost',
        'Formation du personnel médical',
        'Télémédecine',
        'Prévention communautaire'
      ]
    }
  };

  const structure = structures[id as keyof typeof structures];

  if (!structure) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Structure non trouvée</h1>
          <Link to="/structures" className="text-blue-600 hover:text-blue-700">
            Retour aux structures
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${structure.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${structure.gradient}/85`}></div>
        
        <div className="container mx-auto px-6 text-center relative z-10 pt-20">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8">
            {structure.icon}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {structure.name}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            {structure.tagline}
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            {structure.description}
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <div className="mb-12">
              <Link 
                to="/structures"
                className="inline-flex items-center text-slate-600 hover:text-slate-800 transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Retour aux structures
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Histoire */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
                    <Users className="w-8 h-8 mr-3 text-blue-600" />
                    Notre histoire
                  </h2>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                    <p className="text-slate-700 leading-relaxed text-lg">
                      {structure.history}
                    </p>
                  </div>
                </div>

                {/* Mission */}
                <div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
                    <Target className="w-8 h-8 mr-3 text-orange-600" />
                    Notre mission
                  </h2>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200">
                    <p className="text-slate-700 leading-relaxed text-lg">
                      {structure.mission}
                    </p>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
                  <CheckCircle className="w-8 h-8 mr-3 text-green-600" />
                  Nos services
                </h2>
                <div className="space-y-4">
                  {structure.services.map((service, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-4 p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${structure.gradient} mt-2 group-hover:scale-125 transition-transform`}></div>
                      <p className="text-slate-700 leading-relaxed flex-1">{service}</p>
                    </div>
                  ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-12 p-8 bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-4">Intéressé par nos services ?</h3>
                  <p className="text-blue-200 mb-6 leading-relaxed">
                    Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous accompagner.
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Nous contacter</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StructureDetail;