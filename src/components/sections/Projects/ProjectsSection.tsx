"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Project } from "@/types";

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "E-commerce Profesional",
    description:
      "Plataforma de e-commerce completa con catálogo de productos, carrito de compras, pasarela de pagos y panel de administración.",
    image: "",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    url: "https://github.com/Rene-Kuhm/e-commerce-profecional",
    featured: true,
  },
  {
    id: "02",
    title: "Gestión de Reclamos",
    description:
      "Sistema de gestión y seguimiento de reclamos con panel administrativo, notificaciones en tiempo real y reportes.",
    image: "",
    tags: ["Next.js", "TypeScript", "Supabase", "React"],
    url: "https://github.com/Rene-Kuhm/gestion-de-reclamos",
    featured: true,
  },
  {
    id: "03",
    title: "Cospec Ltd",
    description:
      "Sitio web corporativo para empresa de telecomunicaciones con diseño moderno, animaciones y formulario de contacto.",
    image: "",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    url: "https://github.com/Rene-Kuhm/cospec-ltd",
    featured: false,
  },
  {
    id: "04",
    title: "TDP Blog",
    description:
      "Blog personal con CMS headless, artículos en MDX, categorías, búsqueda y diseño optimizado para lectura.",
    image: "",
    tags: ["Astro", "TypeScript", "MDX", "Tailwind"],
    url: "https://github.com/Rene-Kuhm/TDPBlog",
    featured: false,
  },
  {
    id: "05",
    title: "Twitter Clone",
    description:
      "Clon funcional de Twitter con autenticación, timeline en tiempo real, likes, retweets y perfiles de usuario.",
    image: "",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    url: "https://github.com/Rene-Kuhm/twitter-clone",
    featured: true,
  },
  {
    id: "06",
    title: "Spiderman Web",
    description:
      "Landing page visual interactiva con animaciones avanzadas, efectos 3D y diseño inspirado en el universo Spider-Man.",
    image: "",
    tags: ["TypeScript", "GSAP", "Three.js", "CSS"],
    url: "https://github.com/Rene-Kuhm/spiderman-web",
    featured: false,
  },
];

// Colores por índice para el accent de cada card
const ACCENT_COLORS = ["#7c6fff", "#00e5ff", "#ff6b9d", "#ffb347", "#6bcb77", "#c77dff"];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group flex flex-col rounded-2xl p-5"
      style={{
        background: "var(--color-surface)",
        borderTop: `3px solid ${accent}`,
        borderRight: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        borderLeft: "1px solid var(--color-border)",
      }}
    >
      {/* Tags + featured */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-0.5 rounded-full font-medium"
              style={{
                background: `${accent}18`,
                color: accent,
                border: `1px solid ${accent}30`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        {project.featured && (
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
            style={{
              background: "rgba(124,111,255,0.15)",
              color: "var(--color-primary-light)",
              border: "1px solid rgba(124,111,255,0.25)",
            }}
          >
            ✦ Destacado
          </span>
        )}
      </div>

      {/* Título */}
      <h3
        className="font-bold mb-2"
        style={{ color: "var(--color-text)", fontSize: "var(--font-size-lg)" }}
      >
        {project.title}
      </h3>

      {/* Descripción */}
      <p
        className="leading-relaxed mb-4 flex-1"
        style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)" }}
      >
        {project.description}
      </p>

      {/* CTA */}
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 w-fit text-sm font-semibold transition-opacity duration-200 opacity-60 group-hover:opacity-100"
          style={{ color: accent }}
        >
          Ver en GitHub
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      )}
    </motion.div>
  );
}

export function ProjectsSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="proyectos" className="section" style={{ background: "var(--color-bg-secondary)" }}>
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
              Proyectos que <span className="gradient-text">hablan</span> por sí solos
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
