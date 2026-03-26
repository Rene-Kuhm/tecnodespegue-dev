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
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < rating ? "#ffb347" : "none"}
          stroke="#ffb347" strokeWidth="1.5">
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
    <section className="section" style={{ background: "var(--color-bg)" }}>
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="container">

        {/* Header */}
        <div ref={titleRef} className="text-center max-w-2xl mx-auto mb-14">
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
            className="font-bold mb-4"
            style={{ fontSize: "var(--font-size-3xl)" }}
          >
            Lo que dicen <span className="gradient-text">nuestros clientes</span>
          </motion.h2>
        </div>

        {/* Testimonial principal */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 md:p-10 rounded-3xl"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-elevated)",
              }}
            >
              {/* Top glow */}
              <div className="absolute top-0 left-0 right-0 h-px rounded-t-3xl"
                style={{ background: `linear-gradient(90deg, transparent, ${t.color}60, transparent)` }} />

              {/* Quote icon */}
              <div className="mb-6 text-5xl leading-none select-none" style={{ color: t.color, opacity: 0.4 }}>
                &ldquo;
              </div>

              <p className="text-base md:text-lg leading-relaxed mb-8 font-medium" style={{ color: "var(--color-text)" }}>
                {t.content}
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)`, boxShadow: `0 4px 16px ${t.color}40` }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                      {t.role} · <span style={{ color: t.color }}>{t.company}</span>
                    </div>
                  </div>
                </div>
                <StarRating rating={t.rating} />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === active ? "24px" : "8px",
                    height: "8px",
                    background: i === active ? "var(--gradient-primary)" : "var(--color-border-hover)",
                  }} />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <motion.button onClick={prev} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full flex items-center justify-center glass"
                style={{ color: "var(--color-text-muted)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button onClick={next} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "var(--gradient-primary)", color: "white" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* All testimonials mini */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            {TESTIMONIALS.map((tm, i) => (
              <motion.button
                key={tm.id}
                onClick={() => setActive(i)}
                whileHover={{ y: -3 }}
                className="p-3 rounded-xl text-left transition-all duration-300"
                style={{
                  background: i === active ? "var(--color-surface-hover)" : "var(--color-surface)",
                  border: `1px solid ${i === active ? tm.color + "40" : "var(--color-border)"}`,
                  boxShadow: i === active ? `0 4px 20px ${tm.color}20` : "none",
                }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ background: tm.color }}>
                    {tm.avatar}
                  </div>
                  <div className="text-xs font-semibold text-white truncate">{tm.name}</div>
                </div>
                <div className="text-xs truncate" style={{ color: "var(--color-text-faint)" }}>{tm.company}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
