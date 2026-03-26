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
        if (numRef.current) {
          numRef.current.textContent = Math.round(obj.val).toString();
        }
      },
    });
  }, [isInView, stat.value, index]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3, scale: 1.02 }}
      className="p-4 md:p-5 rounded-xl group"
      style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
    >
      <div className="flex items-baseline gap-0.5 mb-1">
        <span ref={numRef} className="text-3xl md:text-4xl font-black gradient-text">0</span>
        <span className="text-xl md:text-2xl font-black gradient-text">{stat.suffix}</span>
      </div>
      <div className="text-sm font-semibold text-white">{stat.label}</div>
      <div className="text-xs mt-0.5" style={{ color: "var(--color-text-faint)" }}>{stat.desc}</div>
    </motion.div>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax visual card
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // Text lines reveal
      if (textRef.current) {
        const lines = textRef.current.querySelectorAll(".reveal-line");
        gsap.fromTo(lines,
          { y: 24, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.75, stagger: 0.15, ease: "power3.out",
            scrollTrigger: { trigger: textRef.current, start: "top 78%", once: true },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="nosotros" className="section overflow-hidden"
      style={{ background: "var(--color-bg)" }}>
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Visual card */}
          <div className="relative order-2 lg:order-1">
            <div ref={imageRef} className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(145deg, #130d2e 0%, #091525 50%, #080608 100%)" }} />

              {/* Orbs flotantes */}
              <div className="absolute top-10 left-10 w-28 h-28 rounded-full animate-float"
                style={{ background: "radial-gradient(circle, rgba(124,111,255,0.35) 0%, transparent 70%)", filter: "blur(24px)" }} />
              <div className="absolute bottom-20 right-10 w-36 h-36 rounded-full animate-float"
                style={{ background: "radial-gradient(circle, rgba(0,229,255,0.25) 0%, transparent 70%)", filter: "blur(28px)", animationDelay: "2.5s" }} />
              <div className="absolute top-1/2 right-1/3 w-20 h-20 rounded-full animate-float"
                style={{ background: "radial-gradient(circle, rgba(255,107,157,0.2) 0%, transparent 70%)", filter: "blur(20px)", animationDelay: "1.2s" }} />

              {/* Anillo orbital */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-52 h-52">
                  <div className="absolute inset-0 rounded-full border-2 animate-spin-slow"
                    style={{ borderColor: "transparent", borderTopColor: "rgba(124,111,255,0.3)", borderRightColor: "rgba(124,111,255,0.1)" }} />
                  <div className="absolute inset-5 rounded-full border animate-spin-slow"
                    style={{ borderColor: "transparent", borderBottomColor: "rgba(0,229,255,0.25)", animationDirection: "reverse", animationDuration: "14s" }} />
                  <div className="absolute inset-10 rounded-full flex items-center justify-center"
                    style={{ background: "var(--gradient-primary)", boxShadow: "var(--glow-primary)" }}>
                    <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                      <path d="M8 20L20 8L32 20L20 32L8 20Z" stroke="white" strokeWidth="2" fill="none" opacity="0.6"/>
                      <circle cx="20" cy="20" r="5" fill="white"/>
                      <path d="M20 8V32M8 20H32" stroke="white" strokeWidth="1.5" opacity="0.3"/>
                    </svg>
                  </div>

                  {/* Puntos orbitales */}
                  {[0, 90, 180, 270].map((deg, i) => (
                    <div key={i} className="absolute w-2.5 h-2.5 rounded-full animate-pulse-glow"
                      style={{
                        background: i % 2 === 0 ? "var(--color-primary)" : "var(--color-secondary)",
                        top: `${50 + 46 * Math.sin((deg * Math.PI) / 180)}%`,
                        left: `${50 + 46 * Math.cos((deg * Math.PI) / 180)}%`,
                        transform: "translate(-50%, -50%)",
                        animationDelay: `${i * 0.5}s`,
                      }} />
                  ))}
                </div>
              </div>

              {/* Tech pills bottom */}
              <div className="absolute bottom-6 left-5 right-5 glass-strong rounded-2xl p-4">
                <div className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--color-text-faint)" }}>
                  Stack principal
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["React", "Next.js", "TypeScript", "Node.js", "AWS", "Docker"].map((tech) => (
                    <span key={tech} className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ background: "rgba(124,111,255,0.15)", color: "var(--color-primary-light)", border: "1px solid rgba(124,111,255,0.2)" }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge exterior */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-5 -right-3 glass-strong rounded-2xl p-4 hidden lg:block"
              style={{ boxShadow: "var(--shadow-elevated)" }}
            >
              <div className="text-2xl font-black gradient-text leading-none">+50</div>
              <div className="text-xs mt-1" style={{ color: "var(--color-text-muted)" }}>Proyectos<br />completados</div>
            </motion.div>

            {/* Segundo badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-4 -left-3 glass-strong rounded-2xl p-4 hidden lg:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: "#6bcb77" }} />
                <span className="text-xs font-semibold text-white">Disponibles</span>
              </div>
              <div className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>para nuevos proyectos</div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div ref={titleRef}>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="chip glass mb-6"
                style={{ color: "var(--color-accent)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-accent)" }} />
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

            <div ref={textRef}>
              <p className="reveal-line text-sm md:text-base leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                Somos un equipo de desarrolladores y diseñadores apasionados por construir
                productos digitales que marcan la diferencia. Combinamos tecnología de
                vanguardia con diseño excepcional.
              </p>
              <p className="reveal-line text-sm md:text-base leading-relaxed mb-8" style={{ color: "var(--color-text-muted)" }}>
                Desde startups hasta empresas consolidadas, entregamos soluciones escalables,
                rápidas y hermosas que superan las expectativas de nuestros clientes.
              </p>
            </div>

            {/* Stats con counters animados */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {STATS.map((stat, i) => <StatCard key={stat.label} stat={stat} index={i} />)}
            </div>

            {/* Tech stack */}
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
                    transition={{ delay: i * 0.035, duration: 0.35 }}
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
