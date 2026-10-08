// ─── MOZ-BUILD · braço de valorização KEYHOUSE ─────────────────────
// Equipa real do sócio: 2 engenheiros civis + carpinteiro + marceneiro + arquiteto
// Especialidade: escolas em distritos remotos, orçamento de sobrevivência
// Regra: MOZ-BUILD nunca trabalha de graça — recebe pela obra.
// Revisão: Out 2026

export const MOZBUILD_EQUIPA = [
  { id: "eng1", funcao: "Engenheiro Civil · Estruturas", nome: "Eng. Civil 01", foco: "Inspeção técnica, estrutura, orçamento 48h", selo: "Escolas rurais" },
  { id: "eng2", funcao: "Engenheiro Civil · Hidráulica/Acabamentos", nome: "Eng. Civil 02", foco: "Água, saneamento, fissuras, infiltrações", selo: "Distritos" },
  { id: "arq", funcao: "Arquiteto · Projeto + Valorização", nome: "Arquiteto", foco: "Planta, fachada premium, potencial +40-100%", selo: "Design" },
  { id: "carp", funcao: "Carpinteiro · Estrutura madeira", nome: "Carpinteiro", foco: "Telhados, portas, janelas, escolas", selo: "Obra" },
  { id: "marc", funcao: "Marceneiro · Mobiliário", nome: "Marceneiro", foco: "Cozinhas, roupeiros, mobiliário lodge", selo: "Acabamento" },
];

export const MOZBUILD_CICLO = [
  { n: "1", titulo: "KEYHOUSE identifica", desc: "Casa degradada, ruína, terreno parado. Dono quer vender/arrendar mas não consegue.", dono: "KEYHOUSE" },
  { n: "2", titulo: "MOZ-BUILD avalia", desc: "Inspeção técnica + orçamento em 48h. Sem adivinha.", dono: "MOZ-BUILD" },
  { n: "3", titulo: "Acordo assinado", desc: "30% entrada + 70% com rendas, ou % da venda. Tudo por escrito no WhatsApp.", dono: "Ambos" },
  { n: "4", titulo: "MOZ-BUILD executa", desc: "Obra 30-60 dias. Escola de distrito ou moradia Polana — mesmo rigor.", dono: "MOZ-BUILD" },
  { n: "5", titulo: "KEYHOUSE lista", desc: "Imóvel reabilitado entra premium: +40-100% preço, fotos novas, selo verificado.", dono: "KEYHOUSE" },
  { n: "6", titulo: "Lucro dividido", desc: "Dono recebe mais. MOZ-BUILD recebe obra. KEYHOUSE recebe comissão + valorização.", dono: "Todos" },
];

export const MOZBUILD_MODULOS = [
  {
    id: "reab-arr",
    n: "M1",
    nome: "Reabilitação para arrendamento",
    exemplo: "Casa Polana 15.000 → obra 200.000 → renda 35.000. Dono paga 70.000/mês × 3 meses, depois 35.000 limpos.",
    preco: "Orçamento 48h grátis p/ piloto",
    prazo: "30-60 dias",
  },
  {
    id: "ruina-revenda",
    n: "M2",
    nome: "Compra de ruínas para revenda",
    exemplo: "Ruína 500.000 + obra 800.000 = 1.300.000 → venda 2.500.000. Lucro 1.200.000.",
    preco: "60% investidor · 25% BUILD · 15% KH",
    prazo: "60-90 dias",
  },
  {
    id: "parceria",
    n: "M3",
    nome: "Parceria 50/50",
    exemplo: "Compra 400.000 + obra 600.000 = 1M → venda 2.2M. Lucro 1.2M = 600.000 cada.",
    preco: "Investimento dividido",
    prazo: "60-90 dias",
  },
  {
    id: "avaliacao",
    n: "M4",
    nome: "Avaliação técnica paga",
    exemplo: "Receita imediata sem obra. Pré-compra, pré-venda, orçamento, certificação.",
    preco: "2.500 / 2.500 / 5.000 / 7.500 MT",
    prazo: "48h",
  },
  {
    id: "manutencao",
    n: "M5",
    nome: "Manutenção recorrente",
    exemplo: "Plano anual + urgências. KEYHOUSE cobra, BUILD executa.",
    preco: "15.000 MT/ano · 5.000+ urgência",
    prazo: "Contínuo",
  },
];

export const MOZBUILD_SERVICOS = [
  { nome: "Inspeção pré-compra", preco: "2.500 MT", para: "Comprador — estado real antes de pagar", eta: "48h" },
  { nome: "Inspeção pré-venda", preco: "2.500 MT", para: "Vendedor — justificar preço", eta: "48h" },
  { nome: "Orçamento reabilitação", preco: "5.000 MT", para: "Dono — quanto custa transformar", eta: "48h" },
  { nome: "Certificação técnica", preco: "7.500 MT", para: "Contratos arrendamento", eta: "5 dias" },
];

export const MOZBUILD_MANUTENCAO = [
  { nome: "Plano anual", preco: "15.000 MT/ano", inclui: "2 vistorias + pequenas reparações" },
  { nome: "Urgências", preco: "5.000 MT+", inclui: "Canalização, elétrica, telhado" },
  { nome: "Acabamentos", preco: "2.000 MT+", inclui: "Pintura, portas, mobiliário" },
];

export const MOZBUILD_EXEMPLO_MATOLA = {
  titulo: "Casa degradada Matola → premium",
  degradada: 800000,
  obra: 900000,
  total: 1700000,
  venda: 2500000,
  lucro: 800000,
  divisao: [
    { quem: "Investidor 60%", valor: 480000 },
    { quem: "MOZ-BUILD 25%", valor: 200000 },
    { quem: "KEYHOUSE 15%", valor: 120000 },
  ],
  porAno: "×5 negócios/ano = KH 600.000 · BUILD 1M · Investidor 2.4M",
};

export const MOZBUILD_PILOTO = [
  { dia: "Dia 1-7", acao: "KEYHOUSE identifica 3 degradados/ruínas", dono: "Tu + equipa" },
  { dia: "Dia 8-10", acao: "MOZ-BUILD inspeciona + orça os 3", dono: "Engenheiros + Arq" },
  { dia: "Dia 11", acao: "Escolher 1 piloto", dono: "Sócio" },
  { dia: "Dia 12-13", acao: "Acordo por escrito", dono: "KEYHOUSE" },
  { dia: "Dia 14-60", acao: "Obra piloto", dono: "MOZ-BUILD" },
  { dia: "Dia 61-90", acao: "Lista + vende/arrenda", dono: "KEYHOUSE" },
  { dia: "Dia 91", acao: "Dividir + documentar", dono: "Todos" },
];

export const MOZBUILD_IMGS = {
  obra: "https://images.pexels.com/photos/30661412/pexels-photo-30661412.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  tijolo: "https://images.pexels.com/photos/18807680/pexels-photo-18807680.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
};
