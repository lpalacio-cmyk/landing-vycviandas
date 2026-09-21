import type { Metadata, Viewport } from "next";
import { Fraunces, Karla, DM_Mono } from "next/font/google";
import { negocio } from "@/lib/content";
import "./globals.css";

/* Las tres tipografías se auto-hostean en el build: no hay pedido a Google
   en runtime, así que la página carga sin salto de texto. */

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const titulo = `${negocio.nombre} — Viandas caseras en ${negocio.ciudadCorta}`;
const descripcion =
  "Viandas caseras en Catamarca Capital, cocinadas sin aceites ni condimentos fuertes. Plato principal, postre y pan incluidos. Abono mensual, pack semanal o vianda suelta. Retirás por el local o te la llevamos. Pedidos por WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(negocio.dominio),
  title: {
    default: titulo,
    template: `%s — ${negocio.nombre}`,
  },
  description: descripcion,
  keywords: [
    "viandas Catamarca",
    "viandas caseras Catamarca",
    "comida casera Catamarca Capital",
    "viandas a domicilio Catamarca",
    "viandas mensuales",
    "delivery comida casera Catamarca",
    "viandas para empresas Catamarca",
    "comida liviana Catamarca",
    "viandas sin aceite",
    "viandas sin condimentos",
    "comida para dieta blanda Catamarca",
  ],
  authors: [{ name: negocio.nombre }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: negocio.dominio,
    siteName: negocio.nombre,
    title: titulo,
    description: descripcion,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${negocio.nombre} — plato principal, postre y pan`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descripcion,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#141210",
  width: "device-width",
  initialScale: 1,
};

/* Datos estructurados: es lo que hace que Google muestre teléfono, dirección
   y horarios en el resultado de búsqueda. */
const datosEstructurados = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: negocio.nombre,
  description: descripcion,
  url: negocio.dominio,
  telephone: `+${negocio.whatsapp}`,
  servesCuisine: "Comida casera argentina, cocina liviana sin aceites",
  priceRange: "$$",
  currenciesAccepted: "ARS",
  paymentAccepted: "Efectivo, Transferencia bancaria",
  image: `${negocio.dominio}/og.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: negocio.direccion,
    addressLocality: negocio.ciudadCorta,
    addressRegion: negocio.provincia,
    addressCountry: "AR",
  },
  areaServed: {
    "@type": "City",
    name: negocio.ciudad,
  },
  sameAs: [negocio.instagramUrl],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-AR"
      className={`${fraunces.variable} ${karla.variable} ${dmMono.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(datosEstructurados) }}
        />
      </body>
    </html>
  );
}
