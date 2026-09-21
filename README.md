# V&C Viandas Caseras — Landing

Landing page de **V&C Viandas Caseras** (Catamarca Capital). Una sola página,
pensada para convertir visitas en pedidos por WhatsApp y para responder sola
las preguntas que hoy se contestan una por una por mensaje privado.

- **Stack:** Next.js 15 (App Router) · TypeScript · CSS propio con design tokens
- **Sin dependencias de UI.** Sin Tailwind, sin librerías de componentes.
- **Salida 100% estática.** Se pre-renderiza en el build: carga instantánea.

---

## Cómo se actualiza el contenido

Todo el texto, los platos, los precios y los datos de contacto viven en un
único archivo:

```
src/lib/content.ts
```

No hay texto escrito dentro de los componentes. Para cambiar cualquier cosa de
la página se edita ese archivo, se guarda y se commitea: Vercel redeploya solo.

### Lo que se toca más seguido

| Qué querés cambiar | Dónde |
|---|---|
| Agregar o sacar un plato | `platos` |
| Precios de los planes | `planes` |
| Teléfono, dirección, horarios | `negocio` |
| Zonas y horarios de entrega | `entrega` |
| Preguntas frecuentes | `faqs` |
| Testimonios | `testimonios` |

### Secciones que aparecen y desaparecen solas

Tres secciones se ocultan cuando su array está vacío. No hace falta tocar
código para sacarlas:

- `testimonios` → vacío por defecto. La sección no se renderiza hasta que haya
  testimonios reales cargados.
- `galeria` → ídem.
- `platos` → si se vacía, desaparece la sección de platos.

---

## Fotos

Las fotos van en `public/images/`. La página **funciona con o sin fotos**: si el
archivo no está, el componente dibuja un bloque tipográfico con trama en lugar
de mostrar una imagen rota.

Los nombres que la página ya está buscando:

```
public/images/pan-de-carne.jpg
public/images/ravioles.jpg
public/images/chop-suey.jpg
```

Para agregar un plato nuevo con foto: poner el archivo en `public/images/` y
sumarlo al array `platos` en `content.ts` con su ruta en el campo `foto`.

**Logo.** Si se sube el logo real a `public/logo.png` (o `.svg` / `.webp`), la
página lo usa automáticamente en el nav y en el pie. Mientras no esté, dibuja
un monograma con las mismas formas y colores de la marca.

Ver `public/images/README.md` para medidas y recomendaciones.

---

## Correr el proyecto

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de producción
npm start       # servir el build
```

Requiere Node 20.9 o superior (Next.js 16).

---

## Deploy en Vercel

1. Entrar a [vercel.com/new](https://vercel.com/new) e importar este repositorio.
2. Vercel detecta Next.js solo. **No hay que configurar nada**: ni variables de
   entorno, ni comandos de build.
3. Darle *Deploy*.

Después del primer deploy, cambiar el dominio en `content.ts`:

```ts
dominio: "https://vycviandas.vercel.app",  // ← poner el dominio final
```

Ese valor se usa para la URL canónica, los metadatos de Open Graph y los datos
estructurados. Si queda mal, Google y WhatsApp muestran la URL equivocada al
compartir el link.

---

## Qué trae la página

| Sección | Para qué está |
|---|---|
| Hero | La promesa del perfil (plato principal, postre y pan) como objeto central |
| Platos | Repertorio real, con foto o bloque tipográfico |
| Planes | Vianda suelta, pack semanal y abono mensual |
| Cómo funciona | Los cuatro pasos del pedido |
| Por qué V&C | Diferenciales |
| Entrega | Retiro por el local y reparto |
| Empresas | Apertura a la venta corporativa |
| Preguntas | Las consultas que hoy se responden por privado |
| Cierre | Última llamada a la acción |

### Detalles que no se ven pero trabajan

- **Cada botón manda un mensaje de WhatsApp distinto.** El que sale de la
  tarjeta del abono mensual dice que es por el abono mensual. Así el pedido
  llega con contexto y no hay que preguntar de dónde viene.
- **Datos estructurados (JSON-LD).** Es lo que hace que Google pueda mostrar
  teléfono, dirección y horarios en el resultado de búsqueda.
- **Imagen de Open Graph.** Cuando se comparte el link por WhatsApp o
  Instagram aparece una tarjeta diseñada, no un link pelado. Está en
  `public/og.png`; si cambian los datos de contacto, hay que regenerarla.
- **Tipografías auto-hosteadas.** Se descargan en el build, no en runtime: la
  página carga sin salto de texto y sin pedirle nada a Google.

---

## Estructura

```
src/
├── app/
│   ├── layout.tsx      metadatos, SEO, tipografías, JSON-LD
│   ├── page.tsx        orden de las secciones
│   ├── globals.css     sistema de diseño completo
│   └── icon.svg        favicon
├── components/         una sección por archivo
└── lib/
    ├── content.ts      ← TODO el contenido
    ├── whatsapp.ts     armado de links con mensaje pre-escrito
    └── archivos.ts     detecta si una foto existe

public/
├── og.png              tarjeta al compartir el link
└── images/             fotos de los platos
```

---

## Antes de publicar

Hay datos provisorios que **hay que confirmar con la clienta**: precios,
horarios y zonas de reparto, entre otros. Están todos listados en
[`CONTENIDO-PENDIENTE.md`](./CONTENIDO-PENDIENTE.md).
