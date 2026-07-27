export interface EnlaceNav {
  etiqueta: string;
  href: string;
}

// Fuente única de la navegación. La consumen Header y Footer.
export const navegacion: EnlaceNav[] = [
  { etiqueta: "Inicio", href: "#inicio" },
  { etiqueta: "Etapas", href: "#etapas" },
  { etiqueta: "Servicios", href: "#servicios" },
  { etiqueta: "Cómo trabajamos", href: "#proceso" },
  { etiqueta: "Sobre VEXA", href: "#sobre" },
  { etiqueta: "Preguntas frecuentes", href: "#faq" },
  { etiqueta: "Contacto", href: "#contacto" },
];
