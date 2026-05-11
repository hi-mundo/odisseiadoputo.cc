---
layout:     post
title:      "IA Escreve Código Rápido. A Conta Vem na Manutenção."
subtitle:   "James Shore fez a conta que muita empresa evita: se a IA dobra a produção de código mas não reduz o custo de manter esse código, o ganho evapora."
en_title:   "AI Writes Code Fast. The Bill Comes in Maintenance."
en_subtitle: "James Shore modeled the uncomfortable math: if AI doubles code output but does not reduce maintenance cost, the productivity gain evaporates."
date:       2026-05-11 10:00:00
author:     "Frederico"
header-img: "img/ia-codigo-manutencao-james-shore.png"
image:      "img/ia-codigo-manutencao-james-shore.png"
category:   [tech, ia, programacao, noticias]
en_content: |
  # AI Writes Code Fast. The Bill Comes in Maintenance.

  I was reading James Shore's article about AI and maintenance costs. The useful point is not "AI is bad." It is simpler: software productivity is not measured at the merge button.

  In Shore's model, every month of new code creates maintenance work: bugs, cleanup, dependency upgrades, and design repair. If AI doubles code output but keeps maintenance cost unchanged, the boost fades. If it also doubles maintenance cost, the gain can disappear in months.

  This is a model, not a law of physics. But it matches what other evidence is hinting at: METR found experienced open-source developers were 19% slower with early-2025 AI tools in one controlled setting; DORA 2025 says AI amplifies existing engineering systems; GitClear reports more copy/paste and less refactoring. The grown-up question is not "does AI make code faster?" It is "does AI reduce the cost of keeping that code alive?"
---

# IA escreve código rápido. A conta vem na manutenção.

Estava lendo um artigo interessante do **James Shore** e decidi compartilhar com vocês, porque esse assunto divide opiniões. Todo mundo já viu a IA transformar trabalho de semanas em algumas horas. O problema é que, em alguns casos, ela também transforma bugs de um mês em bugs de um dia.

O ponto do Shore é simples e desagradável: **produtividade de software não acaba no merge**.

Código novo vira manutenção. Bug. Refatoração. Dependência quebrando. Ajuste de design. Teste que ninguém escreveu porque “depois a gente vê”. Esse “depois” é um agiota paciente.

![]({{ site.baseurl }}/img/ia-codigo-manutencao-james-shore.png)
*A IA pode entregar rápido. O código, infelizmente, continua morando com você depois da entrega.*

# A conta do James Shore

Segundo James Shore, o modelo dele parte de uma estimativa didática: para cada mês gasto escrevendo código novo, você gastaria **10 dias de manutenção no primeiro ano** e **5 dias por ano depois disso**.

Ele mesmo deixa claro que isso é modelo, não profecia gravada em pedra. Mas se a hipótese estiver perto da realidade, o efeito é feio.

No cenário normal do modelo, a equipe cai para menos de **50% do tempo em trabalho novo depois de 31 meses**. Se o custo de manutenção cair pela metade, esse ponto vai para **68 meses**. Se o custo dobrar, a equipe cai abaixo de 50% em **10 meses**.

Agora entra a IA.

No exemplo extremo do Shore, a IA dobra a produção de código e também dobra o custo de manutenção desse código. Resultado: o ganho é apagado em **5 meses**. Se a IA dobra produção, mas o código continua custando o mesmo para manter, o ganho dura mais: **19 meses**. Depois, segundo o modelo, vira negativo em **40 meses**.

A frase importante é esta: para dobrar produção sem se enforcar no futuro, a IA precisa ajudar a cortar manutenção pela metade.

Se ela só escreve mais código, ela pode estar só acelerando a obra e deixando infiltração dentro da parede.

# O que outros dados ajudam a enxergar

O artigo do Shore é uma simulação. Então não dá para sair gritando “estudo prova que IA destrói produtividade”. Não prova.

Mas a tese conversa com outros sinais.

Segundo a **METR**, em um experimento com **16 desenvolvedores experientes** trabalhando em **246 issues reais** de repositórios open-source grandes e familiares, o uso de ferramentas de IA no começo de 2025 deixou os devs **19% mais lentos**. Importante: a própria METR avisa que isso não prova que IA atrasa todo mundo. É um recorte específico. Dev experiente, código conhecido, tarefas reais, ferramentas daquela época.

Mesmo assim, o dado é útil porque separa sensação de velocidade de entrega real. O dev achava que estava mais rápido. O relógio discordou. Relógio é chato assim, não respeita empolgação de demo.

O **DORA 2025**, do Google Cloud, vai por outro caminho. A pesquisa com quase **5.000 profissionais** mostra uso de IA quase universal entre os respondentes e reforça que contexto organizacional importa. Em português claro: IA não conserta processo ruim sozinha. Ela só deixa o processo ruim mais rápido e mais difícil de culpar em reunião.

Já a **GitClear**, que analisou **211 milhões de linhas alteradas** entre 2020 e 2024, aponta sinais de manutenção piorando: linhas associadas a refatoração caíram de **25% em 2021 para menos de 10% em 2024**, enquanto linhas classificadas como copy/paste subiram de **8,3% para 12,3%**.

Ressalva honesta: GitClear vende produto de análise de código. Então não é tábua da lei. Mas o dado conversa bem com o medo do Shore: mais código novo, menos reorganização, mais duplicação. É a receita clássica para uma base que cresce de lado, igual puxadinho feito sem planta.

# A pergunta certa

A pergunta madura não é “IA aumenta produtividade?”.

Às vezes aumenta. Às vezes atrasa. Às vezes ajuda júnior a sair do zero. Às vezes faz sênior revisar 400 linhas de confiança estatística com cara de código.

A pergunta melhor é: **a IA reduz o custo total de manutenção?**

Se reduz, ótimo. Use. Meça. Escale.

Se não reduz, cuidado. Você pode estar só trocando uma fila de implementação por uma fila de revisão, bug e retrabalho. É como contratar pedreiro para terminar a casa em uma semana e descobrir depois que ele passou massa corrida em cima do vazamento.

# O que medir antes de comemorar

Antes de colocar “30% mais produtivo” no slide da diretoria, mede o básico:

- tempo de review por pull request;
- retrabalho nos primeiros 14 dias depois do merge;
- bug pós-release;
- duplicação de código;
- queda de refatoração;
- tempo para entender uma mudança seis meses depois;
- proporção de código gerado que vira dívida.

Linha gerada não é valor entregue. PR aberto não é produto saudável. Código que compila hoje pode ser o aluguel emocional de amanhã.

IA boa não é a que escreve mais. É a que deixa menos porcaria para o time cuidar depois.

### Fontes e Referências

- [James Shore: You Need AI That Reduces Your Maintenance Costs](https://www.jamesshore.com/v2/blog/2026/you-need-ai-that-reduces-your-maintenance-costs)
- [METR: Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)
- [DORA 2025: State of AI-assisted Software Development](https://dora.dev/dora-report-2025/)
- [Google Blog: How are developers using AI? Inside our 2025 DORA report](https://blog.google/innovation-and-ai/technology/developers-tools/dora-report-2025/)
- [GitClear: AI Copilot Code Quality 2025](https://www.gitclear.com/ai_assistant_code_quality_2025_research)
