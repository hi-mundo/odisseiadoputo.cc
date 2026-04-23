---
layout:     post
title:      "O Cofre Ruiu: Como o Bitwarden CLI Virou um Verme no NPM"
subtitle:   "A ironia suprema da cibersegurança: o seu gerenciador de senhas teve o CI/CD hackeado e entregou a sua AWS de bandeja."
en_title:   "The Vault Crumbled: How Bitwarden CLI Became a Worm on NPM"
en_subtitle: "The ultimate cybersecurity irony: your password manager had its CI/CD hacked and handed over your AWS on a silver platter."
date:       2026-04-23 17:30:00
author:     "Frederico"
header-img: "img/bg-security.jpg"
category:   [tech, seguranca, noticias]
en_content: |
  # The Irony of Security
  
  The ultimate irony has arrived: Bitwarden, the password manager you trust to keep your secrets safe, had its CLI package compromised on npm. On April 22, 2026, version `@bitwarden/cli@2026.4.0` was infected with a worm payload called "Shai-Hulud: The Third Coming".
  
  The attack vector wasn't a zero-day in their encryption. It was a compromised GitHub Action in Bitwarden's own CI/CD pipeline. The malicious package scraped everything: AWS keys, SSH keys, `.env` files, and even configurations for AI coding tools like Cursor, Claude, and Aider. If your pipeline downloaded this package during that 1.5-hour window, you don't just have a breach; you have an existential infrastructure crisis.
---

# A Ironia Suprema da Cibersegurança

Se existe um deus da cibersegurança, ele tem um senso de humor sádico. O Bitwarden, o gerenciador de senhas open-source que todo mundo recomenda pra guardar os segredos da empresa, acabou de distribuir malware oficialmente.

No dia 22 de abril, a versão `@bitwarden/cli@2026.4.0` foi publicada no NPM contendo um payload malicioso. Se a sua pipeline ou a sua máquina local rodou um `npm install @bitwarden/cli` naquela janela de uma hora e meia, o seu ambiente não foi apenas comprometido: ele foi aspirado.

# A Mecânica do Verme "Shai-Hulud"

A invasão não quebrou a criptografia do cofre do Bitwarden (os dados dos usuários finais estão seguros). O ataque foi puramente um *supply chain attack* focado no desenvolvedor.

Como o invasor conseguiu publicar no NPM oficial do Bitwarden? Ele comprometeu um *GitHub Action* dentro da própria pipeline de CI/CD da empresa. O script malicioso injetou um verme batizado de "Shai-Hulud: The Third Coming" direto no pacote.

O payload é uma aula de exfiltração agressiva. Ele varreu as máquinas infectadas procurando:
- Tokens do GitHub e NPM
- Chaves da AWS, GCP e Azure
- Arquivos `.env` e chaves SSH
- O histórico inteiro do seu shell
- E a cereja do bolo moderno: configurações de ferramentas de IA (Claude, Cursor, Codex CLI e Aider). O hacker sabe que o dev preguiçoso deixa as chaves de API da OpenAI salvas em texto claro no config do Cursor.

Os dados foram encriptados e jogados pra um domínio falso que tentava se passar por uma empresa de segurança legítima (`audit.checkmarx[.]cx`). Se o domínio caísse, o verme criava repositórios públicos no GitHub pra vazar os dados.

# O CI/CD é o Novo Perímetro

A lição que fica é a mesma que a gente repete e o mercado ignora: o elo mais fraco da sua empresa de segurança não é a criptografia AES-256-GCM, é o script em bash que roda no seu GitHub Actions.

O Bitwarden já derrubou o pacote e revogou os acessos, mas quem baixou a versão `2026.4.0` virou estatística. Se o próprio gerenciador de senhas não consegue proteger a chave de publicação do próprio software no CI/CD, o que te faz pensar que a esteira de deploy da sua empresa está segura?

Rotacione absolutamente tudo.

### Fontes e Referências
- [The Hacker News: Bitwarden CLI compromised in ongoing Checkmarx impersonation supply chain attack](https://thehackernews.com/2026/04/bitwarden-cli-compromised-in-ongoing.html)
- [Bleeping Computer: Bitwarden CLI npm package compromised to steal developer credentials](https://www.bleepingcomputer.com/news/security/bitwarden-cli-npm-package-compromised-to-steal-developer-credentials/)
- [Socket.dev: Bitwarden CLI compromised](https://socket.dev/blog/bitwarden-cli-compromised)
