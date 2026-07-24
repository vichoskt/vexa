export interface Faq {
  pregunta: string;
  respuesta: string;
}

// Derivadas de las condiciones generales del PDF. Sin precios, plazos
// referenciales, y una respuesta honesta sobre resultados (regla dura §2).
export const faqs: Faq[] = [
  {
    pregunta: "¿Los plazos son fijos?",
    respuesta:
      "No, son referenciales. Dependen del alcance y de qué tan rápido nos lleguen tus materiales y aprobaciones. En la propuesta dejamos un plazo estimado para tu caso.",
  },
  {
    pregunta: "¿Cuánto cuesta?",
    respuesta:
      "Depende del alcance. No trabajamos con precios de lista porque cada marca parte de un punto distinto. Te entregamos el valor exacto por escrito en la propuesta, antes de que te comprometas a nada.",
  },
  {
    pregunta: "¿Qué no está incluido?",
    respuesta:
      "Salvo que lo indiquemos expresamente, no incluimos publicidad pagada, impresión, dominio, hosting, fotografía ni servicios de proveedores externos. Si tu proyecto los necesita, te lo decimos y queda claro en la propuesta.",
  },
  {
    pregunta: "¿Cuántas revisiones tengo?",
    respuesta:
      "Las que definamos en la propuesta para ese servicio. Quedan por escrito para que ambos sepamos a qué atenernos, sin discusiones después.",
  },
  {
    pregunta: "¿Garantizan resultados?",
    respuesta:
      "No prometemos números. Trabajamos con estrategia y criterio, pero los resultados también dependen de tus decisiones, tus recursos, tu mercado y de cómo se ejecuta lo que proponemos. Si alguien te garantiza cifras exactas, desconfía.",
  },
];
