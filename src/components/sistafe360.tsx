import { useState } from "react";
import {
  Scale, Send, Copy, Check, Users, MapPin, FileCheck, ShieldAlert,
  ChevronDown, MessageCircle, AlertTriangle, BookOpen, ClipboardCheck, Sparkles,
} from "lucide-react";
import { COFRE, MODELOS_360, MATRIZ_ROTACAO, CHECKLIST_UGEA, SISTAFE_BASE_LEGAL, waLink } from "../data";
import { SectionKicker } from "./chrome";

// ─── 1 · BASE LEGAL ACTUALIZADA ──────────────────────────────────
export function BaseLegal() {
  return (
    <section className="rounded-[28px] border border-[#0b1e42]/12 bg-white p-6 card-shadow-sm sm:p-8">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <SectionKicker>Base legal · actualizada Jan 2026</SectionKicker>
          <h3 className="font-serifd text-2xl font-extrabold text-[#0b1e42] sm:text-3xl">Antes de executar, confirme a lei.</h3>
          <p className="mt-1 max-w-2xl text-[13.5px] text-neutral-500">
            Nomenclatura oficial CEDSIF (Decreto 26/2021): <b>MPO · MEX · MIP · MPE · MFP · MDP · MGE · MRR · MGI · MAI · MAS</b>.
            A Imprensa Nacional publica, a UFSA supervisiona — esta plataforma organiza e explica. Valide sempre no <b>Boletim da República</b>.
          </p>
        </div>
        <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-amber-50 px-3.5 py-2 text-[11px] font-bold text-amber-800 ring-1 ring-amber-200">
          <AlertTriangle className="h-3.5 w-3.5" /> Verifique alíneas no BR impresso
        </span>
      </div>
      <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {SISTAFE_BASE_LEGAL.map((b, i) => (
          <div key={i} className="rounded-2xl bg-[#f2f5fb] p-4 ring-1 ring-[#0b1e42]/5 transition hover:ring-[#0e2a5e]/30">
            <p className="flex items-center gap-2 text-[13px] font-extrabold text-[#0b1e42]"><Scale className="h-4 w-4 text-[#b8941f]" />{b.sigla}</p>
            <p className="mt-0.5 text-[13px] font-bold">{b.nome}</p>
            <p className="mt-1 text-[12.5px] leading-relaxed text-neutral-500">{b.desc}</p>
            <p className="mt-2 text-[11px] font-bold text-[#0e2a5e]">{b.link}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── 2 · PROGRAMA 360° (os 4 modelos do depoimento) ──────────────
const PROPOSTA_TXT = (modelo: string) =>
`Exmo Senhor Director Nacional / Secretário Permanente,

Submete-se à apreciação superior a proposta de implementação de um Programa Piloto de Capacitação, Rotação de Competências e Continuidade Operacional (${modelo}), destinado a 10 técnicos, com prioridade para acções de formação e intercâmbio técnico realizadas em território nacional, em locais situados a mais de 60 km da sede, numa primeira fase.

A iniciativa pretende reduzir a dependência de conhecimentos concentrados num número limitado de técnicos, reforçar a capacidade interna de execução nos módulos MPO/MEX/MPE, assegurar mecanismos de substituição funcional e melhorar a continuidade dos processos administrativos, orçamentais, financeiros, patrimoniais e de investimento.

Produtos: 10 planos individuais de desenvolvimento + 1 matriz de substituição + 1 relatório anual com recomendações.

Solicita-se autorização para diagnóstico inicial (Fase I) sem custos de deslocação.

Com os melhores cumprimentos,
[Nome, Categoria, Contacto, Data]`;

export function Programa360() {
  const [tab, setTab] = useState(3);
  const [copied, setCopied] = useState(false);
  const [simOut, setSimOut] = useState<string | null>(null);
  const m = MODELOS_360[tab];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROPOSTA_TXT(m.name));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch { /* clipboard indisponível */ }
  };

  const simular = (cenario: string) => {
    const map: Record<string, string> = {
      ferias: "⚠️ RISCO ALTO: se só 1 pessoa domina o MEX, os pagamentos param nas férias. Com a Rotação 10×10, o suplente assume em 24h — processo continua.",
      doenca: "🚨 VULNERABILIDADE: responsável pelo património (MPE) ausente 30 dias sem suplente = inventário bloqueado. Solução: matriz T3↔T8 com acesso cruzado já autorizado.",
      transferencia: "🔴 CRÍTICO: transferência sem passagem de pasta apaga memória institucional. Solução: Manual Interno de Continuidade + arquivo rastreável no MGI.",
      encerramento: "🟡 PRESSÃO: encerramento do exercício exige cabimentação + liquidação em prazo. Com Academia Itinerante, 2+ técnicos por processo fecham o mês sem horas extras.",
    };
    setSimOut(map[cenario]);
  };

  return (
    <section className="overflow-hidden rounded-[28px] bg-[#0b1e42] text-white navy-shadow">
      <div className="p-6 sm:p-10">
        <SectionKicker dark>Programa 360° · para equipas de 10 técnicos</SectionKicker>
        <h2 className="font-serifd max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
          Não peça privilégios. <span className="gold-text">Apresente gestão de risco.</span>
        </h2>
        <p className="mt-3 max-w-3xl text-[14px] leading-relaxed text-white/65">
          Se a sua unidade pára quando 1 pessoa falta — isso não é falta de motivação, é <b className="text-white">risco operacional</b>.
          Estes 4 modelos transformam o desabafo em proposta que o superior não pode ignorar:
          <i> “Se eu não capacitar esta equipa, deixo uma unidade inteira dependente de uma única pessoa.”</i>
        </p>

        {/* tabs */}
        <div className="no-scrollbar mt-6 flex gap-2 overflow-x-auto pb-1">
          {MODELOS_360.map((mod, i) => (
            <button key={mod.id} onClick={() => setTab(i)}
              className={`shrink-0 rounded-2xl border px-4 py-3 text-left transition ${i === tab ? "border-[#d4af37] bg-[#d4af37]/15 shadow-lg" : "border-white/10 bg-white/5 hover:border-white/30"}`}>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#e3c25c]">Modelo {mod.n}</span>
              <span className="block text-[13px] font-extrabold">{mod.name}</span>
              <span className="text-[11px] text-white/50">{mod.dur} · {mod.ganho}</span>
            </button>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl bg-white/[.06] p-6 ring-1 ring-white/10">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#e3c25c]">Modelo {m.n} · {m.dur} · ganho: {m.ganho}</p>
            <h3 className="font-display mt-1 text-2xl font-extrabold">{m.name}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-white/70">{m.desc}</p>
            <ul className="mt-4 space-y-1.5 text-[13.5px] text-white/75">
              {m.conteudos.map((c, i) => (
                <li key={i} className="flex items-start gap-2"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/20"><Check className="h-3 w-3 text-[#f6e27a]" /></span>{c}</li>
              ))}
            </ul>
            <p className="mt-4 rounded-2xl bg-[#d4af37]/10 p-3.5 text-[13px] font-semibold text-[#f6e27a] ring-1 ring-[#d4af37]/30">📦 Produto obrigatório: {m.produto}</p>
          </div>

          <div className="flex flex-col gap-4">
            {/* matriz */}
            <div className="rounded-3xl bg-white p-5 text-neutral-800">
              <p className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-widest text-[#0b1e42]"><Users className="h-4 w-4" /> Matriz 10×10 (exemplo)</p>
              <div className="mt-3 grid grid-cols-2 gap-1.5 text-[12px]">
                {MATRIZ_ROTACAO.map((r) => (
                  <div key={r.t} className="flex items-center justify-between rounded-xl bg-[#f2f5fb] px-2.5 py-1.5 ring-1 ring-[#0b1e42]/5">
                    <b className="text-[#0b1e42]">{r.t}</b><span className="truncate">{r.p} <span className="text-neutral-400">→</span> <b className="text-[#8a6f16]">{r.s}</b></span>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-[11px] text-neutral-400">Regra de ouro: nenhum processo crítico com menos de 2 pessoas capazes.</p>
            </div>
            {/* simulador */}
            <div className="rounded-3xl bg-black/40 p-5 ring-1 ring-white/10">
              <p className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-widest text-[#f6e27a]"><Sparkles className="h-4 w-4" /> Simule a ausência (toque)</p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {[["ferias", "Férias"], ["doenca", "Doença 30 dias"], ["transferencia", "Transferência"], ["encerramento", "Fecho do ano"]].map(([id, l]) => (
                  <button key={id} onClick={() => simular(id)} className="rounded-full bg-white/10 px-3.5 py-1.5 text-[12px] font-bold hover:bg-[#d4af37]/30">{l}</button>
                ))}
              </div>
              {simOut && <p className="anim-rise mt-3 rounded-2xl bg-white/5 p-3 text-[13px] leading-relaxed text-white/80 ring-1 ring-white/10">{simOut}</p>}
            </div>
          </div>
        </div>

        {/* gerador de proposta */}
        <div className="mt-4 rounded-3xl bg-gradient-to-br from-[#d4af37] to-[#a67c00] p-[1.5px]">
          <div className="rounded-3xl bg-[#0e0e0e] p-5 sm:p-6">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-widest text-[#f6e27a]"><FileCheck className="h-4 w-4" /> Gerador de proposta ao Director · copiar/colar</p>
                <p className="mt-1 text-[13px] text-white/60">Linguagem institucional, sem queixas. Gera o texto para <b className="text-white">{m.name}</b>, cola no ofício, assina.</p>
              </div>
              <div className="flex shrink-0 gap-2">
                <button onClick={copy} className="flex items-center gap-2 rounded-2xl gold-bg px-5 py-3 text-[13px] font-extrabold text-black hover:brightness-110">
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />} {copied ? "Copiado!" : "Copiar proposta"}
                </button>
                <a href={waLink(`Olá MOZ-SISTAFE! Quero implementar o ${m.name} na minha instituição (10 técnicos). Preciso de apoio.`)} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3 text-[13px] font-extrabold text-white hover:brightness-110">
                  <Send className="h-4 w-4" /> Pedir apoio
                </a>
              </div>
            </div>
            <pre className="mt-4 max-h-44 overflow-y-auto whitespace-pre-wrap rounded-2xl bg-white/5 p-4 text-[12px] leading-relaxed text-white/70 ring-1 ring-white/10">{PROPOSTA_TXT(m.name)}</pre>
            <p className="mt-2 flex items-center gap-1.5 text-[11px] text-white/40"><MapPin className="h-3.5 w-3.5" /> Regra dos 60 km: 1ª fase sempre nacional (Xai-Xai · Chókwè · Bilene · polos provinciais) — cada missão com relatório obrigatório.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 3 · RADAR DA INTEGRIDADE (dor do povo → ferramenta) ─────────
export function RadarIntegridade() {
  const [done, setDone] = useState<boolean[]>(Array(CHECKLIST_UGEA.length).fill(false));
  const [open, setOpen] = useState<number | null>(0);
  const pct = Math.round((done.filter(Boolean).length / CHECKLIST_UGEA.length) * 100);

  const toggle = (i: number) => {
    const n = [...done];
    n[i] = !n[i];
    setDone(n);
  };

  const report = `RELATÓRIO RADAR UGEA — ${done.filter(Boolean).length}/10 conformes (${pct}%)\n` +
    CHECKLIST_UGEA.map((c, i) => `${done[i] ? "✅" : "❌"} ${c.t}`).join("\n") +
    `\nData: ${new Date().toLocaleDateString("pt-MZ")}`;

  return (
    <section className="rounded-[28px] border-2 border-red-900/15 bg-gradient-to-br from-white to-red-50/60 p-6 card-shadow-sm sm:p-8">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-red-900 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white">
            <ShieldAlert className="h-3.5 w-3.5" /> Radar da integridade · UGEA
          </p>
          <h3 className="font-serifd max-w-2xl text-2xl font-extrabold text-[#0b1e42] sm:text-3xl">
            A dor do povo virou checklist: <span className="text-red-800">10 travões contra atropelos.</span>
          </h3>
          <p className="mt-2 max-w-3xl text-[13.5px] leading-relaxed text-neutral-500">
            Viaturas adjudicadas sem concurso transparente, fundos desviados por conflitos de interesse — o padrão repete-se quando se salta etapas do <b>Decreto 79/2022</b>.
            Este radar não acusa ninguém: <b>protege o técnico que assina</b>. Porque quem assina, responde (Lei 12/2024). Marque, gere o relatório e arquive.
          </p>
        </div>
        <div className="shrink-0 rounded-3xl bg-[#0b1e42] p-4 text-center text-white">
          <p className="tick font-display text-4xl font-extrabold text-[#f6e27a]">{pct}%</p>
          <p className="text-[11px] font-bold text-white/60">{done.filter(Boolean).length}/10 conformes</p>
          <div className="mt-2 h-2 w-32 overflow-hidden rounded-full bg-white/15"><div className={`h-full rounded-full transition-all ${pct === 100 ? "bg-emerald-400" : pct >= 70 ? "bg-[#d4af37]" : "bg-red-400"}`} style={{ width: `${pct}%` }} /></div>
        </div>
      </div>

      <div className="mt-5 grid gap-2 lg:grid-cols-2">
        {CHECKLIST_UGEA.map((c, i) => (
          <div key={i} className={`overflow-hidden rounded-2xl border bg-white transition ${done[i] ? "border-emerald-300" : open === i ? "border-[#0e2a5e] shadow-md" : "border-black/10"}`}>
            <div className="flex items-center gap-3 p-3.5">
              <button onClick={() => toggle(i)} aria-label="marcar"
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition ${done[i] ? "border-emerald-500 bg-emerald-500 text-white" : "border-neutral-300 hover:border-emerald-400"}`}>
                {done[i] && <Check className="h-4 w-4" />}
              </button>
              <button onClick={() => setOpen(open === i ? null : i)} className="flex flex-1 items-center justify-between gap-2 text-left">
                <span className={`text-[13.5px] font-bold ${done[i] ? "text-emerald-800" : "text-neutral-800"}`}>{i + 1}. {c.t}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 transition ${open === i ? "rotate-180" : "text-neutral-300"}`} />
              </button>
            </div>
            {open === i && (
              <div className="px-4 pb-4 pl-[52px]">
                <p className="text-[13px] leading-relaxed text-neutral-500">{c.d}</p>
                <p className="mt-1.5 inline-block rounded-full bg-[#0b1e42]/5 px-2.5 py-1 text-[11px] font-extrabold text-[#0e2a5e]">{c.art}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={`mt-4 flex flex-col gap-3 rounded-2xl p-4 sm:flex-row sm:items-center ${pct === 100 ? "bg-emerald-50 ring-1 ring-emerald-200" : pct >= 7 * 10 ? "bg-amber-50 ring-1 ring-amber-200" : "bg-red-50 ring-1 ring-red-200"}`}>
        <ClipboardCheck className={`h-8 w-8 shrink-0 ${pct === 100 ? "text-emerald-600" : "text-red-700"}`} />
        <p className="flex-1 text-[13px] leading-relaxed text-neutral-600">
          {pct === 100
            ? <><b className="text-emerald-800">Processo blindado.</b> Arquive o relatório com o processo no MEX/MPE. É a sua prova de diligência.</>
            : <><b>Não avance com itens por marcar.</b> Cada ❌ é um ponto onde um “atropelo” pode nascer — e o primeiro nome no processo é o seu. Complete, documente, depois assine.</>}
        </p>
        <div className="flex shrink-0 gap-2">
          <button onClick={() => setDone(Array(CHECKLIST_UGEA.length).fill(false))} className="rounded-xl border border-black/10 bg-white px-4 py-2.5 text-[13px] font-bold hover:bg-neutral-50">Limpar</button>
          <a href={waLink(report + "\n\nPreciso de apoio UGEA.")} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl bg-[#0b1e42] px-4 py-2.5 text-[13px] font-bold text-white hover:bg-[#143a82]">
            <MessageCircle className="h-4 w-4 text-[#25D366]" /> Enviar relatório
          </a>
        </div>
      </div>

      <p className="mt-3 flex items-start gap-2 text-[11.5px] leading-relaxed text-neutral-400">
        <BookOpen className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        Nota editorial: esta ferramenta é educativa e não substitui parecer jurídico, auditoria do Tribunal Administrativo ou supervisão da UFSA. Diplomas mudam — confirme sempre a redacção vigente no Boletim da República / Imprensa Nacional. Preço da blindagem completa: Manual Completo (500 MT) + Mentoria UGEA in-company (12.000 MT).
      </p>
      <p className="mt-1 text-[11.5px] text-neutral-400">Contacto directo: M-Pesa {COFRE.mpesa} · e-Mola {COFRE.emola} · {COFRE.nome}, NUIT {COFRE.nuit}</p>
    </section>
  );
}
