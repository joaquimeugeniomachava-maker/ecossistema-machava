// ─── TURBO INSANO · ECOSSISTEMA MACHAVA V1 ─────────────────────────
// Missão: maximizar receita, minimizar custos, não falir.
// Tudo WhatsApp + M-Pesa + build único. Sem custos de infra.
// Revisão: Out 2026 · Índico → Rovuma · Diáspora incluída

export const MOTO_TURBO_ZONAS: Record<string, string[]> = {
  "Maputo Cidade": ["Baixa", "Polana", "KaTembe", "Xipamanine", "Museu", "Xiquelene", "Junta", "Benfica", "Zimpeto", "Mafalala", "Chamanculo", "Maxaquene", "Costa do Sol"],
  "Maputo Província": ["Matola", "Machava", "Boane", "Marracuene", "Manhiça", "Namaacha", "Moamba", "Matola-Gare", "Kumbeza"],
  Gaza: ["Xai-Xai", "Chokwé", "Bilene", "Macia", "Manjacaze", "Chibuto", "Mandlakazi", "Chicualacuala", "Massingir"],
  Inhambane: ["Inhambane", "Maxixe", "Tofo", "Vilankulo", "Massinga", "Jangamo", "Morrumbene", "Panda", "Zavala"],
  Sofala: ["Beira", "Dondo", "Nhamatanda", "Marromeu", "Caia", "Gorongosa", "Muanza", "Cheringoma", "Búzi"],
  Manica: ["Chimoio", "Gondola", "Sussundenga", "Manica", "Barué", "Mossurize", "Tambara", "Macossa"],
  "Zambézia": ["Quelimane", "Mocuba", "Gurué", "Milange", "Alto Molócuè", "Maganja", "Mopeia", "Nicoadala", "Namacurra"],
  Tete: ["Tete", "Moatize", "Cahora Bassa", "Angónia", "Mutarara", "Changara", "Chiúta", "Tsangano"],
  Nampula: ["Nampula", "Nacala", "Ilha de Moçambique", "Angoche", "Monapo", "Ribaue", "Malema", "Murrupula", "Meconta"],
  Niassa: ["Lichinga", "Cuamba", "Lago", "Mecanhelas", "Mandimba", "Marrupa", "Mavago", "Ngauma"],
  "Cabo Delgado": ["Pemba", "Montepuez", "Mocímboa", "Mueda", "Chiúre", "Ancuabe", "Balama", "Nangade", "Palma"],
};

export const MOTO_TAXA = {
  valor: 5,
  quemPaga: "Piloto → sistema",
  quando: "Semanal, via M-Pesa 84 489 8420",
  regra20: "Primeiras 20 corridas SEM TAXA (novos pilotos)",
  strikes: "3 strikes = fora (atraso grave, preço abusivo, sem capacete)",
};

export const MOTO_GRUPO_PROTOCOLO = [
  { quem: "Passageiro", escreve: "PRECISO MOTO de [zona] para [zona]", recebe: "Nome + matrícula do piloto ANTES de montar" },
  { quem: "Piloto livre", escreve: "EU VOU", recebe: "Prioridade da semana se cumprir regras" },
  { quem: "Novo piloto", escreve: "SOU MOTORISTA + Nome + Zona + Matrícula", recebe: "20 corridas sem taxa + verificação 48h" },
];

// ─── CV-MAKER · MÁQUINA DE RENDA IMEDIATA · PREÇÁRIO TURBO ───────
// Regra de ouro: NUNCA menos de 200 MT. Tempo vale.
export const CV_PRO = {
  packs: [
    { id: "basico", nome: "Básico", preco: 200, promo: 200, inclui: ["CV em PDF, 1 página", "Formatação limpa", "Entrega em 4h no WhatsApp"], upsell: "—" },
    { id: "prof", nome: "Profissional", preco: 400, promo: 400, inclui: ["CV + Carta de Apresentação", "Optimizado para a vaga", "Entrega em 4h"], upsell: "+100 MT adaptar a nova vaga" },
    { id: "premium", nome: "Premium", preco: 750, promo: 750, inclui: ["CV + Carta + LinkedIn", "Guia Simulação de Entrevista", "Prioridade total"], upsell: "+200 MT revisão urgente 24h" },
    { id: "diaspora", nome: "Diáspora", preco: 15, moeda: "USD", promo: 15, inclui: ["CV inglês/português + Carta", "Padrão internacional", "PayPal"], upsell: "+5 USD adaptar a vaga internacional" },
  ],
  vagasPromo: 5,
  promoPrimeiros: "Primeiros 5: Básico a 100 MT (única excepção aos 200)",
  mpesa: "+258 84 489 8420",
  emola: "+258 87 048 8008",
  paypal: "PayPal (diáspora) — pedir link no WhatsApp",
  fluxo: [
    "1 · Cliente pede no WhatsApp",
    "2 · Envias PRÉVIA COM MARCA DE ÁGUA (nunca PDF limpo)",
    "3 · Cliente aprova + envia ID da transação M-Pesa/e-Mola",
    "4 · TU confirmas NO EXTRATO (não confies só em print)",
    "5 · Só depois envias PDF limpo + DOCX editável",
    "6 · Registas: nome, pacote, valor, data",
  ],
};

export const CV_TURBO_ACOES = [
  { acao: "Parceria escolas/universidades", impacto: "50 CVs/mês × 200 MT = 10.000 MT/mês" },
  { acao: "Pacote Recém-formado", impacto: "CV + Carta + LinkedIn por 500 MT" },
  { acao: "Taxa de urgência", impacto: "+100 MT entrega em 24h" },
  { acao: "Pacote Diáspora", impacto: "15 USD via PayPal ≈ 900+ MT" },
  { acao: "Afiliados", impacto: "50 MT por cada CV que trouxerem" },
];

// ─── KEYHOUSE · SOBREVIVER PARA LUCRAR · 5 REGRAS ANTI-FALIR ─────
export const KEYHOUSE_5_REGRAS = [
  { n: "1", regra: "Nunca pagues adiantado", porque: "Nem a corretores, fotógrafos ou anúncios. Só pagas com dinheiro do cliente." },
  { n: "2", regra: "Nunca custodias dinheiro", porque: "Comprador paga directo ao vendedor. Tu só cobras a comissão." },
  { n: "3", regra: "Comissão só no fecho", porque: "Nada por visita, lead ou promessa. Só quando o negócio fecha." },
  { n: "4", regra: "Acordo por escrito ANTES", porque: "WhatsApp vale como contrato: 'Comissão X% paga no fecho'." },
  { n: "5", regra: "Nunca de graça p/ curiosos", porque: "Qualifica antes de mostrar. Curioso não paga." },
];

export const KEYHOUSE_COMISSAO_TURBO = [
  { tipo: "Arrendamento", quem: "Proprietário", valor: "1 mês de renda", quando: "No fecho", ex: "Renda 30.000 → 30.000 MT" },
  { tipo: "Venda de casa", quem: "Vendedor", valor: "3% do valor", quando: "No fecho", ex: "5.2M → 156.000 MT" },
  { tipo: "Terreno", quem: "Vendedor", valor: "3–5%", quando: "No fecho", ex: "2M → 60–100 mil MT" },
  { tipo: "Empresarial", quem: "Negociado", valor: "2–5%", quando: "No fecho", ex: "Armazém 12M → 240–600 mil" },
  { tipo: "Parceria corretor", quem: "Dividem", valor: "50/50", quando: "No fecho", ex: "156.000 → 78.000 cada" },
];

export const KEYHOUSE_NICHOS = [
  { nicho: "Terrenos de praia (Macaneta, Barra, Tofo)", porque: "Procura alta, oferta limitada", media: "75.000 MT+" },
  { nicho: "Arrendamento p/ expatriados", porque: "Empresas pagam, contratos longos", media: "30.000 MT/mês" },
  { nicho: "Armazéns e escritórios", porque: "Pouca concorrência, valores altos", media: "50.000 MT+" },
  { nicho: "Imóveis p/ diáspora", porque: "Pagam em dólar/euro, menos regateio", media: "5% do valor" },
];

export const KEYHOUSE_TESTE100 = [
  { etapa: "100 leads · 60 dias", meta: "100 contactos", kill: "<10 qualificadas → triagem falhou, pára e ajusta" },
  { etapa: "30 qualificadas", meta: "30 com orçamento+prazo", kill: "<5 visitas → imóveis não interessam" },
  { etapa: "15 visitas", meta: "15 visitas feitas", kill: "0 fechos → preço ou parceiro falhou" },
  { etapa: "5 fechos", meta: "5 negócios", kill: "90 dias sem comissão → modelo falhou" },
];

export const KEYHOUSE_9_RECEITAS = [
  { n: "1", fonte: "Publicação de anúncio", preco: "500 MT", quando: "Na publicação", estado: "LIVE" },
  { n: "2", fonte: "Destaque por bairro", preco: "1.500 MT/mês", quando: "Mensal", estado: "LIVE" },
  { n: "3", fonte: "Lead qualificado", preco: "500 MT teste · 1.000 MT normal", quando: "Lead validado", estado: "TESTE 500" },
  { n: "4", fonte: "Visita confirmada", preco: "500 MT", quando: "Após confirmação", estado: "LIVE" },
  { n: "5", fonte: "Comissão de fecho", preco: "3% venda · 1 mês renda · 3–5% terreno", quando: "No fecho", estado: "AUTO" },
  { n: "6", fonte: "Subscrição intermediário", preco: "3.000 MT/mês", quando: "Mensal", estado: "LIVE" },
  { n: "7", fonte: "Desbloqueio de contacto", preco: "200 MT", quando: "Por contacto verificado", estado: "NOVO" },
  { n: "8", fonte: "Concierge imobiliário", preco: "5.000 MT", quando: "Serviço personalizado", estado: "LIVE" },
  { n: "9", fonte: "Plano Agência Premium", preco: "10.000 MT/mês", quando: "Mensal", estado: "B2B" },
];

export const KEYHOUSE_20_TIPOS = [
  "Apartamentos", "Moradias", "Casas geminadas", "Quartos", "Lojas", "Escritórios",
  "Armazéns", "Espaços comerciais", "Salões de eventos", "Terrenos", "Ruínas", "Lodges",
  "Quintas", "Terrenos na praia", "Espaços em aluguer", "Dependências", "Parques",
  "Estaleiros", "Imóveis p/ investimento", "Imóveis p/ reabilitação",
];

export const KEYHOUSE_B2B = [
  { alvo: "Intermediários / corretores de rua", compram: "Subscrição 3.000 MT/mês", pot: "Pão diário", msg: "Olha, cansei de visita furada. Na KEYHOUSE só recebes quem tem orçamento. 10 publicações grátis p/ fundadores. Queres vaga? Manda FUNDADOR." },
  { alvo: "Agências pequenas", compram: "Plano 10.000 MT/mês", pot: "Bife", msg: "Vi a vossa carteira. Filtro curiosos antes da visita + contacto protegido. 10 imóveis grátis p/ testar. 5 min no WhatsApp?" },
  { alvo: "Construtoras / promotores", compram: "Destaques + comissão fecho", pot: "Jackpot", msg: "Entregam obra, nós entregamos cliente qualificado com DUAT verificado. Sem visita fantasma." },
  { alvo: "Empresas / ONGs / bancos", compram: "Concierge 5.000 MT + rendas", pot: "Contrato gordo", msg: "Realojam quadros? Visita em 24h, factura NUIT, sem stress. Pacote empresa disponível." },
];

export const KEYHOUSE_PROCURA_SE = [
  {
    id: "KUMBEZA",
    titulo: "PROCURA-SE ESPAÇO — KUMBEZA",
    detalhe: "Espaço p/ criação de aves · a partir de 500 m² · quintal/terreno vedado · bom acesso + segurança",
    zona: "Kumbeza → 1ª rotunda",
    orcamento: "Arrendamento negociável",
    contacto: "84 489 8420",
  },
  {
    id: "MALONGANE-1",
    titulo: "Ponta Malongane · 20/40 beira-mar",
    detalhe: "20×40 a 2.000.000 MT · 20×25 a 1.500.000 MT · via Mamoli ou Ponta d'Ouro",
    zona: "Malongane (vizinho Ponta d'Ouro)",
    orcamento: "Venda · DUAT a confirmar",
    contacto: "84 489 8420",
  },
  {
    id: "MALONGANE-2",
    titulo: "Ponta Malongane · 600m da praia",
    detalhe: "20×40 a 400.000 MT · pode expandir área · visita com 4x4, guia de dunas",
    zona: "600m da praia",
    orcamento: "Taxa visita 1.000 MT",
    contacto: "84 489 8420",
  },
];

export const KEYHOUSE_CAMPANHA_COPY = [
  { onde: "Status 19h", texto: "Chegou KEYHOUSE PROPERTIES. Imóveis verificados, visita 24h, contacto protegido. 10 anúncios grátis p/ fundadores. Toca: wa.me/258844898420" },
  { onde: "Grupo bairro", texto: "Pessoal: o que irrita mais? 1) visita furada 2) 'está disponível?' e some 3) fotos copiadas. Foi por isso que fiz a KEYHOUSE. 10 vagas fundador grátis. Link: KEYHOUSE-MZ" },
  { onde: "DM agência", texto: "Sou Joaquim Machava, KEYHOUSE. Filtramos curiosos antes da visita + selo verificado. 10 imóveis ZERO custo p/ testar. 5 min no WhatsApp? +258 84 489 8420" },
];

// ─── VIRAL DIÁSPORA · ÍNDICO → ROVUMA · "É SÓ PEDIR" ────────────
export const VIRAL_COPY = [
  {
    canal: "Diáspora · Família fora",
    titulo: "Manda para quem está fora com saudade",
    texto: "Estou em Moçambique e já não ando à toa. Casa, mota, documento, CV — é só pedir num WhatsApp: wa.me/258844898420. Do Índico ao Rovuma. Partilha com emoção, isto é nosso. 🇲🇿❤️",
  },
  {
    canal: "Investidor · Qualquer coisa, já temos",
    titulo: "Para quem investe",
    texto: "Procura terreno na praia, armazém no corredor, flat para quadros? Já temos em carteira. É só pedir — visita em 24h, DUAT verificado, comissão só no fecho. wa.me/258844898420",
  },
  {
    canal: "Bairro · Boca a boca",
    titulo: "Para grupos",
    texto: "Cansado de visita furada e preço combinado depois? Aqui preço é fechado antes, contacto protegido, recibo com NUIT. Guarda: 84 489 8420. Um número, quatro soluções.",
  },
];

export const REGRAS_UNIVERSAIS = [
  "Nunca cobrar menos de 200 MT.",
  "Nunca entregar sem confirmar pagamento NO EXTRATO.",
  "Nunca trabalhar de graça para curiosos.",
  "Nunca pagar adiantado.",
  "Nunca custodiar dinheiro.",
];

// ─── MONITOR ANTI-BANCA-ROTA (falhas → acção) ────────────────────
export const HEALTH_CHECKS = [
  { id: "build", nome: "Build gera dist/index.html", como: "npm run build sem erros", acao: "Se falhar: não fazer deploy. Ler erro, corrigir, rebuild." },
  { id: "links", nome: "WhatsApp + links reais", como: "Todos wa.me/258844898420 abrem com texto", acao: "Link morto = lead morto. Testar semanalmente." },
  { id: "pagamento", nome: "Confirmar ID M-Pesa no extrato", como: "Nunca só print. ID tem de bater.", acao: "Não bateu = não entrega. Sem excepção." },
  { id: "qualifica", nome: "Qualificar antes de mostrar", como: "Orçamento + prazo + zona antes de visita", acao: "Curioso detectado = educar ou dispensar." },
  { id: "teste100", nome: "Funil 100→30→15→5", como: "Contar leads/visitas/fechos", acao: "Bateu kill criteria = pára e ajusta, não insiste." },
];
