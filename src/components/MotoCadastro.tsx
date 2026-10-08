import { useMemo, useState } from "react";
import {
  Users, Bike, UserCheck, Phone, MapPin, Hash, CheckCircle2,
  MessageCircle, ClipboardList, Sparkles, ChevronRight,
} from "lucide-react";
import { MOTO_NATIONAL } from "../data";
import {
  waFlow, textoOu, nomeValido, telefoneValido,
  matriculaValida, formatarMatricula, getCampaign,
} from "../lib/flow";
import { SectionKicker } from "./chrome";

type Tipo = "cliente" | "piloto";

const CLIENTES_KEY = "motomoz-clientes-v1";
const PILOTOS_KEY = "motomoz-pilotos-v1";

function lerLista(key: string): unknown[] {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    // Blindagem: se for "false"/"null"/número solto, não é lista → devolve []
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function guardar(key: string, item: unknown) {
  try {
    const arr = lerLista(key);
    arr.push(item);
    localStorage.setItem(key, JSON.stringify(arr.slice(-300)));
  } catch {
    /* sem storage — continua via WhatsApp */
  }
}

const inputCls =
  "w-full rounded-2xl border border-black/10 bg-neutral-50 px-4 py-4 text-[15px] outline-none transition focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/30 placeholder:text-neutral-400";

export default function MotoCadastro() {
  const [tipo, setTipo] = useState<Tipo>("cliente");

  // Cliente
  const [cNome, setCNome] = useState("");
  const [cTel, setCTel] = useState("");
  const [cZona, setCZona] = useState("");
  const [cDestino, setCDestino] = useState("");
  const [cErro, setCErro] = useState("");
  const [cOk, setCOk] = useState(false);

  // Piloto — como antes: nome ou nickname + matrícula da mota
  const [pNick, setPNick] = useState("");
  const [pTel, setPTel] = useState("");
  const [pMat, setPMat] = useState("");
  const [pMota, setPMota] = useState("");
  const [pZona, setPZona] = useState("Maputo");
  const [pCarta, setPCarta] = useState<"sim" | "nao">("sim");
  const [pErro, setPErro] = useState("");
  const [pOk, setPOk] = useState(false);

  const nClientes = useMemo(() => lerLista(CLIENTES_KEY).length, [cOk]);
  const nPilotos = useMemo(() => lerLista(PILOTOS_KEY).length, [pOk]);

  const registarCliente = () => {
    if (!nomeValido(cNome)) {
      setCErro("Escreva o seu nome — mínimo 2 letras.");
      setCOk(false);
      return;
    }
    if (!telefoneValido(cTel)) {
      setCErro("Número inválido — use 9 dígitos Vodacom/Movitel/Tmcel. Ex.: 84 123 4567.");
      setCOk(false);
      return;
    }
    if (!textoOu(cZona, "")) {
      setCErro("Diga o seu bairro/zona — ex.: Xiquelene, Beira, Nampula.");
      setCOk(false);
      return;
    }
    setCErro("");
    const origem = getCampaign();
    const registo = {
      nome: cNome.trim(),
      tel: cTel.trim(),
      zona: cZona.trim(),
      destino: cDestino.trim(),
      origem,
      data: new Date().toISOString(),
    };
    guardar(CLIENTES_KEY, registo);
    const msg =
      `Olá MOTOMOZ! SOU CLIENTE — registo novo.\n` +
      `Nome: ${registo.nome}\n` +
      `WhatsApp: ${registo.tel}\n` +
      `Zona: ${registo.zona}` +
      (registo.destino ? `\nDestino frequente: ${registo.destino}` : "");
    window.open(waFlow(msg, origem), "_blank");
    setCOk(true);
  };

  const registarPiloto = () => {
    if (!nomeValido(pNick)) {
      setPErro("Escreva nome ou nickname — ex.: Dércio ou Dex-Rápido.");
      setPOk(false);
      return;
    }
    if (!telefoneValido(pTel)) {
      setPErro("Número inválido — 9 dígitos. Ex.: 86 123 4567.");
      setPOk(false);
      return;
    }
    const matFmt = formatarMatricula(pMat);
    if (!matriculaValida(matFmt)) {
      setPErro("Matrícula inválida — formato MZ. Ex.: AEK-123-MP.");
      setPOk(false);
      return;
    }
    if (!textoOu(pMota, "")) {
      setPErro("Diga a mota — ex.: Honda CB 125F.");
      setPOk(false);
      return;
    }
    setPErro("");
    const origem = getCampaign();
    const registo = {
      nick: pNick.trim(),
      tel: pTel.trim(),
      matricula: matFmt,
      mota: pMota.trim(),
      zona: pZona,
      carta: pCarta === "sim" ? "Carta A OK" : "Sem carta A (formação)",
      origem,
      data: new Date().toISOString(),
    };
    guardar(PILOTOS_KEY, registo);
    const msg =
      `Olá MOTOMOZ! SOU PILOTO — cadastro novo.\n` +
      `Nome/Nickname: ${registo.nick}\n` +
      `WhatsApp: ${registo.tel}\n` +
      `Matrícula da mota: ${registo.matricula}\n` +
      `Mota: ${registo.mota}\n` +
      `Zona: ${registo.zona}\n` +
      `${registo.carta}`;
    window.open(waFlow(msg, origem), "_blank");
    setPOk(true);
  };

  return (
    <section aria-label="Cadastro MOTOMOZ — clientes e pilotos" className="overflow-hidden rounded-[28px] border border-black/10 bg-white card-shadow-sm">
      <div className="bg-[#0a0a0a] p-6 text-white sm:p-8">
        <SectionKicker dark>Cadastro · como dantes · simples</SectionKicker>
        <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
          Cliente ou piloto? <span className="gold-text">Regista em 30 seg.</span>
        </h2>
        <p className="mt-2 max-w-xl text-sm text-white/60">
          Sem conta, sem app, sem palavra estranha no ecrã. Escolhe o botão grande, preenche, toca verde.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-2" role="tablist" aria-label="Tipo de cadastro">
          <button
            role="tab" aria-selected={tipo === "cliente"} onClick={() => setTipo("cliente")}
            className={`flex min-h-[64px] items-center justify-center gap-2 rounded-2xl px-4 py-3 text-[15px] font-extrabold transition ${tipo === "cliente" ? "gold-bg text-black" : "bg-white/10 text-white/60 hover:bg-white/15"}`}
          >
            <Users className="h-5 w-5" /> Sou Cliente
          </button>
          <button
            role="tab" aria-selected={tipo === "piloto"} onClick={() => setTipo("piloto")}
            className={`flex min-h-[64px] items-center justify-center gap-2 rounded-2xl px-4 py-3 text-[15px] font-extrabold transition ${tipo === "piloto" ? "gold-bg text-black" : "bg-white/10 text-white/60 hover:bg-white/15"}`}
          >
            <Bike className="h-5 w-5" /> Sou Piloto
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {tipo === "cliente" ? (
          <div>
            <p className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-widest text-neutral-400">
              <ClipboardList className="h-4 w-4" /> Ficha do cliente · {nClientes > 0 ? `${nClientes} neste aparelho` : "seja o primeiro aqui"}
            </p>
            <div className="mt-3 grid gap-3">
              <div>
                <label htmlFor="cli-nome" className="mb-1 block text-[13px] font-bold">Nome completo *</label>
                <input id="cli-nome" value={cNome} onChange={e => { setCNome(e.target.value.slice(0, 60)); setCOk(false); }} placeholder="Ex.: Ana Machava" autoComplete="name" className={inputCls} />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="cli-tel" className="mb-1 block text-[13px] font-bold">WhatsApp *</label>
                  <input id="cli-tel" value={cTel} onChange={e => { setCTel(e.target.value.slice(0, 20)); setCOk(false); }} placeholder="84 123 4567" inputMode="tel" autoComplete="tel" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="cli-zona" className="mb-1 block text-[13px] font-bold">Bairro / Zona *</label>
                  <input id="cli-zona" value={cZona} onChange={e => { setCZona(e.target.value.slice(0, 60)); setCOk(false); }} placeholder="Ex.: Xiquelene, Beira" className={inputCls} />
                </div>
              </div>
              <div>
                <label htmlFor="cli-dest" className="mb-1 block text-[13px] font-bold">Destino frequente <span className="font-medium text-neutral-400">(opcional)</span></label>
                <input id="cli-dest" value={cDestino} onChange={e => setCDestino(e.target.value.slice(0, 60))} placeholder="Ex.: Baixa, escola, mercado" className={inputCls} />
              </div>
            </div>
            {cErro ? <p role="alert" className="mt-3 rounded-xl bg-red-50 px-4 py-3 text-[13px] font-bold text-red-700 ring-1 ring-red-200">{cErro}</p> : null}
            {cOk ? (
              <p role="status" className="mt-3 flex items-start gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-[13px] font-bold text-emerald-700 ring-1 ring-emerald-200">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> Registado com sucesso. O WhatsApp abriu — se não abriu, toca no botão outra vez.
              </p>
            ) : null}
            <button onClick={registarCliente} className="mt-4 flex min-h-[56px] w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-4 text-[15px] font-extrabold text-white transition hover:brightness-110">
              <MessageCircle className="h-5 w-5" /> Registar e pedir corrida
            </button>
            <p className="mt-2 text-center text-[11px] text-neutral-400">* obrigatório · Nada é cobrado · Dados ficam neste aparelho + WhatsApp</p>
          </div>
        ) : (
          <div>
            <p className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-widest text-neutral-400">
              <UserCheck className="h-4 w-4" /> Ficha do piloto · {nPilotos > 0 ? `${nPilotos} neste aparelho` : "vagas abertas"} · verificação 48h
            </p>
            <div className="mt-3 grid gap-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="pil-nick" className="mb-1 block text-[13px] font-bold">Nome ou nickname *</label>
                  <input id="pil-nick" value={pNick} onChange={e => { setPNick(e.target.value.slice(0, 40)); setPOk(false); }} placeholder="Ex.: Dércio ou Dex-Rápido" autoComplete="nickname" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="pil-tel" className="mb-1 block text-[13px] font-bold">WhatsApp *</label>
                  <input id="pil-tel" value={pTel} onChange={e => { setPTel(e.target.value.slice(0, 20)); setPOk(false); }} placeholder="86 123 4567" inputMode="tel" autoComplete="tel" className={inputCls} />
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="pil-mat" className="mb-1 flex items-center gap-1.5 text-[13px] font-bold"><Hash className="h-3.5 w-3.5" /> Matrícula da mota *</label>
                  <input
                    id="pil-mat" value={pMat}
                    onChange={e => { setPMat(e.target.value.toUpperCase().slice(0, 12)); setPOk(false); }}
                    placeholder="Ex.: AEK-123-MP" autoComplete="off" spellCheck={false}
                    className={`${inputCls} font-mono font-bold uppercase tracking-wider`}
                  />
                  <p className="mt-1 text-[11px] text-neutral-400">Formato MZ: 2–3 letras, números, 2 letras. Ex.: AEK-123-MP</p>
                </div>
                <div>
                  <label htmlFor="pil-mota" className="mb-1 block text-[13px] font-bold">Marca / Modelo *</label>
                  <input id="pil-mota" value={pMota} onChange={e => { setPMota(e.target.value.slice(0, 40)); setPOk(false); }} placeholder="Ex.: Honda CB 125F" className={inputCls} />
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="pil-zona" className="mb-1 flex items-center gap-1.5 text-[13px] font-bold"><MapPin className="h-3.5 w-3.5" /> Zona de operação *</label>
                  <select id="pil-zona" value={pZona} onChange={e => setPZona(e.target.value)} className={inputCls}>
                    {MOTO_NATIONAL.map(p => (
                      <option key={p.id} value={p.capital}>{p.capital} · {p.provincia}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <span className="mb-1 block text-[13px] font-bold">Carta A? *</span>
                  <div className="grid grid-cols-2 gap-2" role="group" aria-label="Tem carta A">
                    {(["sim", "nao"] as const).map(v => (
                      <button key={v} onClick={() => setPCarta(v)} aria-pressed={pCarta === v}
                        className={`min-h-[52px] rounded-2xl border-2 text-[14px] font-extrabold ${pCarta === v ? "border-black bg-black text-white" : "border-black/10 bg-neutral-50 text-neutral-500"}`}>
                        {v === "sim" ? "Sim, tenho" : "Ainda não"}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 rounded-2xl bg-[#fbf7e8] p-3.5 text-[12.5px] text-[#5b4a08] ring-1 ring-[#d4af37]/30">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0" />
                Sem taxa de entrada · Seguro incluído · Formação 1 dia · Bónus 1.000 MT após 100 corridas.
              </div>
            </div>
            {pErro ? <p role="alert" className="mt-3 rounded-xl bg-red-50 px-4 py-3 text-[13px] font-bold text-red-700 ring-1 ring-red-200">{pErro}</p> : null}
            {pOk ? (
              <p role="status" className="mt-3 flex items-start gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-[13px] font-bold text-emerald-700 ring-1 ring-emerald-200">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> Cadastro enviado. O WhatsApp abriu com a tua matrícula — responde em 48h.
              </p>
            ) : null}
            <button onClick={registarPiloto} className="gold-bg mt-4 flex min-h-[56px] w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-[15px] font-extrabold text-black transition hover:brightness-110">
              <Bike className="h-5 w-5" /> Cadastrar mota e ser piloto
            </button>
            <p className="mt-2 text-center text-[11px] text-neutral-400">Requisitos: carta A · livrete · capacete extra · registo criminal (verificação 48h)</p>
          </div>
        )}

        <div className="mt-5 flex items-center justify-between rounded-2xl bg-neutral-50 px-4 py-3 text-[12px] font-bold text-neutral-500 ring-1 ring-black/5">
          <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> Dúvida? Fala connosco</span>
          <a href={waFlow("Olá MOTOMOZ! Preciso de ajuda no cadastro.", "cadastro")} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[#075E54] hover:underline">
            Ajuda no WhatsApp <ChevronRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
