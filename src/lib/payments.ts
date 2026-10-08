// ─── PAGAMENTOS SEGUROS · Ecossistema Machava ─────────────────────
// REGRA DE OURO: ficheiro final NUNCA no frontend. Só prévia com marca.
// Validação real = ID M-Pesa confirmado NO EXTRATO (hoje) → webhook ZumboPay (amanhã).

export const PAGAMENTO = {
  mpesa: "84 489 8420",
  mpesaFull: "+258 84 489 8420",
  emola: "87 048 8008",
  emolaFull: "+258 87 048 8008",
  titular: "Joaquim Eugénio Machava",
  paypalInfo: "PayPal diáspora — pedir link no WhatsApp",
};

export type PacoteID = "basico" | "prof" | "premium" | "diaspora";

export const PACOTES: Record<PacoteID, { nome: string; preco: string; moeda: string }> = {
  basico: { nome: "CV Básico", preco: "200", moeda: "MT" },
  prof: { nome: "CV Profissional + Carta", preco: "400", moeda: "MT" },
  premium: { nome: "CV Premium + LinkedIn", preco: "750", moeda: "MT" },
  diaspora: { nome: "CV Diáspora EN/PT", preco: "15", moeda: "USD" },
};

function rand(n: number): string {
  const c = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < n; i++) s += c[Math.floor(Math.random() * c.length)];
  return s;
}

/** Gera ID tipo MACHAVA-CV-7K2P9 — único por pedido, sem dados pessoais */
export function gerarPedidoId(prefixo = "MACHAVA-CV"): string {
  const data = new Date();
  const dd = String(data.getDate()).padStart(2, "0");
  const mm = String(data.getMonth() + 1).padStart(2, "0");
  return `${prefixo}-${dd}${mm}-${rand(5)}`;
}

/** Mensagem WhatsApp com ID — cliente cola ID da transação depois */
export function msgPedido(pedidoId: string, pacote: PacoteID): string {
  const p = PACOTES[pacote];
  return (
    `Olá CV-MAKER! PEDIDO ${pedidoId}\n` +
    `Pacote: ${p.nome} (${p.preco} ${p.moeda})\n` +
    `Mando: dados + vaga + ID M-Pesa/e-Mola.\n` +
    `Aguardo prévia COM MARCA DE ÁGUA.`
  );
}

export function msgComprovativo(pedidoId: string, txId: string, canal: string): string {
  return (
    `COMPROVATIVO ${pedidoId}\n` +
    `Canal: ${canal}\n` +
    `ID transação: ${txId}\n` +
    `(Confirmar no extrato antes de enviar PDF limpo)`
  );
}

/** Valida formato do ID de transação M-Pesa (ex: 10-12 dígitos/letras) */
export function txIdValido(tx: unknown): boolean {
  if (typeof tx !== "string") return false;
  const s = tx.trim().replace(/[\s-]/g, "");
  return /^[A-Za-z0-9]{6,20}$/.test(s);
}

/** Link wa.me com pedido — nunca expõe ficheiro final */
export function waPedido(pedidoId: string, pacote: PacoteID): string {
  const base = `https://wa.me/258844898420?text=${encodeURIComponent(msgPedido(pedidoId, pacote))}`;
  return `${base}%0A%0A[origem: cvpro]`;
}
