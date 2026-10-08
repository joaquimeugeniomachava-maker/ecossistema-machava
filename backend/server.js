// BACKEND EXEMPLO · Ecossistema Machava · Validação segura ZumboPay
// Node.js + Express. O ficheiro final NUNCA no frontend.
// Começa em modo MANUAL (extrato). Liga isto quando tiveres conta ZumboPay.
//
// 1) npm init -y && npm i express dotenv
// 2) cp .env.example .env  (preenche sem partilhar)
// 3) node server.js
//
// NUNCA commites .env. Só .env.example.

import express from "express";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// IMPORTANTE: precisamos do corpo BRUTO para verificar HMAC.
// Por isso usamos express.raw() SÓ nesta rota.
app.post("/webhooks/zumbopay", express.raw({ type: "*/*" }), (req, res) => {
  try {
    const secret = process.env.ZUMBOPAY_WEBHOOK_SECRET || "";
    if (!secret) {
      console.error("Falta ZUMBOPAY_WEBHOOK_SECRET no .env");
      return res.status(500).send("config em falta");
    }

    // Header oficial ZumboPay (ver docs da tua conta)
    const assinatura = req.headers["x-zumbopay-signature"] || "";
    if (!assinatura) return res.status(401).send("sem assinatura");

    // HMAC-SHA256 do corpo bruto com o secret
    const esperado = crypto.createHmac("sha256", secret).update(req.body).digest("hex");

    // Comparação segura contra timing-attack (hash_equals do PHP = timingSafeEqual)
    const a = Buffer.from(String(assinatura), "utf8");
    const b = Buffer.from(esperado, "utf8");
    const valido = a.length === b.length && crypto.timingSafeEqual(a, b);
    if (!valido) {
      console.warn("Webhook com assinatura inválida — ignorado");
      return res.status(401).send("assinatura inválida");
    }

    const evento = JSON.parse(req.body.toString("utf8"));
    // Formato típico: { reference, amount, channel, status }
    const { reference, amount, channel, status } = evento;
    console.log("Webhook válido:", { reference, amount, channel, status });

    if (status !== "succeeded" && evento?.event !== "payment.succeeded") {
      // Responde 200 para o gateway não reenviar à toa; só regista
      return res.status(200).send("ignorado (não pago)");
    }

    // TODO: picks up order in your DB by reference (ex: MACHAVA-CV-0701-XXXXX)
    // 1. Buscar pedido por reference
    // 2. Confirmar valor esperado (tolerância se gateway retém taxa)
    // 3. Marcar como PAGO
    // 4. Gerar link único temporário (ex: token 24h, uso único) para o ficheiro final
    // 5. Enviar link ao cliente no WhatsApp (manual ou API)

    // Exemplo de link seguro (gera token real no teu sistema):
    // const token = crypto.randomBytes(32).toString("hex");
    // guarda { token, reference, expiraEm: Date.now() + 24h, usos: 1 }
    // const link = `https://teu-dominio.co.mz/download/${token}`;

    return res.status(200).send("ok");
  } catch (e) {
    console.error("Erro webhook:", e);
    return res.status(400).send("payload inválido");
  }
});

// Rota de download seguro (exemplo): valida token, uso único, expira 24h
app.get("/download/:token", (req, res) => {
  // TODO: procurar token na base de dados:
  // - não existe → 404
  // - expirado ou já usado → 410
  // - válido → marcar usado e enviar ficheiro (nunca listar pasta pública)
  return res.status(501).send("Liga à tua base de dados (exemplo). Token: " + req.params.token);
});

app.get("/health", (_req, res) => res.send("ok"));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Webhook a ouvir em :${port}`));
