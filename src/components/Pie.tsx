import { Logo } from "./Logo";
import { navegacion, negocio } from "@/lib/content";
import { wa, mensajes } from "@/lib/whatsapp";

export function Pie() {
  const anio = new Date().getFullYear();

  return (
    <footer className="pie">
      <div className="wrap pie__grid">
        <div>
          <span className="marca">
            <Logo size={40} className="marca__logo" />
            <span className="marca__texto">
              <span className="marca__nombre">V&amp;C Viandas</span>
              <span className="marca__sufijo">Caseras</span>
            </span>
          </span>
          <p className="pie__texto">
            Viandas caseras con plato principal, postre y pan. Cocinamos todos
            los días en {negocio.ciudadCorta}.
          </p>
        </div>

        <div>
          <h2 className="pie__titulo">La página</h2>
          <ul className="pie__lista">
            {navegacion.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="pie__titulo">Contacto</h2>
          <ul className="pie__lista">
            <li>
              <a href={wa(mensajes.general)} target="_blank" rel="noopener noreferrer">
                WhatsApp {negocio.whatsappVisible}
              </a>
            </li>
            <li>
              <a href={negocio.instagramUrl} target="_blank" rel="noopener noreferrer">
                @{negocio.instagram}
              </a>
            </li>
            <li>{negocio.direccion}</li>
            <li>{negocio.ciudadCorta}, {negocio.provincia}</li>
          </ul>
        </div>
      </div>

      <div className="wrap pie__base">
        <p>
          © {anio} {negocio.nombre}
        </p>
        <p>Efectivo o transferencia · {negocio.horarios}</p>
      </div>
    </footer>
  );
}
