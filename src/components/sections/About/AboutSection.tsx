"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "50+", label: "Proyectos", desc: "entregados con éxito" },
  { value: "30+", label: "Clientes", desc: "en Argentina y el mundo" },
  { value: "5+", label: "Años", desc: "de experiencia en tech" },
  { value: "99%", label: "Satisfacción", desc: "cliente garantizada" },
];

const TECHNOLOGIES = [
  "React", "Next.js", "TypeScript", "Node.js",
  "PostgreSQL", "MongoDB", "AWS", "Docker",
  "React Native", "GraphQL", "Tailwind", "Figma",
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax en el elemento decorativo
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      // Reveal del texto línea a línea
      if (textRef.current) {
        const lines = textRef.current.querySelectorAll(".reveal-line");
        gsap.fromTo(
          lines,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className="section overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* Left — Visual decorativo */}
          <div className="relative order-2 lg:order-1">
            <div
              ref={imageRef}
              className="relative rounded-3xl overflow-hidden"
              style={{ aspectRatio: "4/5" }}
            >
              {/* Fondo gradiente */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, #1a1040 0%, #0a1a2e 50%, #0a0a0a 100%)",
                }}
              />

              {/* Elementos decorativos flotantes */}
              <div
                className="absolute top-12 left-12 w-24 h-24 rounded-full animate-float"
                style={{
                  background: "radial-gradient(circle, rgba(108,99,255,0.4) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
              <div
                className="absolute bottom-16 right-12 w-32 h-32 rounded-full animate-float"
                style={{
                  background: "radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%)",
                  filter: "blur(24px)",
                  animationDelay: "2s",
                }}
              />

              {/* Tech stack pill */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  {/* Anillos orbitales */}
                  <div
                    className="absolute inset-0 rounded-full border animate-spin-slow"
                    style={{ borderColor: "rgba(108,99,255,0.2)" }}
                  />
                  <div
                    className="absolute inset-4 rounded-full border animate-spin-slow"
                    style={{
                      borderColor: "rgba(0,212,255,0.15)",
                      animationDirection: "reverse",
                      animationDuration: "15s",
                    }}
                  />
                  <div
                    className="absolute inset-8 rounded-full flex items-center justify-center"
                    style={{
                      background: "var(--gradient-primary)",
                      boxShadow: "var(--glow-primary)",
                    }}
                  >
                    <span className="text-white font-black text-2xl">TD</span>
                  </div>
                </div>
              </div>

              {/* Tarjeta flotante — stats */}
              <div
                className="absolute bottom-8 left-8 right-8 glass rounded-2xl p-5"
              >
                <div className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--color-text-faint)" }}>
                  Tech stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Node.js", "AWS"].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        background: "rgba(108,99,255,0.15)",
                        color: "var(--color-primary-light)",
                        border: "1px solid rgba(108,99,255,0.2)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tarjeta flotante exterior */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-4 -right-4 glass rounded-2xl p-4 hidden lg:block"
            >
              <div className="text-2xl font-black gradient-text">+50</div>
              <div className="text-xs mt-1" style={{ color: "var(--color-text-muted)" }}>
                Proyectos<br />completados
              </div>
            </motion.div>
          </div>

          {/* Right — Content */}
          <div className="order-1 lg:order-2">
            <div ref={titleRef}>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-6"
                style={{ color: "var(--color-accent)" }}
              >
                Quiénes somos
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-bold mb-6"
                style={{ fontSize: "var(--font-size-3xl)" }}
              >
                Pasión por el{" "}
                <span className="gradient-text">código</span> y el diseño
              </motion.h2>
            </div>

            <div ref={textRef}>
              <p
                className="reveal-line text-base leading-relaxed mb-4"
                style={{ color: "var(--color-text-muted)" }}
              >
                Somos un equipo de desarrolladores y diseñadores apasionados por
                construir productos digitales que marcan la diferencia. Combinamos
                tecnología de vanguardia con diseño excepcional.
              </p>
              <p
                className="reveal-line text-base leading-relaxed mb-8"
                style={{ color: "var(--color-text-muted)" }}
              >
                Desde startups hasta empresas consolidadas, entregamos soluciones
                escalables, rápidas y hermosas que superan las expectativas de
                nuestros clientes.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="p-4 md:p-5 rounded-xl"
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div
                    className="text-3xl font-black gradient-text mb-1"
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-white">{stat.label}</div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--color-text-faint)" }}>
                    {stat.desc}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technologies */}
            <div>
              <div
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: "var(--color-text-faint)" }}
              >
                Tecnologías que dominamos
              </div>
              <div className="flex flex-wrap gap-2">
                {TECHNOLOGIES.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    className="text-xs px-3 py-1.5 rounded-full font-medium glass"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {tech}
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
