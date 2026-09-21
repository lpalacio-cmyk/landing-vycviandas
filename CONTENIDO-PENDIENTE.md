# Contenido pendiente de confirmar

La landing está armada y se puede mostrar como demo tal cual está. Pero hay
datos que se dedujeron del perfil de Instagram o que se pusieron de muestra
para poder maquetar, y **hay que confirmarlos con la clienta antes de publicar**.

Están ordenados por urgencia.

---

## 1. Bloqueante — no publicar sin esto

| Dato | Qué hay ahora | Dónde se cambia |
|---|---|---|
| **Horario de retiro** | `De 11:30 a 14 h` (supuesto) | `content.ts` → `entrega.retiro` |
| **Horario de reparto** | `Entre 11:30 y 14 h` (supuesto) | `content.ts` → `entrega.reparto` |
| **Horario de atención** | `Lunes a viernes, 9 a 20 h` (supuesto) — se usa en los datos estructurados que lee Google | `content.ts` → `negocio.horarios` |
| **Zonas de reparto y costo del envío** | "Catamarca Capital y alrededores", sin costo definido | `content.ts` → `entrega.reparto` |
| **Hora de cierre de pedidos** | "hasta las 10 h del mismo día" (supuesto) | `content.ts` → `faqs` |

---

## 2. Revisar — una contradicción posible

La clienta confirmó que **las viandas son sin aceites, sin aderezos y sin
condimentos fuertes**. Eso ahora se comunica fuerte en tres lugares: el dato
del hero, el primer diferencial y una pregunta frecuente.

Hay que chequear que los platos del repertorio no lo contradigan. Dos casos:

- **Pan de carne con fideos al pesto.** El pesto tradicional lleva bastante
  aceite de oliva. Si lo hacen de otra forma, conviene aclararlo; si no,
  quizá no sea el plato para mostrar como ejemplo.
- **Chop suey.** Ya saqué la palabra "salteado" de la descripción por el mismo
  motivo.

Si un cliente con gastritis o hipertensión pide confiando en el "sin aceites"
y el plato lleva, el problema es serio. Vale la pena la confirmación.

---

## 3. Confirmar — mejora la página pero no la rompe

| Dato | Qué hay ahora |
|---|---|
| Año de inicio | `2024`, estimado a partir del post más viejo del perfil |
| ¿Hacen viandas para empresas? | La sección está armada y asume que sí. Si no les interesa, se borra el bloque `empresas` y la sección desaparece sola |
| ¿Hay opciones vegetarianas o sin TACC? | La FAQ dice que se adaptan a pedido. Confirmar hasta dónde llegan |
| ¿El abono se puede pausar? | La FAQ dice que sí avisando con un día. Confirmar |
| Cantidad de viandas del abono | Ya no se publica un número: la tarjeta dice "una vianda por día hábil", que es cierto sin importar cuántos días tenga el mes |

### Ya confirmado por la clienta

- Sin aceites, sin aderezos y sin condimentos fuertes.
- Trabajan de lunes a viernes, incluidos feriados provinciales y días no
  laborables. Los feriados nacionales no.
- Plato principal, postre y pan incluidos.
- Efectivo o transferencia.

---

## 4. Precios

**Los precios no se publican en la página**, por decisión tomada: cambian
seguido y un número viejo en la web hace más daño que no tener número.

Cada tarjeta de plan muestra "Precio por WhatsApp" y el botón dice
"Consultar precio". La nota al pie de la sección lo explica sin que suene a
excusa: *"Los precios cambian seguido, así que no los publicamos acá: te los
pasamos actualizados por WhatsApp en el momento."*

**Si más adelante quieren publicarlos**, el campo ya está preparado. Alcanza
con agregar `precio` al plan en `content.ts`:

```ts
{
  id: "mensual",
  nombre: "Abono mensual",
  cadencia: "Por mes · de lunes a viernes",
  precio: 110000,   // ← agregando esto, la tarjeta lo muestra sola
  ...
}
```

No hay que tocar ningún componente: la tarjeta detecta el campo y reemplaza
"Precio por WhatsApp" por el número.

---

## 5. Fotos

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

## 6. Testimonios

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

## 7. Después del deploy

- [ ] Cambiar `negocio.dominio` en `content.ts` por el dominio real de Vercel
      (o el dominio propio, si compran uno).
- [ ] Regenerar `public/og.png` si cambió el teléfono o la dirección.
- [ ] Probar los botones de WhatsApp desde un celular: tienen que abrir el chat
      con el mensaje ya escrito.
- [ ] Cargar el sitio en el link de la bio de Instagram.
- [ ] Dar de alta el negocio en Google Business Profile con la misma dirección
      y teléfono que figuran en la página. Los datos estructurados ya están
      puestos, pero Google necesita el alta para mostrar la ficha.
