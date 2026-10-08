// ─── PAINEL DO SISTEMA · ver como estão os projectos (sem código) ─
// Mostra rota, campanha, registos neste aparelho e permite limpar.
// Se aparecer "false" algures, aqui descobre-se a origem em 10 segundos.
import { useState } from "react";
import { MonitorSmartphone, Trash2, Copy, Check, ChevronDown } from "lucide-react";
import { getCampaign } from "../lib/flow";
import { tipoReal } from "../lib/safe";

function lerBruto(key: string): { existe: boolean; tipo: string; tamanho: string; preview: string } {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return { existe: false, tipo: "ausente", tamanho: "—", preview: "sem dados (normal na 1ª vez)" };
    let parsed: unknown = null;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return { existe: true, tipo: "texto simples", tamanho: `${raw.length} letras`, preview: raw.slice(0, 80) };
    }
    const t = tipoReal(parsed);
    const arr = Array.isArray(parsed) ? parsed : [];
    return {
      existe: true,
      tipo: t,
      tamanho: Array.isArray(parsed) ? `${arr.length} registo(s)` : "não é lista (dado antigo)",
      preview: JSON.stringify(parsed).slice(0, 120),
    };
  } catch {
    return { existe: false, tipo: "bloqueado", tamanho: "—", preview: "navegador bloqueou" };
  }
}

const CHAVES = [
  { key: "machava-leads-v1", nome: "Leads do portal (captura)" },
  { key: "motomoz-clientes-v1", nome: "Clientes MOTOMOZ" },
  { key: "motomoz-pilotos-v1", nome: "Pilotos MOTOMOZ" },
  { key: "cvmaker-draft-v1", nome: "Rascunho CV-MAKER" },
];

export default function SystemPanel() {
  const [aberto, setAberto] = useState(false);
  const [copiado, setCopiado] = useState(false);
  const [limpo, setLimpo] = useState(false);
  const [versao, setVersao] = useState(0); // força releitura após limpar

  const rota = typeof window !== "undefined" ? window.location.hash || "#/ (portal)" : "—";
  const campanha = (() => {
    try {
      return getCampaign();
    } catch {
      return "directo";
    }
  })();

  const linhas = CHAVES.map((c) => ({ ...c, ...lerBruto(c.key) }));

  const diagnostico =
    `DIAGNÓSTICO ECOSSISTEMA — ${new Date().toLocaleString("pt-MZ")}\n` +
    `Rota: ${rota}\nCampanha: ${campanha}\n` +
    linhas.map((l) => `- ${l.nome} [${l.key}]: ${l.existe ? `${l.tipo} · ${l.tamanho}` : "ausente"}`).join("\n");

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(diagnostico);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      /* sem clipboard */
    }
  };

  const limparTudo = () => {
    try {
      CHAVES.forEach((c) => localStorage.removeItem(c.key));
      setLimpo(true);
      setVersao((v) => v + 1);
      setTimeout(() => setLimpo(false), 4000);
    } catch {
      /* bloqueado */
    }
  };

  return (
    <section aria-label="Estado do sistema neste aparelho" className="rounded-[24px] border border-black/10 bg-white p-5 sm:p-6" key={versao}>
      <button
        onClick={() => setAberto(!aberto)}
        aria-expanded={aberto}
        className="flex w-full items-center justify-between gap-3 text-left"
      >
        <span className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-[#f6e27a]">
            <MonitorSmartphone className="h-5 w-5" />
          </span>
          <span>
            <span className="block font-display text-[15px] font-extrabold">Ver como está no meu aparelho</span>
            <span className="block text-[12px] text-neutral-500">Rota, campanha e registos — sem código, sem "false" escondido</span>
          </span>
        </span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-neutral-400 transition ${aberto ? "rotate-180" : ""}`} />
      </button>

      {aberto ? (
        <div className="mt-4">
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-2xl bg-neutral-50 p-3.5 ring-1 ring-black/5">
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-neutral-400">Onde estou agora</p>
              <p className="mt-1 break-all font-mono text-[13px] font-bold">{rota}</p>
            </div>
            <div className="rounded-2xl bg-neutral-50 p-3.5 ring-1 ring-black/5">
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-neutral-400">Campanha (?src=)</p>
              <p className="mt-1 font-mono text-[13px] font-bold">{campanha}</p>
            </div>
          </div>

          <div className="mt-3 space-y-2">
            {linhas.map((l) => (
              <div key={l.key} className="rounded-2xl border border-black/5 bg-neutral-50 p-3.5">
                <p className="text-[13px] font-extrabold">{l.nome}</p>
                <p className="mt-0.5 font-mono text-[11.5px] text-neutral-500">
                  {l.existe ? `${l.tipo} · ${l.tamanho}` : "ausente — normal se ainda não registou"}
                </p>
                {l.existe ? (
                  <p className="mt-1 break-all font-mono text-[11px] text-neutral-400">{l.preview}</p>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-2xl bg-emerald-50 p-3.5 text-[12.5px] leading-relaxed text-emerald-800 ring-1 ring-emerald-200">
            <b>Onde nasce o "false":</b> dados antigos (de testes) ou atributos{" "}
            <span className="font-mono">aria-selected="false"</span> que o navegador mostra ao inspeccionar — isso é
            normal e não é erro. Texto visível nunca deve dizer "false". Se vir a palavra "false" escrita no ecrã,
            toque em <b>Copiar diagnóstico</b> e mande no WhatsApp com print do sítio exacto.
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              onClick={copiar}
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-2xl bg-black px-4 py-3 text-[13px] font-extrabold text-white"
            >
              {copiado ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copiado ? "Copiado!" : "Copiar diagnóstico"}
            </button>
            <button
              onClick={limparTudo}
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border-2 border-red-200 bg-red-50 px-4 py-3 text-[13px] font-extrabold text-red-700"
            >
              <Trash2 className="h-4 w-4" /> Limpar registos
            </button>
          </div>
          {limpo ? (
            <p role="status" className="mt-2 rounded-xl bg-emerald-50 px-4 py-2.5 text-center text-[13px] font-bold text-emerald-700">
              Limpo. Recarregue a página — o "false" antigo morreu aqui.
            </p>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
