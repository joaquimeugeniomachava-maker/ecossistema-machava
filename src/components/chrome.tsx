import { useEffect, useState } from "react";
import {
  MessageCircle, X, Bike, Landmark, LayoutGrid, Phone, Mail,
  MapPin, BadgeCheck, Droplets, ChevronRight, Menu, ShieldCheck, FileCheck, ArrowUpRight, KeyRound, Crown, FileUser,
} from "lucide-react";
import { COFRE, waLink } from "../data";

export type View = "hub" | "motomoz" | "sistafe" | "keyhouse" | "cvmaker" | "notfound";

// ─── SELO DO ECOSSISTEMA (discreto, sem excesso) ──────────────────
export function EmpireSeal({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dim = size === "lg" ? "h-32 w-32" : size === "sm" ? "h-14 w-14" : "h-20 w-20";
  const txt = size === "lg" ? "text-[9px]" : size === "sm" ? "text-[6px]" : "text-[7px]";
  return (
    <div className={`relative ${dim} shrink-0`} role="img" aria-label="Selo Ecossistema Machava, Maputo 2026">
      <div className="seal-spin absolute inset-0" aria-hidden="true">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <defs><path id="circ" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" /></defs>
          <circle cx="50" cy="50" r="48" fill="#0a0a0a" stroke="#d4af37" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="27" fill="none" stroke="#d4af37" strokeWidth="1" strokeDasharray="3 3" opacity=".7" />
          <text className={txt} fill="#f6e27a" fontWeight="800" letterSpacing="2.2">
            <textPath href="#circ">ECOSSISTEMA MACHAVA • MAPUTO • 2026 •</textPath>
          </text>
        </svg>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Crown className={`${size === "lg" ? "h-6 w-6" : "h-3.5 w-3.5"} text-[#d4af37]`} aria-hidden="true" />
        <span className={`font-display font-extrabold gold-text ${size === "lg" ? "text-2xl" : size === "sm" ? "text-xs" : "text-base"}`}>M</span>
        <span className="text-[7px] font-extrabold tracking-[0.2em] text-[#f6e27a]/80">2026</span>
      </div>
    </div>
  );
}

// ─── TOP UTILITY BAR ─────────────────────────────────────────────
function TopBar() {
  return (
    <div className="bg-[#0a0a0a] text-[11px] text-white/80 sm:text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-1.5">
        <p className="flex items-center gap-1.5 truncate">
          <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[#d4af37]" aria-hidden="true" />
          <span className="hidden sm:inline">Ecossistema Machava · 4 subsistemas independentes · Maputo, Moçambique</span>
          <span className="sm:hidden">Ecossistema Machava · Maputo</span>
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <a href={`tel:+${COFRE.whatsappIntl}`} className="flex items-center gap-1 rounded focus-visible:outline-2 focus-visible:outline-[#d4af37] hover:text-[#d4af37]"><Phone className="h-3 w-3" aria-hidden="true" /> {COFRE.whatsappDisplay}</a>
          <a href={waLink("Olá! Vim do Ecossistema Machava.")} target="_blank" rel="noreferrer" className="hidden items-center gap-1 rounded-full bg-[#25D366] px-2.5 py-0.5 font-semibold text-white hover:brightness-110 sm:flex">
            <MessageCircle className="h-3 w-3" aria-hidden="true" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── HEADER ──────────────────────────────────────────────────────
export function Header({ view, go }: { view: View; go: (v: View) => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  const tabs: { id: View; label: string; icon: React.ReactNode; desc: string }[] = [
    { id: "hub", label: "Ecossistema", icon: <LayoutGrid className="h-4 w-4" aria-hidden="true" />, desc: "Portal central · 4 projectos" },
    { id: "keyhouse", label: "KEYHOUSE", icon: <KeyRound className="h-4 w-4" aria-hidden="true" />, desc: "Imobiliário e terrenos" },
    { id: "motomoz", label: "MOTOMOZ", icon: <Bike className="h-4 w-4" aria-hidden="true" />, desc: "Mobilidade urbana e B2B" },
    { id: "sistafe", label: "MOZ-SISTAFE", icon: <Landmark className="h-4 w-4" aria-hidden="true" />, desc: "Educação digital e-SISTAFE" },
    { id: "cvmaker", label: "CV-MAKER", icon: <FileUser className="h-4 w-4" aria-hidden="true" />, desc: "Currículos e carreira" },
  ];

  return (
    <header className={`sticky top-0 z-40 border-b transition-all ${scrolled ? "border-black/10 bg-white/90 shadow-lg shadow-black/5 backdrop-blur-xl" : "border-transparent bg-white/70 backdrop-blur-md"}`}>
      <TopBar />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
        <button onClick={() => go("hub")} className="flex items-center gap-3 rounded-xl text-left focus-visible:outline-2 focus-visible:outline-[#b8941f]" aria-label="Voltar ao portal Ecossistema Machava">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0a0a0a] shadow-lg shadow-black/20 ring-1 ring-[#d4af37]/60">
            <span className="font-display text-xl font-extrabold gold-text">M</span>
          </span>
          <span className="leading-tight">
            <span className="font-display block text-[15px] font-extrabold tracking-tight text-neutral-900">ECOSSISTEMA <span className="gold-text">MACHAVA</span></span>
            <span className="block text-[11px] font-medium text-neutral-500">KEYHOUSE · MOTOMOZ · SISTAFE · CV-MAKER</span>
          </span>
        </button>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 rounded-full border border-black/10 bg-neutral-100/80 p-1 xl:flex">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => go(t.id)}
              aria-current={view === t.id ? "page" : undefined}
              className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-[12.5px] font-bold transition-all focus-visible:outline-2 focus-visible:outline-[#b8941f] ${view === t.id ? "bg-[#0a0a0a] text-[#f6e27a] shadow-md" : "text-neutral-600 hover:bg-white hover:text-black"}`}
            >
              {t.icon}{t.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <a href={waLink("Olá Joaquim! Vim do Ecossistema Machava e quero conversar.")} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#0a0a0a] px-5 py-2.5 text-[13px] font-bold text-white ring-1 ring-[#d4af37]/60 transition hover:bg-black hover:shadow-xl">
            <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden="true" /> Falar agora
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="rounded-xl border border-black/10 bg-white p-2.5 xl:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Menu móvel" className="border-t border-black/10 bg-white px-4 pb-4 pt-2 xl:hidden">
          {tabs.map((t) => (
            <button key={t.id} onClick={() => { go(t.id); setOpen(false); }}
              aria-current={view === t.id ? "page" : undefined}
              className={`mb-1.5 flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left ${view === t.id ? "border-[#d4af37] bg-[#0a0a0a] text-white" : "border-black/10 bg-neutral-50"}`}>
              <span className="flex items-center gap-3">{t.icon}<span><span className="block text-sm font-extrabold">{t.label}</span><span className="block text-[11px] opacity-70">{t.desc}</span></span></span>
              <ChevronRight className="h-4 w-4 opacity-60" aria-hidden="true" />
            </button>
          ))}
          <a href={waLink("Olá Joaquim! Vim do Ecossistema Machava.")} target="_blank" rel="noreferrer"
            className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white">
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp directo
          </a>
        </nav>
      )}
    </header>
  );
}

// ─── FLOATING WHATSAPP ───────────────────────────────────────────
export function FloatingWA({ view }: { view: View }) {
  const [open, setOpen] = useState(false);
  const msg =
    view === "motomoz"
      ? "Olá MOTOMOZ! Quero pedir uma corrida / ser piloto / plano empresa."
      : view === "sistafe"
        ? "Olá MOZ-SISTAFE! Quero o manual / formação e-SISTAFE."
        : view === "keyhouse"
          ? "Olá KEYHOUSE! Quero visitar um imóvel / anunciar o meu."
          : view === "cvmaker"
            ? "Olá CV-MAKER! Fiz o meu CV e quero uma revisão profissional."
            : "Olá! Vim do Ecossistema Machava e quero saber mais.";

  const subtitle =
    view === "motomoz" ? "Central MOTOMOZ · 6h–22h"
    : view === "sistafe" ? "Apoio MOZ-SISTAFE · 8h–20h"
    : view === "keyhouse" ? "KEYHOUSE · visitas em 24h"
    : view === "cvmaker" ? "CV-MAKER · revisão de CVs"
    : "Ecossistema Machava";

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="anim-rise w-[300px] overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl" role="dialog" aria-label="Contacto WhatsApp">
          <div className="bg-[#075E54] px-4 py-3 text-white">
            <p className="flex items-center gap-2 text-sm font-bold"><span className="relative flex h-2.5 w-2.5" aria-hidden="true"><span className="absolute h-full w-full animate-ping rounded-full bg-green-300" /><span className="h-2.5 w-2.5 rounded-full bg-green-400" /></span> Online agora</p>
            <p className="text-[11px] opacity-80">{subtitle} — responde em minutos</p>
          </div>
          <div className="space-y-2 bg-[#ECE5DD] p-3 text-[13px]">
            <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-white p-2.5 shadow-sm">Olá! 👋 Sou o Joaquim. Como posso ajudar — <b>imóvel, corrida, manual ou CV?</b></div>
            <div className="grid grid-cols-1 gap-1.5">
              {view === "cvmaker" ? (
                <>
                  <a href={waLink("Olá CV-MAKER! Quero REVISÃO do meu CV. Nome + área:")} target="_blank" rel="noreferrer" className="rounded-xl bg-white px-3 py-2 font-semibold text-[#075E54] shadow-sm hover:bg-green-50">› Rever o meu CV</a>
                  <a href={waLink("Olá! Quero CRIAR o meu CV com apoio.")} target="_blank" rel="noreferrer" className="rounded-xl bg-white px-3 py-2 font-semibold text-[#075E54] shadow-sm hover:bg-green-50">› Criar CV com apoio</a>
                </>
              ) : view === "keyhouse" ? (
                <>
                  <a href={waLink("Olá KEYHOUSE! Quero VISITAR um imóvel. Procuro:")} target="_blank" rel="noreferrer" className="rounded-xl bg-white px-3 py-2 font-semibold text-[#075E54] shadow-sm hover:bg-green-50">› Agendar visita</a>
                  <a href={waLink("Olá KEYHOUSE! Quero ANUNCIAR o meu imóvel.")} target="_blank" rel="noreferrer" className="rounded-xl bg-white px-3 py-2 font-semibold text-[#075E54] shadow-sm hover:bg-green-50">› Anunciar imóvel</a>
                </>
              ) : (
                <>
                  <a href={waLink(view === "sistafe" ? "Quero o MANUAL COMPLETO e-SISTAFE (500 MT). Como pago?" : "Olá MOTOMOZ! Quero PEDIR UMA CORRIDA agora.")} target="_blank" rel="noreferrer" className="rounded-xl bg-white px-3 py-2 font-semibold text-[#075E54] shadow-sm hover:bg-green-50">› {view === "sistafe" ? "Quero o manual (500 MT)" : "Pedir corrida agora"}</a>
                  <a href={waLink(view === "motomoz" ? "Quero ser PILOTO MOTOMOZ. Quais os requisitos?" : "Quero a FORMAÇÃO e-SISTAFE. Próximas turmas?")} target="_blank" rel="noreferrer" className="rounded-xl bg-white px-3 py-2 font-semibold text-[#075E54] shadow-sm hover:bg-green-50">› {view === "motomoz" ? "Ser piloto verificado" : "Formação / turmas"}</a>
                </>
              )}
              <a href={COFRE.grupoMotomoz} target="_blank" rel="noreferrer" className="rounded-xl bg-white px-3 py-2 font-semibold text-[#075E54] shadow-sm hover:bg-green-50">› Entrar no grupo MOTOMOZ</a>
            </div>
            <div className="rounded-2xl bg-[#0a0a0a] p-2.5 text-[11px] leading-relaxed text-white/90">
              <p className="font-bold text-[#f6e27a]">Pagamento directo</p>
              <p>M-Pesa: <b>{COFRE.mpesa}</b><br />e-Mola: <b>{COFRE.emola}</b><br />Titular: {COFRE.nome}</p>
            </div>
            <a href={waLink(msg)} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 py-2.5 font-bold text-white hover:brightness-110">
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> Conversar no WhatsApp
            </a>
          </div>
        </div>
      )}
      <div className="flex items-center gap-2">
        {view === "sistafe" && (
          <a href={waLink("💧 Quero oferecer uma água ao projecto MOZ-SISTAFE!")} target="_blank" rel="noreferrer"
            className="anim-float hidden items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-2 text-xs font-bold text-sky-800 shadow-lg sm:flex hover:bg-sky-100">
            <Droplets className="h-4 w-4 text-sky-500" aria-hidden="true" /> Buy me a water 💧
          </a>
        )}
        <button onClick={() => setOpen(!open)} aria-label={open ? "Fechar contacto WhatsApp" : "Abrir contacto WhatsApp"} aria-expanded={open}
          className="wa-pulse flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#075E54]">
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <MessageCircle className="h-7 w-7" aria-hidden="true" />}
        </button>
      </div>
    </div>
  );
}

// ─── SHARED BITS ─────────────────────────────────────────────────
export function Stars({ n = 5 }: { n?: number }) {
  return <div className="flex gap-0.5" role="img" aria-label={`${n} de 5 estrelas`}>{"★".repeat(n).split("").map((s, i) => <span key={i} className="text-[13px] text-[#d4af37]" aria-hidden="true">{s}</span>)}</div>;
}

export function SectionKicker({ children, dark = false, accent = "#d4af37" }: { children: React.ReactNode; dark?: boolean; accent?: string }) {
  return (
    <p className={`mb-3 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] ${dark ? "bg-white/10 text-white" : "bg-black/[.04] text-neutral-700"}`} style={{ borderColor: `${accent}66` }}>
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} aria-hidden="true" /> {children}
    </p>
  );
}

// ─── FOOTER · 4 subsistemas ──────────────────────────────────────
export function Footer({ go }: { go: (v: View) => void }) {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1.1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-[#d4af37]/60"><span className="font-display text-xl font-extrabold gold-text">M</span></span>
              <div><p className="font-display font-extrabold">ECOSSISTEMA <span className="gold-text">MACHAVA</span></p><p className="text-[11px] text-white/50">4 subsistemas · Uma visão · Maputo</p></div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <EmpireSeal size="sm" />
              <p className="max-w-sm text-[13px] leading-relaxed text-white/60">Soluções independentes para habitar, mover, aprender e trabalhar — construídas em Moçambique, para Moçambique.</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-[11px] font-semibold ring-1 ring-white/10"><BadgeCheck className="h-3.5 w-3.5 text-[#d4af37]" aria-hidden="true" /> NUIT {COFRE.nuit}</span>
              <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-[11px] font-semibold ring-1 ring-white/10"><MapPin className="h-3.5 w-3.5 text-[#d4af37]" aria-hidden="true" /> Maputo · Moçambique</span>
            </div>
          </div>

          <nav aria-label="Subsistemas">
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#d4af37]">Os 4 projectos</p>
            <button onClick={() => go("keyhouse")} className="group mb-2 flex w-full items-center justify-between rounded-2xl bg-white/5 p-3 text-left ring-1 ring-white/10 transition hover:bg-white/10">
              <span><span className="flex items-center gap-2 text-sm font-extrabold"><KeyRound className="h-4 w-4 text-[#C9A227]" aria-hidden="true" /> KEYHOUSE</span><span className="text-[11px] text-white/50">Imobiliário · terrenos · investimento</span></span>
              <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-[#d4af37]" aria-hidden="true" />
            </button>
            <button onClick={() => go("motomoz")} className="group mb-2 flex w-full items-center justify-between rounded-2xl bg-white/5 p-3 text-left ring-1 ring-white/10 transition hover:bg-white/10">
              <span><span className="flex items-center gap-2 text-sm font-extrabold"><Bike className="h-4 w-4 text-[#EA580C]" aria-hidden="true" /> MOTOMOZ</span><span className="text-[11px] text-white/50">Mobilidade urbana e B2B</span></span>
              <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-[#d4af37]" aria-hidden="true" />
            </button>
            <button onClick={() => go("sistafe")} className="group mb-2 flex w-full items-center justify-between rounded-2xl bg-white/5 p-3 text-left ring-1 ring-white/10 transition hover:bg-white/10">
              <span><span className="flex items-center gap-2 text-sm font-extrabold"><Landmark className="h-4 w-4 text-[#6B9BFF]" aria-hidden="true" /> MOZ-SISTAFE</span><span className="text-[11px] text-white/50">Educação digital e-SISTAFE</span></span>
              <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-[#d4af37]" aria-hidden="true" />
            </button>
            <button onClick={() => go("cvmaker")} className="group flex w-full items-center justify-between rounded-2xl bg-white/5 p-3 text-left ring-1 ring-white/10 transition hover:bg-white/10">
              <span><span className="flex items-center gap-2 text-sm font-extrabold"><FileUser className="h-4 w-4 text-[#A78BFA]" aria-hidden="true" /> CV-MAKER</span><span className="text-[11px] text-white/50">Currículos · carreira</span></span>
              <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-[#d4af37]" aria-hidden="true" />
            </button>
            <a href={COFRE.keyhouseUrl} target="_blank" rel="noreferrer" className="mt-3 flex items-center gap-2 text-[12px] text-white/50 hover:text-[#f6e27a]">
              <FileCheck className="h-3.5 w-3.5" aria-hidden="true" /> KEYHOUSE original (GitHub Pages) ↗
            </a>
          </nav>

          <div>
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#d4af37]">Contacto geral</p>
            <ul className="space-y-2.5 text-[13px] text-white/70">
              <li><a className="flex items-center gap-2 rounded hover:text-white focus-visible:outline-2 focus-visible:outline-[#d4af37]" href={waLink("Olá! Vim do Ecossistema Machava.")} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden="true" /> WhatsApp {COFRE.whatsappDisplay}</a></li>
              <li><a className="flex items-center gap-2 rounded hover:text-white focus-visible:outline-2 focus-visible:outline-[#d4af37]" href={`mailto:${COFRE.email}`}><Mail className="h-4 w-4 text-[#d4af37]" aria-hidden="true" /> {COFRE.email}</a></li>
              <li><a className="flex items-center gap-2 rounded hover:text-white focus-visible:outline-2 focus-visible:outline-[#d4af37]" href={COFRE.grupoMotomoz} target="_blank" rel="noreferrer"><ChevronRight className="h-4 w-4 text-[#d4af37]" aria-hidden="true" /> Grupo MOTOMOZ no WhatsApp</a></li>
              <li className="text-white/40">Seg–Sáb · 6h–22h · Maputo</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#d4af37] to-[#8a6f16] p-[1.5px]">
            <div className="h-full rounded-3xl bg-[#131313] p-5">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#f6e27a]">Cofre de pagamentos</p>
              <div className="mt-3 space-y-2 text-[13px]">
                <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2.5"><span className="font-bold text-red-400">M-Pesa</span><span className="tick font-bold">{COFRE.mpesa}</span></div>
                <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2.5"><span className="font-bold text-orange-400">e-Mola</span><span className="tick font-bold">{COFRE.emola}</span></div>
                <p className="pt-1 text-[11px] leading-relaxed text-white/50">Titular: <b className="text-white/80">{COFRE.nome}</b><br />Envie o comprovativo no WhatsApp e receba factura com NUIT.</p>
                <a href={waLink("Olá! Já fiz o pagamento. Segue o comprovativo:")} target="_blank" rel="noreferrer" className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 py-2.5 text-[13px] font-bold text-white hover:brightness-110">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" /> Enviar comprovativo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[11px] text-white/40 sm:flex-row">
          <p>© 2026 {COFRE.nome} · Ecossistema Machava · Todos os direitos reservados</p>
          <p className="flex items-center gap-1.5"><Droplets className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" /> Feito em Maputo · Preços em Meticais (MT) · <Phone className="h-3 w-3" aria-hidden="true" /> {COFRE.whatsappDisplay}</p>
        </div>
      </div>
    </footer>
  );
}
