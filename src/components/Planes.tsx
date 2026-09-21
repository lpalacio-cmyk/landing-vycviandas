import { IconoCheck, IconoWhatsapp } from "./Iconos";
import { planes, planesSeccion } from "@/lib/content";
import { wa, mensajes, precio } from "@/lib/whatsapp";

export function Planes() {
  return (
    <section className="banda" id="planes">
      <div className="wrap">
        <div className="cabecera-seccion">
          <p className="eyebrow">{planesSeccion.eyebrow}</p>
          <h2 className="titulo-seccion">{planesSeccion.titulo}</h2>
          <p className="bajada-seccion">{planesSeccion.bajada}</p>
        </div>

        <ul className="planes__grid">
          {planes.map((plan) => (
            <li
              className={`plan${plan.destacado ? " plan--destacado" : ""}`}
              key={plan.id}
            >
              <p className="plan__marca">{plan.destacado ? "El más elegido" : ""}</p>
              <h3 className="plan__nombre">{plan.nombre}</h3>

              <p className="plan__precio">
                <span className="plan__precio-num">{precio(plan.precio)}</span>
                <span className="plan__precio-unit">{plan.unidad}</span>
              </p>

              <p className="plan__desc">{plan.descripcion}</p>

              <ul className="plan__incluye">
                {plan.incluye.map((item) => (
                  <li className="plan__item" key={item}>
                    <IconoCheck />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="plan__accion">
                <a
                  className={`btn btn--bloque ${plan.destacado ? "btn--primario" : "btn--linea"}`}
                  href={wa(mensajes.plan(plan.nombre))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconoWhatsapp />
                  Pedir este plan
                </a>
              </p>
            </li>
          ))}
        </ul>

        <p className="planes__nota">{planesSeccion.nota}</p>
      </div>
    </section>
  );
}
