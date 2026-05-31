import type { Metadata } from "next";
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
  title: "Honex Design | Social Media y Diseño Digital",
  description:
    "Landing page de Honex Design: branding, social media, contenido y estrategia digital.",
  openGraph: {
    title: "Honex Design | Social Media y Diseño Digital",
    description:
      "Branding, social media, contenido y estrategia digital para marcas que necesitan comunicar mejor.",
    url: "/",
    siteName: "Honex Design",
    images: [
      {
        url: "/logo-designhonex.webp",
        width: 370,
        height: 584,
        alt: "Honex Design",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Honex Design | Social Media y Diseño Digital",
    description:
      "Branding, social media, contenido y estrategia digital para marcas que necesitan comunicar mejor.",
    images: ["/logo-designhonex.webp"],
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
