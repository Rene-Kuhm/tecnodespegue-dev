"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Service } from "@/types";

const SERVICES: Service[] = [
  {
    id: "web",
    icon: "🌐",
    title: "Desarrollo Web",
    description: "Webs y aplicaciones de alto rendimiento con Next.js, React y TypeScript. Arquitecturas escalables que crecen con tu negocio.",
    tags: ["Next.js", "React", "TypeScript", "Performance"],
    color: "#7c6fff",
  },
  {
    id: "mobile",
    icon: "📱",
    title: "Apps Móviles",
    description: "Aplicaciones nativas y multiplataforma con React Native. Experiencias fluidas, rápidas y nativas para iOS y Android.",
    tags: ["React Native", "iOS", "Android", "Expo"],
    color: "#00e5ff",
  },
  {
    id: "consulting",
    icon: "🧠",
    title: "Consultoría IT",
    description: "Asesoramiento estratégico en arquitectura, infraestructura cloud y transformación digital. Decisiones técnicas que importan.",
    tags: ["Arquitectura", "Cloud", "DevOps", "Strategy"],
    color: "#ff6b9d",
  },
  {
    id: "design",
    icon: "✨",
    title: "UI/UX Design",
    description: "Sistemas de diseño, prototipos y experiencias centradas en el usuario que convierten visitantes en clientes.",
    tags: ["Figma", "Design System", "UX Research", "Prototyping"],
    color: "#ffb347",
  },
  {
    id: "ecommerce",
    icon: "🛒",
    title: "E-commerce",
    description: "Tiendas online optimizadas para convertir. Integración con MercadoPago, Stripe, gestión de inventario y logística.",
    tags: ["Shopify", "WooCommerce", "Custom", "Payments"],
    color: "#6bcb77",
  },
  {
    id: "automation",
    icon: "⚡",
    title: "Automatización & AI",
    description: "Integraciones inteligentes, bots y flujos de trabajo con IA que eliminan el trabajo repetitivo y maximizan eficiencia.",
    tags: ["APIs", "AI", "Bots", "Integrations"],
    color: "#c77dff",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col rounded-2xl cursor-pointer shimmer"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        overflow: "hidden",
        padding: "1.5rem",
        minHeight: "280px",
      }}
    >
      {/* Número decorativo de fondo */}
      <span
        className="absolute top-3 right-4 font-black pointer-events-none select-none"
        style={{ color: service.color, opacity: 0.05, fontSize: "4.5rem", lineHeight: 1 }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Glow hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 70% 60% at 20% 50%, ${service.color}0d 0%, transparent 70%)` }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none rounded-2xl"
        style={{ boxShadow: `inset 0 0 0 1px ${service.color}20` }}
      />
      <div
        className="absolute top-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
      />

      {/* Icon */}
      <div
        className="relative w-11 h-11 rounded-xl flex items-center justify-center text-lg mb-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ background: `${service.color}14`, border: `1px solid ${service.color}28` }}
      >
        {service.icon}
      </div>

      {/* Título */}
      <h3
        className="font-bold mb-2 leading-snug"
        style={{ color: "var(--color-text)", fontSize: "var(--font-size-base)" }}
      >
        {service.title}
      </h3>

      {/* Descripción — crece para empujar tags al fondo */}
      <p
        className="leading-relaxed flex-1 mb-4"
        style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)" }}
      >
        {service.description}
      </p>

      {/* Tags en la misma fila que el arrow */}
      <div className="flex items-center justify-between gap-2 mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{
                background: `${service.color}12`,
                color: service.color,
                border: `1px solid ${service.color}20`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <motion.div
          className="w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 flex-shrink-0 transition-opacity duration-300"
          style={{ background: `${service.color}20`, color: service.color }}
          whileHover={{ x: 2 }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="section" style={{ background: "var(--color-bg)" }}>
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container">
        <div ref={titleRef} className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="chip glass mb-5"
            style={{ color: "var(--color-primary-light)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-primary)" }} />
            Lo que hacemos
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-bold mb-4"
            style={{ fontSize: "var(--font-size-3xl)" }}
          >
            Servicios que <span className="gradient-text">impulsan</span> tu negocio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-base)" }}
          >
            Soluciones tecnológicas completas para empresas que quieren liderar en el mundo digital.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
