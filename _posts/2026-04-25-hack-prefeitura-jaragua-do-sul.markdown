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

# A Mecânica Invisível: Como Eles Entram

É óbvio que a TI não achou invasores na rede. O roubo de credencial bancária moderna não derruba servidor, ele foca no elo mais fraco: o navegador do funcionário que aprova os pagamentos. 

A mecânica do ataque geralmente segue este padrão invisível:
1. **Spear Phishing:** O funcionário do financeiro recebe um e-mail hiper realista (fatura falsa, notificação do governo ou processo jurídico).
2. **Infecção Silenciosa:** Ao clicar no link ou baixar o anexo, um malware como o *Lumma Stealer* se instala silenciosamente. 
3. **Roubo de Sessão:** O malware não precisa adivinhar a senha ou passar pelo 2FA. Ele rouba o *cookie de sessão* do navegador depois que o funcionário já fez o login na Caixa Econômica.
4. **O Saque:** O invasor clona a sessão autorizada na máquina dele. Para o banco, é o computador da prefeitura operando. Para a TI da prefeitura, nada de anormal aconteceu na rede. 

Isso escancara a falha das defesas clássicas: não adianta ter o firewall mais caro do mundo se o notebook do seu diretor financeiro é um vetor aberto pra roubo de cookies.

# Por que a sua empresa é o próximo alvo?

O alerta é claro porque a quadrilha não parou. Nos últimos três meses, as prefeituras catarinenses de Irineópolis e Guaramirim sofreram exatamente a mesma tentativa. Isso prova que os hackers não estão atacando a esmo; eles mapearam o ecossistema local, descobriram os fluxos de pagamento da Caixa Econômica e estão caçando os CPFs que assinam as transferências. 

E se eles estão mirando em municípios, as médias e grandes empresas da região estão no mesmo catálogo de pesca.

A lição imediata para quem protege dinheiro de empresa: o modelo de perímetro falhou. Se a conta bancária da sua organização só é protegida por um token físico de 2FA, saiba que o roubo de sessão bypassa isso. Implemente políticas de *Zero Trust* diretamente na camada do dispositivo (endpoint), bloqueie instalação não autorizada de executáveis e audite brutalmente como o setor financeiro clica em e-mails externos. O dinheiro evapora antes mesmo de o firewall apitar.

### Fontes e Referências
- [G1: Hackers tentam desviar R$ 400 milhões de prefeitura em SC](https://g1.globo.com/sc/santa-catarina/noticia/2026/04/24/hackers-tentam-desviar-400-milhoes-mas-levam-so-12-milhoes-prefeitura-cidade-sc.ghtml)
- [Correio 24 Horas: Hackers levam R$ 12 milhões da cidade dos bilionários](https://www.correio24horas.com.br/brasil/hackers-tentam-desviar-r-400-milhoes-mas-conseguem-levar-apenas-r-12-milhoes-de-prefeitura-da-cidade-dos-bilionarios-de-sc-0426)
