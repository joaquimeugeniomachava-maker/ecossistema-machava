// ─── FLUXO AUTOMÁTICO · Ecossistema Machava ───────────────────────
// Lógica central de campanhas. O sócio NÃO precisa mexer aqui.
// Campo usa só links ?src=panfleto|status|feira|boca — o código trata o resto.
import { txt, textoOu, sanitizarMensagem } from "./safe";

export { txt, textoOu, sanitizarMensagem };
export { nomeValido, telefoneValido, matriculaValida, formatarMatricula } from "./safe-extra";

export const WA_NUMBER = "258844898420";

export function getCampaign(): string {
  try {
    const h = window.location.hash || "";
    const qIndex = h.indexOf("?");
    if (qIndex === -1) return "directo";
    const params = new URLSearchParams(h.slice(qIndex + 1));
    const v = params.get("src");
    return txt(v, "directo").slice(0, 30);
  } catch {
    return "directo";
  }
}

export function textoValido(t: unknown): boolean {
  return txt(t).length > 0;
}

export function waFlow(message: unknown, src?: string): string {
  const campanha = txt(src ?? (typeof window !== "undefined" ? getCampaign() : "directo"), "directo");
  const seguro = sanitizarMensagem(message);
  const tagged = `${seguro}\n\n[origem: ${campanha}]`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(tagged)}`;
}

export type Lead = {
  nome: string;
  contacto: string;
  interesse: "keyhouse" | "motomoz" | "sistafe" | "cvmaker";
  mensagem: string;
  origem: string;
  data: string;
};

const LEAD_KEY = "machava-leads-v1";

export function saveLead(lead: Lead): void {
  try {
    const raw = localStorage.getItem(LEAD_KEY);
    const arr: Lead[] = raw ? JSON.parse(raw) : [];
    arr.push(lead);
    localStorage.setItem(LEAD_KEY, JSON.stringify(arr.slice(-200)));
  } catch {
    /* sem storage — fluxo continua via WhatsApp */
  }
}

export function countLeads(): number {
  try {
    const raw = localStorage.getItem(LEAD_KEY);
    return raw ? (JSON.parse(raw) as Lead[]).length : 0;
  } catch {
    return 0;
  }
}

// ─── Funis por projecto: 3 toques até transacção ─────────────────
export const FUNNELS: Record<
  string,
  { passos: { t: string; d: string }[]; msg1: string; follow1: string; follow2: string }
> = {
  keyhouse: {
    passos: [
      { t: "1 · Toque", d: "Visita em 24h via WhatsApp. Sem chamada perdida." },
      { t: "2 · Visita", d: "Confirmação + localização + foto do consultor." },
      { t: "3 · Fecha", d: "Contrato + recibo M-Pesa. Chave na mão." },
    ],
    msg1: "Olá KEYHOUSE! Quero visitar um imóvel. Procuro:",
    follow1: "Olá! Aqui é Joaquim (KEYHOUSE). Recebi o seu pedido de visita. Qual zona e orçamento? Respondo em minutos.",
    follow2: "Ainda disponível para visita amanhã às 10h ou 15h? Confirmo o consultor agora.",
  },
  motomoz: {
    passos: [
      { t: "1 · Toque", d: "Pedido com origem + destino. Preço fechado antes." },
      { t: "2 · Piloto", d: "Nome + chapa + ETA em minutos." },
      { t: "3 · Rota", d: "Recibo + avaliação. Empresa recebe factura." },
    ],
    msg1: "Olá MOTOMOZ! Quero pedir uma corrida. Estou em:",
    follow1: "Olá! MOTOMOZ aqui. Origem e destino, por favor? Já mando preço fechado + ETA.",
    follow2: "Piloto a caminho? Se demorar +10 min, avise — reencaminho grátis.",
  },
  sistafe: {
    passos: [
      { t: "1 · Toque", d: "Manual 500 MT ou turma. Comprovativo no chat." },
      { t: "2 · PDF", d: "PDF em 2h + factura NUIT no email." },
      { t: "3 · Turma", d: "Certificado + grupo de estudo vitalício." },
    ],
    msg1: "Olá MOZ-SISTAFE! Quero o Manual Completo (500 MT).",
    follow1: "Olá! MOZ-SISTAFE aqui. M-Pesa 84 489 8420 em nome de Joaquim Machava. Envie comprovativo e mando o PDF em 2h.",
    follow2: "Conseguiu abrir o PDF? Capítulo MEX pág. 40 resolve 80% dos bloqueios. Dúvida? Mande print.",
  },
  cvmaker: {
    passos: [
      { t: "1 · Toque", d: "Modelo + foto do CV actual (se tiver)." },
      { t: "2 · Revisão", d: "Devolvo em 24h com 5 correcções marcadas." },
      { t: "3 · PDF final", d: "PDF de 1 página pronto a enviar." },
    ],
    msg1: "Olá CV-MAKER! Quero revisão do meu CV.",
    follow1: "Olá! CV-MAKER aqui. Envie o CV actual (foto/PDF) + vaga que quer. Devolvo revisto em 24h.",
    follow2: "O seu CV revisto está pronto! Quer que adapte para mais 1 vaga grátis esta semana?",
  },
};

export const CAMPANHAS = [
  { id: "status", nome: "Status WhatsApp", onde: "Seu status diário", dica: "1 print + 1 link por dia, 19h–21h" },
  { id: "panfleto", nome: "Panfleto / QR", onde: "Papel A6 + QR na rua", dica: "QR aponta para #/motomoz?src=panfleto etc." },
  { id: "grupo", nome: "Grupos", onde: "Grupos de bairro, UGEA, emprego", dica: "Valor primeiro, link no fim. Sem spam." },
  { id: "boca", nome: "Boca-a-boca", onde: "Clientes + pilotos + formandos", dica: "Peça: 'manda para 2 amigos + print = bónus'" },
  { id: "feira", nome: "Feira / Igreja / Escola", onde: "Banca + tablet demo", dica: "Demo ao vivo de 60 seg + captura nome" },
];
