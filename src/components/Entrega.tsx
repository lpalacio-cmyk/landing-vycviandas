import { IconoBolsa, IconoMoto, IconoWhatsapp } from "./Iconos";
import { entrega } from "@/lib/content";
import { wa, mensajes } from "@/lib/whatsapp";

export function Entrega() {
  return (
    <section className="banda" id="entrega">
      <div className="wrap">
        <div className="cabecera-seccion">
          <p className="eyebrow">{entrega.eyebrow}</p>
          <h2 className="titulo-seccion">{entrega.titulo}</h2>
        </div>

        <div className="entrega__grid">
          <article className="entrega__carta">
            <IconoBolsa className="entrega__icono" />
            <h3 className="entrega__titulo">{entrega.retiro.titulo}</h3>

            <dl className="entrega__datos">
              <div className="entrega__fila">
                <dt className="entrega__label">Dónde</dt>
                <dd className="entrega__valor">{entrega.retiro.direccion}</dd>
              </div>
              <div className="entrega__fila">
                <dt className="entrega__label">Ciudad</dt>
                <dd className="entrega__valor">{entrega.retiro.ciudad}</dd>
              </div>
              <div className="entrega__fila">
                <dt className="entrega__label">Días</dt>
                <dd className="entrega__valor">{entrega.retiro.dias}</dd>
              </div>
              <div className="entrega__fila">
                <dt className="entrega__label">Horario</dt>
                <dd className="entrega__valor num">{entrega.retiro.horario}</dd>
              </div>
            </dl>

            <p className="entrega__nota">{entrega.retiro.nota}</p>
          </article>

          <article className="entrega__carta">
            <IconoMoto className="entrega__icono" />
            <h3 className="entrega__titulo">{entrega.reparto.titulo}</h3>

            <dl className="entrega__datos">
              <div className="entrega__fila">
                <dt className="entrega__label">Zona</dt>
                <dd className="entrega__valor">{entrega.reparto.zona}</dd>
              </div>
              <div className="entrega__fila">
                <dt className="entrega__label">Días</dt>
                <dd className="entrega__valor">{entrega.reparto.dias}</dd>
              </div>
              <div className="entrega__fila">
                <dt className="entrega__label">Horario</dt>
                <dd className="entrega__valor num">{entrega.reparto.horario}</dd>
              </div>
              <div className="entrega__fila">
                <dt className="entrega__label">Envío</dt>
                <dd className="entrega__valor">
                  <a
                    href={wa(mensajes.entrega)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consultá por tu barrio
                  </a>
                </dd>
              </div>
            </dl>

            <p className="entrega__nota">{entrega.reparto.nota}</p>
          </article>
        </div>

        <aside className="aviso">
          <p className="aviso__titulo">{entrega.aviso.titulo}</p>
          <p className="aviso__texto">{entrega.aviso.texto}</p>
        </aside>
      </div>
    </section>
  );
}

export function EntregaCta() {
  return (
    <a
      className="btn btn--primario"
      href={wa(mensajes.entrega)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconoWhatsapp />
      Consultar por mi zona
    </a>
  );
}
