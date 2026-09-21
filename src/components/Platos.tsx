import Image from "next/image";
import { platos, platosSeccion } from "@/lib/content";
import { existeEnPublic } from "@/lib/archivos";
import { negocio } from "@/lib/content";
import { IconoInstagram } from "./Iconos";

export function Platos() {
  if (platos.length === 0) return null;

  return (
    <section className="banda banda--oscura" id="platos">
      <div className="wrap">
        <div className="cabecera-seccion">
          <p className="eyebrow">{platosSeccion.eyebrow}</p>
          <h2 className="titulo-seccion">{platosSeccion.titulo}</h2>
          <p className="bajada-seccion">{platosSeccion.bajada}</p>
        </div>

        <ul className="platos__grid">
          {platos.map((plato) => {
            const hayFoto = existeEnPublic(plato.foto);
            return (
              <li className="plato" key={plato.nombre}>
                <figure className={`plato__figura${hayFoto ? "" : " plato__figura--vacia"}`}>
                  {hayFoto && plato.foto ? (
                    <Image
                      src={plato.foto}
                      alt={plato.nombre}
                      width={800}
                      height={600}
                      sizes="(max-width: 700px) 100vw, 33vw"
                    />
                  ) : (
                    <span className="plato__figura-marca" aria-hidden="true">
                      V&amp;C
                    </span>
                  )}
                </figure>

                <div className="plato__cuerpo">
                  <h3 className="plato__nombre">{plato.nombre}</h3>
                  <p className="plato__desc">{plato.descripcion}</p>
                  <ul className="plato__tags">
                    {plato.etiquetas.map((e, i) => (
                      <li
                        className={`tag${i === 0 ? " tag--acento" : ""}`}
                        key={e}
                      >
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="platos__nota">
          <p>El plato del día lo publicamos todas las mañanas en Instagram.</p>
          <a
            className="btn btn--linea"
            href={negocio.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconoInstagram />
            Ver @{negocio.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}
