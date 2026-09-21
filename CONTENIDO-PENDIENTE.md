# Contenido pendiente de confirmar

La landing está armada y se puede mostrar como demo tal cual está. Pero hay
datos que se dedujeron del perfil de Instagram o que se pusieron de muestra
para poder maquetar, y **hay que confirmarlos con la clienta antes de publicar**.

Están ordenados por urgencia. Lo de la primera tabla no puede salir a producción
sin revisar.

---

## 1. Bloqueante — no publicar sin esto

| Dato | Qué hay ahora | Dónde se cambia |
|---|---|---|
| **Precio de la vianda suelta** | `$ 6.500` (de muestra) | `content.ts` → `planes` |
| **Precio del abono mensual** | `$ 110.000` por 20 viandas (de muestra) | `content.ts` → `planes` |
| **Precio del pack semanal** | `$ 30.000` por 5 viandas (de muestra) | `content.ts` → `planes` |
| **Cantidad de viandas de cada plan** | 20 mensual / 5 semanal (supuesto) | `content.ts` → `planes` |
| **Horario de retiro** | `De 11:30 a 14 h` (supuesto) | `content.ts` → `entrega.retiro` |
| **Horario de reparto** | `Entre 11:30 y 14 h` (supuesto) | `content.ts` → `entrega.reparto` |
| **Zonas de reparto y costo del envío** | "Catamarca Capital y alrededores", sin costo definido | `content.ts` → `entrega.reparto` |
| **Hora de cierre de pedidos** | "hasta las 10 h del mismo día" (supuesto) | `content.ts` → `faqs` y `planes` |

Si algún precio todavía no está definido, conviene sacar el número y dejar el
plan sin precio antes que publicar uno equivocado.

---

## 2. Confirmar — mejora la página pero no la rompe

| Dato | Qué hay ahora |
|---|---|
| Horarios de atención | `Lunes a viernes, 9 a 20 h` (supuesto) — se usa en el pie y en los datos estructurados de Google |
| Año de inicio | `2024`, estimado a partir del post más viejo del perfil |
| ¿Hacen viandas para empresas? | La sección está armada y asume que sí. Si no les interesa, se borra el bloque `empresas` y la sección desaparece sola |
| ¿Hay opciones sin TACC, vegetarianas o sin sal? | La FAQ dice que se adaptan a pedido. Confirmar hasta dónde llegan |
| ¿El abono se puede pausar? | La FAQ dice que sí avisando con un día. Confirmar |

---

## 3. Fotos

La página funciona sin fotos: dibuja un bloque tipográfico con trama en lugar
de una imagen rota. Pero con fotos reales vende bastante más.

Las tres fotos que ya están en Instagram alcanzan para arrancar. Hay que
guardarlas en `public/images/` con estos nombres exactos:

| Archivo | Plato |
|---|---|
| `pan-de-carne.jpg` | Pan de carne con fideos al pesto |
| `ravioles.jpg` | Ravioles con salsa mixta y queso |
| `chop-suey.jpg` | Chop suey de cerdo con arroz |

Recortadas en **4:3 horizontal**, de 1200 px de ancho o más.

**Logo.** Subir el logo real como `public/logo.png` (fondo transparente, 512 px
o más). La página lo toma sola. Mientras tanto usa un monograma dibujado con
las formas y los colores de la marca.

---

## 4. Testimonios

La sección de testimonios **está vacía a propósito** y no se renderiza.

No se cargaron textos de muestra porque publicar reseñas inventadas es
publicidad engañosa y está sancionado por la Ley 24.240 de Defensa del
Consumidor. Además, si alguien las detecta, el daño a la marca es peor que el
beneficio.

Cuando haya mensajes reales de clientas o clientes:

1. Pedirles autorización para publicarlos.
2. Cargarlos en `content.ts` → `testimonios`:

```ts
export const testimonios = [
  { texto: "...", autor: "Nombre", detalle: "Barrio o hace cuánto pide" },
];
```

La sección aparece sola apenas haya uno cargado.

---

## 5. Después del deploy

- [ ] Cambiar `negocio.dominio` en `content.ts` por el dominio real de Vercel
      (o el dominio propio, si compran uno).
- [ ] Regenerar `public/og.png` si cambió el teléfono o la dirección.
- [ ] Probar los botones de WhatsApp desde un celular: tienen que abrir el chat
      con el mensaje ya escrito.
- [ ] Cargar el sitio en el link de la bio de Instagram.
- [ ] Dar de alta el negocio en Google Business Profile con la misma dirección
      y teléfono que figuran en la página. Los datos estructurados ya están
      puestos, pero Google necesita el alta para mostrar la ficha.
