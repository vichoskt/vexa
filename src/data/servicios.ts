export type Familia = "escalera" | "produccion" | "entrada";

export interface Servicio {
  slug: string;
  nombre: string;
  paraQuien: string;
  alcance: string[];
  plazo: string;
  familia: Familia;
}

export const servicios: Servicio[] = [
  {
    slug: "vexa-inicia",
    nombre: "VEXA INICIA",
    paraQuien: "Ideas, emprendimientos nuevos o negocios que necesitan claridad.",
    alcance: [
      "Diagnóstico inicial de tu situación",
      "Objetivo y público prioritario",
      "Recomendaciones concretas",
      "Plan de acción",
    ],
    plazo: "5–7 días hábiles, referencial",
    familia: "escalera",
  },
  {
    slug: "vexa-impulsa",
    nombre: "VEXA IMPULSA",
    paraQuien: "Marcas con redes activas, pero sin estrategia u orden.",
    alcance: [
      "Diagnóstico de tu comunicación actual",
      "Pilares de contenido",
      "Calendario mensual",
      "Ideas y llamados a la acción",
    ],
    plazo: "7–10 días hábiles, referencial",
    familia: "escalera",
  },
  {
    slug: "vexa-potencia",
    nombre: "VEXA POTENCIA",
    paraQuien: "Marcas que necesitan acompañamiento continuo.",
    alcance: [
      "Planificación estratégica",
      "Coordinación de contenido",
      "Seguimiento mensual",
      "Revisión y recomendaciones",
    ],
    plazo: "Modalidad mensual",
    familia: "escalera",
  },
  {
    slug: "identidad-visual",
    nombre: "IDENTIDAD VISUAL",
    paraQuien: "Construir o profesionalizar la apariencia de tu marca.",
    alcance: [
      "Logo y versiones según alcance",
      "Paleta y tipografías",
      "Lineamientos de uso",
      "Aplicaciones definidas",
    ],
    plazo: "7–15 días hábiles, referencial",
    familia: "produccion",
  },
  {
    slug: "creacion-de-contenido",
    nombre: "CREACIÓN DE CONTENIDO",
    paraQuien: "Recibir piezas visuales o audiovisuales listas para comunicar.",
    alcance: [
      "Piezas según cantidad definida",
      "Adaptación a formatos",
      "Edición definida",
      "Revisiones indicadas en propuesta",
    ],
    plazo: "Según cantidad y formato, referencial",
    familia: "produccion",
  },
  {
    slug: "asesoria-estrategica",
    nombre: "ASESORÍA ESTRATÉGICA",
    paraQuien: "Decidir antes de elegir o ejecutar un servicio.",
    alcance: [
      "Sesión de 60–90 minutos",
      "Revisión de tu caso",
      "Recomendaciones",
      "Resumen posterior por escrito",
    ],
    plazo: "A coordinar",
    familia: "entrada",
  },
];
