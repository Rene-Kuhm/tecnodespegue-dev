"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STEPS = [
  {
    number: "01",
    icon: "🎯",
    title: "Descubrimiento",
    description: "Entendemos tu negocio, objetivos y usuarios. Definimos el alcance, tecnologías y roadmap del proyecto.",
    color: "#7c6fff",
    duration: "1-2 días",
  },
  {
    number: "02",
    icon: "🎨",
    title: "Diseño & Prototipo",
    description: "Creamos wireframes, diseño visual y prototipos interactivos. Iteramos hasta que el diseño sea perfecto.",
    color: "#00e5ff",
    duration: "3-7 días",
  },
  {
    number: "03",
    icon: "⚡",
    title: "Desarrollo",
    description: "Escribimos código limpio, escalable y bien documentado. Sprints ágiles con entregas incrementales.",
    color: "#ff6b9d",
    duration: "Variable",
  },
  {
    number: "04",
    icon: "🔍",
    title: "QA & Testing",
    description: "Testing exhaustivo en todos los dispositivos. Code review, performance, seguridad y accesibilidad.",
    color: "#ffb347",
    duration: "2-5 días",
  },
  {
    number: "05",
    icon: "🚀",
    title: "Deploy & Launch",
    description: "Desplegamos en infraestructura optimizada. CI/CD, monitoreo y soporte post-lanzamiento incluido.",
    color: "#6bcb77",
    duration: "1 día",
  },
];

export function ProcessSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="section" style={{ background: "var(--color-bg-secondary)" }}>
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="container">

        {/* Header */}
        <div ref={titleRef} className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="chip glass mb-5"
            style={{ color: "var(--color-secondary)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-secondary)" }} />
            Cómo trabajamos
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-bold mb-4"
            style={{ fontSize: "var(--font-size-3xl)" }}
          >
            Un proceso <span className="gradient-text">probado</span> y transparente
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-base)" }}
          >
            Cada proyecto sigue nuestro proceso ágil de 5 pasos para garantizar calidad y puntualidad.
          </motion.p>
        </div>

        {/* Steps — línea vertical en desktop */}
        <div className="relative max-w-4xl mx-auto">
          {/* Línea conectora vertical */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "linear-gradient(180deg, transparent, var(--color-border) 10%, var(--color-border) 90%, transparent)", transform: "translateX(-50%)" }} />

          <div className="flex flex-col gap-8">
            {STEPS.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex items-center gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className={`flex-1 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <motion.div
                      whileHover={{ y: -4, scale: 1.01 }}
                      className="group p-6 rounded-2xl shimmer"
                      style={{
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-border)",
                        boxShadow: "var(--shadow-card)",
                      }}
                    >
                      {/* Top accent line */}
                      <div className="absolute top-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-all duration-500"
                        style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }} />

                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                          style={{ background: `${step.color}14`, border: `1px solid ${step.color}25` }}>
                          {step.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                            <h3 className="text-base font-bold text-white">{step.title}</h3>
                            <span className="text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0"
                              style={{ background: `${step.color}15`, color: step.color, border: `1px solid ${step.color}25` }}>
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Dot central */}
                  <div className="relative z-10 flex-shrink-0 hidden sm:block"
                    style={{ width: "48px", display: "flex", justifyContent: "center" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm"
                      style={{
                        background: `${step.color}18`,
                        border: `2px solid ${step.color}50`,
                        color: step.color,
                        boxShadow: `0 0 20px ${step.color}25`,
                      }}>
                      {step.number}
                    </div>
                  </div>

                  {/* Spacer lado opuesto */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
