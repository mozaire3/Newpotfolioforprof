import { Menu } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TF</span>
            </div>
            <div className="text-xl font-semibold tracking-tight">Dr Tokponnon</div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#accueil" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Accueil</a>
            <a href="#expertise" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Expertise</a>
            <a href="#recherche" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Recherche</a>
            <a href="#publications" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Publications</a>
            <a href="#blog" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Blog</a>
            <a href="#contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <button className="md:hidden">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;