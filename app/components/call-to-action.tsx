import { Button } from "@/app/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to transform your data experience?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of teams who are creating beautiful dashboards without writing code.
          Start for free, no credit card required.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-6 text-base">
            Get started for free
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-base">
            Book a demo
          </Button>
        </div>
      </div>
    </section>
  );
}