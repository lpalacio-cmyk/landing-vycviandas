/* Iconos de línea, dibujados a mano para que compartan grosor y encaje.
   Heredan el color del contenedor via currentColor. */

type Props = { className?: string };

export function IconoCheck({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 16 16" width="16" height="16"
         fill="none" stroke="currentColor" strokeWidth="1.8"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 8.5 6 12l7.5-8" />
    </svg>
  );
}

export function IconoWhatsapp({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="18" height="18"
         fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.98-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03s.87 2.35.99 2.51c.12.17 1.71 2.61 4.15 3.66.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  );
}

export function IconoInstagram({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="18" height="18"
         fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Bolsa de retiro por el local. */
export function IconoBolsa({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="32" height="32"
         fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6.5 11h19l-1.7 16a2 2 0 0 1-2 1.8H10.2a2 2 0 0 1-2-1.8L6.5 11Z" />
      <path d="M11.5 14V8.5a4.5 4.5 0 0 1 9 0V14" />
    </svg>
  );
}

/** Moto de reparto. */
export function IconoMoto({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="32" height="32"
         fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="7" cy="23" r="4.2" />
      <circle cx="25" cy="23" r="4.2" />
      <path d="M11.2 23h9.6l-4.6-8.4H12" />
      <path d="M16.2 14.6 19 8.5h4.2" />
      <path d="M20.8 23 24 14.4h-4" />
    </svg>
  );
}
