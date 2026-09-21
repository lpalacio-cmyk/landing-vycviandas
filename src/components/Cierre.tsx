import { IconoInstagram, IconoWhatsapp } from "./Iconos";
import { cierre, negocio } from "@/lib/content";
import { wa, mensajes } from "@/lib/whatsapp";

export function Cierre() {
  return (
    <section className="banda banda--oscura cierre">
      <div className="wrap">
        <p className="eyebrow">{cierre.eyebrow}</p>
        <h2 className="cierre__titulo">{cierre.titulo}</h2>
        <p className="cierre__texto">{cierre.texto}</p>

        <div className="cierre__acciones">
          <a
            className="btn btn--primario"
            href={wa(mensajes.general)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconoWhatsapp />
            {cierre.cta}
          </a>
          <a
            className="btn btn--linea"
            href={negocio.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconoInstagram />
            Ver el plato de hoy
          </a>
        </div>
      </div>
    </section>
  );
}
