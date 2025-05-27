export function Integrations() {
  // Logos for integrations
  const integrations = [
    { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
    { name: "MongoDB", logo: "/logos/mongodb.svg" },
    { name: "MySQL", logo: "/logos/mysql.svg" },
    { name: "Google Analytics", logo: "/logos/ga.svg" },
    { name: "Stripe", logo: "/logos/stripe.svg" },
    { name: "Salesforce", logo: "/logos/salesforce.svg" },
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Connect with your favorite tools
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Byte-learn integrates seamlessly with all your data sources and business tools
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {integrations.map((integration) => (
            <div 
              key={integration.name}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-2">
                {/* Placeholder for logo - we'll use gray boxes for now */}
                <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded" />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">{integration.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
