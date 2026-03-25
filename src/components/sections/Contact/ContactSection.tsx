"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const SERVICES_OPTIONS = [
  "Desarrollo Web",
  "App Móvil",
  "Consultoría IT",
  "UI/UX Design",
  "E-commerce",
  "Otro",
];

const CONTACT_INFO = [
  {
    icon: "✉️",
    label: "Email",
    value: "hola@tecnodespegue.dev",
    href: "mailto:hola@tecnodespegue.dev",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+54 11 0000-0000",
    href: "https://wa.me/541100000000",
  },
  {
    icon: "📍",
    label: "Ubicación",
    value: "Buenos Aires, Argentina",
    href: "#",
  },
];

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulación de envío
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
  };

  const inputStyles = {
    background: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    color: "var(--color-text)",
    borderRadius: "var(--radius-lg)",
    fontSize: "var(--font-size-sm)",
  };

  const labelStyles = {
    fontSize: "var(--font-size-xs)",
    color: "var(--color-text-muted)",
    fontWeight: 500,
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
  };

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="section relative overflow-hidden"
      style={{ background: "var(--color-bg-secondary)" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[150px] opacity-8 pointer-events-none"
        style={{ background: "var(--color-primary)" }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            Contacto
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-bold mb-4"
            style={{ fontSize: "var(--font-size-3xl)" }}
          >
            ¿Listo para{" "}
            <span className="gradient-text">despegar</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-base)" }}
          >
            Contanos tu proyecto y en menos de 24 horas te respondemos con una
            propuesta personalizada.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div
              className="p-8 rounded-2xl flex-1"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <h3 className="text-lg font-bold mb-6">Información de contacto</h3>

              <div className="flex flex-col gap-6">
                {CONTACT_INFO.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{
                        background: "rgba(108,99,255,0.1)",
                        border: "1px solid rgba(108,99,255,0.2)",
                      }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: "var(--color-text-faint)" }}>
                        {info.label}
                      </div>
                      <div
                        className="text-sm font-medium group-hover:text-white transition-colors duration-200"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* CTA WhatsApp */}
              <motion.a
                href="https://wa.me/541100000000"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 w-full flex items-center justify-center gap-3 py-3.5 rounded-xl font-semibold text-white text-sm"
                style={{ background: "#25d366" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escribinos por WhatsApp
              </motion.a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div
              className="p-8 rounded-2xl h-full"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold mb-2">¡Mensaje enviado!</h3>
                  <p style={{ color: "var(--color-text-muted)" }}>
                    Te respondemos en menos de 24 horas.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label style={labelStyles}>Nombre *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className="px-4 py-3 w-full outline-none transition-colors duration-200 focus:border-purple-500"
                        style={inputStyles}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label style={labelStyles}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className="px-4 py-3 w-full outline-none transition-colors duration-200 focus:border-purple-500"
                        style={inputStyles}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label style={labelStyles}>Empresa</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Tu empresa (opcional)"
                        className="px-4 py-3 w-full outline-none transition-colors duration-200"
                        style={inputStyles}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label style={labelStyles}>Servicio</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="px-4 py-3 w-full outline-none transition-colors duration-200 cursor-pointer"
                        style={inputStyles}
                      >
                        <option value="">Seleccionar...</option>
                        {SERVICES_OPTIONS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label style={labelStyles}>Mensaje *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Contanos sobre tu proyecto..."
                      className="px-4 py-3 w-full outline-none transition-colors duration-200 resize-none"
                      style={inputStyles}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 mt-2"
                    style={{
                      background: sending ? "rgba(108,99,255,0.5)" : "var(--gradient-primary)",
                      cursor: sending ? "not-allowed" : "pointer",
                    }}
                  >
                    {sending ? (
                      <>
                        <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="30" strokeDashoffset="10" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
