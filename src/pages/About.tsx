import React from 'react';
import { Calendar, Target, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      {/* Hero Section with Background */}
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-800/80"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10 pt-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Notre
            <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent"> histoire</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Une ambition née en 2019 pour transformer l'Afrique de l'Ouest
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300 group">
                <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold text-slate-800 mb-3">Depuis 2019</h3>
                <p className="text-slate-600">Fondation et développement continu</p>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-xl transition-all duration-300 group">
                <Target className="w-16 h-16 text-orange-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold text-slate-800 mb-3">Blue Economy</h3>
                <p className="text-slate-600">Modèle inspiré de la nature</p>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all duration-300 group">
                <Users className="w-16 h-16 text-purple-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold text-slate-800 mb-3">Équipe plurielle</h3>
                <p className="text-slate-600">Expertise et émergence</p>
              </div>
            </div>

            <div className="prose prose-xl max-w-none text-slate-700 leading-relaxed space-y-8">
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-blue-100">
                <p className="text-lg font-medium text-slate-800 mb-4">
                  Parabellum Groups est né d'une ambition simple mais puissante : transformer les ressources 
                  et les savoirs locaux en leviers durables de souveraineté et de prospérité pour l'Afrique de l'Ouest.
                </p>
              </div>
              
              <p>
                Fondé par un entrepreneur ivoirien à la croisée des mondes de l'innovation, de la finance, 
                de l'industrie et de l'agriculture, le groupe s'est construit à partir de 2019 autour d'un 
                projet territorial inspiré de la Blue Economy et du mimétisme de la nature, alliant efficacité 
                technologique, impact social et ancrage local.
              </p>
              
              <p>
                Ce projet, d'abord opérationnel via le négoce de matières premières, a progressivement donné 
                naissance à un écosystème structuré en filiales spécialisées, avec une même ambition partagée : 
                créer des infrastructures productives, durables et souveraines, pensées par et pour les réalités africaines.
              </p>
              
              <p>
                Chaque entité s'appuie sur une équipe pluridisciplinaire réunissant des compétences confirmées 
                et des profils émergents, dans une dynamique de collaboration et de montée en expertise continue.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link 
                to="/vision"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span>Découvrir notre vision</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;