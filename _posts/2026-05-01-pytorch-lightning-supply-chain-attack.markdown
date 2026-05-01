---
layout:     post
title:      "O Verme de Areia Chegou no PyTorch: O Maior Supply Chain Attack de IA do Ano"
subtitle:   "Se você rodou um 'pip install lightning' nas últimas 24 horas para treinar um modelo de IA, a sua máquina inteira (e a da sua empresa) provavelmente já era."
en_title:   "The Sandworm Hit PyTorch: The Biggest AI Supply Chain Attack of the Year"
en_subtitle: "If you ran 'pip install lightning' in the last 24 hours to train an AI model, your entire machine (and your company's) is probably already gone."
date:       2026-05-01 10:00:00
author:     "Frederico"
header-img: "img/pytorch-worm.jpg"
image:      "img/pytorch-worm.jpg"
category:   [tech, seguranca, ia, noticias]
en_content: |
  # The Shai-Hulud Worm Hits AI Training
  
  The AI hype just got hit with a reality check. The widely used `lightning` package (PyTorch Lightning) was hijacked on PyPI (versions 2.6.2 and 2.6.3). If you ran a simple `pip install lightning` in the last 24 hours to fine-tune an LLM or run an image classifier, your credentials, AWS tokens, and GitHub SSH keys have been exfiltrated.
  
  The malware, themed around Dune's Shai-Hulud, uses obfuscated JavaScript inside a Python library. It steals AWS, GCP, and Azure secrets, dumps environment variables, and worst of all, it acts as a worm. It infects your NPM packages and embeds persistence hooks directly into your `.vscode/tasks.json` and your `.claude/settings.json`. Yes, the malware automatically triggers every time you open VS Code or start a Claude Code session. If you installed this, burn the machine and rotate all keys immediately.
---

# O "Verme de Areia" Envenenou o PyTorch

O mercado de inteligência artificial acabou de tomar um choque de realidade sobre como a infraestrutura de código aberto é frágil. A biblioteca `lightning` (o famoso PyTorch Lightning, pilar fundamental para quem treina modelos de *Deep Learning*, *LLMs* e classificadores de imagem) sofreu um ataque de *Supply Chain* devastador nas versões **2.6.2 e 2.6.3**, publicadas em 30 de abril de 2026.

Se você ou o seu time de dados rodou um simples `pip install lightning` nas últimas 24 horas, é bom puxar a tomada do servidor. O pacote malicioso faz uma limpa no ambiente e se espalha como um verme.

# Como o Ataque Funciona na Prática

O ataque é assinado pelo mesmo grupo cibernético da campanha "Mini Shai-Hulud" (uma referência aos vermes de areia gigantes do universo de Duna). A mecânica é bizarra e muito eficiente: o vetor de entrada é o repositório do Python (PyPI), mas a carga viral (*payload*) é feita em JavaScript (Bun) e a propagação acontece pelo ecossistema do Node (npm).

No momento em que você importa o pacote envenenado no seu script Python, um diretório oculto `_runtime` executa um JavaScript ofuscado. A partir daí, o estrago é massivo:

1. **Aspirador de Credenciais:** Ele varre a sua máquina (ou a esteira do CI/CD) roubando *tokens* do GitHub (`ghp_`), varíaveis de ambiente (`process.env`) e tokens NPM.
2. **Ataque em Nuvem:** Se você estiver rodando o script na nuvem, ele tenta capturar credenciais na raiz. Ele chama APIs internas da AWS (IMDSv2), lista chaves do Azure Key Vault e rouba todos os segredos do GCP Secret Manager.
3. **O Efeito Verme (Worm):** Se o malware achar um *token* do NPM com permissão de publicação na sua máquina, ele injeta o código malicioso em **todos os pacotes npm** que você tem acesso, sobe a versão (*patch*) e publica de volta. Quem instalar o seu pacote npm, vai ser infectado.

# A Persistência Genial: VS Code e Claude Code

O que torna esse ataque um pesadelo arquitetural é como ele se fixa na máquina do desenvolvedor infectado. O malware escreve arquivos de configuração dentro das duas ferramentas mais usadas da atualidade:

- **VS Code (`.vscode/tasks.json`):** Ele cria uma tarefa oculta que roda automaticamente o arquivo malicioso `setup.mjs` *toda vez* que você abre a pasta do projeto no VS Code.
- **Claude Code (`.claude/settings.json`):** A cereja do bolo. Ele injeta um gancho de `SessionStart` na ferramenta de linha de comando de IA da Anthropic. Se você abrir o Claude Code naquele repositório, o malware entra em execução. Nada de clicar em links, só de abrir a ferramenta de trabalho você ativa o roubo.

# O Que Fazer Agora?

Se você usa PyTorch Lightning na sua empresa, acione o botão de pânico.
1. Verifique as versões: `lightning@2.6.2` e `lightning@2.6.3` são as envenenadas.
2. Se você baixou, considere a máquina totalmente comprometida. **Gire (Revogue) TODAS as chaves** da AWS, GCP, Azure, tokens de NPM e senhas do GitHub imediatamente. O malware já enviou isso pro servidor deles em 4 canais diferentes de exfiltração.
3. Limpe os diretórios `.claude/` e `.vscode/` dos seus repositórios afetados.

Treinar uma IA virou um campo minado de engenharia reversa. Quem acha que o perigo de 2026 é o robô ganhar consciência, não entendeu que o perigo real é o desenvolvedor instalando biblioteca com código ofuscado.

### Fontes e Referências
- [Semgrep: Malicious Dependency in PyTorch Lightning Used for AI Training](https://semgrep.dev/blog/2026/malicious-dependency-in-pytorch-lightning-used-for-ai-training/)
