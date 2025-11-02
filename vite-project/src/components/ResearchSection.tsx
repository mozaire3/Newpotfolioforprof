import { FlaskConical, Search, TreePine, Activity, Users } from 'lucide-react';

const ResearchSection = () => {
  const researchAreas = [
    {
      icon: Search,
      title: "Surveillance des Vecteurs et Pathogènes",
      description: "Surveillance des vecteurs de maladie, des arboviroses et autres parasites pathogènes transmises par les vecteurs. Étude des dynamiques de transmission et des profils épidémiologiques.",
      gradient: "from-blue-500 to-cyan-500",
      hoverColor: "hover:border-blue-300"
    },
    {
      icon: TreePine,
      title: "Facteurs Environnementaux et Socio-anthropologiques",
      description: "Influence des facteurs environnementaux et socio-anthropologiques dans la lutte contre les maladies à transmission vectorielle. Analyse des déterminants écologiques de la transmission.",
      gradient: "from-violet-500 to-purple-500",
      hoverColor: "hover:border-violet-300"
    },
    {
      icon: Activity,
      title: "Filarioses et Helminthes",
      description: "Surveillance des filarioses lymphatiques, des helminthes comme Wuchereria bancrofti et Mansonella perstans et autres espèces spécifiques en instance d'explorations.",
      gradient: "from-indigo-500 to-blue-500",
      hoverColor: "hover:border-indigo-300"
    },
    {
      icon: FlaskConical,
      title: "Maladies Tropicales Négligées",
      description: "Recherche sur les MTN notamment la dengue, l'onchocercose, les géohelminthiases et autres maladies parasitaires négligées.",
      gradient: "from-purple-500 to-violet-500",
      hoverColor: "hover:border-purple-300"
    },
    {
      icon: Users,
      title: "Développement Communautaire",
      description: "Animation du développement des associations, de la société civile et des familles. Engagement communautaire dans la lutte contre les maladies vectorielles.",
      gradient: "from-blue-500 to-indigo-500",
      hoverColor: "hover:border-blue-300"
    }
  ];

  return (
    <section id="recherche" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-100 to-transparent rounded-full blur-3xl opacity-30"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-medium mb-6">
            <FlaskConical className="w-3 h-3 mr-2" />
            Recherche Multidisciplinaire
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Axes de Recherche</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Recherches innovantes pour améliorer la lutte contre les maladies à transmission vectorielle</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {researchAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div key={index} className={`group bg-white rounded-2xl border-2 border-gray-200 p-8 ${area.hoverColor} transition-all hover:shadow-2xl relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5"></div>
                <div className="flex items-start relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mr-6 shadow-lg flex-shrink-0`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;