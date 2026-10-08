// ─── SAFE TEXT · blindagem definitiva contra "false" no ecrã ──────
// REGRA DE OURO: nenhum boolean/null/undefined/number solto chega ao JSX.
// Tudo passa por aqui. Se não for texto real, devolve "" ou fallback.

const PALAVRAS_PROIBIDAS = new Set([
  "false", "true", "undefined", "null", "nan", "none", "nil",
  "[object object]", "object", "[object]",
]);

/** Devolve string limpa ou "" — NUNCA "false". */
export function txt(v: unknown, fallback = ""): string {
  if (typeof v !== "string") return fallback;
  const s = v.trim();
  if (s.length === 0) return fallback;
  if (PALAVRAS_PROIBIDAS.has(s.toLowerCase())) return fallback;
  return s;
}

/** Alias intuitivo: texto ou fallback. */
export function textoOu(v: unknown, fallback: string): string {
  return txt(v, fallback);
}

/** true só se for texto real com 2+ letras (nome, zona, etc). */
export function nomeValido(n: unknown): boolean {
  return txt(n).length >= 2;
}

/** Limpa mensagem inteira — remove tokens soltos que virariam "false". */
export function sanitizarMensagem(msg: unknown): string {
  if (typeof msg !== "string") return "Olá! Quero atendimento. Vim do portal.";
  let s = msg;
  // parte em tokens e remove os proibidos isolados
  s = s
    .split(/(\s+)/)
    .filter((tok) => {
      const t = tok.trim().toLowerCase();
      if (t === "") return true; // mantém espaços
      return !PALAVRAS_PROIBIDAS.has(t);
    })
    .join("")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  if (s.length === 0) return "Olá! Quero atendimento. Vim do portal.";
  return s;
}

/** Para debug: diz exactamente o tipo real (o sócio vê no painel). */
export function tipoReal(v: unknown): string {
  if (v === null) return "null";
  if (v === undefined) return "undefined";
  if (Array.isArray(v)) return `array[${v.length}]`;
  if (typeof v === "string") return v.trim() === "" ? "string vazia" : `texto "${v.slice(0, 30)}"`;
  return typeof v; // boolean, number, object...
}
