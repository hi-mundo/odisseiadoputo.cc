---
layout:     post
title:      "O Dia em que o Axios Quebrou a Web: RAT no NPM e Supply Chain"
subtitle:   "Se você usa o pacote HTTP mais famoso do mundo, sua pipeline de CI/CD provavelmente acabou de instalar um Cavalo de Troia."
en_title:   "The Day Axios Broke the Web: RAT on NPM and Supply Chain"
en_subtitle: "If you use the most famous HTTP package in the world, your CI/CD pipeline probably just installed a Trojan Horse."
date:       2026-04-24 02:00:00
author:     "Frederico"
header-img: "img/bg-security.jpg"
category:   [tech, seguranca, noticias]
en_content: |
  # The Supply Chain Nightmare
  
  The most popular HTTP client for Node.js just got hijacked. Axios suffered a massive supply chain attack on NPM. An attacker compromised a maintainer's account and pushed malicious versions (1.14.1 and 0.30.4). This isn't just a bug; it's a Remote Access Trojan (RAT) hidden inside a fake dependency (`plain-crypto-js`). If your CI/CD fetched these versions, your server is compromised. 
  
  Stop relying on "latest". Pin your dependencies, use package-lock.json religiously, and enable 2FA on everything. 
---

# O Desastre do Axios

A regra do "Amigão da Vizinhança" ataca novamente. Se você trabalha com JavaScript/Node.js, as chances da sua aplicação usar o pacote `axios` para fazer requisição HTTP são de aproximadamente 99%. 

E é por isso que o ataque de *supply chain* que acabou de acontecer no NPM é um pesadelo absoluto.

Um atacante conseguiu sequestrar a conta de um dos mantenedores oficiais do repositório do Axios e publicou versões maliciosas (as versões `1.14.1` e `0.30.4`). O ataque durou apenas 3 horas no ar, mas quando você tem milhões de downloads por semana, 3 horas é tempo suficiente para infectar infraestruturas do mundo inteiro.

# A Mecânica do Cavalo de Troia

O atacante não alterou o código fonte bruto do Axios para dar bandeira na cara de quem lê os commits. Ele usou a tática clássica de *dependency poisoning*. A versão maliciosa simplesmente adicionou uma nova dependência no `package.json` chamada `plain-crypto-js@4.2.1`. 

Se você não audita as dependências das suas dependências, você caiu no golpe. O pacote falso instalava silenciosamente um Trojan de Acesso Remoto (RAT) multiplataforma. O resultado? O atacante ganha uma porta dos fundos no seu servidor de aplicação, seja ele um cluster Kubernetes na AWS ou a sua máquina local rodando `npm start`.

# Pare de Jogar Roleta Russa no CI/CD

O pacote malicioso já foi derrubado. Mas o recado que fica é brutal.

Se a sua esteira de CI/CD (GitHub Actions, GitLab, Jenkins) rodou um `npm install` sem usar um arquivo de *lock* rigoroso (`package-lock.json` ou `yarn.lock`), você pode ter instalado a bomba-relógio e feito o deploy da porta dos fundos direto pra produção.

A maioria das empresas quebra exatamente aí: elas terceirizam a segurança da aplicação para a integridade de repositórios públicos. Pare de usar tags vagas (como `^1.14.0`) e trave as versões das suas dependências de forma rígida. 

E se você usou o Axios nas últimas horas, vá verificar os logs do seu CI/CD e audite se o `plain-crypto-js` entrou na sua árvore de dependências.

### Fontes e Referências
- [Arctic Wolf: Supply Chain Attack Impacts Widely Used Axios npm Package](https://arcticwolf.com/resources/blog/supply-chain-attack-impacts-widely-used-axios-npm-package/)
- [Trend Micro: Axios NPM Package Compromised](https://www.trendmicro.com/en_us/research/26/c/axios-npm-package-compromised.html)
- [SOCRadar: Axios NPM Supply Chain Attack](https://socradar.io/blog/axios-npm-supply-chain-attack-2026-ciso-guide/)
