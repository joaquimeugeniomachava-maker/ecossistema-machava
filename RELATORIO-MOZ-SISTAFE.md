# RELATÓRIO — MOZ-SISTAFE Landing + Gabinete Executivo
**Repositório de produção:** github.com/joaquimeugeniomachava-maker/irma-moz
**Domínio:** https://moz-sistafe.vercel.app
**Data:** 06 Out 2026 · **Build local neste escopo:** OK (1909 módulos, dist/index.html 468 KB, gzip 126 KB, 0 erros)
**Âmbito:** testado dentro deste escopo (código neste ambiente). Não se declara deploy concluído nem segurança absoluta.

> REGRA CUMPRIDA: não se afirma que https://moz-sistafe.vercel.app mostra a nova versão — isso só após FASE 5 em produção.

---

## FASE 1 — BACKUP (para executar no repo irma-moz, antes do push)

```bash
git rev-parse --abbrev-ref HEAD   # confirmar branch (esperado: main)
git log -1 --oneline              # registar commit actual
git tag backup-antes-gabinete-$(date +%F)  # tag de backup
git push origin --tags
git checkout -b feat/gabinete-executivo  # trabalhar em branch, não directo em main
```

Não apagar a versão anterior antes de validar a nova. Rollback = `git revert` ou redeploy do deployment anterior na Vercel (ver §9).

**Neste ambiente:** não foi feito push (sem acesso ao irma-moz aqui). Alterações estão nos ficheiros listados em §8, prontas para copiar para o irma-moz.

## FASE 2 — VERIFICAÇÃO LOCAL (executado aqui)

- `npm run build` → **OK**, 1909 módulos, 0 erros.
- `npm run lint / typecheck / test` → **não executáveis**: não existem esses scripts no package.json (só dev/build/preview). Verificador do editor: 0 erros após correcções.
- Confirmado: `dist/index.html` gerado; CSS inlined (singlefile); imagens remotas Pexels com `alt` + `loading`; favicon data-URI; sem `localhost/127.0.0.1` em `src` (grep 0); sem URLs fictícias novas (só wa.me real, grupo real, mailto real, KEYHOUSE Pages real); **sem segredos** (grep password/token/secret/apiKey = 0).

## FASE 3 — REVISÃO INSTITUCIONAL (aplicado)

- Site **não se apresenta como CEDSIF**: hero diz "Guia independente de apoio", selo "sem vínculo oficial ao CEDSIF, Ministério ou Direcção Nacional".
- Contactos são da **Coordenação do projecto** (Joaquim Machava, WhatsApp +258 84 489 8420, Joaquim.Machava@outlook.com, M-Pesa/e-Mola, NUIT 100921405).
- Documentos são **minutas para revisão** (cabeçalho em cada uma + aviso global).
- Dados dos 10 técnicos **demonstrativos (T1–T10)** — nota explícita para não publicar dados reais.
- Benefícios como **esperados/verificáveis**, com indicador + meio de verificação + prazo. Nenhum resultado declarado.
- Sem nomes institucionais inventados; sem resultados sem evidência.
- Frase exigida presente ipsis verbis no aviso âmbar:
  > "Esta plataforma é uma iniciativa independente de apoio ao conhecimento e à organização. Não substitui comunicações, normas ou instruções oficiais."

## FASE 4 — DEPLOY VERCEL (porque moz-sistafe.vercel.app não actualizou sozinho)

`dist/index.html` local **não publica sozinho**. A Vercel só actualiza após `git push` para o branch ligado. Verifique por ordem:

1. **Projecto correcto:** vercel.com → projecto `moz-sistafe` (ou `irma-moz`) → Settings → Git → confirma que o repositório ligado é `joaquimeugeniomachava-maker/irma-moz` (não o ecossistema, não outro).
2. **Branch de produção:** Settings → Git → Production Branch = `main` (ou o branch onde fez push). Se trabalhou em `feat/...`, faça PR + merge para `main`.
3. **Push feito?** `git status` limpo + `git log origin/main` contém o seu commit? Sem push, sem deploy.
4. **Build command:** `npm run build` · **Output:** `dist` · Framework: Vite. Se output estiver `build` ou vazio, o deploy gera 404/antigo.
5. **Deployments:** aba Deployments → último commit aparece? Se "Canceled/Failed", abra os logs. Causas comuns: Node 24 vs engines, `npm ci` sem package-lock, pasta errada (root deve ser onde está package.json).
6. **Domínio:** Settings → Domains → `moz-sistafe.vercel.app` atribuído a Production (não a um Preview). Só promova após build verde.
7. **Comandos exactos:**
```bash
git add -A
git commit -m "MOZ-SISTAFE: gabinete executivo + 6 minutas + fontes + acessibilidade"
git push origin feat/gabinete-executivo
# abrir PR para main, merge, e a Vercel faz deploy sozinho em ~1-2 min
```
Guarde a URL do deployment (ex.: `irma-moz-abc123.vercel.app`) antes de confirmar o domínio.

## FASE 5 — SMOKE TEST DE PRODUÇÃO (checklist — fazer no domínio, não aqui)

Rotas (hash): `/` + `#/` · `#/sistafe#inicio|modulos|base-legal|programa-360|gabinete|documentos|beneficios|matriz|fontes|manuais|formacao|faq|contactos` · `#/teste-404` → 404 amigável.
Testar: botões Comprar/Inscrever · 6 Descarregar .txt + CSV · Imprimir (benefícios/matriz/CV) · Partilhar WhatsApp · pesquisa global (2+ letras, categoria, vazio) · email Reportar erro · telemóvel + desktop + janela anónima + refresh directo em cada rota + consola (F12, 0 vermelhos) + imagens carregam.

**Estado:** pendente de produção (só testado em código + build local neste escopo).

## FASE 6 — SEGURANÇA (testado dentro deste escopo)

- Nenhum segredo/token/password no frontend (grep 0).
- Nenhum documento sensível real (só minutas-modelo + T1–T10).
- Sem login (não implementar login falso — cumprido), sem upload público, sem armazenamento de dados reais (CV rascunho é localStorage do próprio aparelho; matriz usa T1–T10).
- HTTPS, headers, CSP, protecção de deployment, permissões e logs: **dependem da Vercel — verificar no dashboard após deploy** (não afirmável daqui).
- Inputs com `maxLength` + `aria-label`; links externos com `rel="noreferrer"`; sem `dangerouslySetInnerHTML`; sem scripts externos além de fonts/Pexels.
- Não se declara segurança absoluta.

## FASE 7 — ENTREGA (resumo honesto)

1. **URL deployment:** pendente — publicar via FASE 4 e colar aqui a URL do build verde.
2. **Commit publicado:** pendente — colar `git log -1` do irma-moz após push.
3. **Build aprovado:** local OK (este escopo). Produção: pendente.
4. **Rotas testadas:** lógica verificada em código; browser/produção pendente (checklist FASE 5).
5. **Dispositivos:** responsivo em código (grid + sticky nav + tabelas com scroll); device-lab pendente.
6. **Funcionalidades aprovadas (código):** sub-nav, pesquisa global, 6 minutas (ver/descarregar/imprimir/partilhar), benefícios, matriz CSV, fontes + data, reportar erro, SEO dinâmico, print CSS, acessibilidade (skip-link herdado, aria, foco, teclado, reduced-motion).
7. **Falhas:** hero antigo dizia "Manual nº1 · 40+ instituições" e contadores sem evidência → substituídos por factos verificáveis (8 módulos, 6 minutas, 10 travões). Texto "conta oficial" → "conta do projecto".
8. **Pendências:** push para irma-moz; deploy Vercel; smoke test; trocar Pexels por fotos reais + fallback onError; validar preços/métricas internas com o negócio; Lighthouse + NVDA; confirmar convite WhatsApp e KEYHOUSE Pages 200 OK.
9. **Rollback:** na Vercel → Deployments → deployment anterior (backup tag) → Promote to Production. Ou `git revert <commit> && git push origin main`.
10. **Confirmação explícita:** ❌ AINDA NÃO — `moz-sistafe.vercel.app` só se declara actualizado após FASE 5 com print do domínio a mostrar "Gabinete Executivo + 6 minutas".

---

## MISSÃO 2 — ELEVAÇÃO INTERNA (só MOZ-SISTAFE, sem tocar nos outros)

**Ficheiros alterados (só interno):**
- `src/dataSistafeExec.ts` (NOVO) — minutas, benefícios, matriz, fontes, helpers de descarga. Isolado para não tocar em `data.ts` dos outros projectos.
- `src/components/sistafeExec.tsx` (NOVO) — aviso, sub-nav, pesquisa, gabinete, fontes, contactos. `sistafe360.tsx` (Base Legal/360/Radar) intacto — já Gold.
- `src/pages/MozSistafe.tsx` (EDIT) — hero premium, SEO dinâmico, ids âncora, integração dos novos blocos, pagamento manual explicado, aria/alt/maxLength. MOTOMOZ/KEYHOUSE/CV-MAKER/App/chrome/index.html **não tocados**.
- `public/robots.txt` + `public/sitemap.xml` (NOVO) — sem alteração visual.

**Preservado:** manuais PDF, formação, Buy Me a Water, M-Pesa/e-Mola, WhatsApp — com processo manual explicado e "nunca partilhe PIN".

**Testes executados:** build OK; grep localhost/segredos 0; verificação de imports/TS 0 erros.
**Não executáveis:** lint/typecheck/test (sem scripts).
**Riscos restantes:** fotos externas; números internos por validar; deploy e device-lab pendentes.

Testado dentro deste escopo. Sem atalhos.
