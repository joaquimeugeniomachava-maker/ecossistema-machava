import { useState } from "react";
import { Send, CheckCircle2, User, Phone, MessageSquare } from "lucide-react";
import { PROJECTS_META } from "../data";
import { waFlow, saveLead, getCampaign } from "../lib/flow";
import { txt } from "../lib/safe";

export default function LeadCapture({ compact = false }: { compact?: boolean }) {
  const [nome, setNome] = useState("");
  const [contacto, setContacto] = useState("");
  const [interesse, setInteresse] = useState("motomoz");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const [ok, setOk] = useState(false);

  const enviar = () => {
    const n = nome.trim();
    const c = contacto.trim();
    if (n.length < 2) {
      setErro("Escreva o seu nome (mín. 2 letras).");
      return;
    }
    if (c.replace(/\D/g, "").length < 9) {
      setErro("Número incompleto — ex.: 84 123 4567.");
      return;
    }
    setErro("");
    const origem = getCampaign();
    const meta = PROJECTS_META.find((p) => p.id === interesse);
    const nomeProjeto = txt(meta?.nome, "Ecossistema Machava");
    const promessa = txt(meta?.promessa, "atendimento geral");
    const msgExtra = txt(mensagem, "");
    saveLead({ nome: n, contacto: c, interesse: interesse as never, mensagem: msgExtra, origem, data: new Date().toISOString() });
    const texto = `Olá ${nomeProjeto}! Sou ${n} (${c}). ` + (msgExtra ? `${msgExtra} ` : `Quero: ${promessa} `);
    window.open(waFlow(texto, origem), "_blank");
    setOk(true);
    setTimeout(() => setOk(false), 6000);
  };

  const input =
    "w-full rounded-2xl border border-black/10 bg-neutral-50 px-4 py-3 pl-11 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-[#d4af37]/40";

  return (
    <div className={`rounded-[28px] border border-black/10 bg-white p-6 shadow-sm sm:p-8 ${compact ? "" : ""}`}>
      <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-500">
        Captura em 20 segundos · sem conta · sem app
      </p>
      <h3 className="font-display mt-1 text-2xl font-extrabold tracking-tight">
        Deixe o seu contacto<span className="gold-text">.</span> Nós ligamos.
      </h3>
      <p className="mt-1 text-[13px] text-neutral-500">
        Guarda no seu aparelho + abre o WhatsApp com tudo preenchido. Fluxo automático dia e noite.
      </p>

      <div className="mt-5 grid gap-3">
        <div className="relative">
          <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" aria-hidden="true" />
          <input value={nome} onChange={(e) => setNome(e.target.value.slice(0, 60))} maxLength={60}
            placeholder="Seu nome — ex.: Ana Machava" aria-label="Seu nome" className={input} />
        </div>
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" aria-hidden="true" />
          <input value={contacto} onChange={(e) => setContacto(e.target.value.slice(0, 20))} maxLength={20}
            placeholder="Seu WhatsApp — ex.: 84 123 4567" aria-label="Seu WhatsApp" inputMode="tel" className={input} />
        </div>
        <div className="grid grid-cols-2 gap-2" role="group" aria-label="Escolha o interesse">
          {PROJECTS_META.map((p) => (
            <button key={p.id} onClick={() => setInteresse(p.id)} aria-pressed={interesse === p.id}
              className={`flex items-center gap-2 rounded-2xl border px-3 py-2.5 text-left text-[12.5px] font-bold transition ${
                interesse === p.id ? "border-black bg-black text-white" : "border-black/10 bg-neutral-50 hover:border-black/30"
              }`}>
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: p.accent }} aria-hidden="true" />
              <span className="leading-tight">{p.nome}<br /><span className="text-[10.5px] font-medium opacity-70">{p.cta}</span></span>
            </button>
          ))}
        </div>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-neutral-400" aria-hidden="true" />
          <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value.slice(0, 300))} maxLength={300} rows={2}
            placeholder="Opcional: zona, orçamento, urgência… (máx. 300)" aria-label="Mensagem opcional" className={input} style={{ paddingTop: 12 }} />
        </div>
        {erro.length > 0 ? <p role="alert" className="rounded-xl bg-red-50 px-4 py-2.5 text-[13px] font-bold text-red-700 ring-1 ring-red-200">{erro}</p> : null}
        {ok ? <p role="status" className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-2.5 text-[13px] font-bold text-emerald-700 ring-1 ring-emerald-200"><CheckCircle2 className="h-4 w-4" aria-hidden="true" /> Aberto no WhatsApp ✓ Se não abriu, toque de novo.</p> : null}
        <button onClick={enviar} className="flex items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 text-sm font-extrabold text-white transition hover:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-[#b8941f]">
          <Send className="h-4 w-4 text-[#f6e27a]" aria-hidden="true" /> Enviar no WhatsApp agora
        </button>
        <p className="text-center text-[11px] text-neutral-400">Ao enviar abre o WhatsApp. Nada é cobrado. Os seus dados ficam neste aparelho.</p>
      </div>
    </div>
  );
}
