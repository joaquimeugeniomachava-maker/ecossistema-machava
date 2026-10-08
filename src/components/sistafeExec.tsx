import { useMemo, useState } from "react";
import {
  Download, Printer, Share2, Search, AlertTriangle,
  Check, ChevronDown, Eye, Flag, BookOpen, Table2, Mail, MessageCircle, ExternalLink, Loader2,
} from "lucide-react";
import { COFRE, SISTAFE_MODULES, SISTAFE_GLOSSARY, SISTAFE_FAQ, waLink } from "../data";
import {
  SISTAFE_META, EXEC_DOCS, BENEFITS, CONTINUITY_ROWS, SOURCES,
  downloadText, continuityCSV, type ExecDoc,
} from "../dataSistafeExec";
import { SectionKicker } from "./chrome";

// ─── AVISO INSTITUCIONAL (FASE 3 — obrigatório) ───────────────────
export function IndependenceNotice() {
  return (
    <section aria-label="Aviso institucional" className="rounded-[24px] border-2 border-amber-300/60 bg-amber-50 p-5 sm:p-6">
      <p className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-amber-900">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
        <span>
          <b>{SISTAFE_META.aviso}</b>
          <br />
          <span className="mt-1 block text-amber-800">
            Documentos abaixo são <b>minutas para revisão</b> — não são actos oficiais, não usam timbre do Estado e não vinculam o CEDSIF, o Ministério, a Direcção Nacional ou qualquer órgão oficial. Dados dos 10 técnicos são <b>demonstrativos (T1–T10)</b>. Benefícios são <b>esperados e verificáveis</b>, não resultados declarados. Coordenação do projecto: {SISTAFE_META.coordenacao}. Revisão: {SISTAFE_META.revisao} — validar no Boletim da República / Imprensa Nacional.
          </span>
        </span>
      </p>
    </section>
  );
}

// ─── SUB-NAVEGAÇÃO INTERNA (clara + keyboard) ─────────────────────
const NAV = [
  ["inicio", "Início"], ["modulos", "Módulos"], ["base-legal", "Base legal"],
  ["programa-360", "Programa 360"], ["gabinete", "Gabinete"], ["documentos", "Documentos"],
  ["beneficios", "Benefícios"], ["matriz", "Matriz"], ["fontes", "Fontes"],
  ["manuais", "Manuais"], ["formacao", "Formação"], ["faq", "FAQ"], ["contactos", "Contactos"],
] as const;

export function ExecNav() {
  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <nav aria-label="Navegação MOZ-SISTAFE" className="sticky top-[104px] z-30 -mx-4 border-y border-[#0b1e42]/10 bg-[#f7f9fd]/95 px-4 py-2 backdrop-blur">
      <div className="no-scrollbar mx-auto flex max-w-7xl gap-1.5 overflow-x-auto" role="tablist" aria-label="Secções">
        {NAV.map(([id, label]) => (
          <button key={id} role="tab" aria-label={`Ir para ${label}`} onClick={() => go(id)}
            onKeyDown={(e) => {
              if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
              const btns = Array.from(document.querySelectorAll('[role="tab"]')) as HTMLButtonElement[];
              const i = btns.indexOf(e.currentTarget as HTMLButtonElement);
              const n = e.key === "ArrowRight" ? (i + 1) % btns.length : (i - 1 + btns.length) % btns.length;
              btns[n]?.focus();
            }}
            className="shrink-0 rounded-full border border-[#0b1e42]/15 bg-white px-3.5 py-1.5 text-[12px] font-bold text-[#0b1e42] transition hover:border-[#0b1e42]/40 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-[#0e2a5e]">
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}

// ─── PESQUISA GLOBAL (categoria + resultados + empty + loading) ──
export function GlobalSearch() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Tudo");
  const [busy, setBusy] = useState(false);

  const onType = (v: string) => {
    setQ(v);
    if (!v) return;
    setBusy(true);
    window.setTimeout(() => setBusy(false), 250);
  };

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (t.length < 2) return null;
    const inCat = (c: string) => cat === "Tudo" || cat === c;
    const out: { cat: string; title: string; desc: string; target: string }[] = [];
    if (inCat("Módulos")) SISTAFE_MODULES.filter((m) => (m.code + m.name + m.desc).toLowerCase().includes(t)).forEach((m) => out.push({ cat: "Módulos", title: `${m.code} — ${m.name}`, desc: m.desc, target: "modulos" }));
    if (inCat("Glossário")) SISTAFE_GLOSSARY.filter((g) => (g.t + g.d).toLowerCase().includes(t)).forEach((g) => out.push({ cat: "Glossário", title: g.t, desc: g.d, target: "faq" }));
    if (inCat("Documentos")) EXEC_DOCS.filter((d) => (d.titulo + d.finalidade).toLowerCase().includes(t)).forEach((d) => out.push({ cat: "Documentos", title: d.codigo + " · " + d.titulo, desc: d.finalidade, target: "documentos" }));
    if (inCat("FAQ")) SISTAFE_FAQ.filter((f) => (f.q + f.a).toLowerCase().includes(t)).forEach((f) => out.push({ cat: "FAQ", title: f.q, desc: f.a.slice(0, 120) + "…", target: "faq" }));
    return out.slice(0, 12);
  }, [q, cat]);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section aria-label="Pesquisa MOZ-SISTAFE" className="rounded-[28px] border border-[#0b1e42]/12 bg-white p-6 shadow-sm sm:p-8">
      <SectionKicker accent="#1E4ED8">Pesquisa por categoria</SectionKicker>
      <h2 className="font-serifd text-2xl font-extrabold text-[#0b1e42] sm:text-3xl">Encontre em segundos.</h2>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" aria-hidden="true" />
          <input value={q} onChange={(e) => onType(e.target.value.slice(0, 80))} maxLength={80}
            placeholder="Ex.: cabimento, UGEA, minuta, matriz… (mín. 2 letras)"
            aria-label="Pesquisar em módulos, glossário, documentos e FAQ"
            className="w-full rounded-2xl border border-black/10 bg-neutral-50 py-3.5 pl-11 pr-10 text-sm outline-none focus:border-[#0e2a5e] focus:ring-2 focus:ring-[#0e2a5e]/20" />
          {busy && <Loader2 className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-[#0e2a5e]" aria-hidden="true" />}
        </div>
        <div className="flex gap-1 overflow-x-auto rounded-2xl bg-neutral-100 p-1" role="group" aria-label="Filtrar por categoria">
          {["Tudo", "Módulos", "Glossário", "Documentos", "FAQ"].map((c) => (
            <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
              className={`shrink-0 rounded-xl px-3.5 py-2 text-[12.5px] font-bold ${cat === c ? "bg-[#0b1e42] text-white" : "text-neutral-500 hover:text-black"}`}>{c}</button>
          ))}
        </div>
      </div>

      <div className="mt-4" aria-live="polite">
        {q.trim().length >= 2 && results && results.length === 0 && !busy && (
          <div className="rounded-2xl bg-neutral-50 p-5 text-center ring-1 ring-black/5">
            <p className="text-sm font-bold text-neutral-700">Sem resultados para “{q.trim()}” em {cat}.</p>
            <p className="mt-1 text-[13px] text-neutral-500">Tente “MEX”, “cabimento”, “minuta” ou “matriz”. Ou reporte a falta:</p>
            <div className="mt-3 flex flex-col justify-center gap-2 sm:flex-row">
              <a href={waLink(`Olá MOZ-SISTAFE! Pesquisei "${q.trim()}" e não encontrei. Podem ajudar?`)} target="_blank" rel="noreferrer" className="rounded-xl bg-[#25D366] px-4 py-2.5 text-[13px] font-bold text-white">Pedir no WhatsApp</a>
              <a href={`mailto:${COFRE.email}?subject=Reportar%20falta%20de%20conteúdo&body=Pesquisei:%20${encodeURIComponent(q.trim())}`} className="rounded-xl border border-black/10 bg-white px-4 py-2.5 text-[13px] font-bold">Reportar erro por email</a>
            </div>
          </div>
        )}
        {results && results.length > 0 && (
          <>
            <p className="mb-2 text-[12px] font-bold text-neutral-500">{results.length} resultado(s) — toque para ir à secção:</p>
            <ul className="grid gap-2 md:grid-cols-2">
              {results.map((r, i) => (
                <li key={i}>
                  <button onClick={() => go(r.target)} className="w-full rounded-2xl bg-[#f2f5fb] p-3.5 text-left ring-1 ring-[#0b1e42]/5 transition hover:ring-[#0e2a5e]/30 focus-visible:outline-2 focus-visible:outline-[#0e2a5e]">
                    <span className="inline-block rounded-full bg-[#0b1e42] px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-white">{r.cat}</span>
                    <span className="mt-1 block text-[13px] font-extrabold text-[#0b1e42]">{r.title}</span>
                    <span className="mt-0.5 block text-[12.5px] text-neutral-500">{r.desc}</span>
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
        {(!results) && (
          <p className="text-[12.5px] text-neutral-400">Dica: a pesquisa cobre módulos (MPO…MAS), glossário, as 6 minutas e o FAQ — sem sair da página.</p>
        )}
      </div>
    </section>
  );
}

// ─── GABINETE EXECUTIVO ──────────────────────────────────────────
function DocCard({ doc }: { doc: ExecDoc }) {
  const [open, setOpen] = useState(false);
  const [ok, setOk] = useState("");
  const file = `${doc.codigo.replace(/\//g, "-").replace(/\s/g, "")}-${doc.id}.txt`;

  const dl = () => { downloadText(file, doc.corpo); setOk("Descarregado ✓ — verifique a pasta Downloads"); setTimeout(() => setOk(""), 2500); };
  const print = () => {
    const w = window.open("", "_blank", "width=800,height=600");
    if (!w) { setOk("Permita pop-ups para imprimir"); return; }
    w.document.write(`<html lang="pt-MZ"><head><title>${doc.codigo}</title><style>body{font-family:Georgia,serif;padding:40px;line-height:1.7;color:#111}h1{font-size:20px}pre{white-space:pre-wrap;font-family:inherit}</style></head><body><h1>${doc.codigo} — ${doc.titulo}</h1><pre>${doc.corpo.replace(/</g, "&lt;")}</pre><script>window.print()<\/script></body></html>`);
    w.document.close();
  };

  return (
    <article className="flex flex-col rounded-3xl border border-[#0b1e42]/12 bg-white p-5 shadow-sm transition hover:shadow-lg">
      <p className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#0b1e42] px-3 py-1 text-[10.5px] font-extrabold uppercase tracking-widest text-white">{doc.codigo}</p>
      <h3 className="font-display mt-2.5 text-[15.5px] font-extrabold leading-snug text-[#0b1e42]">{doc.titulo}</h3>
      <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-neutral-500"><b className="text-neutral-700">Para quê:</b> {doc.finalidade}<br /><b className="text-neutral-700">Para quem:</b> {doc.destinatario}</p>
      <div className="mt-3 grid grid-cols-2 gap-1.5">
        <button onClick={() => setOpen(!open)} aria-expanded={open} className="flex items-center justify-center gap-1.5 rounded-xl border border-[#0b1e42]/20 px-3 py-2.5 text-[12.5px] font-bold text-[#0b1e42] hover:bg-[#f2f5fb]">
          <Eye className="h-3.5 w-3.5" aria-hidden="true" /> {open ? "Ocultar" : "Pré-ver"}
        </button>
        <button onClick={dl} className="flex items-center justify-center gap-1.5 rounded-xl bg-[#0b1e42] px-3 py-2.5 text-[12.5px] font-bold text-white hover:bg-[#143a82]">
          <Download className="h-3.5 w-3.5" aria-hidden="true" /> Descarregar
        </button>
        <button onClick={print} className="flex items-center justify-center gap-1.5 rounded-xl border border-black/10 px-3 py-2.5 text-[12.5px] font-bold hover:bg-neutral-50">
          <Printer className="h-3.5 w-3.5" aria-hidden="true" /> Imprimir
        </button>
        <a href={waLink(`Olá! Segue a ${doc.codigo} — ${doc.titulo} (minuta para revisão).`)} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-2.5 text-[12.5px] font-bold text-white">
          <Share2 className="h-3.5 w-3.5" aria-hidden="true" /> Partilhar
        </a>
      </div>
      {ok && <p className="mt-2 rounded-lg bg-emerald-50 px-3 py-1.5 text-[12px] font-bold text-emerald-700" role="status">{ok}</p>}
      {open && (
        <div className="mt-3 max-h-56 overflow-y-auto rounded-2xl bg-neutral-50 p-3.5 text-[12px] leading-relaxed text-neutral-600 ring-1 ring-black/5">
          <pre className="whitespace-pre-wrap font-sans">{doc.corpo}</pre>
        </div>
      )}
    </article>
  );
}

export function GabineteExecutivo() {
  const [tab, setTab] = useState<"docs" | "benef" | "matriz">("docs");

  const printBenefits = () => window.print();
  const dlBenefits = () => {
    const txt = `RELATÓRIO DE BENEFÍCIOS ESPERADOS — MINUTA PARA REVISÃO (Jan 2026)\nCoordenação: ${SISTAFE_META.coordenacao} (iniciativa independente)\n\n` + BENEFITS.map((b, i) => `${i + 1}. ${b.b}\n   Indicador: ${b.ind}\n   Verificação: ${b.como}\n   Prazo: ${b.prazo}\n   Estado: ${b.estado}`).join("\n\n") + `\n\nNota: benefícios esperados, não resultados declarados. Sem evidência, não há resultado.`;
    downloadText("MINUTA-05-beneficios-esperados.txt", txt);
  };

  return (
    <section id="gabinete" aria-label="Gabinete Executivo" className="scroll-mt-32 overflow-hidden rounded-[28px] bg-[#0b1e42] p-6 text-white sm:p-10">
      <SectionKicker dark>Área Executiva · Gabinete · para apreciação superior</SectionKicker>
      <h2 className="font-serifd max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">Minutas prontas. <span className="gold-text">Despacho claro.</span></h2>
      <p className="mt-2 max-w-3xl text-[13.5px] leading-relaxed text-white/65">
        Seis minutas para revisão (não são actos oficiais), relatório de benefícios esperados e matriz de continuidade com dados demonstrativos.
        Descarregue, imprima, partilhe no WhatsApp e submeta pela via hierárquica. Coordenação: {SISTAFE_META.coordenacao} · Revisão {SISTAFE_META.revisao}.
      </p>

      <div className="mt-5 flex gap-1.5 rounded-2xl bg-white/10 p-1.5" role="tablist" aria-label="Abas do gabinete">
        {([["docs", "6 Documentos"], ["benef", "Benefícios"], ["matriz", "Matriz"]] as const).map(([id, l]) => (
          <button key={id} role="tab" aria-selected={tab === id} onClick={() => setTab(id)}
            className={`flex-1 rounded-xl px-4 py-2.5 text-[13px] font-extrabold transition ${tab === id ? "gold-bg text-black" : "text-white/60 hover:text-white"}`}>{l}</button>
        ))}
      </div>

      {tab === "docs" && (
        <div id="documentos" className="mt-5 scroll-mt-40">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {EXEC_DOCS.map((d) => <DocCard key={d.id} doc={d} />)}
          </div>
          <p className="mt-3 flex items-start gap-2 text-[11.5px] text-white/45">
            <BookOpen className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Ficheiros .txt universais (abrem em qualquer telemóvel/PC). Para ofício timbrado, cole o texto no modelo oficial da instituição. Não publique dados pessoais reais.
          </p>
        </div>
      )}

      {tab === "benef" && (
        <div id="beneficios" className="print-area mt-5 scroll-mt-40 overflow-hidden rounded-3xl bg-white text-neutral-800">
          <div className="flex flex-col justify-between gap-3 p-5 sm:flex-row sm:items-center sm:p-6">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#8a6f16]">Relatório de benefícios · minuta 05/2026</p>
              <h3 className="font-display text-xl font-extrabold text-[#0b1e42]">Esperados e verificáveis — nunca declarados sem prova.</h3>
            </div>
            <div className="flex shrink-0 gap-2">
              <button onClick={dlBenefits} className="flex items-center gap-1.5 rounded-xl bg-[#0b1e42] px-4 py-2.5 text-[13px] font-bold text-white"><Download className="h-4 w-4" aria-hidden="true" /> .txt</button>
              <button onClick={printBenefits} className="flex items-center gap-1.5 rounded-xl border border-black/10 px-4 py-2.5 text-[13px] font-bold"><Printer className="h-4 w-4" aria-hidden="true" /> Imprimir</button>
            </div>
          </div>
          <div className="overflow-x-auto px-5 pb-5 sm:px-6">
            <table className="w-full min-w-[640px] text-left text-[13px]">
              <thead><tr className="border-b-2 border-[#0b1e42]/10 text-[11px] uppercase tracking-widest text-neutral-400">
                <th className="py-2 pr-3">Benefício</th><th className="py-2 pr-3">Indicador</th><th className="py-2 pr-3">Como verificar</th><th className="py-2 pr-3">Prazo</th><th className="py-2">Estado</th>
              </tr></thead>
              <tbody>
                {BENEFITS.map((b, i) => (
                  <tr key={i} className="border-b border-black/5 align-top">
                    <td className="py-2.5 pr-3 font-extrabold text-[#0b1e42]">{b.b}</td>
                    <td className="py-2.5 pr-3 text-neutral-600">{b.ind}</td>
                    <td className="py-2.5 pr-3 text-neutral-600">{b.como}</td>
                    <td className="py-2.5 pr-3 text-neutral-600">{b.prazo}</td>
                    <td className="py-2.5"><span className="whitespace-nowrap rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-amber-800">{b.estado}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === "matriz" && (
        <div id="matriz" className="print-area mt-5 scroll-mt-40 overflow-hidden rounded-3xl bg-white text-neutral-800">
          <div className="flex flex-col justify-between gap-3 p-5 sm:flex-row sm:items-center sm:p-6">
            <div>
              <p className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#8a6f16]"><Table2 className="h-3.5 w-3.5" aria-hidden="true" /> Matriz de continuidade · minuta 02/2026 · dados demonstrativos T1–T10</p>
              <h3 className="font-display text-xl font-extrabold text-[#0b1e42]">Nenhum processo com uma só pessoa.</h3>
            </div>
            <div className="flex shrink-0 gap-2">
              <button onClick={() => downloadText("MINUTA-02-matriz-continuidade.csv", continuityCSV())} className="flex items-center gap-1.5 rounded-xl bg-[#0b1e42] px-4 py-2.5 text-[13px] font-bold text-white"><Download className="h-4 w-4" aria-hidden="true" /> CSV</button>
              <button onClick={() => window.print()} className="flex items-center gap-1.5 rounded-xl border border-black/10 px-4 py-2.5 text-[13px] font-bold"><Printer className="h-4 w-4" aria-hidden="true" /> Imprimir</button>
            </div>
          </div>
          <div className="overflow-x-auto px-5 pb-5 sm:px-6">
            <table className="w-full min-w-[720px] text-left text-[13px]">
              <thead><tr className="border-b-2 border-[#0b1e42]/10 text-[11px] uppercase tracking-widest text-neutral-400">
                <th className="py-2 pr-3">Processo</th><th className="py-2 pr-3">Resp.</th><th className="py-2 pr-3">Suplente</th><th className="py-2 pr-3">Documentos</th><th className="py-2 pr-3">Sistema</th><th className="py-2 pr-3">Prazo</th><th className="py-2">Risco</th>
              </tr></thead>
              <tbody>
                {CONTINUITY_ROWS.map((r, i) => (
                  <tr key={i} className="border-b border-black/5">
                    <td className="py-2.5 pr-3 font-bold text-[#0b1e42]">{r.p}</td>
                    <td className="py-2.5 pr-3">{r.r}</td><td className="py-2.5 pr-3 font-bold text-[#8a6f16]">{r.s}</td>
                    <td className="py-2.5 pr-3 text-neutral-500">{r.docs}</td><td className="py-2.5 pr-3 text-neutral-500">{r.sis}</td>
                    <td className="py-2.5 pr-3 text-neutral-500">{r.prazo}</td>
                    <td className="py-2.5"><span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${r.risco === "Alto" ? "bg-red-100 text-red-800" : "bg-amber-100 text-amber-800"}`}>{r.risco}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-2 text-[11.5px] text-neutral-400">T1–T10 são lugares demonstrativos. Preencha nomes reais apenas no documento interno da instituição — nunca publique dados pessoais.</p>
          </div>
        </div>
      )}
    </section>
  );
}

// ─── FONTES (página de fontes + data + reportar) ─────────────────
export function Fontes() {
  return (
    <section id="fontes" aria-label="Fontes e actualização" className="scroll-mt-32 rounded-[28px] border border-[#0b1e42]/12 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <SectionKicker accent="#1E4ED8">Página de fontes · revisão {SISTAFE_META.revisao}</SectionKicker>
          <h2 className="font-serifd text-2xl font-extrabold text-[#0b1e42] sm:text-3xl">De onde vem cada afirmação.</h2>
          <p className="mt-1 max-w-2xl text-[13.5px] text-neutral-500">Sem fonte e data, não há confiança. Valide cada diploma no <b>Boletim da República / Imprensa Nacional</b>, no <b>cedsif.gov.mz</b> e na <b>ufsa.gov.mz</b>.</p>
        </div>
        <a href={`mailto:${COFRE.email}?subject=Reportar%20erro%20MOZ-SISTAFE&body=Encontrei%20um%20possível%20erro%20em:%20`} className="flex shrink-0 items-center gap-2 rounded-2xl border-2 border-red-200 bg-red-50 px-5 py-3 text-[13px] font-extrabold text-red-800 hover:bg-red-100">
          <Flag className="h-4 w-4" aria-hidden="true" /> Reportar erro
        </a>
      </div>
      <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {SOURCES.map((s, i) => (
          <div key={i} className="rounded-2xl bg-[#f2f5fb] p-4 ring-1 ring-[#0b1e42]/5">
            <p className="text-[13px] font-extrabold text-[#0b1e42]">{s.sigla}</p>
            <p className="mt-1 text-[12.5px] leading-relaxed text-neutral-500">{s.oque}</p>
            <p className="mt-2 text-[11px] font-bold text-[#0e2a5e]">Verificar: {s.onde}</p>
            <p className="text-[11px] text-neutral-400">Revisão: {s.rev}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── CONTACTOS EXECUTIVOS ────────────────────────────────────────
export function ContactosExec() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  return (
    <section id="contactos" aria-label="Contactos da coordenação" className="scroll-mt-32 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
      <div className="rounded-[28px] bg-[#0b1e42] p-6 text-white sm:p-8">
        <SectionKicker dark>Contactos · Coordenação do projecto</SectionKicker>
        <h2 className="font-serifd text-2xl font-extrabold sm:text-3xl">Fale com quem coordena — não com o Estado.</h2>
        <div className="mt-4 space-y-2.5 text-[14px]">
          <a href={waLink("Olá MOZ-SISTAFE! Vim do Gabinete Executivo.")} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-white/5 p-3.5 ring-1 ring-white/10 hover:bg-white/10">
            <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden="true" /><span><b>WhatsApp {COFRE.whatsappDisplay}</b><br /><span className="text-[12px] text-white/55">Canal principal · 8h–20h · resposta em minutos</span></span>
          </a>
          <a href={`mailto:${COFRE.email}?subject=MOZ-SISTAFE%20—%20Gabinete%20Executivo`} className="flex items-center gap-3 rounded-2xl bg-white/5 p-3.5 ring-1 ring-white/10 hover:bg-white/10">
            <Mail className="h-5 w-5 text-[#f6e27a]" aria-hidden="true" /><span><b>{COFRE.email}</b><br /><span className="text-[12px] text-white/55">Minutas, comprovativos e propostas</span></span>
          </a>
          <div className="grid grid-cols-2 gap-2 text-[13px]">
            <div className="rounded-2xl bg-white/5 p-3.5 ring-1 ring-white/10"><p className="font-bold text-red-300">M-Pesa</p><p className="tick font-extrabold">{COFRE.mpesa}</p></div>
            <div className="rounded-2xl bg-white/5 p-3.5 ring-1 ring-white/10"><p className="font-bold text-orange-300">e-Mola</p><p className="tick font-extrabold">{COFRE.emola}</p></div>
          </div>
          <p className="text-[12px] text-white/50">Titular: <b className="text-white/80">{COFRE.nome}</b> · NUIT {COFRE.nuit} · Pagamento <b>manual</b>: pague, envie o comprovativo no WhatsApp e receba em 2h. Sem cobrança automática — nunca partilhe PIN.</p>
          <button onClick={() => { window.location.hash = "#/"; }} className="mt-1 flex w-full items-center justify-center gap-2 rounded-2xl border border-[#d4af37]/50 bg-[#d4af37]/10 px-5 py-3.5 text-sm font-extrabold text-[#f6e27a] hover:bg-[#d4af37]/20">
            <ExternalLink className="h-4 w-4" aria-hidden="true" /> Voltar ao Ecossistema Machava (portal central)
          </button>
        </div>
      </div>
      <div className="rounded-[28px] border border-[#0b1e42]/12 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0e2a5e]">Antes de submeter — verifique</p>
        <h3 className="font-display mt-1 text-xl font-extrabold text-[#0b1e42]">Checklist de submissão superior.</h3>
        <ChecklistSubmissao faqOpen={faqOpen} setFaqOpen={setFaqOpen} />
      </div>
    </section>
  );
}

function ChecklistSubmissao({ faqOpen, setFaqOpen }: { faqOpen: number | null; setFaqOpen: (n: number | null) => void }) {
  const [done, setDone] = useState<boolean[]>([false, false, false, false, false]);
  const items = [
    ["Minutas marcadas como REVISÃO", "Cabeçalho 'MINUTA PARA REVISÃO — NÃO É ACTO OFICIAL' em todas."],
    ["Sem timbre nem órgão oficial", "Nada de CEDSIF/Ministério/Direcção como emitente. Só 'Coordenação do projecto'."],
    ["Dados T1–T10 como demonstrativos", "Sem nomes, NUITs ou contactos reais publicados."],
    ["Benefícios como esperados", "Com indicador e meio de verificação. Sem resultado declarado."],
    ["Via hierárquica respeitada", "Nota 06 anexada, com pedido de despacho claro."],
  ];
  const pct = Math.round((done.filter(Boolean).length / items.length) * 100);
  return (
    <div className="mt-4">
      <div className="mb-3 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-100" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Progresso da verificação">
          <div className={`h-full transition-all ${pct === 100 ? "bg-emerald-500" : "bg-[#0e2a5e]"}`} style={{ width: `${pct}%` }} />
        </div>
        <span className="tick text-[12px] font-extrabold text-[#0b1e42]">{pct}%</span>
      </div>
      <div className="space-y-2">
        {items.map(([t, d], i) => (
          <div key={i} className={`overflow-hidden rounded-2xl border ${done[i] ? "border-emerald-300 bg-emerald-50/50" : "border-black/10"}`}>
            <div className="flex items-center gap-3 p-3">
              <button onClick={() => { const n = [...done]; n[i] = !n[i]; setDone(n); }} aria-pressed={done[i]} aria-label={`Marcar: ${t}`}
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${done[i] ? "border-emerald-500 bg-emerald-500 text-white" : "border-neutral-300"}`}>
                {done[i] && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
              </button>
              <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} aria-expanded={faqOpen === i} className="flex flex-1 items-center justify-between gap-2 text-left text-[13px] font-bold text-neutral-800">
                {t}<ChevronDown className={`h-4 w-4 shrink-0 ${faqOpen === i ? "rotate-180" : "text-neutral-300"}`} aria-hidden="true" />
              </button>
            </div>
            {faqOpen === i && <p className="px-4 pb-3 pl-[48px] text-[12.5px] text-neutral-500">{d}</p>}
          </div>
        ))}
      </div>
      {pct === 100
        ? <p className="mt-3 rounded-xl bg-emerald-50 p-3 text-[13px] font-bold text-emerald-800" role="status">Pronto para submeter pela via hierárquica. Boa apreciação superior. ✓</p>
        : <p className="mt-3 rounded-xl bg-amber-50 p-3 text-[13px] text-amber-800">Complete os {items.length - done.filter(Boolean).length} ponto(s) antes de submeter — é isto que distingue minuta de atropelo.</p>}
    </div>
  );
}
