import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tecnodespegue.dev"),
  title: {
    default: "TecnoDespegue — Agencia de Desarrollo Web & Consultoría Informática",
    template: "%s | TecnoDespegue",
  },
  description:
    "Agencia especializada en desarrollo web de alto impacto, aplicaciones digitales y consultoría informática. Transformamos ideas en experiencias digitales extraordinarias.",
  keywords: [
    "desarrollo web",
    "agencia digital",
    "consultoría informática",
    "Next.js",
    "React",
    "TypeScript",
    "diseño web",
    "Argentina",
  ],
  authors: [{ name: "TecnoDespegue" }],
  creator: "TecnoDespegue",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://tecnodespegue.dev",
    siteName: "TecnoDespegue",
    title: "TecnoDespegue — Agencia de Desarrollo Web & Consultoría Informática",
    description:
      "Transformamos ideas en experiencias digitales extraordinarias.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TecnoDespegue",
    description: "Agencia de Desarrollo Web & Consultoría Informática",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="noise">
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
