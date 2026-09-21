import { pasos, pasosSeccion } from "@/lib/content";

export function ComoFunciona() {
  return (
    <section className="banda banda--hondo" id="como-funciona">
      <div className="wrap">
        <div className="cabecera-seccion">
          <p className="eyebrow">{pasosSeccion.eyebrow}</p>
          <h2 className="titulo-seccion">{pasosSeccion.titulo}</h2>
        </div>

        <ol className="pasos">
          {pasos.map((paso) => (
            <li className="paso" key={paso.titulo}>
              <p className="paso__num" aria-hidden="true" />
              <h3 className="paso__titulo">{paso.titulo}</h3>
              <p className="paso__texto">{paso.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
