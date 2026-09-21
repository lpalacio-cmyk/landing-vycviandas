import { IconoCheck, IconoWhatsapp } from "./Iconos";
import { empresas } from "@/lib/content";
import { wa, mensajes } from "@/lib/whatsapp";

export function Empresas() {
  return (
    <section className="banda banda--hondo" id="empresas">
      <div className="wrap empresas__grid">
        <div>
          <p className="eyebrow">{empresas.eyebrow}</p>
          <h2 className="titulo-seccion">{empresas.titulo}</h2>
          <p className="bajada-seccion">{empresas.texto}</p>

          <p style={{ marginTop: "2rem" }}>
            <a
              className="btn btn--oscuro"
              href={wa(mensajes.empresas)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconoWhatsapp />
              {empresas.cta}
            </a>
          </p>
        </div>

        <ul className="empresas__lista">
          {empresas.incluye.map((item) => (
            <li className="empresas__item" key={item}>
              <IconoCheck />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
