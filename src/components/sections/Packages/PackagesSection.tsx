"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/contact";
import { MagneticButton } from "@/components/ui/MagneticButton/MagneticButton";

const PACKAGES = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Landing de Conversión",
    price: "$1.500",
    timeline: "15 días",
    highlight: false,
    features: [
      "Landing page de alta conversión",
      "Diseño mobile-first con animaciones",
      "Formulario + integración WhatsApp",
      "SEO técnico base",
      "Dominio + hosting 1 año",
    ],
    cta: "Empezar con Starter",
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Web Profesional",
    price: "$3.500",
    timeline: "4 semanas",
    highlight: true,
    features: [
      "Todo lo del plan Starter",
      "Hasta 8 secciones o páginas",
      "Blog o catálogo de productos",
      "Panel de administración (CMS)",
      "Google Analytics 4 integrado",
      "Soporte técnico 3 meses",
    ],
    cta: "Empezar con Growth",
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "Plataforma Digital",
    price: "Desde $7.000",
    timeline: "6–10 semanas",
    highlight: false,
    features: [
      "Todo lo del plan Growth",
      "E-commerce o plataforma a medida",
      "Autenticación + dashboard propio",
      "Integraciones con APIs de terceros",
      "Soporte técnico 6 meses",
    ],
    cta: "Hablar del proyecto",
  },
];

export function PackagesSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="paquetes" className="section" style={{ background: "var(--color-bg-secondary)" }}>
      <div className="container">

        {/* Header */}
        <div ref={titleRef} className="mb-20 md:mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="label mb-4"
          >
            <span className="w-4 h-px" style={{ background: "var(--color-secondary)" }} />
            Inversión transparente
          </motion.p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: "var(--font-size-3xl)", maxWidth: "480px" }}
            >
              Elegí el paquete que{" "}
              <span className="gradient-text">escala con vos</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)", maxWidth: "260px", lineHeight: 1.7 }}
            >
              Precio cerrado desde el día uno.
              Sin letra chica.
            </motion.p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-start">
          {PACKAGES.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} inView={inView} />
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10 text-sm"
          style={{ color: "var(--color-text-muted)" }}
        >
          ¿Necesitás algo específico?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition-colors duration-200"
            style={{ color: "var(--color-primary-light)" }}
          >
            Hablemos y armamos un presupuesto a medida
          </a>
        </motion.p>
      </div>
    </section>
  );
}

function PackageCard({ pkg, index, inView }: { pkg: typeof PACKAGES[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col"
      style={{
        borderRadius: "var(--r-2xl)",
        background: pkg.highlight ? "var(--color-surface)" : "var(--color-bg)",
        border: pkg.highlight
          ? "1px solid rgba(124,92,252,0.35)"
          : "1px solid var(--color-border)",
        transform: pkg.highlight ? "translateY(-4px)" : undefined,
        boxShadow: pkg.highlight ? "0 0 48px rgba(124,92,252,0.1)" : undefined,
      }}
    >
      {/* Popular badge */}
      {pkg.highlight && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap text-white"
            style={{ background: "var(--gradient-primary)" }}
          >
            Más elegido
          </span>
        </div>
      )}

      <div className="p-10 md:p-12 flex flex-col gap-9">
        {/* Header */}
        <div>
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: pkg.highlight ? "var(--color-primary-light)" : "var(--color-text-faint)" }}
          >
            {pkg.name}
          </p>
          <h3
            className="font-bold mb-5"
            style={{ fontSize: "var(--font-size-lg)", color: "var(--color-text)" }}
          >
            {pkg.tagline}
          </h3>

          <div className="flex items-baseline gap-2">
            <span
              className="font-black"
              style={{
                fontSize: "var(--font-size-3xl)",
                color: pkg.highlight ? "var(--color-primary-light)" : "var(--color-text)",
                lineHeight: 1,
              }}
            >
              {pkg.price}
            </span>
            <span style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)" }}>USD</span>
          </div>

          <p
            className="flex items-center gap-1.5 mt-2"
            style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
            </svg>
            Entrega en {pkg.timeline}
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "var(--color-border)" }} />

        {/* Features */}
        <ul className="flex flex-col gap-3.5">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <svg
                className="flex-shrink-0 mt-0.5"
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke={pkg.highlight ? "var(--color-primary-light)" : "var(--color-text-muted)"}
                strokeWidth="2.5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                {f}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <MagneticButton strength={0.2} className="w-full">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={pkg.highlight ? "btn-primary w-full justify-center" : "btn-outline w-full justify-center"}
          >
            {pkg.cta}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </MagneticButton>
      </div>
    </motion.div>
  );
}
