// ─── MOZ-SISTAFE · GABINETE EXECUTIVO (ficheiro isolado — não toca nos outros projectos)
// Regras: minutas para revisão, dados demonstrativos, benefícios esperados/verificáveis.
// Revisão: Janeiro 2026 · Validar sempre no Boletim da República / Imprensa Nacional.

export const SISTAFE_META = {
  revisao: "Janeiro de 2026",
  coordenacao: "Joaquim Eugénio Machava",
  papel: "Coordenação do projecto MOZ-SISTAFE (iniciativa independente)",
  aviso:
    "Esta plataforma é uma iniciativa independente de apoio ao conhecimento e à organização. Não substitui comunicações, normas ou instruções oficiais.",
};

export type ExecDoc = {
  id: string;
  codigo: string;
  titulo: string;
  finalidade: string;
  destinatario: string;
  corpo: string;
};

export const EXEC_DOCS: ExecDoc[] = [
  {
    id: "minuta-01",
    codigo: "MINUTA 01/2026",
    titulo: "Proposta de Programa Piloto 360° — Capacitação, Rotação e Continuidade",
    finalidade: "Submeter à apreciação superior o programa para 10 técnicos, 1ª fase nacional (>60 km).",
    destinatario: "Director Nacional / Secretário Permanente",
    corpo: `MINUTA PARA REVISÃO — NÃO É ACTO OFICIAL
Código: MINUTA 01/2026 · Revisão: Janeiro de 2026
Coordenação do projecto: Joaquim Eugénio Machava (iniciativa independente)

ASSUNTO: Proposta de Programa Piloto de Capacitação, Rotação de Competências e Continuidade Operacional (10 técnicos)

Exmo Senhor Director Nacional / Secretário Permanente,

1. Submete-se à apreciação superior a proposta de implementação de um Programa Piloto de Capacitação, Rotação de Competências e Continuidade Operacional, destinado a 10 técnicos (dados demonstrativos), com prioridade para acções em território nacional, em locais a mais de 60 km da sede, numa primeira fase.

2. Objectivo: reduzir a dependência de conhecimentos concentrados, reforçar a execução nos módulos MPO/MEX/MPE (Decreto 26/2021) e assegurar substituição funcional.

3. Produtos esperados (a verificar): 10 planos individuais + 1 matriz de substituição + 1 relatório anual.

4. Solicita-se autorização para diagnóstico inicial (Fase I), sem custos de deslocação.

5. A presente minuta não substitui normas oficiais. Validar enquadramento no Boletim da República / Imprensa Nacional e orientações do CEDSIF e da UFSA.

Com os melhores cumprimentos,
[Nome, Categoria, Contacto, Data, Assinatura]`,
  },
  {
    id: "minuta-02",
    codigo: "MINUTA 02/2026",
    titulo: "Matriz de Continuidade Operacional — Modelo",
    finalidade: "Registar, por processo crítico, responsável, suplente, documentos, sistema e prazo.",
    destinatario: "Chefia da unidade / UGEA",
    corpo: `MINUTA PARA REVISÃO — NÃO É ACTO OFICIAL
Código: MINUTA 02/2026 · Revisão: Janeiro de 2026

MATRIZ DE CONTINUIDADE OPERACIONAL (MODELO — DADOS DEMONSTRATIVOS)

Regra: nenhum processo crítico depende de uma única pessoa. Mínimo 2 capazes por processo.

| Processo | Responsável | Suplente | Documentos | Sistema | Prazo | Risco se parar |
| Cabimentação mensal | T1 (demonstrativo) | T6 | Proposta, limites | MEX | Dia 5 | Pagamentos bloqueados |
| Liquidação e pagamento | T2 | T7 | Auto, factura, NUIT | MEX | Dia 20 | Fornecedores por pagar |
| Inventário e abate | T3 | T8 | Auto, etiqueta | MPE/e-Inventário | Trimestral | Bens sem registo |
| Plano de contratações | T4 | T9 | Plano anual | MEX + UFSA | Anual | Concursos sem cobertura |
| Arquivo e rastreabilidade | T10 | T5 | Pastas PA | MGI | Contínuo | Auditoria sem prova |

Instruções: preencher com nomes reais apenas no documento interno da instituição. Não publicar dados pessoais nesta plataforma. Arquivar com o processo.`,
  },
  {
    id: "minuta-03",
    codigo: "MINUTA 03/2026",
    titulo: "Relatório de Missão Técnica de Aprendizagem — Modelo",
    finalidade: "Documentar cada missão: o que se viu, o que se aprendeu, o que se vai aplicar.",
    destinatario: "Equipa de missão (5 técnicos) → Chefia",
    corpo: `MINUTA PARA REVISÃO — NÃO É ACTO OFICIAL
Código: MINUTA 03/2026 · Revisão: Janeiro de 2026

RELATÓRIO DE MISSÃO TÉCNICA (MODELO)

1. Missão: [instituição anfitriã, local (>60 km), datas, equipa]
2. Objectivos: [ex.: observar cabimentação no MEX; arquivo PA]
3. Cinco perguntas: Como fazem? Quem faz? Que documentos usam? Como controlam erros? O que adaptamos?
4. Boas práticas observadas: [lista]
5. Plano de aplicação em 30 dias: [acção, responsável, prazo]
6. Anexos: agenda, lista de presenças, fotos de documentos-modelo (sem dados sensíveis)

Regra: viajou → aprendeu → documentou → aplicou. Sem relatório, a missão não conta.`,
  },
  {
    id: "minuta-04",
    codigo: "MINUTA 04/2026",
    titulo: "Plano Individual de Desenvolvimento — Modelo (10 técnicos)",
    finalidade: "Mapear nível Básico/Intermédio/Avançado por técnico e definir competência secundária.",
    destinatario: "Cada técnico + supervisor directo",
    corpo: `MINUTA PARA REVISÃO — NÃO É ACTO OFICIAL
Código: MINUTA 04/2026 · Revisão: Janeiro de 2026

PLANO INDIVIDUAL DE DESENVOLVIMENTO (MODELO — DADOS DEMONSTRATIVOS)

Técnico: T__ · Função principal: ____ · Competência secundária: ____
Níveis (B/I/A): Orçamento __ · MEX __ · MPE/Património __ · Investimento __ · Prestação de contas __ · Arquivo __

Acções 12 meses: [formação local] + [missão] + [rotação] + [simulação de ausência 30 dias]
Meta: ser capaz de executar a função secundária sem supervisão até ao mês 10.
Avaliação: trimestral, sem carácter punitivo. Objectivo é continuidade, não classificação.

Nota: não inserir dados pessoais reais nesta plataforma. Usar apenas no processo interno.`,
  },
  {
    id: "minuta-05",
    codigo: "MINUTA 05/2026",
    titulo: "Relatório de Benefícios Esperados — Modelo",
    finalidade: "Declarar benefícios como esperados e verificáveis, com indicador e meio de verificação.",
    destinatario: "Direcção (apoio à decisão)",
    corpo: `MINUTA PARA REVISÃO — NÃO É ACTO OFICIAL
Código: MINUTA 05/2026 · Revisão: Janeiro de 2026

RELATÓRIO DE BENEFÍCIOS ESPERADOS (NÃO SÃO RESULTADOS DECLARADOS)

Os benefícios abaixo são ESPERADOS e devem ser VERIFICADOS com evidência antes de qualquer reporte oficial.

1. Continuidade: 2 pessoas capazes por processo crítico → verificar: matriz assinada + simulação 30 dias.
2. Prazo: reduzir bloqueios de pagamento em fim de mês → verificar: dias de atraso antes/depois.
3. Arquivo: 100% dos PA com rastreabilidade → verificar: amostra trimestral no MGI.
4. UGEA: concursos com cabimento prévio e plano no sistema → verificar: checklist 10 travões.
5. Custo: 1ª fase nacional (>60 km) sem custos externos → verificar: mapa de despesas.

Nenhum valor é apresentado como resultado obtido. Sem evidência, não há resultado.`,
  },
  {
    id: "minuta-06",
    codigo: "MINUTA 06/2026",
    titulo: "Nota de Encaminhamento / Despacho — Modelo",
    finalidade: "Encaminhar minutas à apreciação superior com pedido de despacho claro.",
    destinatario: "Via hierárquica até ao Director Nacional / SP",
    corpo: `MINUTA PARA REVISÃO — NÃO É ACTO OFICIAL
Código: MINUTA 06/2026 · Revisão: Janeiro de 2026

NOTA DE ENCAMINHAMENTO (MODELO)

De: [Unidade / UGEA]
Para: [Via hierárquica] Director Nacional / Secretário Permanente
Assunto: Minutas 01–05 do Programa Piloto 360° para apreciação e despacho

1. Remetem-se, para apreciação superior, as minutas 01 a 05 (programa, matriz, missão, plano individual, benefícios esperados).
2. Solicita-se despacho sobre: (a) autorização do diagnóstico Fase I; (b) indicação de polos nacionais; (c) orientador da contraparte.
3. Vinculação: iniciativa independente de apoio; sem substituição de instruções oficiais do Ministério, do CEDSIF ou da UFSA.

Anexos: Minutas 01–05. [Local, data, assinatura]`,
  },
];

export const BENEFITS = [
  { b: "Continuidade operacional", ind: "Nº de processos com 2+ capazes", como: "Matriz assinada + simulação 30 dias", prazo: "Mês 10", estado: "Esperado — a verificar" },
  { b: "Menos bloqueios de pagamento", ind: "Dias de atraso no fim de mês", como: "Mapa antes/depois no MEX", prazo: "Trimestral", estado: "Esperado — a verificar" },
  { b: "Arquivo rastreável", ind: "% de PA completos (amostra)", como: "Auditoria interna MGI", prazo: "Trimestral", estado: "Esperado — a verificar" },
  { b: "Contratação sem atropelos", ind: "% concursos com 10/10 no radar", como: "Checklist UGEA arquivado", prazo: "Por concurso", estado: "Esperado — a verificar" },
  { b: "Custo controlado", ind: "Custo por técnico (1ª fase nacional)", como: "Mapa de despesas", prazo: "Por missão", estado: "Esperado — a verificar" },
];

export const CONTINUITY_ROWS = [
  { p: "Cabimentação mensal", r: "T1", s: "T6", docs: "Proposta, limites", sis: "MEX", prazo: "Dia 5", risco: "Alto" },
  { p: "Liquidação e pagamento", r: "T2", s: "T7", docs: "Auto, factura, NUIT", sis: "MEX", prazo: "Dia 20", risco: "Alto" },
  { p: "Inventário / abate", r: "T3", s: "T8", docs: "Auto, etiqueta", sis: "MPE", prazo: "Trimestral", risco: "Médio" },
  { p: "Plano de contratações", r: "T4", s: "T9", docs: "Plano anual", sis: "MEX+UFSA", prazo: "Anual", risco: "Alto" },
  { p: "Investimento (SNIP)", r: "T9", s: "T4", docs: "Ficha projecto", sis: "MIP", prazo: "Mensal", risco: "Médio" },
  { p: "Folha e salários", r: "T7", s: "T2", docs: "Folha, descontos", sis: "MFP", prazo: "Dia 25", risco: "Alto" },
  { p: "Arquivo e PA", r: "T10", s: "T5", docs: "Pasta PA", sis: "MGI", prazo: "Contínuo", risco: "Médio" },
];

export const SOURCES = [
  { sigla: "Lei 14/2020, 23 Dez", oque: "Lei do SISTAFE — planificação, orçamentação, execução, controlo.", onde: "Boletim da República · Imprensa Nacional", rev: "Jan 2026" },
  { sigla: "Decreto 26/2021, 3 Mai", oque: "Regulamento do SISTAFE — 11 módulos (MPO, MEX, MIP, MPE, MFP, MDP, MGE, MRR, MGI, MAI, MAS).", onde: "Boletim da República · Imprensa Nacional", rev: "Jan 2026" },
  { sigla: "Decreto 79/2022, 30 Dez", oque: "Contratação pública — UGEA, júri, UFSA, garantias.", onde: "Boletim da República · UFSA (ufsa.gov.mz)", rev: "Jan 2026" },
  { sigla: "Lei 12/2024, 18 Jun (art. 57)", oque: "Probidade — declaração de bens (UGEA, utilizadores e-SISTAFE).", onde: "Boletim da República", rev: "Jan 2026" },
  { sigla: "CEDSIF", oque: "Gestor do e-SISTAFE — módulos e manuais de sistema.", onde: "cedsif.gov.mz", rev: "Jan 2026" },
  { sigla: "UFSA", oque: "Supervisão das aquisições — portal de contratação pública.", onde: "ufsa.gov.mz", rev: "Jan 2026" },
];

export function downloadText(filename: string, text: string) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export function continuityCSV(): string {
  const head = "Processo;Responsável (demonstrativo);Suplente;Documentos;Sistema;Prazo;Risco";
  const lines = CONTINUITY_ROWS.map((r) => [r.p, r.r, r.s, r.docs, r.sis, r.prazo, r.risco].join(";"));
  return [head, ...lines].join("\n");
}
