"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { HeroCanvas } from "@/components/three/HeroCanvas";

gsap.registerPlugin(ScrollTrigger);

// Split text en chars para animación individual
function splitToChars(text: string, className = "") {
  return text.split("").map((char, i) => (
    <span
      key={i}
      className={`char inline-block ${className}`}
      style={{ display: char === " " ? "inline" : "inline-block" }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      // Badge
      tl.fromTo(badgeRef.current,
        { y: 16, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
      );

      // Line 1 chars
      const chars1 = line1Ref.current?.querySelectorAll(".char");
      if (chars1) {
        tl.fromTo(chars1,
          { y: "120%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.03 },
          "-=0.2"
        );
      }

      // Line 2 chars (gradient)
      const chars2 = line2Ref.current?.querySelectorAll(".char");
      if (chars2) {
        tl.fromTo(chars2,
          { y: "120%", opacity: 0, rotateX: -60 },
          { y: "0%", opacity: 1, rotateX: 0, duration: 0.8, ease: "power3.out", stagger: 0.025 },
          "-=0.55"
        );
      }

      // Line 3 chars
      const chars3 = line3Ref.current?.querySelectorAll(".char");
      if (chars3) {
        tl.fromTo(chars3,
          { y: "120%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.03 },
          "-=0.55"
        );
      }

      // Sub + CTA
      tl.fromTo(subRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.3"
      ).fromTo(ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.5"
      ).fromTo(statsRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      ).fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.2"
      );

      // Parallax del contenido al scroll
      gsap.to(".hero-content", {
        y: 80,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
      <HeroCanvas />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,111,255,0.08) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)", filter: "blur(40px)" }} />

      {/* Content */}
      <div className="container relative z-10">
        <div className="hero-content max-w-5xl mx-auto text-center">

          {/* Badge */}
          <div ref={badgeRef} className="flex justify-center mb-7 opacity-0">
            <span className="chip glass" style={{ color: "var(--color-primary-light)" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse-glow flex-shrink-0"
                style={{ background: "var(--color-secondary)" }} />
              Agencia Digital · Argentina
            </span>
          </div>

          {/* Heading — chars animados */}
          <h1
            className="font-bold tracking-tight leading-[1.05] mb-6 w-full"
            style={{ fontSize: "var(--font-size-hero)", perspective: "1000px" }}
          >
            <span className="block overflow-hidden py-1">
              <span ref={line1Ref} className="block">
                {splitToChars("Creamos")}
              </span>
            </span>
            <span className="block overflow-hidden py-1">
              <span ref={line2Ref} className="block gradient-text">
                {splitToChars("Experiencias")}
              </span>
            </span>
            <span className="block overflow-hidden py-1">
              <span ref={line3Ref} className="block">
                {splitToChars("Digitales")}
              </span>
            </span>
          </h1>

          {/* Sub */}
          <p
            ref={subRef}
            className="max-w-xl mx-auto mb-8 opacity-0 px-2"
            style={{ fontSize: "var(--font-size-base)", color: "var(--color-text-muted)", lineHeight: 1.8 }}
          >
            Desarrollo web de alto impacto, consultoría y soluciones tecnológicas
            que transforman tu visión en realidad digital extraordinaria.
          </p>

          {/* CTAs — centrados, proporciones fijas */}
          <div
            ref={ctaRef}
            className="opacity-0 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <motion.a
              href="#proyectos"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary"
            >
              Ver proyectos
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>

            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-outline"
            >
              Hablemos de tu proyecto
            </motion.a>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="opacity-0 flex flex-wrap justify-center gap-6 md:gap-12 mt-14 pt-8"
            style={{ borderTop: "1px solid var(--color-border)" }}
          >
            {[
              { value: "50+", label: "Proyectos" },
              { value: "100%", label: "Satisfacción" },
              { value: "5+", label: "Años" },
            ].map((s) => (
              <div key={s.label} className="text-center group">
                <div className="text-xl md:text-2xl font-black gradient-text transition-transform duration-300 group-hover:scale-110">
                  {s.value}
                </div>
                <div className="text-xs mt-1 uppercase tracking-widest" style={{ color: "var(--color-text-faint)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0">
        <div className="flex flex-col items-center gap-2" style={{ color: "var(--color-text-faint)" }}>
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <div className="w-px h-10 relative overflow-hidden" style={{ background: "var(--color-border)" }}>
            <motion.div
              className="absolute top-0 left-0 w-full"
              style={{ background: "var(--gradient-primary)", height: "45%" }}
              animate={{ y: ["-100%", "280%"] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
