# PASSO A PASSO COM CALMA — Node.js + Vite (Windows)
> Para o sócio: do zero até `npm run build` sem stress. 15 minutos.

## 1) O que é cada coisa? (1 min, sem pressa)

- **Node.js** = o "motor" que permite ao computador correr projectos web modernos. Sem ele, não consegues instalar nem publicar o site.
- **npm** = vem DENTRO do Node.js. É a "loja" que instala as peças do projecto (`npm install`).
- **Vite** = a ferramenta que os teus 2 projectos usam. Transforma o código React+TS em site rápido.
  - `npm run dev` → testa no teu PC (http://localhost:5173)
  - `npm run build` → gera o `dist/index.html` pronto para Vercel/Pages

Sim, os 2 projectos são Vite. Por isso precisas do Node.js primeiro.

## 2) Instalar o Node.js (site oficial)

**Site oficial e único:** https://nodejs.org

1. Abre https://nodejs.org
2. Vais ver 2 botões: **LTS** e **Current**. Clica sempre em **LTS** (versão estável, hoje é a 22.x ou 24.x — qualquer LTS serve).
3. Escolhe **Windows Installer (.msi) 64-bit (x64)**. A maioria dos PCs é x64. Só escolhe ARM64 se o teu PC for ARM (raro).
4. Corre o ficheiro descarregado como **Administrador** (botão direito → Executar como administrador).
5. No instalador, mantém tudo marcado por defeito:
   - [x] Node.js runtime
   - [x] npm package manager (OBRIGATÓRIO)
   - [x] Add to PATH (OBRIGATÓRIO — é isto que deixa o Windows encontrar o `node`)
6. Clica Next → Install → Finish.
7. **Fecha e reabre** o PowerShell / Terminal (senão ele não vê o Node novo).

> Alternativa em 1 linha (se já tens winget no Windows 10/11):
> ```powershell
> winget install --id OpenJS.NodeJS.LTS -e
> ```

## 3) Confirmar que instalou (copiar/colar)

Abre **PowerShell** (tecla Windows → escreve `PowerShell` → Enter) e cola:

```powershell
node -v
npm -v
```

Tens de ver algo como:
```
v22.14.0
10.9.2
```

- Se der `não é reconhecido`: fecha o PowerShell, reabre, ou reinicia o PC. 90% resolve aqui.
- Se der versão, **estás pronto**. Não precisas instalar mais nada.

## 4) Testar o Ecossistema no teu PC

```powershell
# 1. Entra na pasta do projecto descarregado
cd C:\caminho\para\ecossistema-machava

# 2. Instala as peças (só 1ª vez, demora 1-2 min)
npm install

# 3. Testa no PC
npm run dev
```

Abre http://localhost:5173 no Chrome. Vês o site. Para parar: `Ctrl + C`.

```powershell
# 4. Gerar versão final para publicar
npm run build
```

Se terminar com `✓ built in ...` e criar pasta `dist/`, está 100%.

## 5) Erros comuns (não entres em pânico)

| Erro | Causa | Solução |
|------|-------|---------|
| `node não é reconhecido` | PATH não actualizou | Fecha terminal, reabre. Se persistir, reinicia PC |
| `npm ERR! network` | Internet / antivírus | Desliga VPN, tenta outra rede |
| `port 5173 in use` | Já tens um dev aberto | Fecha outro terminal ou usa `npm run dev -- --port 5174` |
| PC pede ARM64 ou x64? | Arquitectura | 99% dos PCs: **x64**. ARM só Surface Pro X / Snapdragon |

## 6) Quandovale a pena pedir ajuda?

Manda-me print de:
1. `node -v` + `npm -v`
2. Mensagem de erro completa
3. Print do ecrã do instalador (se travar)

Não mexas em variáveis de ambiente manualmente — o instalador faz tudo.

---
Próximo passo depois disto: GUIA-DEPLOY.md (GitHub → Vercel). Um degrau de cada vez, sócio.
