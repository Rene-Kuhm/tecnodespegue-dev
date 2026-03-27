"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STEPS = [
  {
    number: "01",
    icon: "🎯",
    title: "Descubrimiento",
    description: "Entendemos tu negocio, objetivos y usuarios. Definimos alcance, tecnologías y roadmap.",
    color: "#7c6fff",
    duration: "1-2 días",
  },
  {
    number: "02",
    icon: "🎨",
    title: "Diseño & Prototipo",
    description: "Wireframes, diseño visual y prototipos interactivos. Iteramos hasta que sea perfecto.",
    color: "#00e5ff",
    duration: "3-7 días",
  },
  {
    number: "03",
    icon: "⚡",
    title: "Desarrollo",
    description: "Código limpio, escalable y documentado. Sprints ágiles con entregas incrementales.",
    color: "#ff6b9d",
    duration: "Variable",
  },
  {
    number: "04",
    icon: "🔍",
    title: "QA & Testing",
    description: "Testing en todos los dispositivos. Code review, performance, seguridad y accesibilidad.",
    color: "#ffb347",
    duration: "2-5 días",
  },
  {
    number: "05",
    icon: "🚀",
    title: "Deploy & Launch",
    description: "Infraestructura optimizada. CI/CD, monitoreo y soporte post-lanzamiento incluido.",
    color: "#6bcb77",
    duration: "1 día",
  },
];

export function ProcessSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="proceso" className="section relative" style={{ background: "var(--color-bg-secondary)" }}>
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
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-secondary)" }} />
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
            Cada proyecto sigue nuestro proceso ágil de 5 pasos para garantizar calidad y resultados.
          </motion.p>
        </div>

        {/* DESKTOP — stepper horizontal */}
        <div className="hidden lg:block">
          {/* Línea conectora */}
          <div className="relative flex items-start justify-between gap-4 mb-0">
            {/* Línea de fondo que conecta los dots */}
            <div
              className="absolute top-5 left-[10%] right-[10%] h-px"
              style={{ background: "linear-gradient(90deg, transparent, var(--color-border) 10%, var(--color-border) 90%, transparent)" }}
            />

            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center text-center flex-1"
              >
                {/* Dot numerado */}
                <div
                  className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs mb-6 flex-shrink-0"
                  style={{
                    background: `${step.color}18`,
                    border: `2px solid ${step.color}60`,
                    color: step.color,
                    boxShadow: `0 0 20px ${step.color}20`,
                  }}
                >
                  {step.number}
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="w-full p-5 rounded-2xl flex flex-col items-center text-center"
                  style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-3 flex-shrink-0"
                    style={{ background: `${step.color}14`, border: `1px solid ${step.color}25` }}
                  >
                    {step.icon}
                  </div>

                  <h3 className="font-bold text-white mb-1" style={{ fontSize: "var(--font-size-sm)" }}>
                    {step.title}
                  </h3>

                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium mb-3"
                    style={{ background: `${step.color}15`, color: step.color, border: `1px solid ${step.color}25` }}
                  >
                    {step.duration}
                  </span>

                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MOBILE — lista vertical con línea izquierda */}
        <div className="lg:hidden flex flex-col gap-0">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-4"
            >
              {/* Línea + dot */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 z-10"
                  style={{
                    background: `${step.color}18`,
                    border: `2px solid ${step.color}55`,
                    color: step.color,
                  }}
                >
                  {step.number}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-px flex-1 my-1" style={{ background: "var(--color-border)", minHeight: "20px" }} />
                )}
              </div>

              {/* Card */}
              <div
                className="flex-1 p-5 rounded-2xl mb-4"
                style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
              >
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{step.icon}</span>
                    <h3 className="font-bold" style={{ color: "var(--color-text)", fontSize: "var(--font-size-sm)" }}>
                      {step.title}
                    </h3>
                  </div>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0"
                    style={{ background: `${step.color}15`, color: step.color, border: `1px solid ${step.color}25` }}
                  >
                    {step.duration}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
