---
layout:     post
title:      "O Roubo de R$ 12 Milhões: A Ilusão da Segurança na Prefeitura de SC"
subtitle:   "Como hackers tentaram varrer R$ 400 milhões de cofres públicos e a desculpa oficial é que 'o problema não foi na TI interna'."
en_title:   "The R$ 12 Million Heist: The Illusion of Security in a Brazilian City Hall"
en_subtitle: "How hackers tried to sweep R$ 400 million from public coffers and the official excuse is 'the problem wasn't in our internal IT'."
date:       2026-04-25 17:00:00
author:     "Frederico"
header-img: "img/bg-security.jpg"
category:   [tech, seguranca, noticias]
en_content: |
  # The 12 Million Reais Phishing
  
  Hackers just casually walked away with R$ 12 million from the accounts of Jaraguá do Sul's city hall in Brazil. They actually tried to transfer R$ 400 million, but the bank blocked the rest. The best part? The city's official PR statement says they did a sweep and "found no evidence that the transfers originated from internal IT systems".
  
  Of course they didn't. Hackers don't need to break your firewall if an employee hands over the session token or falls for a targeted phishing scam that compromises the banking credentials directly. Municipal cybersecurity is notoriously underfunded, relying on outdated perimeters instead of Zero Trust architecture. If a city can lose 12 million overnight, what makes you think your corporate bank tokens are safe?
---

# O Puxão de 12 Milhões de Reais

Hackers acabaram de varrer R$ 12 milhões das contas da prefeitura de Jaraguá do Sul (a tal "cidade dos bilionários" em Santa Catarina). O rombo só não foi pior porque o setor de contabilidade e a Caixa Econômica bloquearam o resto da tentativa, que mirava absurdos R$ 400 milhões.

E aqui entra a clássica nota de Relações Públicas feita para proteger o emprego do secretário: a prefeitura fez uma varredura e afirmou que "não encontrou indícios de que as transferências tenham sido originadas de sistemas internos da TI". 

# A Desculpa do Perímetro e o Vetor Real

É óbvio que não acharam nada nos sistemas internos. Hacker moderno não precisa invadir o Active Directory da prefeitura, derrubar o firewall e compilar um zero-day na porta 22 pra roubar dinheiro. 

Eles usam engenharia social, phishing direcionado (Spear Phishing) ou roubam tokens de sessão do navegador do funcionário da tesouraria que logou no banco. Quando a credencial do banco (ou o token de acesso) é comprometida no endpoint do usuário final, a transferência é feita de fora, autenticada como se fosse legítima. Para os logs da TI da prefeitura, simplesmente não aconteceu nada. Para a Caixa, foi o funcionário autorizado quem apertou o botão.

Isso escancara a realidade da segurança municipal (e de muita empresa privada também). Eles focam a verba em antivírus e firewall de perímetro, mas ignoram a camada de identidade e o controle de postura do endpoint.

# O Padrão no Estado

O mais bizarro é que esse não é um caso isolado. Nos últimos três meses, outras prefeituras de SC (Irineópolis e Guaramirim) também sofreram ataques parecidos. Existe uma quadrilha mapeando ativamente o processo de pagamentos governamentais da região. Eles sabem quem tem a caneta, quem tem o token do banco e qual e-mail o funcionário clica sem pensar duas vezes.

A lição que fica pra sua empresa é simples: se a sua segurança depende de um funcionário do financeiro não clicar num link falso de PDF ou não ter o cookie do navegador roubado por um malware silencioso, o seu dinheiro já não é mais seu. Zero Trust não é só pra servidor na nuvem, é pro notebook do cara que assina o PIX.

### Fontes e Referências
- [G1: Hackers tentam desviar R$ 400 milhões de prefeitura em SC](https://g1.globo.com/sc/santa-catarina/noticia/2026/04/24/hackers-tentam-desviar-400-milhoes-mas-levam-so-12-milhoes-prefeitura-cidade-sc.ghtml)
- [Correio 24 Horas: Hackers levam R$ 12 milhões da cidade dos bilionários](https://www.correio24horas.com.br/brasil/hackers-tentam-desviar-r-400-milhoes-mas-conseguem-levar-apenas-r-12-milhoes-de-prefeitura-da-cidade-dos-bilionarios-de-sc-0426)
