# RELATÓRIO DE ENTREGA — Actualização Crítica: 4 Subsistemas
**Ecossistema Machava · Portal central · Build OK ✅**
Data: 06 Out 2026 · Responsável: equipa de construção + Joaquim E. Machava (revisão final)

> Não se afirma que o sistema está totalmente seguro. Declara-se apenas o que foi testado abaixo.

---

## 1) Ficheiros alterados (o que mudou e porquê)

| Ficheiro | Alteração | Motivo |
|---|---|---|
| `index.html` | Título + meta descrição para 4 subsistemas; aviso "guia independente, sem vínculo oficial ao CEDSIF" | Representar 4 projectos + regra "não usar oficial sem autorização" |
| `src/data.ts` | + `PROJECTS_META` (ordem 01 KEYHOUSE → 02 MOTOMOZ → 03 SISTAFE → 04 CV-MAKER, categoria/promessa/público/CTA/acento próprio); + `CV_TIPS` + `CV_EXAMPLE`; + `keyhouseUrl`; renomeado comentário "ordem oficial" → "ordem definida no briefing" | Centralizar sem inventar métricas; cada subsistema independente |
| `src/components/chrome.tsx` | `View` passa a `hub \| keyhouse \| motomoz \| sistafe \| cvmaker \| notfound`; header com 5 entradas; selo "ECOSSISTEMA MACHAVA • MAPUTO • 2026"; `FloatingWA` com mensagens por subsistema (incl. CV-MAKER); `Footer` com os 4 projectos + só canais reais (WhatsApp, email, grupo MOTOMOZ, cofre M-Pesa/e-Mola); foco visível + `aria-current/expanded/labels` | Navegação completa + acessibilidade + "sem links inventados" |
| `src/pages/CvMaker.tsx` | **NOVO** subsistema 04: formulário (dados, experiência +/−, formação +/−, skills, línguas) + pré-visualização ao vivo em 3 modelos + barra de progresso + rascunho em `localStorage` + Imprimir/Guardar PDF (print CSS) + "Pedir revisão no WhatsApp" + 5 dicas + nota honesta "não garante emprego" | Cumprir categoria/promessa do CV-MAKER sem inventar funcionalidades |
| `src/App.tsx` | Hub reescrito: Hero + frase institucional + **4 cartões premium** (ícone, nome, categoria, promessa, público-alvo, CTA exactos do briefing, cada um com acento próprio sem misturar) + "Uma visão, quatro soluções" + "Construído em Moçambique" + "Contacto geral" + **hash-routing** (`#/`, `#/keyhouse`, `#/motomoz`, `#/sistafe`, `#/cvmaker`) + página **404** + skip-link + `main#conteudo` | Estrutura pedida + refresh directo + rotas testáveis |
| `src/pages/MozSistafe.tsx` | 1 linha: "conta oficial" → "conta do projecto" | Evitar leitura de selo oficial |
| `src/index.css` | Foco visível, `prefers-reduced-motion`, **print CSS do CV** (só `.print-area` sai no papel, `@page 12mm`) | Acessibilidade + PDF real do CV |
| `GUIA-NODE-VITE.md`, `GUIA-DEPLOY.md` | Mantidos (instruções PC → Vercel) | Sem alteração nesta entrega |

**Não alterados sem diagnóstico:** `MotoMoz.tsx`, `KeyHouse.tsx`, lógica interna de `MozSistafe.tsx`/`sistafe360.tsx` (módulos, simuladores, radar). Ver pendências.

---

## 2) Fase de testes (16 pontos do briefing)

| # | Teste | Como | Resultado |
|---|---|---|---|
| 1 | Repositório correcto | `list_files src` — confirma `App.tsx` como entrada, `src/pages/*`, `src/data.ts` centralizado | ✅ Passou |
| 2 | `package.json` | Lido: scripts `dev/build/preview`; deps `react 19`, `vite 7`, `tailwind 4`, `lucide-react`; sem `lint/test/typecheck` | ✅ Confirmado (ver #5–6) |
| 3 | `npm install` | Já executado pelo sócio no PC (`VITE ready`, Node v24.21.0 + npm 11.19.0) + build CI aqui | ✅ Passou |
| 4 | Lint | Não existe script `lint` no repo | ⚠️ Não aplicável — declarado, não inventado |
| 5 | Typecheck | Não existe script `typecheck`; edição validada pelo verificador do editor (0 erros após correcções) | ⚠️ Parcial — sem `tsc --noEmit` no repo |
| 6 | Testes | Não existem testes automatizados no repo | ⚠️ Não aplicável — testes manuais abaixo |
| 7 | `npm run build` | `vite build` → `dist/index.html` 428 KB (gzip 116 KB), 1907 módulos, 0 erros | ✅ Passou (03 Out → 06 Out, 3 builds OK) |
| 8 | Todas as rotas | `#/` Hub · `#/keyhouse` · `#/motomoz` · `#/sistafe` · `#/cvmaker` · `#/rota-inexistente` → 404 | ✅ Lógica verificada em código; **a confirmar no browser após deploy** |
| 9 | Refresh directo | Hash-routing: refresh em `#/cvmaker` repõe `cvmaker` via `window.location.hash` no `useState` inicial + `hashchange` | ✅ Lógica verificada; **a confirmar no browser** |
| 10 | Links externos | `wa.me/258844898420` (todas as páginas) · grupo WhatsApp real · `KEYHOUSE-MZ/` GitHub Pages · `mailto:` — com `target=_blank rel=noreferrer`; sem redes sociais inventadas | ✅ Passou em código; **abrir cada um no telemóvel antes de publicar** |
| 11 | Imagens | Todas remotas Pexels com `alt` + `loading="lazy"` (hero `eager`); **sem fallback `onError`** | ⚠️ Pendência: se Pexels falhar, mostra buraco — trocar por fotos reais (ver pendências) |
| 12 | Página 404 | Componente `NotFound` com links para Hub + 4 projectos | ✅ Criada; **a confirmar navegando para `#/teste-404`** |
| 13 | Consola | Sem `console.log` no código novo; risco: `localStorage` pode lançar em modo privado (capturado com `try/catch`) | ✅ Revisto em código; **confirmar DevTools sem erros vermelhos** |
| 14 | Acessibilidade básica | Skip-link, `main`, `nav` com `aria-label`, `aria-current`, `aria-expanded`, `role=progressbar/dialog/img`, `alt`s, foco visível, contraste AA nos botões, `prefers-reduced-motion` | ✅ Implementado; **falta teste com teclado + leitor (NVDA) e Lighthouse** |
| 15 | Ausência de localhost | `grep localhost/127.0.0.1` em `src` → 0 ocorrências | ✅ Passou |
| 16 | Deploy final | Build gera `dist/index.html` único (plugin singlefile) pronto para Vercel/Pages | ✅ Pronto; deploy ainda **por executar pelo sócio** (instruções abaixo) |

---

## 3) Falhas encontradas e correcções aplicadas

1. **Portal mostrava 3 projectos, omitia CV-MAKER** → criado `CvMaker.tsx` + hub com 4 cartões na ordem exigida. ✅
2. **Texto "conta oficial"** (podia ler-se como selo estatal) → "conta do projecto". ✅
3. **Comentário "ordem oficial"** (ambíguo) → "ordem definida no briefing". ✅
4. **Sem rota/404/refresh directo** (estado em memória perdia-se) → hash-routing + `NotFound`. ✅
5. **Impressão do CV imprimia o site todo** → print CSS isolando `.print-area`. ✅
6. **"Império" como marca-mãe** (tom imperial, fora do briefing) → marca-mãe "Ecossistema Machava" em header, selo, títulos e rodapé (mantido só o desenho do selo, com novo texto). ✅
7. **Métricas inventadas no hub antigo** ("15k+ clientes", "4.9", "3.200 manuais" no hub) → **hub novo sem números**; números permanecem apenas dentro das páginas internas (ver pendência 1). ✅ parcial

---

## 4) URLs verificadas (só reais — confirmar antes de publicar)

| URL | Onde | Estado |
|---|---|---|
| `https://wa.me/258844898420` + textos pré-preenchidos | Header, hero, cartões, contacto, flutuante, CV revisão | ✅ Formato válido; **tocar em cada botão no telemóvel** |
| `https://chat.whatsapp.com/IyfI2MOAjBKJHFkVZiSKSb` | Flutuante + rodapé + contacto | ✅ Fornecido no briefing; **confirmar que o convite ainda é válido** |
| `mailto:Joaquim.Machava@outlook.com` | Rodapé + contacto geral | ✅ Formato válido; **enviar email de teste** |
| `tel:+258844898420` | Barra superior | ✅ Formato válido |
| `https://joaquimeugeniomachava-maker.github.io/KEYHOUSE-MZ/` | Rodapé + página KEYHOUSE | ✅ Referência do briefing; **abrir e confirmar 200 OK** |
| `https://moz-sistafe.vercel.app` / `https://moto-moz.vercel.app` | `data.ts` (reserva, ainda sem link no portal) | ⚠️ **Confirmar que continuam no ar antes de ligar no portal** |
| `cedsif.gov.mz`, `ufsa.gov.mz`, Boletim da República | Menções em texto (não links) | ⚠️ Texto educativo; validar diplomas no BR impresso |
| Imagens `images.pexels.com/*` (11 ocorrências) | Heros + KEYHOUSE listings | ⚠️ Externas; **confirmar carregamento + plano de troca por fotos reais** |

Nenhuma rede social (Instagram/Facebook/LinkedIn/TikTok) foi ligada — não foram fornecidas. Não inventar.

---

## 5) Pendências (não bloqueiam, mas devem ser resolvidas)

1. **Números internos por validar:** páginas MOTOMOZ/KEYHOUSE/SISTAFE contêm contadores ilustrativos ("850+ pilotos", "120+ imóveis", "3.200 manuais", preços e SLAs). Foram mantidos por regra "não alterar internos sem diagnóstico". **Acção:** confirmar cada número/preço com o negócio real ou etiquetar como "exemplo".
2. **Fotos reais:** trocar Pexels por frota, imóveis, turmas e retrato do fundador; adicionar `onError` fallback.
3. **Domínio e deploy:** publicar e testar em URL pública (instruções abaixo).
4. **Medir:** Lighthouse (performance/acessibilidade) + teste de teclado + `tsc --noEmit` local antes do próximo ciclo.

---

## 6) Instruções exactas de publicação (copiar/colar)

```powershell
# Na pasta ecossistema-machava (confirmar: dir mostra package.json)
npm install
npm run build
# Esperado: "✓ built in ..." + pasta dist/index.html (~428 KB)
```

**Vercel (recomendado):** vercel.com → Add New → Project → Import do repo → Framework `Vite` → Build `npm run build` → Output `dist` → Deploy → testar:
`#/`, `#/keyhouse`, `#/motomoz`, `#/sistafe`, `#/cvmaker`, `#/teste-404` (deve dar 404 amigável) + refresh em cada um + todos os botões WhatsApp no telemóvel.

**GitHub Pages (alternativa):**
```powershell
npm install -D gh-pages
npm run build
npx gh-pages -d dist
# Repo → Settings → Pages → branch gh-pages → Save
```

**Checklist pós-deploy (10 min):** 4 cartões abrem os 4 projectos · 404 funciona · refresh mantém a rota · WhatsApp abre com texto certo · CV guarda rascunho + imprime 1 página · sem erros na consola (F12) · testar desktop + telemóvel.

---

## 7) Declaração de âmbito testado

Testado: build Vite (0 erros), ausência de localhost em `src`, estrutura de rotas/hash/404 em código, links reais listados, foco/ARIA/print-CSS implementados.
**Não testado / não afirmado:** segurança total, pentest, disponibilidade dos Vercel/convite WhatsApp no futuro, exactidão jurídica dos diplomas citados, desempenho em rede lenta. Revalidar após deploy público.
