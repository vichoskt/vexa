import { servicios, type Servicio } from "./servicios";

interface EtapaMeta {
  slug: string;
  /** Verbo que resume el escalón: empezar → ordenar → acompañar. */
  verbo: string;
  /** La frase en primera persona del cliente. El gancho emocional. */
  vozCliente: string;
}

const meta: EtapaMeta[] = [
  {
    slug: "vexa-inicia",
    verbo: "Empezar",
    vozCliente: "Todavía no tengo claridad.",
  },
  {
    slug: "vexa-impulsa",
    verbo: "Ordenar",
    vozCliente: "Publico, pero sin rumbo.",
  },
  {
    slug: "vexa-potencia",
    verbo: "Acompañar",
    vozCliente: "Necesito que alguien lo sostenga conmigo.",
  },
];

export interface Etapa extends EtapaMeta {
  paso: number;
  servicio: Servicio;
}

export const etapas: Etapa[] = meta.map((m, i) => {
  const servicio = servicios.find((s) => s.slug === m.slug);
  if (!servicio) throw new Error(`Etapa sin servicio para el slug: ${m.slug}`);
  return { ...m, paso: i + 1, servicio };
});
