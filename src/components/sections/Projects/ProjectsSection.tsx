"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
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
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        aspectRatio: "16/9",
        minHeight: "200px",
      }}
    >
      {/* Imagen placeholder con gradiente */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, 
            hsl(${(index * 60) % 360}, 60%, 15%) 0%, 
            hsl(${(index * 60 + 120) % 360}, 50%, 10%) 100%)`,
        }}
      />

      {/* Pattern decorativo */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(108, 99, 255, 0.4) 0%, transparent 40%),
                            radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.3) 0%, transparent 40%)`,
        }}
      />

      {/* Número del proyecto */}
      <div
        className="absolute top-4 left-5 text-4xl font-black opacity-10 select-none"
        style={{ color: "white", lineHeight: 1 }}
      >
        {project.id}
      </div>

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4">
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

      {/* Overlay on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
            style={{
              background: "rgba(8, 8, 8, 0.85)",
              backdropFilter: "blur(4px)",
            }}
          />
        )}
      </AnimatePresence>

      {/* Gradient bottom para legibilidad */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(6,6,8,0.95) 0%, transparent 100%)" }} />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <motion.div
          animate={{ y: hovered ? -6 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.55)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-base md:text-lg font-bold text-white mb-1 leading-tight">{project.title}</h3>

          <AnimatePresence>
            {hovered && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {project.description}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* CTA hover */}
        <AnimatePresence>
          {hovered && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="mt-4 flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--color-primary-light)" }}
            >
              Ver proyecto
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
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
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
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
