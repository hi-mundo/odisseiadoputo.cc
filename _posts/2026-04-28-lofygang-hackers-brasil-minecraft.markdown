---
layout:     post
title:      "LofyGang Voltou: Os Hackers Brasileiros que Mineram o seu Cartão de Crédito no Minecraft"
subtitle:   "Depois de três anos sumidos, a quadrilha focada em envenenar pacotes NPM voltou atacando o ponto cego da segurança de TI: o PC do seu filho."
en_title:   "LofyGang is Back: The Brazilian Hackers Mining Your Credit Card in Minecraft"
en_subtitle: "After three years missing, the gang focused on poisoning NPM packages returned attacking IT's blind spot: your kid's PC."
date:       2026-04-28 22:45:00
author:     "Frederico"
header-img: "img/bg-security.jpg"
category:   [tech, seguranca, noticias]
en_content: |
  # The Return of the Supply Chain Hackers
  
  The Brazilian cybercrime group "LofyGang" is back from the dead after three years. These are the guys who got famous in 2022 for poisoning over 200 NPM packages to steal Discord tokens and Disney+ accounts. Now, they are attacking the easiest backdoor into your corporate network: your kid's gaming PC.
  
  They disguised their LofyStealer malware (GrabBot) as a Minecraft hack called "Slinky". Once the kid runs it to get an edge in the game, the malware scrapes Google Chrome, Edge, and Brave for cookies, saved passwords, credit card data, and IBANs. It's the ultimate phishing move. You spend millions securing your company's AWS perimeter, but your network gets compromised because your kid downloaded a pickaxe hack.
---

# O Retorno dos Picaretas do NPM

Se você achou que o Brasil só exportava pagode e fraude de PIX, achou errado. O grupo cibercriminoso brasileiro **LofyGang** (os mesmos caras que passaram 2022 envenenando pacotes no repositório NPM pra roubar token de desenvolvedor) acaba de voltar à ativa depois de três anos no escuro.

Mas dessa vez, eles decidiram parar de atacar o desenvolvedor direto e foram atrás do elo mais fraco da rede da sua casa: o PC do seu filho que joga Minecraft.

# Minerando Dados com Picaretas Falsas

A tática é de uma picaretagem absurda. Eles empacotaram o malware deles, o famoso *LofyStealer* (também conhecido como *GrabBot*), disfarçado como um hack/mod de Minecraft chamado "Slinky". Eles usam até o ícone oficial do jogo no executável pra enganar as crianças.

Quando a molecada roda o arquivo achando que vai ganhar diamante infinito ou voar pelo mapa, o LofyStealer entra em ação. O malware varre silenciosamente navegadores como Chrome, Edge, Brave e Firefox. O que ele procura? Cookies de sessão, senhas salvas, tokens de Discord, dados de cartão de crédito e até números de contas bancárias internacionais (IBAN).

Em resumo: os caras tão literalmente brincando de Minecraft na vida real, só que a mina de diamante é o limite do seu cartão de crédito salvo no Google Pay.

# O Ponto Cego da Cibersegurança Doméstica

A ironia que machuca a galera de TI é o vetor de ataque indireto. Você é um engenheiro ou analista de segurança; você usa YubiKey pra logar no GitHub, não acessa link estranho e trava a porta da AWS do seu trabalho com MFA rígido.

Aí você volta pra casa, liga o notebook na mesma rede Wi-Fi, ou pior, empresta o seu PC pessoal pro seu filho "jogar só um pouquinho". Ele baixa o "Slinky" do YouTube, executa o malware, e o LofyStealer raspa todos os seus cookies de sessão corporativos que estavam salvos no seu Chrome. Pro atacante, não faz diferença se a porta de entrada foi um exploit complexo de nuvem ou um mod de Minecraft. O resultado final é o mesmo.

A LofyGang vende essas credenciais roubadas no submundo ou joga no GitHub deles como se fosse troféu. 

Se você tem adolescente em casa baixando mod de jogo, considere que o seu computador pessoal é uma zona de guerra. Bloqueie execução de binários não assinados ou isole a máquina do garoto numa rede *Guest*. A picareta que ele baixou vai cavar direto no seu saldo bancário.

### Fontes e Referências
- [The Hacker News: Brazilian 'LofyGang' Resurfaces After Three Years Targeting Minecraft Players](https://thehackernews.com/2026/04/brazilian-lofygang-resurfaces-after.html)
