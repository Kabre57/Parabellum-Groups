import React from 'react';
import { ArrowRight, Waves, Sunset } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'SANKOFA',
      subtitle: 'Drone agricole',
      description: 'Projet visant à la valorisation des cultures vivrières et à la création d\'emplois, la transformation locale et le respect de l\'environnement et des coutumes',
      icon: <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center"><span className="text-white font-bold">S</span></div>,
      gradient: 'from-green-500 to-emerald-600',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'NSUO AGYE',
      subtitle: 'Fishing village 🌀',
      description: 'Projet de création de village insulaires autonomes',
      icon: <Waves className="w-8 h-8 text-white" />,
      gradient: 'from-blue-500 to-cyan-600',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Paradis AZUR',
      subtitle: 'Le coucher du soleil',
      description: 'Construction d\'une cité de haut standing entre Mer et Lagune',
      icon: <Sunset className="w-8 h-8 text-white" />,
      gradient: 'from-orange-500 to-pink-600',
      image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <>
      {/* Hero Section with Background */}
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-800/85"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10 pt-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Nos
            <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent"> projets</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Des initiatives ambitieuses pour transformer les territoires africains
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.title}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div 
                    className="h-64 relative overflow-hidden"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}/80`}></div>
                    <div className="absolute top-6 left-6">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                        {project.icon}
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-white/80 text-sm">{project.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <button className="group/btn flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                      <span>En savoir plus</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;