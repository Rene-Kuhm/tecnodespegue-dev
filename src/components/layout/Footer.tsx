"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const LINKS = {
  servicios: [
    { label: "Desarrollo Web", href: "#servicios" },
    { label: "Apps Móviles", href: "#servicios" },
    { label: "Consultoría IT", href: "#servicios" },
    { label: "UI/UX Design", href: "#servicios" },
  ],
  empresa: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ],
};

const SOCIAL = [
  { label: "GH", href: "https://github.com/Rene-Kuhm", title: "GitHub" },
  { label: "LI", href: "https://linkedin.com/in/rene-kuhm", title: "LinkedIn" },
  { label: "TW", href: "https://twitter.com/ReneKuhm", title: "Twitter/X" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative pt-16 pb-8 overflow-hidden"
      style={{ borderTop: "1px solid var(--color-border)", background: "var(--color-bg)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,111,255,0.06) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="container">
        {/* Main grid — brand ocupa columna completa en mobile, 2 cols en lg */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] mb-12">

          {/* Brand — siempre primera fila completa en mobile */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ background: "var(--gradient-primary)" }}
              >
                TD
              </div>
              <span className="font-bold text-base tracking-tight">
                Tecno<span className="gradient-text">Despegue</span>
              </span>
            </Link>

            <p
              className="text-sm leading-relaxed max-w-[280px] mb-6"
              style={{ color: "var(--color-text-muted)" }}
            >
              Agencia de desarrollo web, consultoría informática y soluciones
              tecnológicas que transforman ideas en realidad digital.
            </p>

            <div className="flex items-center gap-3">
              {SOCIAL.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.title}
                  aria-label={s.title}
                  whileHover={{ y: -2, scale: 1.08 }}
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center text-xs font-bold"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--color-text-faint)" }}
            >
              Servicios
            </h4>
            <ul className="flex flex-col gap-2.5">
              {LINKS.servicios.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--color-text-faint)" }}
            >
              Empresa
            </h4>
            <ul className="flex flex-col gap-2.5">
              {LINKS.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA mini */}
            <div className="mt-6">
              <Link
                href="#contacto"
                className="inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: "var(--color-primary-light)" }}
              >
                Hablemos
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <p className="text-xs text-center sm:text-left" style={{ color: "var(--color-text-faint)" }}>
            © {year} TecnoDespegue. Todos los derechos reservados.
          </p>
          <p className="text-xs" style={{ color: "var(--color-text-faint)" }}>
            Hecho con ❤️ en Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
