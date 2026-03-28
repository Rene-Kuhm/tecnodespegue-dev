"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Martina García",
    role: "CEO",
    company: "StyleHub",
    content: "TecnoDespegue transformó nuestra tienda online por completo. Las ventas aumentaron un 180% en los primeros 3 meses post-lanzamiento. El equipo fue extraordinario, siempre disponible y con foco total en resultados.",
    avatar: "MG",
    color: "#7c6fff",
    metric: "+180% ventas",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "CTO",
    company: "FinanceApp",
    content: "La arquitectura que diseñaron para nuestra app fintech es impecable. Escalamos de 100 a 50.000 usuarios sin un solo downtime. Su expertise técnico y atención al detalle son incomparables.",
    avatar: "CR",
    color: "#00e5ff",
    metric: "50k usuarios",
    rating: 5,
  },
  {
    id: 3,
    name: "Valentina López",
    role: "Directora Digital",
    company: "GrupoMX",
    content: "Buscábamos una agencia que realmente entendiera nuestro negocio. TecnoDespegue no solo entregó el proyecto en tiempo y forma, sino que superó todas nuestras expectativas en diseño y performance.",
    avatar: "VL",
    color: "#ff6b9d",
    metric: "100% a tiempo",
    rating: 5,
  },
  {
    id: 4,
    name: "Sebastián Torres",
    role: "Founder",
    company: "StartupBA",
    content: "Desde el MVP hasta el producto final, el proceso fue increíblemente fluido. Su metodología ágil y comunicación constante me dieron total confianza en cada etapa del desarrollo.",
    avatar: "ST",
    color: "#ffb347",
    metric: "MVP en 3 semanas",
    rating: 5,
  },
];

function Stars({ rating, color }: { rating: number; color: string }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24"
          fill={i < rating ? color : "none"}
          stroke={color}
          strokeWidth="1.5"
          style={{ opacity: i < rating ? 1 : 0.3 }}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);
  const t = TESTIMONIALS[active];

  return (
    <section className="section relative" style={{ background: "var(--color-bg)" }}>
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: `radial-gradient(ellipse, ${t.color}06 0%, transparent 70%)`, filter: "blur(60px)", transition: "background 0.5s ease" }}
      />

      <div className="container relative z-10">

        {/* Header */}
        <div ref={titleRef} className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="chip glass mb-5"
            style={{ color: "var(--color-accent2)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-accent2)" }} />
            Testimonios
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-bold"
            style={{ fontSize: "var(--font-size-3xl)" }}
          >
            Lo que dicen{" "}
            <span className="gradient-text">nuestros clientes</span>
          </motion.h2>
        </div>

        {/* Main layout — side by side on desktop */}
        <div className="max-w-5xl mx-auto" aria-live="polite">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">

            {/* Main testimonial card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-8 md:p-10 rounded-3xl overflow-hidden"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  boxShadow: `0 0 60px ${t.color}06`,
                }}
              >
                {/* Top gradient line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent 5%, ${t.color}70, transparent 95%)` }}
                />
                {/* Corner glow */}
                <div
                  className="absolute top-0 left-0 w-48 h-48 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 0% 0%, ${t.color}08, transparent 70%)` }}
                />

                {/* Quote mark — big decorative */}
                <div
                  className="absolute top-6 right-8 font-black leading-none select-none pointer-events-none"
                  style={{ color: t.color, opacity: 0.06, fontSize: "8rem", lineHeight: 1, fontFamily: "Georgia, serif" }}
                >
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="mb-6">
                  <Stars rating={t.rating} color={t.color} />
                </div>

                {/* Quote text */}
                <p
                  className="relative z-10 leading-relaxed mb-8"
                  style={{ color: "var(--color-text)", fontSize: "var(--font-size-lg)", lineHeight: 1.7 }}
                >
                  &ldquo;{t.content}&rdquo;
                </p>

                {/* Author row */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${t.color}, ${t.color}80)`,
                        boxShadow: `0 4px 16px ${t.color}35`,
                      }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{t.name}</div>
                      <div className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                        {t.role}
                        <span className="mx-1.5" style={{ color: "var(--color-border-hover)" }}>·</span>
                        <span style={{ color: t.color }}>{t.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* Metric badge */}
                  <div
                    className="px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{ background: `${t.color}15`, color: t.color, border: `1px solid ${t.color}25` }}
                  >
                    {t.metric}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Sidebar — person selector */}
            <div className="flex flex-row lg:flex-col gap-3">
              {TESTIMONIALS.map((tm, i) => (
                <motion.button
                  key={tm.id}
                  onClick={() => setActive(i)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 lg:flex-none text-left p-4 rounded-2xl transition-all duration-300 relative overflow-hidden"
                  style={{
                    background: i === active ? "var(--color-surface-hover)" : "var(--color-surface)",
                    border: `1px solid ${i === active ? tm.color + "45" : "var(--color-border)"}`,
                    boxShadow: i === active ? `0 4px 20px ${tm.color}12` : "none",
                  }}
                >
                  {i === active && (
                    <div
                      className="absolute left-0 top-0 bottom-0 w-0.5 rounded-r"
                      style={{ background: tm.color }}
                    />
                  )}
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{
                        background: i === active
                          ? `linear-gradient(135deg, ${tm.color}, ${tm.color}80)`
                          : "rgba(255,255,255,0.06)",
                        color: i === active ? "white" : "var(--color-text-muted)",
                      }}
                    >
                      {tm.avatar}
                    </div>
                    <div className="min-w-0 hidden sm:block lg:block">
                      <div
                        className="text-sm font-semibold truncate leading-tight"
                        style={{ color: i === active ? "var(--color-text)" : "var(--color-text-muted)" }}
                      >
                        {tm.name.split(" ")[0]}
                      </div>
                      <div className="text-xs truncate" style={{ color: "var(--color-text-faint)" }}>
                        {tm.company}
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Progress dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((tm, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Ver testimonio de ${tm.name}`}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === active ? "28px" : "8px",
                    height: "8px",
                    background: i === active ? t.color : "var(--color-border-hover)",
                  }}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-2">
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full flex items-center justify-center glass"
                style={{ color: "var(--color-text-muted)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button
                onClick={next}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}90)`, color: "white", boxShadow: `0 4px 16px ${t.color}30` }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
