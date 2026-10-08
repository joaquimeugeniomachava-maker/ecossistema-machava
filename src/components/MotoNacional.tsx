import { useState } from "react";
import {
  MapPin, Navigation, Siren, Share2, ReceiptText, Gift,
  ChevronRight, MessageCircle, PhoneCall, Bike, Check,
} from "lucide-react";
import { MOTO_NATIONAL, MOTO_QUICK } from "../data";
import { waFlow } from "../lib/flow";
import { txt } from "../lib/safe";
import { SectionKicker } from "./chrome";

// ─── 1 · MAPA ROVUMA → MAPUTO · 3 toques ─────────────────────────
export function RovumaMaputo() {
  const [selId, setSelId] = useState("cidade-maputo");
  const sel = MOTO_NATIONAL.find((p) => p.id === selId) ?? MOTO_NATIONAL[MOTO_NATIONAL.length - 1];

  const statusStyle = (s: string) =>
    s === "Activo"
      ? "bg-emerald-400/15 text-emerald-300 ring-emerald-400/30"
      : s === "Piloto"
        ? "bg-amber-400/15 text-amber-300 ring-amber-400/30"
        : "bg-white/10 text-white/50 ring-white/15";

  return (
    <section aria-label="Cobertura nacional Rovuma ao Maputo" className="overflow-hidden rounded-[28px] bg-[#0a0a0a] text-white ring-1 ring-[#d4af37]/40 card-shadow">
      <div className="p-6 sm:p-9">
        <SectionKicker dark>Rovuma → Maputo · cobertura nacional</SectionKicker>
        <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
          Onde está? <span className="gold-text">Tocou, pediu, chegou.</span>
        </h2>
        <p className="mt-2 max-w-xl text-sm text-white/60">
          De Pemba a Maputo. Escolha a província — o preço base e o botão já vêm prontos. Sem mapa complicado, sem conta.
        </p>

        {/* Linha Norte → Sul */}
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="mb-2 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-white/40">
              <span className="h-2 w-2 rounded-full bg-sky-400" /> Norte · Rovuma — topo
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2" role="listbox" aria-label="Escolha a província">
              {MOTO_NATIONAL.map((p) => {
                const active = p.id === selId;
                return (
                  <button
                    key={p.id}
                    role="option"
                    aria-selected={active}
                    onClick={() => setSelId(p.id)}
                    className={`flex min-h-[56px] items-center justify-between gap-2 rounded-2xl border px-4 py-3 text-left transition ${
                      active
                        ? "border-[#d4af37] bg-[#d4af37]/15 shadow-lg"
                        : "border-white/10 bg-white/5 hover:border-white/30"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <MapPin className={`h-4 w-4 shrink-0 ${active ? "text-[#f6e27a]" : "text-white/40"}`} />
                      <span>
                        <span className="block text-[13px] font-extrabold leading-tight">{p.provincia}</span>
                        <span className="block text-[11px] text-white/50">{p.capital} · {p.zona}</span>
                      </span>
                    </span>
                    <span className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide ring-1 ${statusStyle(p.status)}`}>
                      {p.status}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-2 flex items-center gap-2 text-[11px] text-white/40">
              <span className="h-2 w-2 rounded-full bg-[#d4af37]" /> Sul · Maputo — base
            </p>
          </div>

          {/* Cartão da província — sempre visível, 1 ação */}
          <div className="flex flex-col justify-center rounded-3xl bg-white/[.06] p-6 ring-1 ring-white/10">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#e3c25c]">{sel.zona}</p>
            <h3 className="font-display mt-1 text-2xl font-extrabold">{sel.provincia}</h3>
            <p className="text-[13px] text-white/60">Capital: <b className="text-white">{sel.capital}</b></p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-2xl bg-black/40 p-3 ring-1 ring-white/10">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-white/40">Base</p>
                <p className="tick font-display text-xl font-extrabold text-[#f6e27a]">{sel.base} MT</p>
              </div>
              <div className="rounded-2xl bg-black/40 p-3 ring-1 ring-white/10">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-white/40">Chegada</p>
                <p className="text-[13px] font-extrabold">{sel.eta}</p>
              </div>
              <div className="rounded-2xl bg-black/40 p-3 ring-1 ring-white/10">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-white/40">Pilotos</p>
                <p className="tick text-[13px] font-extrabold">{sel.pilotos > 0 ? `${sel.pilotos}+` : "—"}</p>
              </div>
            </div>
            {sel.status === "A abrir" ? (
              <div className="mt-4">
                <a
                  href={waFlow(`Olá MOTOMOZ! Quero ser PILOTO pioneiro em ${sel.capital} (${sel.provincia}). Tenho carta A e mota. Nome:`, "nacional")}
                  target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#d4af37]/60 bg-transparent px-5 py-4 text-sm font-extrabold text-[#f6e27a] transition hover:bg-[#d4af37]/10"
                >
                  <Bike className="h-5 w-5" /> Ser pioneiro em {sel.capital}
                </a>
                <p className="mt-2 text-center text-[11px] text-white/40">Ainda sem frota aqui — pioneiros entram sem taxa + bónus fundador.</p>
              </div>
            ) : (
              <div className="mt-4 space-y-2">
                <a
                  href={waFlow(`Olá MOTOMOZ! Estou em ${sel.capital} (${sel.provincia}). Quero uma CORRIDA agora. Base ${sel.base} MT. A minha localização é:`, "nacional")}
                  target="_blank" rel="noreferrer"
                  className="gold-bg flex items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-extrabold text-black transition hover:brightness-110"
                >
                  <Navigation className="h-5 w-5" /> Pedir em {sel.capital} · {sel.base} MT+
                </a>
                <a
                  href={waFlow(`Olá MOTOMOZ! Quero ser PILOTO em ${sel.capital} (${sel.provincia}). Nome:`, "nacional")}
                  target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-1 text-[12px] font-bold text-white/60 hover:text-white"
                >
                  Quero pilotar aqui <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2 · PEDIDO INTUITIVO · nem precisa saber km ────────────────
export function PedidoIntuitivo() {
  const [provId, setProvId] = useState("cidade-maputo");
  const [tipoId, setTipoId] = useState("media");
  const [nome, setNome] = useState("");
  const prov = MOTO_NATIONAL.find((p) => p.id === provId)!;
  const tipo = MOTO_QUICK.find((t) => t.id === tipoId)!;
  const total = tipo.price + 5; // + taxa 5 MT
  const nomeOk = txt(nome).length > 0;

  const pedir = waFlow(
    `Olá MOTOMOZ! PEDIDO RÁPIDO — ${tipo.nome} (${tipo.desc}) em ${prov.capital}. Estimado ${total} MT. Nome: ${nomeOk ? nome.trim() : "(vou dizer já)"}. Localização:`,
    "rapido"
  );

  return (
    <section aria-label="Pedido rápido em 3 toques" className="rounded-[28px] border border-black/10 bg-white p-6 card-shadow-sm sm:p-9">
      <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#8a6f16]">Intuitivo · 3 toques · sem km</p>
      <h2 className="font-display mt-1 text-2xl font-extrabold sm:text-3xl">Não sabe km? <span className="gold-text">Não precisa.</span></h2>

      <p className="mt-4 text-[12px] font-extrabold uppercase tracking-widest text-neutral-400">1 · Onde está?</p>
      <select
        value={provId}
        onChange={(e) => setProvId(e.target.value)}
        aria-label="Escolha a cidade"
        className="mt-2 w-full rounded-2xl border border-black/10 bg-neutral-50 px-4 py-4 text-[15px] font-bold outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/30"
      >
        {MOTO_NATIONAL.map((p) => (
          <option key={p.id} value={p.id}>{p.capital} · {p.provincia} {p.status !== "Activo" && p.status !== "Piloto" ? "(em breve)" : ""}</option>
        ))}
      </select>

      <p className="mt-5 text-[12px] font-extrabold uppercase tracking-widest text-neutral-400">2 · Qual distância?</p>
      <div className="mt-2 grid grid-cols-3 gap-2" role="group" aria-label="Tamanho da corrida">
        {MOTO_QUICK.map((t) => (
          <button
            key={t.id}
            onClick={() => setTipoId(t.id)}
            aria-pressed={tipoId === t.id}
            className={`min-h-[76px] rounded-2xl border-2 px-2 py-3 text-center transition ${
              tipoId === t.id ? "border-black bg-black text-white shadow-lg" : "border-black/10 bg-neutral-50 hover:border-black/30"
            }`}
          >
            <span className={`block font-display text-[16px] font-extrabold ${tipoId === t.id ? "text-[#f6e27a]" : ""}`}>{t.nome}</span>
            <span className={`block text-[11px] font-semibold ${tipoId === t.id ? "text-white/70" : "text-neutral-500"}`}>{t.desc}</span>
            <span className={`tick block text-[13px] font-extrabold ${tipoId === t.id ? "text-white" : ""}`}>{t.price + 5} MT</span>
          </button>
        ))}
      </div>
      <p className="mt-2 text-center text-[12px] text-neutral-400">Ex.: {tipo.ex} · já com taxa 5 MT incluída</p>

      <p className="mt-5 text-[12px] font-extrabold uppercase tracking-widest text-neutral-400">3 · Quem é? (opcional)</p>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value.slice(0, 40))}
        placeholder="Seu nome — pode deixar vazio"
        aria-label="Seu nome, opcional"
        className="mt-2 w-full rounded-2xl border border-black/10 bg-neutral-50 px-4 py-4 text-[15px] outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/30"
      />

      <div className="mt-4 flex items-center justify-between rounded-2xl bg-[#0a0a0a] p-4 text-white">
        <span className="text-[13px] font-bold text-white/60">{tipo.nome} em {prov.capital}</span>
        <span className="tick font-display text-3xl font-extrabold text-[#f6e27a]">{total} <span className="text-sm">MT</span></span>
      </div>
      <a
        href={pedir}
        target="_blank" rel="noreferrer"
        className="mt-3 flex min-h-[56px] items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-4 text-[15px] font-extrabold text-white transition hover:brightness-110"
      >
        <MessageCircle className="h-5 w-5" /> Pedir {tipo.nome} agora
      </a>
      {nomeOk ? null : <p className="mt-2 text-center text-[11px] text-neutral-400">Sem nome? Sem problema — diga no WhatsApp. O botão nunca falha.</p>}
    </section>
  );
}

// ─── 3 · BÓNUS LIMPOS · 1 toque cada ────────────────────────────
export function BonusLimpos() {
  const [copiado, setCopiado] = useState(false);

  const partilhar = async () => {
    const texto = "Estou numa MOTOMOZ 🛵 Acompanhem-me — chego em ~10 min. Piloto verificado, capacete extra. MOTOMOZ Rovuma→Maputo: wa.me/258844898420";
    try {
      const nav = navigator as Navigator & { share?: (d: { title: string; text: string }) => Promise<void> };
      if (nav.share) {
        await nav.share({ title: "MOTOMOZ · Estou a caminho", text: texto });
        return;
      }
      await navigator.clipboard.writeText(texto);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    } catch {
      window.open(waFlow(texto, "partilha"), "_blank");
    }
  };

  const bonus = [
    {
      icon: <Siren className="h-6 w-6" />,
      bg: "bg-red-600",
      t: "SOS · 1 toque",
      d: "Emergência na viagem? Abre WhatsApp com texto pronto + ligue já.",
      acao: (
        <div className="grid grid-cols-2 gap-2">
          <a href={waFlow("🆘 SOS MOTOMOZ! Preciso de ajuda AGORA. Estou em: (envio localização a seguir). Nome:", "sos")} target="_blank" rel="noreferrer" className="flex min-h-[48px] items-center justify-center gap-1.5 rounded-xl bg-red-600 px-3 py-3 text-[13px] font-extrabold text-white">
            <MessageCircle className="h-4 w-4" /> SOS WA
          </a>
          <a href="tel:+258844898420" className="flex min-h-[48px] items-center justify-center gap-1.5 rounded-xl border-2 border-red-200 bg-red-50 px-3 py-3 text-[13px] font-extrabold text-red-700">
            <PhoneCall className="h-4 w-4" /> Ligar
          </a>
        </div>
      ),
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      bg: "bg-sky-600",
      t: "Partilhar viagem",
      d: "Avise família: 'estou a caminho'. 1 toque, sem app.",
      acao: (
        <button onClick={partilhar} className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-3 py-3 text-[13px] font-extrabold text-white">
          {copiado ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />} {copiado ? "Copiado! Cole onde quiser" : "Avisar família agora"}
        </button>
      ),
    },
    {
      icon: <ReceiptText className="h-6 w-6" />,
      bg: "bg-emerald-600",
      t: "Recibo imediato",
      d: "Precisa declarar? Recibo + NUIT no WhatsApp em minutos.",
      acao: (
        <a href={waFlow("Olá MOTOMOZ! Preciso do RECIBO da minha última corrida. Data/hora aproximada:", "recibo")} target="_blank" rel="noreferrer" className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-3 py-3 text-[13px] font-extrabold text-white">
          <ReceiptText className="h-4 w-4" /> Pedir recibo
        </a>
      ),
    },
    {
      icon: <Gift className="h-6 w-6" />,
      bg: "bg-[#b8941f]",
      t: "Traz 2, ganha 10%",
      d: "Mande o link a 2 amigos + print = 10% na próxima.",
      acao: (
        <a href={waFlow("Olá! Anda de MOTOMOZ comigo 🛵 Preço fechado, capacete extra. Pede aqui:", "boca")} target="_blank" rel="noreferrer" className="gold-bg flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl px-3 py-3 text-[13px] font-extrabold text-black">
          <Gift className="h-4 w-4" /> Convidar e ganhar
        </a>
      ),
    },
  ];

  return (
    <section aria-label="Bónus limpos" className="rounded-[28px] border border-[#d4af37]/30 bg-gradient-to-br from-white to-[#fbf7e8] p-6 sm:p-9">
      <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#8a6f16]">Bónus limpos · sem complicação</p>
      <h2 className="font-display mt-1 text-2xl font-extrabold sm:text-3xl">4 botões que <span className="gold-text">cuidam de si.</span></h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {bonus.map((b, i) => (
          <div key={i} className="flex flex-col rounded-3xl border border-black/10 bg-white p-5 shadow-sm">
            <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white ${b.bg}`}>{b.icon}</span>
            <p className="font-display mt-3 text-[16px] font-extrabold">{b.t}</p>
            <p className="mt-1 flex-1 text-[12.5px] leading-relaxed text-neutral-500">{b.d}</p>
            <div className="mt-3">{b.acao}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
