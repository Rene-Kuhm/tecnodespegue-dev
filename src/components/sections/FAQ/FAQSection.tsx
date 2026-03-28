"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/contact";

const FAQS = [
  {
    q: "¿Cuánto cuesta realmente hacer una web profesional?",
    a: "Una landing de conversión bien hecha arranca en $1.500 USD. Una web profesional completa está en $3.500 USD. Para proyectos con e-commerce o plataforma a medida, el precio parte de $7.000 USD. Siempre precio cerrado: ningún extra sorpresa.",
  },
  {
    q: "¿En cuánto tiempo tienen lista mi web?",
    a: "Una landing: 15 días. Una web profesional: 4 semanas. Una plataforma compleja: 6 a 10 semanas. Plazos reales, no estimaciones optimistas. Empezamos cuando vos confirmás el proyecto.",
  },
  {
    q: "¿Puedo pedir cambios una vez que entreguen?",
    a: "Sí. Cada paquete incluye rondas de revisión definidas. Antes de codear acordamos todo el diseño, así los cambios en producción son mínimos y específicos.",
  },
  {
    q: "¿Qué pasa si no tengo textos ni fotos para mi web?",
    a: "Lo resolvemos. Tenemos un proceso de onboarding estructurado para extraer la información de tu negocio. Para fotos, recomendamos opciones según presupuesto. No es un bloqueante.",
  },
  {
    q: "¿Puedo actualizar el contenido yo mismo?",
    a: "Sí. Para sitios que requieren edición frecuente, incluimos un CMS simple donde vos —o alguien de tu equipo— podés actualizar textos e imágenes sin tocar código.",
  },
];

function FAQItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-start justify-between gap-6 py-8 md:py-9"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        <span
          className="font-semibold leading-snug"
          style={{ fontSize: "var(--font-size-base)", color: "var(--color-text)" }}
        >
          {faq.q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: open ? "var(--gradient-primary)" : "var(--color-surface-2)",
            color: open ? "white" : "var(--color-text-muted)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p
              className="pt-5 pb-7 leading-relaxed"
              style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)" }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section className="section" style={{ background: "var(--color-bg)" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div ref={titleRef} className="lg:col-span-2 lg:sticky lg:top-28">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="label mb-5"
            >
              <span className="w-4 h-px" style={{ background: "var(--color-primary)" }} />
              FAQ
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5"
              style={{ fontSize: "var(--font-size-2xl)" }}
            >
              Todo lo que querés saber{" "}
              <span className="gradient-text">antes de invertir</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
              style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)", lineHeight: 1.8 }}
            >
              Si tu pregunta no está acá, hablamos directamente.
            </motion.p>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="btn-outline inline-flex"
              style={{ borderColor: "rgba(37,211,102,0.3)", color: "#25D366" }}
            >
              Hacer una consulta
            </motion.a>
          </div>

          {/* Right */}
          <div className="lg:col-span-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
