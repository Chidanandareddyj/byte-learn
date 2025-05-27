import { Button } from "@/app/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    price: "0",
    features: [
      "1 dashboard",
      "Basic templates",
      "Up to 3 data sources",
      "Public sharing",
      "Community support"
    ],
    cta: "Get started",
    highlight: false
  },
  {
    name: "Pro",
    description: "For individuals and small teams",
    price: "29",
    features: [
      "Unlimited dashboards",
      "All templates",
      "Unlimited data sources",
      "Team collaboration",
      "Private sharing",
      "Advanced analytics",
      "Email support",
    ],
    cta: "Start free trial",
    highlight: true
  },
  {
    name: "Enterprise",
    description: "For organizations with advanced needs",
    price: "Custom",
    features: [
      "Everything in Pro",
      "SSO authentication",
      "Custom branding",
      "Advanced security",
      "API access",
      "Dedicated support",
      "SLA guarantees",
    ],
    cta: "Contact sales",
    highlight: false
  }
];

export function     Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the plan that's right for your team. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`p-8 rounded-xl border ${
                plan.highlight 
                  ? "border-blue-500 shadow-lg shadow-blue-100 dark:shadow-slate-900/30" 
                  : "border-gray-200 dark:border-gray-800"
              } bg-white dark:bg-slate-800/50 flex flex-col h-full`}
            >
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? "text-blue-600 dark:text-blue-400" : ""}`}>
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-end gap-1 mb-1">
                  {plan.price !== "Custom" && <span className="text-2xl">$</span>}
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-600 dark:text-gray-400">/month</span>}
                </div>
              </div>
              
              <div className="flex-1">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                className={`mt-4 w-full ${
                  plan.highlight 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 dark:border-gray-700"
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
