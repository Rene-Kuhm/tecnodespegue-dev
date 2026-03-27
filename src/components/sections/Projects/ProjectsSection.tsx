"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Project } from "@/types";

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "E-commerce Premium",
    description:
      "Plataforma de e-commerce con +10.000 productos, integración con MercadoPago y panel de administración custom.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "MercadoPago", "PostgreSQL"],
    featured: true,
  },
  {
    id: "02",
    title: "Dashboard Analytics",
    description:
      "Panel de analíticas en tiempo real con visualizaciones avanzadas, reportes automatizados y alertas inteligentes.",
    image: "/projects/dashboard.jpg",
    tags: ["React", "D3.js", "WebSockets", "Node.js"],
    featured: true,
  },
  {
    id: "03",
    title: "App Fintech",
    description:
      "Aplicación móvil para gestión financiera personal con IA integrada para análisis predictivo de gastos.",
    image: "/projects/fintech.jpg",
    tags: ["React Native", "AI", "Node.js", "MongoDB"],
    featured: false,
  },
  {
    id: "04",
    title: "Portal Corporativo",
    description:
      "Web institucional con CMS headless, multiidioma y optimización SEO avanzada para empresa multinacional.",
    image: "/projects/corporate.jpg",
    tags: ["Next.js", "Sanity", "i18n", "SEO"],
    featured: false,
  },
  {
    id: "05",
    title: "SaaS B2B",
    description:
      "Plataforma SaaS de gestión de proyectos con colaboración en tiempo real, facturación y onboarding automatizado.",
    image: "/projects/saas.jpg",
    tags: ["React", "Supabase", "Stripe", "TypeScript"],
    featured: true,
  },
  {
    id: "06",
    title: "Marketplace NFT",
    description:
      "Marketplace de NFTs con wallet integration, sistema de subastas y galería 3D interactiva.",
    image: "/projects/nft.jpg",
    tags: ["Next.js", "Web3", "Three.js", "Solidity"],
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        minHeight: "280px",
      }}
    >
      {/* Fondo con gradiente de color único por proyecto */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg,
            hsl(${(index * 60) % 360}, 60%, 12%) 0%,
            hsl(${(index * 60 + 120) % 360}, 50%, 8%) 100%)`,
        }}
      />

      {/* Pattern decorativo */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(108, 99, 255, 0.35) 0%, transparent 45%),
                            radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.25) 0%, transparent 45%)`,
        }}
      />

      {/* Número del proyecto */}
      <div
        className="absolute top-4 left-5 font-black select-none"
        style={{ color: "white", opacity: 0.08, fontSize: "3.5rem", lineHeight: 1 }}
      >
        {project.id}
      </div>

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(124, 111, 255, 0.25)",
              color: "var(--color-primary-light)",
              border: "1px solid rgba(124, 111, 255, 0.3)",
              backdropFilter: "blur(8px)",
            }}
          >
            ✦ Destacado
          </span>
        </div>
      )}

      {/* Gradient overlay para legibilidad del contenido */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(6,6,8,0.97) 0%, rgba(6,6,8,0.3) 55%, transparent 100%)" }}
      />

      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1px rgba(124,111,255,0.25)" }}
      />

      {/* Contenido — siempre visible, crece al fondo */}
      <div className="relative z-10 flex flex-col justify-end flex-1 p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Título */}
        <h3
          className="font-bold text-white mb-2 leading-tight"
          style={{ fontSize: "var(--font-size-base)" }}
        >
          {project.title}
        </h3>

        {/* Descripción — siempre visible */}
        <p
          className="leading-relaxed mb-4"
          style={{ color: "rgba(255,255,255,0.55)", fontSize: "var(--font-size-sm)" }}
        >
          {project.description}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span
            className="text-sm font-semibold"
            style={{ color: "var(--color-primary-light)" }}
          >
            Ver proyecto
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            style={{ color: "var(--color-primary-light)" }}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section
      id="proyectos"
      className="section"
      style={{ background: "var(--color-bg-secondary)" }}
    >
      <div className="container">
        {/* Header */}
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--color-secondary)" }}
            >
              Nuestro trabajo
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-bold"
              style={{ fontSize: "var(--font-size-3xl)" }}
            >
              Proyectos que{" "}
              <span className="gradient-text">hablan</span> por sí solos
            </motion.h2>
          </div>

          <motion.a
            href="#contacto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ x: 4 }}
            className="flex items-center gap-2 text-sm font-medium flex-shrink-0"
            style={{ color: "var(--color-text-muted)" }}
          >
            Ver todos los proyectos
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className={project.featured && index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
