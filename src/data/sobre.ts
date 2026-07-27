export interface PilarVexa {
  titulo: string;
  descripcion: string;
}

// Contenido de la sección "Sobre VEXA". Derivado de la carta de servicios y del
// propio lenguaje de la marca. Sin métricas, clientes ni años inventados (§2).
export const sobre = {
  lead: "En VEXA ordenamos lo que hoy está disperso: acompañamos a emprendedoras, negocios y marcas a convertir ideas sueltas en estrategia, identidad y contenido con dirección.",
  pilares: [
    {
      titulo: "Estrategia clara",
      descripcion:
        "Primero el rumbo: a quién le hablas, con qué objetivo y por dónde partir.",
    },
    {
      titulo: "Identidad profesional",
      descripcion:
        "Una imagen que se ve seria, coherente y reconocible en cada pieza.",
    },
    {
      titulo: "Contenido con dirección",
      descripcion:
        "Piezas que comunican y avanzan hacia una meta, no que solo llenan el feed.",
    },
  ] satisfies PilarVexa[],
} as const;
