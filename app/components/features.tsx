import { BarChart3, FileText, Globe, LayoutDashboard, PieChart, Settings } from "lucide-react";
import Image from "next/image";

const features = [
  {
    name: "No-code dashboards",
    description: "Build real-time dashboards without writing a single line of code.",
    icon: LayoutDashboard,
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
  },
  {
    name: "Live data visualization",
    description: "Connect to your data sources and create beautiful, interactive charts.",
    icon: BarChart3,
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
  },
  {
    name: "Customizable templates",
    description: "Start with pre-built templates or create your own custom dashboards.",
    icon: FileText,
    color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
  },
  {
    name: "Seamless integrations",
    description: "Easily connect to databases, APIs, and existing business tools.",
    icon: Settings,
    color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"
  },
  {
    name: "Share and collaborate",
    description: "Invite team members to collaborate and share dashboards with stakeholders.",
    icon: Globe,
    color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
  },
  {
    name: "Real-time analytics",
    description: "Track performance metrics and make data-driven decisions in real time.",
    icon: PieChart,
    color: "bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400"
  },
];

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900/60 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-[5%] w-64 h-64 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-[10%] w-72 h-72 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-medium">
            FEATURES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful features, no coding required
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to transform your data into beautiful, interactive dashboards
            without writing a single line of code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.name}
              className="p-6 rounded-xl bg-white dark:bg-slate-800/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-slate-700/50 group"
              style={{ 
                animationDelay: `${index * 100}ms`,
                transform: `translateY(${index % 3 === 1 ? '16px' : '0'})` 
              }}
            >
              <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-xl mb-2">{feature.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Floating feature highlight */}
        <div className="hidden lg:block absolute top-[30%] right-[3%] max-w-64 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-slate-700 transform rotate-3 animate-float">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <div className="font-medium">Analytics updated</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Real-time data refreshed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}