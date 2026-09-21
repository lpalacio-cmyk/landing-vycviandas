# Fotos de los platos

Acá van las fotos que muestra la landing.

## Nombres que la página ya busca

| Archivo | Plato |
|---|---|
| `pan-de-carne.jpg` | Pan de carne con fideos al pesto |
| `ravioles.jpg` | Ravioles con salsa mixta y queso |
| `chop-suey.jpg` | Chop suey de cerdo con arroz |

Si alguno no está, la página dibuja un bloque tipográfico con trama en su lugar.
No se rompe ni muestra una imagen cortada.

## Medidas

- **Proporción:** 4:3 horizontal (por ejemplo 1200 × 900 px).
- **Ancho mínimo:** 1200 px.
- **Formato:** `.jpg` para fotos. Next.js las optimiza y las sirve en WebP solo.
- **Peso:** no hace falta comprimirlas a mano.

## Para agregar un plato nuevo

1. Guardar la foto acá, con un nombre en minúsculas y sin espacios
   (`milanesa-napolitana.jpg`).
2. Sumar el plato en `src/lib/content.ts` → `platos`:

```ts
{
  nombre: "Milanesa napolitana con puré",
  descripcion: "...",
  etiquetas: ["Casero", "Abundante"],
  foto: "/images/milanesa-napolitana.jpg",
}
```

La grilla se reacomoda sola: acepta la cantidad de platos que sea.

## Consejos para sacar las fotos

- Con luz de día, cerca de una ventana, sin flash.
- Desde arriba (cenital) o a 45°. La vianda abierta y llena.
- Fondo liso y oscuro: la página es de fondo negro y así la comida resalta.
- Mejor tres fotos buenas que diez regulares.
