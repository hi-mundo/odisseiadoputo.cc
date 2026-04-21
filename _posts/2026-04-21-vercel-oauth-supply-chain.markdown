---
layout:     post
title:      "Anatomia de um Desastre: O Hack da Vercel e a Farsa do OAuth Seguro"
subtitle:   "Como um token roubado de uma startup de IA permitiu um movimento lateral que comprometeu milhares de variáveis de ambiente."
en_title:   "Anatomy of a Disaster: The Vercel Hack and the Secure OAuth Farce"
en_subtitle: "How a stolen token from an AI startup allowed lateral movement that compromised thousands of environment variables."
date:       2026-04-21 15:00:00
author:     "Frederico"
header-img: "img/bg-security.jpg"
category:   [tech, seguranca]
en_content: |
  # The Supply Chain House of Cards
  
  Vercel just got breached, and it wasn't a zero-day exploit. An employee granted full Google Workspace OAuth permissions to an AI tool called Context.ai. Context.ai got hacked last month. The attackers simply walked into Vercel using that valid token. This is a profound failure in understanding how SaaS supply chains actually work.
  
  We treat OAuth prompts like EULAs—we just click "Allow". But in a corporate environment, granting access to a third-party app gives it the keys to your SSO kingdom. They didn't just breach Vercel; they pivoted. Here is the actual exploit path: The attackers stole the OAuth refresh tokens from Context.ai's breached database. Using the Vercel engineer's token, they queried the Google Workspace API directly—bypassing passwords and MFA entirely. From there, automated scripts scoured emails and Drive docs for hardcoded AWS credentials or internal control plane tokens. Once inside Vercel's cloud environment, encryption at rest became useless. With a compromised IAM role, the attacker simply calls the KMS `Decrypt` API and dumps the "sensitive" environment variables in plaintext.

  ### Sources
  - [Trend Micro: Vercel Breach OAuth Supply Chain](https://www.trendmicro.com/en_us/research/26/d/vercel-breach-oauth-supply-chain.html)
  - [The Hacker News: Vercel Breach Tied to Context.ai](https://thehackernews.com/2026/04/vercel-breach-tied-to-context-ai-hack.html)
  - [Dark Reading: Vercel Employees AI Tool Access Data Breach](https://www.darkreading.com/application-security/vercel-employees-ai-tool-access-data-breach)
---

# O Castelo de Cartas do SaaS e o Vetor OAuth

A Vercel foi invadida e a infraestrutura de milhares de clientes foi exposta. A culpa não é de um exploit zero-day hiper complexo vendido na dark web, mas da falha arquitetural mais ignorada da década: a cadeia de suprimentos via permissões OAuth. 

O ataque começou fora da Vercel. Um funcionário usou sua conta corporativa do Google Workspace para dar permissão irrestrita (o maldito botão "Permitir Tudo") a uma ferramenta de analytics baseada em IA chamada Context.ai. O detalhe tragicômico? A Context.ai foi hackeada no mês passado. Os invasores rasparam o banco de tokens OAuth deles, identificaram a credencial válida de um engenheiro da Vercel e começaram a festa.

# A Mecânica do Exploit: Escovando os Bits do Movimento Lateral

Pra quem gosta de escovar bit, vamos falar da anatomia real do ataque. O mercado ainda trata o OAuth corporativo como se fosse o botão de "Fazer login com Facebook" do Tinder. Não é. Quando voce da permissão de Workspace pra um SaaS de terceiros, voce ta entregando *refresh tokens* com escopos massivos.

O fluxo do exploit foi brutalmente simples e elegante:
1. A Context.ai foi hackeada. O atacante dumpou o banco de dados deles e levou os *refresh tokens* OAuth válidos.
2. O atacante pegou o token específico do engenheiro da Vercel e bateu direto na API do Google Workspace (`googleapis.com`). Nada de senha, nada de phishing, nada de 2FA. O token já é o bypass de MFA definitivo.
3. Com acesso à API, scripts automatizados varreram o Gmail e o Google Drive do funcionário atrás de chaves hardcoded, tokens de acesso a painéis internos, credenciais da AWS ou tokens de CI/CD.

Achou a credencial de infraestrutura na caixa de entrada? O invasor pivoteia pro painel de controle interno da Vercel. 

# A Farsa do KMS e das Variáveis Encriptadas

O resultado prático foi o vazamento de variáveis de ambiente de clientes. A Vercel soltou uma nota de RP jurando que as variáveis marcadas como "sensíveis" estavam encriptadas. 

Isso é uma meia-verdade técnica projetada pra acalmar acionista. Criptografia em repouso só te protege se alguém invadir o data center e roubar o HD físico do servidor. 

Se o atacante entra no ambiente cloud (AWS/GCP) com credenciais administrativas roubadas do e-mail, ele herda a *role* do IAM atrelada ao KMS (Key Management Service). Ele não precisa quebrar a criptografia matemática; ele simplesmente faz a chamada legítima de `Decrypt` na API do provedor de nuvem e o sistema devolve as variáveis "sensíveis" em texto claro. O sistema fez exatamente o que foi programado pra fazer: entregar o dado pra quem tinha a chave. 

A cereja do bolo foi o CEO Guillermo Rauch tentar justificar a catástrofe dizendo que os invasores agiram com uma "velocidade surpreendente", insinuando que os hackers usaram IA para acelerar o ataque. É a desculpa perfeita pra tentar tirar o foco da várzea que era a governança de acessos deles. A invasão foi rápida porque a porta tava escancarada por dentro.

# Como Mitigar Essa Várzea

A Vercel mandou rotacionar as credenciais. Faça isso agora, sem pensar duas vezes. Mas se a sua empresa não mudar a cultura, voce é o próximo.

1. **Trave o OAuth Corporativo:** Se a sua organização permite que qualquer desenvolvedor integre o Google Workspace ou Azure AD com a primeira startup de IA que ele acha no Twitter, a culpa do próximo vazamento é sua. O bloqueio de apps de terceiros tem que ser default. A liberação só acontece via whitelist, depois do time de sec dar o sangue auditando a startup.
2. **Zero Trust para SaaS:** Trate integrações de terceiros como agentes hostis. O escopo do token OAuth precisa ser o mínimo necessário (Princípio do Menor Privilégio). Pediu acesso total aos e-mails pra gerar um resumo de log? Bloqueia.

Terceirizar inteligência artificial é ótimo pra produtividade, mas quando voce acopla um sistema novo numa base sem auditoria, voce ta só construindo a ponte pro seu próprio velório digital.


### Fontes e Referências
- [Trend Micro: Vercel Breach OAuth Supply Chain](https://www.trendmicro.com/en_us/research/26/d/vercel-breach-oauth-supply-chain.html)
- [The Hacker News: Vercel Breach Tied to Context.ai](https://thehackernews.com/2026/04/vercel-breach-tied-to-context-ai-hack.html)
- [Dark Reading: Vercel Employees AI Tool Access Data Breach](https://www.darkreading.com/application-security/vercel-employees-ai-tool-access-data-breach)
