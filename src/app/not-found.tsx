import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="font-black gradient-text mb-4" style={{ fontSize: "clamp(4rem, 15vw, 10rem)", lineHeight: 1 }}>
        404
      </div>
      <h1 className="text-xl font-bold mb-3" style={{ color: "var(--color-text)" }}>
        Página no encontrada
      </h1>
      <p className="mb-8 max-w-md" style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-base)" }}>
        La página que buscás no existe o fue movida. Volvé al inicio para encontrar lo que necesitás.
      </p>
      <Link href="/" className="btn-primary">
        Volver al inicio
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
