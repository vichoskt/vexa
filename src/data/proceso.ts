export interface PasoProceso {
  numero: string;
  titulo: string;
  descripcion: string;
}

// Las "condiciones generales" del PDF, reescritas como proceso en segunda
// persona. El objetivo es transmitir que no hay sorpresas de precio.
export const proceso: PasoProceso[] = [
  {
    numero: "01",
    titulo: "Conversamos",
    descripcion:
      "Primero entendemos tu situación. Diagnosticamos antes de recomendarte nada.",
  },
  {
    numero: "02",
    titulo: "Propuesta",
    descripcion:
      "Te llega por escrito el alcance, los plazos, las revisiones y el valor exacto. Sin sorpresas.",
  },
  {
    numero: "03",
    titulo: "Inicio",
    descripcion:
      "Cuando das el visto bueno, coordinamos el anticipo y reunimos los materiales para partir.",
  },
  {
    numero: "04",
    titulo: "Entrega",
    descripcion:
      "Entregamos con las revisiones que acordamos. Todo lo que hablamos, cumplido.",
  },
];
