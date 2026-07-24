# CLAUDE.md — Landing Page VEXA

Contexto permanente del proyecto. Léelo completo antes de cualquier tarea.

---

## 0. Desarrollo

Al iniciar el servidor de desarrollo, usar modo background:

```
astro dev --background
```

Administrar el servidor con `astro dev stop`, `astro dev status`, `astro dev logs`.

---

## 1. Qué es esto

Landing page **one-page** para **VEXA**, agencia de marketing digital.
Fuente de contenido: `docs/carta-de-servicios.pdf` (Carta de Servicios v1.0, 22 julio 2026).

**El único trabajo de esta página:** convertir un visitante frío en una
conversación por WhatsApp, formulario o Instagram. No vende online, no cobra,
no muestra precios. Es una página de captación de leads calificados.

Si una decisión de diseño o copy no acerca al visitante a contactar, se corta.

---

## 2. Reglas duras (no negociables)

1. **Nunca mostrar precios ni rangos de precio.** El PDF es explícito: la
   inversión se define según alcance y se entrega en propuesta personalizada.
   Prohibido inventar cifras, "desde $X", o comparativas de precio.
2. **Nunca inventar clientes, casos, testimonios, métricas ni años de
   experiencia.** No tenemos esa información. Donde haga falta prueba social,
   deja el bloque construido pero comentado o con un `TODO:` visible en el
   código, nunca con datos falsos.
3. **Los plazos son referenciales.** Siempre se escriben con la palabra
   "referencial" o equivalente. Nunca como promesa cerrada.
4. **Los datos de contacto son placeholders.** Viven exclusivamente en
   `src/config/site.ts`. Nunca hardcodear un número, correo o handle en un
   componente.
5. **Todo CTA lleva a uno de tres destinos:** WhatsApp, formulario de contacto,
   o Instagram. No hay cuarto destino.
6. **Español de Chile, sin regionalismos fuertes.** Tuteo. Nada de "usted".

---

## 3. Los 6 servicios (contenido canónico)

No modificar nombres. Los bullets pueden reescribirse en tono web, pero el
significado se mantiene.

| Servicio | Para quién | Plazo referencial |
|---|---|---|
| **VEXA INICIA** | Ideas, emprendimientos nuevos o negocios que necesitan claridad | 5–7 días hábiles |
| **VEXA IMPULSA** | Marcas con redes activas, pero sin estrategia u orden | 7–10 días hábiles |
| **VEXA POTENCIA** | Marcas que necesitan acompañamiento continuo | Modalidad mensual |
| **IDENTIDAD VISUAL** | Construir o profesionalizar la apariencia de la marca | 7–15 días hábiles |
| **CREACIÓN DE CONTENIDO** | Recibir piezas visuales o audiovisuales listas para comunicar | Según cantidad y formato |
| **ASESORÍA ESTRATÉGICA** | Decidir antes de elegir o ejecutar un servicio | A coordinar |

**Estructura interna de cada servicio** (idéntica en los 6 — componentizar):
nombre → para quién → 4 bullets de alcance → plazo referencial → CTA.

**Jerarquía comercial:** INICIA → IMPULSA → POTENCIA es una escalera de
madurez del cliente (empezar → ordenar → acompañar). IDENTIDAD VISUAL y
CREACIÓN DE CONTENIDO son servicios de producción transversales. ASESORÍA es
la puerta de entrada de menor fricción. Esto debe leerse visualmente, no
solo explicarse con texto.

---

## 4. Voz y copy

El PDF está escrito en registro institucional y en tercera persona
("En VEXA comprendemos tu situación antes de recomendar"). **Eso no se copia
tal cual a la web.**

Traducción de registro:

- Segunda persona directa. "Sabemos en qué etapa estás antes de recomendarte nada."
- Frases cortas. Verbos activos. Punto en vez de coma.
- Sin superlativos vacíos: prohibido "líderes", "innovador", "360°",
  "soluciones integrales", "potenciamos tu marca al siguiente nivel".
- Los botones dicen qué pasa al hacer clic: "Escribir por WhatsApp", no
  "Contáctanos". "Pedir propuesta", no "Enviar".
- La única línea del PDF que se conserva casi literal es la promesa:
  *"Soluciones claras para ordenar, profesionalizar y hacer avanzar tu marca."*

---

## 5. Dirección visual

Derivada de la identidad existente: el logo es un **ajolote** en degradado
violeta→cian sobre wordmark negro, bajo la línea
*Estrategia · Crecimiento · Resultados*.

### Tokens de color

```
--vx-ink        #1B1035   texto principal, violeta muy oscuro
--vx-canvas     #F7F5FF   fondo base, blanco con tinte lavanda
--vx-violet     #6D3BE8   primario de marca
--vx-cyan       #22B8E8   acento / degradado
--vx-magenta    #C049E0   acento secundario, solo en degradados
--vx-muted      #6B6480   texto secundario, bordes
```

El degradado violeta→cian se usa **con restricción**: logo, un elemento de
firma, y estados activos. No en fondos de sección completos, no en cada card.

### Tipografía

- **Display:** Bricolage Grotesque (variable) — títulos de sección y H1.
- **Cuerpo:** Public Sans — párrafos y bullets.
- **Utilitaria:** JetBrains Mono — etiquetas, plazos referenciales, eyebrows.

El uso de mono para los plazos es deliberado: hereda el ADN de ficha técnica
del documento original y lo convierte en un rasgo de precisión, que es
justamente lo que la agencia vende.

### Elemento de firma

**El riel de etapa.** La tabla "Cómo elegir" de la página 4 del PDF se
convierte en el elemento memorable de la página: un riel horizontal donde el
visitante elige su situación y un marcador (el ajolote) se desplaza hasta la
recomendación correspondiente, revelando la card del servicio. Es el único
lugar donde se gasta presupuesto de animación y complejidad.

Todo lo demás es tipografía disciplinada y espaciado preciso.

### Piso de calidad

Responsive hasta 360px. Foco de teclado visible. `prefers-reduced-motion`
respetado. Contraste AA mínimo en todo texto. Lighthouse ≥ 95 en Performance
y Accessibility.

---

## 6. Stack y convenciones

- **Astro 5** (output estático) + **Tailwind CSS 4** + **TypeScript**.
- Cero JavaScript por defecto. Solo dos islas interactivas:
  `client:visible` en el riel de etapa y en el acordeón de FAQ.
- **Formulario:** Netlify Forms (`data-netlify="true"`), sin backend propio.
- **Deploy:** Netlify, build `astro build`, output `dist/`.
- Fuentes autoalojadas con `@fontsource-variable`. Nada de `<link>` a Google
  Fonts (bloquea render y filtra al visitante).

### Estructura

```
src/
  config/site.ts        ← contacto, URLs, metadatos. Fuente única de verdad.
  data/servicios.ts     ← los 6 servicios tipados. Fuente única de verdad.
  data/faq.ts
  components/
    ServicioCard.astro
    RielDeEtapa.astro   (isla)
    Faq.astro           (isla)
    ...
  layouts/Base.astro
  pages/index.astro
  styles/tokens.css     ← los tokens de la sección 5, como @theme de Tailwind
```

### Reglas de código

- Los colores se consumen **siempre** vía token (`text-vx-ink`), nunca hex
  suelto en un componente.
- Un componente = un trabajo. Si `ServicioCard` empieza a decidir layout de
  sección, se parte.
- Cuidado con la especificidad al mezclar clases de sección y de elemento:
  los paddings verticales los define la sección, nunca el hijo.
- Todo texto visible sale de `data/` o `config/`, no del template.
