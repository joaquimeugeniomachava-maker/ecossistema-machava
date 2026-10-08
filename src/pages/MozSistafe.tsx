import { useEffect, useMemo, useState } from "react";
import {
  Landmark, BookOpen, GraduationCap, Search, Droplets, MessageCircle, Check,
  ChevronDown, FileText, Award, Users, Clock, ShieldCheck, Sparkles, ArrowRight, BadgeCheck, Download, Eye, Flag,
} from "lucide-react";
import { COFRE, SISTAFE_MODULES, SISTAFE_MANUALS, SISTAFE_TRAINING, SISTAFE_GLOSSARY, SISTAFE_QUIZ, SISTAFE_FAQ, waLink } from "../data";
import { SectionKicker, Stars } from "../components/chrome";
import { BaseLegal, Programa360, RadarIntegridade } from "../components/sistafe360";
import { SISTAFE_META } from "../dataSistafeExec";
import { IndependenceNotice, ExecNav, GlobalSearch, GabineteExecutivo, Fontes, ContactosExec } from "../components/sistafeExec";

const HERO_IMG = "https://images.pexels.com/photos/8550496/pexels-photo-8550496.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const OFFICE_IMG = "https://images.pexels.com/photos/8124247/pexels-photo-8124247.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const fmt = (n: number) => n.toLocaleString("pt-MZ") + " MT";

// ─── EXPLORADOR DE MÓDULOS ─────────────────────────────────────
function ModuleExplorer() {
  const [sel, setSel] = useState(1);
  const m = SISTAFE_MODULES[sel];
  return (
    <div className="overflow-hidden rounded-[28px] border border-[#0e2a5e]/15 bg-white navy-shadow">
      <div className="grid lg:grid-cols-[1fr_1.1fr]">
        <div className="bg-[#0b1e42] p-6 text-white sm:p-8">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#e3c25c]">Mapa do e-SISTAFE · CEDSIF</p>
          <h3 className="font-serifd mt-2 text-2xl font-extrabold sm:text-3xl">Domine os 8 módulos que decidem pagamentos.</h3>
          <div className="mt-5 grid grid-cols-2 gap-2">
            {SISTAFE_MODULES.map((mod, i) => (
              <button key={mod.code} onClick={() => setSel(i)}
                className={`rounded-2xl border p-3 text-left transition ${i === sel ? "border-[#d4af37] bg-[#d4af37]/15 shadow-lg" : "border-white/10 bg-white/5 hover:border-white/30"}`}>
                <span className="tick font-display text-[13px] font-extrabold text-[#f6e27a]">{mod.code}</span>
                <span className="block text-[12px] font-bold leading-tight">{mod.name}</span>
                <span className="mt-1 inline-block rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white/60">{mod.lessons} lições</span>
              </button>
            ))}
          </div>
        </div>
        <div className="relative p-6 sm:p-9">
          <div className="absolute right-6 top-6 hidden rounded-2xl bg-[#d4af37]/15 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-[#8a6f16] ring-1 ring-[#d4af37]/40 sm:block">{m.level}</div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl font-display text-lg font-extrabold text-white" style={{ background: m.color }}>{m.code.slice(0, 2)}</div>
          <h4 className="font-display mt-4 text-2xl font-extrabold text-[#0b1e42] sm:text-3xl">{m.code} — {m.name}</h4>
          <p className="mt-2 text-[14.5px] leading-relaxed text-neutral-600">{m.desc}</p>
          <div className="mt-5 rounded-2xl bg-[#0b1e42]/[.04] p-4 ring-1 ring-[#0b1e42]/10">
            <p className="text-[12px] font-extrabold uppercase tracking-widest text-[#0e2a5e]">O que vai aprender neste módulo</p>
            <ul className="mt-2.5 space-y-1.5 text-[13.5px] text-neutral-600">
              {[
                `Fluxo completo do ${m.code} com capturas reais do sistema`,
                "Erros que bloqueiam 90% dos processos (e como resolver)",
                "Checklist de validação antes de submeter",
                `Exercício prático corrigido + glossário ${m.code}`,
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
            <a href={waLink(`Olá MOZ-SISTAFE! Quero o MANUAL COMPLETO (500 MT) para dominar o módulo ${m.code} — ${m.name}. Como pago?`)} target="_blank" rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#0b1e42] px-5 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#143a82]">
              <BookOpen className="h-4 w-4 text-[#f6e27a]" /> Estudar {m.code} no manual
            </a>
            <a href={waLink(`Olá! Tenho uma DÚVIDA no módulo ${m.code} (${m.name}): `)} target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl border-2 border-[#0b1e42]/15 px-5 py-3.5 text-sm font-extrabold text-[#0b1e42] hover:border-[#0b1e42]/40">
              Tirar dúvida grátis
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── QUIZ ──────────────────────────────────────────────────────
function Quiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const q = SISTAFE_QUIZ[step];

  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.a) setScore(score + 1);
  };
  const next = () => {
    if (step + 1 >= SISTAFE_QUIZ.length) setDone(true);
    else { setStep(step + 1); setPicked(null); }
  };

  return (
    <div className="rounded-[28px] bg-[#0b1e42] p-6 text-white sm:p-9">
      <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#e3c25c]"><Sparkles className="h-4 w-4" /> Teste o seu nível · grátis</p>
      {!done ? (
        <>
          <div className="mt-3 flex items-center justify-between text-[12px] font-bold text-white/60">
            <span>Pergunta {step + 1} de {SISTAFE_QUIZ.length}</span><span className="tick">Pontos: {score}</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-gradient-to-r from-[#f6e27a] to-[#d4af37] transition-all" style={{ width: `${((step + 1) / SISTAFE_QUIZ.length) * 100}%` }} />
          </div>
          <h4 className="font-display mt-5 text-xl font-extrabold sm:text-2xl">{q.q}</h4>
          <div className="mt-4 grid gap-2">
            {q.opts.map((o, i) => {
              const isA = picked !== null && i === q.a;
              const isW = picked === i && i !== q.a;
              return (
                <button key={i} onClick={() => pick(i)} disabled={picked !== null}
                  className={`rounded-2xl border px-4 py-3 text-left text-[14px] font-semibold transition ${isA ? "border-emerald-400 bg-emerald-400/15 text-emerald-200" : isW ? "border-red-400 bg-red-400/15 text-red-200" : "border-white/15 bg-white/5 hover:border-[#d4af37]/60"}`}>
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[12px] font-extrabold">{String.fromCharCode(65 + i)}</span>{o}
                  {isA && " ✓"}{isW && " ✗"}
                </button>
              );
            })}
          </div>
          {picked !== null && (
            <button onClick={next} className="gold-bg mt-4 w-full rounded-2xl px-5 py-3.5 text-sm font-extrabold text-black hover:brightness-110">
              {step + 1 >= SISTAFE_QUIZ.length ? "Ver o meu resultado" : "Próxima pergunta →"}
            </button>
          )}
        </>
      ) : (
        <div className="py-4 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full gold-bg font-display text-3xl font-extrabold text-black">{score}/4</div>
          <h4 className="font-display mt-4 text-2xl font-extrabold">{score >= 3 ? "Nível sólido! 🎓" : score === 2 ? "Bom começo — falta o manual." : "Comece pelo Essencial."}</h4>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/60">{score >= 3 ? "Está pronto para a Execução Avançada. O Manual Completo leva-o ao nível UGEA." : "O Manual Essencial (300 MT) cobre exactamente estas 4 matérias em linguagem simples."}</p>
          <div className="mx-auto mt-5 flex max-w-md flex-col gap-2 sm:flex-row">
            <a href={waLink(`Olá MOZ-SISTAFE! Fiz o quiz e tirei ${score}/4. Quero o manual indicado.`)} target="_blank" rel="noreferrer" className="gold-bg flex flex-1 items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-extrabold text-black">Quero o manual <ArrowRight className="h-4 w-4" /></a>
            <button onClick={() => { setStep(0); setScore(0); setPicked(null); setDone(false); }} className="rounded-2xl border border-white/20 px-5 py-3.5 text-sm font-bold hover:bg-white/10">Repetir</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── PÁGINA · MOZ-SISTAFE interno (não altera outros projectos) ───
export default function MozSistafe() {
  const [faq, setFaq] = useState<number | null>(0);
  const [term, setTerm] = useState("");
  const [showPay, setShowPay] = useState<string | null>(null);

  // SEO por página (sem editar index.html do portal)
  useEffect(() => {
    document.title = "MOZ-SISTAFE — Educação Digital e-SISTAFE · Gabinete Executivo (guia independente)";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "MOZ-SISTAFE: guia independente de apoio ao e-SISTAFE — manuais, formação, Programa 360°, 6 minutas, matriz de continuidade. Não substitui normas oficiais. Coordenação: Joaquim Machava.");
  }, []);

  const glossary = useMemo(
    () => SISTAFE_GLOSSARY.filter((g) => (g.t + g.d).toLowerCase().includes(term.toLowerCase())),
    [term]
  );

  return (
    <div className="bg-[#f7f9fd]">
      {/* HERO institucional premium */}
      <section id="inicio" aria-label="MOZ-SISTAFE — apresentação" className="relative scroll-mt-32 overflow-hidden bg-[#0b1e42] text-white">
        <img src={HERO_IMG} alt="Funcionários públicos em formação" loading="eager" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1e42] via-[#0b1e42]/90 to-[#0b1e42]/40" />
        <div className="absolute inset-0 hero-grid-blue" />
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#d4af37]/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 sm:pt-16">
          <div className="max-w-2xl">
            <div className="anim-rise flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-full bg-[#d4af37] px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-black"><ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> Guia independente de apoio</span>
              <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-bold ring-1 ring-white/20"><Landmark className="h-3.5 w-3.5" aria-hidden="true" /> Administração pública digital</span>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-3.5 py-1.5 text-[11px] font-bold text-emerald-200 ring-1 ring-emerald-300/30">Actualizado · {SISTAFE_META.revisao}</span>
            </div>
            <h1 className="anim-rise font-serifd mt-5 text-4xl font-extrabold leading-[1.05] sm:text-6xl" style={{ animationDelay: ".08s" }}>
              O e-SISTAFE explicado <em className="gold-text not-italic">como ninguém explica.</em>
            </h1>
            <p className="anim-rise mt-4 max-w-xl text-[15px] leading-relaxed text-white/70 sm:text-lg" style={{ animationDelay: ".16s" }}>
              Manuais com capturas reais, 25 exercícios corrigidos e formação com certificado. Para funcionários, UGEAs e cidadãos — <b className="text-white">do primeiro login ao pagamento.</b>
            </p>
            <p className="anim-rise mt-3 max-w-xl rounded-2xl border border-white/15 bg-white/5 p-3 text-[12.5px] leading-relaxed text-white/65" style={{ animationDelay: ".2s" }}>
              Coordenação do projecto: <b className="text-white">{SISTAFE_META.coordenacao}</b> · Iniciativa independente — sem vínculo oficial ao CEDSIF, Ministério ou Direcção Nacional.
            </p>
            <div className="anim-rise mt-5 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: ".24s" }}>
              <a href="#manuais" className="gold-bg flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-extrabold text-black shadow-2xl transition hover:brightness-110">
                <BookOpen className="h-4 w-4" aria-hidden="true" /> Ver manuais · 300–500 MT
              </a>
              <a href="#gabinete" className="flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-extrabold text-[#0b1e42] transition hover:bg-neutral-100">
                <FileText className="h-4 w-4" aria-hidden="true" /> Abrir Gabinete Executivo
              </a>
            </div>
            <div className="anim-rise mt-3 flex flex-col gap-2 sm:flex-row" style={{ animationDelay: ".26s" }}>
              <a href={waLink("Olá MOZ-SISTAFE! Quero a próxima TURMA de formação. Datas?")} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white/10 px-7 py-3.5 text-sm font-extrabold ring-1 ring-white/25 backdrop-blur hover:bg-white/15">
                <GraduationCap className="h-4 w-4 text-[#f6e27a]" aria-hidden="true" /> Próximas turmas
              </a>
              <a href={`mailto:${COFRE.email}?subject=Reportar%20erro%20MOZ-SISTAFE`} className="flex items-center justify-center gap-2 rounded-2xl border border-white/25 px-6 py-3.5 text-sm font-bold text-white/80 hover:bg-white/10">
                <Flag className="h-4 w-4" aria-hidden="true" /> Reportar erro
              </a>
            </div>
            <div className="anim-rise mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4" style={{ animationDelay: ".32s" }}>
              {[{ v: "8", l: "Módulos MPO…MAS" }, { v: "6", l: "Minutas para revisão" }, { v: "10", l: "Travões UGEA (radar)" }, { v: "214", l: "Páginas no Completo" }].map((s, i) => (
                <div key={i} className="rounded-2xl bg-white/5 p-3.5 ring-1 ring-white/10 backdrop-blur">
                  <p className="tick font-display text-2xl font-extrabold text-[#f6e27a]">{s.v}</p>
                  <p className="text-[11px] font-semibold text-white/55">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative flex items-center gap-2 overflow-hidden border-t border-white/10 bg-black/40 px-4 py-2.5 backdrop-blur">
          <Eye className="h-4 w-4 shrink-0 text-[#f6e27a]" aria-hidden="true" />
          <p className="truncate text-[12px] text-white/60"><b className="text-white/90">Aviso:</b> guia independente de apoio — não substitui normas oficiais do Ministério das Finanças, CEDSIF ou UFSA. Revisão {SISTAFE_META.revisao}.</p>
        </div>
      </section>

      <ExecNav />

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-10 sm:py-12">
        <IndependenceNotice />

        <GlobalSearch />

        <div id="modulos" className="scroll-mt-40"><ModuleExplorer /></div>

        <div id="base-legal" className="scroll-mt-40"><BaseLegal /></div>

        <div id="programa-360" className="scroll-mt-40"><Programa360 /></div>

        <GabineteExecutivo />

        <RadarIntegridade />

        <Fontes />

        {/* MANUAIS · pagamento manual explicado */}
        <section id="manuais" aria-label="Loja de manuais" className="scroll-mt-40">
          <SectionKicker>Loja de manuais · pagamento manual via M-Pesa/e-Mola</SectionKicker>
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <h2 className="font-serifd max-w-xl text-3xl font-extrabold tracking-tight text-[#0b1e42] sm:text-4xl">Escolha o seu manual. <span className="text-[#b8941f]">Receba em 2 horas.</span></h2>
            <p className="flex items-center gap-2 text-[13px] font-semibold text-neutral-500"><Download className="h-4 w-4" aria-hidden="true" /> PDF + factura com NUIT · sem cobrança automática</p>
          </div>
          <p className="mt-2 max-w-3xl rounded-2xl bg-[#f2f5fb] p-3.5 text-[12.5px] leading-relaxed text-neutral-500 ring-1 ring-[#0b1e42]/5">
            Como funciona (manual, sem login): 1) toque em Comprar → 2) pague por M-Pesa/e-Mola para a conta do projecto → 3) envie o comprovativo no WhatsApp → 4) receba o PDF em 2h (8h–20h). Nunca partilhe o seu PIN. Nada é cobrado automaticamente neste site.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {SISTAFE_MANUALS.map((m) => (
              <div key={m.id} className={`relative flex flex-col overflow-hidden rounded-[26px] ${m.featured ? "bg-[#0b1e42] text-white ring-2 ring-[#d4af37] navy-shadow lg:-translate-y-2" : "border border-[#0b1e42]/12 bg-white card-shadow-sm"}`}>
                {m.featured && <div className="gold-bg px-5 py-2 text-center text-[11px] font-extrabold uppercase tracking-[0.2em] text-black">★ {m.tag} · {m.pages} páginas</div>}
                <div className="flex flex-1 flex-col p-6">
                  {!m.featured && <span className="w-fit rounded-full bg-[#d4af37]/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-[#8a6f16] ring-1 ring-[#d4af37]/40">{m.tag} · {m.pages} págs</span>}
                  <div className="mt-3 flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b1e42] to-[#143a82] ring-1 ring-black/10">
                    <div className="w-28 rotate-[-4deg] rounded-lg bg-white p-3 shadow-2xl">
                      <div className="h-1.5 w-10 rounded bg-[#d4af37]" />
                      <p className="font-serifd mt-1.5 text-[13px] font-extrabold leading-tight text-[#0b1e42]">{m.name}</p>
                      <div className="mt-2 space-y-1">{[90, 70, 80].map((w, i) => <div key={i} className="h-1 rounded bg-neutral-200" style={{ width: `${w}%` }} />)}</div>
                      <p className="mt-2 text-[9px] font-bold text-neutral-400">MOZ-SISTAFE · 2026</p>
                    </div>
                  </div>
                  <h3 className={`font-display mt-4 text-xl font-extrabold ${m.featured ? "" : "text-[#0b1e42]"}`}>{m.name}</h3>
                  <p className={`mt-1.5 text-[13.5px] leading-relaxed ${m.featured ? "text-white/65" : "text-neutral-500"}`}>{m.desc}</p>
                  <p className="mt-3 flex items-end gap-1.5"><span className={`tick font-display text-4xl font-extrabold ${m.featured ? "text-[#f6e27a]" : "text-[#0b1e42]"}`}>{fmt(m.price)}</span></p>
                  <ul className="mt-3 flex-1 space-y-1.5 text-[13px]">
                    {m.includes.map((f, i) => (
                      <li key={i} className={`flex items-start gap-2 ${m.featured ? "text-white/75" : "text-neutral-600"}`}><Check className={`mt-0.5 h-4 w-4 shrink-0 ${m.featured ? "text-[#f6e27a]" : "text-emerald-600"}`} />{f}</li>
                    ))}
                  </ul>
                  <button onClick={() => setShowPay(showPay === m.id ? null : m.id)}
                    className={`mt-5 flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-extrabold transition ${m.featured ? "gold-bg text-black hover:brightness-110" : "bg-[#0b1e42] text-white hover:bg-[#143a82]"}`}>
                    <FileText className="h-4 w-4" /> Comprar agora · {fmt(m.price)}
                  </button>
                  {showPay === m.id && (
                    <div className="anim-rise mt-3 rounded-2xl bg-emerald-50 p-4 text-[13px] ring-1 ring-emerald-200">
                      <p className="font-extrabold text-emerald-900">1 · Pague para a conta do projecto</p>
                      <p className="mt-1 text-emerald-800">M-Pesa <b className="tick">{COFRE.mpesa}</b> · e-Mola <b className="tick">{COFRE.emola}</b><br />Titular: {COFRE.nome} · Ref: <b>{m.id.toUpperCase()}-{m.price}</b></p>
                      <p className="mt-2 font-extrabold text-emerald-900">2 · Envie o comprovativo</p>
                      <a href={waLink(`Olá MOZ-SISTAFE! Paguei ${m.price} MT (${m.name}). Ref ${m.id.toUpperCase()}-${m.price}. Segue o comprovativo:`)} target="_blank" rel="noreferrer" className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 font-bold text-white hover:brightness-110">
                        <MessageCircle className="h-4 w-4" /> Enviar comprovativo e receber PDF
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FORMAÇÃO */}
        <section id="formacao" aria-label="Formação" className="grid scroll-mt-40 gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative min-h-[340px] overflow-hidden rounded-[28px] navy-shadow">
            <img src={OFFICE_IMG} alt="Sessão de formação presencial sobre e-SISTAFE" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e42] via-[#0b1e42]/60 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white sm:p-8">
              <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#f6e27a]"><Award className="h-4 w-4" /> Certificado com carga horária</p>
              <p className="font-serifd mt-2 text-2xl font-extrabold leading-snug sm:text-3xl">Formação que conta para a sua progressão.</p>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-bold">
                {["Turmas de 10–12", "Material impresso", "Acompanhamento 30 dias"].map((t, i) => (
                  <span key={i} className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur"><BadgeCheck className="h-3.5 w-3.5 text-[#f6e27a]" /> {t}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <SectionKicker>Formação presencial & Zoom · 5.000–12.000 MT</SectionKicker>
            {SISTAFE_TRAINING.map((t, i) => (
              <div key={i} className="flex flex-col gap-4 rounded-3xl border border-[#0b1e42]/12 bg-white p-5 card-shadow-sm transition hover:shadow-xl sm:flex-row sm:items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0b1e42] text-white"><GraduationCap className="h-6 w-6 text-[#f6e27a]" /></div>
                <div className="flex-1">
                  <p className="font-display text-[16px] font-extrabold text-[#0b1e42]">{t.name}</p>
                  <p className="flex flex-wrap items-center gap-2 text-[12px] font-semibold text-neutral-400"><span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {t.dur}</span>·<span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {t.seats}</span></p>
                  <p className="mt-1 text-[13px] text-neutral-500">{t.desc}</p>
                </div>
                <div className="shrink-0 text-left sm:text-right">
                  <p className="tick font-display text-2xl font-extrabold text-[#0b1e42]">{fmt(t.price)}</p>
                  <a href={waLink(`Olá MOZ-SISTAFE! Quero INSCREVER-ME na formação "${t.name}" (${t.price} MT). Nome + instituição:`)} target="_blank" rel="noreferrer" className="mt-1.5 inline-flex items-center gap-1.5 rounded-xl bg-[#0b1e42] px-4 py-2.5 text-[13px] font-bold text-white hover:bg-[#143a82]">Inscrever <ArrowRight className="h-3.5 w-3.5" /></a>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-3 rounded-2xl bg-[#d4af37]/12 p-4 text-[13px] ring-1 ring-[#d4af37]/40">
              <Droplets className="h-8 w-8 shrink-0 text-sky-600" />
              <p className="text-[#5b4a08]"><b>Buy me a water 💧</b> — sem orçamento? Contribua com qualquer valor para <b className="tick">M-Pesa {COFRE.mpesa}</b> e mantenha os guias gratuitos no ar. <a className="font-extrabold underline" target="_blank" rel="noreferrer" href={waLink("💧 Quero oferecer uma água ao MOZ-SISTAFE!")}>Apoiar aqui</a></p>
            </div>
          </div>
        </section>

        {/* GLOSSÁRIO + QUIZ */}
        <section aria-label="Glossário e quiz" className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-[#0b1e42]/12 bg-white p-6 card-shadow-sm sm:p-8">
            <SectionKicker>Dicionário de apoio · grátis</SectionKicker>
            <h3 className="font-serifd text-2xl font-extrabold text-[#0b1e42] sm:text-3xl">Fale a língua do sistema.</h3>
            <div className="relative mt-4">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" aria-hidden="true" />
              <input value={term} onChange={(e) => setTerm(e.target.value.slice(0, 60))} maxLength={60} aria-label="Pesquisar no dicionário" placeholder="Pesquisar termo… ex.: CUT, cabimento" className="w-full rounded-2xl border border-black/10 bg-neutral-50 py-3.5 pl-11 pr-4 text-sm outline-none focus:border-[#0e2a5e] focus:ring-2 focus:ring-[#0e2a5e]/20" />
            </div>
            <div className="no-scrollbar mt-4 max-h-[380px] space-y-2 overflow-y-auto pr-1">
              {glossary.length === 0 && <p className="rounded-2xl bg-neutral-100 p-4 text-center text-sm text-neutral-500">Sem resultados. <a className="font-bold text-[#0e2a5e] underline" target="_blank" rel="noreferrer" href={waLink(`Olá! O que significa "${term}" no e-SISTAFE?`)}>Pergunte no WhatsApp →</a></p>}
              {glossary.map((g, i) => (
                <div key={i} className="rounded-2xl bg-[#f2f5fb] p-3.5 ring-1 ring-[#0b1e42]/5">
                  <p className="text-[13px] font-extrabold text-[#0b1e42]">{g.t}</p>
                  <p className="mt-0.5 text-[13px] leading-relaxed text-neutral-500">{g.d}</p>
                </div>
              ))}
            </div>
          </div>
          <Quiz />
        </section>

        {/* FAQ + PROVA */}
        <section id="faq" aria-label="Perguntas frequentes" className="grid scroll-mt-40 gap-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionKicker>Perguntas frequentes</SectionKicker>
            <h2 className="font-serifd text-3xl font-extrabold tracking-tight text-[#0b1e42]">Compra com confiança.</h2>
            <div className="mt-5 space-y-2.5">
              {SISTAFE_FAQ.map((f, i) => (
                <div key={i} className={`overflow-hidden rounded-2xl border bg-white transition ${faq === i ? "border-[#0e2a5e] shadow-lg" : "border-[#0b1e42]/10"}`}>
                  <button onClick={() => setFaq(faq === i ? null : i)} aria-expanded={faq === i} className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-[14px] font-bold text-[#0b1e42]">
                    {f.q}<ChevronDown className={`h-4 w-4 shrink-0 transition ${faq === i ? "rotate-180" : "text-neutral-400"}`} aria-hidden="true" />
                  </button>
                  {faq === i && <p className="px-5 pb-5 text-[13.5px] leading-relaxed text-neutral-500">{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-[28px] bg-[#0b1e42] p-6 text-white sm:p-9">
            <Stars />
            <p className="font-serifd mt-3 text-xl font-bold leading-relaxed sm:text-2xl">“Passei 3 anos com medo do MEX. Com o Manual Completo fechei o mês sozinha — a minha directora pediu o link para toda a UGEA.”</p>
            <p className="mt-4 text-[13px] font-bold text-[#f6e27a]">Custódia Nhacainga <span className="font-medium text-white/50">· Técnica de Finanças, Matola</span></p>
            <div className="mt-6 grid grid-cols-3 gap-2 text-center text-[12px] font-bold">
              {[["PDF imediato", "2h"], ["Garantia", "7 dias"], ["Suporte", "30 dias"]].map(([a, b], i) => (
                <div key={i} className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10"><p className="tick font-display text-lg font-extrabold text-[#f6e27a]">{b}</p><p className="text-white/55">{a}</p></div>
              ))}
            </div>
            <a href={waLink("Olá MOZ-SISTAFE! Quero o MANUAL COMPLETO (500 MT).")} target="_blank" rel="noreferrer" className="gold-bg mt-6 flex items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-extrabold text-black hover:brightness-110">
              <MessageCircle className="h-5 w-5" /> Quero o meu manual agora
            </a>
            <p className="mt-2 text-center text-[11px] text-white/40">Garantia de 7 dias para o manual (reembolso via M-Pesa após verificação) — sem cobrança automática.</p>
          </div>
        </section>

        <ContactosExec />
      </div>
    </div>
  );
}
