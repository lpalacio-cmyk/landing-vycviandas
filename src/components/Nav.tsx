import { Logo } from "./Logo";
import { IconoWhatsapp } from "./Iconos";
import { navegacion } from "@/lib/content";
import { wa, mensajes } from "@/lib/whatsapp";

export function Nav() {
  return (
    <header className="nav">
      <nav className="wrap nav__fila" aria-label="Principal">
        <a className="marca" href="#inicio">
          <Logo size={38} className="marca__logo" />
          <span className="marca__texto">
            <span className="marca__nombre">V&amp;C Viandas</span>
            <span className="marca__sufijo">Catamarca Capital</span>
          </span>
        </a>

        <ul className="nav__links">
          {navegacion.map((item) => (
            <li key={item.href}>
              <a className="nav__link" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          className="btn btn--primario nav__cta"
          href={wa(mensajes.general)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconoWhatsapp />
          Pedir ahora
        </a>
      </nav>
    </header>
  );
}
