import { site } from "../config/site";

/**
 * Construye un enlace wa.me con mensaje precargado.
 * Devuelve null si el número sigue en placeholder, para que el
 * elemento que lo consume decida no renderizarse (regla dura §7).
 */
export function whatsappUrl(mensaje: string = site.whatsapp.mensaje): string | null {
  const numero = site.whatsapp.numero;
  if (!numero || numero.startsWith("TODO")) return null;
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}

/**
 * wa.me con mensaje precargado para un servicio específico.
 * Si el número sigue en placeholder devuelve null.
 */
export function whatsappUrlServicio(nombreServicio: string): string | null {
  return whatsappUrl(
    `Hola VEXA, quiero pedir una propuesta para ${nombreServicio}.`,
  );
}

/** URL del perfil de Instagram, o null si sigue en placeholder. */
export function instagramUrl(): string | null {
  const handle = site.instagram;
  if (!handle || handle.startsWith("TODO")) return null;
  return `https://instagram.com/${handle}`;
}

/** mailto:, o null si el correo sigue en placeholder. */
export function correoUrl(): string | null {
  const correo = site.correo;
  if (!correo || correo.startsWith("TODO")) return null;
  return `mailto:${correo}`;
}
