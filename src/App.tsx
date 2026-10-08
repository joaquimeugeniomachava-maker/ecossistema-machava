import { useCallback, useEffect, useState } from "react";
import { Bike, Landmark, ArrowRight, ShieldCheck, MessageCircle, Droplets, ChevronRight, KeyRound, FileUser, MapPin, Mail, Clock, SearchX } from "lucide-react";
import { Header, Footer, FloatingWA, SectionKicker, EmpireSeal, type View } from "./components/chrome";
import MotoMoz from "./pages/MotoMoz";
import MozSistafe from "./pages/MozSistafe";
import KeyHouse from "./pages/KeyHouse";
import CvMaker from "./pages/CvMaker";
import LeadCapture from "./components/LeadCapture";
import FlowAuto from "./components/FlowAuto";
import { ViralDiaspora, HealthMonitor } from "./components/TurboInsano";
import { COFRE, PROJECTS_META, waLink } from "./data";

const HERO_IMG = "https://images.pexels.com/photos/30188151/pexels-photo-30188151.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

const ICONS: Record<string, React.ReactNode> = {
  keyhouse: <KeyRound className="h-7 w-7" aria-hidden="true" />,
  motomoz: <Bike className="h-7 w-7" aria-hidden="true" />,
  sistafe: <Landmark className="h-7 w-7" aria-hidden="true" />,
  cvmaker: <FileUser className="h-7 w-7" aria-hidden="true" />,
};

const ROUTES: Record<string, View> = {
  "": "hub",
  "#/": "hub",
  "#/keyhouse": "keyhouse",
  "#/motomoz": "motomoz",
  "#/sistafe": "sistafe",
  "#/cvmaker": "cvmaker",
};
const HASH_OF: Record<View, string> = {
  hub: "#/",
  keyhouse: "#/keyhouse",
  motomoz: "#/motomoz",
  sistafe: "#/sistafe",
  cvmaker: "#/cvmaker",
  notfound: "#/",
};

// ─── HUB · portal central dos 4 subsistemas ──────────────────────
function Hub({ go }: { go: (v: View) => void }) {
  return (
    <div className="bg-[#FAFAF8]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0a0a0a] text-white" aria-labelledby="hero-title">
        <img src={HERO_IMG} alt="Vista aérea de Maputo, Moçambique" className="absolute inset-0 h-full w-full object-cover opacity-30" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-[#0a0a0a]" aria-hidden="true" />
        <div className="absolute inset-0 hero-grid" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-12 text-center sm:pt-16">
          <p className="anim-rise inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#f6e27a]">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> Ecossistema Machava · 4 subsistemas · Maputo
          </p>
          <h1 id="hero-title" className="anim-rise font-display mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl" style={{ animationDelay: ".08s" }}>
            Ecossistema Machava<span className="gold-text">.</span>
          </h1>
          <p className="anim-rise mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/70 sm:text-lg" style={{ animationDelay: ".16s" }}>
            Quatro soluções independentes, uma mesma disciplina: servir Moçambique com organização, transparência e atendimento directo no WhatsApp.
          </p>

          {/* 4 CARTÕES PREMIUM — ordem: KEYHOUSE, MOTOMOZ, SISTAFE, CV-MAKER */}
          <div className="mx-auto mt-10 grid max-w-6xl gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
            {PROJECTS_META.map((p, idx) => (
              <article key={p.id}
                className="anim-rise group relative flex flex-col overflow-hidden rounded-[24px] bg-[#111214] p-6 ring-1 ring-white/10 transition hover:-translate-y-1 hover:shadow-2xl"
                style={{ animationDelay: `${0.1 + idx * 0.08}s` }}>
                <span className="absolute inset-x-0 top-0 h-1" style={{ background: p.accent }} aria-hidden="true" />
                <div className="flex items-start justify-between">
                  <span className="flex h-13 w-13 items-center justify-center rounded-2xl p-3 text-white" style={{ background: `${p.accent}26`, color: p.accent, height: 56, width: 56 }} aria-hidden="true">
                    {ICONS[p.id]}
                  </span>
                  <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white/50 ring-1 ring-white/10">{p.ordem}</span>
                </div>
                <p className="mt-4 text-[10.5px] font-extrabold uppercase tracking-[0.18em]" style={{ color: p.accent }}>{p.categoria}</p>
                <h2 className="font-display mt-1 text-[19px] font-extrabold leading-tight">{p.nome}</h2>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-white/60">{p.promessa}</p>
                <p className="mt-3 rounded-xl bg-white/5 p-2.5 text-[11.5px] leading-relaxed text-white/55 ring-1 ring-white/5">
                  <span className="font-extrabold text-white/75">Para quem: </span>{p.publico}
                </p>
                <button onClick={() => go(p.id as View)}
                  className="mt-4 flex items-center justify-center gap-2 rounded-2xl px-4 py-3.5 text-[13.5px] font-extrabold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-white"
                  style={{ background: p.accent }} aria-label={`${p.cta} — abrir ${p.nome}`}>
                  {p.cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* UMA VISÃO, QUATRO SOLUÇÕES */}
      <section className="mx-auto max-w-7xl px-4 py-14" aria-labelledby="visao-title">
        <div className="text-center">
          <SectionKicker>Uma visão, quatro soluções</SectionKicker>
          <h2 id="visao-title" className="font-display mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Cada projecto resolve <span className="gold-text">uma dor real.</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-[14px] text-neutral-500">Subsistemas independentes: pode usar um sem depender dos outros. O que os une é o padrão — clareza, preço em meticais e resposta no WhatsApp.</p>
        </div>
        <ol className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {[
            { id: "keyhouse", n: "01", t: "Habitar com confiança", d: "Do arrendamento ao terreno: informação organizada, visitas confirmadas e contactos protegidos." },
            { id: "motomoz", n: "02", t: "Mover com ordem", d: "Do passageiro à empresa: preço fechado antes de subir, seguro e factura com NUIT." },
            { id: "sistafe", n: "03", t: "Aprender o Estado", d: "Do primeiro login ao pagamento: manuais, formação certificada e radar de integridade UGEA." },
            { id: "cvmaker", n: "04", t: "Trabalhar com presença", d: "Do rascunho ao PDF: currículo de uma página, pronto a enviar, com revisão humana." },
          ].map((s) => {
            const meta = PROJECTS_META.find((m) => m.id === s.id)!;
            return (
              <li key={s.id} className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="text-[11px] font-extrabold tracking-[0.2em]" style={{ color: meta.accent }}>{s.n}</span>
                <p className="font-display mt-1 text-[16px] font-extrabold">{s.t}</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-500">{s.d}</p>
                <button onClick={() => go(s.id as View)} className="mt-3 flex items-center gap-1 text-[13px] font-extrabold hover:underline" style={{ color: meta.accent }}>
                  Abrir {meta.nome} <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </li>
            );
          })}
        </ol>
      </section>

      <FlowAuto />

      <div className="mx-auto max-w-7xl space-y-6 px-4">
        <ViralDiaspora />
        <div className="flex flex-col items-center justify-between gap-4 overflow-hidden rounded-[28px] bg-[#14100A] p-6 text-white sm:flex-row sm:p-8">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#f6e27a]">Novo · KEYHOUSE + MOZ-BUILD</p>
            <p className="font-display mt-1 text-xl font-extrabold sm:text-2xl">Ruína hoje, palácio amanhã. 2 engenheiros + arquiteto + carpinteiro + marceneiro.</p>
            <p className="mt-1 text-[13px] text-white/60">Avaliação 48h · obra 30-60 dias · lucro 60/25/15 · escolas de distrito ao premium.</p>
          </div>
          <button onClick={() => go("keyhouse")} className="gold-bg flex shrink-0 items-center gap-2 rounded-2xl px-6 py-4 text-sm font-extrabold text-black">Ver ciclo fechado <ArrowRight className="h-4 w-4" /></button>
        </div>
        <HealthMonitor />
      </div>

      {/* CAPTURA — campo entra aqui */}
      <section className="mx-auto max-w-7xl px-4 pb-2" aria-label="Deixe o seu contacto">
        <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="px-1">
            <SectionKicker>Sem negligência · todos os dias</SectionKicker>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Um portal, um funil, <span className="gold-text">zero projecto parado.</span>
            </h2>
            <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-neutral-500">
              Antes: 4 projectos separados, um andava e três paravam. Agora: tudo cai no mesmo WhatsApp
              com etiqueta de origem. Preencha ao lado — testamos o fluxo consigo em minutos.
            </p>
            <ul className="mt-4 space-y-2 text-[13.5px] font-semibold text-neutral-700">
              {["Resposta em minutos, Seg–Sáb 6h–22h", "Preço em meticais, recibo + NUIT", "Sem conta, sem app, sem mensalidade"].map((t, i) => (
                <li key={i} className="flex items-center gap-2"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[12px] font-extrabold text-[#f6e27a]">✓</span>{t}</li>
              ))}
            </ul>
          </div>
          <LeadCapture />
        </div>
      </section>

      {/* CONSTRUÍDO EM MOÇAMBIQUE */}
      <section className="border-y border-black/5 bg-white" aria-labelledby="mz-title">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 lg:grid-cols-[auto_1fr_auto]">
          <EmpireSeal size="lg" />
          <div>
            <SectionKicker>Construído em Moçambique</SectionKicker>
            <h2 id="mz-title" className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">Feito em Maputo. Para Moçambique.</h2>
            <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-neutral-500">
              Este portal é mantido por <b className="text-neutral-800">{COFRE.nome}</b> (NUIT {COFRE.nuit}).
              Sem promessas de integrações que não existem, sem selos oficiais sem autorização:
              cada subsistema declara o que é — e o atendimento é sempre directo, em português, em meticais.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-[12px] font-bold">
              {[["Maputo", "sede e atendimento"], ["MT", "preços em meticais"], ["PT", "conteúdo em português"], ["WA", "resposta no WhatsApp"]].map(([v, l]) => (
                <span key={v} className="rounded-xl bg-neutral-100 px-3 py-2 ring-1 ring-black/5"><b>{v}</b> <span className="font-medium text-neutral-500">{l}</span></span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <a href={waLink("Olá Joaquim! Vim do Ecossistema Machava e quero conversar.")} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl bg-black px-6 py-3.5 text-sm font-bold text-white hover:bg-neutral-900">
              <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden="true" /> Conversar
            </a>
            <a href={waLink("💧 Quero oferecer uma água ao ecossistema!")} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl border-2 border-sky-200 bg-sky-50 px-6 py-3 text-sm font-bold text-sky-800 hover:bg-sky-100">
              <Droplets className="h-4 w-4" aria-hidden="true" /> Buy me a water 💧
            </a>
          </div>
        </div>
      </section>

      {/* CONTACTO GERAL */}
      <section className="mx-auto max-w-7xl px-4 py-14" aria-labelledby="contacto-title">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-[28px] bg-[#0a0a0a] p-7 text-white sm:p-9">
            <SectionKicker dark>Contacto geral</SectionKicker>
            <h2 id="contacto-title" className="font-display text-2xl font-extrabold sm:text-3xl">Uma mensagem chega aos 4 projectos.</h2>
            <p className="mt-2 max-w-lg text-[14px] text-white/60">Diga o que procura — imóvel, corrida, manual ou CV — e encaminhamos para o subsistema certo. Seg–Sáb, 6h–22h.</p>
            <ul className="mt-5 space-y-2.5 text-[14px]">
              <li><a href={waLink("Olá! Vim do Ecossistema Machava.")} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-white/5 p-3.5 ring-1 ring-white/10 hover:bg-white/10"><MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden="true" /><span><b>WhatsApp {COFRE.whatsappDisplay}</b><br /><span className="text-[12px] text-white/50">Canal principal · resposta em minutos</span></span></a></li>
              <li><a href={`mailto:${COFRE.email}?subject=Contacto%20—%20Ecossistema%20Machava`} className="flex items-center gap-3 rounded-2xl bg-white/5 p-3.5 ring-1 ring-white/10 hover:bg-white/10"><Mail className="h-5 w-5 text-[#d4af37]" aria-hidden="true" /><span><b>{COFRE.email}</b><br /><span className="text-[12px] text-white/50">Para propostas e documentos</span></span></a></li>
              <li className="flex items-center gap-3 rounded-2xl bg-white/5 p-3.5 ring-1 ring-white/10"><MapPin className="h-5 w-5 text-[#d4af37]" aria-hidden="true" /><span><b>Maputo, Moçambique</b><br /><span className="text-[12px] text-white/50">Atendimento presencial sob marcação</span></span></li>
            </ul>
          </div>
          <div className="flex flex-col justify-center rounded-[28px] border border-black/10 bg-white p-7 shadow-sm sm:p-9">
            <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-500"><Clock className="h-4 w-4" aria-hidden="true" /> Resposta rápida por tema</p>
            <div className="mt-4 grid gap-2">
              {[
                ["Quero visitar um imóvel", "keyhouse", "Olá KEYHOUSE! Quero visitar um imóvel. Procuro:"],
                ["Quero pedir uma corrida", "motomoz", "Olá MOTOMOZ! Quero pedir uma corrida. Estou em:"],
                ["Quero o manual e-SISTAFE", "sistafe", "Olá MOZ-SISTAFE! Quero o Manual Completo (500 MT)."],
                ["Quero rever o meu CV", "cvmaker", "Olá CV-MAKER! Quero revisão do meu CV."],
              ].map(([label, id, msg]) => {
                const meta = PROJECTS_META.find((m) => m.id === id)!;
                return (
                  <a key={id} href={waLink(msg)} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-black/10 px-4 py-3 text-[13.5px] font-bold transition hover:shadow-md">
                    <span className="flex items-center gap-2.5"><span className="h-2.5 w-2.5 rounded-full" style={{ background: meta.accent }} aria-hidden="true" />{label}</span>
                    <ChevronRight className="h-4 w-4 text-neutral-300" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
            <p className="mt-3 text-[11.5px] text-neutral-400">Apenas canais reais: WhatsApp, email e grupo MOTOMOZ. Sem redes sociais inventadas.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── 404 ─────────────────────────────────────────────────────────
function NotFound({ go }: { go: (v: View) => void }) {
  return (
    <main className="mx-auto flex max-w-2xl flex-col items-center px-4 py-20 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-black text-[#f6e27a]"><SearchX className="h-8 w-8" aria-hidden="true" /></span>
      <p className="mt-5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-400">Erro 404 · Página não encontrada</p>
      <h1 className="font-display mt-2 text-4xl font-extrabold">Este caminho não existe<span className="gold-text">.</span></h1>
      <p className="mt-3 text-[14px] text-neutral-500">O endereço pode ter mudado. Volte ao portal e escolha um dos 4 subsistemas.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <button onClick={() => go("hub")} className="rounded-2xl bg-black px-6 py-3.5 text-sm font-bold text-white">Voltar ao Ecossistema</button>
        {PROJECTS_META.map((p) => (
          <button key={p.id} onClick={() => go(p.id as View)} className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-[13px] font-bold hover:shadow-md">{p.nome}</button>
        ))}
      </div>
    </main>
  );
}

// ─── APP com hash-routing ────────────────────────────────────────
export default function App() {
  const [view, setView] = useState<View>(() => {
    if (typeof window !== "undefined") {
      const h = window.location.hash.toLowerCase();
      if (h in ROUTES) return ROUTES[h];
      if (h.startsWith("#/")) return "notfound";
    }
    return "hub";
  });

  const go = useCallback((v: View) => {
    setView(v);
    const hash = HASH_OF[v] ?? "#/";
    if (window.location.hash !== hash) window.location.hash = hash;
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.toLowerCase();
      if (h in ROUTES) setView(ROUTES[h]);
      else if (h.startsWith("#/")) setView("notfound");
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    const titles: Record<View, string> = {
      hub: "Ecossistema Machava — KEYHOUSE · MOTOMOZ · MOZ-SISTAFE · CV-MAKER",
      keyhouse: "KEYHOUSE — Imobiliário e Terrenos em Moçambique",
      motomoz: "MOTOMOZ — Mobilidade Urbana e Soluções B2B",
      sistafe: "MOZ-SISTAFE — Educação Digital e-SISTAFE (guia independente)",
      cvmaker: "CV-MAKER — Currículos e Empregabilidade",
      notfound: "Página não encontrada — Ecossistema Machava",
    };
    document.title = titles[view];
  }, [view]);

  const crumbs = view !== "hub" && view !== "notfound" && (
    <nav aria-label="Percurso" className={`border-b ${view === "sistafe" ? "border-white/10 bg-[#0b1e42] text-white/70" : view === "cvmaker" ? "border-white/10 bg-[#150A2E] text-white/70" : "border-[#d4af37]/30 bg-[#0a0a0a] text-white/70"}`}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-2 text-[12px] font-semibold">
        <button onClick={() => go("hub")} className="rounded hover:text-[#f6e27a] focus-visible:outline-2 focus-visible:outline-[#d4af37]">Ecossistema</button>
        <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden="true" />
        <span className="text-[#f6e27a]" aria-current="page">{PROJECTS_META.find((p) => p.id === view)?.nome ?? view}</span>
        <span className="ml-auto hidden gap-3 sm:flex">
          {PROJECTS_META.filter((p) => p.id !== view).map((p) => (
            <button key={p.id} onClick={() => go(p.id as View)} className="rounded opacity-70 hover:text-[#f6e27a] focus-visible:outline-2 focus-visible:outline-[#d4af37]">{p.nome} →</button>
          ))}
        </span>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-black focus:px-4 focus:py-2 focus:text-white">Saltar para o conteúdo</a>
      <Header view={view} go={go} />
      {crumbs}
      <main id="conteudo">
        {view === "hub" && <Hub go={go} />}
        {view === "keyhouse" && <KeyHouse />}
        {view === "motomoz" && <MotoMoz />}
        {view === "sistafe" && <MozSistafe />}
        {view === "cvmaker" && <CvMaker />}
        {view === "notfound" && <NotFound go={go} />}
      </main>
      <Footer go={go} />
      <FloatingWA view={view} />
    </div>
  );
}
