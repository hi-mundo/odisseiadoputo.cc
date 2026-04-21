---
layout:     post
title:      "Anatomia do Vazamento Lovable: Como um BOLA Expôs a Microsoft"
subtitle:   "A falha de design da API que abriu as portas de milhares de bancos de dados — e por que seu projeto antigo está comprometido."
en_title:   "Anatomy of the Lovable Leak: How a BOLA Exposed Microsoft"
en_subtitle: "The API design flaw that opened the doors to thousands of databases — and why your old project is compromised."
date:       2026-04-21 06:10:00
author:     "Frederico"
header-img: "img/bg-security.jpg"
category:   [tech, seguranca]
en_content: |
  # The Architecture of Failure
  
  The recent data exposure at Lovable isn't just a breach; it's a textbook example of poor API design. A critical BOLA (Broken Object Level Authorization) flaw allowed anyone with a free account to scrape source code, database credentials, and AI chat histories.
  
  The core issue was an inconsistent security patch. They secured the API for new projects but left older ones (pre-November 2025) entirely vulnerable. If you fall into this bucket, consider your environment compromised. Start rotating your database keys and API tokens. Even employees from Nvidia and Microsoft got caught in this mess. Don't trust PR apologies; trust your key rotation strategy.
---

# A Arquitetura do Desastre

O vazamento massivo de dados da plataforma de IA Lovable não foi um "ataque hacker sofisticado". Foi a falha mais básica e previsível de design de API: Broken Object Level Authorization (BOLA). Em termos práticos, a API deles não conferia se o usuário logado realmente tinha permissão para acessar o objeto (o projeto) que ele estava requisitando.

O resultado? Qualquer Zé Ninguém com uma conta gratuita no Lovable conseguia requisitar e raspar código-fonte, credenciais brutas de banco de dados e históricos de chat inteiros de outros usuários. 

# O Patch Pela Metade

A parte mais grave do incidente (e o que derrubou a desculpa inicial de "falha de documentação" da empresa) foi a implementação do patch de segurança. A Lovable corrigiu o problema na API para a criação de *novos* projetos, mas deixou uma fenda aberta gigantesca nos projetos legados.

Projetos criados antes de novembro de 2025 ficaram completamente expostos. É por isso que desenvolvedores internos de gigantes como Nvidia, Microsoft, Uber e Spotify acabaram com suas chaves de acesso vazadas.

# Plano de Contenção

Se você testou a ferramenta antes de novembro de 2025, a diretriz técnica é assumir o pior cenário. A exposição foi silenciosa e durou semanas.

1. **Rotacionamento de Chaves:** Invalide imediatamente qualquer credencial de banco de dados (Postgres, Mongo, etc) que tenha passado pelo chat ou pelas configurações da Lovable.
2. **Tokens de Terceiros:** Cancele tokens da OpenAI, Stripe, AWS ou qualquer outro serviço injetado no ambiente de dev deles.
3. **Auditoria de Logs:** Revise os logs de acesso dos seus bancos para tráfego suspeito originado de IPs fora do seu padrão nas últimas semanas.

Terceirizar código para IA é o futuro da nossa preguiça operacional, mas delegar a segurança para uma startup que gerencia a API de forma amadora é pedir para ter o banco dropado. Faça a limpeza hoje.
