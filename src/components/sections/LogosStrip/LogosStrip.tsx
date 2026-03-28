"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Logos representativos de industrias/clientes servidos
// En producción, reemplazar por logos reales con permiso del cliente
const LOGOS = [
  { name: "E-commerce", icon: "🛒" },
  { name: "Consultoras", icon: "💼" },
  { name: "Retail", icon: "🏪" },
  { name: "Tecnología", icon: "💻" },
  { name: "Servicios", icon: "⚙️" },
  { name: "Gastronomía", icon: "🍽️" },
  { name: "Inmobiliarias", icon: "🏢" },
  { name: "Salud", icon: "🏥" },
];

// Duplicamos para el scroll infinito
const LOGOS_DOUBLED = [...LOGOS, ...LOGOS];

export function LogosStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      className="relative py-10 overflow-hidden"
      style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}
    >
      {/* Fade edges */}
      <div
        className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, var(--color-bg) 0%, transparent 100%)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, var(--color-bg) 0%, transparent 100%)" }}
      />

      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center text-xs font-semibold uppercase tracking-widest mb-6"
        style={{ color: "var(--color-text-faint)" }}
      >
        Industrias que ya confían en TecnoDespegue
      </motion.p>

      {/* Scrolling track */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-10 items-center flex-shrink-0"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {LOGOS_DOUBLED.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl flex-shrink-0 select-none"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--color-border)",
                opacity: 0.7,
              }}
            >
              <span style={{ fontSize: "1.25rem" }}>{logo.icon}</span>
              <span
                className="font-medium whitespace-nowrap"
                style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)" }}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
