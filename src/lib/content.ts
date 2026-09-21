/* ============================================================================
 * V&C VIANDAS CASERAS — FUENTE ÚNICA DE CONTENIDO
 * ----------------------------------------------------------------------------
 * Todo el texto, los platos, los precios y los datos de contacto salen de este
 * archivo. No hay copy escrito dentro de los componentes: para cambiar algo de
 * la página, se cambia acá y listo.
 *
 * ORIGEN DE LOS DATOS
 *   Lo marcado como (IG) salió del perfil de Instagram @vyc.viandas.
 *   Lo marcado como «PENDIENTE» es provisorio y hay que confirmarlo con la
 *   clienta antes de publicar. Está todo listado en /CONTENIDO-PENDIENTE.md
 * ========================================================================== */

export type Etiqueta = "Casero" | "Abundante" | "Con postre" | "Del día";

export interface Plato {
  nombre: string;
  descripcion: string;
  etiquetas: Etiqueta[];
  /** Foto en /public/images. Si falta, se renderiza el bloque tipográfico:
   *  la página se ve bien igual, con o sin foto. */
  foto?: string;
}

export interface Plan {
  id: string;
  nombre: string;
  /** Cadencia del plan, en el renglón chico bajo el nombre.
   *  Por ejemplo: "Por mes · de lunes a viernes". */
  cadencia: string;
  /** Precio en pesos, sin puntos ni símbolo.
   *
   *  OPCIONAL A PROPÓSITO. Hoy ningún plan lo tiene, así que la tarjeta
   *  muestra "Precio por WhatsApp" en su lugar. Si algún día se quieren
   *  publicar los precios, se agrega este campo y la tarjeta lo muestra
   *  sola, sin tocar nada más. */
  precio?: number;
  descripcion: string;
  destacado?: boolean;
  incluye: string[];
}

/* -------------------------------------------------------------------------- */
/* NEGOCIO  (IG)                                                               */
/* -------------------------------------------------------------------------- */

export const negocio = {
  nombre: "V&C Viandas Caseras",
  nombreCorto: "V&C",
  bajada: "Viandas caseras en Catamarca Capital",
  ciudad: "San Fernando del Valle de Catamarca",
  ciudadCorta: "Catamarca Capital",
  provincia: "Catamarca",
  pais: "Argentina",
  direccion: "Psj. Exequiel Soria 130",
  /** Número de WhatsApp del perfil: 383 495-9920 */
  whatsapp: "5493834959920",
  whatsappVisible: "383 495-9920",
  instagram: "vyc.viandas",
  instagramUrl: "https://www.instagram.com/vyc.viandas/",
  /** PENDIENTE: confirmar desde cuándo trabajan. El post más viejo del perfil
   *  es de hace ~49 semanas, así que 2024 es una estimación. */
  desde: 2024,
  /** Cambiar por el dominio definitivo después del deploy en Vercel. */
  dominio: "https://vycviandas.vercel.app",
  /** Días que trabajan. Confirmado por la clienta. */
  diasTrabajo: "Lunes a viernes",
  /** El detalle de los feriados, que es la duda que más les deben hacer. */
  feriados:
    "Trabajamos los feriados provinciales y días no laborables. Los feriados nacionales no.",
  /** PENDIENTE: confirmar el horario de atención. Se usa en el pie y en los
   *  datos estructurados que lee Google. */
  horarios: "Lunes a viernes, 9 a 20 h",
} as const;

/* -------------------------------------------------------------------------- */
/* LA VIANDA — el diferencial real del negocio  (IG)                           */
/* -------------------------------------------------------------------------- */
/* El perfil lo dice en una línea: «PLATO PRINCIPAL, POSTRE Y PAN». Es la
 * promesa más concreta que tienen y es lo que estructura toda la página. */

export const laVianda = {
  titulo: "Qué viene en cada vianda",
  componentes: [
    {
      nombre: "Plato principal",
      detalle: "Comida casera de verdad, en porción que alcanza.",
    },
    {
      nombre: "Postre",
      detalle: "Incluido en el precio, no se cobra aparte.",
    },
    {
      nombre: "Pan",
      detalle: "Va siempre, con todas las viandas.",
    },
  ],
  pie: "Efectivo o transferencia",
};

/* -------------------------------------------------------------------------- */
/* HERO                                                                        */
/* -------------------------------------------------------------------------- */

export const hero = {
  eyebrow: "Viandas caseras · Catamarca Capital",
  /* El titular se parte en dos: la segunda mitad se pinta en naranja. */
  titulo: "Plato principal, postre y pan.",
  tituloDestacado: "Todo casero, todo incluido.",
  texto:
    "Cocina casera y liviana, sin aceites ni condimentos fuertes. Armamos viandas completas en Catamarca Capital para que no tengas que pensar en el almuerzo. Pedís por WhatsApp y las retirás o te las llevamos.",
  ctaPrimario: "Pedir por WhatsApp",
  ctaSecundario: "Ver los platos",
  datos: [
    { valor: "3 en 1", label: "principal, postre y pan" },
    { valor: "Liviana", label: "sin aceites ni condimentos fuertes" },
    { valor: "Del día", label: "cocinado, no recalentado" },
  ],
};

/* -------------------------------------------------------------------------- */
/* PLATOS — los tres primeros salieron de los posts de Instagram               */
/* -------------------------------------------------------------------------- */
/* PENDIENTE: sumar más platos del repertorio. El array acepta los que sean:
 * la grilla se reacomoda sola. Para agregar la foto, poner el archivo en
 * /public/images y referenciarlo en `foto`. */

export const platos: Plato[] = [
  {
    nombre: "Pan de carne con fideos al pesto",
    descripcion:
      "Pan de carne casero, jugoso, con fideos al pesto hechos el mismo día.",
    etiquetas: ["Casero", "Abundante"],
    foto: "/images/pan-de-carne.jpg",
  },
  {
    nombre: "Ravioles con salsa mixta y queso",
    descripcion:
      "Ravioles con salsa mixta y queso gratinado por encima. Un clásico que siempre sale.",
    etiquetas: ["Casero", "Del día"],
    foto: "/images/ravioles.jpg",
  },
  {
    nombre: "Chop suey de cerdo con arroz",
    descripcion:
      "Cerdo con verduras y arroz. Liviano, pero con sustancia.",
    etiquetas: ["Casero", "Abundante"],
    foto: "/images/chop-suey.jpg",
  },
];

export const platosSeccion = {
  eyebrow: "El menú rota",
  titulo: "Nunca comés lo mismo dos veces seguidas",
  bajada:
    "Cambiamos el plato todos los días. Publicamos el del día en Instagram y te lo confirmamos por WhatsApp cuando hacés el pedido.",
};

/* -------------------------------------------------------------------------- */
/* PLANES — PENDIENTE: confirmar TODOS los precios antes de publicar           */
/* -------------------------------------------------------------------------- */
/* El perfil menciona «VIANDAS MENSUALES», así que el abono mensual va como
 * plan destacado. Los números de abajo son de muestra para poder maquetar. */

export const planes: Plan[] = [
  {
    id: "suelta",
    nombre: "Vianda suelta",
    cadencia: "Cuando la necesites",
    descripcion: "Para probar, o para el día que no llegás a cocinar.",
    incluye: [
      "Plato principal, postre y pan",
      "Sin compromiso ni permanencia",
      "Retirás o te la llevamos",
    ],
  },
  {
    id: "mensual",
    nombre: "Abono mensual",
    cadencia: "Por mes · de lunes a viernes",
    descripcion:
      "Una vianda por cada día que trabajamos, todo el mes. Es la forma más conveniente.",
    destacado: true,
    incluye: [
      "Una vianda por día hábil",
      "El mejor precio por vianda",
      "Avisás con un día si no vas a querer alguna",
      "Entrega sin cargo en Catamarca Capital",
    ],
  },
  {
    id: "semanal",
    nombre: "Pack semanal",
    cadencia: "Por semana · de lunes a viernes",
    descripcion: "Los cinco almuerzos de la semana, resueltos de una.",
    incluye: [
      "Los cinco días de la semana",
      "Elegís los días que querés",
      "Ideal antes de pasar al abono",
    ],
  },
];

export const planesSeccion = {
  eyebrow: "Planes",
  titulo: "Cuanto más seguido, más barata te sale",
  bajada:
    "Podés arrancar con una vianda suelta y pasarte al abono cuando quieras. No hay permanencia ni contrato.",
  /** Texto que aparece en cada tarjeta en lugar del precio. */
  notaPrecio: "Precio por WhatsApp",
  nota: "Los precios cambian seguido, así que no los publicamos acá: te los pasamos actualizados por WhatsApp en el momento.",
};

/* -------------------------------------------------------------------------- */
/* CÓMO FUNCIONA — es una secuencia real, por eso va numerada                  */
/* -------------------------------------------------------------------------- */

export const pasos = [
  {
    titulo: "Nos escribís",
    texto: "Por WhatsApp al 383 495-9920. Te contamos el plato del día.",
  },
  {
    titulo: "Elegís cuántas",
    texto: "Una suelta, el pack semanal o el abono mensual. Vos ves.",
  },
  {
    titulo: "Confirmás y pagás",
    texto: "Efectivo o transferencia. Te pasamos el alias por el mismo chat.",
  },
  {
    titulo: "Retirás o te llevamos",
    texto: "Por Psj. Exequiel Soria 130, o te la acercamos a tu casa u oficina.",
  },
];

export const pasosSeccion = {
  eyebrow: "Cómo funciona",
  titulo: "Cuatro pasos y listo",
};

/* -------------------------------------------------------------------------- */
/* DIFERENCIALES                                                               */
/* -------------------------------------------------------------------------- */

export const diferenciales = [
  {
    titulo: "Sin aceites ni condimentos fuertes",
    texto:
      "Cocinamos sin aceites, sin aderezos y sin condimentos fuertes. Cae liviano, y sirve si tenés que cuidar la digestión o la presión.",
  },
  {
    titulo: "El postre va incluido",
    texto:
      "No es un extra ni se cobra aparte. Entra en el precio de la vianda, siempre.",
  },
  {
    titulo: "Comida de casa, no de rotisería",
    texto:
      "Pan de carne, ravioles, chop suey. Lo mismo que cocinarías vos si tuvieras el tiempo.",
  },
  {
    titulo: "Se cocina el mismo día",
    texto:
      "No hay stock de días anteriores. Se cocina a la mañana y sale al mediodía.",
  },
  {
    titulo: "El menú cambia todos los días",
    texto:
      "Publicamos el plato del día en Instagram. No vas a comer lo mismo dos veces seguidas.",
  },
  {
    titulo: "Porción que alcanza",
    texto:
      "La vianda te deja satisfecho. No es comida de dieta con gusto a poco.",
  },
  {
    titulo: "Pagás como te quede cómodo",
    texto: "Efectivo cuando la recibís, o transferencia al confirmar el pedido.",
  },
];

export const diferencialesSeccion = {
  eyebrow: "Por qué V&C",
  titulo: "Lo que nos diferencia del resto",
};

/* -------------------------------------------------------------------------- */
/* ENTREGA Y RETIRO  (IG: dirección del perfil)                                */
/* -------------------------------------------------------------------------- */
/* PENDIENTE: confirmar horarios de retiro, zonas de reparto y costo de envío. */

export const entrega = {
  eyebrow: "Dónde y cuándo",
  titulo: "Retirás por el local o te la llevamos",
  retiro: {
    titulo: "Retiro por el local",
    direccion: "Psj. Exequiel Soria 130",
    ciudad: "Catamarca Capital",
    dias: "Lunes a viernes",
    /** PENDIENTE: confirmar horario real de retiro. */
    horario: "De 11:30 a 14 h",
    nota: "Sin cargo.",
  },
  reparto: {
    titulo: "Te la llevamos",
    /** PENDIENTE: confirmar zonas de reparto y costo del envío. */
    zona: "Catamarca Capital y alrededores",
    dias: "Lunes a viernes",
    horario: "Entre 11:30 y 14 h",
    nota: "Sin cargo con el abono mensual. Consultanos por tu zona.",
  },
  /** Los feriados son la consulta que más se repite: va a la vista, no
   *  escondida en las preguntas frecuentes. */
  aviso: {
    titulo: "Feriados",
    texto:
      "Trabajamos los feriados provinciales y los días no laborables de Catamarca. Los feriados nacionales no abrimos.",
  },
};

/* -------------------------------------------------------------------------- */
/* EMPRESAS                                                                    */
/* -------------------------------------------------------------------------- */
/* PENDIENTE: confirmar si quieren ofrecer este servicio y desde qué cantidad.
 * Si no lo quieren, se borra este bloque y la sección desaparece sola. */

export const empresas = {
  eyebrow: "Para equipos de trabajo",
  titulo: "Viandas para tu oficina, con una sola cuenta al mes",
  texto:
    "Si en tu trabajo son varios los que almuerzan afuera, armamos las viandas para todo el equipo, entregamos en la oficina al mediodía y cerramos una sola cuenta a fin de mes.",
  incluye: [
    "Entrega en la oficina, de lunes a viernes",
    "Plato principal, postre y pan para cada uno",
    "Una sola cuenta mensual, con comprobante",
    "Nos adaptamos si alguien no come algo",
  ],
  cta: "Pedir una propuesta",
};

/* -------------------------------------------------------------------------- */
/* TESTIMONIOS — vacío a propósito                                             */
/* -------------------------------------------------------------------------- */
/* La sección no se renderiza mientras el array esté vacío.
 *
 * ⚠️ No inventar testimonios. Publicar reseñas falsas es publicidad engañosa
 * (Ley 24.240 de Defensa del Consumidor). Cuando haya mensajes reales de
 * clientas o clientes, pedirles autorización y cargarlos acá:
 *   { texto: "...", autor: "Nombre", detalle: "Barrio o cuánto hace que pide" }
 */

export const testimonios: { texto: string; autor: string; detalle: string }[] =
  [];

/* -------------------------------------------------------------------------- */
/* PREGUNTAS FRECUENTES — cada una que se responde acá es un mensaje menos      */
/* -------------------------------------------------------------------------- */
/* PENDIENTE: revisar las respuestas con la clienta. Están escritas según lo
 * que se deduce del perfil, pero hay que confirmar horarios y plazos. */

export const faqs = [
  {
    pregunta: "¿Hasta qué hora puedo pedir?",
    respuesta:
      "Para la vianda del día, hasta las 10 de la mañana. Después de esa hora ya está todo en la olla y te la agendamos para el día siguiente.",
  },
  {
    pregunta: "¿Qué viene en la vianda?",
    respuesta:
      "Plato principal, postre y pan. Los tres van siempre incluidos en el precio, no se cobran por separado.",
  },
  {
    pregunta: "¿Cómo sé cuál es el plato del día?",
    respuesta:
      "Lo publicamos en Instagram (@vyc.viandas) y te lo confirmamos por WhatsApp cuando nos escribís para hacer el pedido.",
  },
  {
    pregunta: "¿Puedo retirarla o me la llevan?",
    respuesta:
      "Las dos cosas. Podés retirarla por Psj. Exequiel Soria 130, en Catamarca Capital, o te la llevamos al mediodía. Con el abono mensual la entrega es sin cargo.",
  },
  {
    pregunta: "¿Llevan aceite o condimentos fuertes?",
    respuesta:
      "No. Cocinamos sin aceites, sin aderezos y sin condimentos fuertes. Por eso las viandas caen livianas y funcionan bien si estás cuidando la digestión, la presión o venís de una cirugía.",
  },
  {
    pregunta: "¿Trabajan los feriados?",
    respuesta:
      "Trabajamos de lunes a viernes, incluidos los feriados provinciales y los días no laborables de Catamarca. Los feriados nacionales no abrimos.",
  },
  {
    pregunta: "¿Cuánto sale?",
    respuesta:
      "Los precios cambian seguido, así que preferimos no publicarlos acá y que no te encuentres con un número viejo. Escribinos por WhatsApp y te pasamos el precio actualizado del día, sin compromiso.",
  },
  {
    pregunta: "¿Cómo se paga?",
    respuesta:
      "Efectivo cuando recibís la vianda, o transferencia al confirmar el pedido. Te pasamos el alias por WhatsApp.",
  },
  {
    pregunta: "¿El abono mensual tiene permanencia?",
    respuesta:
      "No. Es mes a mes, lo renovás si querés. Y si algún día no vas a estar, avisás con un día de anticipación y esa vianda no se descuenta.",
  },
  {
    pregunta: "¿Hacen viandas para empresas?",
    respuesta:
      "Sí. Preparamos las viandas para todo el equipo, entregamos en la oficina y cerramos una sola cuenta a fin de mes. Escribinos y te pasamos una propuesta.",
  },
  {
    pregunta: "¿Puedo pedir sin algún ingrediente?",
    respuesta:
      "Contanos qué no comés cuando hagas el pedido y lo tenemos en cuenta. Si necesitás algo muy distinto al plato del día, avisanos con tiempo.",
  },
];

export const faqSeccion = {
  eyebrow: "Preguntas frecuentes",
  titulo: "Lo que más nos preguntan",
  aside: {
    titulo: "¿Te quedó alguna duda?",
    texto:
      "Escribinos por WhatsApp y te respondemos al toque. No hace falta que te decidas ahora: podés probar con una vianda suelta.",
  },
};

/* -------------------------------------------------------------------------- */
/* CIERRE                                                                      */
/* -------------------------------------------------------------------------- */

export const cierre = {
  eyebrow: "Empezá hoy",
  titulo: "Mañana al mediodía ya podés estar comiendo casero",
  texto:
    "Escribinos, te contamos el plato del día y coordinamos. No hace falta que armes un abono para empezar.",
  cta: "Escribinos por WhatsApp",
};

/* -------------------------------------------------------------------------- */
/* GALERÍA — vacía a propósito                                                 */
/* -------------------------------------------------------------------------- */
/* Cuando haya más fotos, poner los archivos en /public/images y listarlos acá.
 * Mientras esté vacío, la sección no se renderiza.
 *   { src: "/images/milanesa.jpg", alt: "Milanesa con puré" }
 */

export const galeria: { src: string; alt: string }[] = [];

/* -------------------------------------------------------------------------- */
/* NAVEGACIÓN                                                                  */
/* -------------------------------------------------------------------------- */

export const navegacion = [
  { href: "#platos", label: "Platos" },
  { href: "#planes", label: "Planes" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#entrega", label: "Entrega" },
  { href: "#empresas", label: "Empresas" },
  { href: "#faq", label: "Preguntas" },
];
