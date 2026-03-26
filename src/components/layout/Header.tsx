"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import type { NavItem } from "@/types";

gsap.registerPlugin(ScrollTrigger);

const NAV_ITEMS: NavItem[] = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // Entrada inicial
    gsap.fromTo(
      header,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );

    // Scroll state
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: "inset(0% 0% 100% 0%)",
      transition: { duration: 0.5, ease: EASE },
    },
    open: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 0.6, ease: EASE },
    },
  };

  const itemVariants = {
    closed: { y: 20, opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.1 + i * 0.07, duration: 0.5, ease: EASE },
    }),
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 opacity-0"
      style={{
        background: scrolled
          ? "rgba(8, 8, 8, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "none",
        transition: "background 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease",
      }}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm"
              style={{ background: "var(--gradient-primary)" }}
            >
              TD
            </div>
            <span
              className="font-bold text-lg tracking-tight"
              style={{ color: "var(--color-text)" }}
            >
              Tecno<span className="gradient-text">Despegue</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium relative group"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  <span className="transition-colors duration-200 group-hover:text-white">
                    {item.label}
                  </span>
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ background: "var(--gradient-primary)" }}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link href="#contacto" className="btn-primary">
              Hablemos
            </Link>
          </div>

          {/* Hamburger mobile */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="w-6 h-0.5 block transition-all duration-300"
              style={{
                background: "var(--color-text)",
                transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              }}
            />
            <span
              className="w-6 h-0.5 block transition-all duration-300"
              style={{
                background: "var(--color-text)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="w-6 h-0.5 block transition-all duration-300"
              style={{
                background: "var(--color-text)",
                transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
              }}
            />
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden absolute top-full left-0 right-0"
            style={{
              background: "rgba(8, 8, 8, 0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            <div className="container py-8">
              <ul className="flex flex-col gap-4">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.href}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      href={item.href}
                      className="text-2xl font-bold"
                      style={{ color: "var(--color-text)" }}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  custom={NAV_ITEMS.length}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="mt-4"
                >
                  <Link
                    href="#contacto"
                    className="inline-block px-6 py-3 rounded-full text-white font-semibold"
                    style={{ background: "var(--gradient-primary)" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    Hablemos
                  </Link>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
