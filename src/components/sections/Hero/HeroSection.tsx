"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { HeroCanvas } from "@/components/three/HeroCanvas";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.8 });

      tl.fromTo(
        badgeRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      )
        .fromTo(
          ".hero-word",
          { y: 80, opacity: 0, rotationX: -40 },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.12,
          },
          "-=0.3"
        )
        .fromTo(
          subRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Gradient hero background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* 3D Canvas */}
      <HeroCanvas />

      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(108, 99, 255, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div ref={badgeRef} className="opacity-0 inline-flex items-center gap-2 mb-8">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest glass"
              style={{ color: "var(--color-primary-light)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse-glow"
                style={{ background: "var(--color-secondary)" }}
              />
              Agencia Digital de Alto Impacto
            </span>
          </div>

          {/* Heading con perspectiva */}
          <div style={{ perspective: "1200px" }} className="w-full overflow-hidden px-2">
            <h1
              ref={headingRef}
              className="font-bold tracking-tight leading-none mb-6 md:mb-8 break-words"
              style={{ fontSize: "var(--font-size-hero)" }}
            >
              <span className="hero-word block opacity-0">
                Creamos
              </span>
              <span className="hero-word block opacity-0 gradient-text">
                Experiencias
              </span>
              <span className="hero-word block opacity-0">
                Digitales
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <p
            ref={subRef}
            className="opacity-0 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2"
            style={{
              fontSize: "var(--font-size-base)",
              color: "var(--color-text-muted)",
            }}
          >
            Desarrollo web de alto impacto, consultoría informática y soluciones
            tecnológicas que transforman tu visión en realidad digital.
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="opacity-0 flex flex-col sm:flex-row items-center justify-center gap-3 w-full px-4 sm:px-0"
          >
            <motion.a
              href="#proyectos"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="relative w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-white overflow-hidden group text-center text-sm md:text-base"
              style={{ background: "var(--gradient-primary)" }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Ver proyectos
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(255,255,255,0.1)" }}
              />
            </motion.a>

            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="gradient-border w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-center text-sm md:text-base"
              style={{
                background: "transparent",
                color: "var(--color-text)",
              }}
            >
              Hablemos de tu proyecto
            </motion.a>
          </div>

          {/* Stats rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12 md:mt-16 pt-8 md:pt-10 w-full"
            style={{ borderTop: "1px solid var(--color-border)" }}
          >
            {[
              { value: "50+", label: "Proyectos entregados" },
              { value: "100%", label: "Clientes satisfechos" },
              { value: "5+", label: "Años de experiencia" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl md:text-2xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div
                  className="text-xs mt-1 uppercase tracking-widest"
                  style={{ color: "var(--color-text-faint)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--color-text-faint)" }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div
          className="w-px h-12 relative overflow-hidden"
          style={{ background: "var(--color-border)" }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full"
            style={{ background: "var(--gradient-primary)", height: "40%" }}
            animate={{ y: ["-100%", "300%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
