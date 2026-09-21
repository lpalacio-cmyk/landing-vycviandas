import { IconoWhatsapp } from "./Iconos";
import { wa, mensajes } from "@/lib/whatsapp";

/** Botón fijo. En mobile queda sólo el ícono para no tapar contenido. */
export function BotonWhatsapp() {
  return (
    <a
      className="wa"
      href={wa(mensajes.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir por WhatsApp"
    >
      <IconoWhatsapp />
      <span className="wa__texto">Pedir por WhatsApp</span>
    </a>
  );
}
