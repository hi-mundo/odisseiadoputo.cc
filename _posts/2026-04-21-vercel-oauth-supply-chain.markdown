---
layout:     post
title:      "Vercel Hackeada: Como um Botão 'Permitir Tudo' Quebrou a Cadeia de Suprimentos"
subtitle:   "O CEO quer culpar a inteligência artificial dos hackers, mas o problema real é funcionário dando permissão OAuth pra startup aleatória."
en_title:   "Vercel Hacked: How an 'Allow All' Button Broke the Supply Chain"
en_subtitle: "The CEO wants to blame AI hackers, but the real issue is employees giving OAuth access to random startups."
date:       2026-04-21 15:00:00
author:     "Frederico"
header-img: "img/bg-security.jpg"
category:   [tech, seguranca]
en_content: |
  # The Supply Chain House of Cards
  
  Vercel just got breached, and it wasn't a zero-day exploit. An employee granted full Google Workspace OAuth permissions to an AI tool called Context.ai. Context.ai got hacked last month. The attackers simply walked into Vercel using that valid token.
  
  Now, environment variables from Vercel customers are exposed. The CEO, Guillermo Rauch, is trying to spin this by saying the attackers moved with "surprising velocity" thanks to AI. That's PR bullshit. They moved fast because the door was wide open. Lock down your Google Workspace OAuth settings and rotate your Vercel secrets immediately.
---

# O Castelo de Cartas do SaaS

A Vercel acabou de ser invadida e a culpa não é de um exploit zero-day hiper complexo vendido na dark web. A infraestrutura de milhares de clientes foi exposta porque um funcionário clicou no botão "Permitir Tudo" do Google.

O ataque foi um *supply chain* via OAuth. Um funcionário da Vercel usou a conta corporativa do Google Workspace para dar permissão irrestrita a uma ferramentinha de analytics baseada em IA chamada Context.ai. 

O detalhe tragicômico? A Context.ai foi hackeada no mês passado. Os invasores roubaram os tokens OAuth de lá, viram que tinham acesso livre ao ambiente da Vercel e simplesmente entraram pela porta da frente.

# Variáveis de Ambiente e Desculpas de PR

O resultado prático é que variáveis de ambiente de clientes da Vercel vazaram. A empresa jura que as variáveis marcadas como "sensíveis" estavam encriptadas e que só as "não-sensíveis" foram lidas. Se você acredita que desenvolvedor marca tudo certinho como sensível no painel da Vercel, eu tenho um terreno na lua pra te vender.

A cereja do bolo é a resposta de RP. O CEO Guillermo Rauch tentou justificar a catástrofe dizendo que os invasores agiram com uma "velocidade surpreendente" e culpou o uso de inteligência artificial por parte dos hackers. É a desculpa corporativa perfeita da década: culpar a IA pelo fato da sua governança interna ser um lixo.

A invasão foi rápida porque quando você entrega a chave mestra pra um bandido, ele não precisa perder tempo arrombando a porta.

# Mitigação

A Vercel mandou rotacionar as credenciais. Faça isso. Mas o problema estrutural é no seu quintal.

Se a sua empresa permite que qualquer desenvolvedor integre o Google Workspace corporativo com a primeira startup de IA que ele acha legal no Twitter, você é o próximo da fila. 

Bloqueie a instalação de apps OAuth de terceiros no seu Workspace ou Azure AD para ontem. Só libere por whitelist. A preguiça de criar um fluxo de aprovação custa a credibilidade inteira da sua empresa.
