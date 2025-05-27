import { ArrowRight, LineChart, Link2, Zap } from "lucide-react";

const steps = [
  {
    title: "Connect your data",
    description: "Easily connect to your databases, APIs, or upload CSV files to get started. No code needed.",
    icon: Link2,
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
  },
  {
    title: "Build your dashboard",
    description: "Use our drag-and-drop interface to create beautiful visualizations and organize your data.",
    icon: LineChart,
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
  },
  {
    title: "Share and collaborate",
    description: "Invite team members to collaborate on dashboards and share insights with stakeholders.",
    icon: Zap,
    color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
  }
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How it works
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Create powerful dashboards in minutes, not months
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start mb-12 md:mb-16">
              <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0`}>
                <step.icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block ml-6 mr-2">
                  <ArrowRight className="h-6 w-6 text-gray-300 dark:text-gray-700 mt-2 transform rotate-90 md:rotate-0" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
