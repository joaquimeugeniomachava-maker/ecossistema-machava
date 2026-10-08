// ─── COFRE CENTRAL · Ecossistema Machava · 4 subsistemas ────────────
// Regra: só links reais. Nada de redes inventadas.
export const COFRE = {
  nome: "Joaquim Eugénio Machava",
  whatsappIntl: "258844898420",
  whatsappDisplay: "+258 84 489 8420",
  mpesa: "+258 84 489 8420",
  emola: "+258 87 048 8008",
  email: "Joaquim.Machava@outlook.com",
  nuit: "100921405",
  grupoMotomoz: "https://chat.whatsapp.com/IyfI2MOAjBKJHFkVZiSKSb",
  mozSistafeUrl: "https://moz-sistafe.vercel.app",
  motoMozUrl: "https://moto-moz.vercel.app",
  keyhouseUrl: "https://joaquimeugeniomachava-maker.github.io/KEYHOUSE-MZ/",
};

// ─── META DOS 4 SUBSISTEMAS (ordem definida no briefing) ───────────
export const PROJECTS_META = [
  {
    id: "keyhouse",
    ordem: "01",
    nome: "KEYHOUSE PROPERTIES",
    categoria: "Imobiliário · terrenos · arrendamento · investimento",
    promessa: "Imóveis e oportunidades com mais confiança, organização e transparência.",
    publico: "Compradores, arrendatários e investidores em Maputo e Gaza.",
    cta: "Explorar KEYHOUSE",
    accent: "#C9A227",
    accentSoft: "#FBF3D5",
  },
  {
    id: "motomoz",
    ordem: "02",
    nome: "MOTOMOZ",
    categoria: "Mobilidade · mototáxi · soluções B2B",
    promessa: "Mobilidade mais organizada, acessível e conectada.",
    publico: "Passageiros, pilotos e empresas em Maputo/Matola.",
    cta: "Conhecer MOTOMOZ",
    accent: "#EA580C",
    accentSoft: "#FFF1E6",
  },
  {
    id: "sistafe",
    ordem: "03",
    nome: "MOZ-SISTAFE",
    categoria: "Educação digital · manuais e formação e-SISTAFE",
    promessa: "Procedimentos e conhecimentos administrativos mais compreensíveis.",
    publico: "Funcionários públicos, UGEAs e cidadãos.",
    cta: "Explorar MOZ-SISTAFE",
    accent: "#1E4ED8",
    accentSoft: "#E8EEFD",
  },
  {
    id: "cvmaker",
    ordem: "04",
    nome: "CV-MAKER",
    categoria: "Carreira · currículo · empregabilidade",
    promessa: "Apresentar melhor as suas competências e oportunidades.",
    publico: "Jovens, recém-licenciados e profissionais em transição.",
    cta: "Criar o meu CV",
    accent: "#7C3AED",
    accentSoft: "#F0E9FD",
  },
] as const;

// ─── CV-MAKER · dados reais de apoio (sem métricas inventadas) ────
export const CV_TIPS = [
  { t: "Uma página vence duas", d: "Recrutadores em Maputo lêem em 30 segundos. Cabeçalho + resumo de 3 linhas + experiência recente primeiro." },
  { t: "Números, não adjectivos", d: "Troque «responsável e dinâmico» por «atendi 20 clientes/dia» ou «fechei 12 processos no MEX»." },
  { t: "NUIT e contactos no topo", d: "Nome, telefone WhatsApp, email profissional e cidade. Sem foto distorcida, sem alcunhas." },
  { t: "PDF com nome profissional", d: "Guarde como Nome-Apelido-CV-2026.pdf. Nunca «CV-final-final-2.pdf»." },
  { t: "Adapte ao anúncio", d: "Uma vaga UGEA pede cabimento e Decreto 79/2022; uma vaga entregas pede rotas e carta. Um CV por vaga." },
];

export const CV_EXAMPLE = {
  nome: "Ancha João Langa",
  titulo: "Técnica Administrativa · Atendimento e Arquivo",
  email: "ancha.langa@email.com",
  telefone: "+258 84 000 0000",
  cidade: "Maputo, Moçambique",
  resumo: "Técnica administrativa com 3 anos em atendimento, arquivo e apoio a processos de aquisição. Organizada, pontual e com domínio de Word, Excel e WhatsApp Business.",
  exps: [{ cargo: "Assistente Administrativa", empresa: "Clínica Polana", periodo: "2023 — Presente", desc: "Atendimento a 30 utentes/dia, arquivo de 500+ processos, apoio ao plano de compras." }],
  edus: [{ curso: "Contabilidade — Nível Médio", inst: "Instituto Comercial de Maputo", ano: "2021" }],
  skills: ["Atendimento", "Arquivo", "Excel", "WhatsApp Business", "Pontualidade"],
  langs: ["Português (nativo)", "Changana (fluente)", "Inglês (básico)"],
};

export const waLink = (msg: string, num = COFRE.whatsappIntl) =>
  `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;

// ─── MOTOMOZ ─────────────────────────────────────────────────────────
export const MOTO_ZONES = [
  { from: "Baixa", to: "Museu", km: 3.2, price: 80 },
  { from: "Museu", to: "Xiquelene", km: 5.8, price: 120 },
  { from: "Baixa", to: "Junta", km: 7.5, price: 150 },
  { from: "Xiquelene", to: "Benfica", km: 9.4, price: 180 },
  { from: "Baixa", to: "Zimpeto", km: 14.2, price: 250 },
  { from: "Museu", to: "Matola", km: 12.0, price: 220 },
];

// ─── MOTOMOZ NACIONAL · Rovuma → Maputo (fluxo rápido, intuitivo) ───
// Regra Zuckerberg: 1 ecrã, 3 toques. Preço base = ponto de partida local.
export const MOTO_NATIONAL = [
  { id: "cabo", provincia: "Cabo Delgado", capital: "Pemba", zona: "Norte · Rovuma", base: 60, status: "A abrir", pilotos: 0, eta: "Em breve" },
  { id: "niassa", provincia: "Niassa", capital: "Lichinga", zona: "Norte", base: 60, status: "A abrir", pilotos: 0, eta: "Em breve" },
  { id: "nampula", provincia: "Nampula", capital: "Nampula", zona: "Norte", base: 55, status: "Piloto", pilotos: 25, eta: "~15 min" },
  { id: "zambezia", provincia: "Zambézia", capital: "Quelimane", zona: "Centro", base: 55, status: "Piloto", pilotos: 30, eta: "~15 min" },
  { id: "tete", provincia: "Tete", capital: "Tete", zona: "Centro", base: 55, status: "Piloto", pilotos: 20, eta: "~15 min" },
  { id: "manica", provincia: "Manica", capital: "Chimoio", zona: "Centro", base: 55, status: "Piloto", pilotos: 35, eta: "~12 min" },
  { id: "sofala", provincia: "Sofala", capital: "Beira", zona: "Centro", base: 50, status: "Activo", pilotos: 120, eta: "~10 min" },
  { id: "inhambane", provincia: "Inhambane", capital: "Inhambane", zona: "Sul", base: 50, status: "Activo", pilotos: 80, eta: "~10 min" },
  { id: "gaza", provincia: "Gaza", capital: "Xai-Xai", zona: "Sul", base: 50, status: "Activo", pilotos: 150, eta: "~9 min" },
  { id: "provincia-maputo", provincia: "Maputo Província", capital: "Matola", zona: "Sul", base: 50, status: "Activo", pilotos: 300, eta: "~9 min" },
  { id: "cidade-maputo", provincia: "Maputo Cidade", capital: "Maputo", zona: "Sul · Capital", base: 50, status: "Activo", pilotos: 550, eta: "~7 min" },
];

// Pedido ultra-simples: nem precisa saber km. 3 botões gigantes.
export const MOTO_QUICK = [
  { id: "curta", nome: "Curta", desc: "Bairro · até 3 km", price: 70, ex: "Mercado → Escola" },
  { id: "media", nome: "Média", desc: "Zona · 3 a 8 km", price: 130, ex: "Baixa → Xiquelene" },
  { id: "longa", nome: "Longa", desc: "Cidade · 8 km+", price: 220, ex: "Baixa → Zimpeto" },
];

export const MOTO_PLANS = [
  {
    id: "start",
    name: "START",
    price: 2500,
    tag: "Pequenas equipas",
    desc: "Para negócios com 1–5 colaboradores que precisam de mobilidade pontual.",
    features: ["Até 40 corridas/mês incluídas", "1 conta gestora + recibos PDF", "Prioridade standard no pico", "Suporte WhatsApp (8h–18h)", "Relatório mensal simples"],
    cta: "Quero o plano START",
    featured: false,
  },
  {
    id: "business",
    name: "BUSINESS",
    price: 4500,
    tag: "O mais contratado",
    desc: "Para empresas, escolas e clínicas com movimento diário.",
    features: ["Até 120 corridas/mês incluídas", "3 contas gestoras + centro de custo", "Prioridade executiva + piloto dedicado", "Suporte WhatsApp prioritário (6h–22h)", "Relatório + factura mensal com NUIT", "Código de conduta & seguro incluídos"],
    cta: "Quero o plano BUSINESS",
    featured: true,
  },
  {
    id: "corporate",
    name: "CORPORATE",
    price: 7500,
    tag: "Operações críticas",
    desc: "Para logística, entregas e turnos — cobertura total Maputo/Matola.",
    features: ["Corridas ilimitadas (política justa)", "Gestores ilimitados + API WhatsApp", "Frota dedicada 24/7 + dispatcher", "SLA 15 min ou corrida grátis", "Auditoria trimestral de rotas", "Formação de pilotos à medida"],
    cta: "Falar com comercial",
    featured: false,
  },
];

export const MOTO_TESTIMONIALS = [
  { name: "Ancha Langa", role: "Gestora de clínica · Polana", text: "Antes perdíamos 40 min por entrega de análises. Com o plano BUSINESS o piloto dedicado chega em 9 minutos. Relatório fecha com a contabilidade sem stress.", stars: 5 },
  { name: "Dércio Muianga", role: "Piloto verificado · Xiquelene", text: "Sou piloto MOTOMOZ há 8 meses. Ganho 18.500 MT limpos por mês, tenho seguro e os clientes já me chamam pelo nome. É outro nível.", stars: 5 },
  { name: "FAST Logística", role: "Cliente Corporate · Matola", text: "SLA de 15 minutos cumprido em 97% das corridas. O dispatcher no WhatsApp resolve tudo. Renovámos por 12 meses.", stars: 5 },
];

export const MOTO_FAQ = [
  { q: "Quanto custa uma corrida?", a: "Tarifa transparente: base 50 MT + 18 MT/km. Taxa de plataforma fixa de 5 MT por corrida — vai para seguro e suporte. Simule acima e receba o preço exacto no WhatsApp." },
  { q: "Como me torno piloto MOTOMOZ?", a: "Precisa de carta A, mota com livrete, capacete extra e registo criminal. Preencha o formulário, fazemos verificação em 48h + formação de 1 dia (ética, rotas, primeiros socorros). Sem taxa de entrada." },
  { q: "O que inclui o seguro?", a: "Toda a corrida MOTOMOZ inclui seguro de acidentes pessoais (piloto + passageiro) até 150.000 MT e apoio em caso de sinistro via WhatsApp 24/7." },
  { q: "Como funciona o plano empresa?", a: "Escolhe START, BUSINESS ou CORPORATE, recebe conta gestora, define tectos por colaborador e recebe factura mensal com NUIT. Corridas fora do pacote têm 10% de desconto." },
  { q: "E se o piloto não chegar?", a: "SLA BUSINESS/CORPORATE: se passar 15 min do ETA, a corrida é grátis e recebe 50 MT de crédito. Passageiros avulsos recebem re-atribuição prioritária automática." },
];

// ─── MOZ-SISTAFE · nomenclatura oficial CEDSIF (Decreto 26/2021) ─────
export const SISTAFE_MODULES = [
  { code: "MPO", name: "Planificação e Orçamentação", desc: "Elaboração, aprovação e monitoria do PES/OE. Onde todo o dinheiro começa.", color: "#143a82", lessons: 14, level: "Essencial" },
  { code: "MEX", name: "Execução do PES e OE", desc: "Cabimento → Compromisso → Liquidação → Pagamento. O coração do e-SISTAFE.", color: "#b8941f", lessons: 22, level: "Crítico" },
  { code: "MPE", name: "Património do Estado", desc: "Inventário, abate, transferências e e-Inventário. Nenhum bem sem registo.", color: "#5b5b00", lessons: 12, level: "Crítico" },
  { code: "MIP", name: "Investimento Público", desc: "Formulação e gestão de projectos de investimento e SNIP.", color: "#0e7c4a", lessons: 10, level: "Intermédio" },
  { code: "MFP", name: "Folha de Pagamentos", desc: "Salários, descontos, IRPS, INSS e ficheiros bancários (e-Folha).", color: "#0b6e7c", lessons: 12, level: "Crítico" },
  { code: "MRR", name: "Recolha da Receita", desc: "Guias, NUIT, e-Tributação e conciliação de receitas próprias.", color: "#0e7c4a", lessons: 11, level: "Intermédio" },
  { code: "MGI", name: "Gestão de Informações", desc: "Relatórios, balancetes, CUT e informação para decisão.", color: "#7c2d8e", lessons: 9, level: "Avançado" },
  { code: "UGEA", name: "Contratação Pública", desc: "Plano de contratações, concursos e contratos. Regido pelo Decreto 79/2022, supervisão UFSA.", color: "#1d1d1d", lessons: 16, level: "Avançado" },
];

// ─── BASE LEGAL (verificar sempre no Boletim da República / Imprensa Nacional) ─
export const SISTAFE_BASE_LEGAL = [
  { sigla: "Lei 14/2020", nome: "Lei do SISTAFE", desc: "Regras de planificação, orçamentação, execução, controlo e avaliação.", link: "Boletim da República, 23 Dez 2020" },
  { sigla: "Dec. 26/2021", nome: "Regulamento do SISTAFE", desc: "Define os 11 módulos oficiais: MPO, MEX, MIP, MPE, MFP, MDP, MGE, MRR, MGI, MAI, MAS.", link: "BR, 3 Mai 2021" },
  { sigla: "Dec. 79/2022", nome: "Contratação Pública", desc: "Regulamento de obras, bens e serviços. UGEA + Júri ímpar + UFSA. Artigos 34, 35, 46, 47, 77, 78.", link: "BR, 30 Dez 2022" },
  { sigla: "Lei 12/2024", nome: "Probidade + Património", desc: "Declaração de bens obrigatória: membros UGEA, utilizadores e-SISTAFE, tesoureiros (art. 57).", link: "BR, 18 Jun 2024" },
  { sigla: "UFSA", nome: "Supervisão das Aquisições", desc: "Coordena e supervisiona a contratação pública. Portal: ufsa.gov.mz", link: "ufsa.gov.mz" },
  { sigla: "CEDSIF", nome: "Gestor do e-SISTAFE", desc: "Desenvolve e mantém o sistema. Fonte oficial de módulos e manuais.", link: "cedsif.gov.mz" },
];

// ─── PROGRAMA 360° · 10 técnicos ───────────────────────────────────
export const MODELOS_360 = [
  {
    id: "academia", n: "01", name: "Academia Itinerante", dur: "3–5 dias", ganho: "Conhecimento aplicado",
    desc: "Os 10 técnicos viajam juntos para polos nacionais (>60 km: Xai-Xai, Chókwè, Bilene) com agenda fechada: tema → instituição anfitriã → objectivos → relatório.",
    conteudos: ["Gestão orçamental + ciclo da despesa", "MEX: cabimentação, liquidação, pagamento", "MPE: ciclo patrimonial e e-Inventário", "Programação financeira e prestação de contas", "Arquivo e rastreabilidade documental"],
    produto: "Cada técnico entrega: «O que aprendi + como aplicarei + que procedimento melhoramos».",
  },
  {
    id: "rotacao", n: "02", name: "Rotação Técnica 10×10", dur: "10–12 meses", ganho: "Continuidade (anti-dependência)",
    desc: "Cada técnico mantém a função principal e ganha uma área secundária. Meta: nenhum processo crítico depende de 1 pessoa — sempre 2 capazes.",
    conteudos: ["Matriz Principal × Secundária (Orçamento/MEX/Património/Investimento)", "Plano individual de desenvolvimento", "Avaliação Básico → Intermédio → Avançado", "Cobertura de férias, doença, mobilidade"],
    produto: "Matriz de Substituição afixada: Processo → Responsável → Suplente → Prazo.",
  },
  {
    id: "missao", n: "03", name: "Missão de Aprendizagem", dur: "3–4 dias / missão", ganho: "Benchmarking real",
    desc: "Equipas de 5 visitam instituições diferentes, trocam resultados. 5 perguntas: como fazem? quem faz? que documentos? como controlam erros? o que adaptamos?",
    conteudos: ["Guião de observação + matriz de boas práticas", "Entrevistas com pares de outras UGEAs", "Fotografia de documentos-modelo", "Plano de aplicação em 30 dias"],
    produto: "Relatório de Missão + Matriz de Boas Práticas + Plano de Aplicação.",
  },
  {
    id: "360", n: "04", name: "Programa 360° Anual", dur: "12 meses ★ recomendado", ganho: "Transformação estrutural",
    desc: "O programa completo: Diagnóstico → Capacitação local → Rotação → Simulação de ausência (30 dias) → Manual Interno de Continuidade.",
    conteudos: ["Fase I Diagnóstico de risco de dependência", "Fase II Formação + missões nacionais", "Fase III Rotação cruzada", "Fase IV Simulação: «e se o responsável faltar 30 dias?»", "Fase V Manual Interno de Continuidade"],
    produto: "10 planos individuais + 1 matriz de substituição + 1 relatório anual ao Director.",
  },
];

export const MATRIZ_ROTACAO = [
  { t: "T1", p: "Orçamento", s: "MEX" },
  { t: "T2", p: "MEX", s: "Património" },
  { t: "T3", p: "Património", s: "Orçamento" },
  { t: "T4", p: "Investimento", s: "Execução" },
  { t: "T5", p: "Execução", s: "Património" },
  { t: "T6", p: "Administração", s: "Orçamento" },
  { t: "T7", p: "Financeiro", s: "MEX" },
  { t: "T8", p: "Património", s: "Administração" },
  { t: "T9", p: "Investimento", s: "MEX" },
  { t: "T10", p: "Apoio admin.", s: "Património" },
];

// ─── RADAR DA INTEGRIDADE · checklist anti-atropelo UGEA (Dec. 79/2022) ─
export const CHECKLIST_UGEA = [
  { t: "Cabimento prévio no MEX", d: "Há dotação reservada antes de qualquer compromisso? (Art. 11 — sem cabimento, sem contrato)", art: "Dec. 79/2022 · Art. 11" },
  { t: "Plano de contratações no e-SISTAFE", d: "Concurso consta do plano anual actualizado no sistema e enviado à UFSA?", art: "Art. 14–16" },
  { t: "Anúncio público + portal UFSA", d: "Anúncio publicado com prazos, encargos e garantia provisória? Nada de convite directo disfarçado.", art: "Art. 34–35" },
  { t: "Júri ímpar e independente", d: "Mínimo 3 membros, ≥1 da UGEA, sem conflito de interesses, constituído antes da abertura?", art: "Art. 46–47" },
  { t: "Concorrentes habilitados", d: "NUIT válido, alvará da classe exigida, certidões fiscais e INSS em dia?", art: "Art. 77–78" },
  { t: "Avaliação documentada", d: "Relatório de avaliação, classificação e recomendação de adjudicação assinado?", art: "Art. 49" },
  { t: "Contrato com cláusulas essenciais", d: "Partes, objecto, prazo, preço, garantias, penalidades e moeda (MT)?", art: "Art. 113–122" },
  { t: "Sem fraccionamento", d: "Valor não foi partido para fugir ao concurso público? (sinal clássico de atropelo)", art: "Probidade" },
  { t: "Declaração de bens em dia", d: "Membros da UGEA e utilizadores e-SISTAFE com declaração (Lei 12/2024, art. 57)?", art: "Lei 12/2024" },
  { t: "Rastreabilidade total", d: "Todo o processo arquivado e rastreável no MEX/MPE por 5 anos? Quem assina, responde.", art: "Lei 14/2020" },
];

export const SISTAFE_MANUALS = [
  {
    id: "essencial",
    name: "Manual Essencial e-SISTAFE",
    price: 300,
    pages: 96,
    tag: "Best-seller",
    desc: "O essencial para não falhar: acessos, MEX passo-a-passo, erros comuns e 40 imagens reais do sistema.",
    includes: ["PDF 96 páginas, actualizado 2026", "40 capturas comentadas", "Checklist de fim de mês", "Glossário CEDSIF (120 termos)", "Actualizações gratuitas 12 meses"],
    featured: false,
  },
  {
    id: "completo",
    name: "Manual Completo + Exercícios",
    price: 500,
    pages: 214,
    tag: "Recomendado CEDSIF",
    desc: "Do zero ao pagamento: MPO→MEX→MPE→MFP com 25 exercícios corrigidos e casos reais de UGEA (Dec. 79/2022).",
    includes: ["PDF 214 páginas + caderno de exercícios", "25 exercícios com soluções", "Casos reais: pagamento a fornecedor, ajudas de custo, salários", "Modelos de NUIT, guias e requisições", "Certificado digital de conclusão", "Acesso ao grupo de estudo WhatsApp"],
    featured: true,
  },
  {
    id: "formador",
    name: "Pack Formador Institucional",
    price: 1500,
    pages: 320,
    tag: "Para instituições",
    desc: "Licença para formar a sua equipa: slides, testes e direito de impressão interna até 30 cópias.",
    includes: ["Tudo do Manual Completo", "120 slides editáveis", "10 testes de avaliação + grelhas", "Licença institucional (30 impressões)", "Sessão Zoom de 2h com o autor"],
    featured: false,
  },
];

export const SISTAFE_TRAINING = [
  { name: "e-SISTAFE Essencial", dur: "2 dias · Maputo / Zoom", price: 5000, desc: "Acessos, navegação, MEX básico e erros que bloqueiam pagamentos.", seats: "12 vagas/turma" },
  { name: "Execução Avançada + e-Folha", dur: "4 dias · Maputo", price: 8500, desc: "Ciclo completo da despesa, reconciliações, salários e fecho mensal.", seats: "10 vagas/turma" },
  { name: "Mentoria UGEA (in-company)", dur: "5 dias · na sua instituição", price: 12000, desc: "Formamos a sua UGEA com dados reais, auditoria de processos e plano de melhoria.", seats: "Sob consulta" },
];

export const SISTAFE_GLOSSARY = [
  { t: "CEDSIF", d: "Centro de Desenvolvimento de Sistemas de Informação de Finanças. Gere e mantém o e-SISTAFE." },
  { t: "CUT", d: "Conta Única do Tesouro. Conta central onde se concentram os fundos do Estado." },
  { t: "Cabimento", d: "Reserva de dotação orçamental que garante que há dinheiro antes de assumir a despesa." },
  { t: "Compromisso", d: "Acto que vincula o Estado ao pagamento (ex.: contrato assinado, requisição aprovada)." },
  { t: "Liquidação", d: "Confirmação de que o bem/serviço foi recebido e o valor é devido." },
  { t: "NUIT", d: "Número Único de Identificação Tributária. Obrigatório para fornecedores e funcionários." },
  { t: "UGEA", d: "Unidade Gestora Executora das Aquisições. Trata concursos e contratos em cada instituição." },
  { t: "e-Folha", d: "Sub-sistema que processa salários da Função Pública: vencimentos, descontos e ficheiros bancários." },
  { t: "Dotação", d: "Valor autorizado no Orçamento do Estado para cada rubrica e instituição." },
  { t: "Guia de receita", d: "Documento que regista valores cobrados pelo Estado (taxas, multas, serviços)." },
];

export const SISTAFE_QUIZ = [
  { q: "Qual é a ordem correcta do ciclo da despesa?", opts: ["Pagamento → Cabimento → Liquidação", "Cabimento → Compromisso → Liquidação → Pagamento", "Liquidação → Cabimento → Pagamento", "Compromisso → Pagamento → Cabimento"], a: 1 },
  { q: "O que é a CUT?", opts: ["Cartão Único de Transporte", "Conta Única do Tesouro", "Comissão de Utilização de Taxas", "Cadastro Único de Trabalhadores"], a: 1 },
  { q: "Quem gere o e-SISTAFE?", opts: ["Banco de Moçambique", "CEDSIF", "AT — Autoridade Tributária", "Tribunal Administrativo"], a: 1 },
  { q: "O que valida o cabimento?", opts: ["Que o fornecedor existe", "Que há dotação disponível antes de gastar", "Que o NUIT é válido", "Que a conta bancária tem saldo"], a: 1 },
];

export const SISTAFE_FAQ = [
  { q: "Como recebo o manual após pagar?", a: "Pague via M-Pesa (84 489 8420) ou e-Mola (87 048 8008), envie o comprovativo no WhatsApp e recebe o PDF + factura com NUIT em menos de 2 horas (8h–20h)." },
  { q: "O manual serve para iniciantes?", a: "Sim. O Essencial parte do zero (pedir acesso, primeiro login) e o Completo leva-o até processar salários. 70% dos leitores nunca tinham aberto o e-SISTAFE." },
  { q: "Dão certificado na formação?", a: "Sim — certificado digital com carga horária, assinado por Joaquim E. Machava, válido para progressão e dossier da UGEA." },
  { q: "Fazem formação na província?", a: "Sim. Presencial em Maputo mensalmente; para outras províncias juntamos 8+ formandos ou fazemos in-company (Mentoria UGEA 12.000 MT)." },
  { q: "Posso oferecer um café ao projecto?", a: "Sim! 💧 'Buy me a water' — qualquer valor para M-Pesa 84 489 8420 mantém os guias gratuitos no ar. Envia 'WATER' no WhatsApp e recebe o seu nome no mural de apoiantes." },
];

// ─── KEYHOUSE COMPLETA · donos + intermediários + clientes num só ──
// Padrão completo: flats, casas, moradias premium/executivas, duplex/triplex,
// armazéns, estâncias turísticas, terrenos + terrenos praia (Ponta Ouro → Barra).
// Taxa KEYHOUSE 3–5% — automática no fecho, sem ir atrás de ninguém.
// IMAGENS: terrenos praia = dunas/areal sem edifícios · armazéns = industrial ·
// premium = villas com piscina · turísticas = lodges palhota · duplex = arquitectura moderna.
export const KEYHOUSE_STATS = [
  { v: "30+", l: "Imóveis em carteira" },
  { v: "100k ha", l: "Machambas Moamba+Matutuíne" },
  { v: "14", l: "Zonas de praia" },
  { v: "10%", l: "Arrendamento · 5% KH" },
];

export const KEYHOUSE_CATS = ["Todos", "Terrenos Praia", "Terrenos", "Machambas & Agro", "Pedreiras & Calcário", "Armazéns", "Estâncias Turísticas", "Premium & Executivas", "Duplex/Triplex", "Flats", "Casas", "Moradias", "Escritórios"] as const;

export const KEYHOUSE_LISTINGS = [
  // ── DESTAQUE MACANETA 15ha ──
  { id: "KH-MAC-15HA", cat: "Terrenos Praia", type: "15 Hectares · Macaneta", zone: "Macaneta · Marracuene", price: 15000000, per: "venda · 1M/ha", beds: 0, baths: 0, area: 150000, tag: "DESTAQUE ★", owner: "Dono directo", img: "https://images.pexels.com/photos/18149054/pexels-photo-18149054.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "15ha a 100m da praia. Dunas, acesso 4x4. Ideal resort / condomínio. DUAT em trato.", beach: "100m da praia", access: "4x4 · dunas", docs: "DUAT em trato" },
  // ── PONTA OURO → MALONGANE (imagens únicas) ──
  { id: "KH-PO-01", cat: "Terrenos Praia", type: "Terreno 800m² · Ponta de Ouro", zone: "Ponta de Ouro · Matutuíne", price: 2000000, per: "venda", beds: 0, baths: 0, area: 800, tag: "Beira-mar ★", owner: "Dono directo", img: "https://images.pexels.com/photos/16383245/pexels-photo-16383245.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "20x40 beira-mar. Via Mamoli ou Ponta d'Ouro. Para lodge / moradia praia.", beach: "Beira-mar", access: "4x4 recomendado", docs: "DUAT a confirmar" },
  { id: "KH-PM-01", cat: "Terrenos Praia", type: "Terreno 500m² · Malongane beira-mar", zone: "Ponta Malongane · Matutuíne", price: 1500000, per: "venda", beds: 0, baths: 0, area: 500, tag: "Beira-mar", owner: "Dono directo", img: "https://images.pexels.com/photos/16582229/pexels-photo-16582229.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "20x25 beira-mar, vizinho Ponta d'Ouro. Menos confusão, mais privacidade.", beach: "Beira-mar", access: "4x4 · dunas", docs: "DUAT a confirmar" },
  { id: "KH-PM-02", cat: "Terrenos Praia", type: "Terreno 800m² · Malongane 600m", zone: "Ponta Malongane · 600m praia", price: 400000, per: "venda", beds: 0, baths: 0, area: 800, tag: "Expansível", owner: "Dono directo", img: "https://images.pexels.com/photos/1732395/pexels-photo-1732395.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "20x40 a 600m da praia + possibilidade de expandir área. Visita com 4x4 e guia de dunas.", beach: "600m da praia", access: "4x4 + guia", docs: "DUAT tratável" },
  // ── SUL: Matutuíne / Moamba (MACHAMBAS) / Catembe / Costa Sol ──
  { id: "KH-MAT-01", cat: "Terrenos", type: "Terreno 1200m² · Matutuíne", zone: "Matutuíne · Maputo", price: 1800000, per: "venda", beds: 0, baths: 0, area: 1200, tag: "DUAT", owner: "Dono directo", img: "https://images.pexels.com/photos/30255135/pexels-photo-30255135.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Terra agrícola plana, estrada rural, machambas vizinhas. Para moradia / agro.", beach: "—", access: "Viatura normal", docs: "DUAT" },
  { id: "KH-MAT-MACH-50K", cat: "Machambas & Agro", type: "Machamba 50.000 ha · Matutuíne", zone: "Matutuíne · Maputo", price: 0, per: "sob consulta", beds: 0, baths: 0, area: 500000000, tag: "AGRO ★", owner: "Dono directo", img: "https://images.pexels.com/photos/30255157/pexels-photo-30255157.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "50.000 hectares de machamba. Terra fértil, água próxima. Para agro-negócio / cooperativa. Preço por bloco sob consulta.", beach: "—", access: "Terra + trilhos", docs: "DUAT agro" },
  { id: "KH-MOA-01", cat: "Machambas & Agro", type: "Machamba 2000m² · Moamba", zone: "Moamba · Maputo", price: 1500000, per: "venda", beds: 0, baths: 0, area: 2000, tag: "Machamba", owner: "Dono directo", img: "https://images.pexels.com/photos/724384/pexels-photo-724384.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Machamba produtiva, coqueiros e rega. Junto ao corredor EN4. Água e luz próximas.", beach: "—", access: "EN4", docs: "DUAT" },
  { id: "KH-MOA-MACH-50K", cat: "Machambas & Agro", type: "Machamba 50.000 ha · Moamba", zone: "Moamba · Maputo", price: 0, per: "sob consulta", beds: 0, baths: 0, area: 500000000, tag: "AGRO ★", owner: "Dono directo", img: "https://images.pexels.com/photos/30255136/pexels-photo-30255136.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "50.000 hectares de machamba no corredor. Ideal cana, milho, gado. Parcelas a partir de 5ha.", beach: "—", access: "EN4 + ramais", docs: "DUAT agro" },
  { id: "KH-PED-01", cat: "Pedreiras & Calcário", type: "Pedreira Calcário · Matutuíne", zone: "Matutuíne · Maputo", price: 0, per: "sob consulta", beds: 0, baths: 0, area: 0, tag: "Pedreira ★", owner: "Dono directo", img: "https://images.pexels.com/photos/17146231/pexels-photo-17146231.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Pedreira de calcário activa. Reserva para construção e cimento. Licença mineira tratável.", beach: "—", access: "Camião", docs: "Licença mineira" },
  { id: "KH-PED-02", cat: "Pedreiras & Calcário", type: "Pedreira + Brita · Moamba", zone: "Moamba · Maputo", price: 0, per: "sob consulta", beds: 0, baths: 0, area: 0, tag: "Brita", owner: "Dono directo", img: "https://images.pexels.com/photos/33122148/pexels-photo-33122148.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Frente de brita + calcário, máquinas no local. Para fornecimento de obra EN4.", beach: "—", access: "EN4 · camião", docs: "Licença mineira" },
  { id: "KH-CAT-01", cat: "Terrenos Praia", type: "Terreno 1000m² · Catembe", zone: "Catembe · Maputo", price: 3500000, per: "venda", beds: 0, baths: 0, area: 1000, tag: "Vista baía", owner: "Intermediário KH-09", img: "https://images.pexels.com/photos/27790725/pexels-photo-27790725.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Vista baía de Maputo, ponte ao lado. Para moradia premium / restaurante.", beach: "Vista mar", access: "Asfalto", docs: "DUAT + licença" },
  { id: "KH-CS-01", cat: "Terrenos Praia", type: "Terreno 650m² · Costa do Sol", zone: "Costa do Sol · Maputo", price: 4800000, per: "venda", beds: 0, baths: 0, area: 650, tag: "Prime", owner: "Dono directo", img: "https://images.pexels.com/photos/18958717/pexels-photo-18958717.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Zona nobre, marginal. Para moradia executiva / clínica privada.", beach: "150m da praia", access: "Asfalto", docs: "Escritura" },
  // ── GAZA: Bilene / Xai-Xai (imagens únicas) ──
  { id: "KH-04", cat: "Terrenos Praia", type: "Terreno 2000m² · Bilene", zone: "Bilene · Gaza", price: 6800000, per: "venda", beds: 0, baths: 0, area: 2000, tag: "Oportunidade", owner: "Dono directo", img: "https://images.pexels.com/photos/29326462/pexels-photo-29326462.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "2ª linha praia, DUAT tratado, ideal lodge.", beach: "2ª linha", access: "Asfalto + terra", docs: "DUAT tratado" },
  { id: "KH-XAI-01", cat: "Terrenos Praia", type: "Terreno 1500m² · Xai-Xai", zone: "Xai-Xai Praia · Gaza", price: 3200000, per: "venda", beds: 0, baths: 0, area: 1500, tag: "Praia", owner: "Dono directo", img: "https://images.pexels.com/photos/9494328/pexels-photo-9494328.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Areia branca, coqueiros. Para casa de férias / guesthouse.", beach: "300m da praia", access: "Terra boa", docs: "DUAT" },
  // ── INHAMBANE: Tofo / Tofinho / Cocos / Jangamo / Kissico / Barra ──
  { id: "KH-TOFO-01", cat: "Estâncias Turísticas", type: "Lodge 6 quartos · Tofo", zone: "Tofo · Inhambane", price: 22000000, per: "venda", beds: 6, baths: 6, area: 2500, tag: "Turística ★", owner: "Dono directo", img: "https://images.pexels.com/photos/7292829/pexels-photo-7292829.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Lodge operacional, palhotas + piscina. Clientela mergulho. Retorno imediato.", beach: "80m da praia", access: "Asfalto", docs: "Licença turismo" },
  { id: "KH-TOFINHO-01", cat: "Terrenos Praia", type: "Terreno 1800m² · Tofinho", zone: "Tofinho · Inhambane", price: 4500000, per: "venda", beds: 0, baths: 0, area: 1800, tag: "Surf", owner: "Intermediário KH-14", img: "https://images.pexels.com/photos/34059975/pexels-photo-34059975.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Falésia vista mar, surf point. Para eco-lodge / moradia.", beach: "Vista mar", access: "Terra", docs: "DUAT" },
  { id: "KH-COCOS-01", cat: "Terrenos Praia", type: "Terreno 2200m² · Baía dos Cocos", zone: "Baía dos Cocos · Inhambane", price: 5800000, per: "venda", beds: 0, baths: 0, area: 2200, tag: "Baía", owner: "Dono directo", img: "https://images.pexels.com/photos/724384/pexels-photo-724384.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Baía calma, coqueiral, água turquesa. Para resort boutique / casas.", beach: "Beira-mar", access: "Terra / 4x4 época chuva", docs: "DUAT" },
  { id: "KH-JANG-01", cat: "Terrenos Praia", type: "Terreno 1600m² · Jangamo", zone: "Jangamo · Inhambane", price: 2800000, per: "venda", beds: 0, baths: 0, area: 1600, tag: "Pesca", owner: "Dono directo", img: "https://images.pexels.com/photos/12016703/pexels-photo-12016703.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Vila piscatória autêntica, coqueiros em linha. Para lodge comunitário / casa.", beach: "200m da praia", access: "Terra", docs: "DUAT" },
  { id: "KH-KISS-01", cat: "Terrenos Praia", type: "Terreno 3000m² · Kissico", zone: "Lago Kissico · Inhambane", price: 1900000, per: "venda", beds: 0, baths: 0, area: 3000, tag: "Lago", owner: "Dono directo", img: "https://images.pexels.com/photos/30255142/pexels-photo-30255142.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Margem do lago, campos verdes, aves, sossego total. Para retiro / campismo chic.", beach: "Margem lago", access: "Terra", docs: "DUAT tratável" },
  { id: "KH-BAR-01", cat: "Estâncias Turísticas", type: "Lodge 8 quartos · Barra", zone: "Barra · Inhambane", price: 28000000, per: "venda", beds: 8, baths: 8, area: 4000, tag: "Resort ★", owner: "Dono directo", img: "https://images.pexels.com/photos/32262441/pexels-photo-32262441.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Palhotas entre palmeiras, restaurante, piscina. Operacional época alta cheia.", beach: "50m da praia", access: "Asfalto", docs: "Licença + DUAT" },
  { id: "KH-INH-01", cat: "Terrenos Praia", type: "Terreno 1200m² · Inhambane cidade", zone: "Inhambane · Inhambane", price: 2400000, per: "venda", beds: 0, baths: 0, area: 1200, tag: "Cidade-mar", owner: "Dono directo", img: "https://images.pexels.com/photos/30255137/pexels-photo-30255137.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Centro histórico, estrada rural, vista cais. Para pensão / escritório.", beach: "Vista baía", access: "Asfalto", docs: "Escritura" },
  // ── ARMAZÉNS (industrial real) ──
  { id: "KH-06", cat: "Armazéns", type: "Armazém 800m² · Machava", zone: "Machava · Matola", price: 220000, per: "/mês", beds: 0, baths: 2, area: 800, tag: "Logística", owner: "Dono directo", img: "https://images.pexels.com/photos/36006588/pexels-photo-36006588.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Pé-direito 9m, docas, trifásico, acesso N4.", beach: "—", access: "N4 · camião", docs: "Licença industrial" },
  { id: "KH-09", cat: "Armazéns", type: "Armazém 350m² · Beira", zone: "Beira · Sofala", price: 98000, per: "/mês", beds: 0, baths: 1, area: 350, tag: "Corredor", owner: "Dono directo", img: "https://images.pexels.com/photos/32390903/pexels-photo-32390903.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Junto ao corredor, cais de carga, escritório incluído.", beach: "—", access: "Corredor Beira", docs: "Licença" },
  { id: "KH-ARM-03", cat: "Armazéns", type: "Armazém 1200m² · Matola-Gare", zone: "Matola-Gare · Maputo", price: 320000, per: "/mês", beds: 0, baths: 2, area: 1200, tag: "Novo", owner: "Gestora", img: "https://images.pexels.com/photos/19962152/pexels-photo-19962152.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Novo, porta seccionada, parque 10 camiões, segurança 24h.", beach: "—", access: "N4", docs: "Novo" },
  // ── PREMIUM & EXECUTIVAS (villas piscina) ──
  { id: "KH-02", cat: "Premium & Executivas", type: "Moradia V4 Premium · Sommerschield", zone: "Sommerschield · Maputo", price: 18500000, per: "venda", beds: 4, baths: 3, area: 380, tag: "Premium ★", owner: "Dono directo", img: "https://images.pexels.com/photos/8134745/pexels-photo-8134745.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Piscina infinita, gerador total, domótica, suite master 60m². Escritura pronta.", beach: "—", access: "Asfalto", docs: "Escritura" },
  { id: "KH-PREM-02", cat: "Premium & Executivas", type: "Moradia V5 Executiva · Polana", zone: "Polana · Maputo", price: 24000000, per: "venda", beds: 5, baths: 5, area: 520, tag: "Executiva ★", owner: "Dono directo", img: "https://images.pexels.com/photos/8134750/pexels-photo-8134750.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Jardim 900m², piscina, casa hóspedes, escritório. Embaixadas ao lado.", beach: "—", access: "Asfalto", docs: "Escritura" },
  { id: "KH-PREM-03", cat: "Premium & Executivas", type: "Moradia V3 Sunset · Costa do Sol", zone: "Costa do Sol · Maputo", price: 14500000, per: "venda", beds: 3, baths: 4, area: 340, tag: "Sunset", owner: "Intermediário KH-14", img: "https://images.pexels.com/photos/24805054/pexels-photo-24805054.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Pôr-do-sol baía, terraço 100m², piscina aquecida. Chave na mão.", beach: "200m praia", access: "Asfalto", docs: "Escritura" },
  // ── DUPLEX / TRIPLEX ──
  { id: "KH-DUP-01", cat: "Duplex/Triplex", type: "Duplex T3 · Zimpeto Ville", zone: "Zimpeto · Maputo", price: 7500000, per: "venda", beds: 3, baths: 3, area: 210, tag: "Novo", owner: "Construtora", img: "https://images.pexels.com/photos/7031581/pexels-photo-7031581.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "2 pisos, quintal privativo, 2 estac. Condomínio novo com piscina comum.", beach: "—", access: "Asfalto", docs: "Escritura nova" },
  { id: "KH-TRI-01", cat: "Duplex/Triplex", type: "Triplex T4 · Sommerschield", zone: "Sommerschield · Maputo", price: 12000000, per: "venda", beds: 4, baths: 4, area: 310, tag: "Triplex ★", owner: "Construtora", img: "https://images.pexels.com/photos/37893361/pexels-photo-37893361.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "3 pisos + rooftop vista cidade. Elevador, gerador, 3 estac box.", beach: "—", access: "Asfalto", docs: "Escritura" },
  // ── FLATS / CASAS / ESCRITÓRIOS cidade (imagem urbana correcta) ──
  { id: "KH-01", cat: "Flats", type: "Flat T3 · Polana", zone: "Polana · Maputo", price: 45000, per: "/mês", beds: 3, baths: 2, area: 145, tag: "Verificado ★", owner: "Dono directo", img: "https://images.pexels.com/photos/30188151/pexels-photo-30188151.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Vista mar, mobilado executivo, segurança 24h, 2 estac." },
  { id: "KH-05", cat: "Flats", type: "Flat T2 · Matola", zone: "Matola · Mozal", price: 28000, per: "/mês", beds: 2, baths: 1, area: 85, tag: "Verificado ★", owner: "Intermediário KH-14", img: "https://images.pexels.com/photos/16787446/pexels-photo-16787446.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Condomínio fechado, ideal quadros Mozal / Beluluane." },
  { id: "KH-07", cat: "Casas", type: "Casa T3 · Zimpeto", zone: "Zimpeto · Maputo", price: 35000, per: "/mês", beds: 3, baths: 2, area: 180, tag: "Família", owner: "Dono directo", img: "https://images.pexels.com/photos/8550496/pexels-photo-8550496.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Quintal murado, tanque, anexo, rua asfaltada." },
  { id: "KH-03", cat: "Escritórios", type: "Escritório 120m² · Baixa", zone: "Baixa · Maputo", price: 95000, per: "/mês", beds: 0, baths: 2, area: 120, tag: "Prime", owner: "Gestora", img: "https://images.pexels.com/photos/9301737/pexels-photo-9301737.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Open-space, fibra, 6 estac., ideal BPO / banca." },
  { id: "KH-10", cat: "Estâncias Turísticas", type: "Guesthouse V3 · Vilankulo", zone: "Vilankulo · Inhambane", price: 12500000, per: "venda", beds: 3, baths: 2, area: 300, tag: "Praia", owner: "Dono directo", img: "https://images.pexels.com/photos/33549432/pexels-photo-33549432.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "300m da praia, 3 suites, ideal guesthouse, retorno turístico.", beach: "300m praia", access: "Asfalto", docs: "DUAT + licença" },
];

export const KEYHOUSE_FEES = [
  { deal: "Venda", taxa: "5% total", taxaCurta: "5%", quando: "No acto da escritura / sinal", exemplo: "Casa 5.2M → 260.000 MT", quem: "Vendedor (ou dividido por acordo escrito)" },
  { deal: "Arrendamento · 10% total", taxa: "10% do contrato (5% KEYHOUSE + 5% parceiro)", taxaCurta: "10%", quando: "Pago UMA VEZ na assinatura", exemplo: "Flat 28.000 × 12 = 336.000 → 33.600 (16.800 KH + 16.800 parceiro)", quem: "Senhorio (cliente não paga extra)" },
  { deal: "Intermediário parceiro (venda)", taxa: "3% parceiro + 2% KEYHOUSE = 5% total", taxaCurta: "5%", quando: "No fecho, reparto automático", exemplo: "Venda 6.8M → 204k parceiro + 136k KH", quem: "Dividido sem discussão — tabela afixada" },
  { deal: "Gestão / exclusivo", taxa: "3% mensal", taxaCurta: "3%", quando: "Mensal, com relatório", exemplo: "Renda 95.000 → 2.850 MT/mês", quem: "Dono, com visitas + cobrança" },
];

// REGRA ARRENDAMENTO (sócio): 10% TOTAL do contrato, pago UMA VEZ no fecho.
// Desses 10%, 5% é KEYHOUSE Properties e 5% é parceiro. Simples e afixada.
export const KEYHOUSE_RENDA_RULE = {
  total: "10% do valor total do contrato",
  reparte: "5% KEYHOUSE Properties + 5% parceiro",
  quando: "Pago UMA VEZ na assinatura",
  exemploCurto: "Flat 28.000 × 12 meses = 336.000 → 10% = 33.600 (16.800 KH + 16.800 parceiro)",
};

export const KEYHOUSE_ROLES = [
  { id: "dono", nome: "Sou DONO", sub: "Armazém · flat · casa · moradia · terreno", ganhos: ["Anúncio + fotos + verificação grátis", "Visitas filtradas, sem curiosos", "Contrato + registo tratados", "Recebe 95% (venda) — taxa só no fecho"], cta: "Registar meu imóvel" },
  { id: "inter", nome: "Sou INTERMEDIÁRIO", sub: "Traz imóvel ou cliente, ganha 3%", ganhos: ["Código parceiro KH (ex.: KH-14)", "Tabela 3% afixada, sem negociar", "Leads da sua zona no WhatsApp", "Pagamento em 48h após fecho"], cta: "Ser parceiro KH" },
  { id: "cliente", nome: "Sou CLIENTE", sub: "Quero visitar, arrendar ou comprar", ganhos: ["Visita em 24h, sem taxa de visita", "Preço do dono — sem inflacionar", "Acompanhamento até à chave", "Recibo + contrato em português"], cta: "Pedir visita" },
];
