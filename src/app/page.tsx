import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/Hero/HeroSection";
import { ServicesSection } from "@/components/sections/Services/ServicesSection";
import { ProjectsSection } from "@/components/sections/Projects/ProjectsSection";
import { AboutSection } from "@/components/sections/About/AboutSection";
import { ContactSection } from "@/components/sections/Contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
