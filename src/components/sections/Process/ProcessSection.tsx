"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STEPS = [
  { n: "01", title: "Descubrimiento", desc: "Entendemos tu negocio, objetivos y usuarios. Definimos alcance y roadmap.", dur: "1–2 días" },
  { n: "02", title: "Diseño",         desc: "Wireframes y prototipos interactivos. Iteramos hasta que sea perfecto.", dur: "3–7 días" },
  { n: "03", title: "Desarrollo",     desc: "Código limpio y escalable con entregas incrementales en sprints ágiles.", dur: "Según alcance" },
  { n: "04", title: "Testing",        desc: "QA en todos los dispositivos. Performance, seguridad y accesibilidad.", dur: "2–5 días" },
  { n: "05", title: "Lanzamiento",    desc: "Deploy en infraestructura optimizada con CI/CD y soporte post-launch.", dur: "1 día" },
];

export function ProcessSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="proceso" className="section" style={{ background: "var(--color-bg-secondary)" }}>
      <div className="container">

        {/* Header */}
        <div ref={titleRef} className="mb-20 md:mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="label mb-4"
          >
            <span className="w-4 h-px" style={{ background: "var(--color-secondary)" }} />
            Cómo trabajamos
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: "var(--font-size-3xl)", maxWidth: "500px" }}
          >
            Un proceso{" "}
            <span className="gradient-text">probado</span>{" "}
            y transparente
          </motion.h2>
        </div>

        {/* Steps — desktop grid / mobile stack */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
          {STEPS.map((step, i) => (
            <StepBlock key={step.n} step={step} index={i} total={STEPS.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepBlock({ step, index, total }: { step: typeof STEPS[0]; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const isLast = index === total - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex md:flex-col gap-5 md:gap-0 py-9 md:py-12 px-0 md:px-6"
      style={{
        borderBottom: "1px solid var(--color-border)",
        borderRight: !isLast ? "1px solid transparent" : undefined,
      }}
    >
      {/* Connector line (desktop) */}
      {!isLast && (
        <div
          className="hidden md:block absolute top-8 right-0 w-px h-8 -translate-y-1/2"
          style={{ background: "var(--color-border)" }}
        />
      )}

      {/* Mobile: number left column */}
      <div className="flex-shrink-0 md:mb-6">
        <span
          className="font-black"
          style={{
            fontSize: "var(--font-size-3xl)",
            color: "var(--color-surface-2)",
            lineHeight: 1,
            WebkitTextStroke: "1px rgba(124,92,252,0.3)",
          }}
        >
          {step.n}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-md"
            style={{
              background: "rgba(124,92,252,0.1)",
              color: "var(--color-primary-light)",
              border: "1px solid rgba(124,92,252,0.15)",
            }}
          >
            {step.dur}
          </span>
        </div>

        <h3
          className="font-bold"
          style={{ fontSize: "var(--font-size-base)", color: "var(--color-text)" }}
        >
          {step.title}
        </h3>

        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
        >
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}
