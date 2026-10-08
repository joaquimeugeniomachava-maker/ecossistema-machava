# GUIA FINAL — ECOSSISTEMA MACHAVA · Download & Deploy
> MOTOMOZ + MOZ-SISTAFE · Padrão KEYHOUSE · Build OK ✅

**Estado:** PRONTO PARA DOWNLOAD. Sem erros. `npm run build` validado (342 KB, gzip 95 KB).

---

## PASSO 0 — Verificação de 2 minutos (antes do download)

1. Clica nas 3 abas do topo: Ecossistema / MOTOMOZ / MOZ-SISTAFE
2. Clica no botão verde flutuante → testa "Pedir corrida" e "Quero o manual"
3. Confirma que abre `wa.me/258844898420` com mensagem pronta
4. Confirma números no rodapé: M-Pesa 84 489 8420 · e-Mola 87 048 8008

Se isto funciona, está pronto. Não há ajustes bloqueantes.

---

## PASSO 1 — Download

Tens 2 formas:

**A) Ficheiro único (pré-visualização / partilha rápida):**
- O build gera `dist/index.html` (ficheiro único, funciona offline)
- Podes abrir, enviar por WhatsApp ou alojar em qualquer hosting estático

**B) Código completo (para Vercel / GitHub — RECOMENDADO):**
- Faz download de todo o projecto (src/, index.html, package.json)
- Vais precisar disto para os Passos 2 e 3

---

## PASSO 2 — Preparar os 2 Repos no GitHub

Tens os repos:
- `github.com/joaquimeugeniomachava-maker/irma-moz` (MOZ-SISTAFE)
- `github.com/joaquimeugeniomachava-maker/MOTO-MOZ` (MOTOMOZ)

**Opção RECOMENDADA (1 repo ecossistema = 2 sites):**
Mantém este projecto como `ecossistema-machava` e faz deploy uma vez.
Os 2 projectos vivem dentro, comutáveis no menu. Zero duplicação.

```bash
# Na pasta do projecto descarregado:
git init
git add .
git commit -m "Ecossistema Machava: MOTOMOZ + MOZ-SISTAFE padrao KEYHOUSE"
git branch -M main
git remote add origin https://github.com/joaquimeugeniomachava-maker/ecossistema-machava.git
git push -u origin main
```

**Opção 2 SITES SEPARADOS (manter URLs actuais):**
Duplica a pasta 2x e muda 1 linha em cada:

1. Pasta `MOTO-MOZ` → abre `src/App.tsx` → muda:
```ts
const [view, setView] = useState<View>("hub");
```
para:
```ts
const [view, setView] = useState<View>("motomoz");
```

2. Pasta `irma-moz` → muda para:
```ts
const [view, setView] = useState<View>("sistafe");
```

Depois em cada pasta:
```bash
git init
git add .
git commit -m "Elevado ao padrao KEYHOUSE"
git branch -M main
git remote add origin https://github.com/joaquimeugeniomachava-maker/MOTO-MOZ.git
# ou .../irma-moz.git
git push -u origin main --force
```

---

## PASSO 3 — Deploy na Vercel (GRÁTIS · 5 minutos)

1. Vai a https://vercel.com → Login com GitHub
2. `Add New → Project → Import` o repo
3. Configuração (não mexer, já está certo):
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Clica `Deploy` → em ~1 min tens URL `https://xxx.vercel.app`
5. Repete para o 2º repo (se usaste Opção 2 sites)

**Ligar URLs actuais:**
- Vercel → Project → Settings → Domains
- MOTOMOZ: mantém `moto-moz.vercel.app`
- SISTAFE: mantém `moz-sistafe.vercel.app`

---

## PASSO 4 — Alternativa GitHub Pages (GRÁTIS)

Se preferires Pages como o KEYHOUSE-MZ:

```bash
npm install -D gh-pages
npm run build
npx gh-pages -d dist
```

Depois: Repo → Settings → Pages → Branch `gh-pages` → Save.
URL fica: `https://joaquimeugeniomachava-maker.github.io/NOME-DO-REPO/`

---

## PASSO 5 — Pós-deploy (10 min que vendem)

- [ ] Abre o site no telemóvel, testa botão flutuante
- [ ] Envia mensagem de teste para o teu próprio WhatsApp
- [ ] Faz pagamento teste M-Pesa 1 MT e envia comprovativo
- [ ] Entra no grupo https://chat.whatsapp.com/IyfI2MOAjBKJHFkVZiSKSb e fixa o link do site
- [ ] Actualiza bio do WhatsApp Business com o link novo
- [ ] Partilha nos status: "Novo MOTOMOZ / MOZ-SISTAFE no padrão KEYHOUSE"

---

## PASSO 6 — Próximos upgrades (quando quiseres)

1. Fotos reais da tua frota / turmas (substituir Pexels)
2. Domínio próprio `.co.mz` (~1.500 MT/ano) apontado à Vercel
3. Pixel Meta + Google Analytics para medir corridas e vendas de manuais
4. Versão PDF do Manual Completo ligada ao botão "Receber PDF"

---

## COFRE (não mudar sem avisar)

- WhatsApp: 258844898420
- M-Pesa: +258 84 489 8420
- e-Mola: +258 87 048 8008
- Email: Joaquim.Machava@outlook.com
- NUIT: 100921405
- Grupo: https://chat.whatsapp.com/IyfI2MOAjBKJHFkVZiSKSb

Feito em Maputo · Preços em MT · Build OK ✅
