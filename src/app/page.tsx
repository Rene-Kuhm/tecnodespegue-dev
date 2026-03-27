import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/Hero/HeroSection";
import { ServicesSection } from "@/components/sections/Services/ServicesSection";
import { ProjectsSection } from "@/components/sections/Projects/ProjectsSection";
import { ProcessSection } from "@/components/sections/Process/ProcessSection";
import { AboutSection } from "@/components/sections/About/AboutSection";
import { TestimonialsSection } from "@/components/sections/Testimonials/TestimonialsSection";
import { ContactSection } from "@/components/sections/Contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:text-sm"
        style={{ background: "var(--gradient-primary)", color: "white" }}
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
