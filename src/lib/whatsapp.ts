import { negocio } from "./content";

/**
 * Arma el link de WhatsApp con el mensaje ya escrito.
 * Cada botón de la página manda un mensaje distinto, así el pedido llega
 * con contexto y no hay que preguntar de dónde viene.
 */
export function wa(mensaje: string): string {
  return `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export const mensajes = {
  general: "¡Hola V&C! Vi la página y quiero pedir una vianda. ¿Cuál es el plato de hoy?",
  plan: (nombre: string) =>
    `¡Hola V&C! Vi la página y me interesa el ${nombre}. ¿Me pasan los detalles?`,
  empresas:
    "¡Hola V&C! Vi la página y quiero una propuesta de viandas para mi equipo de trabajo. Somos aproximadamente ",
  duda: "¡Hola V&C! Vi la página y me quedó una duda: ",
  entrega: "¡Hola V&C! Vi la página y quiero saber si llegan hasta mi zona. Estoy en ",
};

/** Formato de precio argentino: $ 110.000 */
export function precio(valor: number): string {
  return "$ " + valor.toLocaleString("es-AR");
}
