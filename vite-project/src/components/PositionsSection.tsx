import { Briefcase, Award, CheckCircle } from 'lucide-react';

const PositionsSection = () => {
  const currentPositions = [
    {
      title: "Enseignant-Chercheur",
      institution: "EPAC/UAC",
      bgColor: "bg-blue-50 border-blue-100"
    },
    {
      title: "Chargé de Recherche & Chercheur Associé",
      institution: "Centre de Recherche Entomologique de Cotonou (CREC)",
      bgColor: "bg-blue-50 border-blue-100"
    },
    {
      title: "Formateur International",
      institution: "OMS - Planification et gestion des programmes de lutte contre le paludisme",
      bgColor: "bg-violet-50 border-violet-100"
    },
    {
      title: "Facilitateur Régional",
      institution: "CREC - Cours en entomologie de la santé publique",
      bgColor: "bg-violet-50 border-violet-100"
    }
  ];

  const affiliations = [
    "American Society of Tropical Medicine and Hygiene (ASTMH)",
    "Vector Control Working Groups (RBM/OMS)",
    "Société Ouest Africaine de Parasitologie (SOAP)",
    "Société Béninoise de Parasitologie-Mycologie (SOBEPAM)",
    "Société Entomologique de la République du Bénin (SERB)",
    "Association Béninoise de Démoustication (ABLM)",
    "Association de Biotechnologistes du Bénin (ABM-Bénin)"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Positions & Affiliations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Engagé dans l'excellence académique et la collaboration internationale</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center mr-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Positions Actuelles</h3>
            </div>
            <div className="space-y-6">
              {currentPositions.map((position, index) => (
                <div key={index} className={`flex items-start p-4 rounded-xl ${position.bgColor}`}>
                  <div className="w-3 h-3 rounded-full bg-blue-500 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold mb-1">{position.title}</div>
                    <div className="text-sm text-gray-600">{position.institution}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Affiliations Professionnelles</h3>
            </div>
            <div className="space-y-3">
              {affiliations.map((affiliation, index) => (
                <div key={index} className="flex items-center p-4 rounded-xl border-2 border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  <div className="text-sm font-medium">{affiliation}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PositionsSection;