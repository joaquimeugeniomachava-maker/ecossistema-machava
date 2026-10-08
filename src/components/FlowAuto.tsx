import { useState } from "react";
import { Zap, MousePointerClick, BellRing, Handshake, Copy, Check, QrCode } from "lucide-react";
import { PROJECTS_META, COFRE } from "../data";
import { FUNNELS, CAMPANHAS, waFlow } from "../lib/flow";
import { SectionKicker } from "./chrome";

export default function FlowAuto() {
  const [tab, setTab] = useState("motomoz");
  const [copied, setCopied] = useState("");
  const funnel = FUNNELS[tab];
  const meta = PROJECTS_META.find((p) => p.id === tab)!;

  const copy = async (texto: string, id: string) => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopied(id);
      setTimeout(() => setCopied(""), 2000);
    } catch {
      /* clipboard indisponível */
    }
  };

  const base = typeof window !== "undefined" ? window.location.origin + window.location.pathname : "";

  return (
    <section aria-labelledby="fluxo-title" className="mx-auto max-w-7xl px-4 py-14">
      <div className="overflow-hidden rounded-[28px] bg-[#0a0a0a] p-6 text-white sm:p-10">
        <SectionKicker dark>Fluxo automático · trabalha por si 24h</SectionKicker>
        <h2 id="fluxo-title" className="font-display max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          1 link → 3 toques → <span className="gold-text">cliente atendido.</span>
        </h2>
        <p className="mt-2 max-w-2xl text-[14px] text-white/60">
          Acabou a negligência por fragmentação: um só funil por projecto. O cliente toca, o WhatsApp abre preenchido,
          e as respostas de seguimento já estão prontas para copiar. Sem app nova, sem mensalidade.
        </p>

        {/* passos universais */}
        <ol className="mt-6 grid gap-2 sm:grid-cols-3">
          {[
            { i: <MousePointerClick className="h-5 w-5" aria-hidden="true" />, t: "Toque", d: "Cliente toca no link da campanha (?src=). Mensagem já vem escrita." },
            { i: <BellRing className="h-5 w-5" aria-hidden="true" />, t: "Resposta em minutos", d: "Use os 2 textos prontos abaixo. Copiar → colar → enviar." },
            { i: <Handshake className="h-5 w-5" aria-hidden="true" />, t: "Fecho", d: "Visita, corrida, PDF ou CV revisto. M-Pesa + factura NUIT." },
          ].map((s, k) => (
            <li key={k} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/15 text-[#f6e27a]">{s.i}</span>
              <span><b className="block text-[14px]">{k + 1} · {s.t}</b><span className="text-[12.5px] text-white/55">{s.d}</span></span>
            </li>
          ))}
        </ol>

        {/* tabs projecto */}
        <div className="mt-6 flex gap-1.5 overflow-x-auto rounded-2xl bg-white/5 p-1.5" role="tablist" aria-label="Funil por projecto">
          {PROJECTS_META.map((p) => (
            <button key={p.id} role="tab" aria-selected={tab === p.id} onClick={() => setTab(p.id)}
              className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-extrabold transition ${tab === p.id ? "bg-white text-black" : "text-white/60 hover:text-white"}`}>
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: p.accent }} aria-hidden="true" />{p.nome}
            </button>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl bg-white/[.06] p-5 ring-1 ring-white/10 sm:p-6">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em]" style={{ color: meta.accent }}>Funil {meta.nome}</p>
            <div className="mt-3 space-y-2">
              {funnel.passos.map((p, i) => (
                <div key={i} className="flex items-start gap-3 rounded-2xl bg-black/30 p-3.5 ring-1 ring-white/5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-[13px] font-extrabold text-black" style={{ background: meta.accent }}>{i + 1}</span>
                  <span><b className="block text-[13.5px]">{p.t}</b><span className="text-[12.5px] text-white/55">{p.d}</span></span>
                </div>
              ))}
            </div>
            <a href={waFlow(funnel.msg1, "demo")} target="_blank" rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-extrabold text-white transition hover:brightness-110" style={{ background: meta.accent }}>
              <Zap className="h-4 w-4" aria-hidden="true" /> Testar este funil agora
            </a>
          </div>

          <div className="space-y-2.5">
            <p className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-widest text-[#f6e27a]"><Copy className="h-4 w-4" aria-hidden="true" /> Textos prontos — copie e cole no WhatsApp</p>
            {[
              ["s1", "Resposta imediata (0–5 min)", funnel.follow1.replace("{nome}", "___")],
              ["s2", "Seguimento (24h depois)", funnel.follow2.replace("{nome}", "___")],
            ].map(([id, titulo, texto]) => (
              <div key={id} className="rounded-2xl bg-white p-4 text-neutral-800">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[12px] font-extrabold uppercase tracking-widest text-neutral-500">{titulo}</p>
                  <button onClick={() => copy(texto, `${tab}-${id}`)}
                    className="flex items-center gap-1.5 rounded-xl bg-black px-3.5 py-2 text-[12px] font-bold text-white hover:bg-neutral-800">
                    {copied === `${tab}-${id}` ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
                    {copied === `${tab}-${id}` ? "Copiado!" : "Copiar"}
                  </button>
                </div>
                <p className="mt-2 rounded-xl bg-neutral-100 p-3 text-[13px] leading-relaxed">{texto}</p>
                <p className="mt-1 text-[11px] text-neutral-400">Troque ___ pelo nome do cliente (está guardado na captura).</p>
              </div>
            ))}
            <div className="rounded-2xl border border-[#d4af37]/30 bg-[#d4af37]/10 p-4 text-[12.5px] leading-relaxed text-[#f6e27a]">
              <b>Regra de ouro:</b> respondeu em &lt;5 min fecha 3× mais. Não respondeu em 24h → envie o texto 2. Silêncio total → 1 toque final + oferta (visita grátis, 10% 1ª corrida, capítulo grátis, revisão grátis).
            </div>
          </div>
        </div>

        {/* campanhas */}
        <div className="mt-6 rounded-3xl bg-white/[.04] p-5 ring-1 ring-white/10 sm:p-6">
          <p className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-widest text-white/70"><QrCode className="h-4 w-4" aria-hidden="true" /> 5 campanhas · 1 link cada · meça a origem</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {CAMPANHAS.map((c) => {
              const link = `${base}#/motomoz?src=${c.id}`;
              return (
                <div key={c.id} className="rounded-2xl bg-black/40 p-3.5 ring-1 ring-white/10">
                  <p className="text-[13px] font-extrabold">{c.nome}</p>
                  <p className="text-[11.5px] text-white/50">{c.onde}</p>
                  <p className="mt-1 text-[11.5px] text-[#f6e27a]/80">{c.dica}</p>
                  <button onClick={() => copy(link, c.id)} className="mt-2 w-full rounded-xl bg-white/10 px-3 py-2 text-[11.5px] font-bold hover:bg-white/20">
                    {copied === c.id ? "✓ Link copiado!" : `Copiar link ?src=${c.id}`}
                  </button>
                </div>
              );
            })}
          </div>
          <p className="mt-3 text-[11.5px] text-white/40">Como medir: cada mensagem que chega traz [origem: status|panfleto|grupo|boca|feira]. Conte por dia num caderno. A que traz mais clientes recebe mais energia. WhatsApp: {COFRE.whatsappDisplay}</p>
        </div>
      </div>
    </section>
  );
}
