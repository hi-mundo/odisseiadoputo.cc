---
layout:     post
title:      "A Paranoia Quântica e as Chaves de 128 bits"
subtitle:   "Por que você não precisa migrar seu AES-128 e quem está realmente vendendo medo."
en_title:   "Quantum Paranoia and 128-bit Keys"
en_subtitle: "Why you don't need to migrate your AES-128 and who is actually selling fear."
date:       2026-04-20 22:55:00
author:     "Frederico"
header-img: "img/bg-security.jpg"
category:   [tech, seguranca]
en_content: |
  # The Grover Illusion
  
  If you work with infra, you've heard some "expert" say you need to migrate your symmetric crypto to AES-256 urgently because quantum computers will break 128-bit keys. This is lazy math.
  
  The confusion comes from Grover's Algorithm, which theoretically halves the effective security of a symmetric key. But Grover's algorithm doesn't parallelize well. To break a single 128-bit key sequentially would take hundreds of thousands of years. The consensus among real cryptographers (and NIST) is that 128-bit symmetric crypto remains perfectly safe. Focus on your asymmetric cryptography (RSA, ECC) instead. That's the real quantum vulnerability.
---

# A Ilusão do Algoritmo de Grover

Se você trabalha com infraestrutura ou cibersegurança, já deve ter ouvido algum "especialista" em tendências dizer que você precisa migrar toda a sua criptografia simétrica para AES-256 urgentemente, porque "os computadores quânticos vão quebrar as chaves de 128 bits".

Isso é uma leitura preguiçosa da matemática. E os debates recentes nos fóruns de hackudos deixam isso cristalino.

A confusão nasce do Algoritmo de Grover. Sim, na teoria, ele reduz a força bruta de uma chave simétrica pela raiz quadrada, fazendo com que uma chave de 128 bits ofereça, matematicamente, 64 bits de segurança pós-quântica. 

# O Que o Vendedor de Medo Esconde

O que o vendedor de medo esquece de te falar? O Algoritmo de Grover não paraleliza bem da forma como você está acostumado em clusters clássicos. 

Para quebrar uma única chave de 128 bits com Grover de forma sequencial, mesmo com um computador quântico absurdamente avançado (que ainda nem existe e não deve existir nas próximas décadas com qubits lógicos estáveis), levaria centenas de milhares de anos. E paralelizar computadores quânticos não diminui o tempo para quebrar UMA chave específica, apenas permite atacar mais chaves ao mesmo tempo.

O consenso entre criptógrafos reais (e a própria orientação do NIST) é que 128 bits em criptografia simétrica (como AES-128) continua perfeitamente seguro e não precisa ser dobrado em pânico.

# Onde Mora o Perigo Real

Onde está a verdadeira vulnerabilidade quântica? Na criptografia assimétrica (RSA, ECC) usada para *trocar* essas chaves simétricas. Se o handshake assimétrico for quebrado pelo algoritmo de Shor, a sua chave simétrica perfeita é interceptada durante a troca. 

Gaste seu orçamento e energia na transição pós-quântica dos seus algoritmos assimétricos e mecanismos de troca de chaves (como kyber/ML-KEM). O seu AES-128 de dados em repouso vai continuar dormindo tranquilo por muitas décadas. Pare de comprar pânico enlatado.
