import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Archivo_Black, Barlow, Barlow_Condensed, Space_Mono } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://designhonex.com"),
  title: "Design Honex | Social Media, Branding y Diseño en Córdoba",
  description:
    "Social media, branding, diseño gráfico y contenido para negocios en Córdoba y remoto. Estrategia + diseño con criterio. Contactame por WhatsApp.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Design Honex | Social Media, Branding y Diseño en Córdoba",
    description:
      "Social media, branding, diseño gráfico y contenido para negocios en Córdoba y remoto. Estrategia + diseño con criterio. Contactame por WhatsApp.",
    url: "/",
    siteName: "Design Honex",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Design Honex — Social media, branding y diseño en Córdoba",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Honex | Social Media, Branding y Diseño en Córdoba",
    description:
      "Social media, branding, diseño gráfico y contenido para negocios en Córdoba y remoto. Estrategia + diseño con criterio. Contactame por WhatsApp.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${archivoBlack.variable} ${barlow.variable} ${barlowCondensed.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}<Analytics/></body>
    </html>
  );
}
