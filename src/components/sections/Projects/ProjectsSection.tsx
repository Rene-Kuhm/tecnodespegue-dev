"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Project } from "@/types";

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "E-commerce Profesional",
    description:
      "Plataforma de e-commerce completa con catálogo de productos, carrito, pasarela de pagos y panel de administración.",
    image: "",
    tags: ["Next.js", "TypeScript", "Stripe"],
    url: "https://github.com/Rene-Kuhm/e-commerce-profecional",
    featured: true,
  },
  {
    id: "02",
    title: "Gestión de Reclamos",
    description:
      "Sistema de gestión y seguimiento de reclamos con panel administrativo, notificaciones y reportes en tiempo real.",
    image: "",
    tags: ["Next.js", "Supabase", "TypeScript"],
    url: "https://github.com/Rene-Kuhm/gestion-de-reclamos",
    featured: true,
  },
  {
    id: "03",
    title: "Cospec Ltd",
    description:
      "Sitio web corporativo para empresa de telecomunicaciones con diseño moderno y animaciones fluidas.",
    image: "",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    url: "https://github.com/Rene-Kuhm/cospec-ltd",
    featured: false,
  },
  {
    id: "04",
    title: "TDP Blog",
    description:
      "Blog personal con CMS headless, artículos en MDX, categorías, búsqueda y diseño optimizado para lectura.",
    image: "",
    tags: ["Astro", "TypeScript", "MDX"],
    url: "https://github.com/Rene-Kuhm/TDPBlog",
    featured: false,
  },
  {
    id: "05",
    title: "Twitter Clone",
    description:
      "Clon funcional de Twitter con autenticación, timeline en tiempo real, likes, retweets y perfiles de usuario.",
    image: "",
    tags: ["Next.js", "Supabase", "TypeScript"],
    url: "https://github.com/Rene-Kuhm/twitter-clone",
    featured: true,
  },
  {
    id: "06",
    title: "Spiderman Web",
    description:
      "Landing page visual interactiva con animaciones avanzadas, efectos 3D y diseño inspirado en Spider-Man.",
    image: "",
    tags: ["TypeScript", "GSAP", "Three.js"],
    url: "https://github.com/Rene-Kuhm/spiderman-web",
    featured: false,
  },
];

const ACCENT_COLORS = ["#7c6fff", "#00e5ff", "#ff6b9d", "#ffb347", "#6bcb77", "#c77dff"];

// Gradientes de fondo únicos por proyecto
const BG_GRADIENTS = [
  "linear-gradient(135deg, #1a1040 0%, #0d1a2e 100%)",
  "linear-gradient(135deg, #0d1f2d 0%, #0a1628 100%)",
  "linear-gradient(135deg, #1f0d1a 0%, #160a25 100%)",
  "linear-gradient(135deg, #1a1a0d 0%, #0d1a0a 100%)",
  "linear-gradient(135deg, #0d2010 0%, #091a1a 100%)",
  "linear-gradient(135deg, #1a0d2e 0%, #0d0d1a 100%)",
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];
  const bg = BG_GRADIENTS[index % BG_GRADIENTS.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, zIndex: 10 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden h-full"
      style={{ border: "1px solid var(--color-border)" }}
    >
      {/* Preview area — mockup visual */}
      <div
        className="relative flex-shrink-0 flex items-center justify-center"
        style={{ background: bg, height: "160px", borderBottom: `1px solid ${accent}22` }}
      >
        {/* Glow radial */}
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse 60% 70% at 50% 50%, ${accent}18 0%, transparent 70%)` }}
        />

        {/* Mockup browser */}
        <div
          className="relative rounded-lg overflow-hidden"
          style={{ width: "72%", background: "rgba(0,0,0,0.5)", border: `1px solid ${accent}30`, boxShadow: `0 8px 32px rgba(0,0,0,0.5)` }}
        >
          {/* Browser bar */}
          <div className="flex items-center gap-1.5 px-3 py-2" style={{ background: "rgba(255,255,255,0.04)", borderBottom: `1px solid ${accent}20` }}>
            <div className="w-2 h-2 rounded-full" style={{ background: "#ff5f57" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "#ffbd2e" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "#28c840" }} />
            <div className="flex-1 mx-2 h-3 rounded" style={{ background: "rgba(255,255,255,0.06)" }} />
          </div>
          {/* Content placeholder */}
          <div className="p-3 space-y-1.5">
            <div className="h-2.5 rounded" style={{ background: `${accent}30`, width: "70%" }} />
            <div className="h-2 rounded" style={{ background: "rgba(255,255,255,0.06)", width: "90%" }} />
            <div className="h-2 rounded" style={{ background: "rgba(255,255,255,0.06)", width: "60%" }} />
          </div>
        </div>

        {/* ID decorativo */}
        <span
          className="absolute top-3 left-4 font-black select-none"
          style={{ color: accent, opacity: 0.15, fontSize: "2rem", lineHeight: 1 }}
        >
          {project.id}
        </span>

        {/* Featured badge */}
        {project.featured && (
          <span
            className="absolute top-3 right-3 text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{ background: `${accent}25`, color: accent, border: `1px solid ${accent}40` }}
          >
            ✦ Destacado
          </span>
        )}
      </div>

      {/* Contenido */}
      <div
        className="flex flex-col flex-1 p-5"
        style={{ background: "var(--color-surface)" }}
      >
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-0.5 rounded-full font-medium"
              style={{ background: "rgba(255,255,255,0.06)", color: "var(--color-text-muted)", border: "1px solid var(--color-border)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Título */}
        <h3
          className="font-bold mb-2"
          style={{ color: "var(--color-text)", fontSize: "var(--font-size-base)" }}
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
            className="flex items-center justify-center gap-1.5 w-full text-sm font-semibold transition-all duration-200 py-2 rounded-lg"
            style={{ color: accent, opacity: 0.7, border: `1px solid ${accent}25`, background: `${accent}08` }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
          >
            Ver en GitHub
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
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
