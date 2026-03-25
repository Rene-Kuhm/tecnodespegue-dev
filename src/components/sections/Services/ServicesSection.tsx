"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Service } from "@/types";

const SERVICES: Service[] = [
  {
    id: "web",
    icon: "🌐",
    title: "Desarrollo Web",
    description:
      "Webs y aplicaciones de alto rendimiento construidas con tecnologías modernas. Next.js, React, TypeScript y arquitecturas escalables.",
    tags: ["Next.js", "React", "TypeScript", "Performance"],
    color: "#6c63ff",
  },
  {
    id: "mobile",
    icon: "📱",
    title: "Apps Móviles",
    description:
      "Aplicaciones nativas y multiplataforma con React Native. Experiencias fluidas para iOS y Android.",
    tags: ["React Native", "iOS", "Android", "Expo"],
    color: "#00d4ff",
  },
  {
    id: "consulting",
    icon: "🧠",
    title: "Consultoría IT",
    description:
      "Asesoramiento estratégico en arquitectura, infraestructura y transformación digital. Optimizamos tus procesos tecnológicos.",
    tags: ["Arquitectura", "Cloud", "DevOps", "Strategy"],
    color: "#ff6b6b",
  },
  {
    id: "design",
    icon: "✨",
    title: "UI/UX Design",
    description:
      "Diseño de interfaces centradas en el usuario. Sistemas de diseño, prototipos y experiencias que convierten.",
    tags: ["Figma", "Design System", "UX Research", "Prototyping"],
    color: "#ffd93d",
  },
  {
    id: "ecommerce",
    icon: "🛒",
    title: "E-commerce",
    description:
      "Tiendas online optimizadas para convertir. Integración con pasarelas de pago, gestión de inventario y logística.",
    tags: ["Shopify", "WooCommerce", "Custom", "Payments"],
    color: "#6bcb77",
  },
  {
    id: "automation",
    icon: "⚡",
    title: "Automatización",
    description:
      "Scripts, bots e integraciones que eliminan el trabajo repetitivo. APIs, webhooks y flujos de trabajo inteligentes.",
    tags: ["APIs", "Bots", "Integrations", "AI"],
    color: "#c77dff",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group relative p-8 rounded-2xl cursor-pointer"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        transition: "border-color 0.3s ease",
      }}
    >
      {/* Hover gradient border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${service.color}15 0%, transparent 60%)`,
        }}
      />
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `0 0 0 1px ${service.color}30`,
        }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6"
        style={{
          background: `${service.color}18`,
          border: `1px solid ${service.color}30`,
        }}
      >
        {service.icon}
      </div>

      {/* Content */}
      <h3
        className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-white"
        style={{ color: "var(--color-text)" }}
      >
        {service.title}
      </h3>
      <p
        className="text-sm leading-relaxed mb-6"
        style={{ color: "var(--color-text-muted)" }}
      >
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full font-medium"
            style={{
              background: `${service.color}15`,
              color: service.color,
              border: `1px solid ${service.color}25`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow on hover */}
      <div
        className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
        style={{ color: service.color }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="section" style={{ background: "var(--color-bg)" }}>
      <div className="container">
        {/* Header */}
        <div ref={titleRef} className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            Lo que hacemos
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-bold mb-4"
            style={{ fontSize: "var(--font-size-3xl)" }}
          >
            Servicios que{" "}
            <span className="gradient-text">impulsan</span> tu negocio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-base)" }}
          >
            Soluciones tecnológicas completas para empresas que quieren liderar
            en el mundo digital.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
