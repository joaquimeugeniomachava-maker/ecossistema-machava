import { useState } from "react";
import { ShieldAlert, Crown, Crosshair, HeartHandshake, Activity, Copy, Check, Share2, BadgeDollarSign } from "lucide-react";
import { KEYHOUSE_5_REGRAS, KEYHOUSE_COMISSAO_TURBO, KEYHOUSE_NICHOS, KEYHOUSE_TESTE100, CV_PRO, CV_TURBO_ACOES, VIRAL_COPY, REGRAS_UNIVERSAIS, HEALTH_CHECKS } from "../dataTurbo";
import { waFlow } from "../lib/flow";
import { SectionKicker } from "./chrome";

// ─── CV TURBO: preçário + pagamento sem fugas + turbo ────────────
export function CvPrecarioTurbo() {
  const [pack, setPack] = useState("prof");
  const sel = CV_PRO.packs.find((p) => p.id === pack) ?? CV_PRO.packs[1];
  const moeda = (p: { preco: number; moeda?: string }) => (p.moeda ? `${p.preco} ${p.moeda}` : `${p.preco} MT`);
  return (
    <section aria-label="Preçário turbo CV" className="rounded-[28px] bg-[#150A2E] p-6 text-white sm:p-8">
      <SectionKicker dark accent="#A78BFA">CV-MAKER · máquina de renda · nunca menos de 200 MT</SectionKicker>
      <h3 className="font-display text-2xl font-extrabold">Preçário TURBO. <span className="text-[#C4B5FD]">Tempo vale.</span></h3>
      <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
        {CV_PRO.packs.map((p) => (
          <button key={p.id} onClick={() => setPack(p.id)} aria-pressed={pack === p.id}
            className={`rounded-2xl border-2 p-4 text-left transition ${pack === p.id ? "border-[#A78BFA] bg-white/10" : "border-white/10 bg-white/5 hover:border-white/30"}`}>
            <p className="font-display text-[15px] font-extrabold">{p.nome}</p>
            <p className="tick font-display mt-1 text-2xl font-extrabold text-[#C4B5FD]">{moeda(p)}</p>
            <ul className="mt-2 space-y-1 text-[12px] text-white/65">{p.inclui.map((x, i) => <li key={i}>✓ {x}</li>)}</ul>
            <p className="mt-2 text-[11px] font-bold text-amber-200">Upsell: {p.upsell}</p>
          </button>
        ))}
      </div>
      <p className="mt-2 text-center text-[11px] text-white/40">{CV_PRO.promoPrimeiros} · M-Pesa {CV_PRO.mpesa} · e-Mola {CV_PRO.emola} · {CV_PRO.paypal}</p>
      <a href={waFlow(`Olá! Quero ${sel.nome} (${moeda(sel)}). Mando dados + vaga + ID M-Pesa:`, "cvpro")} target="_blank" rel="noreferrer"
        className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-[#7C3AED] px-5 py-4 text-sm font-extrabold text-white hover:brightness-110">
        Pedir {sel.nome} · {moeda(sel)}
      </a>
      <div className="mt-4 rounded-2xl bg-black/40 p-4 ring-1 ring-white/10">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-amber-200">Fluxo sem fugas (manual, anti-burla)</p>
        <ol className="mt-2 space-y-1.5 text-[13px] text-white/75">{CV_PRO.fluxo.map((f, i) => <li key={i} className="flex gap-2"><span className="font-extrabold text-[#C4B5FD]">{i + 1}.</span>{f}</li>)}</ol>
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {CV_TURBO_ACOES.map((t, i) => (
          <div key={i} className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
            <p className="text-[12.5px] font-extrabold">{t.acao}</p>
            <p className="mt-0.5 text-[12px] text-emerald-200">{t.impacto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── KEYHOUSE ANTI-FALIR ─────────────────────────────────────────
export function KeyhouseAntiFalir() {
  return (
    <section aria-label="5 regras anti-falir" className="rounded-[28px] border-2 border-red-900/20 bg-gradient-to-br from-white to-red-50/70 p-6 sm:p-8">
      <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-800"><ShieldAlert className="h-4 w-4" /> Sobreviver para lucrar · 5 regras</p>
      <h3 className="font-display mt-1 text-2xl font-extrabold">Banca nunca rota. <span className="text-red-700">Regra é regra.</span></h3>
      <div className="mt-4 grid gap-2 md:grid-cols-2 lg:grid-cols-5">
        {KEYHOUSE_5_REGRAS.map((r) => (
          <div key={r.n} className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
            <p className="flex h-8 w-8 items-center justify-center rounded-full bg-red-900 font-display text-[15px] font-extrabold text-white">{r.n}</p>
            <p className="mt-2 text-[13.5px] font-extrabold leading-snug">{r.regra}</p>
            <p className="mt-1 text-[12px] text-neutral-500">{r.porque}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function KeyhouseComissaoTurbo() {
  return (
    <section aria-label="Comissão turbo" className="rounded-[28px] bg-[#0a0a0a] p-6 text-white sm:p-8">
      <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#f6e27a]"><BadgeDollarSign className="h-4 w-4" /> Comissão TURBO · paga o vendedor · só no fecho</p>
      <h3 className="font-display mt-1 text-2xl font-extrabold">Comprador nunca paga. <span className="gold-text">Ponto final.</span></h3>
      <div className="mt-4 overflow-x-auto rounded-2xl ring-1 ring-white/10">
        <table className="w-full min-w-[640px] text-left text-[13px]">
          <thead><tr className="bg-white/5 text-[11px] uppercase tracking-widest text-white/40"><th className="p-3">Negócio</th><th className="p-3">Quem paga</th><th className="p-3">Valor</th><th className="p-3">Quando</th><th className="p-3">Exemplo</th></tr></thead>
          <tbody>{KEYHOUSE_COMISSAO_TURBO.map((c, i) => (
            <tr key={i} className="border-t border-white/5">
              <td className="p-3 font-extrabold">{c.tipo}</td><td className="p-3 text-white/60">{c.quem}</td>
              <td className="p-3"><span className="rounded-full bg-[#d4af37]/15 px-2.5 py-1 font-extrabold text-[#f6e27a]">{c.valor}</span></td>
              <td className="p-3 text-white/55">{c.quando}</td><td className="tick p-3 text-white/55">{c.ex}</td>
            </tr>))}</tbody>
        </table>
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {KEYHOUSE_NICHOS.map((n, i) => (
          <div key={i} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
            <p className="flex items-center gap-1.5 text-[13px] font-extrabold"><Crosshair className="h-4 w-4 text-[#f6e27a]" />{n.nicho}</p>
            <p className="mt-1 text-[12px] text-white/55">{n.porque}</p>
            <p className="tick mt-1.5 text-[13px] font-extrabold text-emerald-300">{n.media}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function KeyhouseTeste100() {
  return (
    <section aria-label="Teste dos 100" className="rounded-[28px] border border-black/10 bg-white p-6 sm:p-8">
      <SectionKicker>Teste dos 100 · com kill criteria</SectionKicker>
      <h3 className="font-display text-2xl font-extrabold">Se falhar, pára e ajusta. <span className="gold-text">Não insiste em morto.</span></h3>
      <div className="mt-4 grid gap-2 md:grid-cols-2 xl:grid-cols-4">
        {KEYHOUSE_TESTE100.map((t, i) => (
          <div key={i} className="rounded-2xl bg-neutral-50 p-4 ring-1 ring-black/5">
            <p className="font-display text-[15px] font-extrabold">{t.etapa}</p>
            <p className="mt-0.5 text-[12.5px] text-neutral-500">Meta: {t.meta}</p>
            <p className="mt-2 rounded-xl bg-red-900 px-3 py-2 text-[12px] font-bold text-white">☠ {t.kill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── VIRAL DIÁSPORA · ÍNDICO → ROVUMA ────────────────────────────
export function ViralDiaspora() {
  const [copiado, setCopiado] = useState("");
  const copiar = async (t: string, id: string) => {
    try { await navigator.clipboard.writeText(t); setCopiado(id); setTimeout(() => setCopiado(""), 2200); } catch { /* sem clipboard */ }
  };
  const partilhar = (texto: string) => {
    const url = `https://wa.me/?text=${encodeURIComponent(texto + "\n\n" + (typeof window !== "undefined" ? window.location.href : ""))}`;
    window.open(url, "_blank");
  };
  return (
    <section aria-label="Partilhar com emoção" className="overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0b1e42] via-[#0a0a0a] to-[#0a0a0a] p-6 text-white sm:p-10">
      <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#f6e27a]"><HeartHandshake className="h-4 w-4" /> Índico → Rovuma · diáspora partilha com emoção</p>
      <h3 className="font-display mt-1 max-w-2xl text-2xl font-extrabold sm:text-3xl">Qualquer coisa que o investidor procura, <span className="gold-text">já temos. É só pedir.</span></h3>
      <p className="mt-2 max-w-2xl text-[13.5px] text-white/60">Do terreno na praia ao armazém no corredor, do CV à mota — um número, quatro soluções. Feito em Moçambique, para o mundo.</p>
      <div className="mt-5 grid gap-3 lg:grid-cols-3">
        {VIRAL_COPY.map((v, i) => (
          <div key={i} className="flex flex-col rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-white/40">{v.canal}</p>
            <p className="font-display mt-1 text-[15px] font-extrabold">{v.titulo}</p>
            <p className="mt-2 flex-1 rounded-2xl bg-black/40 p-3 text-[13px] leading-relaxed text-white/75">"{v.texto}"</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button onClick={() => copiar(v.texto, `v-${i}`)} className="flex items-center justify-center gap-1.5 rounded-xl bg-white/10 px-3 py-2.5 text-[12px] font-bold hover:bg-white/20">
                {copiado === `v-${i}` ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}{copiado === `v-${i}` ? "Copiado!" : "Copiar"}
              </button>
              <button onClick={() => partilhar(v.texto)} className="flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-2.5 text-[12px] font-extrabold text-white">
                <Share2 className="h-3.5 w-3.5" /> Partilhar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── MONITOR ANTI-BANCA-ROTA ─────────────────────────────────────
export function HealthMonitor() {
  const [ok, setOk] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setOk((s) => ({ ...s, [id]: !s[id] }));
  const total = HEALTH_CHECKS.length;
  const feito = Object.values(ok).filter(Boolean).length;
  const pct = Math.round((feito / total) * 100);
  return (
    <section aria-label="Monitor de falhas" className="rounded-[28px] border border-black/10 bg-white p-6 sm:p-8">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-emerald-700"><Activity className="h-4 w-4" /> Monitor · banca nunca rota · {feito}/{total}</p>
          <h3 className="font-display text-2xl font-extrabold">Falha detectada, <span className="gold-text">falha corrigida.</span></h3>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-36 overflow-hidden rounded-full bg-neutral-100" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Saúde do sistema">
            <div className={`h-full transition-all ${pct === 100 ? "bg-emerald-500" : "bg-amber-400"}`} style={{ width: `${pct}%` }} />
          </div>
          <span className="tick text-[13px] font-extrabold">{pct}%</span>
        </div>
      </div>
      <div className="mt-4 grid gap-2 md:grid-cols-2">
        {HEALTH_CHECKS.map((h) => (
          <button key={h.id} onClick={() => toggle(h.id)} aria-pressed={!!ok[h.id]}
            className={`rounded-2xl border p-4 text-left transition ${ok[h.id] ? "border-emerald-300 bg-emerald-50/60" : "border-black/10 hover:border-black/30"}`}>
            <p className="flex items-center gap-2 text-[13.5px] font-extrabold">
              <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[12px] ${ok[h.id] ? "bg-emerald-500 text-white" : "bg-neutral-200"}`}>{ok[h.id] ? "✓" : "○"}</span>{h.nome}
            </p>
            <p className="mt-1 pl-8 text-[12.5px] text-neutral-500">Como: {h.como}</p>
            <p className="mt-0.5 pl-8 text-[12.5px] font-bold text-neutral-600">→ {h.acao}</p>
          </button>
        ))}
      </div>
      <div className="mt-3 rounded-2xl bg-[#0a0a0a] p-4 text-[12.5px] leading-relaxed text-white/70">
        <b className="text-[#f6e27a]">Regras universais:</b> {REGRAS_UNIVERSAIS.join(" · ")}
        <span className="mt-1 flex items-center gap-1.5 text-white/40"><Crown className="h-3.5 w-3.5 text-[#d4af37]" /> Revisão semanal, 10 min, sem código.</span>
      </div>
    </section>
  );
}
