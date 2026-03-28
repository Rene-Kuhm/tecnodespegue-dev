"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { HeroCanvas } from "@/components/three/HeroCanvas";
import { MagneticButton } from "@/components/ui/MagneticButton/MagneticButton";
import { WHATSAPP_URL } from "@/lib/contact";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "+50", label: "proyectos", sub: "Argentina y Latam" },
  { value: "5+",  label: "años",      sub: "en conversión digital" },
  { value: "48h", label: "respuesta", sub: "garantizada" },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapRef    = useRef<HTMLDivElement>(null);
  const badgeRef   = useRef<HTMLDivElement>(null);
  const linesRef   = useRef<HTMLDivElement>(null);
  const subRef     = useRef<HTMLDivElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      // Badge
      tl.fromTo(badgeRef.current,
        { y: 12, opacity: 0 },
        { y: 0,  opacity: 1, duration: 0.5, ease: "power3.out" }
      );

      // Lines — mask reveal (cada línea sube desde clip)
      const lines = linesRef.current?.querySelectorAll(".hero-line-inner");
      if (lines) {
        tl.fromTo(lines,
          { y: "105%" },
          { y: "0%", duration: 0.85, ease: "power4.out", stagger: 0.12 },
          "-=0.1"
        );
      }

      // Subtitle + CTAs
      tl.fromTo(subRef.current,
        { y: 20, opacity: 0 },
        { y: 0,  opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      );

      // Stats
      tl.fromTo(statsRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.7, ease: "power2.out" },
        "-=0.3"
      );

      // Parallax on scroll
      gsap.to(wrapRef.current, {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Atmospheric gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 110% 65% at 45% -5%, rgba(124,92,252,0.16) 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 85% 60%, rgba(34,211,238,0.07) 0%, transparent 70%)",
        }}
      />

      {/* WebGL */}
      <HeroCanvas />

      {/* Dot grid — very subtle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* ── Main content ── */}
      <div ref={wrapRef} className="container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-0 lg:gap-12 items-center min-h-screen py-28 lg:py-0">

          {/* LEFT — text */}
          <div className="flex flex-col justify-center max-w-[780px] lg:py-32">

            {/* Badge */}
            <div ref={badgeRef} className="mb-8 opacity-0">
              <span
                className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.12em]"
                style={{ color: "var(--color-text-faint)" }}
              >
                <span
                  className="w-5 h-px"
                  style={{ background: "var(--color-primary)" }}
                />
                Agencia digital · Buenos Aires · Argentina
                <span
                  className="w-5 h-px"
                  style={{ background: "var(--color-primary)", opacity: 0.4 }}
                />
              </span>
            </div>

            {/* Heading — line mask animation */}
            <div ref={linesRef} className="mb-8 select-none">
              {/* Line 1 */}
              <div className="hero-line overflow-hidden">
                <div
                  className="hero-line-inner font-black tracking-tight leading-none"
                  style={{ fontSize: "clamp(3.25rem, 9.5vw, 9.5rem)" }}
                >
                  Tu próximo
                </div>
              </div>

              {/* Line 2 — gradient fill */}
              <div className="hero-line overflow-hidden">
                <div
                  className="hero-line-inner font-black tracking-tight leading-none gradient-text"
                  style={{ fontSize: "clamp(3.25rem, 9.5vw, 9.5rem)" }}
                >
                  cliente ya te
                </div>
              </div>

              {/* Line 3 — outline / ghost */}
              <div className="hero-line overflow-hidden">
                <div
                  className="hero-line-inner font-black tracking-tight leading-none"
                  style={{
                    fontSize: "clamp(3.25rem, 9.5vw, 9.5rem)",
                    WebkitTextStroke: "1.5px rgba(241,241,248,0.2)",
                    color: "transparent",
                  }}
                >
                  busca.
                </div>
              </div>

              {/* Line 4 — question, smaller */}
              <div className="hero-line overflow-hidden mt-2">
                <div
                  className="hero-line-inner font-black tracking-tight leading-none"
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 4rem)",
                    color: "var(--color-text-muted)",
                  }}
                >
                  ¿Puede encontrarte?
                </div>
              </div>
            </div>

            {/* Subtitle + CTAs */}
            <div ref={subRef} className="opacity-0 flex flex-col gap-7">
              <p
                className="max-w-lg leading-relaxed"
                style={{
                  fontSize: "var(--font-size-base)",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.85,
                }}
              >
                Diseñamos y desarrollamos webs para empresas que{" "}
                <span style={{ color: "var(--color-text)" }}>ya venden y quieren escalar</span>.
                Sin excusas técnicas. Sin resultados genéricos.
              </p>

              <div className="flex flex-wrap gap-3">
                <MagneticButton strength={0.25}>
                  <a href="#paquetes" className="btn-primary">
                    Ver paquetes y precios
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </MagneticButton>

                <MagneticButton strength={0.25}>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex items-center gap-2"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#25D366" }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Hablar con René
                  </a>
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* RIGHT — stats (desktop only) */}
          <div
            ref={statsRef}
            className="hidden lg:flex flex-col justify-center gap-10 opacity-0 py-32"
            style={{
              borderLeft: "1px solid var(--color-border)",
              paddingLeft: "clamp(2rem, 4vw, 4rem)",
              minWidth: "200px",
            }}
          >
            {STATS.map((s, i) => (
              <div key={s.label}>
                <div
                  className="font-black leading-none gradient-text"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}
                >
                  {s.value}
                </div>
                <div
                  className="font-semibold mt-1.5"
                  style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text)" }}
                >
                  {s.label}
                </div>
                <div
                  style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}
                >
                  {s.sub}
                </div>
                {i < STATS.length - 1 && (
                  <div
                    className="mt-10"
                    style={{ height: "1px", background: "var(--color-border)", width: "40px" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile stats — horizontal strip at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.7 }}
        className="lg:hidden absolute bottom-0 left-0 right-0 z-10"
        style={{ borderTop: "1px solid var(--color-border)", background: "rgba(7,7,15,0.8)", backdropFilter: "blur(8px)" }}
      >
        <div className="container flex justify-between py-5">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="font-black gradient-text leading-none"
                style={{ fontSize: "var(--font-size-xl)" }}
              >
                {s.value}
              </div>
              <div
                className="mt-0.5"
                style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}
              >
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2"
        style={{ color: "var(--color-text-faint)" }}
      >
        <div
          className="w-px h-14 relative overflow-hidden"
          style={{ background: "var(--color-border)" }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full"
            style={{ background: "var(--gradient-primary)", height: "50%" }}
            animate={{ y: ["-100%", "300%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", writingMode: "vertical-lr" }}>
          scroll
        </span>
      </motion.div>
    </section>
  );
}
