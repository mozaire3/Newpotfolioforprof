import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="accueil" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="opacity-5 absolute top-0 right-0 bottom-0 left-0">
        <div className="absolute top-20 left-10 w-32 h-32">
          <img 
            src="https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?w=200&h=200&fit=crop" 
            alt="microscope" 
            className="opacity-30 w-full h-full object-contain -translate-y-3"
          />
        </div>
        <div className="absolute top-40 right-20 w-24 h-24">
          <img 
            src="https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=200&h=200&fit=crop" 
            alt="lab" 
            className="w-full h-full object-contain opacity-30"
          />
        </div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28">
          <img 
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=200&h=200&fit=crop" 
            alt="research" 
            className="w-full h-full object-contain opacity-30"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-violet-900 bg-clip-text text-transparent">
              Dr Tokponnon Filémon
            </h1>
            <p className="text-xl text-gray-700 mb-4 font-medium">Enseignant-Chercheur à l'EPAC/UAC</p>
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              Entomologiste de la Santé Publique | Parasitologue | Spécialiste du Changement Climatique et One Health
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-violet-700 transition-all shadow-lg shadow-blue-500/20"
              >
                Me contacter
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a 
                href="#publications" 
                className="inline-flex items-center hover:bg-gray-50 transition-colors text-sm font-medium text-gray-900 bg-white border-gray-300 border rounded-lg pt-3 pr-6 pb-3 pl-6 shadow-sm"
              >
                Publications
              </a>
            </div>

            {/* Mini Icons */}
            <div className="flex items-center gap-6 mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=100&h=100&fit=crop" 
                    alt="mosquito" 
                    className="w-6 h-6 object-contain opacity-70"
                  />
                </div>
                <span className="text-xs text-gray-600">Vecteurs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=100&h=100&fit=crop" 
                    alt="dna" 
                    className="w-6 h-6 object-contain opacity-70"
                  />
                </div>
                <span className="text-xs text-gray-600">Génétique</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=100&h=100&fit=crop" 
                    alt="lab" 
                    className="w-6 h-6 object-contain opacity-70"
                  />
                </div>
                <span className="text-xs text-gray-600">Recherche</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-violet-500 rounded-3xl opacity-20 blur-2xl"></div>
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-blue-100 via-violet-50 to-indigo-100 overflow-hidden border-2 border-white shadow-2xl">
              <img 
                src="https://crec.bj/wp-content/uploads/2024/05/Dr-Filemon-scaled-e1717407136305-1024x1022.jpg?w=800&q=80" 
                alt="Dr Tokponnon Filémon" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?w=200&h=200&fit=crop" 
                alt="microscope" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=200&h=200&fit=crop" 
                alt="mosquito" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;