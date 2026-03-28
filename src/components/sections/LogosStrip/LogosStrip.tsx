"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface Industry {
  name: string;
  icon: ReactNode;
}

const INDUSTRIES: Industry[] = [
  {
    name: "E-commerce",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    name: "Consultoría",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <path d="M12 12v3" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
  {
    name: "Retail",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: "Tecnología",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
  },
  {
    name: "Servicios",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
        <path d="M17.66 6.34a8 8 0 010 11.32M6.34 6.34a8 8 0 000 11.32" />
      </svg>
    ),
  },
  {
    name: "Gastronomía",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z" />
      </svg>
    ),
  },
  {
    name: "Inmobiliaria",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
        <path d="M9 9h1" /><path d="M9 12h1" /><path d="M9 15h1" />
      </svg>
    ),
  },
  {
    name: "Salud",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    name: "Educación",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
  {
    name: "Fintech",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
];

// Double for infinite scroll
const DOUBLED = [...INDUSTRIES, ...INDUSTRIES];

export function LogosStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      className="relative py-10 overflow-hidden"
      style={{
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        background: "var(--color-bg)",
      }}
    >
      {/* Fade edges */}
      <div
        className="absolute inset-y-0 left-0 w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, var(--color-bg) 0%, transparent 100%)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, var(--color-bg) 0%, transparent 100%)" }}
      />

      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center text-xs font-semibold uppercase tracking-[0.18em] mb-6"
        style={{ color: "var(--color-text-faint)" }}
      >
        Industrias que confían en TecnoDespegue
      </motion.p>

      {/* Scrolling track */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-4 items-center flex-shrink-0"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
        >
          {DOUBLED.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="group flex items-center gap-2.5 px-5 py-2.5 rounded-xl flex-shrink-0 select-none transition-all duration-300 cursor-default"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-muted)",
              }}
            >
              <span style={{ color: "var(--color-primary-light)", opacity: 0.7 }}>
                {item.icon}
              </span>
              <span
                className="font-medium whitespace-nowrap"
                style={{ fontSize: "var(--font-size-sm)" }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
