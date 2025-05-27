import { Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "Byte-learn transformed how we handle data. We went from spending hours building reports to creating interactive dashboards in minutes. Game-changer for our analytics team!",
    author: "Sarah Johnson",
    role: "Data Analytics Manager",
    company: "TechFlow Inc.",
  },
  {
    content:
      "As a non-technical founder, I struggled with data visualization. Byte-learn made it possible for me to build beautiful, insightful dashboards without relying on our dev team.",
    author: "Michael Chen",
    role: "Co-Founder & CEO",
    company: "GrowthLabs",
  },
  {
    content:
      "Our marketing team uses Byte-learn daily to track campaign performance. The ability to create real-time dashboards without coding has improved our decision-making tremendously.",
    author: "Priya Patel",
    role: "Marketing Director",
    company: "Elevate Digital",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by data-driven teams
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how teams across different industries use Byte-learn to make better decisions with data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-white dark:bg-slate-800/50 shadow-sm border border-gray-100 dark:border-slate-700/50 flex flex-col"
            >
              <div className="mb-4">
                <Quote className="h-8 w-8 text-blue-500 opacity-50" />
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-6 flex-1">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}