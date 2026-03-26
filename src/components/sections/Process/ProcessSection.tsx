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
    <section className="section relative" style={{ background: "var(--color-bg-secondary)" }}>
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="container">

        {/* Header */}
        <div ref={titleRef} className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="chip glass mb-5"
            style={{ color: "var(--color-secondary)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "var(--color-secondary)" }} />
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

        {/* Steps — mobile: lista vertical con línea izquierda
                    desktop: grid 2 columnas con dot central */}
        <div className="max-w-4xl mx-auto">

          {/* MOBILE layout — simple y limpio */}
          <div className="flex flex-col gap-4 lg:hidden">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-4 items-start"
              >
                {/* Dot + line */}
                <div className="flex flex-col items-center flex-shrink-0 pt-1">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0"
                    style={{
                      background: `${step.color}18`,
                      border: `1.5px solid ${step.color}50`,
                      color: step.color,
                    }}
                  >
                    {step.number}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="w-px flex-1 mt-2" style={{ background: "var(--color-border)", minHeight: "24px" }} />
                  )}
                </div>

                {/* Card */}
                <div
                  className="flex-1 p-5 rounded-2xl mb-1"
                  style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
                >
                  <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{step.icon}</span>
                      <h3 className="text-sm font-bold text-white">{step.title}</h3>
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

          {/* DESKTOP layout — zigzag con línea central */}
          <div className="hidden lg:block relative">
            {/* Línea vertical central */}
            <div
              className="absolute top-5 bottom-5 w-px left-1/2 -translate-x-1/2"
              style={{ background: "linear-gradient(180deg, transparent, var(--color-border) 8%, var(--color-border) 92%, transparent)" }}
            />

            <div className="flex flex-col gap-6">
              {STEPS.map((step, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`grid grid-cols-[1fr_48px_1fr] items-center gap-0`}
                  >
                    {/* Lado izquierdo */}
                    {isLeft ? (
                      <motion.div
                        whileHover={{ y: -3 }}
                        className="group p-6 rounded-2xl mr-4"
                        style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
                      >
                        <StepCardContent step={step} />
                      </motion.div>
                    ) : <div />}

                    {/* Dot central */}
                    <div className="flex justify-center z-10">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs"
                        style={{
                          background: `${step.color}18`,
                          border: `2px solid ${step.color}55`,
                          color: step.color,
                          boxShadow: `0 0 16px ${step.color}20`,
                        }}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Lado derecho */}
                    {!isLeft ? (
                      <motion.div
                        whileHover={{ y: -3 }}
                        className="group p-6 rounded-2xl ml-4"
                        style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
                      >
                        <StepCardContent step={step} />
                      </motion.div>
                    ) : <div />}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCardContent({ step }: { step: typeof STEPS[0] }) {
  return (
    <>
      <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
            style={{ background: `${step.color}14`, border: `1px solid ${step.color}25` }}
          >
            {step.icon}
          </div>
          <h3 className="text-sm font-bold text-white">{step.title}</h3>
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
    </>
  );
}
