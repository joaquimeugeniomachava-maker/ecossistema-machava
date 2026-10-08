# PAYPAL + NÚMERO VIRTUAL — Passo a passo (Moçambique)
## Usa o teu M-Pesa 84 489 8420 e e-Mola 87 048 8008. Sem misturar.

### PARTE A — Os teus números (fixa isto, sem trocar)
- **M-Pesa: +258 84 489 8420** — recebe TUDO local (CV, manuais, corridas, KEYHOUSE).
- **e-Mola: +258 87 048 8008** — alternativa quando M-Pesa falha.
- **Titular: Joaquim Eugénio Machava** — sempre igual em todo o lado.
- Nunca peças PIN. Só ID da transação. Confirma sempre NO EXTRATO.

### PARTE B — PayPal para a diáspora (15 USD CV, sem burla)
Moçambique não levanta PayPal directo para M-Pesa. Faz assim:
1. Cria conta em **paypal.com** (tipo Business, país onde vives/operas + email Joaquim.Machava@outlook.com).
2. Liga um cartão Visa/Mastercard moçambicano (se o banco permitir) OU conta bancária da diáspora de confiança.
3. No site está escrito "PayPal diáspora — pedir link no WhatsApp". Tu geras **fatura PayPal** (Send invoice, 15 USD + nome + pedido MACHAVA-CV-xxx) e mandas o link no chat.
4. Só envias PDF limpo quando PayPal diz **Completed** (não Pending, não On hold).
5. Levantamento: PayPal → conta bancária ligada → depois envias para M-Pesa via troca/levantamento normal. Nunca prometas "PayPal para M-Pesa directo".
6. Taxa: conta ~5% + câmbio. Preço 15 USD já cobre. Upsell +5 USD adaptação internacional.

### PARTE C — Número virtual (só se precisares de 2º número p/ verificação)
NÃO uses número virtual para receber dinheiro. Só para verificação/2FA:
1. Evita VoIP barato (Google Voice, TextNow) — PayPal/bancos rejeitam.
2. Opção que passa: **eSIM com número móvel real** (ex.: número UK O2 via eSIM, ~$10/30 dias, SMS ilimitado). Instalas eSIM → PayPal → Settings → Security → Phone → adicionas → confirmas SMS.
3. Regra: número de dinheiro (M-Pesa/e-Mola) fica no teu SIM físico. Número virtual é só chave de segurança, permanente — nunca temporário de 10 min para conta com saldo.
4. Alternativa grátis e melhor: usa o teu 84/87 para WhatsApp Business + email para resto. Só compra virtual se uma plataforma bloquear o +258.

### PARTE D — Rotina anti-burla (cola na parede)
1. Pedido com ID (MACHAVA-CV-xxx).
2. Prévia COM MARCA, nunca limpo.
3. Cliente paga → manda ID (não só print).
4. Confirmas NO EXTRATO M-Pesa/e-Mola ou PayPal Completed.
5. Envias limpo + registas (nome, pacote, valor, data).
6. Webhook ZumboPay (backend/server.js) faz 3–5 sozinho quando ligares conta merchant.

### O QUE ME MANDAS
- Print do extrato (com ID visível, tapa saldo) do 1º teste 200 MT.
- Link da fatura PayPal de teste (1 USD) para eu validar o fluxo diáspora.
