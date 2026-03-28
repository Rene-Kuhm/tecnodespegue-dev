"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/contact";

const CASES = [
  {
    id: "01",
    category: "E-commerce",
    industry: "Retail · Buenos Aires",
    title: "Landing que convierte, no solo atrae",
    desc: "Empresa con buen tráfico pero menos del 1% de conversión. Rediseño enfocado en jerarquía visual y CTAs claros.",
    metrics: [{ value: "+187%", label: "conversión" }, { value: "−42%", label: "abandono" }, { value: "3.2×", label: "ROI" }],
    accent: "#7c5cfc",
  },
  {
    id: "02",
    category: "SaaS",
    industry: "Tech · Córdoba",
    title: "Dashboard que reemplazó 3 herramientas",
    desc: "El equipo gestionaba clientes en Excel + Notion + Sheets. Plataforma unificada con reportes en tiempo real.",
    metrics: [{ value: "−68%", label: "tiempo en reportes" }, { value: "100%", label: "datos unificados" }, { value: "5 hs", label: "ahorradas/semana" }],
    accent: "#22d3ee",
  },
  {
    id: "03",
    category: "Web Corporativa",
    industry: "Servicios · Rosario",
    title: "Web que genera consultas sin publicidad",
    desc: "8 años de trayectoria sin presencia digital. Sitio con SEO técnico y contenidos que posicionan.",
    metrics: [{ value: "+340%", label: "tráfico orgánico" }, { value: "12", label: "consultas/mes" }, { value: "4 meses", label: "para resultados" }],
    accent: "#fb7185",
  },
];

export function ProjectsSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="proyectos" className="section" style={{ background: "var(--color-bg)" }}>
      <div className="container">

        {/* Header */}
        <div ref={titleRef} className="mb-20 md:mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="label mb-4"
          >
            <span className="w-4 h-px" style={{ background: "var(--color-accent)" }} />
            Resultados reales
          </motion.p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: "var(--font-size-3xl)", maxWidth: "480px" }}
            >
              Casos que{" "}
              <span className="gradient-text">generan confianza</span>
            </motion.h2>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="btn-primary inline-flex flex-shrink-0"
            >
              Quiero resultados similares
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {CASES.map((study, i) => (
            <CaseCard key={study.id} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({ study, index }: { study: typeof CASES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
      }}
    >
      {/* Color bar top */}
      <div
        className="h-1 w-full"
        style={{ background: study.accent }}
      />

      <div className="flex flex-col flex-1 p-8 md:p-10 gap-7">
        {/* Meta */}
        <div className="flex items-start justify-between gap-3">
          <span
            className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md"
            style={{
              background: `${study.accent}15`,
              color: study.accent,
              border: `1px solid ${study.accent}25`,
            }}
          >
            {study.category}
          </span>
          <span
            className="text-xs font-black flex-shrink-0"
            style={{ color: study.accent, opacity: 0.2, fontSize: "2.5rem", lineHeight: 1 }}
          >
            {study.id}
          </span>
        </div>

        {/* Content */}
        <div>
          <p className="text-xs mb-2" style={{ color: "var(--color-text-faint)" }}>{study.industry}</p>
          <h3
            className="font-bold mb-3 leading-snug"
            style={{ fontSize: "var(--font-size-base)", color: "var(--color-text)" }}
          >
            {study.title}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            {study.desc}
          </p>
        </div>

        {/* Metrics */}
        <div
          className="grid grid-cols-3 gap-4 pt-7"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          {study.metrics.map((m) => (
            <div key={m.label}>
              <div
                className="font-black leading-none"
                style={{ fontSize: "var(--font-size-xl)", color: study.accent }}
              >
                {m.value}
              </div>
              <div
                className="text-xs mt-1 leading-snug"
                style={{ color: "var(--color-text-muted)" }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
