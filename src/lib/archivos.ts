import fs from "node:fs";
import path from "node:path";

/**
 * Chequea en tiempo de build si un archivo existe dentro de /public.
 *
 * Sirve para que la página funcione con o sin fotos cargadas: si la foto
 * todavía no está, el componente dibuja el bloque tipográfico en lugar de
 * mostrar una imagen rota. Cuando se suben las fotos reales aparecen solas.
 */
export function existeEnPublic(ruta?: string): boolean {
  if (!ruta) return false;
  try {
    return fs.existsSync(path.join(process.cwd(), "public", ruta.replace(/^\/+/, "")));
  } catch {
    return false;
  }
}
