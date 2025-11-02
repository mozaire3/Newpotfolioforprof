import { Mail, Building2, Phone, Linkedin, Twitter, GraduationCap, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200 to-transparent rounded-full blur-3xl opacity-30"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-blue-200 text-blue-700 text-xs font-medium mb-6 shadow-sm">
              <Mail className="w-3 h-3 mr-2" />
              Collaboration & Partenariats
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Me Contacter</h2>
            <p className="text-lg text-gray-600 mb-8">Pour toute collaboration, formation ou projet de recherche</p>
            
            <div className="space-y-6">
              <div className="flex items-start p-5 bg-white rounded-2xl border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Institution</div>
                  <div className="text-sm text-gray-600">EPAC/UAC & CREC</div>
                  <div className="text-sm text-gray-600">Cotonou, Bénin</div>
                </div>
              </div>

              <div className="flex items-start p-5 bg-white rounded-2xl border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <div className="text-sm text-gray-600">tokponnon@crec-benin.org</div>
                </div>
              </div>

              <div className="flex items-start p-5 bg-white rounded-2xl border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Téléphone</div>
                  <div className="text-sm text-gray-600">+229 XX XX XX XX</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t-2 border-gray-200">
              <div className="text-sm font-semibold mb-4">Réseaux Professionnels</div>
              <div className="flex gap-3">
                <a href="#" className="w-12 h-12 rounded-xl border-2 border-gray-200 bg-white flex items-center justify-center hover:border-blue-500 hover:bg-blue-50 transition-all shadow-sm">
                  <Linkedin className="w-5 h-5 text-gray-600" />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl border-2 border-gray-200 bg-white flex items-center justify-center hover:border-violet-500 hover:bg-violet-50 transition-all shadow-sm">
                  <Twitter className="w-5 h-5 text-gray-600" />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl border-2 border-gray-200 bg-white flex items-center justify-center hover:border-indigo-500 hover:bg-indigo-50 transition-all shadow-sm">
                  <GraduationCap className="w-5 h-5 text-gray-600" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-2xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Nom complet</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all" 
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all" 
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Objet</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all" 
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea 
                  rows={5} 
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none transition-all" 
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold rounded-xl hover:from-blue-700 hover:to-violet-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Envoyer le message
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;