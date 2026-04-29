---
layout:     post
title:      "Engenharia Reversa no ChatGPT: Como a OpenAI Injeta Anúncios e Rastreia Você"
subtitle:   "O robô que prometia revolucionar a humanidade virou só mais um painel de anúncios focado em te vender marmita no Grubhub."
en_title:   "Reverse Engineering ChatGPT: How OpenAI Injects Ads and Tracks You"
en_subtitle: "The robot that promised to revolutionize humanity became just another ad board focused on selling you food delivery."
date:       2026-04-29 00:00:00
author:     "Frederico"
header-img: "img/post-exemplo.jpg"
image: "https://images.unsplash.com/photo-1614064641913-6b714b108625?q=80&w=1200&auto=format&fit=crop"
category:   [tech, seguranca, noticias]
en_content: |
  # The Ad Machine
  
  The ultimate goal of artificial intelligence isn't saving the world; it's selling you a pizza. An independent researcher just reverse-engineered the entire ad attribution loop inside ChatGPT. The system uses a highly structured backend injection process via SSE (Server-Sent Events) to push ads dynamically into your conversation.
  
  They use contextual targeting. If you ask about a trip to Beijing, you get a Grubhub ad for Chinese food delivery. The tracking loop is brutally efficient: they inject four Fernet-encrypted tokens, force links to open in an internal webview, and use a dedicated pixel SDK (OAIQ) on the merchant's site to track your conversion with a 30-day cookie. The AI revolution is just AdSense with a PhD. Add `bzr.openai.com` to your adblocker today.
---

# A Conta de Energia Chegou (E a IA Virou Outdoor)

A regra imutável da internet bateu na porta do Vale do Silício: toda ferramenta revolucionária eventualmente se torna apenas mais uma máquina hiper-otimizada de vender anúncios. 

Sejamos francos, isso era óbvio. Você acha que a sua conta de luz está cara no final do mês? A OpenAI tá queimando gigawatts em clusters de GPU para processar as suas perguntas inúteis. A conta de infraestrutura deles é estratosférica e o modelo de assinatura de 20 dólares nunca ia fechar essa matemática. A única saída viável no ecossistema digital sempre foi a mesma: monetizar o usuário.

Um pesquisador independente escovou os bits do tráfego do ChatGPT e fez engenharia reversa na nova plataforma de *Ads* da empresa. A conclusão? O robô que prometia transcender o trabalho humano agora é, na prática, um algoritmo de rastreamento com PhD focado em te vender coisas.

# A Mecânica do "Ad Injection" via SSE

O ataque à sua carteira acontece de forma silenciosa e estruturada. Quando você conversa com o ChatGPT, a interface abre uma conexão *Server-Sent Events (SSE)* no backend (`chatgpt.com/backend-api/f/conversation`). O servidor não manda só a resposta do modelo; ele injeta eventos malandros do tipo `single_advertiser_ad_unit`.

O payload é uma aula de como amarrar o usuário:
1. **Targeting Contextual Bruto:** A OpenAI lê o prompt na hora e cospe a propaganda. O cara perguntou sobre viagem para Pequim? A IA devolve um card do Grubhub (iFood gringo) focado em comida chinesa. Falou de moda primavera? Toma anúncio da Aritzia. O contexto é 100% monetizado em tempo real.
2. **A Ilusão da Fuga:** Os links dos anúncios vêm com a flag `"open_externally": false`. O ChatGPT obriga o anúncio a abrir dentro do próprio *webview* do aplicativo. Você não sai do ecossistema deles. A OpenAI monitora o que você faz depois do clique.

# Os 4 Tokens Criptografados de Rastreamento

Para fechar o loop de conversão e cobrar do anunciante, a OpenAI criou uma esteira de rastreamento pesada. Eles penduram **quatro tokens criptografados (Fernet AES-128-CBC)** em cada card de anúncio. 

A mágica acontece quando você clica. A URL de destino carrega tokens na *query string* (como o `oppref`). Lá na página do anunciante, a OpenAI instalou um script espião deles (o SDK **OAIQ** - `oaiq.min.js`). Esse script pega o seu token de clique e grava um cookie de primeira parte chamado `__oppref` no seu navegador que dura 30 dias (720 horas).

Tudo o que você fizer no site do anunciante depois disso vai bater num endpoint secreto de telemetria da OpenAI (`bzr.openai.com`) avisando que o ChatGPT conseguiu te vender uma pizza.

# Como Bloquear a Várzea

No fim do dia, a revolução da inteligência artificial foi reduzida a descobrir como otimizar o *Click-Through Rate* (CTR) de publicidade direcionada. Se você tem preguiça de ser o rato de laboratório da vez, a instrução técnica pra limpar a sua rede é adicionar esses domínios na blocklist do seu Pi-hole, firewall ou uBlock Origin para matar a telemetria deles:

- `bzrcdn.openai.com`
- `bzr.openai.com`

E se tiver curiosidade, vá nos cookies do seu navegador hoje e procure por `__oppref` ou `__oaiq_domain_probe`. Você vai ver de camarote a Skynet contabilizando a sua vontade de comer lanche.

### Fontes e Referências
- [Buchodi.com: How ChatGPT serves ads. Here's the full attribution loop](https://www.buchodi.com/how-chatgpt-serves-ads-heres-the-full-attribution-loop/)
