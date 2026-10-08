import { useEffect, useMemo, useState } from "react";
import {
  FileUser, Plus, Trash2, Printer, RotateCcw, MessageCircle, Check,
  Sparkles, Download, Eye, Briefcase, GraduationCap, Languages, Wrench, ChevronDown, ShieldCheck,
} from "lucide-react";
import { COFRE, CV_TIPS, CV_EXAMPLE, waLink } from "../data";
import { SectionKicker } from "../components/chrome";
import { CvPrecarioTurbo } from "../components/TurboInsano";
import PagamentoSeguro from "../components/PagamentoSeguro";

type Exp = { cargo: string; empresa: string; periodo: string; desc: string };
type Edu = { curso: string; inst: string; ano: string };

const ACCENT = "#7C3AED";
const EMPTY_EXP: Exp = { cargo: "", empresa: "", periodo: "", desc: "" };
const EMPTY_EDU: Edu = { curso: "", inst: "", ano: "" };
const LS_KEY = "cvmaker-draft-v1";

function load(): typeof CV_EXAMPLE | null {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

export default function CvMaker() {
  const [form, setForm] = useState(CV_EXAMPLE);
  const [template, setTemplate] = useState<"executivo" | "moderno" | "simples">("executivo");
  const [skillInput, setSkillInput] = useState("");
  const [showTips, setShowTips] = useState<number | null>(0);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const d = load();
    if (d) setForm(d);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(form));
      setSaved(true);
      const t = setTimeout(() => setSaved(false), 1200);
      return () => clearTimeout(t);
    } catch { /* sem storage */ }
  }, [form]);

  const completeness = useMemo(() => {
    let s = 0;
    if (form.nome.trim().length > 3) s += 20;
    if (form.titulo.trim().length > 3) s += 15;
    if (form.telefone.trim().length > 5) s += 10;
    if (form.email.includes("@")) s += 10;
    if (form.resumo.trim().length > 40) s += 15;
    if (form.exps.some((e) => e.cargo && e.empresa)) s += 15;
    if (form.edus.some((e) => e.curso && e.inst)) s += 10;
    if (form.skills.length >= 3) s += 5;
    return Math.min(100, s);
  }, [form]);

  const set = (k: keyof typeof form, v: string) => setForm({ ...form, [k]: v });

  const updExp = (i: number, k: keyof Exp, v: string) => {
    const n = [...form.exps]; n[i] = { ...n[i], [k]: v }; setForm({ ...form, exps: n });
  };
  const updEdu = (i: number, k: keyof Edu, v: string) => {
    const n = [...form.edus]; n[i] = { ...n[i], [k]: v }; setForm({ ...form, edus: n });
  };

  const addSkill = () => {
    const s = skillInput.trim();
    if (!s || form.skills.includes(s)) return;
    setForm({ ...form, skills: [...form.skills, s] });
    setSkillInput("");
  };

  const waReview = waLink(
    `Olá CV-MAKER! Quero REVISÃO do meu CV.\nNome: ${form.nome || "(nome)"}\nÁrea: ${form.titulo || "(área)"}\nResumo: ${form.resumo.slice(0, 120) || "(resumo)"}`
  );

  const inputCls = "w-full rounded-xl border border-black/10 bg-neutral-50 px-3.5 py-2.5 text-sm outline-none transition focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/25";
  const labelCls = "mb-1 block text-[11px] font-extrabold uppercase tracking-widest text-neutral-500";

  return (
    <div className="bg-[#FAFAFE]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#150A2E] text-white">
        <div className="absolute inset-0 hero-grid opacity-60" aria-hidden="true" />
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#7C3AED]/30 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-12 sm:pt-14">
          <div className="max-w-2xl">
            <p className="anim-rise inline-flex items-center gap-2 rounded-full bg-[#7C3AED]/20 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-[#DDD0FF] ring-1 ring-[#7C3AED]/50">
              <FileUser className="h-3.5 w-3.5" aria-hidden="true" /> Subsistema 04 · Carreira e empregabilidade
            </p>
            <h1 className="anim-rise font-display mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl" style={{ animationDelay: ".08s" }}>
              CV-MAKER<span className="text-[#A78BFA]">.</span> Apresente o seu melhor em <span className="text-[#C4B5FD]">uma página.</span>
            </h1>
            <p className="anim-rise mt-3 max-w-xl text-[15px] leading-relaxed text-white/70" style={{ animationDelay: ".16s" }}>
              Construa o currículo passo a passo, veja o resultado ao vivo e imprima em PDF — grátis, no telemóvel ou PC.
              Sem conta, sem instalação. O rascunho guarda-se neste aparelho.
            </p>
            <div className="anim-rise mt-5 flex flex-col gap-2 sm:flex-row" style={{ animationDelay: ".24s" }}>
              <a href="#criar" className="flex items-center justify-center gap-2 rounded-2xl bg-[#7C3AED] px-6 py-3.5 text-sm font-extrabold text-white shadow-xl transition hover:brightness-110">
                <Sparkles className="h-4 w-4" aria-hidden="true" /> Criar o meu CV agora
              </a>
              <button onClick={() => setForm(CV_EXAMPLE)} className="flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-6 py-3.5 text-sm font-extrabold ring-1 ring-white/25 hover:bg-white/15">
                <Eye className="h-4 w-4" aria-hidden="true" /> Carregar exemplo
              </button>
            </div>
            <div className="anim-rise mt-5 flex items-center gap-3" style={{ animationDelay: ".3s" }}>
              <div className="h-2 w-48 overflow-hidden rounded-full bg-white/15" role="progressbar" aria-valuenow={completeness} aria-valuemin={0} aria-valuemax={100} aria-label="Progresso do CV">
                <div className="h-full rounded-full bg-gradient-to-r from-[#A78BFA] to-[#7C3AED] transition-all" style={{ width: `${completeness}%` }} />
              </div>
              <p className="text-[12px] font-bold text-white/70"><span className="tick text-white">{completeness}%</span> completo {saved && <span className="text-emerald-300">· guardado ✓</span>}</p>
            </div>
          </div>
        </div>
      </section>

      <div id="criar" className="mx-auto max-w-7xl scroll-mt-24 space-y-10 px-4 py-10 sm:py-12">
        {/* TEMPLATE SWITCH */}
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <SectionKicker accent={ACCENT}>Passo 1 · Escolha o modelo</SectionKicker>
            <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">Três modelos. Um objectivo: ser chamado.</h2>
          </div>
          <div className="flex rounded-full border border-black/10 bg-white p-1 shadow-sm" role="tablist" aria-label="Modelos de CV">
            {(["executivo", "moderno", "simples"] as const).map((t) => (
              <button key={t} role="tab" aria-selected={template === t} onClick={() => setTemplate(t)}
                className={`rounded-full px-4 py-2 text-[13px] font-bold capitalize transition ${template === t ? "bg-[#150A2E] text-white" : "text-neutral-500 hover:text-black"}`}>{t}</button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* FORM */}
          <div className="space-y-4">
            <fieldset className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm">
              <legend className="sr-only">Dados pessoais</legend>
              <p className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-widest text-[#7C3AED]"><FileUser className="h-4 w-4" aria-hidden="true" /> Dados pessoais</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="sm:col-span-2"><label className={labelCls} htmlFor="cv-nome">Nome completo</label><input id="cv-nome" className={inputCls} value={form.nome} onChange={(e) => set("nome", e.target.value)} placeholder="Ex.: Ancha João Langa" autoComplete="name" /></div>
                <div className="sm:col-span-2"><label className={labelCls} htmlFor="cv-titulo">Título profissional</label><input id="cv-titulo" className={inputCls} value={form.titulo} onChange={(e) => set("titulo", e.target.value)} placeholder="Ex.: Técnica Administrativa" /></div>
                <div><label className={labelCls} htmlFor="cv-tel">Telefone / WhatsApp</label><input id="cv-tel" className={inputCls} value={form.telefone} onChange={(e) => set("telefone", e.target.value)} placeholder="+258 84 ..." inputMode="tel" autoComplete="tel" /></div>
                <div><label className={labelCls} htmlFor="cv-email">Email</label><input id="cv-email" className={inputCls} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="nome@email.com" inputMode="email" autoComplete="email" /></div>
                <div className="sm:col-span-2"><label className={labelCls} htmlFor="cv-cidade">Cidade</label><input id="cv-cidade" className={inputCls} value={form.cidade} onChange={(e) => set("cidade", e.target.value)} placeholder="Maputo, Moçambique" /></div>
                <div className="sm:col-span-2"><label className={labelCls} htmlFor="cv-resumo">Resumo profissional (3 linhas)</label><textarea id="cv-resumo" rows={3} className={inputCls} value={form.resumo} onChange={(e) => set("resumo", e.target.value)} placeholder="Anos de experiência + área + 1 resultado concreto." /></div>
              </div>
            </fieldset>

            <fieldset className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-widest text-[#7C3AED]"><Briefcase className="h-4 w-4" aria-hidden="true" /> Experiência</p>
                <button onClick={() => setForm({ ...form, exps: [...form.exps, { ...EMPTY_EXP }] })} className="flex items-center gap-1.5 rounded-xl bg-[#7C3AED]/10 px-3 py-1.5 text-[12px] font-bold text-[#5B21B6] hover:bg-[#7C3AED]/20"><Plus className="h-3.5 w-3.5" aria-hidden="true" /> Adicionar</button>
              </div>
              <div className="mt-3 space-y-3">
                {form.exps.map((e, i) => (
                  <div key={i} className="rounded-2xl bg-neutral-50 p-3.5 ring-1 ring-black/5">
                    <div className="mb-2 flex items-center justify-between text-[12px] font-extrabold text-neutral-500">Experiência {i + 1}
                      {form.exps.length > 1 && <button onClick={() => setForm({ ...form, exps: form.exps.filter((_, j) => j !== i) })} className="flex items-center gap-1 text-red-600 hover:underline" aria-label={`Remover experiência ${i + 1}`}><Trash2 className="h-3.5 w-3.5" aria-hidden="true" /> Remover</button>}
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <input className={inputCls} value={e.cargo} onChange={(ev) => updExp(i, "cargo", ev.target.value)} placeholder="Cargo" aria-label={`Cargo ${i + 1}`} />
                      <input className={inputCls} value={e.empresa} onChange={(ev) => updExp(i, "empresa", ev.target.value)} placeholder="Empresa" aria-label={`Empresa ${i + 1}`} />
                      <input className={`${inputCls} sm:col-span-2`} value={e.periodo} onChange={(ev) => updExp(i, "periodo", ev.target.value)} placeholder="Período — ex.: 2023 — Presente" aria-label={`Período ${i + 1}`} />
                      <textarea rows={2} className={`${inputCls} sm:col-span-2`} value={e.desc} onChange={(ev) => updExp(i, "desc", ev.target.value)} placeholder="1–2 frases com resultado: o que fez + número." aria-label={`Descrição ${i + 1}`} />
                    </div>
                  </div>
                ))}
              </div>
            </fieldset>

            <fieldset className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-widest text-[#7C3AED]"><GraduationCap className="h-4 w-4" aria-hidden="true" /> Formação</p>
                <button onClick={() => setForm({ ...form, edus: [...form.edus, { ...EMPTY_EDU }] })} className="flex items-center gap-1.5 rounded-xl bg-[#7C3AED]/10 px-3 py-1.5 text-[12px] font-bold text-[#5B21B6] hover:bg-[#7C3AED]/20"><Plus className="h-3.5 w-3.5" aria-hidden="true" /> Adicionar</button>
              </div>
              <div className="mt-3 space-y-2">
                {form.edus.map((e, i) => (
                  <div key={i} className="grid gap-2 sm:grid-cols-[1.4fr_1.4fr_.6fr_auto]">
                    <input className={inputCls} value={e.curso} onChange={(ev) => updEdu(i, "curso", ev.target.value)} placeholder="Curso" aria-label={`Curso ${i + 1}`} />
                    <input className={inputCls} value={e.inst} onChange={(ev) => updEdu(i, "inst", ev.target.value)} placeholder="Instituição" aria-label={`Instituição ${i + 1}`} />
                    <input className={inputCls} value={e.ano} onChange={(ev) => updEdu(i, "ano", ev.target.value)} placeholder="Ano" aria-label={`Ano ${i + 1}`} />
                    {form.edus.length > 1 && <button onClick={() => setForm({ ...form, edus: form.edus.filter((_, j) => j !== i) })} className="rounded-xl border border-red-200 p-2.5 text-red-600 hover:bg-red-50" aria-label={`Remover formação ${i + 1}`}><Trash2 className="h-4 w-4" aria-hidden="true" /></button>}
                  </div>
                ))}
              </div>
            </fieldset>

            <fieldset className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm">
              <p className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-widest text-[#7C3AED]"><Wrench className="h-4 w-4" aria-hidden="true" /> Competências</p>
              <div className="mt-3 flex gap-2">
                <input value={skillInput} onChange={(e) => setSkillInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())} placeholder="Ex.: Excel + Enter" className={inputCls} aria-label="Nova competência" />
                <button onClick={addSkill} className="shrink-0 rounded-xl bg-[#150A2E] px-4 text-sm font-bold text-white hover:bg-black"><Plus className="h-4 w-4" aria-hidden="true" /></button>
              </div>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {form.skills.map((s) => (
                  <button key={s} onClick={() => setForm({ ...form, skills: form.skills.filter((x) => x !== s) })} title="Remover" className="rounded-full bg-[#7C3AED]/10 px-3 py-1.5 text-[12px] font-bold text-[#5B21B6] ring-1 ring-[#7C3AED]/25 hover:bg-red-50 hover:text-red-700">{s} ✕</button>
                ))}
              </div>
              <div className="mt-4">
                <label className={labelCls} htmlFor="cv-langs"><span className="flex items-center gap-1.5"><Languages className="h-3.5 w-3.5" aria-hidden="true" /> Línguas (uma por linha)</span></label>
                <textarea id="cv-langs" rows={2} className={inputCls} value={form.langs.join("\n")} onChange={(e) => setForm({ ...form, langs: e.target.value.split("\n") })} />
              </div>
            </fieldset>
          </div>

          {/* PREVIEW */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-center justify-between">
              <p className="text-[12px] font-extrabold uppercase tracking-widest text-neutral-500">Passo 2 · Pré-visualização ao vivo</p>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700 ring-1 ring-emerald-200">Actualiza ao escrever</span>
            </div>
            <div className="print-area mt-3 overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/10">
              {template === "executivo" && (
                <div>
                  <div className="bg-[#150A2E] p-6 text-white sm:p-7">
                    <p className="font-serifd text-2xl font-extrabold leading-tight sm:text-3xl">{form.nome || "O seu nome"}</p>
                    <p className="mt-1 text-[13px] font-bold text-[#C4B5FD]">{form.titulo || "Título profissional"}</p>
                    <p className="mt-2 text-[11.5px] text-white/70">{form.telefone} · {form.email} · {form.cidade}</p>
                  </div>
                  <div className="space-y-4 p-6 text-[13px] leading-relaxed text-neutral-700 sm:p-7">
                    <div><p className="mb-1 border-b-2 border-[#7C3AED]/30 pb-1 text-[11px] font-extrabold uppercase tracking-widest text-[#5B21B6]">Resumo</p><p>{form.resumo || "—"}</p></div>
                    <div><p className="mb-1.5 border-b-2 border-[#7C3AED]/30 pb-1 text-[11px] font-extrabold uppercase tracking-widest text-[#5B21B6]">Experiência</p>{form.exps.filter((e) => e.cargo || e.empresa).map((e, i) => (<div key={i} className="mb-2"><p className="font-extrabold text-neutral-900">{e.cargo || "—"} <span className="font-medium text-neutral-500">· {e.empresa}</span></p><p className="text-[11px] font-bold text-[#7C3AED]">{e.periodo}</p><p className="mt-0.5">{e.desc}</p></div>))}</div>
                    <div><p className="mb-1.5 border-b-2 border-[#7C3AED]/30 pb-1 text-[11px] font-extrabold uppercase tracking-widest text-[#5B21B6]">Formação</p>{form.edus.filter((e) => e.curso).map((e, i) => (<p key={i}><b>{e.curso}</b> — {e.inst} ({e.ano})</p>))}</div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div><p className="mb-1 border-b-2 border-[#7C3AED]/30 pb-1 text-[11px] font-extrabold uppercase tracking-widest text-[#5B21B6]">Competências</p><p>{form.skills.join(" · ") || "—"}</p></div>
                      <div><p className="mb-1 border-b-2 border-[#7C3AED]/30 pb-1 text-[11px] font-extrabold uppercase tracking-widest text-[#5B21B6]">Línguas</p>{form.langs.filter(Boolean).map((l, i) => (<p key={i}>{l}</p>))}</div>
                    </div>
                  </div>
                </div>
              )}
              {template === "moderno" && (
                <div className="grid sm:grid-cols-[190px_1fr]">
                  <div className="bg-[#7C3AED] p-6 text-white">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 font-display text-2xl font-extrabold">{(form.nome || "CV").split(" ").map((w) => w[0]).slice(0, 2).join("")}</div>
                    <p className="mt-3 text-[11px] font-extrabold uppercase tracking-widest text-white/70">Contacto</p>
                    <p className="mt-1 text-[12px] leading-relaxed">{form.telefone}<br />{form.email}<br />{form.cidade}</p>
                    <p className="mt-4 text-[11px] font-extrabold uppercase tracking-widest text-white/70">Skills</p>
                    <div className="mt-1.5 flex flex-wrap gap-1">{form.skills.map((s) => (<span key={s} className="rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-bold">{s}</span>))}</div>
                    <p className="mt-4 text-[11px] font-extrabold uppercase tracking-widest text-white/70">Línguas</p>
                    <div className="mt-1 text-[12px]">{form.langs.filter(Boolean).map((l, i) => (<p key={i}>{l}</p>))}</div>
                  </div>
                  <div className="space-y-4 p-6 text-[13px] text-neutral-700">
                    <div><p className="font-display text-2xl font-extrabold text-neutral-900">{form.nome || "O seu nome"}</p><p className="font-bold text-[#7C3AED]">{form.titulo}</p><p className="mt-2">{form.resumo}</p></div>
                    <div><p className="text-[11px] font-extrabold uppercase tracking-widest text-neutral-400">Experiência</p>{form.exps.filter((e) => e.cargo || e.empresa).map((e, i) => (<div key={i} className="mt-1.5 border-l-2 border-[#7C3AED] pl-3"><p className="font-extrabold text-neutral-900">{e.cargo} · <span className="font-medium text-neutral-500">{e.empresa}</span></p><p className="text-[11px] font-bold text-[#7C3AED]">{e.periodo}</p><p>{e.desc}</p></div>))}</div>
                    <div><p className="text-[11px] font-extrabold uppercase tracking-widest text-neutral-400">Formação</p>{form.edus.filter((e) => e.curso).map((e, i) => (<p key={i} className="mt-1"><b>{e.curso}</b> — {e.inst} ({e.ano})</p>))}</div>
                  </div>
                </div>
              )}
              {template === "simples" && (
                <div className="space-y-3 p-6 text-[13px] leading-relaxed text-neutral-800 sm:p-8">
                  <div className="border-b border-black/10 pb-3 text-center"><p className="text-2xl font-extrabold tracking-tight">{form.nome || "O seu nome"}</p><p className="font-semibold text-neutral-500">{form.titulo}</p><p className="mt-1 text-[12px]">{form.telefone} · {form.email} · {form.cidade}</p></div>
                  <p>{form.resumo}</p>
                  <p className="pt-1 text-[12px] font-extrabold uppercase tracking-widest">Experiência</p>
                  {form.exps.filter((e) => e.cargo || e.empresa).map((e, i) => (<p key={i}><b>{e.cargo}</b>, {e.empresa} ({e.periodo}) — {e.desc}</p>))}
                  <p className="pt-1 text-[12px] font-extrabold uppercase tracking-widest">Formação</p>
                  {form.edus.filter((e) => e.curso).map((e, i) => (<p key={i}>{e.curso}, {e.inst} ({e.ano})</p>))}
                  <p className="pt-1 text-[12px] font-extrabold uppercase tracking-widest">Competências · Línguas</p>
                  <p>{form.skills.join(", ")}{form.skills.length > 0 && form.langs.filter(Boolean).length > 0 ? " — " : ""}{form.langs.filter(Boolean).join("; ")}</p>
                </div>
              )}
              <div className="border-t border-dashed border-black/10 bg-neutral-50 px-6 py-2.5 text-center">
                <p className="text-[10px] font-bold tracking-wide text-neutral-400">Feito grátis no CV-MAKER · Ecossistema Machava · wa.me/258844898420 · Versão PRO sem marca + revisão humana: 150 MT</p>
              </div>
            </div>
            <p className="mt-2 rounded-2xl bg-[#F0E9FD] p-3 text-[12px] leading-relaxed text-[#4C1D95] ring-1 ring-[#7C3AED]/20"><b>Grátis vs PRO:</b> montar e imprimir aqui é grátis (com esta faixinha em baixo). O pago é o serviço humano: eu reformato + carta + entrego em 4h no WhatsApp — 150 MT só CV, 250 MT CV+carta (primeiros 5 a 75 MT).</p>

            {/* ACTIONS */}
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <button onClick={() => window.print()} className="flex items-center justify-center gap-2 rounded-2xl bg-[#150A2E] px-5 py-3.5 text-sm font-extrabold text-white hover:bg-black">
                <Printer className="h-4 w-4" aria-hidden="true" /> Imprimir / Guardar PDF
              </button>
              <a href={waReview} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3.5 text-sm font-extrabold text-white hover:brightness-110">
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Pedir revisão no WhatsApp
              </a>
              <button onClick={() => { localStorage.removeItem(LS_KEY); setForm({ ...CV_EXAMPLE, nome: "", titulo: "", email: "", telefone: "", cidade: "", resumo: "", exps: [{ ...EMPTY_EXP }], edus: [{ ...EMPTY_EDU }], skills: [], langs: [] }); }} className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-bold hover:bg-neutral-50">
                <RotateCcw className="h-4 w-4" aria-hidden="true" /> Limpar e recomeçar
              </button>
              <button onClick={() => setForm(CV_EXAMPLE)} className="flex items-center justify-center gap-2 rounded-2xl border border-[#7C3AED]/30 bg-[#7C3AED]/5 px-5 py-3 text-sm font-bold text-[#5B21B6] hover:bg-[#7C3AED]/10">
                <Download className="h-4 w-4" aria-hidden="true" /> Repor exemplo
              </button>
            </div>
            <p className="mt-2 text-[11.5px] leading-relaxed text-neutral-400">Dica de ficheiro: no diálogo de impressão escolha “Guardar como PDF” e nomeie <b>{(form.nome || "Nome-Apelido").replace(/\s+/g, "-")}-CV-2026.pdf</b>. O CV-MAKER não garante emprego — garante apresentação profissional.</p>
          </div>
        </div>

        <CvPrecarioTurbo />

        <PagamentoSeguro />

        {/* TIPS + AVISO */}
        <section className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm sm:p-7">
            <SectionKicker accent={ACCENT}>Empregabilidade em Moçambique</SectionKicker>
            <h3 className="font-display text-2xl font-extrabold">5 regras antes de enviar.</h3>
            <div className="mt-4 space-y-2">
              {CV_TIPS.map((t, i) => (
                <div key={i} className={`overflow-hidden rounded-2xl border transition ${showTips === i ? "border-[#7C3AED] shadow-md" : "border-black/10"}`}>
                  <button onClick={() => setShowTips(showTips === i ? null : i)} className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-[14px] font-bold" aria-expanded={showTips === i}>
                    <span className="flex items-center gap-2.5"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#7C3AED]/10 text-[13px] font-extrabold text-[#5B21B6]">{i + 1}</span>{t.t}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 transition ${showTips === i ? "rotate-180" : "text-neutral-300"}`} aria-hidden="true" />
                  </button>
                  {showTips === i && <p className="px-4 pb-4 pl-[52px] text-[13.5px] text-neutral-500">{t.d}</p>}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-[28px] bg-[#150A2E] p-6 text-white sm:p-8">
            <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#C4B5FD]"><ShieldCheck className="h-4 w-4" aria-hidden="true" /> Nota honesta</p>
            <p className="font-display mt-2 text-xl font-extrabold leading-snug">Ferramenta gratuita. Sem promessas mágicas.</p>
            <ul className="mt-4 space-y-2 text-[13.5px] text-white/70">
              {["Os seus dados ficam neste aparelho (rascunho local)", "Nada é enviado sem carregar em WhatsApp/Imprimir", "Revisão humana disponível no WhatsApp", "Para vagas do Estado, junte NUIT e certificados"].map((t, i) => (
                <li key={i} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#A78BFA]" aria-hidden="true" />{t}</li>
              ))}
            </ul>
            <a href={waLink("Olá CV-MAKER! Preciso de ajuda com o meu CV para a vaga de:")} target="_blank" rel="noreferrer" className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-[#7C3AED] px-5 py-3.5 text-sm font-extrabold text-white hover:brightness-110">
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> Falar com apoio de carreira
            </a>
            <p className="mt-2 text-center text-[11px] text-white/40">{COFRE.whatsappDisplay} · {COFRE.email}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
