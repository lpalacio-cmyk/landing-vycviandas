import Image from "next/image";
import { existeEnPublic } from "@/lib/archivos";

/* El logo real de la marca es un círculo negro con "V&C" en naranja, un
   tenedor-hoja verde y una media luna. Si el archivo está en /public/logo.png
   (o .svg) se usa ese. Si todavía no se subió, se dibuja el monograma de
   abajo, que respeta las mismas formas y colores. */

const ARCHIVOS = ["/logo.svg", "/logo.png", "/logo.webp"];

export function Logo({ size = 38, className }: { size?: number; className?: string }) {
  const real = ARCHIVOS.find((a) => existeEnPublic(a));

  if (real) {
    return (
      <Image
        src={real}
        alt="V&C Viandas Caseras"
        width={size}
        height={size}
        className={className}
        priority
      />
    );
  }

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="V&C Viandas Caseras"
    >
      <circle cx="32" cy="32" r="32" fill="#141210" />
      {/* monograma centrado */}
      <text
        x="32"
        y="37"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="21"
        fontWeight="700"
        fill="#e8862b"
        letterSpacing="-0.5"
      >
        V&amp;C
      </text>
      {/* media luna, como en el logo original */}
      <path
        d="M17 46.5c4.4 4.1 9.6 6.2 15 6.2s10.6-2.1 15-6.2"
        stroke="#e8862b"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
