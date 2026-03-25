"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const LINKS = {
  servicios: [
    { label: "Desarrollo Web", href: "#servicios" },
    { label: "Aplicaciones Móviles", href: "#servicios" },
    { label: "Consultoría IT", href: "#servicios" },
    { label: "UI/UX Design", href: "#servicios" },
  ],
  empresa: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "#contacto" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative pt-20 pb-10 overflow-hidden"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      {/* Glow background */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ background: "var(--color-primary)" }}
      />

      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{ background: "var(--gradient-primary)" }}
              >
                TD
              </div>
              <span className="font-bold text-lg tracking-tight">
                Tecno<span className="gradient-text">Despegue</span>
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--color-text-muted)" }}
            >
              Transformamos ideas en experiencias digitales extraordinarias.
              Desarrollo web, consultoría y soluciones tecnológicas de alto impacto.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              {["github", "linkedin", "twitter"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -2, scale: 1.1 }}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-xs font-bold uppercase"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {social[0].toUpperCase()}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--color-text-faint)" }}
            >
              Servicios
            </h4>
            <ul className="flex flex-col gap-2">
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
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--color-text-faint)" }}
            >
              Empresa
            </h4>
            <ul className="flex flex-col gap-2">
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
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-text-faint)" }}>
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
