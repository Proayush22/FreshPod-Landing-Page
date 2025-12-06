import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SpecsSection from "@/components/SpecsSection";
import AppSection from "@/components/AppSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="how-it-works">
        <HowItWorksSection />
      </section>
      <section id="specs">
        <SpecsSection />
      </section>
      <section id="app">
        <AppSection />
      </section>
      <section id="cta">      
        <CTASection/>
      </section>
      <Footer />
    </main>
  );
};

export default Index;
