---
layout:     post
title:      "O Falso Notepad++ para Mac: Como a Mídia Tech Caiu num Golpe de Marca"
subtitle:   "Criaram um site falso, roubaram o logotipo, copiaram a biografia do criador oficial e venderam a ilusão que os usuários de macOS queriam. É assim que você instala malware sorrindo."
en_title:   "The Fake Notepad++ for Mac: How Tech Media Fell for a Trademark Scam"
en_subtitle: "They created a fake site, stole the logo, copied the official creator's bio, and sold the illusion macOS users wanted. This is how you install malware smiling."
date:       2026-05-04 13:00:00
author:     "Frederico"
header-img: "img/fake-notepad-mac.jpg"
image:      "img/fake-notepad-mac.jpg"
category:   [tech, seguranca, noticias]
en_content: |
  # The Scam of the Decade
  
  Notepad++ has been a Windows staple for decades. It has never had an official macOS version. But last week, a site called `notepad-plus-plus-mac.org` popped up, claiming to be the official port. They stole the chameleon logo, copy-pasted the creator Don Ho's biography, and even fooled tech journalists into writing articles about the "long-awaited release."
  
  Don Ho had to release an angry official statement confirming it's a complete scam and a trademark infringement. This is a classic supply chain / social engineering attack. You bait developers looking for a familiar tool on a new OS, make the landing page look legitimate, and wait for them to give your unsigned DMG root access. Don't install random binaries just because they have a familiar logo.
---

# A Audácia do Golpe Open-Source

O mundo do software de código aberto (*open-source*) tem coisas maravilhosas, mas também tem uma das superfícies de ataque mais fáceis para engenharia social. O alvo da vez foi o lendário **Notepad++**, aquele editor de texto com o ícone do camaleão que salva a vida de quem usa Windows desde o começo dos anos 2000.

O detalhe fundamental da história da computação é: **o Notepad++ nunca teve e nunca terá uma versão oficial para Mac (macOS)**. Ele foi construído em cima do Win32 API. Mas os golpistas sabem que existe uma demanda enorme de desenvolvedores que migram pro ecossistema da Apple e sentem falta da ferramenta. 

Foi aí que nasceu a armadilha perfeita.

# O Falso Oficial: notepad-plus-plus-mac.org

Na última semana, apareceu na internet o domínio `notepad-plus-plus-mac.org`. Não era só um projeto de fã tentando emular o software. Os criadores do site falsificaram tudo:
- Usaram a marca registrada e o logotipo do camaleão.
- Fizeram uma página de download com cara de oficial.
- Tiveram a cara de pau de copiar a biografia e a foto de **Don Ho** (o criador e desenvolvedor solitário original do Notepad++) para dar legitimidade ao esquema.

O golpe foi tão bem envelopado que enganou veículos da mídia de tecnologia, fóruns no Reddit e tópicos no StackOverflow. Uma galera começou a noticiar: *"Finalmente, o Notepad++ chegou ao Mac!"*

# O Puxão de Orelha do Don Ho

A situação ficou tão feia que o próprio Don Ho teve que vir a público no site oficial dar uma bronca na comunidade. O comunicado dele foi curto e grosso: *"Eu serei direto: Esse site não tem absolutamente nada a ver com o Notepad++. [...] Alguém está simplesmente pegando carona no nome do projeto."*

Ele já acionou os caras e pediu para a comunidade combater a desinformação caso vejam o link sendo espalhado em fóruns de tecnologia.

# Por Que Isso é Perigoso?

Para a maioria das pessoas, parece só uma briga de direitos autorais. Para quem entende de Segurança da Informação, isso é o vetor perfeito para distribuir **malware**.

Você pega desenvolvedores acostumados a confiar cegamente na marca "Notepad++" por mais de 20 anos, oferece um executável DMG não-assinado (ou empacotado com sujeira), e o usuário vai digitar a senha de Administrador do Mac sorrindo para instalar o programa. É a velha arte de pescar desenvolvedor desatento. 

A regra de ouro continua a mesma de 1999: confira a URL antes de baixar qualquer ferramenta, por mais saudade que você tenha do Windows.

### Fontes e Referências
- [Notepad++ Oficial: Trademark Violation: Fake Notepad++ for Mac](https://notepad-plus-plus.org/news/npp-trademark-infringement/)
