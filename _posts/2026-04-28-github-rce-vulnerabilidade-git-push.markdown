---
layout:     post
title:      "O Git Push da Morte: Como um Comando Simples Quebrou o GitHub Inteiro"
subtitle:   "A vulnerabilidade que permitia a qualquer usuário autenticado rodar código nos servidores do GitHub e ler todos os repositórios privados da plataforma."
en_title:   "The Git Push of Death: How a Simple Command Broke All of GitHub"
en_subtitle: "The vulnerability that allowed any authenticated user to run code on GitHub's servers and read all private repositories on the platform."
date:       2026-04-28 22:30:00
author:     "Frederico"
header-img: "img/bg-security.jpg"
category:   [tech, seguranca, noticias]
en_content: |
  # The Apocalyptic Git Push
  
  Cybersecurity firm Wiz just disclosed a vulnerability in GitHub (CVE-2026-3854) with a CVSS of 8.7 that borders on the absurd. Any authenticated user could execute arbitrary code (RCE) on GitHub's backend servers using a single, specially crafted `git push` command.
  
  The flaw was a basic injection in GitHub's internal Git infrastructure. They didn't sanitize user-supplied push options before appending them to internal service headers. This allowed an attacker to inject metadata and execute commands on the shared storage nodes. On GitHub.com, this meant potential access to millions of private repositories. On GitHub Enterprise Server, it meant full server compromise. GitHub patched it in two hours, but the structural lesson is clear: if GitHub can fail at input sanitization, your startup's backend is definitely vulnerable.
---

# O Apocalipse do "Git Push"

Se você trabalha escrevendo código, você confia no GitHub como confia que o sol vai nascer amanhã. É o cofre-forte da propriedade intelectual do planeta. E esse cofre acabou de provar que a porta dos fundos estava aberta pra quem soubesse forçar a maçaneta.

A empresa de cibersegurança Wiz divulgou publicamente hoje a **CVE-2026-3854** (CVSS 8.7). Em termos simples: era uma falha de Execução Remota de Código (RCE) que afetava tanto o GitHub.com quanto as instalações privadas do GitHub Enterprise Server.

A mecânica da invasão? Qualquer usuário autenticado da plataforma conseguia executar comandos diretos nos servidores de backend do GitHub usando um único comando: um `git push` malicioso.

# A Falha Amadora: Injeção de Cabeçalho

Para quem escova bit, a humilhação do GitHub é dupla, porque a falha foi estupidamente básica. O problema estava na falta de sanitização de input na infraestrutura interna do Git. 

Quando você roda um `git push`, você pode passar parâmetros extras (as famosas push options). O GitHub pegava esses valores passados pelo usuário e colocava direto nos cabeçalhos (headers) dos serviços internos de comunicação deles. 

O problema é que os caras do GitHub usaram um caractere delimitador no formato interno do cabeçalho que era o *mesmo* caractere que o usuário podia digitar. A falha clássica de injeção. O atacante enviava uma push option marota, o sistema interno não limpava a string, e o invasor conseguia injetar campos extras de metadados, forçando os nós de armazenamento do GitHub a executarem comandos remotos no backend.

# O Estrago (Se Alguém Tivesse Achado Antes)

O impacto disso beira o absurdo. No GitHub.com, essa falha abria acesso de execução remota nos nós de storage compartilhados, ou seja, acesso potencial a literalmente **milhões de repositórios privados** de empresas no mundo todo. Para quem roda o GitHub Enterprise Server local (bancos, governos), a falha entregava comprometimento total do servidor e de todos os secrets armazenados lá dentro.

O GitHub arrumou a bagunça no site principal em impressionantes duas horas depois que a Wiz reportou (lá em março), e os patches pro Enterprise já saíram. Mas a lição técnica que a gente precisa engolir de seco é assustadora: 

Se a Microsoft/GitHub, com um exército de engenheiros ganhando 500 mil dólares por ano, cometeu uma falha júnior de sanitização de input injetado em cabeçalho interno... que confiança você tem de que o código de *backend* da sua empresa não tá fazendo a mesma coisa agora?

E o detalhe irônico pro futuro da cibersegurança: essa foi uma das primeiras vulnerabilidades críticas descobertas em binários de código fechado usando inteligência artificial. O robô já tá achando brecha no código alheio melhor que a gente.

### Fontes e Referências
- [The Hacker News: Researchers Discover Critical GitHub Flaw](https://thehackernews.com/2026/04/researchers-discover-critical-github.html)
- [Wiz Blog: GitHub RCE Vulnerability (CVE-2026-3854)](https://www.wiz.io/blog/github-rce-vulnerability-cve-2026-3854)
- [GitHub Blog: Securing the Git push pipeline](https://github.blog/security/securing-the-git-push-pipeline-responding-to-a-critical-remote-code-execution-vulnerability/)
