// â”€â”€â”€ COFRE CENTRAL Â· Ecossistema Machava Â· 4 subsistemas â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Regra: sÃ³ links reais. Nada de redes inventadas.
export const COFRE = {
  nome: "Joaquim EugÃ©nio Machava",
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

// â”€â”€â”€ META DOS 4 SUBSISTEMAS (ordem definida no briefing) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const PROJECTS_META = [
  {
    id: "keyhouse",
    ordem: "01",
    nome: "KEYHOUSE PROPERTIES",
    categoria: "ImobiliÃ¡rio Â· terrenos Â· arrendamento Â· investimento",
    promessa: "ImÃ³veis e oportunidades com mais confianÃ§a, organizaÃ§Ã£o e transparÃªncia.",
    publico: "Compradores, arrendatÃ¡rios e investidores em Maputo e Gaza.",
    cta: "Explorar KEYHOUSE",
    accent: "#C9A227",
    accentSoft: "#FBF3D5",
  },
  {
    id: "motomoz",
    ordem: "02",
    nome: "MOTOMOZ",
    categoria: "Mobilidade Â· mototÃ¡xi Â· soluÃ§Ãµes B2B",
    promessa: "Mobilidade mais organizada, acessÃ­vel e conectada.",
    publico: "Passageiros, pilotos e empresas em Maputo/Matola.",
    cta: "Conhecer MOTOMOZ",
    accent: "#EA580C",
    accentSoft: "#FFF1E6",
  },
  {
    id: "sistafe",
    ordem: "03",
    nome: "MOZ-SISTAFE",
    categoria: "EducaÃ§Ã£o digital Â· manuais e formaÃ§Ã£o e-SISTAFE",
    promessa: "Procedimentos e conhecimentos administrativos mais compreensÃ­veis.",
    publico: "FuncionÃ¡rios pÃºblicos, UGEAs e cidadÃ£os.",
    cta: "Explorar MOZ-SISTAFE",
    accent: "#1E4ED8",
    accentSoft: "#E8EEFD",
  },
  {
    id: "cvmaker",
    ordem: "04",
    nome: "CV-MAKER",
    categoria: "Carreira Â· currÃ­culo Â· empregabilidade",
    promessa: "Apresentar melhor as suas competÃªncias e oportunidades.",
    publico: "Jovens, recÃ©m-licenciados e profissionais em transiÃ§Ã£o.",
    cta: "Criar o meu CV",
    accent: "#7C3AED",
    accentSoft: "#F0E9FD",
  },
] as const;

// â”€â”€â”€ CV-MAKER Â· dados reais de apoio (sem mÃ©tricas inventadas) â”€â”€â”€â”€
export const CV_TIPS = [
  { t: "Uma pÃ¡gina vence duas", d: "Recrutadores em Maputo lÃªem em 30 segundos. CabeÃ§alho + resumo de 3 linhas + experiÃªncia recente primeiro." },
  { t: "NÃºmeros, nÃ£o adjectivos", d: "Troque Â«responsÃ¡vel e dinÃ¢micoÂ» por Â«atendi 20 clientes/diaÂ» ou Â«fechei 12 processos no MEXÂ»." },
  { t: "NUIT e contactos no topo", d: "Nome, telefone WhatsApp, email profissional e cidade. Sem foto distorcida, sem alcunhas." },
  { t: "PDF com nome profissional", d: "Guarde como Nome-Apelido-CV-2026.pdf. Nunca Â«CV-final-final-2.pdfÂ»." },
  { t: "Adapte ao anÃºncio", d: "Uma vaga UGEA pede cabimento e Decreto 79/2022; uma vaga entregas pede rotas e carta. Um CV por vaga." },
];

export const CV_EXAMPLE = {
  nome: "Ancha JoÃ£o Langa",
  titulo: "TÃ©cnica Administrativa Â· Atendimento e Arquivo",
  email: "ancha.langa@email.com",
  telefone: "+258 84 000 0000",
  cidade: "Maputo, MoÃ§ambique",
  resumo: "TÃ©cnica administrativa com 3 anos em atendimento, arquivo e apoio a processos de aquisiÃ§Ã£o. Organizada, pontual e com domÃ­nio de Word, Excel e WhatsApp Business.",
  exps: [{ cargo: "Assistente Administrativa", empresa: "ClÃ­nica Polana", periodo: "2023 â€” Presente", desc: "Atendimento a 30 utentes/dia, arquivo de 500+ processos, apoio ao plano de compras." }],
  edus: [{ curso: "Contabilidade â€” NÃ­vel MÃ©dio", inst: "Instituto Comercial de Maputo", ano: "2021" }],
  skills: ["Atendimento", "Arquivo", "Excel", "WhatsApp Business", "Pontualidade"],
  langs: ["PortuguÃªs (nativo)", "Changana (fluente)", "InglÃªs (bÃ¡sico)"],
};

export const waLink = (msg: string, num = COFRE.whatsappIntl) =>
  `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;

// â”€â”€â”€ MOTOMOZ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const MOTO_ZONES = [
  { from: "Baixa", to: "Museu", km: 3.2, price: 80 },
  { from: "Museu", to: "Xiquelene", km: 5.8, price: 120 },
  { from: "Baixa", to: "Junta", km: 7.5, price: 150 },
  { from: "Xiquelene", to: "Benfica", km: 9.4, price: 180 },
  { from: "Baixa", to: "Zimpeto", km: 14.2, price: 250 },
  { from: "Museu", to: "Matola", km: 12.0, price: 220 },
];

// â”€â”€â”€ MOTOMOZ NACIONAL Â· Rovuma â†’ Maputo (fluxo rÃ¡pido, intuitivo) â”€â”€â”€
// Regra Zuckerberg: 1 ecrÃ£, 3 toques. PreÃ§o base = ponto de partida local.
export const MOTO_NATIONAL = [
  { id: "cabo", provincia: "Cabo Delgado", capital: "Pemba", zona: "Norte Â· Rovuma", base: 60, status: "A abrir", pilotos: 0, eta: "Em breve" },
  { id: "niassa", provincia: "Niassa", capital: "Lichinga", zona: "Norte", base: 60, status: "A abrir", pilotos: 0, eta: "Em breve" },
  { id: "nampula", provincia: "Nampula", capital: "Nampula", zona: "Norte", base: 55, status: "Piloto", pilotos: 25, eta: "~15 min" },
  { id: "zambezia", provincia: "ZambÃ©zia", capital: "Quelimane", zona: "Centro", base: 55, status: "Piloto", pilotos: 30, eta: "~15 min" },
  { id: "tete", provincia: "Tete", capital: "Tete", zona: "Centro", base: 55, status: "Piloto", pilotos: 20, eta: "~15 min" },
  { id: "manica", provincia: "Manica", capital: "Chimoio", zona: "Centro", base: 55, status: "Piloto", pilotos: 35, eta: "~12 min" },
  { id: "sofala", provincia: "Sofala", capital: "Beira", zona: "Centro", base: 50, status: "Activo", pilotos: 120, eta: "~10 min" },
  { id: "inhambane", provincia: "Inhambane", capital: "Inhambane", zona: "Sul", base: 50, status: "Activo", pilotos: 80, eta: "~10 min" },
  { id: "gaza", provincia: "Gaza", capital: "Xai-Xai", zona: "Sul", base: 50, status: "Activo", pilotos: 150, eta: "~9 min" },
  { id: "provincia-maputo", provincia: "Maputo ProvÃ­ncia", capital: "Matola", zona: "Sul", base: 50, status: "Activo", pilotos: 300, eta: "~9 min" },
  { id: "cidade-maputo", provincia: "Maputo Cidade", capital: "Maputo", zona: "Sul Â· Capital", base: 50, status: "Activo", pilotos: 550, eta: "~7 min" },
];

// Pedido ultra-simples: nem precisa saber km. 3 botÃµes gigantes.
export const MOTO_QUICK = [
  { id: "curta", nome: "Curta", desc: "Bairro Â· atÃ© 3 km", price: 70, ex: "Mercado â†’ Escola" },
  { id: "media", nome: "MÃ©dia", desc: "Zona Â· 3 a 8 km", price: 130, ex: "Baixa â†’ Xiquelene" },
  { id: "longa", nome: "Longa", desc: "Cidade Â· 8 km+", price: 220, ex: "Baixa â†’ Zimpeto" },
];

export const MOTO_PLANS = [
  {
    id: "start",
    name: "START",
    price: 2500,
    tag: "Pequenas equipas",
    desc: "Para negÃ³cios com 1â€“5 colaboradores que precisam de mobilidade pontual.",
    features: ["AtÃ© 40 corridas/mÃªs incluÃ­das", "1 conta gestora + recibos PDF", "Prioridade standard no pico", "Suporte WhatsApp (8hâ€“18h)", "RelatÃ³rio mensal simples"],
    cta: "Quero o plano START",
    featured: false,
  },
  {
    id: "business",
    name: "BUSINESS",
    price: 4500,
    tag: "O mais contratado",
    desc: "Para empresas, escolas e clÃ­nicas com movimento diÃ¡rio.",
    features: ["AtÃ© 120 corridas/mÃªs incluÃ­das", "3 contas gestoras + centro de custo", "Prioridade executiva + piloto dedicado", "Suporte WhatsApp prioritÃ¡rio (6hâ€“22h)", "RelatÃ³rio + factura mensal com NUIT", "CÃ³digo de conduta & seguro incluÃ­dos"],
    cta: "Quero o plano BUSINESS",
    featured: true,
  },
  {
    id: "corporate",
    name: "CORPORATE",
    price: 7500,
    tag: "OperaÃ§Ãµes crÃ­ticas",
    desc: "Para logÃ­stica, entregas e turnos â€” cobertura total Maputo/Matola.",
    features: ["Corridas ilimitadas (polÃ­tica justa)", "Gestores ilimitados + API WhatsApp", "Frota dedicada 24/7 + dispatcher", "SLA 15 min ou corrida grÃ¡tis", "Auditoria trimestral de rotas", "FormaÃ§Ã£o de pilotos Ã  medida"],
    cta: "Falar com comercial",
    featured: false,
  },
];

export const MOTO_TESTIMONIALS = [
  { name: "Ancha Langa", role: "Gestora de clÃ­nica Â· Polana", text: "Antes perdÃ­amos 40 min por entrega de anÃ¡lises. Com o plano BUSINESS o piloto dedicado chega em 9 minutos. RelatÃ³rio fecha com a contabilidade sem stress.", stars: 5 },
  { name: "DÃ©rcio Muianga", role: "Piloto verificado Â· Xiquelene", text: "Sou piloto MOTOMOZ hÃ¡ 8 meses. Ganho 18.500 MT limpos por mÃªs, tenho seguro e os clientes jÃ¡ me chamam pelo nome. Ã‰ outro nÃ­vel.", stars: 5 },
  { name: "FAST LogÃ­stica", role: "Cliente Corporate Â· Matola", text: "SLA de 15 minutos cumprido em 97% das corridas. O dispatcher no WhatsApp resolve tudo. RenovÃ¡mos por 12 meses.", stars: 5 },
];

export const MOTO_FAQ = [
  { q: "Quanto custa uma corrida?", a: "Tarifa transparente: base 50 MT + 18 MT/km. Taxa de plataforma fixa de 5 MT por corrida â€” vai para seguro e suporte. Simule acima e receba o preÃ§o exacto no WhatsApp." },
  { q: "Como me torno piloto MOTOMOZ?", a: "Precisa de carta A, mota com livrete, capacete extra e registo criminal. Preencha o formulÃ¡rio, fazemos verificaÃ§Ã£o em 48h + formaÃ§Ã£o de 1 dia (Ã©tica, rotas, primeiros socorros). Sem taxa de entrada." },
  { q: "O que inclui o seguro?", a: "Toda a corrida MOTOMOZ inclui seguro de acidentes pessoais (piloto + passageiro) atÃ© 150.000 MT e apoio em caso de sinistro via WhatsApp 24/7." },
  { q: "Como funciona o plano empresa?", a: "Escolhe START, BUSINESS ou CORPORATE, recebe conta gestora, define tectos por colaborador e recebe factura mensal com NUIT. Corridas fora do pacote tÃªm 10% de desconto." },
  { q: "E se o piloto nÃ£o chegar?", a: "SLA BUSINESS/CORPORATE: se passar 15 min do ETA, a corrida Ã© grÃ¡tis e recebe 50 MT de crÃ©dito. Passageiros avulsos recebem re-atribuiÃ§Ã£o prioritÃ¡ria automÃ¡tica." },
];

// â”€â”€â”€ MOZ-SISTAFE Â· nomenclatura oficial CEDSIF (Decreto 26/2021) â”€â”€â”€â”€â”€
export const SISTAFE_MODULES = [
  { code: "MPO", name: "PlanificaÃ§Ã£o e OrÃ§amentaÃ§Ã£o", desc: "ElaboraÃ§Ã£o, aprovaÃ§Ã£o e monitoria do PES/OE. Onde todo o dinheiro comeÃ§a.", color: "#143a82", lessons: 14, level: "Essencial" },
  { code: "MEX", name: "ExecuÃ§Ã£o do PES e OE", desc: "Cabimento â†’ Compromisso â†’ LiquidaÃ§Ã£o â†’ Pagamento. O coraÃ§Ã£o do e-SISTAFE.", color: "#b8941f", lessons: 22, level: "CrÃ­tico" },
  { code: "MPE", name: "PatrimÃ³nio do Estado", desc: "InventÃ¡rio, abate, transferÃªncias e e-InventÃ¡rio. Nenhum bem sem registo.", color: "#5b5b00", lessons: 12, level: "CrÃ­tico" },
  { code: "MIP", name: "Investimento PÃºblico", desc: "FormulaÃ§Ã£o e gestÃ£o de projectos de investimento e SNIP.", color: "#0e7c4a", lessons: 10, level: "IntermÃ©dio" },
  { code: "MFP", name: "Folha de Pagamentos", desc: "SalÃ¡rios, descontos, IRPS, INSS e ficheiros bancÃ¡rios (e-Folha).", color: "#0b6e7c", lessons: 12, level: "CrÃ­tico" },
  { code: "MRR", name: "Recolha da Receita", desc: "Guias, NUIT, e-TributaÃ§Ã£o e conciliaÃ§Ã£o de receitas prÃ³prias.", color: "#0e7c4a", lessons: 11, level: "IntermÃ©dio" },
  { code: "MGI", name: "GestÃ£o de InformaÃ§Ãµes", desc: "RelatÃ³rios, balancetes, CUT e informaÃ§Ã£o para decisÃ£o.", color: "#7c2d8e", lessons: 9, level: "AvanÃ§ado" },
  { code: "UGEA", name: "ContrataÃ§Ã£o PÃºblica", desc: "Plano de contrataÃ§Ãµes, concursos e contratos. Regido pelo Decreto 79/2022, supervisÃ£o UFSA.", color: "#1d1d1d", lessons: 16, level: "AvanÃ§ado" },
];

// â”€â”€â”€ BASE LEGAL (verificar sempre no Boletim da RepÃºblica / Imprensa Nacional) â”€
export const SISTAFE_BASE_LEGAL = [
  { sigla: "Lei 14/2020", nome: "Lei do SISTAFE", desc: "Regras de planificaÃ§Ã£o, orÃ§amentaÃ§Ã£o, execuÃ§Ã£o, controlo e avaliaÃ§Ã£o.", link: "Boletim da RepÃºblica, 23 Dez 2020" },
  { sigla: "Dec. 26/2021", nome: "Regulamento do SISTAFE", desc: "Define os 11 mÃ³dulos oficiais: MPO, MEX, MIP, MPE, MFP, MDP, MGE, MRR, MGI, MAI, MAS.", link: "BR, 3 Mai 2021" },
  { sigla: "Dec. 79/2022", nome: "ContrataÃ§Ã£o PÃºblica", desc: "Regulamento de obras, bens e serviÃ§os. UGEA + JÃºri Ã­mpar + UFSA. Artigos 34, 35, 46, 47, 77, 78.", link: "BR, 30 Dez 2022" },
  { sigla: "Lei 12/2024", nome: "Probidade + PatrimÃ³nio", desc: "DeclaraÃ§Ã£o de bens obrigatÃ³ria: membros UGEA, utilizadores e-SISTAFE, tesoureiros (art. 57).", link: "BR, 18 Jun 2024" },
  { sigla: "UFSA", nome: "SupervisÃ£o das AquisiÃ§Ãµes", desc: "Coordena e supervisiona a contrataÃ§Ã£o pÃºblica. Portal: ufsa.gov.mz", link: "ufsa.gov.mz" },
  { sigla: "CEDSIF", nome: "Gestor do e-SISTAFE", desc: "Desenvolve e mantÃ©m o sistema. Fonte oficial de mÃ³dulos e manuais.", link: "cedsif.gov.mz" },
];

// â”€â”€â”€ PROGRAMA 360Â° Â· 10 tÃ©cnicos â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const MODELOS_360 = [
  {
    id: "academia", n: "01", name: "Academia Itinerante", dur: "3â€“5 dias", ganho: "Conhecimento aplicado",
    desc: "Os 10 tÃ©cnicos viajam juntos para polos nacionais (>60 km: Xai-Xai, ChÃ³kwÃ¨, Bilene) com agenda fechada: tema â†’ instituiÃ§Ã£o anfitriÃ£ â†’ objectivos â†’ relatÃ³rio.",
    conteudos: ["GestÃ£o orÃ§amental + ciclo da despesa", "MEX: cabimentaÃ§Ã£o, liquidaÃ§Ã£o, pagamento", "MPE: ciclo patrimonial e e-InventÃ¡rio", "ProgramaÃ§Ã£o financeira e prestaÃ§Ã£o de contas", "Arquivo e rastreabilidade documental"],
    produto: "Cada tÃ©cnico entrega: Â«O que aprendi + como aplicarei + que procedimento melhoramosÂ».",
  },
  {
    id: "rotacao", n: "02", name: "RotaÃ§Ã£o TÃ©cnica 10Ã—10", dur: "10â€“12 meses", ganho: "Continuidade (anti-dependÃªncia)",
    desc: "Cada tÃ©cnico mantÃ©m a funÃ§Ã£o principal e ganha uma Ã¡rea secundÃ¡ria. Meta: nenhum processo crÃ­tico depende de 1 pessoa â€” sempre 2 capazes.",
    conteudos: ["Matriz Principal Ã— SecundÃ¡ria (OrÃ§amento/MEX/PatrimÃ³nio/Investimento)", "Plano individual de desenvolvimento", "AvaliaÃ§Ã£o BÃ¡sico â†’ IntermÃ©dio â†’ AvanÃ§ado", "Cobertura de fÃ©rias, doenÃ§a, mobilidade"],
    produto: "Matriz de SubstituiÃ§Ã£o afixada: Processo â†’ ResponsÃ¡vel â†’ Suplente â†’ Prazo.",
  },
  {
    id: "missao", n: "03", name: "MissÃ£o de Aprendizagem", dur: "3â€“4 dias / missÃ£o", ganho: "Benchmarking real",
    desc: "Equipas de 5 visitam instituiÃ§Ãµes diferentes, trocam resultados. 5 perguntas: como fazem? quem faz? que documentos? como controlam erros? o que adaptamos?",
    conteudos: ["GuiÃ£o de observaÃ§Ã£o + matriz de boas prÃ¡ticas", "Entrevistas com pares de outras UGEAs", "Fotografia de documentos-modelo", "Plano de aplicaÃ§Ã£o em 30 dias"],
    produto: "RelatÃ³rio de MissÃ£o + Matriz de Boas PrÃ¡ticas + Plano de AplicaÃ§Ã£o.",
  },
  {
    id: "360", n: "04", name: "Programa 360Â° Anual", dur: "12 meses â˜… recomendado", ganho: "TransformaÃ§Ã£o estrutural",
    desc: "O programa completo: DiagnÃ³stico â†’ CapacitaÃ§Ã£o local â†’ RotaÃ§Ã£o â†’ SimulaÃ§Ã£o de ausÃªncia (30 dias) â†’ Manual Interno de Continuidade.",
    conteudos: ["Fase I DiagnÃ³stico de risco de dependÃªncia", "Fase II FormaÃ§Ã£o + missÃµes nacionais", "Fase III RotaÃ§Ã£o cruzada", "Fase IV SimulaÃ§Ã£o: Â«e se o responsÃ¡vel faltar 30 dias?Â»", "Fase V Manual Interno de Continuidade"],
    produto: "10 planos individuais + 1 matriz de substituiÃ§Ã£o + 1 relatÃ³rio anual ao Director.",
  },
];

export const MATRIZ_ROTACAO = [
  { t: "T1", p: "OrÃ§amento", s: "MEX" },
  { t: "T2", p: "MEX", s: "PatrimÃ³nio" },
  { t: "T3", p: "PatrimÃ³nio", s: "OrÃ§amento" },
  { t: "T4", p: "Investimento", s: "ExecuÃ§Ã£o" },
  { t: "T5", p: "ExecuÃ§Ã£o", s: "PatrimÃ³nio" },
  { t: "T6", p: "AdministraÃ§Ã£o", s: "OrÃ§amento" },
  { t: "T7", p: "Financeiro", s: "MEX" },
  { t: "T8", p: "PatrimÃ³nio", s: "AdministraÃ§Ã£o" },
  { t: "T9", p: "Investimento", s: "MEX" },
  { t: "T10", p: "Apoio admin.", s: "PatrimÃ³nio" },
];

// â”€â”€â”€ RADAR DA INTEGRIDADE Â· checklist anti-atropelo UGEA (Dec. 79/2022) â”€
export const CHECKLIST_UGEA = [
  { t: "Cabimento prÃ©vio no MEX", d: "HÃ¡ dotaÃ§Ã£o reservada antes de qualquer compromisso? (Art. 11 â€” sem cabimento, sem contrato)", art: "Dec. 79/2022 Â· Art. 11" },
  { t: "Plano de contrataÃ§Ãµes no e-SISTAFE", d: "Concurso consta do plano anual actualizado no sistema e enviado Ã  UFSA?", art: "Art. 14â€“16" },
  { t: "AnÃºncio pÃºblico + portal UFSA", d: "AnÃºncio publicado com prazos, encargos e garantia provisÃ³ria? Nada de convite directo disfarÃ§ado.", art: "Art. 34â€“35" },
  { t: "JÃºri Ã­mpar e independente", d: "MÃ­nimo 3 membros, â‰¥1 da UGEA, sem conflito de interesses, constituÃ­do antes da abertura?", art: "Art. 46â€“47" },
  { t: "Concorrentes habilitados", d: "NUIT vÃ¡lido, alvarÃ¡ da classe exigida, certidÃµes fiscais e INSS em dia?", art: "Art. 77â€“78" },
  { t: "AvaliaÃ§Ã£o documentada", d: "RelatÃ³rio de avaliaÃ§Ã£o, classificaÃ§Ã£o e recomendaÃ§Ã£o de adjudicaÃ§Ã£o assinado?", art: "Art. 49" },
  { t: "Contrato com clÃ¡usulas essenciais", d: "Partes, objecto, prazo, preÃ§o, garantias, penalidades e moeda (MT)?", art: "Art. 113â€“122" },
  { t: "Sem fraccionamento", d: "Valor nÃ£o foi partido para fugir ao concurso pÃºblico? (sinal clÃ¡ssico de atropelo)", art: "Probidade" },
  { t: "DeclaraÃ§Ã£o de bens em dia", d: "Membros da UGEA e utilizadores e-SISTAFE com declaraÃ§Ã£o (Lei 12/2024, art. 57)?", art: "Lei 12/2024" },
  { t: "Rastreabilidade total", d: "Todo o processo arquivado e rastreÃ¡vel no MEX/MPE por 5 anos? Quem assina, responde.", art: "Lei 14/2020" },
];

export const SISTAFE_MANUALS = [
  {
    id: "essencial",
    name: "Manual Essencial e-SISTAFE",
    price: 300,
    pages: 96,
    tag: "Best-seller",
    desc: "O essencial para nÃ£o falhar: acessos, MEX passo-a-passo, erros comuns e 40 imagens reais do sistema.",
    includes: ["PDF 96 pÃ¡ginas, actualizado 2026", "40 capturas comentadas", "Checklist de fim de mÃªs", "GlossÃ¡rio CEDSIF (120 termos)", "ActualizaÃ§Ãµes gratuitas 12 meses"],
    featured: false,
  },
  {
    id: "completo",
    name: "Manual Completo + ExercÃ­cios",
    price: 500,
    pages: 214,
    tag: "Recomendado CEDSIF",
    desc: "Do zero ao pagamento: MPOâ†’MEXâ†’MPEâ†’MFP com 25 exercÃ­cios corrigidos e casos reais de UGEA (Dec. 79/2022).",
    includes: ["PDF 214 pÃ¡ginas + caderno de exercÃ­cios", "25 exercÃ­cios com soluÃ§Ãµes", "Casos reais: pagamento a fornecedor, ajudas de custo, salÃ¡rios", "Modelos de NUIT, guias e requisiÃ§Ãµes", "Certificado digital de conclusÃ£o", "Acesso ao grupo de estudo WhatsApp"],
    featured: true,
  },
  {
    id: "formador",
    name: "Pack Formador Institucional",
    price: 1500,
    pages: 320,
    tag: "Para instituiÃ§Ãµes",
    desc: "LicenÃ§a para formar a sua equipa: slides, testes e direito de impressÃ£o interna atÃ© 30 cÃ³pias.",
    includes: ["Tudo do Manual Completo", "120 slides editÃ¡veis", "10 testes de avaliaÃ§Ã£o + grelhas", "LicenÃ§a institucional (30 impressÃµes)", "SessÃ£o Zoom de 2h com o autor"],
    featured: false,
  },
];

export const SISTAFE_TRAINING = [
  { name: "e-SISTAFE Essencial", dur: "2 dias Â· Maputo / Zoom", price: 5000, desc: "Acessos, navegaÃ§Ã£o, MEX bÃ¡sico e erros que bloqueiam pagamentos.", seats: "12 vagas/turma" },
  { name: "ExecuÃ§Ã£o AvanÃ§ada + e-Folha", dur: "4 dias Â· Maputo", price: 8500, desc: "Ciclo completo da despesa, reconciliaÃ§Ãµes, salÃ¡rios e fecho mensal.", seats: "10 vagas/turma" },
  { name: "Mentoria UGEA (in-company)", dur: "5 dias Â· na sua instituiÃ§Ã£o", price: 12000, desc: "Formamos a sua UGEA com dados reais, auditoria de processos e plano de melhoria.", seats: "Sob consulta" },
];

export const SISTAFE_GLOSSARY = [
  { t: "CEDSIF", d: "Centro de Desenvolvimento de Sistemas de InformaÃ§Ã£o de FinanÃ§as. Gere e mantÃ©m o e-SISTAFE." },
  { t: "CUT", d: "Conta Ãšnica do Tesouro. Conta central onde se concentram os fundos do Estado." },
  { t: "Cabimento", d: "Reserva de dotaÃ§Ã£o orÃ§amental que garante que hÃ¡ dinheiro antes de assumir a despesa." },
  { t: "Compromisso", d: "Acto que vincula o Estado ao pagamento (ex.: contrato assinado, requisiÃ§Ã£o aprovada)." },
  { t: "LiquidaÃ§Ã£o", d: "ConfirmaÃ§Ã£o de que o bem/serviÃ§o foi recebido e o valor Ã© devido." },
  { t: "NUIT", d: "NÃºmero Ãšnico de IdentificaÃ§Ã£o TributÃ¡ria. ObrigatÃ³rio para fornecedores e funcionÃ¡rios." },
  { t: "UGEA", d: "Unidade Gestora Executora das AquisiÃ§Ãµes. Trata concursos e contratos em cada instituiÃ§Ã£o." },
  { t: "e-Folha", d: "Sub-sistema que processa salÃ¡rios da FunÃ§Ã£o PÃºblica: vencimentos, descontos e ficheiros bancÃ¡rios." },
  { t: "DotaÃ§Ã£o", d: "Valor autorizado no OrÃ§amento do Estado para cada rubrica e instituiÃ§Ã£o." },
  { t: "Guia de receita", d: "Documento que regista valores cobrados pelo Estado (taxas, multas, serviÃ§os)." },
];

export const SISTAFE_QUIZ = [
  { q: "Qual Ã© a ordem correcta do ciclo da despesa?", opts: ["Pagamento â†’ Cabimento â†’ LiquidaÃ§Ã£o", "Cabimento â†’ Compromisso â†’ LiquidaÃ§Ã£o â†’ Pagamento", "LiquidaÃ§Ã£o â†’ Cabimento â†’ Pagamento", "Compromisso â†’ Pagamento â†’ Cabimento"], a: 1 },
  { q: "O que Ã© a CUT?", opts: ["CartÃ£o Ãšnico de Transporte", "Conta Ãšnica do Tesouro", "ComissÃ£o de UtilizaÃ§Ã£o de Taxas", "Cadastro Ãšnico de Trabalhadores"], a: 1 },
  { q: "Quem gere o e-SISTAFE?", opts: ["Banco de MoÃ§ambique", "CEDSIF", "AT â€” Autoridade TributÃ¡ria", "Tribunal Administrativo"], a: 1 },
  { q: "O que valida o cabimento?", opts: ["Que o fornecedor existe", "Que hÃ¡ dotaÃ§Ã£o disponÃ­vel antes de gastar", "Que o NUIT Ã© vÃ¡lido", "Que a conta bancÃ¡ria tem saldo"], a: 1 },
];

export const SISTAFE_FAQ = [
  { q: "Como recebo o manual apÃ³s pagar?", a: "Pague via M-Pesa (84 489 8420) ou e-Mola (87 048 8008), envie o comprovativo no WhatsApp e recebe o PDF + factura com NUIT em menos de 2 horas (8hâ€“20h)." },
  { q: "O manual serve para iniciantes?", a: "Sim. O Essencial parte do zero (pedir acesso, primeiro login) e o Completo leva-o atÃ© processar salÃ¡rios. 70% dos leitores nunca tinham aberto o e-SISTAFE." },
  { q: "DÃ£o certificado na formaÃ§Ã£o?", a: "Sim â€” certificado digital com carga horÃ¡ria, assinado por Joaquim E. Machava, vÃ¡lido para progressÃ£o e dossier da UGEA." },
  { q: "Fazem formaÃ§Ã£o na provÃ­ncia?", a: "Sim. Presencial em Maputo mensalmente; para outras provÃ­ncias juntamos 8+ formandos ou fazemos in-company (Mentoria UGEA 12.000 MT)." },
  { q: "Posso oferecer um cafÃ© ao projecto?", a: "Sim! ðŸ’§ 'Buy me a water' â€” qualquer valor para M-Pesa 84 489 8420 mantÃ©m os guias gratuitos no ar. Envia 'WATER' no WhatsApp e recebe o seu nome no mural de apoiantes." },
];

// â”€â”€â”€ KEYHOUSE COMPLETA Â· donos + intermediÃ¡rios + clientes num sÃ³ â”€â”€
// PadrÃ£o completo: flats, casas, moradias premium/executivas, duplex/triplex,
// armazÃ©ns, estÃ¢ncias turÃ­sticas, terrenos + terrenos praia (Ponta Ouro â†’ Barra).
// Taxa KEYHOUSE 3â€“5% â€” automÃ¡tica no fecho, sem ir atrÃ¡s de ninguÃ©m.
// IMAGENS: terrenos praia = dunas/areal sem edifÃ­cios Â· armazÃ©ns = industrial Â·
// premium = villas com piscina Â· turÃ­sticas = lodges palhota Â· duplex = arquitectura moderna.
export const KEYHOUSE_STATS = [
  { v: "30+", l: "ImÃ³veis em carteira" },
  { v: "100k ha", l: "Machambas Moamba+MatutuÃ­ne" },
  { v: "14", l: "Zonas de praia" },
  { v: "10%", l: "Arrendamento Â· 5% KH" },
];

export const KEYHOUSE_CATS = ["Todos", "Terrenos Praia", "Terrenos", "Machambas & Agro", "Pedreiras & CalcÃ¡rio", "ArmazÃ©ns", "EstÃ¢ncias TurÃ­sticas", "Premium & Executivas", "Duplex/Triplex", "Flats", "Casas", "Moradias", "EscritÃ³rios"] as const;

export const KEYHOUSE_LISTINGS = [
  { id: "KH-MH-001", cat: "Casas", type: "Obra inacabada 2 pisos - Mahotas", zone: "Mahotas Waxitsene - 2 min Dom Alexandre", price: 2500000, per: "venda negociavel", beds: 2, baths: 2, area: 320, tag: "OBRA", owner: "Dono directo", img: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Obra inacabada vedada muro portoes 12.60x25.40. 1 Piso sala jantar estar quarto WC cozinha area garagem. 2 Piso sala quarto WC suite. DUAT declarado projeto submetido a confirmar.", beach: "-", access: "Terra boa", docs: "DUAT declarado a confirmar" },
  // â”€â”€ DESTAQUE MACANETA 15ha â”€â”€
  { id: "KH-MAC-15HA", cat: "Terrenos Praia", type: "15 Hectares Â· Macaneta", zone: "Macaneta Â· Marracuene", price: 15000000, per: "venda Â· 1M/ha", beds: 0, baths: 0, area: 150000, tag: "DESTAQUE â˜…", owner: "Dono directo", img: "https://images.pexels.com/photos/18149054/pexels-photo-18149054.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "15ha a 100m da praia. Dunas, acesso 4x4. Ideal resort / condomÃ­nio. DUAT em trato.", beach: "100m da praia", access: "4x4 Â· dunas", docs: "DUAT em trato" },
  // â”€â”€ PONTA OURO â†’ MALONGANE (imagens Ãºnicas) â”€â”€
  { id: "KH-PO-01", cat: "Terrenos Praia", type: "Terreno 800mÂ² Â· Ponta de Ouro", zone: "Ponta de Ouro Â· MatutuÃ­ne", price: 2000000, per: "venda", beds: 0, baths: 0, area: 800, tag: "Beira-mar â˜…", owner: "Dono directo", img: "https://images.pexels.com/photos/16383245/pexels-photo-16383245.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "20x40 beira-mar. Via Mamoli ou Ponta d'Ouro. Para lodge / moradia praia.", beach: "Beira-mar", access: "4x4 recomendado", docs: "DUAT a confirmar" },
  { id: "KH-PM-01", cat: "Terrenos Praia", type: "Terreno 500mÂ² Â· Malongane beira-mar", zone: "Ponta Malongane Â· MatutuÃ­ne", price: 1500000, per: "venda", beds: 0, baths: 0, area: 500, tag: "Beira-mar", owner: "Dono directo", img: "https://images.pexels.com/photos/16582229/pexels-photo-16582229.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "20x25 beira-mar, vizinho Ponta d'Ouro. Menos confusÃ£o, mais privacidade.", beach: "Beira-mar", access: "4x4 Â· dunas", docs: "DUAT a confirmar" },
  { id: "KH-PM-02", cat: "Terrenos Praia", type: "Terreno 800mÂ² Â· Malongane 600m", zone: "Ponta Malongane Â· 600m praia", price: 400000, per: "venda", beds: 0, baths: 0, area: 800, tag: "ExpansÃ­vel", owner: "Dono directo", img: "https://images.pexels.com/photos/1732395/pexels-photo-1732395.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "20x40 a 600m da praia + possibilidade de expandir Ã¡rea. Visita com 4x4 e guia de dunas.", beach: "600m da praia", access: "4x4 + guia", docs: "DUAT tratÃ¡vel" },
  // â”€â”€ SUL: MatutuÃ­ne / Moamba (MACHAMBAS) / Catembe / Costa Sol â”€â”€
  { id: "KH-MAT-01", cat: "Terrenos", type: "Terreno 1200mÂ² Â· MatutuÃ­ne", zone: "MatutuÃ­ne Â· Maputo", price: 1800000, per: "venda", beds: 0, baths: 0, area: 1200, tag: "DUAT", owner: "Dono directo", img: "https://images.pexels.com/photos/30255135/pexels-photo-30255135.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Terra agrÃ­cola plana, estrada rural, machambas vizinhas. Para moradia / agro.", beach: "â€”", access: "Viatura normal", docs: "DUAT" },
  { id: "KH-MAT-MACH-50K", cat: "Machambas & Agro", type: "Machamba 50.000 ha Â· MatutuÃ­ne", zone: "MatutuÃ­ne Â· Maputo", price: 0, per: "sob consulta", beds: 0, baths: 0, area: 500000000, tag: "AGRO â˜…", owner: "Dono directo", img: "https://images.pexels.com/photos/30255157/pexels-photo-30255157.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "50.000 hectares de machamba. Terra fÃ©rtil, Ã¡gua prÃ³xima. Para agro-negÃ³cio / cooperativa. PreÃ§o por bloco sob consulta.", beach: "â€”", access: "Terra + trilhos", docs: "DUAT agro" },
  { id: "KH-MOA-01", cat: "Machambas & Agro", type: "Machamba 2000mÂ² Â· Moamba", zone: "Moamba Â· Maputo", price: 1500000, per: "venda", beds: 0, baths: 0, area: 2000, tag: "Machamba", owner: "Dono directo", img: "https://images.pexels.com/photos/724384/pexels-photo-724384.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Machamba produtiva, coqueiros e rega. Junto ao corredor EN4. Ãgua e luz prÃ³ximas.", beach: "â€”", access: "EN4", docs: "DUAT" },
  { id: "KH-MOA-MACH-50K", cat: "Machambas & Agro", type: "Machamba 50.000 ha Â· Moamba", zone: "Moamba Â· Maputo", price: 0, per: "sob consulta", beds: 0, baths: 0, area: 500000000, tag: "AGRO â˜…", owner: "Dono directo", img: "https://images.pexels.com/photos/30255136/pexels-photo-30255136.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "50.000 hectares de machamba no corredor. Ideal cana, milho, gado. Parcelas a partir de 5ha.", beach: "â€”", access: "EN4 + ramais", docs: "DUAT agro" },
  { id: "KH-PED-01", cat: "Pedreiras & CalcÃ¡rio", type: "Pedreira CalcÃ¡rio Â· MatutuÃ­ne", zone: "MatutuÃ­ne Â· Maputo", price: 0, per: "sob consulta", beds: 0, baths: 0, area: 0, tag: "Pedreira â˜…", owner: "Dono directo", img: "https://images.pexels.com/photos/17146231/pexels-photo-17146231.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Pedreira de calcÃ¡rio activa. Reserva para construÃ§Ã£o e cimento. LicenÃ§a mineira tratÃ¡vel.", beach: "â€”", access: "CamiÃ£o", docs: "LicenÃ§a mineira" },
  { id: "KH-PED-02", cat: "Pedreiras & CalcÃ¡rio", type: "Pedreira + Brita Â· Moamba", zone: "Moamba Â· Maputo", price: 0, per: "sob consulta", beds: 0, baths: 0, area: 0, tag: "Brita", owner: "Dono directo", img: "https://images.pexels.com/photos/33122148/pexels-photo-33122148.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Frente de brita + calcÃ¡rio, mÃ¡quinas no local. Para fornecimento de obra EN4.", beach: "â€”", access: "EN4 Â· camiÃ£o", docs: "LicenÃ§a mineira" },
  { id: "KH-CAT-01", cat: "Terrenos Praia", type: "Terreno 1000mÂ² Â· Catembe", zone: "Catembe Â· Maputo", price: 3500000, per: "venda", beds: 0, baths: 0, area: 1000, tag: "Vista baÃ­a", owner: "IntermediÃ¡rio KH-09", img: "https://images.pexels.com/photos/27790725/pexels-photo-27790725.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Vista baÃ­a de Maputo, ponte ao lado. Para moradia premium / restaurante.", beach: "Vista mar", access: "Asfalto", docs: "DUAT + licenÃ§a" },
  { id: "KH-CS-01", cat: "Terrenos Praia", type: "Terreno 650mÂ² Â· Costa do Sol", zone: "Costa do Sol Â· Maputo", price: 4800000, per: "venda", beds: 0, baths: 0, area: 650, tag: "Prime", owner: "Dono directo", img: "https://images.pexels.com/photos/18958717/pexels-photo-18958717.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Zona nobre, marginal. Para moradia executiva / clÃ­nica privada.", beach: "150m da praia", access: "Asfalto", docs: "Escritura" },
  // â”€â”€ GAZA: Bilene / Xai-Xai (imagens Ãºnicas) â”€â”€
  { id: "KH-04", cat: "Terrenos Praia", type: "Terreno 2000mÂ² Â· Bilene", zone: "Bilene Â· Gaza", price: 6800000, per: "venda", beds: 0, baths: 0, area: 2000, tag: "Oportunidade", owner: "Dono directo", img: "https://images.pexels.com/photos/29326462/pexels-photo-29326462.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "2Âª linha praia, DUAT tratado, ideal lodge.", beach: "2Âª linha", access: "Asfalto + terra", docs: "DUAT tratado" },
  { id: "KH-XAI-01", cat: "Terrenos Praia", type: "Terreno 1500mÂ² Â· Xai-Xai", zone: "Xai-Xai Praia Â· Gaza", price: 3200000, per: "venda", beds: 0, baths: 0, area: 1500, tag: "Praia", owner: "Dono directo", img: "https://images.pexels.com/photos/9494328/pexels-photo-9494328.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Areia branca, coqueiros. Para casa de fÃ©rias / guesthouse.", beach: "300m da praia", access: "Terra boa", docs: "DUAT" },
  // â”€â”€ INHAMBANE: Tofo / Tofinho / Cocos / Jangamo / Kissico / Barra â”€â”€
  { id: "KH-TOFO-01", cat: "EstÃ¢ncias TurÃ­sticas", type: "Lodge 6 quartos Â· Tofo", zone: "Tofo Â· Inhambane", price: 22000000, per: "venda", beds: 6, baths: 6, area: 2500, tag: "TurÃ­stica â˜…", owner: "Dono directo", img: "https://images.pexels.com/photos/7292829/pexels-photo-7292829.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Lodge operacional, palhotas + piscina. Clientela mergulho. Retorno imediato.", beach: "80m da praia", access: "Asfalto", docs: "LicenÃ§a turismo" },
  { id: "KH-TOFINHO-01", cat: "Terrenos Praia", type: "Terreno 1800mÂ² Â· Tofinho", zone: "Tofinho Â· Inhambane", price: 4500000, per: "venda", beds: 0, baths: 0, area: 1800, tag: "Surf", owner: "IntermediÃ¡rio KH-14", img: "https://images.pexels.com/photos/34059975/pexels-photo-34059975.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "FalÃ©sia vista mar, surf point. Para eco-lodge / moradia.", beach: "Vista mar", access: "Terra", docs: "DUAT" },
  { id: "KH-COCOS-01", cat: "Terrenos Praia", type: "Terreno 2200mÂ² Â· BaÃ­a dos Cocos", zone: "BaÃ­a dos Cocos Â· Inhambane", price: 5800000, per: "venda", beds: 0, baths: 0, area: 2200, tag: "BaÃ­a", owner: "Dono directo", img: "https://images.pexels.com/photos/724384/pexels-photo-724384.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "BaÃ­a calma, coqueiral, Ã¡gua turquesa. Para resort boutique / casas.", beach: "Beira-mar", access: "Terra / 4x4 Ã©poca chuva", docs: "DUAT" },
  { id: "KH-JANG-01", cat: "Terrenos Praia", type: "Terreno 1600mÂ² Â· Jangamo", zone: "Jangamo Â· Inhambane", price: 2800000, per: "venda", beds: 0, baths: 0, area: 1600, tag: "Pesca", owner: "Dono directo", img: "https://images.pexels.com/photos/12016703/pexels-photo-12016703.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Vila piscatÃ³ria autÃªntica, coqueiros em linha. Para lodge comunitÃ¡rio / casa.", beach: "200m da praia", access: "Terra", docs: "DUAT" },
  { id: "KH-KISS-01", cat: "Terrenos Praia", type: "Terreno 3000mÂ² Â· Kissico", zone: "Lago Kissico Â· Inhambane", price: 1900000, per: "venda", beds: 0, baths: 0, area: 3000, tag: "Lago", owner: "Dono directo", img: "https://images.pexels.com/photos/30255142/pexels-photo-30255142.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Margem do lago, campos verdes, aves, sossego total. Para retiro / campismo chic.", beach: "Margem lago", access: "Terra", docs: "DUAT tratÃ¡vel" },
  { id: "KH-BAR-01", cat: "EstÃ¢ncias TurÃ­sticas", type: "Lodge 8 quartos Â· Barra", zone: "Barra Â· Inhambane", price: 28000000, per: "venda", beds: 8, baths: 8, area: 4000, tag: "Resort â˜…", owner: "Dono directo", img: "https://images.pexels.com/photos/32262441/pexels-photo-32262441.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Palhotas entre palmeiras, restaurante, piscina. Operacional Ã©poca alta cheia.", beach: "50m da praia", access: "Asfalto", docs: "LicenÃ§a + DUAT" },
  { id: "KH-INH-01", cat: "Terrenos Praia", type: "Terreno 1200mÂ² Â· Inhambane cidade", zone: "Inhambane Â· Inhambane", price: 2400000, per: "venda", beds: 0, baths: 0, area: 1200, tag: "Cidade-mar", owner: "Dono directo", img: "https://images.pexels.com/photos/30255137/pexels-photo-30255137.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Centro histÃ³rico, estrada rural, vista cais. Para pensÃ£o / escritÃ³rio.", beach: "Vista baÃ­a", access: "Asfalto", docs: "Escritura" },
  // â”€â”€ ARMAZÃ‰NS (industrial real) â”€â”€
  { id: "KH-06", cat: "ArmazÃ©ns", type: "ArmazÃ©m 800mÂ² Â· Machava", zone: "Machava Â· Matola", price: 220000, per: "/mÃªs", beds: 0, baths: 2, area: 800, tag: "LogÃ­stica", owner: "Dono directo", img: "https://images.pexels.com/photos/36006588/pexels-photo-36006588.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "PÃ©-direito 9m, docas, trifÃ¡sico, acesso N4.", beach: "â€”", access: "N4 Â· camiÃ£o", docs: "LicenÃ§a industrial" },
  { id: "KH-09", cat: "ArmazÃ©ns", type: "ArmazÃ©m 350mÂ² Â· Beira", zone: "Beira Â· Sofala", price: 98000, per: "/mÃªs", beds: 0, baths: 1, area: 350, tag: "Corredor", owner: "Dono directo", img: "https://images.pexels.com/photos/32390903/pexels-photo-32390903.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Junto ao corredor, cais de carga, escritÃ³rio incluÃ­do.", beach: "â€”", access: "Corredor Beira", docs: "LicenÃ§a" },
  { id: "KH-ARM-03", cat: "ArmazÃ©ns", type: "ArmazÃ©m 1200mÂ² Â· Matola-Gare", zone: "Matola-Gare Â· Maputo", price: 320000, per: "/mÃªs", beds: 0, baths: 2, area: 1200, tag: "Novo", owner: "Gestora", img: "https://images.pexels.com/photos/19962152/pexels-photo-19962152.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Novo, porta seccionada, parque 10 camiÃµes, seguranÃ§a 24h.", beach: "â€”", access: "N4", docs: "Novo" },
  // â”€â”€ PREMIUM & EXECUTIVAS (villas piscina) â”€â”€
  { id: "KH-02", cat: "Premium & Executivas", type: "Moradia V4 Premium Â· Sommerschield", zone: "Sommerschield Â· Maputo", price: 18500000, per: "venda", beds: 4, baths: 3, area: 380, tag: "Premium â˜…", owner: "Dono directo", img: "https://images.pexels.com/photos/8134745/pexels-photo-8134745.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Piscina infinita, gerador total, domÃ³tica, suite master 60mÂ². Escritura pronta.", beach: "â€”", access: "Asfalto", docs: "Escritura" },
  { id: "KH-PREM-02", cat: "Premium & Executivas", type: "Moradia V5 Executiva Â· Polana", zone: "Polana Â· Maputo", price: 24000000, per: "venda", beds: 5, baths: 5, area: 520, tag: "Executiva â˜…", owner: "Dono directo", img: "https://images.pexels.com/photos/8134750/pexels-photo-8134750.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Jardim 900mÂ², piscina, casa hÃ³spedes, escritÃ³rio. Embaixadas ao lado.", beach: "â€”", access: "Asfalto", docs: "Escritura" },
  { id: "KH-PREM-03", cat: "Premium & Executivas", type: "Moradia V3 Sunset Â· Costa do Sol", zone: "Costa do Sol Â· Maputo", price: 14500000, per: "venda", beds: 3, baths: 4, area: 340, tag: "Sunset", owner: "IntermediÃ¡rio KH-14", img: "https://images.pexels.com/photos/24805054/pexels-photo-24805054.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "PÃ´r-do-sol baÃ­a, terraÃ§o 100mÂ², piscina aquecida. Chave na mÃ£o.", beach: "200m praia", access: "Asfalto", docs: "Escritura" },
  // â”€â”€ DUPLEX / TRIPLEX â”€â”€
  { id: "KH-DUP-01", cat: "Duplex/Triplex", type: "Duplex T3 Â· Zimpeto Ville", zone: "Zimpeto Â· Maputo", price: 7500000, per: "venda", beds: 3, baths: 3, area: 210, tag: "Novo", owner: "Construtora", img: "https://images.pexels.com/photos/7031581/pexels-photo-7031581.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "2 pisos, quintal privativo, 2 estac. CondomÃ­nio novo com piscina comum.", beach: "â€”", access: "Asfalto", docs: "Escritura nova" },
  { id: "KH-TRI-01", cat: "Duplex/Triplex", type: "Triplex T4 Â· Sommerschield", zone: "Sommerschield Â· Maputo", price: 12000000, per: "venda", beds: 4, baths: 4, area: 310, tag: "Triplex â˜…", owner: "Construtora", img: "https://images.pexels.com/photos/37893361/pexels-photo-37893361.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "3 pisos + rooftop vista cidade. Elevador, gerador, 3 estac box.", beach: "â€”", access: "Asfalto", docs: "Escritura" },
  // â”€â”€ FLATS / CASAS / ESCRITÃ“RIOS cidade (imagem urbana correcta) â”€â”€
  { id: "KH-01", cat: "Flats", type: "Flat T3 Â· Polana", zone: "Polana Â· Maputo", price: 45000, per: "/mÃªs", beds: 3, baths: 2, area: 145, tag: "Verificado â˜…", owner: "Dono directo", img: "https://images.pexels.com/photos/30188151/pexels-photo-30188151.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Vista mar, mobilado executivo, seguranÃ§a 24h, 2 estac." },
  { id: "KH-05", cat: "Flats", type: "Flat T2 Â· Matola", zone: "Matola Â· Mozal", price: 28000, per: "/mÃªs", beds: 2, baths: 1, area: 85, tag: "Verificado â˜…", owner: "IntermediÃ¡rio KH-14", img: "https://images.pexels.com/photos/16787446/pexels-photo-16787446.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "CondomÃ­nio fechado, ideal quadros Mozal / Beluluane." },
  { id: "KH-07", cat: "Casas", type: "Casa T3 Â· Zimpeto", zone: "Zimpeto Â· Maputo", price: 35000, per: "/mÃªs", beds: 3, baths: 2, area: 180, tag: "FamÃ­lia", owner: "Dono directo", img: "https://images.pexels.com/photos/8550496/pexels-photo-8550496.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Quintal murado, tanque, anexo, rua asfaltada." },
  { id: "KH-03", cat: "EscritÃ³rios", type: "EscritÃ³rio 120mÂ² Â· Baixa", zone: "Baixa Â· Maputo", price: 95000, per: "/mÃªs", beds: 0, baths: 2, area: 120, tag: "Prime", owner: "Gestora", img: "https://images.pexels.com/photos/9301737/pexels-photo-9301737.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "Open-space, fibra, 6 estac., ideal BPO / banca." },
  { id: "KH-10", cat: "EstÃ¢ncias TurÃ­sticas", type: "Guesthouse V3 Â· Vilankulo", zone: "Vilankulo Â· Inhambane", price: 12500000, per: "venda", beds: 3, baths: 2, area: 300, tag: "Praia", owner: "Dono directo", img: "https://images.pexels.com/photos/33549432/pexels-photo-33549432.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", desc: "300m da praia, 3 suites, ideal guesthouse, retorno turÃ­stico.", beach: "300m praia", access: "Asfalto", docs: "DUAT + licenÃ§a" },
];

export const KEYHOUSE_FEES = [
  { deal: "Venda", taxa: "5% total", taxaCurta: "5%", quando: "No acto da escritura / sinal", exemplo: "Casa 5.2M â†’ 260.000 MT", quem: "Vendedor (ou dividido por acordo escrito)" },
  { deal: "Arrendamento Â· 10% total", taxa: "10% do contrato (5% KEYHOUSE + 5% parceiro)", taxaCurta: "10%", quando: "Pago UMA VEZ na assinatura", exemplo: "Flat 28.000 Ã— 12 = 336.000 â†’ 33.600 (16.800 KH + 16.800 parceiro)", quem: "Senhorio (cliente nÃ£o paga extra)" },
  { deal: "IntermediÃ¡rio parceiro (venda)", taxa: "3% parceiro + 2% KEYHOUSE = 5% total", taxaCurta: "5%", quando: "No fecho, reparto automÃ¡tico", exemplo: "Venda 6.8M â†’ 204k parceiro + 136k KH", quem: "Dividido sem discussÃ£o â€” tabela afixada" },
  { deal: "GestÃ£o / exclusivo", taxa: "3% mensal", taxaCurta: "3%", quando: "Mensal, com relatÃ³rio", exemplo: "Renda 95.000 â†’ 2.850 MT/mÃªs", quem: "Dono, com visitas + cobranÃ§a" },
];

// REGRA ARRENDAMENTO (sÃ³cio): 10% TOTAL do contrato, pago UMA VEZ no fecho.
// Desses 10%, 5% Ã© KEYHOUSE Properties e 5% Ã© parceiro. Simples e afixada.
export const KEYHOUSE_RENDA_RULE = {
  total: "10% do valor total do contrato",
  reparte: "5% KEYHOUSE Properties + 5% parceiro",
  quando: "Pago UMA VEZ na assinatura",
  exemploCurto: "Flat 28.000 Ã— 12 meses = 336.000 â†’ 10% = 33.600 (16.800 KH + 16.800 parceiro)",
};

export const KEYHOUSE_ROLES = [
  { id: "dono", nome: "Sou DONO", sub: "ArmazÃ©m Â· flat Â· casa Â· moradia Â· terreno", ganhos: ["AnÃºncio + fotos + verificaÃ§Ã£o grÃ¡tis", "Visitas filtradas, sem curiosos", "Contrato + registo tratados", "Recebe 95% (venda) â€” taxa sÃ³ no fecho"], cta: "Registar meu imÃ³vel" },
  { id: "inter", nome: "Sou INTERMEDIÃRIO", sub: "Traz imÃ³vel ou cliente, ganha 3%", ganhos: ["CÃ³digo parceiro KH (ex.: KH-14)", "Tabela 3% afixada, sem negociar", "Leads da sua zona no WhatsApp", "Pagamento em 48h apÃ³s fecho"], cta: "Ser parceiro KH" },
  { id: "cliente", nome: "Sou CLIENTE", sub: "Quero visitar, arrendar ou comprar", ganhos: ["Visita em 24h, sem taxa de visita", "PreÃ§o do dono â€” sem inflacionar", "Acompanhamento atÃ© Ã  chave", "Recibo + contrato em portuguÃªs"], cta: "Pedir visita" },
];

