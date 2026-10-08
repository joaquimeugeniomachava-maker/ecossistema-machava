import { useMemo, useState } from "react";
import {
  Bike, ShieldCheck, Clock, Star, MapPin, Calculator, Building2, UserCheck,
  ChevronDown, MessageCircle, Check, Zap, Navigation, Wallet, Users, ArrowRight, BadgeCheck, Timer, CreditCard,
} from "lucide-react";
import { COFRE, MOTO_ZONES, MOTO_PLANS, MOTO_TESTIMONIALS, MOTO_FAQ, waLink } from "../data";
import { SectionKicker, Stars } from "../components/chrome";
import { RovumaMaputo, PedidoIntuitivo, BonusLimpos } from "../components/MotoNacional";
import MotoCadastro from "../components/MotoCadastro";
import SystemPanel from "../components/SystemPanel";
import { MotoTurboZonas, MotoTaxaAuto, MotoGrupo } from "../components/TurboPack";
import { textoOu } from "../lib/safe";

const HERO_IMG = "https://images.pexels.com/photos/33757408/pexels-photo-33757408.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const CITY_IMG = "https://images.pexels.com/photos/30188147/pexels-photo-30188147.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const STREET_IMG = "https://images.pexels.com/photos/27731041/pexels-photo-27731041.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

const fmt = (n: number) => n.toLocaleString("pt-MZ") + " MT";

// ─── SIMULADOR DE CORRIDA ──────────────────────────────────────
function RideSimulator() {
  const [zi, setZi] = useState(1);
  const [extraKm, setExtraKm] = useState(0);
  const [pax, setPax] = useState(1);
  const z = MOTO_ZONES[zi];
  const km = z.km + extraKm;
  const base = 50;
  const perKm = 18;
  const subtotal = Math.round(base + km * perKm);
  const fee = 5;
  const total = subtotal + fee + (pax === 2 ? 10 : 0);
  const eta = Math.max(4, Math.round(km * 1.6));

  return (
    <div className="overflow-hidden rounded-[28px] bg-[#0a0a0a] text-white ring-1 ring-[#d4af37]/40 card-shadow">
      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        <div className="p-6 sm:p-9">
          <SectionKicker dark>Simulador transparente</SectionKicker>
          <h3 className="font-display text-2xl font-extrabold sm:text-3xl">Quanto custa a <span className="gold-text">minha corrida?</span></h3>
          <p className="mt-2 text-sm text-white/60">Sem surpresas. Base 50 MT + 18 MT/km + taxa fixa 5 MT (seguro + suporte).</p>

          <p className="mb-2 mt-6 text-[11px] font-extrabold uppercase tracking-widest text-[#d4af37]">Rota popular</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {MOTO_ZONES.map((rz, i) => (
              <button key={i} onClick={() => setZi(i)}
                className={`rounded-2xl border px-3 py-2.5 text-left text-[12px] transition ${i === zi ? "border-[#d4af37] bg-[#d4af37]/15 shadow-lg" : "border-white/10 bg-white/5 hover:border-white/30"}`}>
                <span className="block font-bold">{rz.from} → {rz.to}</span>
                <span className="text-white/50">{rz.km} km · {fmt(rz.price)}</span>
              </button>
            ))}
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="mb-2 flex items-center justify-between text-[12px] font-bold"><span>Desvio extra</span><span className="tick text-[#f6e27a]">+{extraKm} km</span></div>
              <input type="range" min={0} max={10} value={extraKm} onChange={(e) => setExtraKm(+e.target.value)} className="w-full accent-[#d4af37]" />
            </div>
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <p className="mb-2 text-[12px] font-bold">Passageiros</p>
              <div className="flex gap-2">
                {[1, 2].map((n) => (
                  <button key={n} onClick={() => setPax(n)} className={`flex-1 rounded-xl px-3 py-2 text-[13px] font-bold ${pax === n ? "gold-bg text-black" : "bg-white/10 text-white/70"}`}>{n} pessoa{n === 2 ? "s" : ""}{n === 2 ? " +10" : ""}</button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-center bg-gradient-to-br from-[#d4af37] via-[#c39a1f] to-[#7a5f10] p-6 text-black sm:p-9">
          <div className="hero-grid absolute inset-0 opacity-40" />
          <div className="relative">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] opacity-70">Total estimado</p>
            <p className="tick font-display text-6xl font-extrabold tracking-tight">{total}<span className="text-2xl"> MT</span></p>
            <div className="mt-4 space-y-1.5 rounded-2xl bg-black/85 p-4 text-[13px] text-white">
              <div className="flex justify-between"><span className="text-white/60">Distância total</span><b className="tick">{km.toFixed(1)} km</b></div>
              <div className="flex justify-between"><span className="text-white/60">Base + percurso</span><b className="tick">{fmt(subtotal)}</b></div>
              <div className="flex justify-between"><span className="text-white/60">Taxa plataforma (seguro)</span><b className="tick">{fmt(fee)}</b></div>
              <div className="flex justify-between border-t border-white/10 pt-1.5"><span className="flex items-center gap-1.5 text-white/60"><Timer className="h-3.5 w-3.5" /> Chegada em</span><b>~{eta} min</b></div>
            </div>
            <a href={waLink(`Olá MOTOMOZ! Quero uma corrida ${z.from} → ${z.to} (${km.toFixed(1)} km). Total estimado: ${total} MT. A minha localização é:`)} target="_blank" rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-black px-5 py-4 text-sm font-extrabold text-[#f6e27a] shadow-xl transition hover:scale-[1.02]">
              <MessageCircle className="h-5 w-5 text-[#25D366]" /> Pedir esta corrida no WhatsApp
            </a>
            <p className="mt-2 text-center text-[11px] font-semibold opacity-70">Pagamento: numerário · M-Pesa {COFRE.mpesa} · e-Mola</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── CALCULADORA DO PILOTO ─────────────────────────────────────
function DriverCalc() {
  const [runs, setRuns] = useState(14);
  const [days, setDays] = useState(26);
  const avg = 130;
  const gross = runs * avg * days;
  const costs = Math.round(gross * 0.32);
  const net = gross - costs;
  return (
    <div className="grid gap-6 rounded-[28px] border border-black/10 bg-white p-6 card-shadow-sm sm:p-9 lg:grid-cols-2">
      <div>
        <SectionKicker>Para pilotos</SectionKicker>
        <h3 className="font-display text-2xl font-extrabold sm:text-3xl">Quanto pode <span className="gold-text">ganhar por mês?</span></h3>
        <p className="mt-2 text-sm text-neutral-500">Média real da frota: 130 MT/corrida. Custos (combustível + manutenção) ≈ 32%.</p>
        <div className="mt-6 space-y-5">
          <div>
            <div className="mb-2 flex justify-between text-sm font-bold">Corridas por dia <span className="tick rounded-full bg-black px-3 py-0.5 text-[#f6e27a]">{runs}</span></div>
            <input type="range" min={4} max={25} value={runs} onChange={(e) => setRuns(+e.target.value)} className="w-full accent-black" />
          </div>
          <div>
            <div className="mb-2 flex justify-between text-sm font-bold">Dias por mês <span className="tick rounded-full bg-black px-3 py-0.5 text-[#f6e27a]">{days}</span></div>
            <input type="range" min={15} max={30} value={days} onChange={(e) => setDays(+e.target.value)} className="w-full accent-black" />
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            {[{ l: "Bruto", v: gross }, { l: "Custos", v: costs }, { l: "Líquido", v: net }].map((s, i) => (
              <div key={i} className={`rounded-2xl p-3 ${i === 2 ? "gold-bg" : "bg-neutral-100"}`}>
                <p className="text-[10px] font-extrabold uppercase tracking-widest opacity-60">{s.l}</p>
                <p className="tick text-[15px] font-extrabold sm:text-lg">{fmt(s.v)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center rounded-3xl bg-[#0a0a0a] p-6 text-white sm:p-8">
        <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#d4af37]"><UserCheck className="h-4 w-4" /> Registo de piloto · 48h</p>
        <ul className="mt-4 space-y-2.5 text-[13px] text-white/75">
          {["Sem taxa de entrada — só verificação", "Seguro de acidentes incluído", "Formação de 1 dia + capacete MOTOMOZ", "Receba em M-Pesa/e-Mola no próprio dia", "Bónus 1.000 MT após 100 corridas"].map((t, i) => (
            <li key={i} className="flex items-start gap-2"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/20"><Check className="h-3 w-3 text-[#f6e27a]" /></span>{t}</li>
          ))}
        </ul>
        <a href={waLink(`Olá MOTOMOZ! Quero ser PILOTO. Tenho carta A e mota. Faço ~${runs} corridas/dia. Nome:`)} target="_blank" rel="noreferrer"
          className="gold-bg mt-5 flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-extrabold text-black transition hover:brightness-110">
          Candidatar-me a piloto <ArrowRight className="h-4 w-4" />
        </a>
        <p className="mt-2 text-center text-[11px] text-white/40">Requisitos: carta A · livrete · capacete extra · registo criminal</p>
      </div>
    </div>
  );
}

// ─── PÁGINA ────────────────────────────────────────────────────
export default function MotoMoz() {
  const [tab, setTab] = useState<"pax" | "driver" | "biz">("pax");
  const [faq, setFaq] = useState<number | null>(0);
  const [ride, setRide] = useState({ name: "", from: "", to: "", when: "Agora" });

  const stats = useMemo(() => [
    { v: "850+", l: "Pilotos verificados" },
    { v: "12k", l: "Corridas / mês" },
    { v: "4.9★", l: "Avaliação média" },
    { v: "9 min", l: "Tempo médio de chegada" },
  ], []);

  return (
    <div className="bg-[#fafaf8]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0a0a0a] text-white">
        <img src={HERO_IMG} alt="Piloto MOTOMOZ em Maputo" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
        <div className="absolute inset-0 hero-grid" />
        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 sm:pt-16">
          <div className="max-w-2xl">
            <div className="anim-rise flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-full bg-[#d4af37]/15 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-[#f6e27a] ring-1 ring-[#d4af37]/50"><Zap className="h-3.5 w-3.5" /> Rede nº1 de mototáxis executivos</span>
              <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-bold text-white/80"><MapPin className="h-3.5 w-3.5" /> Rovuma → Maputo · 11 províncias</span>
            </div>
            <h1 className="anim-rise font-display mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl" style={{ animationDelay: ".08s" }}>
              Do Rovuma a Maputo.<br /><span className="gold-text">3 toques e já vai.</span>
            </h1>
            <p className="anim-rise mt-4 max-w-xl text-[15px] leading-relaxed text-white/70 sm:text-lg" style={{ animationDelay: ".16s" }}>
              Pilotos verificados, capacete extra, seguro incluído e preço fechado antes de subir. Para passageiros, pilotos e empresas — <b className="text-white">taxa única de 5 MT por corrida.</b>
            </p>
            <div className="anim-rise mt-7 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: ".24s" }}>
              <a href={waLink("Olá MOTOMOZ! Quero PEDIR UMA CORRIDA agora. Estou em:")} target="_blank" rel="noreferrer" className="gold-bg flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-extrabold text-black shadow-2xl transition hover:brightness-110">
                <Navigation className="h-4 w-4" /> Pedir corrida agora
              </a>
              <a href={COFRE.grupoMotomoz} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-7 py-4 text-sm font-extrabold ring-1 ring-white/25 backdrop-blur transition hover:bg-white/15">
                <Users className="h-4 w-4 text-[#25D366]" /> Entrar no grupo WhatsApp
              </a>
            </div>
            <div className="anim-rise mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4" style={{ animationDelay: ".32s" }}>
              {stats.map((s, i) => (
                <div key={i} className="rounded-2xl bg-white/5 p-3.5 ring-1 ring-white/10 backdrop-blur">
                  <p className="tick font-display text-2xl font-extrabold text-[#f6e27a]">{s.v}</p>
                  <p className="text-[11px] font-semibold text-white/55">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden border-t border-white/10 bg-black/60 py-3 backdrop-blur">
          <div className="anim-marquee flex w-max gap-10 whitespace-nowrap text-[12px] font-bold uppercase tracking-widest text-white/50">
            {Array(2).fill(["Rovuma → Maputo · 11 províncias", "Curta 75 MT · Média 135 MT · Longa 225 MT", "Seguro incluído", "SOS 1-toque", "M-Pesa · e-Mola", "Capacete extra sempre"]).flat().map((t, i) => (
              <span key={i} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" /> {t}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-14 px-4 py-12 sm:py-16">
        <RovumaMaputo />

        <PedidoIntuitivo />

        <MotoCadastro />

        <MotoTurboZonas />

        <div className="grid gap-6 lg:grid-cols-2">
          <MotoTaxaAuto />
          <MotoGrupo />
        </div>

        <BonusLimpos />

        <SystemPanel />

        <RideSimulator />

        {/* COMO FUNCIONA */}
        <section>
          <SectionKicker>Como funciona</SectionKicker>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-display max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">Uma rede, <span className="gold-text">três formas de ganhar.</span></h2>
            <div className="flex rounded-full border border-black/10 bg-white p-1 card-shadow-sm">
              {([["pax", "Passageiro"], ["driver", "Piloto"], ["biz", "Empresa"]] as const).map(([id, l]) => (
                <button key={id} onClick={() => setTab(id)} className={`rounded-full px-4 py-2 text-[13px] font-bold transition sm:px-5 ${tab === id ? "bg-black text-[#f6e27a]" : "text-neutral-500 hover:text-black"}`}>{l}</button>
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {(tab === "pax" ? [
              { i: <MessageCircle className="h-5 w-5" />, t: "1 · Peça no WhatsApp", d: "Envie a sua localização. Respondemos em <2 min com piloto, matrícula e preço fechado." },
              { i: <ShieldCheck className="h-5 w-5" />, t: "2 · Viaje protegido", d: "Capacete extra higienizado, colete reflector e seguro de 150.000 MT em todas as corridas." },
              { i: <Wallet className="h-5 w-5" />, t: "3 · Pague como quiser", d: "Numerário, M-Pesa ou e-Mola. Recibo digital imediato + avaliação do piloto." },
            ] : tab === "driver" ? [
              { i: <UserCheck className="h-5 w-5" />, t: "1 · Verificação 48h", d: "Carta A, livrete, registo criminal. Inspecção da mota + formação de 1 dia connosco." },
              { i: <Zap className="h-5 w-5" />, t: "2 · Receba corridas", d: "Despacho inteligente por zona. Corridas empresa pagam 15% acima + gorjetas 100% suas." },
              { i: <CreditCard className="h-5 w-5" />, t: "3 · Receba no dia", d: "Liquidação diária em M-Pesa/e-Mola. Ranking mensal: top 10 ganham bónus + combustível." },
            ] : [
              { i: <Building2 className="h-5 w-5" />, t: "1 · Conta gestora", d: "Definimos tectos por colaborador, centros de custo e horários autorizados." },
              { i: <Clock className="h-5 w-5" />, t: "2 · SLA 15 minutos", d: "Piloto dedicado + dispatcher no WhatsApp. Atraso = corrida grátis + 50 MT de crédito." },
              { i: <Calculator className="h-5 w-5" />, t: "3 · Factura com NUIT", d: "Relatório mensal auditável, factura com NUIT e 10% desconto em corridas extra-pacote." },
            ]).map((s, i) => (
              <div key={i} className="anim-rise rounded-3xl border border-black/10 bg-white p-6 card-shadow-sm transition hover:-translate-y-1 hover:shadow-xl" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-[#f6e27a]">{s.i}</div>
                <p className="mt-4 font-display text-[17px] font-extrabold">{s.t}</p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-neutral-500">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PEDIDO RÁPIDO + IMAGEM */}
        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="relative min-h-[320px] overflow-hidden rounded-[28px] card-shadow">
            <img src={STREET_IMG} alt="Movimento urbano" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white sm:p-8">
              <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#f6e27a]"><Star className="h-4 w-4" /> Compromisso executivo</p>
              <p className="font-display mt-2 text-2xl font-extrabold leading-snug sm:text-3xl">Capacete extra. Preço fechado.<br />Zero “vamos combinar”.</p>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-bold">
                {["Verificação criminal", "Seguro 150k MT", "Suporte 6h–22h"].map((t, i) => (
                  <span key={i} className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur"><BadgeCheck className="h-3.5 w-3.5 text-[#f6e27a]" /> {t}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-[28px] border border-black/10 bg-white p-6 card-shadow-sm sm:p-8">
            <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#8a6f16]"><Bike className="h-4 w-4" /> Pedido em 20 segundos</p>
            <h3 className="font-display mt-2 text-2xl font-extrabold">Onde vamos buscar-lhe?</h3>
            <div className="mt-4 space-y-3">
              <input value={ride.name} onChange={(e) => setRide({ ...ride, name: e.target.value })} placeholder="O seu nome" className="w-full rounded-2xl border border-black/10 bg-neutral-50 px-4 py-3 text-sm outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/30" />
              <div className="grid grid-cols-2 gap-3">
                <input value={ride.from} onChange={(e) => setRide({ ...ride, from: e.target.value })} placeholder="Origem (ex.: Baixa)" className="rounded-2xl border border-black/10 bg-neutral-50 px-4 py-3 text-sm outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/30" />
                <input value={ride.to} onChange={(e) => setRide({ ...ride, to: e.target.value })} placeholder="Destino (ex.: Museu)" className="rounded-2xl border border-black/10 bg-neutral-50 px-4 py-3 text-sm outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/30" />
              </div>
              <div className="flex gap-2">
                {["Agora", "Em 30 min", "Agendar"].map((w) => (
                  <button key={w} onClick={() => setRide({ ...ride, when: w })} className={`flex-1 rounded-xl px-3 py-2.5 text-[13px] font-bold ${ride.when === w ? "bg-black text-[#f6e27a]" : "bg-neutral-100 text-neutral-500"}`}>{w}</button>
                ))}
              </div>
              <a href={waLink(`Olá MOTOMOZ! PEDIDO DE CORRIDA — Nome: ${textoOu(ride.name, "(nome)")} | De: ${textoOu(ride.from, "(origem)")} Para: ${textoOu(ride.to, "(destino)")} | Quando: ${textoOu(ride.when, "Agora")}`)} target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-4 text-sm font-extrabold text-white transition hover:brightness-110">
                <MessageCircle className="h-5 w-5" /> Confirmar pedido no WhatsApp
              </a>
            </div>
          </div>
        </section>

        <DriverCalc />

        {/* PLANOS EMPRESA */}
        <section id="planos">
          <div className="relative overflow-hidden rounded-[28px] bg-[#0a0a0a] p-6 text-white sm:p-10">
            <img src={CITY_IMG} alt="Maputo" className="absolute inset-0 h-full w-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black" />
            <div className="relative flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <SectionKicker dark>Planos empresa · B2B</SectionKicker>
                <h2 className="font-display max-w-xl text-3xl font-extrabold sm:text-4xl">A sua equipa em movimento, <span className="gold-text">factura com NUIT.</span></h2>
              </div>
              <a href={waLink("Olá MOTOMOZ! Quero uma PROPOSTA EMPRESA. Somos (nº colaboradores) e precisamos de (corridas/mês).")} target="_blank" rel="noreferrer" className="flex shrink-0 items-center gap-2 rounded-2xl border border-[#d4af37]/50 bg-[#d4af37]/10 px-5 py-3 text-sm font-bold text-[#f6e27a] hover:bg-[#d4af37]/20">
                <Building2 className="h-4 w-4" /> Pedir proposta à medida
              </a>
            </div>
            <div className="relative mt-8 grid gap-4 lg:grid-cols-3">
              {MOTO_PLANS.map((p) => (
                <div key={p.id} className={`relative flex flex-col rounded-3xl p-6 ${p.featured ? "gold-bg text-black shadow-2xl lg:-translate-y-2" : "bg-white/5 text-white ring-1 ring-white/15 backdrop-blur"}`}>
                  {p.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black px-4 py-1 text-[11px] font-extrabold uppercase tracking-widest text-[#f6e27a]">★ O mais contratado</span>}
                  <p className={`text-[11px] font-extrabold uppercase tracking-[0.2em] ${p.featured ? "opacity-60" : "text-[#d4af37]"}`}>{p.tag}</p>
                  <p className="font-display mt-1 text-2xl font-extrabold">{p.name}</p>
                  <p className="mt-1 flex items-end gap-1"><span className="tick font-display text-4xl font-extrabold">{p.price.toLocaleString("pt-MZ")}</span><span className="pb-1 text-sm font-bold opacity-60">MT/mês</span></p>
                  <p className={`mt-2 text-[13px] leading-relaxed ${p.featured ? "text-black/70" : "text-white/60"}`}>{p.desc}</p>
                  <ul className="mt-4 flex-1 space-y-2 text-[13px] font-medium">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2"><span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${p.featured ? "bg-black/15" : "bg-[#d4af37]/20"}`}><Check className={`h-3 w-3 ${p.featured ? "text-black" : "text-[#f6e27a]"}`} /></span>{f}</li>
                    ))}
                  </ul>
                  <a href={waLink(`Olá MOTOMOZ! Quero o plano ${p.name} (${p.price} MT/mês). Empresa:`)} target="_blank" rel="noreferrer"
                    className={`mt-5 flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-extrabold transition ${p.featured ? "bg-black text-[#f6e27a] hover:bg-neutral-900" : "bg-[#d4af37]/15 text-[#f6e27a] ring-1 ring-[#d4af37]/40 hover:bg-[#d4af37]/25"}`}>
                    {p.cta} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
            <p className="relative mt-5 text-center text-[12px] text-white/40">Todos os planos: corridas extra com 10% desconto · sem fidelização · cancele quando quiser</p>
          </div>
        </section>

        {/* TESTEMUNHOS + FAQ */}
        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionKicker>Quem já anda connosco</SectionKicker>
            <h2 className="font-display text-3xl font-extrabold tracking-tight">4.9 estrelas. <span className="gold-text">12 mil corridas/mês.</span></h2>
            <div className="mt-5 space-y-3">
              {MOTO_TESTIMONIALS.map((t, i) => (
                <div key={i} className="rounded-3xl border border-black/10 bg-white p-5 card-shadow-sm">
                  <Stars n={t.stars} />
                  <p className="mt-2 text-[14px] leading-relaxed text-neutral-700">“{t.text}”</p>
                  <p className="mt-3 text-[13px] font-extrabold">{t.name} <span className="font-medium text-neutral-400">· {t.role}</span></p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionKicker>Perguntas frequentes</SectionKicker>
            <h2 className="font-display text-3xl font-extrabold tracking-tight">Transparência total.</h2>
            <div className="mt-5 space-y-2.5">
              {MOTO_FAQ.map((f, i) => (
                <div key={i} className={`overflow-hidden rounded-2xl border transition ${faq === i ? "border-[#d4af37] bg-white shadow-lg" : "border-black/10 bg-white"}`}>
                  <button onClick={() => setFaq(faq === i ? null : i)} className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-[14px] font-bold">
                    {f.q}<ChevronDown className={`h-4 w-4 shrink-0 transition ${faq === i ? "rotate-180 text-[#b8941f]" : "text-neutral-400"}`} />
                  </button>
                  {faq === i && <p className="px-5 pb-5 text-[13.5px] leading-relaxed text-neutral-500">{f.a}</p>}
                </div>
              ))}
            </div>
            <a href={COFRE.grupoMotomoz} target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-between rounded-2xl bg-[#075E54] p-5 text-white transition hover:brightness-110">
              <span><span className="block text-sm font-extrabold">Grupo MOTOMOZ no WhatsApp</span><span className="text-[12px] opacity-70">Promoções, vagas de piloto e ETA em tempo real</span></span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15"><MessageCircle className="h-5 w-5" /></span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
