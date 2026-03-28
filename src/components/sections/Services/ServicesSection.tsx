"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SERVICES = [
  {
    num: "01",
    title: "Desarrollo Web",
    desc: "Webs y aplicaciones rápidas, escalables y optimizadas para convertir. Next.js, React, TypeScript.",
    tags: ["Next.js", "TypeScript", "Node.js"],
    accent: "var(--color-primary-light)",
  },
  {
    num: "02",
    title: "Apps Móviles",
    desc: "Aplicaciones nativas multiplataforma. Experiencia fluida en iOS y Android con React Native.",
    tags: ["React Native", "iOS", "Android"],
    accent: "var(--color-secondary)",
  },
  {
    num: "03",
    title: "UI/UX Design",
    desc: "Sistemas de diseño y prototipos centrados en el usuario que convierten visitas en clientes.",
    tags: ["Figma", "Design System", "Prototipado"],
    accent: "var(--color-accent)",
  },
  {
    num: "04",
    title: "E-commerce",
    desc: "Tiendas online optimizadas. Integración con MercadoPago, Stripe y gestión de inventario.",
    tags: ["Custom", "Pagos", "Catálogo"],
    accent: "var(--color-green)",
  },
  {
    num: "05",
    title: "Consultoría IT",
    desc: "Estrategia técnica, arquitectura cloud y transformación digital para empresas que escalan.",
    tags: ["Arquitectura", "Cloud", "Strategy"],
    accent: "var(--color-primary-light)",
  },
  {
    num: "06",
    title: "Automatización & AI",
    desc: "Flujos de trabajo inteligentes, integraciones y bots que eliminan el trabajo repetitivo.",
    tags: ["APIs", "IA", "Workflows"],
    accent: "var(--color-secondary)",
  },
];

export function ServicesSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="servicios" className="section" style={{ background: "var(--color-bg)" }}>
      <div className="container">

        {/* Header */}
        <div ref={titleRef} className="mb-20 md:mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="label mb-4"
          >
            <span className="w-4 h-px" style={{ background: "var(--color-primary)" }} />
            Lo que hacemos
          </motion.p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: "var(--font-size-3xl)", maxWidth: "520px" }}
            >
              Servicios que{" "}
              <span className="gradient-text">impulsan</span>{" "}
              tu negocio
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                color: "var(--color-text-muted)",
                fontSize: "var(--font-size-sm)",
                maxWidth: "300px",
                lineHeight: 1.8,
              }}
            >
              Soluciones tecnológicas completas.<br />
              De la idea al producto en producción.
            </motion.p>
          </div>
        </div>

        {/* Service rows */}
        <div
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          {SERVICES.map((s, i) => (
            <ServiceRow key={s.num} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-9 md:py-11 cursor-default transition-colors duration-300"
      style={{
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      {/* Number */}
      <span
        className="flex-shrink-0 font-black transition-colors duration-300"
        style={{
          color: "var(--color-text-faint)",
          fontSize: "var(--font-size-sm)",
          letterSpacing: "0.05em",
          width: "2.5rem",
        }}
      >
        {service.num}
      </span>

      {/* Title */}
      <h3
        className="font-bold transition-colors duration-300 group-hover:text-white flex-shrink-0"
        style={{
          fontSize: "var(--font-size-lg)",
          color: "var(--color-text)",
          minWidth: "200px",
        }}
      >
        {service.title}
      </h3>

      {/* Desc */}
      <p
        className="flex-1 transition-colors duration-300"
        style={{
          color: "var(--color-text-muted)",
          fontSize: "var(--font-size-sm)",
          lineHeight: 1.7,
        }}
      >
        {service.desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 flex-shrink-0 sm:justify-end">
        {service.tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-md font-medium"
            style={{
              background: "var(--color-surface-2)",
              color: "var(--color-text-muted)",
              border: "1px solid var(--color-border)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Accent line */}
      <div
        className="hidden sm:block flex-shrink-0 w-px h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: service.accent }}
      />
    </motion.div>
  );
}
