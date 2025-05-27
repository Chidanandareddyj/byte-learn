import Image from "next/image";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Features } from "./components/features";
import { HowItWorks } from "./components/how-it-works";
import { Integrations } from "./components/integrations";
import { Testimonials } from "./components/testimonials";
import { Pricing } from "./components/pricing";
import { CallToAction } from "./components/call-to-action";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="lensboard-bg">
          <Header />
          <Hero />
        </div>
        <HowItWorks />
        <Features />
        <Integrations />
        <Testimonials />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}