import { IconoWhatsapp } from "./Iconos";
import { faqs, faqSeccion } from "@/lib/content";
import { wa, mensajes } from "@/lib/whatsapp";

export function Faq() {
  return (
    <section className="banda" id="faq">
      <div className="wrap faq__grid">
        <div>
          <div className="cabecera-seccion" style={{ marginBottom: "2rem" }}>
            <p className="eyebrow">{faqSeccion.eyebrow}</p>
            <h2 className="titulo-seccion">{faqSeccion.titulo}</h2>
          </div>

          <div className="faq__lista">
            {faqs.map((faq) => (
              <details className="faq__item" key={faq.pregunta}>
                <summary>
                  {faq.pregunta}
                  <span className="faq__cruz" aria-hidden="true" />
                </summary>
                <p className="faq__respuesta">{faq.respuesta}</p>
              </details>
            ))}
          </div>
        </div>

        <aside className="faq__aside">
          <p className="eyebrow">Escribinos</p>
          <h3 className="faq__aside-titulo">{faqSeccion.aside.titulo}</h3>
          <p className="faq__aside-texto">{faqSeccion.aside.texto}</p>
          <a
            className="btn btn--oscuro btn--bloque"
            href={wa(mensajes.duda)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconoWhatsapp />
            Preguntar por WhatsApp
          </a>
        </aside>
      </div>
    </section>
  );
}
