import { diferenciales, diferencialesSeccion } from "@/lib/content";

export function Diferenciales() {
  return (
    <section className="banda banda--oscura">
      <div className="wrap">
        <div className="cabecera-seccion">
          <p className="eyebrow">{diferencialesSeccion.eyebrow}</p>
          <h2 className="titulo-seccion">{diferencialesSeccion.titulo}</h2>
        </div>

        <ul className="dif__grid">
          {diferenciales.map((d) => (
            <li className="dif" key={d.titulo}>
              <h3 className="dif__titulo">{d.titulo}</h3>
              <p className="dif__texto">{d.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
