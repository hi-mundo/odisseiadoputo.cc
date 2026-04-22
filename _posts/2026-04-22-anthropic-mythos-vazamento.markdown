---
layout:     post
title:      "Anthropic Mythos: A IA 'Perigosa Demais' Vazou por Culpa de Senha de Terceiro"
subtitle:   "A empresa que prega o evangelho da segurança da IA teve seu modelo militar vazado porque alguém adivinhou a URL."
en_title:   "Anthropic Mythos: The 'Too Dangerous' AI Leaked Because of a Third-Party Password"
en_subtitle: "The company that preaches the gospel of AI safety had its military-grade model leaked because someone guessed the URL."
date:       2026-04-22 13:00:00
author:     "Frederico"
header-img: "img/bg-security.jpg"
category:   [tech, seguranca, noticias]
en_content: |
  # The Illusion of Safety
  
  Anthropic loves to position itself as the responsible adult in the AI room. They built "Mythos", a model supposedly so powerful and capable of autonomous cyberattacks that they refused to release it to the public, offering it only to a select few. It was the AI equivalent of a nuclear code.
  
  And how did this apocalyptic weapon leak on the exact same day it was announced? Sophisticated state-sponsored hackers? No. Some guys on a private forum compromised the credentials of a third-party vendor and literally guessed the URL based on Anthropic's naming conventions. 
  
  # Supply Chain Strikes Again
  
  You can build the most advanced neural network on the planet, alignment guardrails, and constitutional AI. None of it matters if your supply chain is held together by duct tape. Anthropic got bypassed by the exact same vector that brings down regular companies: vendor credentials and predictable endpoints. Stop worrying about AI becoming Skynet and start worrying about your third-party contractors' passwords.
---

# O Evangelho da Segurança Ruiu

Se tem uma empresa que adora posar de adulto responsável na sala da Inteligência Artificial, é a Anthropic. Eles construíram um modelo novo chamado "Mythos", que a própria agência de segurança do Reino Unido classificou como um "salto de ameaça cibernética". A IA é supostamente tão boa em achar vulnerabilidade e conduzir ataques autônomos que a Anthropic decidiu: "é perigosa demais pro público, vamos liberar só pra um grupinho seleto". 

Era o equivalente digital de uma ogiva nuclear guardada num cofre suíço. 

E adivinha como esse cofre impenetrável foi aberto no exato mesmo dia do anúncio?

# A Mecânica do Fracasso: IDOR e Segurança por Obscuridade

Se você espera um ataque com zero-days não documentados e injeção de kernel, a realidade vai te deprimir. A mecânica do vazamento é uma aula do que NÃO fazer em design de infraestrutura.

O grupo do fórum privado conseguiu acesso ao Mythos explorando o elo mais sujo da cadeia: o *third-party vendor*. Eles comprometeram as credenciais de um prestador de serviço que tinha acesso a uma sandbox de homologação. Mas a falha fatal vem a seguir.

Como eles acharam o modelo "super secreto"? Eles literalmente adivinharam o endpoint. Isso escancara duas falhas arquiteturais patéticas na Anthropic:
1. **Predictable Resource Location:** O padrão de nomenclatura da API da Anthropic era tão óbvio (`claude-3-opus`, `claude-3-sonnet`) que bastou um script de força bruta simples no dicionário para bater no endpoint do Mythos.
2. **Security through Obscurity (e falta de RBAC):** O fato de que "adivinhar a URL" resultou em acesso bem-sucedido prova que o endpoint não estava protegido por controles de acesso baseados em função (RBAC) rígidos e granulares. Se a única barreira entre um hacker e o seu modelo militar é o fato de que "ninguém sabe o link ainda", você não tem segurança, você tem esperança.

A inteligência artificial capaz de derrubar a infraestrutura global vazou porque a empresa mais paranóica do Vale do Silício confiou em segurança por obscuridade.

# A Ilusão do Perímetro

A ironia chega a ser fisicamente dolorosa. A Anthropic gasta milhões treinando *Constitutional AI* e alinhamento ético pra máquina não destruir a humanidade, mas não consegue proteger a porta dos fundos da própria infraestrutura. 

Eles já soltaram a nota de Relações Públicas de sempre: "estamos investigando", "não tem evidência de que saiu do ambiente do vendor", e por aí vai. O estrago tá feito. O modelo já foi acessado.

A lição pra nós aqui embaixo não é sobre o quão perigosa a IA vai ficar. A lição é que não importa se você tá protegendo um banco de dados de padaria ou uma arma cibernética militar baseada em redes neurais: se a sua cadeia de suprimentos (o famoso *supply chain*) é gerida com fita crepe, você vai ser invadido pela porta da frente usando a credencial do cara que limpa o carpete. 

Pare de ter medo da Skynet e vá auditar os acessos da sua empresa terceirizada.

### Fontes e Referências
- [The Guardian: Anthropic investigates report of rogue access to hack-enabling Mythos AI](https://www.theguardian.com/technology/2026/apr/22/anthropic-investigates-report-of-rogue-access-to-hack-enabling-mythos-ai)
- [Financial Times: Anthropic Mythos Unauthorized Access](https://www.ft.com/content/56d65763-69fe-4756-baf4-c8192b7aadaf?syn-25a6b1a6=1)
