import { BookOpen, FileText, Presentation, Star, ExternalLink, ArrowRight } from 'lucide-react';

const PublicationsSection = () => {
  const publicationStats = [
    {
      icon: BookOpen,
      value: "60+",
      label: "Publications Scientifiques",
      subtitle: "Auteur et co-auteur",
      gradient: "from-blue-500 to-cyan-500",
      textGradient: "from-blue-600 to-violet-600",
      borderColor: "border-blue-200"
    },
    {
      icon: FileText,
      value: "10+",
      label: "Fiches Techniques",
      subtitle: "Documents de référence",
      gradient: "from-violet-500 to-purple-500",
      textGradient: "from-violet-600 to-purple-600",
      borderColor: "border-violet-200"
    },
    {
      icon: Presentation,
      value: "20+",
      label: "Communications",
      subtitle: "National et international",
      gradient: "from-indigo-500 to-blue-500",
      textGradient: "from-indigo-600 to-blue-600",
      borderColor: "border-indigo-200"
    }
  ];

  const recentPublications = [
    {
      title: "Évaluation de la résistance des vecteurs aux insecticides dans les zones endémiques",
      authors: "Tokponnon F., et al.",
      tags: ["Entomologie", "Résistance"],
      hoverColor: "hover:border-blue-200 hover:bg-blue-50",
      buttonHover: "hover:bg-blue-500 hover:border-blue-500"
    },
    {
      title: "Impact du changement climatique sur la transmission du paludisme en Afrique de l'Ouest",
      authors: "Tokponnon F., et al.",
      tags: ["Climat", "Paludisme"],
      hoverColor: "hover:border-violet-200 hover:bg-violet-50",
      buttonHover: "hover:bg-violet-500 hover:border-violet-500"
    },
    {
      title: "Surveillance entomologique et profil épidémiologique des arboviroses au Bénin",
      authors: "Tokponnon F., et al.",
      tags: ["Surveillance", "Arboviroses"],
      hoverColor: "hover:border-indigo-200 hover:bg-indigo-50",
      buttonHover: "hover:bg-indigo-500 hover:border-indigo-500"
    }
  ];

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-violet-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-blue-200 text-blue-700 text-xs font-medium mb-6 shadow-sm">
            <BookOpen className="w-3 h-3 mr-2" />
            Contribution Scientifique
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Publications & Communications</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Contribution significative à la littérature scientifique en entomologie médicale et santé publique</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {publicationStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className={`bg-white rounded-2xl border-2 ${stat.borderColor} p-8 text-center shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1`}>
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <div className={`text-5xl font-bold tracking-tight mb-2 bg-gradient-to-r ${stat.textGradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.subtitle}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-xl">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center mr-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Publications Récentes</h3>
          </div>
          <div className="space-y-6">
            {recentPublications.map((publication, index) => (
              <div key={index} className={`group p-6 rounded-xl border-2 border-gray-100 ${publication.hoverColor} transition-all`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{publication.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{publication.authors}</p>
                    <div className="flex flex-wrap gap-2">
                      {publication.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className={`inline-flex items-center px-3 py-1 rounded-full ${tagIndex === 0 ? 'bg-blue-100 text-blue-700' : 'bg-violet-100 text-violet-700'} text-xs font-semibold`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className={`ml-4 p-3 rounded-xl border-2 border-gray-200 ${publication.buttonHover} transition-all group`}>
                    <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t-2 border-gray-200">
            <a href="#" className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors">
              Voir toutes les publications
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;