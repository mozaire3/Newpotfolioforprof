import { BookOpen, FileText, Presentation, Users } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: BookOpen,
      value: "60+",
      label: "Publications Scientifiques",
      bgColor: "border-blue-100",
      iconBg: "from-blue-500 to-cyan-500",
      textGradient: "from-blue-600 to-violet-600"
    },
    {
      icon: FileText,
      value: "10+",
      label: "Fiches Techniques",
      bgColor: "border-violet-100",
      iconBg: "from-violet-500 to-purple-500",
      textGradient: "from-violet-600 to-purple-600"
    },
    {
      icon: Presentation,
      value: "20+",
      label: "Communications",
      bgColor: "border-indigo-100",
      iconBg: "from-indigo-500 to-blue-500",
      textGradient: "from-indigo-600 to-blue-600"
    },
    {
      icon: Users,
      value: "7",
      label: "Associations Membres",
      bgColor: "border-purple-100",
      iconBg: "from-purple-500 to-violet-500",
      textGradient: "from-purple-600 to-violet-600"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-violet-50 to-indigo-50 border-y border-blue-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 border ${stat.bgColor}`}>
                  <IconComponent className={`w-8 h-8 text-blue-600`} />
                </div>
                <div className={`text-4xl font-bold tracking-tight mb-2 bg-gradient-to-r ${stat.textGradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;