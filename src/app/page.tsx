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
      <Header />
      <main>
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
