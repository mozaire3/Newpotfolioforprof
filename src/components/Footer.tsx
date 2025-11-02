const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t-2 border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TF</span>
              </div>
              <div className="text-xl font-bold tracking-tight">Dr Tokponnon</div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">Enseignant-Chercheur en Entomologie Médicale et Santé Publique</p>
          </div>

          <div>
            <div className="text-sm font-bold mb-4">Navigation</div>
            <div className="space-y-2">
              <a href="#accueil" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Accueil</a>
              <a href="#expertise" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Expertise</a>
              <a href="#recherche" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Recherche</a>
              <a href="#publications" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Publications</a>
            </div>
          </div>

          <div>
            <div className="text-sm font-bold mb-4">Ressources</div>
            <div className="space-y-2">
              <a href="#blog" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Blog</a>
              <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">CV</a>
              <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Formations</a>
              <a href="#contact" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <div className="text-sm font-bold mb-4">Institutions</div>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">EPAC/UAC</a>
              <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">CREC</a>
              <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">OMS</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t-2 border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2024 Dr Tokponnon Filémon. Tous droits réservés.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Mentions légales</a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;