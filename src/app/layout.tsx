import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Archivo_Black, Barlow, Barlow_Condensed, Space_Mono } from "next/font/google";
import "./globals.css";

const siteName = "Design Honex";
const siteUrl = "https://designhonex.com";
const siteDescription =
  "Branding, diseño gráfico y contenido para redes para negocios en Córdoba y remoto. Estrategia visual clara para marcas que quieren destacar. Contactame por WhatsApp.";

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
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Branding, diseño gráfico y redes en Córdoba`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "design",
  keywords: [
    "design honex",
    "diseño gráfico en córdoba",
    "social media en córdoba",
    "branding en córdoba",
    "contenido para redes",
    "community management",
    "diseño gráfico",
    "marketing visual",
    "servicios de diseño",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${siteName} | Branding, diseño gráfico y redes en Córdoba`,
    description: siteDescription,
    url: "/",
    siteName,
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
    title: `${siteName} | Branding, diseño gráfico y redes en Córdoba`,
    description: siteDescription,
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
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
