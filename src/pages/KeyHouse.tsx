import { useMemo, useState } from "react";
import { KeyRound, ShieldCheck, MapPin, BedDouble, Bath, Ruler, MessageCircle, Search, BadgeCheck, CalendarCheck, Eye, Star, Warehouse, Home, Building2, Landmark, Handshake, Percent, ArrowRight, UserCheck, FileCheck } from "lucide-react";
import { COFRE, KEYHOUSE_LISTINGS, KEYHOUSE_STATS, KEYHOUSE_CATS, KEYHOUSE_FEES, KEYHOUSE_ROLES } from "../data";
import { SectionKicker, Stars } from "../components/chrome";
import { waFlow } from "../lib/flow";
import { txt as textoOu } from "../lib/safe";
import { KeyhouseReceitas, KeyhouseTipos, KeyhouseB2B, KeyhouseProcuraSe, KeyhouseCopy, DesbloqueioContacto } from "../components/TurboPack";
import { KeyhouseAntiFalir, KeyhouseComissaoTurbo, KeyhouseTeste100 } from "../components/TurboInsano";
import { MozBuildHero, MozBuildEquipa, MozBuildCiclo, MozBuildModulos, MozBuildServicos, MozBuildSimulador, MozBuildPiloto } from "../components/MozBuild";

const HERO = "https://images.pexels.com/photos/30188147/pexels-photo-30188147.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const fmtMT = (n: number) => Math.round(n).toLocaleString("pt-MZ") + " MT";

function FeeSimulator() {
  const [valor, setValor] = useState(5200000);
  const [tipo, setTipo] = useState<"venda" | "renda">("venda");
  const [taxa, setTaxa] = useState(5);
  const [meses, setMeses] = useState(12);
  // Venda: taxa sobre valor. Renda: 10% TOTAL do contrato (5% KH + 5% parceiro), pago 1 vez.
  const baseRenda = valor * meses;
  const taxaEfectiva = tipo === "venda" ? taxa : 10;
  const fee = tipo === "venda" ? Math.round(valor * (taxa / 100)) : Math.round(baseRenda * 0.1);
  const parceiro = tipo === "venda" ? Math.round(fee * 0.6) : Math.round(fee / 2);
  const kh = fee - parceiro;
  const donoRecebe = tipo === "venda" ? valor - fee : valor;
  return (
    <div className="overflow-hidden rounded-[28px] bg-[#0a0a0a] text-white ring-1 ring-[#d4af37]/40 card-shadow">
      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        <div className="p-6 sm:p-9">
          <SectionKicker dark>Venda 5% · Renda 10% (5% KH) · sem discussão</SectionKicker>
          <h3 className="font-display text-2xl font-extrabold sm:text-3xl">Quanto ganha cada um? <span className="gold-text">Conta feita.</span></h3>
          <p className="mt-2 text-sm text-white/60">Venda 5% total · Arrendamento 10% do contrato (5% KEYHOUSE + 5% parceiro), pago 1 vez. Dono nunca é surpreendido.</p>
          <div className="mt-5 flex gap-2">
            {(["venda", "renda"] as const).map(t => (
              <button key={t} onClick={() => setTipo(t)} className={`flex-1 rounded-xl px-3 py-3 text-[13px] font-extrabold uppercase tracking-wide ${tipo === t ? "gold-bg text-black" : "bg-white/10 text-white/60"}`}>{t === "venda" ? "Venda · 5%" : "Arrendamento · 10%"}</button>
            ))}
          </div>
          <div className="mt-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
            <div className="mb-2 flex justify-between text-[13px] font-bold"><span>{tipo === "venda" ? "Valor de venda" : "Renda mensal"}</span><span className="tick text-[#f6e27a]">{fmtMT(valor)}</span></div>
            <input type="range" min={20000} max={20000000} step={10000} value={valor} onChange={e => setValor(+e.target.value)} className="w-full accent-[#d4af37]" />
            <div className="mt-3 flex justify-between text-[11px] text-white/40"><span>20 mil</span><span>20M</span></div>
          </div>
          {tipo === "venda" ? (
            <div className="mt-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="mb-2 flex justify-between text-[13px] font-bold"><span>Taxa venda</span><span className="tick rounded-full bg-[#d4af37]/20 px-3 py-0.5 text-[#f6e27a]">{taxa}%</span></div>
              <input type="range" min={3} max={5} step={0.5} value={taxa} onChange={e => setTaxa(+e.target.value)} className="w-full accent-[#d4af37]" />
              <div className="mt-1 flex justify-between text-[11px] text-white/40"><span>3% parceiro base</span><span>5% venda cheia</span></div>
            </div>
          ) : (
            <div className="mt-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="mb-2 flex justify-between text-[13px] font-bold"><span>Duração do contrato</span><span className="tick rounded-full bg-[#d4af37]/20 px-3 py-0.5 text-[#f6e27a]">{meses} meses</span></div>
              <input type="range" min={6} max={36} step={6} value={meses} onChange={e => setMeses(+e.target.value)} className="w-full accent-[#d4af37]" />
              <div className="mt-1 flex justify-between text-[11px] text-white/40"><span>Contrato: {fmtMT(baseRenda)}</span><span>10% = 5% KH + 5% parceiro</span></div>
            </div>
          )}
        </div>
        <div className="relative flex flex-col justify-center bg-gradient-to-br from-[#d4af37] via-[#c39a1f] to-[#7a5f10] p-6 text-black sm:p-9">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] opacity-70">No fecho · automático · 1 vez</p>
          <p className="tick font-display text-5xl font-extrabold">{fmtMT(fee)}</p>
          <div className="mt-4 space-y-1.5 rounded-2xl bg-black/85 p-4 text-[13px] text-white">
            <div className="flex justify-between"><span className="text-white/60">{tipo === "venda" ? "Intermediário (3/5)" : "Parceiro (5%)"}</span><b className="tick">{fmtMT(parceiro)}</b></div>
            <div className="flex justify-between"><span className="text-white/60">KEYHOUSE ({tipo === "venda" ? "2/5" : "5%"})</span><b className="tick">{fmtMT(kh)}</b></div>
            <div className="flex justify-between border-t border-white/10 pt-1.5"><span className="text-white/60">{tipo === "venda" ? "Dono recebe" : "Renda mensal intacta*"}</span><b className="tick text-[#f6e27a]">{fmtMT(donoRecebe)}</b></div>
          </div>
          <a href={waFlow(`Olá KEYHOUSE! Simulei ${tipo === "venda" ? `${fmtMT(valor)} venda a ${taxa}%` : `${fmtMT(valor)}/mês × ${meses}m = ${fmtMT(baseRenda)} a 10%`} = taxa ${fmtMT(fee)} (${fmtMT(kh)} KH + ${fmtMT(parceiro)} parceiro). Quero fechar assim. Nome:`, "simulador")} target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-black px-5 py-4 text-sm font-extrabold text-[#f6e27a]">Fechar com esta conta <ArrowRight className="h-4 w-4" /></a>
          <p className="mt-2 text-center text-[11px] font-semibold opacity-70">* Renda: 10% do contrato (5% KH + 5% parceiro), pago 1 vez · {taxaEfectiva}% aplicado</p>
        </div>
      </div>
    </div>
  );
}

export default function KeyHouse() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<string>("Todos");
  const [deal, setDeal] = useState("Todos");
  const [sel, setSel] = useState<string | null>(null);
  const [pub, setPub] = useState({ nome: "", tipo: "Casa", zona: "", preco: "" });

  const list = useMemo(() => {
    return KEYHOUSE_LISTINGS.filter(l => {
      if (filter !== "Todos" && l.cat !== filter) return false;
      const isRent = l.per === "/mês";
      if (deal === "Arrendamento" && !isRent) return false;
      if (deal === "Venda" && isRent) return false;
      if (q && !(l.type + l.zone + l.desc + l.id).toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [q, filter, deal]);

  const chosen = KEYHOUSE_LISTINGS.find(l => l.id === sel);
  const pubMsg = `Olá KEYHOUSE! SOU DONO. Quero registar: ${pub.tipo} em ${textoOu(pub.zona, "(zona)")} · Preço ${textoOu(pub.preco, "(preço)")} MT. Nome: ${textoOu(pub.nome, "(nome)")}. Fotos a seguir.`;

  return (
    <div className="bg-[#fafaf8]">
      <section className="relative overflow-hidden bg-[#0a0a0a] text-white">
        <img src={HERO} alt="Maputo premium" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
        <div className="absolute inset-0 hero-grid" />
        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 sm:pt-16">
          <div className="max-w-2xl">
            <div className="anim-rise flex flex-wrap gap-2">
              <span className="flex items-center gap-1.5 rounded-full bg-[#d4af37] px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-black"><KeyRound className="h-3.5 w-3.5" /> Padrão completo · todos num só</span>
              <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-bold ring-1 ring-white/20"><Percent className="h-3.5 w-3.5 text-[#f6e27a]" /> Taxa 3–5% só no fecho</span>
            </div>
            <h1 className="anim-rise font-display mt-5 text-4xl font-extrabold leading-[1.05] sm:text-6xl" style={{ animationDelay: ".08s" }}>
              KEYHOUSE <span className="gold-text">PROPERTIES</span><br />Donos, parceiros e clientes. Sem correr atrás.
            </h1>
            <p className="anim-rise mt-4 max-w-xl text-[15px] text-white/70 sm:text-lg" style={{ animationDelay: ".16s" }}>
              Ponta de Ouro → Barra: terrenos praia, armazéns, lodges, premium, duplex — <b className="text-white">publica uma vez, o sistema visita, fecha e reparte 3–5% sozinho.</b>
            </p>
            <div className="anim-rise mt-6 flex flex-col gap-2 rounded-2xl bg-white p-2 text-black shadow-2xl sm:flex-row" style={{ animationDelay: ".24s" }}>
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                <input value={q} onChange={e => setQ(e.target.value)} placeholder="Pesquisar: KH-07, Zimpeto, armazém, DUAT…" className="w-full rounded-xl bg-neutral-100 py-3.5 pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-[#d4af37]" />
              </div>
              <div className="flex gap-1 rounded-xl bg-neutral-100 p-1">
                {["Todos", "Venda", "Arrendamento"].map(c => (
                  <button key={c} onClick={() => setDeal(c)} className={`rounded-lg px-3 py-2 text-[12px] font-bold whitespace-nowrap ${deal === c ? "bg-black text-[#f6e27a]" : "text-neutral-500"}`}>{c}</button>
                ))}
              </div>
              <a href={waFlow(`Olá KEYHOUSE! Procuro imóvel: ${textoOu(q, "(descrever)")} | ${filter} | ${deal}`, "busca")} target="_blank" rel="noreferrer" className="gold-bg flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-extrabold text-black">Pedir <MessageCircle className="h-4 w-4" /></a>
            </div>
            <div className="anim-rise mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4" style={{ animationDelay: ".32s" }}>
              {KEYHOUSE_STATS.map((s, i) => (
                <div key={i} className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur">
                  <p className="tick font-display text-xl font-extrabold text-[#f6e27a]">{s.v}</p>
                  <p className="text-[11px] text-white/55">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden border-t border-white/10 bg-black/60 py-3 backdrop-blur">
          <div className="anim-marquee flex w-max gap-10 whitespace-nowrap text-[12px] font-bold uppercase tracking-widest text-white/50">
            {Array(2).fill(["Ponta Ouro · Malongane · Macaneta 15ha · Bilene → Barra", "Armazéns reais · Lodges · Premium · Duplex/Triplex", "Taxa 3–5% só no fecho", "Visita 24h · DUAT verificado · 4x4 onde precisa"]).flat().map((t, i) => (
              <span key={i} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" /> {t}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-12">
        {/* 3 PAPEIS */}
        <section>
          <SectionKicker>Todos em um · escolha o seu papel</SectionKicker>
          <h2 className="font-display text-3xl font-extrabold tracking-tight">Um sistema, <span className="gold-text">três portas.</span></h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {KEYHOUSE_ROLES.map((r, i) => (
              <div key={r.id} className="flex flex-col rounded-[24px] border border-black/10 bg-white p-6 card-shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-[#f6e27a]">
                  {i === 0 ? <Home className="h-6 w-6" /> : i === 1 ? <Handshake className="h-6 w-6" /> : <UserCheck className="h-6 w-6" />}
                </div>
                <p className="font-display mt-3 text-xl font-extrabold">{r.nome}</p>
                <p className="text-[12px] font-bold text-[#b8941f]">{r.sub}</p>
                <ul className="mt-3 flex-1 space-y-1.5 text-[13.5px] text-neutral-600">
                  {r.ganhos.map((g, j) => (<li key={j} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4af37]" />{g}</li>))}
                </ul>
                <a href={waFlow(`Olá KEYHOUSE! ${r.cta}. Nome:`, r.id)} target="_blank" rel="noreferrer" className={`${i === 1 ? "gold-bg text-black" : "bg-black text-[#f6e27a]"} mt-4 flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-extrabold`}>{r.cta} <ArrowRight className="h-4 w-4" /></a>
              </div>
            ))}
          </div>
        </section>

        <FeeSimulator />

        {/* COMO FUNCIONA SEM IR ATRAS */}
        <section>
          <SectionKicker>Piloto automático · sem ir atrás de ninguém</SectionKicker>
          <h2 className="font-display text-3xl font-extrabold">Publicou. <span className="gold-text">O resto anda sozinho.</span></h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { i: <FileCheck className="h-5 w-5" />, t: "1 · Regista no WA", d: "Dono ou parceiro manda fotos + preço + localização. Código KH em minutos." },
              { i: <ShieldCheck className="h-5 w-5" />, t: "2 · Verificamos", d: "Escritura/DUAT, fotos reais, preço justo. Selo Verificado ★." },
              { i: <CalendarCheck className="h-5 w-5" />, t: "3 · Visitas sozinhas", d: "Cliente toca, agenda em 24h, parceiro acompanha. Dono só abre a porta." },
              { i: <Percent className="h-5 w-5" />, t: "4 · Taxa auto 3–5%", d: "Fecha → M-Pesa reparte: parceiro 3% em 48h, KH 2%. Sem cobrança, sem briga." },
            ].map((s, i) => (
              <div key={i} className="rounded-3xl border border-black/10 bg-white p-5 card-shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-[#f6e27a]">{s.i}</div>
                <p className="font-display mt-3 font-extrabold">{s.t}</p>
                <p className="mt-1 text-[13px] text-neutral-500">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-black/10 bg-white">
            <table className="w-full min-w-[640px] text-left text-[13px]">
              <thead><tr className="border-b text-[11px] uppercase tracking-widest text-neutral-400"><th className="p-4">Negócio</th><th className="p-4">Taxa</th><th className="p-4">Quando</th><th className="p-4">Exemplo</th><th className="p-4">Quem paga</th></tr></thead>
              <tbody>{KEYHOUSE_FEES.map((f, i) => (<tr key={i} className="border-b border-black/5 last:border-0"><td className="p-4 font-extrabold">{f.deal}</td><td className="p-4"><span className="rounded-full bg-[#d4af37]/15 px-2.5 py-1 font-extrabold text-[#8a6f16]">{f.taxaCurta || f.taxa}</span></td><td className="p-4 text-neutral-500">{f.quando}</td><td className="p-4 text-neutral-500">{f.exemplo}</td><td className="p-4 text-neutral-500">{f.quem}</td></tr>))}</tbody>
            </table>
          </div>
        </section>

        {/* LISTINGS POR CATEGORIA */}
        <section>
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <SectionKicker>Carteira viva · {list.length} imóveis · Índico → Rovuma</SectionKicker>
              <h2 className="font-display text-3xl font-extrabold tracking-tight">Praias, armazéns, lodges, premium, duplex. <span className="gold-text">Tudo aqui.</span></h2>
            </div>
          </div>
          <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto pb-1">
            {KEYHOUSE_CATS.map(c => (
              <button key={c} onClick={() => setFilter(c)} className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2.5 text-[13px] font-bold ${filter === c ? "bg-black text-[#f6e27a]" : "border border-black/10 bg-white text-neutral-500"}`}>
                {c === "Armazéns" ? <Warehouse className="h-4 w-4" /> : c === "Flats" ? <Building2 className="h-4 w-4" /> : c === "Terrenos Praia" || c === "Terrenos" ? <Landmark className="h-4 w-4" /> : c === "Estâncias Turísticas" ? <Star className="h-4 w-4" /> : c === "Premium & Executivas" ? <BadgeCheck className="h-4 w-4" /> : c === "Duplex/Triplex" ? <Home className="h-4 w-4" /> : c === "Moradias" || c === "Casas" ? <Home className="h-4 w-4" /> : <KeyRound className="h-4 w-4" />}{c}
              </button>
            ))}
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map(l => {
              const isVenda = l.per.startsWith("venda");
              const taxa = isVenda ? Math.round(l.price * 0.05) : (l.price > 0 ? Math.round(l.price * 12 * 0.1) : 0);
              return (
                <div key={l.id} className="group overflow-hidden rounded-[24px] border border-black/10 bg-white card-shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-52 overflow-hidden">
                    <img src={l.img} alt={l.type} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                    <span className="absolute left-3 top-3 rounded-full bg-black/85 px-3 py-1 text-[11px] font-extrabold text-[#f6e27a]">{l.tag}</span>
                    <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold">{l.id} · {l.cat}</span>
                    <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold"><MapPin className="h-3 w-3 text-[#b8941f]" /> {l.zone}</span>
                  </div>
                  <div className="p-5">
                    <p className="font-display text-[17px] font-extrabold">{l.type}</p>
                    <p className="mt-0.5 text-[13px] text-neutral-500">{l.desc}</p>
                    {(l as any).beach || (l as any).access || (l as any).docs ? (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {(l as any).beach && (l as any).beach !== "—" ? <span className="rounded-full bg-sky-50 px-2.5 py-1 text-[10.5px] font-extrabold text-sky-700 ring-1 ring-sky-200">🏖 {(l as any).beach}</span> : null}
                        {(l as any).access ? <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10.5px] font-bold text-neutral-600">🚙 {(l as any).access}</span> : null}
                        {(l as any).docs ? <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10.5px] font-bold text-emerald-700 ring-1 ring-emerald-200">📄 {(l as any).docs}</span> : null}
                      </div>
                    ) : null}
                    <p className="mt-1.5 text-[11px] font-bold text-neutral-400">Anunciante: {l.owner} · {l.price > 0 ? `Taxa no fecho: ${fmtMT(taxa)} (5% KH)` : "Comissão sob consulta"}</p>
                    <div className="mt-2 flex items-center gap-3 text-[12px] font-bold text-neutral-500">
                      {l.beds > 0 && <span className="flex items-center gap-1"><BedDouble className="h-4 w-4" /> {l.beds}</span>}
                      {l.baths > 0 && <span className="flex items-center gap-1"><Bath className="h-4 w-4" /> {l.baths}</span>}
                      {l.area >= 1000000 ? <span className="flex items-center gap-1"><Ruler className="h-4 w-4" /> {(l.area / 10000).toLocaleString("pt-MZ")} ha</span> : l.area > 0 ? <span className="flex items-center gap-1"><Ruler className="h-4 w-4" /> {l.area}m²</span> : null}
                    </div>
                    <div className="mt-3 flex items-end justify-between border-t border-black/5 pt-3">
                      <p><span className="tick font-display text-[22px] font-extrabold">{fmtMT(l.price)}</span><span className="text-[12px] font-bold text-neutral-400"> {l.per}</span></p>
                      <button onClick={() => setSel(l.id)} className="flex items-center gap-1.5 rounded-xl bg-black px-4 py-2.5 text-[13px] font-bold text-[#f6e27a]"><Eye className="h-3.5 w-3.5" /> Ver</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {list.length === 0 && <p className="mt-6 rounded-2xl bg-white p-6 text-center text-sm text-neutral-500">Sem resultados. <a className="font-bold underline" target="_blank" rel="noreferrer" href={waFlow(`Olá KEYHOUSE! Procuro: ${textoOu(q, "imóvel")} (${filter}/${deal})`, "busca")}>Pedir busca personalizada →</a></p>}
        </section>

        <KeyhouseReceitas />

        <KeyhouseTipos />

        <KeyhouseB2B />

        <KeyhouseProcuraSe />

        <KeyhouseCopy />

        <KeyhouseAntiFalir />

        <KeyhouseComissaoTurbo />

        <KeyhouseTeste100 />

        <MozBuildHero />

        <MozBuildEquipa />

        <MozBuildCiclo />

        <MozBuildModulos />

        <MozBuildServicos />

        <MozBuildSimulador />

        <MozBuildPiloto />

        {/* PUBLICAR EM 1 MIN */}
        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[28px] bg-[#0a0a0a] p-6 text-white sm:p-8">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#d4af37]">Donos · registe em 1 minuto</p>
            <h3 className="font-display mt-1 text-2xl font-extrabold">Tem terreno na praia, armazém, lodge ou premium parado?</h3>
            <div className="mt-4 space-y-2.5">
              <input value={pub.nome} onChange={e => setPub({ ...pub, nome: e.target.value })} placeholder="Seu nome" className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm outline-none focus:border-[#d4af37]" />
              <div className="grid grid-cols-2 gap-2.5">
                <select value={pub.tipo} onChange={e => setPub({ ...pub, tipo: e.target.value })} className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm outline-none focus:border-[#d4af37]">
                  {["Terreno Praia", "Terreno", "Armazém", "Estância Turística", "Premium/Executiva", "Duplex/Triplex", "Flat", "Casa", "Moradia", "Escritório", "Loja"].map(t => <option key={t} className="text-black">{t}</option>)}
                </select>
                <input value={pub.zona} onChange={e => setPub({ ...pub, zona: e.target.value })} placeholder="Zona (ex.: Polana)" className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm outline-none focus:border-[#d4af37]" />
              </div>
              <input value={pub.preco} onChange={e => setPub({ ...pub, preco: e.target.value })} placeholder="Preço MT (ex.: 45000/mês ou 5.2M venda)" inputMode="numeric" className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm outline-none focus:border-[#d4af37]" />
              <a href={waFlow(pubMsg, "dono")} target="_blank" rel="noreferrer" className="gold-bg flex items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-extrabold text-black">Registar imóvel agora <ArrowRight className="h-4 w-4" /></a>
              <p className="text-center text-[11px] text-white/40">Grátis para anunciar · 3–5% só quando fechar · fotos a seguir no chat</p>
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-[28px] border border-[#d4af37]/30 bg-gradient-to-br from-white to-[#fbf7e8] p-6 sm:p-8">
            <Stars />
            <p className="font-display mt-3 text-xl font-extrabold leading-snug">“Entreguei o armazém à KEYHOUSE numa segunda. Sexta já tinha 3 visitas e proposta. Não liguei para ninguém.”</p>
            <p className="mt-3 text-[13px] font-bold">Dono de armazém · Machava <span className="font-medium text-neutral-400">· taxa 5% só no fecho</span></p>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[12px] font-bold">
              {[["Código KH", "10 min"], ["Visita", "24h"], ["Parceiro pago", "48h"]].map(([a, b], i) => (
                <div key={i} className="rounded-2xl bg-white p-3 ring-1 ring-black/10"><p className="font-display text-lg font-extrabold">{b}</p><p className="text-neutral-500">{a}</p></div>
              ))}
            </div>
            <a href="https://joaquimeugeniomachava-maker.github.io/KEYHOUSE-MZ/" target="_blank" rel="noreferrer" className="mt-5 flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3.5 text-sm font-bold hover:shadow-md">Abrir KEYHOUSE original ↗</a>
          </div>
        </section>
      </div>

      {chosen && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center" onClick={() => setSel(null)}>
          <div className="anim-rise w-full max-w-lg overflow-hidden rounded-[28px] bg-white" onClick={e => e.stopPropagation()}>
            <div className="relative h-56">
              <img src={chosen.img} alt={chosen.type} className="h-full w-full object-cover" />
              <button onClick={() => setSel(null)} className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white">✕</button>
              <span className="absolute bottom-3 left-4 flex items-center gap-1.5 rounded-full bg-black/85 px-3 py-1.5 text-[12px] font-bold text-[#f6e27a]"><BadgeCheck className="h-3.5 w-3.5" /> {chosen.tag} · {chosen.id}</span>
            </div>
            <div className="p-6">
              <p className="font-display text-2xl font-extrabold">{chosen.type}</p>
              <p className="flex items-center gap-1 text-[13px] font-bold text-neutral-500"><MapPin className="h-4 w-4 text-[#b8941f]" /> {chosen.zone} · {chosen.owner}</p>
              <p className="mt-2 text-[14px] text-neutral-600">{chosen.desc}</p>
              {(chosen as any).beach || (chosen as any).access || (chosen as any).docs ? (
                <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-xl bg-sky-50 p-2.5 ring-1 ring-sky-100"><p className="text-[10px] font-extrabold uppercase text-sky-600">Praia</p><p className="text-[12px] font-extrabold">{(chosen as any).beach || "—"}</p></div>
                  <div className="rounded-xl bg-neutral-100 p-2.5"><p className="text-[10px] font-extrabold uppercase text-neutral-500">Acesso</p><p className="text-[12px] font-extrabold">{(chosen as any).access || "—"}</p></div>
                  <div className="rounded-xl bg-emerald-50 p-2.5 ring-1 ring-emerald-100"><p className="text-[10px] font-extrabold uppercase text-emerald-600">Docs</p><p className="text-[12px] font-extrabold">{(chosen as any).docs || "A confirmar"}</p></div>
                </div>
              ) : null}
              <p className="mt-3"><span className="tick font-display text-3xl font-extrabold">{chosen.price > 0 ? fmtMT(chosen.price) : "Sob consulta"}</span><span className="font-bold text-neutral-400"> {chosen.per}</span></p>
              <p className="mt-1 rounded-xl bg-[#d4af37]/10 p-2.5 text-[12px] font-bold text-[#8a6f16]">{chosen.per.startsWith("venda") ? `Taxa 5% = ${fmtMT(chosen.price * 0.05)} · paga pelo anunciante` : chosen.price > 0 ? `Arrendamento 10% do contrato (5% KH = ${fmtMT(chosen.price * 12 * 0.05)} em 12m) · pago 1 vez pelo senhorio` : "Comissão 5% venda / 10% arrendamento · sob consulta"} · sem custo extra para si</p>
              <div className="mt-3"><DesbloqueioContacto imovel={`${chosen.id} ${chosen.type}`} /></div>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                <a href={waFlow(`Olá KEYHOUSE! Quero VISITAR ${chosen.id} — ${chosen.type} em ${chosen.zone} (${fmtMT(chosen.price)}${chosen.per}). Nome + dia:`, "visita")} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3.5 text-sm font-extrabold text-white"><CalendarCheck className="h-4 w-4" /> Agendar visita 24h</a>
                <a href={waFlow(`Olá KEYHOUSE! Sou INTERMEDIÁRIO e tenho cliente para ${chosen.id}. Meu código:`, "parceiro")} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl bg-black px-5 py-3.5 text-sm font-extrabold text-[#f6e27a]"><Star className="h-4 w-4" /> Trazer cliente (3%)</a>
              </div>
              <p className="mt-3 rounded-xl bg-red-50 p-2.5 text-center text-[11px] font-bold leading-relaxed text-red-700 ring-1 ring-red-200">Anti-burla: nunca pague sinal antes de visitar. Visita é grátis. Só pague com recibo + contrato. Viu algo estranho?</p>
              <div className="mt-2 flex gap-2">
                <a href={waFlow(`Denúncia KEYHOUSE: anúncio suspeito ${chosen.id} ${chosen.type} em ${chosen.zone}. Motivo:`, "denuncia")} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border-2 border-red-200 bg-white px-3 py-2.5 text-[12px] font-extrabold text-red-700">Denunciar anúncio</a>
                <p className="flex flex-1 items-center justify-center rounded-xl bg-neutral-100 px-3 py-2.5 text-[11px] font-bold text-neutral-500">Contacto protegido · {COFRE.whatsappDisplay}</p>
              </div>
              <p className="mt-1.5 text-center text-[11px] text-neutral-400">M-Pesa oficial {COFRE.mpesa} · Nunca partilhe PIN</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
