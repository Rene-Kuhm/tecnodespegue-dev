import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Payload inválido" }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Nombre, email y mensaje son requeridos" },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Email inválido" }, { status: 400 });
  }

  // Log en consola (visible en Vercel logs, Railway, etc.)
  console.log("[contact]", {
    name: name.trim(),
    email: email.trim(),
    company: body.company?.trim() || null,
    service: body.service || null,
    budget: body.budget || null,
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  });

  // TODO: integrar con Resend / SendGrid / Nodemailer
  // Ejemplo con Resend:
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "noreply@tecnodespegue.dev",
  //   to: "hola@tecnodespegue.dev",
  //   subject: `Nuevo contacto de ${name}`,
  //   html: `<p>${message}</p>`,
  // });

  return NextResponse.json({ ok: true }, { status: 200 });
}
