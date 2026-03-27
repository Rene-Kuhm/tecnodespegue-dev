"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 50, suffix: "+", label: "Proyectos", desc: "entregados con éxito" },
  { value: 30, suffix: "+", label: "Clientes", desc: "en Argentina y el mundo" },
  { value: 5,  suffix: "+", label: "Años", desc: "de experiencia en tech" },
  { value: 99, suffix: "%", label: "Satisfacción", desc: "cliente garantizada" },
];

const TECHNOLOGIES = [
  { name: "React", color: "#61dafb" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "Node.js", color: "#68a063" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "MongoDB", color: "#47a248" },
  { name: "AWS", color: "#ff9900" },
  { name: "Docker", color: "#2496ed" },
  { name: "React Native", color: "#61dafb" },
  { name: "GraphQL", color: "#e10098" },
  { name: "Tailwind", color: "#06b6d4" },
  { name: "Figma", color: "#f24e1e" },
];

function StatCard({ stat, index }: { stat: typeof STATS[0]; index: number }) {
  const numRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || !numRef.current) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: stat.value,
      duration: 1.8,
      delay: index * 0.12,
      ease: "power2.out",
      onUpdate: () => {
        if (numRef.current) numRef.current.textContent = Math.round(obj.val).toString();
      },
    });
  }, [isInView, stat.value, index]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="p-4 rounded-xl"
      style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
    >
      <div className="flex items-baseline gap-0.5 mb-1">
        <span ref={numRef} className="font-black gradient-text" style={{ fontSize: "var(--font-size-2xl)" }}>0</span>
        <span className="font-black gradient-text" style={{ fontSize: "var(--font-size-xl)" }}>{stat.suffix}</span>
      </div>
      <div className="font-semibold" style={{ color: "var(--color-text)", fontSize: "var(--font-size-sm)" }}>{stat.label}</div>
      <div className="mt-0.5" style={{ color: "var(--color-text-faint)", fontSize: "var(--font-size-xs)" }}>{stat.desc}</div>
    </motion.div>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="nosotros" className="section" style={{ background: "var(--color-bg)" }}>
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Lado visual ── */}
          <div className="order-2 lg:order-1 flex flex-col gap-5">

            {/* Card principal — mockup terminal/code */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--color-border)" }}
            >
              {/* Barra superior estilo IDE */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid var(--color-border)" }}
              >
                <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
                <span className="ml-2 text-xs font-mono" style={{ color: "var(--color-text-faint)" }}>about.ts</span>
              </div>

              {/* Contenido código simulado */}
              <div className="p-4 sm:p-6 font-mono leading-7 sm:leading-8 overflow-x-auto" style={{ background: "var(--color-surface)", fontSize: "clamp(0.7rem, 2vw, 0.8rem)" }}>
                <p><span style={{ color: "#c77dff" }}>const</span> <span style={{ color: "#00e5ff" }}>agency</span> <span style={{ color: "var(--color-text-muted)" }}>=</span> <span style={{ color: "#ffb347" }}>{"{"}</span></p>
                <p className="pl-6"><span style={{ color: "#7c6fff" }}>nombre</span><span style={{ color: "var(--color-text-muted)" }}>:</span> <span style={{ color: "#6bcb77" }}>&quot;TecnoDespegue&quot;</span><span style={{ color: "var(--color-text-muted)" }}>,</span></p>
                <p className="pl-6"><span style={{ color: "#7c6fff" }}>ubicacion</span><span style={{ color: "var(--color-text-muted)" }}>:</span> <span style={{ color: "#6bcb77" }}>&quot;Buenos Aires, AR&quot;</span><span style={{ color: "var(--color-text-muted)" }}>,</span></p>
                <p className="pl-6"><span style={{ color: "#7c6fff" }}>proyectos</span><span style={{ color: "var(--color-text-muted)" }}>:</span> <span style={{ color: "#ff6b9d" }}>50</span><span style={{ color: "var(--color-text-muted)" }}>,</span></p>
                <p className="pl-6"><span style={{ color: "#7c6fff" }}>disponible</span><span style={{ color: "var(--color-text-muted)" }}>:</span> <span style={{ color: "#6bcb77" }}>true</span><span style={{ color: "var(--color-text-muted)" }}>,</span></p>
                <p className="pl-6">
                  <span style={{ color: "#7c6fff" }}>stack</span><span style={{ color: "var(--color-text-muted)" }}>:</span>{" "}
                  <span style={{ color: "#ffb347" }}>[</span>
                  <span style={{ color: "#6bcb77" }}>&quot;Next.js&quot;</span>
                  <span style={{ color: "var(--color-text-muted)" }}>, </span>
                  <span style={{ color: "#6bcb77" }}>&quot;TypeScript&quot;</span>
                  <span style={{ color: "var(--color-text-muted)" }}>, </span>
                  <span style={{ color: "#6bcb77" }}>&quot;Node.js&quot;</span>
                  <span style={{ color: "#ffb347" }}>]</span>
                  <span style={{ color: "var(--color-text-muted)" }}>,</span>
                </p>
                <p><span style={{ color: "#ffb347" }}>{"}"}</span></p>
                <p className="mt-2" style={{ color: "rgba(240,240,245,0.25)" }}>{"// listos para tu próximo proyecto 🚀"}</p>
              </div>
            </motion.div>

            {/* Row de mini-badges */}
            <div className="grid grid-cols-2 gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col gap-1 p-4 rounded-xl"
                style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
              >
                <span className="font-black gradient-text" style={{ fontSize: "var(--font-size-2xl)", lineHeight: 1 }}>50+</span>
                <span className="font-semibold text-sm" style={{ color: "var(--color-text)" }}>Proyectos</span>
                <span className="text-xs" style={{ color: "var(--color-text-faint)" }}>completados</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col gap-1 p-4 rounded-xl"
                style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <div className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse-glow" style={{ background: "#6bcb77" }} />
                  <span className="text-xs font-semibold" style={{ color: "#6bcb77" }}>Online</span>
                </div>
                <span className="font-semibold text-sm" style={{ color: "var(--color-text)" }}>Disponibles</span>
                <span className="text-xs" style={{ color: "var(--color-text-faint)" }}>para nuevos proyectos</span>
              </motion.div>
            </div>

            {/* Stack de tecnologías */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="p-5 rounded-xl"
              style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
            >
              <div className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--color-text-faint)" }}>
                Stack principal
              </div>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Node.js", "AWS", "Docker"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{ background: "rgba(124,111,255,0.12)", color: "var(--color-primary-light)", border: "1px solid rgba(124,111,255,0.2)" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Lado texto ── */}
          <div className="order-1 lg:order-2">
            <div ref={titleRef}>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="chip glass mb-6"
                style={{ color: "var(--color-accent)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-accent)" }} />
                Quiénes somos
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-bold mb-5"
                style={{ fontSize: "var(--font-size-3xl)" }}
              >
                Pasión por el <span className="gradient-text">código</span> y el diseño
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="leading-relaxed mb-4"
              style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-base)" }}
            >
              Somos un equipo de desarrolladores y diseñadores apasionados por construir
              productos digitales que marcan la diferencia. Combinamos tecnología de
              vanguardia con diseño excepcional.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="leading-relaxed mb-10"
              style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-base)" }}
            >
              Desde startups hasta empresas consolidadas, entregamos soluciones escalables,
              rápidas y hermosas que superan las expectativas de nuestros clientes.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {STATS.map((stat, i) => <StatCard key={stat.label} stat={stat} index={i} />)}
            </div>

            {/* Tech stack completo */}
            <div>
              <div className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--color-text-faint)" }}>
                Tecnologías que dominamos
              </div>
              <div className="flex flex-wrap gap-2">
                {TECHNOLOGIES.map((tech, i) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03, duration: 0.3 }}
                    className="text-xs px-3 py-1.5 rounded-full font-medium glass cursor-default"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
