// Validadores extra — nunca devolvem texto, só boolean/string limpa
import { txt } from "./safe";

export function nomeValido(n: unknown): boolean {
  return txt(n).length >= 2;
}

export function telefoneValido(t: unknown): boolean {
  if (typeof t !== "string") return false;
  const d = t.replace(/\D/g, "");
  if (d.length === 9 && /^(82|83|84|85|86|87)/.test(d)) return true;
  if (d.length === 12 && d.startsWith("258") && /^(82|83|84|85|86|87)/.test(d.slice(3))) return true;
  return false;
}

export function matriculaValida(m: unknown): boolean {
  if (typeof m !== "string") return false;
  const s = m.trim().toUpperCase().replace(/[\s.]+/g, "-");
  return /^[A-Z]{2,3}-\d{3,4}-[A-Z]{2}$/.test(s);
}

export function formatarMatricula(m: string): string {
  return txt(m).toUpperCase().replace(/[\s.]+/g, "-").replace(/-+/g, "-");
}
