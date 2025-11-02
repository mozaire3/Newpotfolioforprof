import { Bug, ShieldCheck, Thermometer, HeartPulse, Microscope, TrendingUp, Sparkles } from 'lucide-react';

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      icon: Bug,
      title: "Entomologie Médicale",
      description: "Écologie vectorielle et surveillance des vecteurs de maladies. Expertise en évaluation des profils entomologiques.",
      gradient: "from-blue-500 to-cyan-500",
      hoverColor: "hover:border-blue-300 hover:shadow-blue-500/10"
    },
    {
      icon: ShieldCheck,
      title: "Lutte Antivectorielle",
      description: "Évaluation des insecticides, moustiquaires et gestion de la résistance aux insecticides.",
      gradient: "from-violet-500 to-purple-500",
      hoverColor: "hover:border-violet-300 hover:shadow-violet-500/10"
    },
    {
      icon: Thermometer,
      title: "Changement Climatique",
      description: "Spécialiste de l'impact du changement climatique sur la santé et les maladies vectorielles.",
      gradient: "from-indigo-500 to-blue-500",
      hoverColor: "hover:border-indigo-300 hover:shadow-indigo-500/10"
    },
    {
      icon: HeartPulse,
      title: "One Health",
      description: "Approche intégrée de la santé humaine, animale et environnementale.",
      gradient: "from-purple-500 to-violet-500",
      hoverColor: "hover:border-purple-300 hover:shadow-purple-500/10"
    },
    {
      icon: Microscope,
      title: "Parasitologie",
      description: "Expertise en profils plasmidiaux, efficacité thérapeutique des antipaludiques et MTN.",
      gradient: "from-blue-500 to-indigo-500",
      hoverColor: "hover:border-blue-300 hover:shadow-blue-500/10"
    },
    {
      icon: TrendingUp,
      title: "Planification Stratégique",
      description: "Évaluation épidémiologique, recherche opérationnelle et planification des programmes de lutte.",
      gradient: "from-violet-500 to-indigo-500",
      hoverColor: "hover:border-violet-300 hover:shadow-violet-500/10"
    }
  ];

  return (
    <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="bg-gradient-to-bl from-blue-100 to-transparent opacity-30 w-96 h-96 rounded-full absolute top-0 right-0 blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium mb-6">
            <Sparkles className="w-3 h-3 mr-2" />
            Expertise Multidisciplinaire
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Domaines d'Expertise</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Une expertise pointue en entomologie médicale, parasitologie et santé publique</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div key={index} className={`group relative p-8 rounded-2xl border-2 border-gray-200 ${area.hoverColor} transition-all bg-white hover:shadow-2xl hover:-translate-y-1`}>
                <div className="absolute top-4 right-4 w-20 h-20 opacity-10"></div>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{area.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;