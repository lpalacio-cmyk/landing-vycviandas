import { IconoWhatsapp } from "./Iconos";
import { hero, laVianda } from "@/lib/content";
import { wa, mensajes } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap hero__grid">
        <div>
          <p className="eyebrow">{hero.eyebrow}</p>

          <h1 className="hero__titulo">
            {hero.titulo} <em>{hero.tituloDestacado}</em>
          </h1>

          <p className="hero__texto">{hero.texto}</p>

          <div className="hero__acciones">
            <a
              className="btn btn--primario"
              href={wa(mensajes.general)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconoWhatsapp />
              {hero.ctaPrimario}
            </a>
            <a className="btn btn--linea" href="#platos">
              {hero.ctaSecundario}
            </a>
          </div>

          <dl className="hero__datos">
            {hero.datos.map((d) => (
              <div key={d.label}>
                <dt className="hero__dato-valor">{d.valor}</dt>
                <dd className="hero__dato-label">{d.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* La promesa del perfil convertida en objeto: qué trae la vianda. */}
        <aside className="vianda" aria-label={laVianda.titulo}>
          <div className="vianda__cabecera">
            <h2 className="vianda__kicker">{laVianda.titulo}</h2>
            <span className="vianda__precio">Siempre incluido</span>
          </div>

          <ul className="vianda__lista">
            {laVianda.componentes.map((c) => (
              <li className="vianda__item" key={c.nombre}>
                <span className="vianda__num" aria-hidden="true" />
                <div>
                  <p className="vianda__nombre">{c.nombre}</p>
                  <p className="vianda__detalle">{c.detalle}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="vianda__pie">
            <span className="vianda__punto" aria-hidden="true" />
            {laVianda.pie}
          </p>
        </aside>
      </div>
    </section>
  );
}
