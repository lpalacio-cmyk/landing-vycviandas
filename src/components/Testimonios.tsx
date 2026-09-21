import { testimonios } from "@/lib/content";

/* La sección no se renderiza mientras no haya testimonios reales cargados.
   Ver la nota en content.ts: no se inventan reseñas. */

export function Testimonios() {
  if (testimonios.length === 0) return null;

  return (
    <section className="banda banda--hondo">
      <div className="wrap">
        <div className="cabecera-seccion">
          <p className="eyebrow">Lo que dicen</p>
          <h2 className="titulo-seccion">Clientas y clientes que ya no cocinan al mediodía</h2>
        </div>

        <ul className="testi__grid">
          {testimonios.map((t) => (
            <li className="testi" key={t.autor + t.texto.slice(0, 12)}>
              <p className="testi__comillas" aria-hidden="true">&ldquo;</p>
              <blockquote className="testi__texto">{t.texto}</blockquote>
              <footer className="testi__pie">
                <p className="testi__autor">{t.autor}</p>
                <p className="testi__detalle">{t.detalle}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
