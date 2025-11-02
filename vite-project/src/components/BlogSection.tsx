import { PenLine, Calendar, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Avancées dans la lutte contre la résistance aux insecticides",
      description: "Nouvelles stratégies pour gérer la résistance des vecteurs du paludisme aux insecticides en Afrique subsaharienne.",
      date: "15 Mars 2024",
      readTime: "5 min de lecture",
      category: "Recherche",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
      gradient: "from-blue-100 to-cyan-100",
      categoryBg: "bg-blue-500",
      hoverColor: "hover:border-blue-300 hover:shadow-blue-500/10",
      linkColor: "text-blue-600 hover:text-blue-700"
    },
    {
      title: "L'approche One Health face aux défis sanitaires",
      description: "Comment l'intégration santé humaine-animale-environnement transforme la lutte contre les maladies vectorielles.",
      date: "08 Mars 2024",
      readTime: "7 min de lecture",
      category: "One Health",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600&h=400&fit=crop",
      gradient: "from-violet-100 to-purple-100",
      categoryBg: "bg-violet-500",
      hoverColor: "hover:border-violet-300 hover:shadow-violet-500/10",
      linkColor: "text-violet-600 hover:text-violet-700"
    },
    {
      title: "Changement climatique et maladies vectorielles",
      description: "Analyse de l'impact des variations climatiques sur la distribution et la transmission des pathogènes.",
      date: "01 Mars 2024",
      readTime: "6 min de lecture",
      category: "Climat",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      gradient: "from-indigo-100 to-blue-100",
      categoryBg: "bg-indigo-500",
      hoverColor: "hover:border-indigo-300 hover:shadow-indigo-500/10",
      linkColor: "text-indigo-600 hover:text-indigo-700"
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-medium mb-6">
            <PenLine className="w-3 h-3 mr-2" />
            Actualités & Réflexions
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Blog & Actualités</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Partage de connaissances, actualités de recherche et réflexions sur la santé publique</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className={`group bg-white rounded-2xl border-2 border-gray-200 overflow-hidden ${post.hoverColor} transition-all hover:shadow-2xl hover:-translate-y-1`}>
              <div className={`aspect-video bg-gradient-to-br ${post.gradient} overflow-hidden relative`}>
                <img 
                  src={post.image}
                  alt="Article" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full ${post.categoryBg} text-white text-xs font-semibold shadow-lg`}>
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{post.description}</p>
                <a href="#" className={`inline-flex items-center text-sm font-semibold ${post.linkColor} transition-colors`}>
                  Lire la suite
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm font-semibold rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all shadow-lg hover:shadow-xl">
            Voir tous les articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;