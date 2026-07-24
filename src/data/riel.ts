import { servicios, type Servicio } from "./servicios";

export interface OpcionRiel {
  /** Texto literal de la columna "Si necesitas…" del PDF (p.4). */
  necesitas: string;
  /** Servicio recomendado (columna "Recomendación inicial"). */
  slug: string;
  /** Matiz opcional: la tabla ofrece una alternativa para el primer caso. */
  nota?: string;
  servicio: Servicio;
}

const meta = [
  {
    necesitas: "Claridad para comenzar",
    slug: "vexa-inicia",
    nota: "O una asesoría, si prefieres decidir antes de ejecutar.",
  },
  { necesitas: "Ordenar redes y contenido", slug: "vexa-impulsa" },
  { necesitas: "Apoyo continuo", slug: "vexa-potencia" },
  { necesitas: "Una imagen profesional", slug: "identidad-visual" },
  { necesitas: "Piezas listas para publicar", slug: "creacion-de-contenido" },
] as const;

export const opcionesRiel: OpcionRiel[] = meta.map((m) => {
  const servicio = servicios.find((s) => s.slug === m.slug);
  if (!servicio) throw new Error(`Opción de riel sin servicio: ${m.slug}`);
  return { ...m, servicio };
});
