import { useState } from "react";
import { Hammer, HardHat, PencilRuler, ClipboardCheck, CalendarClock, ArrowRight, BadgeCheck } from "lucide-react";
import { MOZBUILD_EQUIPA, MOZBUILD_CICLO, MOZBUILD_MODULOS, MOZBUILD_SERVICOS, MOZBUILD_MANUTENCAO, MOZBUILD_EXEMPLO_MATOLA, MOZBUILD_PILOTO, MOZBUILD_IMGS } from "../dataMozBuild";
import { waFlow } from "../lib/flow";
import { SectionKicker } from "./chrome";

const fmt = (n: number) => Math.round(n).toLocaleString("pt-MZ") + " MT";

export function MozBuildHero() {
  return (
    <section aria-label="MOZ-BUILD integrado" className="overflow-hidden rounded-[28px] bg-[#14100A] text-white ring-1 ring-[#d4af37]/40">
      <div className="grid lg:grid-cols-[1fr_1fr]">
        <div className="relative min-h-[280px]">
          <img src={MOZBUILD_IMGS.obra} alt="Equipa MOZ-BUILD em obra" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#14100A]" />
          <span className="absolute left-4 top-4 rounded-full bg-[#d4af37] px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-black">Novo · Integrado KEYHOUSE</span>
        </div>
        <div className="p-6 sm:p-9">
          <SectionKicker dark>KEYHOUSE + MOZ-BUILD · ciclo fechado</SectionKicker>
          <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">Encontra a ruína. <span className="gold-text">Entrega palácio. Divide lucro.</span></h2>
          <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-white/65">
            2 engenheiros + arquiteto + carpinteiro + marceneiro — forjados em escolas de distrito com orçamento de sobrevivência.
            Agora valorizam para KEYHOUSE: avalia em 48h, obra em 30-60 dias, venda +40-100%.
          </p>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <a href={waFlow("Olá KEYHOUSE+BUILD! Tenho casa degradada / ruína. Quero avaliação 48h. Zona + fotos a seguir:", "mozbuild")} target="_blank" rel="noreferrer" className="gold-bg flex flex-1 items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-extrabold text-black">Avaliar meu imóvel 48h <ArrowRight className="h-4 w-4" /></a>
            <a href="#mozbuild-ciclo" onClick={(e) => { e.preventDefault(); document.getElementById("mozbuild-ciclo")?.scrollIntoView({ behavior: "smooth" }); }} className="flex items-center justify-center rounded-2xl border border-white/20 px-5 py-4 text-sm font-bold hover:bg-white/10">Ver ciclo fechado</a>
          </div>
          <p className="mt-2 text-[11px] text-white/40">Sem obra grátis · Sem custodiar dinheiro · Acordo por escrito antes</p>
        </div>
      </div>
    </section>
  );
}

export function MozBuildEquipa() {
  return (
    <section aria-label="Equipa MOZ-BUILD" className="rounded-[28px] border border-black/10 bg-white p-6 sm:p-8">
      <SectionKicker>Brecha certa · 5 técnicos</SectionKicker>
      <h3 className="font-display text-2xl font-extrabold">Quem constrói escola no mato, <span className="gold-text">valoriza na cidade.</span></h3>
      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {MOZBUILD_EQUIPA.map((m) => (
          <div key={m.id} className="rounded-2xl bg-neutral-50 p-4 ring-1 ring-black/5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-[#f6e27a]">
              {m.id.startsWith("eng") ? <HardHat className="h-5 w-5" /> : m.id === "arq" ? <PencilRuler className="h-5 w-5" /> : <Hammer className="h-5 w-5" />}
            </span>
            <p className="mt-2 text-[13px] font-extrabold leading-tight">{m.funcao}</p>
            <p className="mt-1 text-[12px] text-neutral-500">{m.foco}</p>
            <span className="mt-2 inline-block rounded-full bg-[#d4af37]/15 px-2.5 py-1 text-[10.5px] font-extrabold text-[#8a6f16]">{m.selo}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function MozBuildCiclo() {
  return (
    <section id="mozbuild-ciclo" aria-label="Ciclo fechado" className="scroll-mt-32 rounded-[28px] bg-[#0a0a0a] p-6 text-white sm:p-9">
      <SectionKicker dark>Ciclo fechado · ninguém de fora</SectionKicker>
      <h3 className="font-display text-2xl font-extrabold sm:text-3xl">KEYHOUSE acha. BUILD transforma. <span className="gold-text">KEYHOUSE vende.</span></h3>
      <div className="mt-5 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
        {MOZBUILD_CICLO.map((s) => (
          <div key={s.n} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
            <p className="flex items-center justify-between"><span className="flex h-8 w-8 items-center justify-center rounded-full gold-bg font-display text-[14px] font-extrabold text-black">{s.n}</span><span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white/60">{s.dono}</span></p>
            <p className="mt-2 text-[14px] font-extrabold">{s.titulo}</p>
            <p className="mt-1 text-[12.5px] text-white/55">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function MozBuildModulos() {
  const [open, setOpen] = useState<string | null>("reab-arr");
  return (
    <section aria-label="5 módulos" className="rounded-[28px] border border-black/10 bg-white p-6 sm:p-8">
      <SectionKicker>5 módulos · receita imediata + recorrente</SectionKicker>
      <h3 className="font-display text-2xl font-extrabold">Escolhe o jogo. <span className="gold-text">Todos pagam.</span></h3>
      <div className="mt-4 space-y-2">
        {MOZBUILD_MODULOS.map((m) => {
          const isOpen = open === m.id;
          return (
            <div key={m.id} className={`overflow-hidden rounded-2xl border ${isOpen ? "border-black shadow-md" : "border-black/10"}`}>
              <button onClick={() => setOpen(isOpen ? null : m.id)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-2 px-4 py-3.5 text-left">
                <span className="flex items-center gap-2.5"><span className="rounded-lg bg-black px-2 py-1 text-[11px] font-extrabold text-[#f6e27a]">{m.n}</span><span className="text-[14px] font-extrabold">{m.nome}</span></span>
                <span className="shrink-0 text-[11px] font-bold text-neutral-400">{m.prazo} · {isOpen ? "—" : "+"}</span>
              </button>
              {isOpen ? (
                <div className="border-t border-black/5 bg-neutral-50 px-4 py-3">
                  <p className="text-[13px] text-neutral-600">{m.exemplo}</p>
                  <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <span className="rounded-full bg-[#d4af37]/15 px-3 py-1.5 text-[12px] font-extrabold text-[#8a6f16]">{m.preco}</span>
                    <a href={waFlow(`Olá MOZ-BUILD! Quero ${m.nome} (${m.n}). Detalhes a seguir:`, "mozbuild")} target="_blank" rel="noreferrer" className="rounded-xl bg-black px-4 py-2.5 text-[12.5px] font-bold text-[#f6e27a]">Pedir este módulo</a>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function MozBuildServicos() {
  return (
    <section aria-label="Serviços pagos" className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-[28px] bg-[#0b1e42] p-6 text-white sm:p-8">
        <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#f6e27a]"><ClipboardCheck className="h-4 w-4" /> M4 · Avaliação paga · dinheiro hoje</p>
        <h3 className="font-display mt-1 text-2xl font-extrabold">Sem obra, com receita.</h3>
        <div className="mt-4 space-y-2">
          {MOZBUILD_SERVICOS.map((s, i) => (
            <div key={i} className="flex items-center justify-between gap-2 rounded-2xl bg-white/5 p-3.5 ring-1 ring-white/10">
              <span><b className="block text-[13.5px]">{s.nome}</b><span className="text-[12px] text-white/55">{s.para} · {s.eta}</span></span>
              <span className="shrink-0 text-right"><b className="tick block text-[#f6e27a]">{s.preco}</b><a href={waFlow(`Olá MOZ-BUILD! Quero ${s.nome} (${s.preco}). Imóvel:`, "avaliacao")} target="_blank" rel="noreferrer" className="text-[11px] font-bold underline">Pedir</a></span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[28px] border border-black/10 bg-white p-6 sm:p-8">
        <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-emerald-700"><CalendarClock className="h-4 w-4" /> M5 · Manutenção · receita que dorme e rende</p>
        <h3 className="font-display mt-1 text-2xl font-extrabold">Dono sossegado, BUILD ocupado.</h3>
        <div className="mt-4 space-y-2">
          {MOZBUILD_MANUTENCAO.map((s, i) => (
            <div key={i} className="flex items-center justify-between gap-2 rounded-2xl bg-neutral-50 p-3.5 ring-1 ring-black/5">
              <span><b className="block text-[13.5px]">{s.nome}</b><span className="text-[12px] text-neutral-500">{s.inclui}</span></span>
              <span className="tick shrink-0 font-extrabold">{s.preco}</span>
            </div>
          ))}
        </div>
        <a href={waFlow("Olá MOZ-BUILD! Quero plano de manutenção. Imóvel + problema:", "manutencao")} target="_blank" rel="noreferrer" className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3.5 text-sm font-extrabold text-white">Ativar manutenção</a>
      </div>
    </section>
  );
}

export function MozBuildSimulador() {
  const [compra, setCompra] = useState(800000);
  const [obra, setObra] = useState(900000);
  const total = compra + obra;
  const venda = Math.round(total * 1.47);
  const lucro = venda - total;
  return (
    <section aria-label="Simulador valorização" className="overflow-hidden rounded-[28px] bg-[#0a0a0a] text-white ring-1 ring-[#d4af37]/40">
      <div className="grid lg:grid-cols-[1fr_1fr]">
        <div className="p-6 sm:p-8">
          <SectionKicker dark>Simulador Matola · investidor 60 / build 25 / KH 15</SectionKicker>
          <h3 className="font-display text-2xl font-extrabold">Ruína hoje, <span className="gold-text">lucro amanhã.</span></h3>
          <div className="mt-4 space-y-4">
            <div><div className="mb-1.5 flex justify-between text-[13px] font-bold"><span>Compra ruína</span><span className="tick text-[#f6e27a]">{fmt(compra)}</span></div><input type="range" min={300000} max={3000000} step={50000} value={compra} onChange={(e) => setCompra(+e.target.value)} className="w-full accent-[#d4af37]" aria-label="Valor compra" /></div>
            <div><div className="mb-1.5 flex justify-between text-[13px] font-bold"><span>Obra BUILD</span><span className="tick text-[#f6e27a]">{fmt(obra)}</span></div><input type="range" min={200000} max={2500000} step={50000} value={obra} onChange={(e) => setObra(+e.target.value)} className="w-full accent-[#d4af37]" aria-label="Valor obra" /></div>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-gradient-to-br from-[#d4af37] via-[#c39a1f] to-[#7a5f10] p-6 text-black sm:p-8">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] opacity-70">Investido {fmt(total)} → vende {fmt(venda)}</p>
          <p className="tick font-display text-5xl font-extrabold">{fmt(lucro)}</p>
          <div className="mt-3 space-y-1.5 rounded-2xl bg-black/85 p-4 text-[13px] text-white">
            <div className="flex justify-between"><span className="text-white/60">Investidor 60%</span><b className="tick">{fmt(lucro * 0.6)}</b></div>
            <div className="flex justify-between"><span className="text-white/60">MOZ-BUILD 25%</span><b className="tick">{fmt(lucro * 0.25)}</b></div>
            <div className="flex justify-between"><span className="text-white/60">KEYHOUSE 15%</span><b className="tick text-[#f6e27a]">{fmt(lucro * 0.15)}</b></div>
          </div>
          <a href={waFlow(`Olá! Simulei compra ${fmt(compra)} + obra ${fmt(obra)} = lucro ${fmt(lucro)}. Quero piloto. Nome:`, "simulador-build")} target="_blank" rel="noreferrer" className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-black px-5 py-4 text-sm font-extrabold text-[#f6e27a]">Quero este lucro</a>
        </div>
      </div>
    </section>
  );
}

export function MozBuildPiloto() {
  return (
    <section aria-label="Piloto 90 dias" className="rounded-[28px] border-2 border-[#d4af37]/40 bg-gradient-to-br from-white to-[#fbf7e8] p-6 sm:p-8">
      <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#8a6f16]"><BadgeCheck className="h-4 w-4" /> Piloto 90 dias · 1 ruína · sonho 20 anos</p>
      <h3 className="font-display mt-1 text-2xl font-extrabold">Primeira ruína, depois a centésima.</h3>
      <ol className="mt-4 grid gap-2 md:grid-cols-2 lg:grid-cols-4">
        {MOZBUILD_PILOTO.map((p, i) => (
          <li key={i} className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#b8941f]">{p.dia}</p>
            <p className="mt-1 text-[13px] font-extrabold">{p.acao}</p>
            <p className="text-[11.5px] text-neutral-500">{p.dono}</p>
          </li>
        ))}
      </ol>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <a href={waFlow("Olá! Tenho RUÍNA / casa degradada para o piloto MOZ-BUILD. Zona + fotos:", "piloto")} target="_blank" rel="noreferrer" className="gold-bg flex flex-1 items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-extrabold text-black">Tenho a 1ª ruína</a>
        <a href={waFlow("Olá! Sou INVESTIDOR. Quero entrar no piloto 60/25/15. Nome + valor:", "investidor")} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-black px-5 py-4 text-sm font-extrabold text-[#f6e27a]">Sou investidor</a>
      </div>
      <p className="mt-2 text-[11px] text-neutral-400">Exemplo Matola: {fmt(MOZBUILD_EXEMPLO_MATOLA.degradada)} + {fmt(MOZBUILD_EXEMPLO_MATOLA.obra)} → {fmt(MOZBUILD_EXEMPLO_MATOLA.venda)}. {MOZBUILD_EXEMPLO_MATOLA.porAno}.</p>
    </section>
  );
}
