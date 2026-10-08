import { useState } from "react";
import { MapPin, Calculator, ShieldCheck, FileText, Briefcase, Search, Copy, Check, Crown, Zap } from "lucide-react";
import { MOTO_TURBO_ZONAS, MOTO_TAXA, MOTO_GRUPO_PROTOCOLO, CV_PRO, KEYHOUSE_9_RECEITAS, KEYHOUSE_20_TIPOS, KEYHOUSE_B2B, KEYHOUSE_PROCURA_SE, KEYHOUSE_CAMPANHA_COPY } from "../dataTurbo";
import { waFlow } from "../lib/flow";
import { txt } from "../lib/safe";
import { SectionKicker } from "./chrome";

// ─── MOTO · 11 províncias com zonas + taxa + protocolo ───────────
export function MotoTurboZonas() {
  const [open, setOpen] = useState<string | null>("Maputo Cidade");
  const provs = Object.keys(MOTO_TURBO_ZONAS);
  return (
    <section aria-label="Turbo províncias" className="rounded-[28px] border border-black/10 bg-white p-6 sm:p-8 card-shadow-sm">
      <SectionKicker>TURBO · 11 províncias · zonas incluídas</SectionKicker>
      <h3 className="font-display text-2xl font-extrabold">Do bairro à província, <span className="gold-text">sem adivinhar.</span></h3>
      <div className="mt-4 space-y-2">
        {provs.map((p) => {
          const zonas = MOTO_TURBO_ZONAS[p];
          const isOpen = open === p;
          return (
            <div key={p} className={`overflow-hidden rounded-2xl border ${isOpen ? "border-black shadow-md" : "border-black/10"}`}>
              <button onClick={() => setOpen(isOpen ? null : p)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-2 px-4 py-3.5 text-left">
                <span className="flex items-center gap-2 text-[14px] font-extrabold"><MapPin className="h-4 w-4 text-[#b8941f]" />{p}<span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-bold text-neutral-500">{zonas.length} zonas</span></span>
                <span className="text-[12px] font-bold text-neutral-400">{isOpen ? "—" : "+"}</span>
              </button>
              {isOpen ? (
                <div className="flex flex-wrap gap-1.5 border-t border-black/5 bg-neutral-50 px-4 py-3">
                  {zonas.map((z) => (
                    <a key={z} href={waFlow(`Olá MOTOMOZ! Estou em ${z} (${p}). Quero corrida / ser piloto.`, "turbo")} target="_blank" rel="noreferrer" className="rounded-full bg-white px-3 py-1.5 text-[12px] font-bold ring-1 ring-black/10 hover:bg-black hover:text-white">{z}</a>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function MotoTaxaAuto() {
  const [corridas, setCorridas] = useState(14);
  const taxaDia = corridas * MOTO_TAXA.valor;
  const taxaSem = taxaDia * 6;
  return (
    <section aria-label="Taxa automática" className="rounded-[28px] bg-[#0a0a0a] p-6 text-white sm:p-8">
      <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#f6e27a]"><Calculator className="h-4 w-4" /> Taxa automática · dividendo TURBO</p>
      <h3 className="font-display mt-1 text-2xl font-extrabold">{MOTO_TAXA.valor} MT por corrida. Semanal. Sem ir atrás.</h3>
      <p className="mt-1 text-[13px] text-white/60">{MOTO_TAXA.quemPaga} · {MOTO_TAXA.quando} · {MOTO_TAXA.regra20} · {MOTO_TAXA.strikes}.</p>
      <div className="mt-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
        <div className="mb-2 flex justify-between text-[13px] font-bold"><span>Corridas / dia</span><span className="tick text-[#f6e27a]">{corridas}</span></div>
        <input type="range" min={4} max={25} value={corridas} onChange={(e) => setCorridas(+e.target.value)} className="w-full accent-[#d4af37]" aria-label="Corridas por dia" />
        <div className="mt-3 grid grid-cols-2 gap-2 text-center">
          <div className="rounded-2xl bg-black/40 p-3 ring-1 ring-white/10"><p className="text-[10px] font-extrabold uppercase tracking-widest text-white/40">Taxa / dia</p><p className="tick font-display text-xl font-extrabold text-[#f6e27a]">{taxaDia} MT</p></div>
          <div className="rounded-2xl bg-black/40 p-3 ring-1 ring-white/10"><p className="text-[10px] font-extrabold uppercase tracking-widest text-white/40">Taxa / semana</p><p className="tick font-display text-xl font-extrabold text-[#f6e27a]">{taxaSem} MT</p></div>
        </div>
        <a href={waFlow(`Olá MOTOMOZ! Fecho semanal: ~${corridas} corridas/dia = ${taxaSem} MT de taxa. Segue comprovativo M-Pesa:`, "taxa")} target="_blank" rel="noreferrer" className="gold-bg mt-3 flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-extrabold text-black">Enviar fecho semanal</a>
      </div>
    </section>
  );
}

export function MotoGrupo() {
  return (
    <section aria-label="Protocolo do grupo" className="rounded-[28px] border-2 border-[#075E54]/20 bg-[#f0faf5] p-6 sm:p-8">
      <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#075E54]"><ShieldCheck className="h-4 w-4" /> Grupo WhatsApp · protocolo anti-bagunça</p>
      <h3 className="font-display mt-1 text-2xl font-extrabold">Escreve certo, <span className="text-[#075E54]">anda rápido.</span></h3>
      <div className="mt-4 grid gap-2 md:grid-cols-3">
        {MOTO_GRUPO_PROTOCOLO.map((m, i) => (
          <div key={i} className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
            <p className="text-[12px] font-extrabold uppercase tracking-widest text-neutral-400">{m.quem}</p>
            <p className="mt-1 rounded-xl bg-black px-3 py-2 font-mono text-[12.5px] font-bold text-[#f6e27a]">"{m.escreve}"</p>
            <p className="mt-2 text-[12.5px] text-neutral-500">→ {m.recebe}</p>
          </div>
        ))}
      </div>
      <a href="https://chat.whatsapp.com/IyfI2MOAjBKJHFkVZiSKSb" target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-4 text-sm font-extrabold text-white">Entrar no grupo e escrever agora</a>
    </section>
  );
}

// ─── CV PRO · serviço pago 150/250 · promo 75 ────────────────────
export function CvPro() {
  const [pack, setPack] = useState("cv-carta");
  const sel = CV_PRO.packs.find((p) => p.id === pack) ?? CV_PRO.packs[0];
  return (
    <section aria-label="CV profissional pago" className="rounded-[28px] bg-[#150A2E] p-6 text-white sm:p-8">
      <SectionKicker dark accent="#A78BFA">CV PRO · entrega 4h · primeiros {CV_PRO.vagasPromo} com 50%</SectionKicker>
      <h3 className="font-display text-2xl font-extrabold">CV que chama atenção, <span className="text-[#C4B5FD]">não que perde vagas.</span></h3>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {CV_PRO.packs.map((p) => (
          <button key={p.id} onClick={() => setPack(p.id)} aria-pressed={pack === p.id} className={`rounded-2xl border-2 p-4 text-left transition ${pack === p.id ? "border-[#A78BFA] bg-white/10" : "border-white/10 bg-white/5"}`}>
            <p className="font-display text-[16px] font-extrabold">{p.nome}</p>
            <p className="mt-1"><span className="tick font-display text-2xl font-extrabold text-[#C4B5FD]">{p.preco} MT</span><span className="ml-2 rounded-full bg-emerald-400/20 px-2 py-0.5 text-[11px] font-bold text-emerald-200">promo {p.promo} MT</span></p>
            <ul className="mt-2 space-y-1 text-[12.5px] text-white/65">{p.inclui.map((x, i) => <li key={i}>✓ {x}</li>)}</ul>
          </button>
        ))}
      </div>
      <ol className="mt-3 space-y-1 text-[13px] text-white/65">{CV_PRO.fluxo.map((f, i) => <li key={i}>✓ {f}</li>)}</ol>
      <a href={waFlow(`Olá! Quero ${sel.nome} (${sel.preco} MT, promo ${sel.promo} MT). M-Pesa ${CV_PRO.mpesa}. Mando dados + vaga + comprovativo:`, "cvpro")} target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-[#7C3AED] px-5 py-4 text-sm font-extrabold text-white">Pedir {sel.nome} · {sel.preco} MT</a>
      <p className="mt-2 text-center text-[11px] text-white/40">M-Pesa {CV_PRO.mpesa} · e-Mola {CV_PRO.emola} · Comprovativo no chat, PDF em 4h</p>
    </section>
  );
}

// ─── KEYHOUSE TURBO · 9 receitas + 20 tipos + B2B + procura-se ───
export function KeyhouseReceitas() {
  return (
    <section aria-label="9 fontes de receita" className="rounded-[28px] bg-[#0a0a0a] p-6 text-white sm:p-8">
      <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#f6e27a]"><Crown className="h-4 w-4" /> 9 fontes · operador ganha sem possuir activo</p>
      <h3 className="font-display mt-1 text-2xl font-extrabold">Facilitador premium, <span className="gold-text">não corredor de rua.</span></h3>
      <div className="mt-4 overflow-x-auto rounded-2xl ring-1 ring-white/10">
        <table className="w-full min-w-[620px] text-left text-[13px]">
          <thead><tr className="bg-white/5 text-[11px] uppercase tracking-widest text-white/40"><th className="p-3">#</th><th className="p-3">Fonte</th><th className="p-3">Preço</th><th className="p-3">Quando</th><th className="p-3">Estado</th></tr></thead>
          <tbody>{KEYHOUSE_9_RECEITAS.map((r) => (
            <tr key={r.n} className="border-t border-white/5">
              <td className="p-3 font-extrabold text-[#f6e27a]">{r.n}</td><td className="p-3 font-bold">{r.fonte}</td>
              <td className="tick p-3">{r.preco}</td><td className="p-3 text-white/55">{r.quando}</td>
              <td className="p-3"><span className={`rounded-full px-2.5 py-1 text-[10.5px] font-extrabold ${r.estado === "NOVO" ? "bg-sky-400/20 text-sky-200" : r.estado.startsWith("TESTE") ? "bg-amber-400/20 text-amber-200" : "bg-emerald-400/15 text-emerald-200"}`}>{r.estado}</span></td>
            </tr>))}</tbody>
        </table>
      </div>
      <p className="mt-2 text-[11.5px] text-white/40">Regra de ouro: cada etapa gera valor, cada contacto é protegido, cada lead é qualificado, cada visita é confirmada.</p>
    </section>
  );
}

export function KeyhouseTipos() {
  const [f, setF] = useState("");
  const list = KEYHOUSE_20_TIPOS.filter((t) => t.toLowerCase().includes(f.toLowerCase()));
  return (
    <section aria-label="20 tipos de propriedade" className="rounded-[28px] border border-black/10 bg-white p-6 sm:p-8 card-shadow-sm">
      <SectionKicker>20 tipos · do quarto ao lodge</SectionKicker>
      <h3 className="font-display text-2xl font-extrabold">O que a KEYHOUSE aceita publicar.</h3>
      <div className="relative mt-3">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
        <input value={f} onChange={(e) => setF(e.target.value.slice(0, 40))} placeholder="Filtrar tipo… ex.: lodge, loja" aria-label="Filtrar tipos" className="w-full rounded-2xl border border-black/10 bg-neutral-50 py-3 pl-11 pr-3 text-sm outline-none focus:border-[#b8941f]" />
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {list.length > 0 ? list.map((t) => (
          <a key={t} href={waFlow(`Olá KEYHOUSE! Quero publicar: ${t}. Mando fotos + zona + preço:`, "publicar")} target="_blank" rel="noreferrer" className="rounded-full bg-neutral-100 px-3.5 py-2 text-[12.5px] font-bold hover:bg-black hover:text-white">{t}</a>
        )) : <p className="text-sm text-neutral-500">Sem tipo com esse nome. Toca em publicar e descreve — validamos.</p>}
      </div>
    </section>
  );
}

export function KeyhouseB2B() {
  const [copiado, setCopiado] = useState("");
  const copiar = async (t: string, id: string) => {
    try { await navigator.clipboard.writeText(t); setCopiado(id); setTimeout(() => setCopiado(""), 2000); } catch { /* sem clipboard */ }
  };
  return (
    <section aria-label="Operação rede B2B" className="rounded-[28px] border-2 border-[#d4af37]/40 bg-gradient-to-br from-white to-[#fbf7e8] p-6 sm:p-8">
      <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#8a6f16]"><Briefcase className="h-4 w-4" /> Operação rede B2B · dinheiro recorrente</p>
      <h3 className="font-display mt-1 text-2xl font-extrabold">Agência paga 10.000/mês. <span className="gold-text">Cliente paga 500 uma vez.</span></h3>
      <div className="mt-4 grid gap-2.5 md:grid-cols-2">
        {KEYHOUSE_B2B.map((b, i) => (
          <div key={i} className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
            <p className="text-[13px] font-extrabold">{b.alvo}</p>
            <p className="text-[12px] text-neutral-500">{b.compram} · <b className="text-[#8a6f16]">{b.pot}</b></p>
            <p className="mt-2 rounded-xl bg-neutral-100 p-2.5 text-[12px] leading-relaxed text-neutral-600">"{txt(b.msg)}"</p>
            <button onClick={() => copiar(b.msg, `b2b-${i}`)} className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl bg-black px-3 py-2.5 text-[12px] font-bold text-white">
              {copiado === `b2b-${i}` ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}{copiado === `b2b-${i}` ? "Copiado!" : "Copiar abordagem"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export function KeyhouseProcuraSe() {
  return (
    <section aria-label="Quadro procura-se" className="rounded-[28px] border border-black/10 bg-white p-6 sm:p-8 card-shadow-sm">
      <SectionKicker accent="#EA580C">Quadro vivo · procura e oferta real</SectionKicker>
      <h3 className="font-display text-2xl font-extrabold">Pedidos de hoje. <span className="gold-text">Tem? Fecha hoje.</span></h3>
      <div className="mt-4 grid gap-2.5 md:grid-cols-3">
        {KEYHOUSE_PROCURA_SE.map((k) => (
          <div key={k.id} className="rounded-2xl bg-neutral-50 p-4 ring-1 ring-black/5">
            <p className="inline-block rounded-full bg-black px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#f6e27a]">{k.id}</p>
            <p className="mt-2 text-[14px] font-extrabold leading-snug">{k.titulo}</p>
            <p className="mt-1 text-[12.5px] text-neutral-500">{k.detalhe}</p>
            <p className="mt-2 text-[12px] font-bold">📍 {k.zona}<br />💰 {k.orcamento}</p>
            <a href={waFlow(`Olá KEYHOUSE! Tenho espaço para ${k.id} (${k.titulo}). Localização + fotos + valor a seguir:`, "procura")} target="_blank" rel="noreferrer" className="mt-3 flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-2.5 text-[12.5px] font-extrabold text-white">Tenho este espaço</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export function KeyhouseCopy() {
  const [copiado, setCopiado] = useState("");
  const copiar = async (t: string, id: string) => {
    try { await navigator.clipboard.writeText(t); setCopiado(id); setTimeout(() => setCopiado(""), 2000); } catch { /* sem clipboard */ }
  };
  return (
    <section aria-label="Munição pronta" className="rounded-[28px] bg-[#0a0a0a] p-6 text-white sm:p-8">
      <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#f6e27a]"><Zap className="h-4 w-4" /> Munição pronta · copiar e colar</p>
      <div className="mt-3 grid gap-2 md:grid-cols-3">
        {KEYHOUSE_CAMPANHA_COPY.map((c, i) => (
          <div key={i} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-white/40">{c.onde}</p>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/75">"{c.texto}"</p>
            <button onClick={() => copiar(c.texto, `cp-${i}`)} className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-white/10 px-3 py-2.5 text-[12px] font-bold hover:bg-white/20">
              {copiado === `cp-${i}` ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}{copiado === `cp-${i}` ? "Copiado!" : "Copiar"}
            </button>
          </div>
        ))}
      </div>
      <a href={waFlow("Olá! Quero ser FUNDADOR KEYHOUSE (10 publicações grátis). Nome:", "fundador")} target="_blank" rel="noreferrer" className="gold-bg mt-4 flex items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-extrabold text-black">Quero vaga FUNDADOR · 10 grátis</a>
    </section>
  );
}

export function DesbloqueioContacto({ imovel = "imóvel" }: { imovel?: string }) {
  return (
    <a href={waFlow(`Olá KEYHOUSE! Quero DESBLOQUEAR o contacto de: ${txt(imovel, "imóvel")}. Comprovativo 200 MT a seguir:`, "desbloqueio")} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl border-2 border-[#d4af37]/50 bg-[#d4af37]/10 px-5 py-3.5 text-sm font-extrabold text-[#8a6f16] hover:bg-[#d4af37]/20">
      <FileText className="h-4 w-4" /> Desbloquear contacto · 200 MT
    </a>
  );
}
