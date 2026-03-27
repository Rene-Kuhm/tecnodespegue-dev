"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const SERVICE_LINKS = [
  { label: "Desarrollo Web", href: "#servicios" },
  { label: "Apps Móviles", href: "#servicios" },
  { label: "UI/UX Design", href: "#servicios" },
  { label: "Consultoría IT", href: "#servicios" },
  { label: "E-commerce", href: "#servicios" },
  { label: "Automatización & AI", href: "#servicios" },
];

const SOCIAL = [
  {
    label: "GitHub",
    href: "https://github.com/Rene-Kuhm",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/rene-kuhm",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://twitter.com/ReneKuhm",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group relative inline-flex items-center gap-1.5 py-1">
      <span
        className="text-sm transition-colors duration-300 group-hover:text-white"
        style={{ color: "var(--color-text-muted)" }}
      >
        {children}
      </span>
      <svg
        width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
        style={{ color: "var(--color-primary-light)" }}
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const ctaRef = useRef<HTMLDivElement>(null);
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--color-bg)" }}>

      {/* ── Animated gradient divider ── */}
      <div className="relative h-px w-full">
        <div
          className="absolute inset-0 animate-gradient"
          style={{
            background: "linear-gradient(90deg, transparent, var(--color-primary), var(--color-secondary), var(--color-accent), var(--color-primary), transparent)",
            backgroundSize: "200% 100%",
          }}
        />
      </div>

      {/* ── Big CTA section ── */}
      <div ref={ctaRef} className="relative py-24 md:py-32">
        {/* Ambient glows */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(124,111,255,0.08) 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div
          className="absolute top-1/2 right-0 w-[300px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 70%)", filter: "blur(60px)" }}
        />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-6"
              style={{ color: "var(--color-secondary)" }}
            >
              ¿Tenés un proyecto en mente?
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-black tracking-tight mb-8"
              style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)", lineHeight: 1.05 }}
            >
              Hagamos algo{" "}
              <span className="gradient-text">increíble</span>
              <br />
              juntos
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-lg mx-auto mb-10"
              style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-base)" }}
            >
              Convertimos tus ideas en productos digitales que marcan la diferencia.
              El primer paso es una conversación.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
                style={{ padding: "14px 36px", fontSize: "0.95rem" }}
              >
                Empezar proyecto
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>

              <motion.a
                href="https://wa.me/5493585555555"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#25D366" }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="container">
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-border) 20%, var(--color-border) 80%, transparent)" }} />
      </div>

      {/* ── Footer grid ── */}
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.2fr]">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--glow-primary-sm)" }}
              >
                TD
              </div>
              <span className="font-bold text-lg tracking-tight">
                Tecno<span className="gradient-text">Despegue</span>
              </span>
            </Link>

            <p
              className="text-sm leading-relaxed max-w-[300px] mb-6"
              style={{ color: "var(--color-text-muted)" }}
            >
              Agencia de desarrollo web y soluciones tecnológicas que transforman
              ideas en productos digitales extraordinarios.
            </p>

            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
              style={{ background: "rgba(107,203,119,0.08)", border: "1px solid rgba(107,203,119,0.2)", color: "#6bcb77" }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse-glow" style={{ background: "#6bcb77" }} />
              Disponibles para nuevos proyectos
            </div>

            {/* Social */}
            <div className="flex items-center gap-2">
              {SOCIAL.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(124,111,255,0.4)";
                    e.currentTarget.style.color = "var(--color-primary-light)";
                    e.currentTarget.style.background = "rgba(124,111,255,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.color = "var(--color-text-muted)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-5 pb-2"
              style={{ color: "var(--color-text-faint)", borderBottom: "1px solid var(--color-border)" }}
            >
              Navegación
            </h4>
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-5 pb-2"
              style={{ color: "var(--color-text-faint)", borderBottom: "1px solid var(--color-border)" }}
            >
              Servicios
            </h4>
            <ul className="flex flex-col gap-1">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-5 pb-2"
              style={{ color: "var(--color-text-faint)", borderBottom: "1px solid var(--color-border)" }}
            >
              Contacto
            </h4>

            <div className="flex flex-col gap-4">
              {/* Email */}
              <a
                href="mailto:hola@tecnodespegue.dev"
                className="group flex items-center gap-3 transition-colors duration-300"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                  style={{ background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.15)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--color-primary-light)" }}>
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4L12 13 2 4" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium transition-colors duration-300 group-hover:text-white" style={{ color: "var(--color-text-muted)" }}>
                    hola@tecnodespegue.dev
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,229,255,0.1)", border: "1px solid rgba(0,229,255,0.15)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--color-secondary)" }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                    Buenos Aires, Argentina
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,107,157,0.1)", border: "1px solid rgba(255,107,157,0.15)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--color-accent)" }}>
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                    Lun – Vie · 9:00 – 18:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="container">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 py-6"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          {/* Left */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1">
            <p className="text-xs" style={{ color: "var(--color-text-faint)" }}>
              © {year} TecnoDespegue
            </p>
            <span className="hidden sm:inline text-xs" style={{ color: "var(--color-border-hover)" }}>·</span>
            <p className="text-xs" style={{ color: "var(--color-text-faint)" }}>
              Todos los derechos reservados
            </p>
          </div>

          {/* Center */}
          <p className="text-xs flex items-center gap-1.5" style={{ color: "var(--color-text-faint)" }}>
            Hecho con
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ color: "var(--color-accent)" }}
            >
              ♥
            </motion.span>
            en Argentina
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 text-xs font-medium transition-colors duration-300"
            style={{ color: "var(--color-text-faint)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary-light)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-faint)")}
            aria-label="Volver arriba"
          >
            <span className="hidden sm:inline">Volver arriba</span>
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--color-border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(124,111,255,0.4)";
                e.currentTarget.style.background = "rgba(124,111,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </div>
          </motion.button>
        </div>
      </div>

      {/* ── Bottom ambient glow ── */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,111,255,0.04) 0%, transparent 70%)", filter: "blur(80px)" }}
      />
    </footer>
  );
}
