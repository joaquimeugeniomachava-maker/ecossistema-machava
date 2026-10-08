import { useState } from "react";
import { ShieldCheck, Copy, Check, MessageCircle, Lock, FileWarning, BadgeCheck, ServerCog } from "lucide-react";
import { PAGAMENTO, PACOTES, gerarPedidoId, waPedido, msgComprovativo, txIdValido, type PacoteID } from "../lib/payments";
import { waFlow } from "../lib/flow";

export default function PagamentoSeguro() {
  const [pacote, setPacote] = useState<PacoteID>("prof");
  const [pedidoId, setPedidoId] = useState(() => gerarPedidoId());
  const [canal, setCanal] = useState("M-Pesa 84 489 8420");
  const [txId, setTxId] = useState("");
  const [copiado, setCopiado] = useState("");
  const [etapa, setEtapa] = useState(1);

  const copiar = async (t: string, id: string) => {
    try { await navigator.clipboard.writeText(t); setCopiado(id); setTimeout(() => setCopiado(""), 2000); } catch { /* sem clipboard */ }
  };

  const novoPedido = () => {
    setPedidoId(gerarPedidoId());
    setTxId("");
    setEtapa(1);
  };

  const txOk = txIdValido(txId);
  const linkPedido = waPedido(pedidoId, pacote);
  const linkComprovativo = `https://wa.me/258844898420?text=${encodeURIComponent(msgComprovativo(pedidoId, txId.trim(), canal))}%0A%0A[origem: cvpro-pago]`;

  const passos = [
    { n: 1, t: "Gera ID do pedido", d: "Carrega em \"Novo pedido\". Guarda o código. Ele vai em tudo." },
    { n: 2, t: "Pede no WhatsApp", d: "Abre conversa já com ID + pacote. Manda dados + vaga." },
    { n: 3, t: "Recebe PRÉVIA com marca", d: "Só imagem/PDF com \"PRÉVIA NÃO PAGA\". Nunca o ficheiro limpo." },
    { n: 4, t: "Paga + envia ID", d: `M-Pesa ${PAGAMENTO.mpesa} · e-Mola ${PAGAMENTO.emola} · Titular ${PAGAMENTO.titular}. Envia o ID da transação.` },
    { n: 5, t: "Confirmamos no extrato", d: "Só após bater no extrato enviamos PDF limpo + DOCX. Sem exceção." },
  ];

  return (
    <section aria-label="Pagamento seguro CV-MAKER" className="overflow-hidden rounded-[28px] border-2 border-emerald-900/15 bg-white">
      <div className="bg-[#0B2E1F] p-6 text-white sm:p-8">
        <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-emerald-300">
          <ShieldCheck className="h-4 w-4" /> Pagamento seguro · sem fugas · sem burla
        </p>
        <h3 className="font-display mt-1 text-2xl font-extrabold sm:text-3xl">Paga certo, recebe limpo. <span className="text-emerald-300">Nem antes, nem sem prova.</span></h3>
        <p className="mt-2 max-w-2xl text-[13.5px] text-white/65">
          Arquivo final <b className="text-white">nunca</b> fica no site. Primeiro recebes prévia com marca de água.
          Só depois do ID confirmado no extrato libertamos o PDF limpo. Diáspora paga via PayPal (link no WhatsApp).
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-[12px] font-bold">
          <span className="rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15">M-Pesa {PAGAMENTO.mpesa}</span>
          <span className="rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15">e-Mola {PAGAMENTO.emola}</span>
          <span className="rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15">PayPal diáspora $</span>
          <span className="rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15">Titular: {PAGAMENTO.titular}</span>
        </div>
      </div>

      <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-400">Os 5 passos (segue por ordem)</p>
          <ol className="mt-3 space-y-2">
            {passos.map((p) => (
              <li key={p.n}>
                <button onClick={() => setEtapa(p.n)} aria-current={etapa === p.n ? "step" : undefined}
                  className={`flex w-full items-start gap-3 rounded-2xl border p-3.5 text-left transition ${etapa === p.n ? "border-emerald-600 bg-emerald-50/60 shadow-sm" : "border-black/10 hover:border-black/25"}`}>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-[14px] font-extrabold ${etapa === p.n ? "bg-emerald-600 text-white" : "bg-neutral-200 text-neutral-600"}`}>{p.n}</span>
                  <span><b className="block text-[14px]">{p.t}</b><span className="text-[12.5px] text-neutral-500">{p.d}</span></span>
                </button>
              </li>
            ))}
          </ol>
          <div className="mt-3 rounded-2xl bg-amber-50 p-3.5 text-[12.5px] leading-relaxed text-amber-900 ring-1 ring-amber-200">
            <b>Nunca partilhes PIN.</b> Ninguém do Ecossistema pede PIN, código secreto ou acesso à tua conta. Só o ID da transação depois de pagares tu.
          </div>
        </div>

        <div className="rounded-3xl bg-neutral-50 p-5 ring-1 ring-black/5 sm:p-6">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-400">Gerador de pedido (toca e usa)</p>
          <div className="mt-2 flex items-center justify-between gap-2 rounded-2xl bg-black p-3.5 text-white">
            <span><span className="block text-[10px] font-bold uppercase tracking-widest text-white/50">ID do pedido</span><span className="tick font-mono text-[17px] font-extrabold text-[#f6e27a]">{pedidoId}</span></span>
            <div className="flex gap-1.5">
              <button onClick={() => copiar(pedidoId, "id")} className="rounded-xl bg-white/10 px-3.5 py-2.5 text-[12px] font-bold hover:bg-white/20">
                {copiado === "id" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
              <button onClick={novoPedido} className="rounded-xl bg-white/10 px-3.5 py-2.5 text-[12px] font-bold hover:bg-white/20">Novo</button>
            </div>
          </div>

          <p className="mb-1.5 mt-4 text-[12px] font-extrabold uppercase tracking-widest text-neutral-500">Pacote</p>
          <div className="grid grid-cols-2 gap-1.5">
            {(Object.keys(PACOTES) as PacoteID[]).map((id) => (
              <button key={id} onClick={() => setPacote(id)} aria-pressed={pacote === id}
                className={`rounded-xl border-2 px-3 py-2.5 text-left ${pacote === id ? "border-emerald-600 bg-white shadow-sm" : "border-black/10 bg-white/60"}`}>
                <span className="block text-[12.5px] font-extrabold">{PACOTES[id].nome}</span>
                <span className="tick text-[13px] font-extrabold text-emerald-700">{PACOTES[id].preco} {PACOTES[id].moeda}</span>
              </button>
            ))}
          </div>

          <a href={linkPedido} target="_blank" rel="noreferrer" className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-4 text-sm font-extrabold text-white hover:brightness-110">
            <MessageCircle className="h-4 w-4" /> Passo 2 · Pedir {PACOTES[pacote].nome} ({pedidoId})
          </a>

          <div className="mt-4 border-t border-dashed border-black/10 pt-4">
            <p className="text-[12px] font-extrabold uppercase tracking-widest text-neutral-500">Passo 4 · Enviar comprovativo</p>
            <div className="mt-2 grid grid-cols-3 gap-1.5" role="group" aria-label="Canal de pagamento">
              {[`M-Pesa ${PAGAMENTO.mpesa}`, `e-Mola ${PAGAMENTO.emola}`, "PayPal USD"].map((c) => (
                <button key={c} onClick={() => setCanal(c)} aria-pressed={canal === c}
                  className={`rounded-xl px-2 py-2.5 text-[11.5px] font-extrabold ${canal === c ? "bg-black text-white" : "bg-white ring-1 ring-black/10"}`}>{c}</button>
              ))}
            </div>
            <label htmlFor="txid" className="mb-1 mt-3 block text-[12px] font-bold">ID da transação * (do SMS/recibo, não o print)</label>
            <input id="txid" value={txId} onChange={(e) => setTxId(e.target.value.slice(0, 20))} placeholder="Ex.: PP240107.1234.A12345" autoComplete="off" spellCheck={false}
              className={`w-full rounded-2xl border-2 bg-white px-4 py-3.5 font-mono text-[14px] font-bold outline-none ${txId.length > 0 ? (txOk ? "border-emerald-500" : "border-red-400") : "border-black/10"}`} />
            {txId.length > 0 && !txOk ? <p className="mt-1.5 text-[12px] font-bold text-red-600">ID curto demais — copia do SMS do M-Pesa/e-Mola (6–20 letras/números).</p> : null}
            {txOk ? (
              <a href={linkComprovativo} target="_blank" rel="noreferrer" className="mt-2.5 flex items-center justify-center gap-2 rounded-2xl bg-black px-5 py-3.5 text-sm font-extrabold text-white">
                <BadgeCheck className="h-4 w-4 text-emerald-300" /> Enviar comprovativo {pedidoId}
              </a>
            ) : (
              <p className="mt-2.5 rounded-2xl bg-neutral-100 px-4 py-3 text-center text-[12.5px] font-bold text-neutral-400">
                <Lock className="mr-1 inline h-3.5 w-3.5" /> Escreve o ID válido para libertar o botão
              </p>
            )}
            <p className="mt-2 flex items-start gap-1.5 text-[11.5px] text-neutral-400"><FileWarning className="mt-0.5 h-3.5 w-3.5 shrink-0" /> Print sozinho não vale. Confirmamos o ID no extrato. Se não bater, não enviamos o limpo. Sem exceção.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-black/5 bg-neutral-50 px-6 py-4 sm:flex-row sm:items-center sm:p-6">
        <p className="flex flex-1 items-center gap-2 text-[12px] text-neutral-500"><ServerCog className="h-4 w-4 shrink-0" /> Hoje: validação manual no extrato (seguro, sem pressa). Amanhã: ZumboPay com webhook HMAC liberta o download sozinho. Ficheiro final nunca no site.</p>
        <a href={waFlow("Olá! Dúvida sobre pagamento seguro / PayPal / número virtual. Pedido:", "ajuda-pagamento")} target="_blank" rel="noreferrer" className="shrink-0 rounded-xl border border-black/10 bg-white px-4 py-2.5 text-[12.5px] font-bold hover:shadow-sm">Ajuda com pagamento</a>
      </div>
    </section>
  );
}
