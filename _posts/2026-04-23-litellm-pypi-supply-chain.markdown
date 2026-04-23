---
layout:     post
title:      "O Dia em que o 'pip install' Roubou a Nuvem: A Tragédia da LiteLLM"
subtitle:   "Se você não trava (pin) as versões das suas bibliotecas de IA, parabéns, você acabou de entregar sua conta da AWS para um hacker russo."
en_title:   "The Day 'pip install' Stole the Cloud: The LiteLLM Tragedy"
en_subtitle: "If you don't pin the versions of your AI libraries, congratulations, you just handed your AWS account to a hacker."
date:       2026-04-23 17:00:00
author:     "Frederico"
header-img: "img/bg-security.jpg"
category:   [tech, seguranca, noticias]
en_content: |
  # The Dependency Trap
  
  The AI hype train is making developers forget basic hygiene. LiteLLM, the massively popular open-source router for AI models, just suffered a catastrophic supply chain attack on PyPI. Malicious versions (1.82.7 and 1.82.8) were pushed by a threat actor group called "TeamPCP".
  
  The attack vector was ironic: the attackers compromised the Trivy security scanner in LiteLLM's CI/CD pipeline, stole the PyPI publishing credentials, and pushed a payload that automatically executed via a Python `.pth` file. If you ran a generic `pip install litellm` without pinning the version on March 24, the malware scraped your environment variables, AWS/GCP keys, SSH keys, and Kubernetes tokens. Stop running blind updates on AI dependencies. 
---

# A Roleta Russa das Dependências

A febre de construir produtos com Inteligência Artificial tá fazendo engenheiro experiente esquecer regras básicas de higiene de código. O desastre da vez foi na **LiteLLM**, aquela biblioteca open-source famosíssima que todo mundo usa pra rotear requisições entre OpenAI, Anthropic e Gemini na mesma API. 

Eles sofreram um ataque de *supply chain* catastrófico no PyPI (o repositório oficial de pacotes Python). Um grupo chamado "TeamPCP" conseguiu publicar versões maliciosas (1.82.7 e 1.82.8) injetadas com um malware que raspa a alma da sua infraestrutura. 

Se você tem o péssimo hábito de colocar só `litellm` no seu arquivo `requirements.txt` sem travar a versão (o famoso *pinning*, tipo `litellm==1.81.0`), você jogou roleta russa com o seu banco de dados e perdeu.

# A Ironia do CI/CD e a Magia do '.pth'

A anatomia do ataque é uma aula de ironia cibernética. Como os atacantes conseguiram acesso para publicar no repositório oficial da LiteLLM? Eles não quebraram a senha do dev. Eles comprometeram o scanner de segurança (o Trivy) que rodava na pipeline de CI/CD do projeto. Através da ferramenta de segurança, roubaram o token de publicação do PyPI.

Mas a genialidade (maligna) do exploit tá na execução. A versão 1.82.8 incluía um arquivo com extensão `.pth` (`litellm_init.pth`). No ecossistema Python, arquivos `.pth` rodam **automaticamente** assim que o interpretador Python inicia, mesmo que você nunca faça o `import litellm` no seu código. Bastou o `pip install` terminar e rodar o Python na máquina, e a bomba ativou.

O payload do malware varreu e exfiltrou pro servidor do atacante tudo o que tinha valor: chaves da AWS, GCP e Azure, histórico de shell, senhas de banco de dados, chaves SSH e tokens do Kubernetes. O pacote inteiro da sua infraestrutura.

# O Preço da Preguiça

O pacote malicioso ficou no ar por cerca de 40 minutos. O que salvou muita gente foi que o malware dos caras era mal escrito e começou a causar pico de memória e crash nas máquinas, o que soou o alarme rápido.

Se a sua pipeline de build rodou uma atualização cega nesse intervalo de tempo em março, considere que o seu provedor de nuvem agora tem um sócio anônimo. 

A lição aqui é uma porrada direta no dev moderno: pare de terceirizar a estabilidade do seu software pra o pacote *latest* do PyPI ou do NPM. Trave (pin) as versões das suas dependências, gere hashes de verificação e use ferramentas de análise de dependência no seu CI/CD que não sirvam de ponte para hackers. A Inteligência Artificial já tá cara o suficiente sem você precisar pagar o resgate do seu próprio cluster Kubernetes.

### Fontes e Referências
- [Datadog Security Labs: LiteLLM compromised on PyPI - TeamPCP supply chain campaign](https://securitylabs.datadoghq.com/articles/litellm-compromised-pypi-teampcp-supply-chain-campaign/)
- [Snyk: Poisoned security scanner backdooring LiteLLM](https://snyk.io/blog/poisoned-security-scanner-backdooring-litellm/)
- [Trend Micro: Inside the LiteLLM Supply Chain Compromise](https://www.trendmicro.com/en_us/research/26/c/inside-litellm-supply-chain-compromise.html)
