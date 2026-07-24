# VEXA — Landing page

Landing one-page para **VEXA**, agencia de marketing digital. Convierte visitantes
en conversaciones por WhatsApp, formulario o Instagram. No vende online, no
muestra precios.

Stack: **Astro 5** (estático) · **Tailwind CSS 4** · **TypeScript**. Cero
JavaScript salvo dos mejoras progresivas (riel de etapa y envío del formulario).

---

## Cómo correr

```bash
npm install
npm run dev        # servidor de desarrollo en http://localhost:4321
```

```bash
npm run build      # genera el sitio estático en dist/
npm run preview    # sirve dist/ localmente para revisar el build
```

Regenerar la imagen social (Open Graph) tras cambiar la marca:

```bash
node scripts/generar-og.mjs   # escribe public/og-image.png (1200×630)
```

---

## Cómo desplegar (Netlify)

1. Conecta el repositorio en Netlify.
2. Build command: `npm run build` · Publish directory: `dist`.
3. El formulario de contacto usa **Netlify Forms** (`data-netlify="true"`). Se
   detecta automáticamente en el HTML estático tras el primer deploy; los envíos
   aparecen en **Forms** del panel de Netlify. El honeypot (`bot-field`) filtra spam.
4. Sin JavaScript, el formulario redirige a `/gracias`. Con JavaScript, envía por
   fetch y muestra los estados de éxito/error en la misma página.

> **Importante:** el formulario Netlify solo funciona desplegado en Netlify. En
> otro host (p. ej. GitHub Pages) el envío no procesa; ahí conviene un backend o
> servicio de formularios alternativo.

---

## ⚠️ Valores placeholder pendientes de completar

### `src/config/site.ts` — fuente única de contacto

| Campo     | Estado actual                | Qué hacer |
|-----------|------------------------------|-----------|
| `whatsapp.numero` | ✅ `56966665734`       | Listo. |
| `instagram`       | ✅ `agenciavexa.cl`    | Listo. |
| `correo`          | ❌ `TODO_CORREO`       | Poner el correo real. **Mientras siga en `TODO_`, no se renderiza** en el aside de contacto ni en el footer (por diseño). |
| `url`             | ❌ `https://TODO-DOMINIO.cl` | Poner el dominio final. Afecta la URL absoluta de la imagen OG y el `url` del JSON-LD. |

### `astro.config.mjs`

- Agregar `site: "https://TU-DOMINIO.cl"` para que la imagen OG y los enlaces
  canónicos usen URLs absolutas correctas. Debe coincidir con `url` de `site.ts`.

### Marca / assets

- **`public/og-image.png`** — generada automáticamente (`scripts/generar-og.mjs`).
  Reemplazable si se quiere un diseño distinto.
- **`public/favicon.svg`** — favicon provisional (una "V" en degradado). Se puede
  reemplazar por un export definitivo desde los logos oficiales.
- **Logos oficiales en `public/images/`** — `VEXA_Logo_Principal_Color_v1.0.pdf` y
  `..._Fondo_Oscuro_v1.0.pdf`. Aún no se usan en la web: el header/footer usa el
  wordmark tipográfico. `logo-horizontal.png` tiene el texto claro (pensado para
  fondo oscuro) y no se ve sobre el canvas claro; si se quiere un logo en imagen,
  exportar una versión para fondo claro desde el PDF `_Color_`.

---

## Estructura

```
src/
  config/site.ts       ← contacto, URLs, metadatos (fuente única de verdad)
  data/
    servicios.ts       ← los 6 servicios tipados (fuente única de verdad)
    etapas.ts          ← la escalera INICIA/IMPULSA/POTENCIA (deriva de servicios)
    riel.ts            ← las 5 opciones del riel (deriva de servicios)
    proceso.ts         ← los 4 pasos de "Cómo trabajamos"
    faq.ts             ← las 5 preguntas frecuentes
  lib/contacto.ts      ← helpers de WhatsApp / Instagram / correo (ocultan placeholders)
  components/          ← Hero, EscaleraEtapas, RielDeEtapa, ServicioCard, Servicios,
                         Proceso, Faq, Contacto, Footer, BotonWhatsapp
  layouts/Base.astro   ← <head>, meta/OG, JSON-LD ProfessionalService
  pages/
    index.astro        ← la landing
    gracias.astro      ← confirmación de envío (fallback sin JS)
  styles/tokens.css    ← tokens de color y tipografía como @theme de Tailwind
scripts/generar-og.mjs ← genera la imagen Open Graph
```

## Reglas de contenido (no negociables)

- Nunca mostrar precios ni rangos. La inversión se define en propuesta.
- Nunca inventar clientes, casos, testimonios ni métricas.
- Los plazos son siempre referenciales.
- Datos de contacto solo en `src/config/site.ts`.
- Todo CTA lleva a WhatsApp, formulario o Instagram.

## Calidad

Lighthouse móvil sobre el build de producción: **Performance 100 · Accessibility
100 · Best Practices 100 · SEO 100**. Contraste AA en todo el texto, foco de
teclado visible, `prefers-reduced-motion` respetado, y el riel de etapa funciona
sin JavaScript (tabla estática con enlaces).
