---
layout:     post
title:      "O Seu Dinheiro em Dólar Vazou: O Hack do BTG Pactual e o Risco de Terceiros"
subtitle:   "Você protege a sua senha do banco, mas o seu banco manda os seus dados para uma corretora nos EUA que acaba de ser hackeada."
en_title:   "Your Dollar Money Leaked: The BTG Pactual Hack and Third-Party Risk"
en_subtitle: "You protect your bank password, but your bank sends your data to a US broker that just got hacked."
date:       2026-04-27 10:00:00
author:     "Frederico"
header-img: "img/bg-security.jpg"
category:   [tech, seguranca, noticias]
en_content: |
  # The Supply Chain Hits Banking
  
  BTG Pactual, the largest investment bank in Latin America, just notified its international account holders about a data leak. Did BTG's core systems get breached? No. The hack happened at DriveWealth LLC, their partner brokerage in the US that actually holds the accounts. 
  
  Names, account numbers, and banking IDs were exposed. The bank guarantees no money was stolen in this specific incident, but they are changing everyone's account numbers just in case. This is the ultimate lesson in third-party risk: your data is only as safe as the weakest vendor your bank uses. You can have 2FA and complex passwords, but if the partner API leaks, your data is public.
---

# O Vazamento Global e o Elo Mais Fraco

O BTG Pactual (maior banco de investimentos da América Latina) acaba de disparar o e-mail que todo cliente com dinheiro no exterior tem pavor de receber. Um alerta de vazamento de dados focado exclusivamente nas contas internacionais.

Mas a parte mais didática dessa história é **onde** a invasão aconteceu. Os hackers não derrubaram os firewalls da sede do BTG em São Paulo. O ataque aconteceu na **DriveWealth LLC**, a corretora americana parceira do banco que faz a custódia das contas internacionais (o tal do *third-party vendor*). 

A velha lição de supply chain volta a punir: a sua segurança é sempre medida pelo elo mais fraco da corrente de prestadores de serviço do seu banco.

# O Que Foi Levado (e o Pânico Retroativo)

O banco enviou a comunicação em inglês (através da subsidiária BTG Pactual US Capital LLC) avisando que nomes, números de conta e dados de identificação bancária vazaram. 

O BTG jurou de pé junto que nenhum ativo financeiro (dinheiro) foi roubado *neste* incidente e que, de forma preventiva, vai trocar os números das contas afetadas nas próximas semanas. A troca de numeração de conta é o atestado definitivo de que a exfiltração dos dados foi grave e que o risco de fraude futura via engenharia social tá no vermelho.

E o detalhe que deixa o mercado com a pulga atrás da orelha: em março deste mesmo ano, o BTG tomou um ataque direto onde quase R$ 100 milhões foram desviados (que eles dizem ter recuperado boa parte). O banco afirma que os dois incidentes não têm ligação. Mas pra quem tem dinheiro na conta, coincidência cibernética é uma palavra muito forte.

# Você Não Tem Controle

Essa tragédia escancara a realidade da cibersegurança moderna para o usuário final: **você não tem controle.**

Você pode usar YubiKey, criar senhas de 30 caracteres, ligar biometria e nunca clicar num link de phishing na vida. Não importa. Se o seu banco integra a API dele com uma corretora americana, e a corretora americana tem uma falha no banco de dados, os seus dados vão parar num fórum russo da mesma forma.

Terceirizar serviços financeiros é o modelo padrão hoje (Baas - Banking as a Service). O seu banco é só uma vitrine bonita de aplicativo; por trás, existem dezenas de APIs de terceiros validando o seu CPF e segurando o seu dólar. 

Se o seu negócio manda dados sensíveis de clientes para fornecedores através de integrações via API, a pergunta de hoje não é "se" o seu fornecedor vai vazar esses dados, é "quando".

### Fontes e Referências
- [CNN Brasil: BTG Pactual confirma acesso indevido a dados de contas internacionais](https://www.cnnbrasil.com.br/economia/negocios/btg-pactual-confirma-acesso-indevido-a-dados-de-contas-internacionais/)
- [O Globo: Vazam dados de contas internacionais do BTG Pactual após ataque hacker](https://oglobo.globo.com/google/amp/blogs/capital/post/2026/04/vazam-dados-de-contas-internacionais-do-btg-pactual-apos-ataque-hacker.ghtml)
