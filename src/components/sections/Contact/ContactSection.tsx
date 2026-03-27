"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

const SERVICES_OPTIONS = ["Desarrollo Web", "App Móvil", "Consultoría IT", "UI/UX Design", "E-commerce", "Automatización", "Otro"];
const BUDGET_OPTIONS = ["< $1.000 USD", "$1.000 - $5.000 USD", "$5.000 - $15.000 USD", "$15.000+ USD", "A definir"];

const CONTACT_INFO = [
  { icon: "✉️", label: "Email", value: "hola@tecnodespegue.dev", href: "mailto:hola@tecnodespegue.dev" },
  { icon: "💬", label: "WhatsApp", value: "+54 11 0000-0000", href: "https://wa.me/541100000000" },
  { icon: "📍", label: "Ubicación", value: "Buenos Aires, Argentina", href: "#" },
  { icon: "⏱️", label: "Respuesta", value: "Menos de 24 horas", href: "#" },
];

export function ContactSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", company: "", service: "", budget: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [lastSubmit, setLastSubmit] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limit: 30s between submissions
    const now = Date.now();
    if (now - lastSubmit < 30000) return;

    setSending(true);
    setLastSubmit(now);
    // TODO: Replace with actual API call (POST /api/contact)
    await new Promise((r) => setTimeout(r, 1800));
    setSending(false);
    setSent(true);
  };

  return (
    <section id="contacto" className="section relative overflow-hidden" style={{ background: "var(--color-bg-secondary)" }}>
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,111,255,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="container relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="chip glass mb-5"
            style={{ color: "var(--color-primary-light)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-glow" style={{ background: "var(--color-primary)" }} />
            Contacto
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-bold mb-4"
            style={{ fontSize: "var(--font-size-3xl)" }}
          >
            ¿Listo para <span className="gradient-text">despegar</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-base)" }}
          >
            Contanos tu proyecto y en menos de 24h te respondemos con una propuesta personalizada.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
          {/* Info lateral */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <div className="p-6 rounded-2xl flex flex-col gap-5"
              style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
              <h3 className="text-sm font-bold">Información de contacto</h3>

              <div className="flex flex-col gap-4">
                {CONTACT_INFO.map((info) => (
                  <a key={info.label} href={info.href} className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                      style={{ background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.15)" }}>
                      {info.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-wide mb-0.5" style={{ color: "var(--color-text-faint)" }}>{info.label}</div>
                      <div className="text-sm font-medium transition-colors duration-200 group-hover:text-white truncate"
                        style={{ color: "var(--color-text-muted)" }}>{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/541100000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white text-sm"
                style={{ background: "linear-gradient(135deg, #25d366, #128C7E)", boxShadow: "0 4px 16px rgba(37,211,102,0.25)" }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Escribinos por WhatsApp
              </motion.a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="p-6 md:p-8 rounded-2xl"
              style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl mb-5"
                  >🚀</motion.div>
                  <h3 className="text-xl font-bold mb-2 text-white">¡Mensaje enviado!</h3>
                  <p style={{ color: "var(--color-text-muted)" }}>Te respondemos en menos de 24 horas.</p>
                  <motion.button
                    onClick={() => setSent(false)}
                    whileHover={{ scale: 1.03 }}
                    className="mt-6 text-sm font-medium"
                    style={{ color: "var(--color-primary-light)" }}
                  >
                    Enviar otro mensaje →
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-text-faint)" }}>Nombre *</label>
                      <input type="text" id="contact-name" name="name" required value={formData.name} onChange={handleChange}
                        placeholder="Tu nombre completo" className="input-field" autoComplete="name" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-text-faint)" }}>Email *</label>
                      <input type="email" id="contact-email" name="email" required value={formData.email} onChange={handleChange}
                        placeholder="tu@email.com" className="input-field" autoComplete="email" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-company" className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-text-faint)" }}>Empresa</label>
                      <input type="text" id="contact-company" name="company" value={formData.company} onChange={handleChange}
                        placeholder="Tu empresa (opcional)" className="input-field" autoComplete="organization" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-service" className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-text-faint)" }}>Servicio</label>
                      <select id="contact-service" name="service" value={formData.service} onChange={handleChange} className="input-field">
                        <option value="">Seleccionar...</option>
                        {SERVICES_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-budget" className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-text-faint)" }}>Presupuesto estimado</label>
                    <select id="contact-budget" name="budget" value={formData.budget} onChange={handleChange} className="input-field">
                      <option value="">Seleccionar rango...</option>
                      {BUDGET_OPTIONS.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-text-faint)" }}>Mensaje *</label>
                    <textarea id="contact-message" name="message" required rows={4} value={formData.message} onChange={handleChange}
                      placeholder="Contanos sobre tu proyecto, objetivos y timeline..."
                      className="input-field resize-none" />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={!sending ? { scale: 1.01, y: -1 } : {}}
                    whileTap={!sending ? { scale: 0.98 } : {}}
                    className="btn-primary w-full mt-2"
                    style={{ opacity: sending ? 0.7 : 1, cursor: sending ? "not-allowed" : "pointer" }}
                  >
                    {sending ? (
                      <>
                        <svg className="animate-spin" width="17" height="17" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="40" strokeDashoffset="15" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
