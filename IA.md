# IA.md — Manual do Autor para Qualquer IA Escrevendo pra "A odisseia do puto"

> Qualquer IA (Claude, GPT, Gemini, o que for) que ajude o Raimundo ou o Frederico
> a escrever posts aqui **precisa ler este arquivo antes de digitar uma palavra**.
> Se o conteúdo não cheirar a este arquivo, foi escrito errado.

---

## 1. A Voz — o que este blog é

**Nome:** *A odisseia do puto* (domínio: `odisseiadoputo.cc`)
**Slogan oficial:** *O blackhat da cultura tech. Código, notícias e pop dissecados com a acidez de quem sobrevive a war rooms — e sobrevive para contar o chorume.*

Este não é um blog "informativo". É um **manifesto contra a mediocridade técnica**, escrito com a raiva de quem depura produção às 3 da manhã e volta pra escrever ofensas elegantes no dia seguinte. A régua é alta: se um post poderia ter saído de qualquer newsletter de "insights sobre IA", está errado e tem que ser reescrito.

**Os dois personagens-autores** (use conforme o post; ambos são humanos, não finja ser nenhum deles — você está escrevendo *para* eles):

| Persona | Papel | Estilo |
|---|---|---|
| **Raimundo Pessoa** (Diretor do Caos / O Cérebro) | Sugere temas, mantém o stack, arquiteta a linha editorial | Técnico-profundo, arquitetural, sóbrio |
| **Frederico Doido** (O Teclado / Blackhat dos Revisores) | Escreve de verdade, espreme cinismo em forma de parágrafo | Ácido, irônico, gírias de trincheira, metáforas de sistema aplicadas a tudo |

O campo `author:` do frontmatter geralmente é **"Frederico"** (ou "Frederico Doido" em posts mais pessoais). Use-o sempre, exceto se o Raimundo for nominalmente o autor do post.

---

## 2. Como reconhecer a voz certa (checklist rápido)

Antes de entregar qualquer texto, role a régua. Se o rascunho **não** tem a maioria destes, volta pra prancheta:

- [ ] Pelo menos **uma metáfora técnica aplicada ao mundo real** ("segfault da civilização", "kernel panic corporativo", "buffer overflow de capital especulativo", "autofagia digital")
- [ ] Uma expressão em **PT-BR de trincheira** (várzea, chorume, escovar bit, fazer rolê, trouxa, puto, taxa de estelionato, boleto, vendendo o Celta)
- [ ] Termo técnico em inglês cru, **sem tradução pedagógica** (refresh token, IAM role, KMS, OAuth scope, SSO, 2FA, CUDA) — o leitor é dev, não primo da tia
- [ ] Um veredito filosófico que poderia virar tatuagem ("Hardware não negocia.", "A porta tava escancarada por dentro.", "Termodinâmica não aceita promessas de VC como combustível.")
- [ ] **Zero** "vamos explorar", "é importante destacar", "neste artigo vamos ver" — linguagem de apresentação de TCC. Cortar.
- [ ] **Zero** emojis no corpo (exceto em raros casos de ironia deliberada tipo 🤡 ou 💸). Nunca em título.
- [ ] **Zero** listas numeradas "5 dicas para...". Só se for *review de produto* (ver §5).

Se o texto pode ser publicado no LinkedIn sem parecer fora do lugar, ele **não é** um post deste blog.

---

## 3. Frontmatter — o cabeçalho YAML obrigatório

Template canônico. **Copia, preenche, não inventa campos novos**:

```yaml
---
layout:     post
title:      "Título PT: <metáfora forte> : <subtema literal>"
subtitle:   "Uma frase de subtítulo que já contém o veredito. Picante."
en_title:   "Title EN: <metaphor> : <literal>"
en_subtitle: "English subtitle, same bite."
date:       2026-MM-DD HH:MM:SS
author:     "Frederico"
header-img: "img/<slug-descritivo-tematico>.png"
category:   [tech, seguranca]        # ver §7
en_content: |
  # English H1

  Corpo inteiro em inglês aqui, MESMA estrutura do PT, mesmo tom,
  mesma acidez. NÃO é tradução literal — é adaptação pra inglês
  que soa nativo. Inglês precisa ter mordida também.

  ### Sources
  - [Título da fonte](https://url)
---

# H1 do post em PT

Corpo do post em PT-BR. Markdown padrão. Veja §4.
```

**Regras do frontmatter, não violáveis:**

- `title` e `subtitle` sempre em **PT-BR**. `en_title` e `en_subtitle` sempre em **inglês**. Os dois pares são obrigatórios — o site é bilíngue com toggle PT/EN.
- `date` com hora. Hora pode ser fake (19:00, 22:00). Mas não duas postagens no mesmo minuto.
- `category:` é **array ou string**. Aparece na URL. Valores válidos: `noticias`, `codigo`, `tech`, `seguranca`, `review`, `pop`, `jogos`, `filmes`. Combinações livres tipo `[tech, seguranca]` ou `[review, tech]`.
- `header-img` com caminho `img/<slug>.png`. **Se o arquivo não existir no repo**, o site renderiza um placeholder SVG automaticamente (com logo do blog em baixa opacidade sobre fundo editorial). Não é desculpa pra não criar a imagem — crie.
- `en_content: |` é uma **string YAML multiline**. Começa com `|` e depois o conteúdo indentado em **2 espaços**. Parágrafos separados por linha em branco. Espaços finais DESTROEM o YAML — cuidado.

Campos opcionais úteis:

- `last_modified_at: 2026-04-21` — se editar depois de publicar, atualiza o sitemap e OG.
- `tags: [vercel, oauth, supply-chain]` — tags temáticas (aparecem em schema.org `keywords`).
- `permalink: /um/caminho/customizado/` — sobrescreve o permalink default `pretty`.

---

## 4. Estrutura do corpo — como um post é montado

### 4.1 Os 3 atos
Todo post bom do blog segue essa arquitetura, mesmo que você não perceba:

1. **Lead ácido (2-4 parágrafos)** — abre com o factual + veredito já na primeira frase. Sem "introdução". Sem setup. O leitor precisa saber em 15 segundos se vale a pena continuar.
2. **Anatomia (N seções com `#` H1)** — escovar bit. Aqui você explica de verdade como a coisa funciona, com os termos técnicos, mencionando APIs, comandos, nomes de empresa, valores em dólar. O leitor é dev, não paga pra ler esterco.
3. **Veredito + mitigação + chute final** — fecha com "o que fazer" (se aplicável) e um parágrafo-soco que resume a tragédia. Se o post não tem chute final memorável, ele não terminou.

### 4.2 Hierarquia de títulos

```markdown
# Título de seção (H1)
```

**Sim, usamos H1 múltiplo no corpo.** O `<h1>` semântico do site é renderizado pelo layout (a partir de `title:`). Os `#` no markdown viram `<h1>` dentro do `<article>` — intencional pra manter peso editorial. Não use `##` ou `###` pra seções principais. Só use `###` pra blocos muito auxiliares tipo "Fontes".

### 4.3 Parágrafos

- **Curtos.** 2-4 frases. Jogos de "parágrafão de 12 linhas" são de blog de advogado, não de blog de puto.
- **Uma ideia por parágrafo.** Se tem vírgula no meio seguida de "mas também" seguida de subordinada — corta, vira dois parágrafos.
- Use `**negrito**` com parcimônia — só em termos que você quer que o leitor sublinhe mentalmente. Nunca duas palavras em negrito no mesmo parágrafo sem motivo.

### 4.4 Listas e bullets
Só apareçam quando o conteúdo for genuinamente enumerado (passos de um exploit, tipos de ataque, comandos a rodar). Não use bullet pra "três motivos pelos quais..." — isso é LinkedIn.

Quando usar, use `-` (não `*`). Exemplo real do blog:

```markdown
1. A Context.ai foi hackeada. O atacante dumpou o banco de dados deles.
2. O atacante pegou o token específico do engenheiro da Vercel e bateu direto na API do Google.
3. Scripts varreram o Gmail atrás de chaves hardcoded, tokens, credenciais da AWS.
```

### 4.5 Código, quando aparecer
Use fence com linguagem. O site tem syntax highlighting (Rouge). Keep it real — não inventa comando que não existe.

````markdown
```bash
aws kms decrypt --ciphertext-blob fileb://env.enc --region us-east-1
```
````

### 4.6 Citações / blockquote
Pra efeito dramático. Use `>`:

```markdown
> "Agimos com velocidade surpreendente", disse o CEO, insinuando que a invasão foi acelerada por IA.
```

Rende bem quando vem logo depois de um parágrafo ácido — cria contraste.

### 4.7 Fontes / referências
**Obrigatório em posts de notícia/segurança.** Sem fonte, é desabafo, não é jornalismo. Formato canônico no final do post:

```markdown
### Fontes e Referências
- [Título descritivo da matéria](https://url-original)
- [Nome do Repo/Paper](https://url)
```

No `en_content` equivale a `### Sources` ou `### Trenches references`. Use o que combinar com o tom do post.

---

## 5. Posts de review (com afiliados Amazon)

Quando o post é *review de produto* (livros, laptops, gadget), o formato muda levemente:

- `category: [review, tech]` ou `[review, <área>]`
- Cada item vira uma seção `### N. Nome do Produto (epíteto)`
- Epíteto curto e irônico: *"The Heir's Choice"*, *"The Portable Heater"*, *"The Brazilian Reality"*
- Um post de comparação/lista precisa ter **mínimo 5 opções de produto** (menos que isso vira rascunho, não review).
- CTA ao final de cada item = **link de afiliado Amazon** com frase de isca:
  ```markdown
  [Olha o absurdo. Clica e chora](https://amzn.to/xxxxx).
  ```
- O corpo de cada item tem **um único parágrafo curto** descrevendo o produto com ácido. Não vira catálogo.
- Número de itens: mínimo 5, máximo 10. Sete ou nove costumam funcionar melhor.
- Mesmo em SEO page, a voz continua sendo do **Frederico**: opinião de trincheira, sem burocratês, sem texto de comparador genérico.
- Regra de ouro para review: menos "ficha técnica", mais **leitura de padrão de reviews** (elogio recorrente, reclamação recorrente, limite real do produto).
- **Disponibilidade é obrigatória**: não usar SKU indisponível, sem estoque ou "não sabemos se/ quando estará de volta".
- Link de produto específico só entra depois de validar status ativo na página do produto (comprável agora).
- Não basta listar produto: em posts SEO de afiliado, cada recomendação principal precisa aparecer em **parágrafo próprio no corpo**, explicando para quem é, por que vale e qual dor resolve.
- Vender faz parte do formato: CTA e link devem estar integrados ao texto editorial, não apenas em bloco de links no final.

### 5.1 Método operacional (wildcards + média de reviews)

Para evitar post frágil e dependente de um SKU só:

- Use **wildcards de busca** por categoria e atributo (`+16gb+ssd`, `+ultrawide+34`, `+ergonomica+lombar`).
- Sempre incluir:
  - links de busca (comparação ampla),
  - e pelo menos 1 link de produto específico (review pontual, ex: lançamento).
- Sintetizar opinião por consenso:
  - nota média,
  - volume de avaliações,
  - padrões recorrentes nos comentários (pontos fortes e dor repetida).
- Nunca concluir por 3 reviews isolados.
- Antes de fechar o post, revalidar os links específicos:
  - abrir de novo cada produto,
  - confirmar disponibilidade (comprável),
  - regenerar "Obter link" se o SKU mudou status.

**Disclosure**: mencionar afiliação não é obrigatório (ninguém faz), mas se o contexto pedir, use uma linha no fim: *"Links de afiliado. Se você comprar, o Frederico come."*

---

## 6. Imagens — onde, como, quando

### 6.1 header-img
Toda publicação nova tem `header-img: "img/<slug>.png"`. Regras:

- **Nome do arquivo**: kebab-case, descritivo, em inglês preferencialmente (mais reutilizável para SEO). Ex: `burn-rate-apocalypse.png`, `autopsia-nginx-ingress.png`, `oauth-supply-chain-breach.png`.
- **Proporção**: 16:9 ou 2:1 (wide). O site usa `aspect-ratio: 2.1/1` no hero e `16:9` nos cards. Imagens quadradas dão pau no layout.
- **Resolução mínima**: 1600×900 pra qualidade retina nos cards grandes.
- **Formato**: PNG se tiver transparência, WebP se for pesado (JPEG pra foto). PNG genérico gerado por IA — OK.

### 6.2 Quando o arquivo não existe
Se você ainda não criou a imagem, **não omita `header-img`**. Aponte pro caminho que você vai criar (`img/slug.png`) — o site entra com o placeholder editorial (logo do puto em baixa opacidade + grid + glow verde + "404 · no cover" no canto). **Lembra de criar a imagem depois** ou o card fica no placeholder pra sempre.

### 6.3 Imagens inline no corpo
Use com moderação. Só quando agregam (screenshot de erro, diagrama, meme de propósito). Formato:

```markdown
![alt descritivo](/img/slug.png)
*Caption curta em italic logo abaixo.*
```

Caption em italic dá peso editorial. Não é obrigatória, mas é um selo da casa.

### 6.4 Imagens externas
Evite. GIFs do Giphy pra efeito (Neo vendo a Matrix, p.ex.) tudo bem. Mas não dependa de imagem hotlinkada de blog gringo que pode sumir.

---

## 7. Categorias e URLs

Categorias válidas (combine à vontade):

| Slug | Usar quando |
|---|---|
| `noticias` | Breaking news, vazamento, polêmica corporativa |
| `tech` | Qualquer coisa técnica — default pra posts de código/infra |
| `codigo` | Tutorial, arquitetura de sistema, padrão de dev |
| `seguranca` | Breach, CVE, exploit, OAuth, supply chain |
| `review` | Produto, livro, hardware, software |
| `pop` / `jogos` / `filmes` | Cultura pop sob a lente tech (Silent Hill, cinema trash, etc) |

A categoria vira parte da URL (`permalink: pretty`). Um post com `category: [tech, seguranca]` vira `/tech/seguranca/2026/MM/DD/slug/`. Então escolha com intenção — reordenar depois quebra links.

---

## 8. Bilíngue — o `en_content`

O blog alterna PT/EN via toggle no nav. Todo post novo **precisa** ter `en_title`, `en_subtitle` e `en_content` preenchidos. Regras:

- **Não é tradução literal.** É a mesma ideia escrita por alguém que pensa em inglês. Expressões idiomáticas mudam, piadas podem mudar, tamanho pode diferir em ±20%.
- A estrutura (número de seções H1, ordem dos argumentos, fontes) deve **espelhar** o PT. Se você tem 4 seções em PT, tenha 4 em EN.
- Termos gringos do PT ficam no EN igual (OAuth, IAM, etc — são termos ingleses mesmo).
- Gírias PT precisam virar gírias EN equivalentes, não "explicação didática". "Várzea" pode virar *"dumpster fire"*. "Vendendo o Celta" vira *"selling your car"*.
- O `en_content` é uma string YAML multiline. Sempre com `en_content: |` na primeira linha, depois conteúdo indentado com **2 espaços** consistentes. Linha em branco entre parágrafos. **Nunca tab, sempre espaço.**

---

## 9. Links e afiliações

- Links internos: relativos (`/2026/04/20/slug/`) — não URL absoluta.
- Links externos: `[texto](url)` direto. Não precisa `target="_blank"` no markdown — o renderizador não adiciona de qualquer forma, e isso é uma decisão de UX da casa (links abrem na mesma aba; voltar é botão do browser).
- Afiliados Amazon: sempre shortlink `amzn.to/xxxxx`.
- Nunca use URL shortener de terceiros (bit.ly, tinyurl) — apodrecem.
- Nunca insira UTM tracking em link interno.

### 9.1 Regra de cenário (obrigatório)

Todo post com afiliado precisa declarar o cenário primeiro:

- **Cenário BR**: foco em Brasil.
  - Idioma principal do corpo: **PT-BR**.
  - Produtos: vendidos no mercado BR, preço em BRL, disponibilidade local.
  - Parceiros afiliados: priorizar **empresas brasileiras** ou operações BR de marcas globais.
  - Exemplos válidos: Amazon BR, iPlace BR, Fastshop BR, Casas Bahia BR, LG BR, Samsung BR.

- **Cenário Global**: foco internacional.
  - Idioma principal do corpo: **inglês** (post em EN).
  - Produtos: universais e disponíveis em múltiplos mercados.
  - Parceiros afiliados: redes/lojas globais e produtos sem viés local.
  - Evitar gíria/localismo brasileiro no texto principal.

Se misturar mercado BR com texto global (ou o contrário), está errado.
Escolha **um cenário por post** e mantenha consistência em título, corpo e links.

---

## 10. Título, subtítulo, SEO

Título é a primeira coisa que um humano lê e a primeira coisa que o Google indexa. **Tem que funcionar nas duas frentes**:

- **Vírus social / humano**: metáfora + tema. "A Autofagia do Silício e o Estelionato da Inteligência Infinita" é melhor que "OpenAI perdeu 14 bi em 2026".
- **SEO keyword**: se o post fala de "Vercel OAuth breach", o título deve conter pelo menos um desses termos ("Vercel", "OAuth"). Metáfora + keyword convivem: "Anatomia de um Desastre: O Hack da Vercel e a Farsa do OAuth Seguro".

Tamanho ideal: **55–70 caracteres** (antes do pipe ` · A odisseia do puto` que o site adiciona). Se passar de 70, o Google trunca no SERP.

Subtítulo: **120–160 caracteres**. É o `<meta description>` implícito (o site usa subtitle como fallback). Tem que fechar o arco do título e deixar o curioso clicar.

---

## 11. Checklist final — antes de dizer "pronto"

Antes de entregar o markdown, role este checklist:

- [ ] Frontmatter tem todos os campos obrigatórios (§3)
- [ ] `title` + `en_title` + `subtitle` + `en_subtitle` preenchidos
- [ ] `date` tem hora, `author` correto
- [ ] `header-img` aponta pra `img/slug.png` — e a imagem existe (ou está no backlog)
- [ ] `category:` escolhida com intenção (afeta a URL)
- [ ] PT body e EN body têm **mesma estrutura** de seções
- [ ] Zero "vamos explorar", zero "é importante notar", zero bullet-gore
- [ ] Tem **pelo menos uma** metáfora técnica pra mundo real
- [ ] Tem **pelo menos uma** gíria PT-BR de trincheira
- [ ] Termos técnicos em inglês ficaram em inglês (OAuth, IAM, etc)
- [ ] `### Fontes` preenchidas se o post cita fato/empresa/número
- [ ] Título entre 55-70 chars, subtítulo 120-160
- [ ] Chute final com veredito memorável
- [ ] `en_content: |` com indentação 2-espaço consistente, sem tab, sem espaço final
- [ ] Rodou `bundle exec jekyll build` e não deu erro de Liquid/YAML
- [ ] Abriu o post no browser (`jekyll serve`) — visual, quebra de linha, code block, share bar tudo renderizando certo
- [ ] Cenário definido e consistente: BR (PT-BR + parceiros/produtos BR) ou Global (EN + produtos universais)
- [ ] Produtos específicos com disponibilidade ativa no momento da publicação (sem SKU indisponível)

Se passar nos 15 itens, publica.

---

## 12. Coisas que este blog **NÃO** é

Lista de anti-padrões. Se você se pegar escrevendo qualquer um deles, apaga e começa de novo:

- ❌ Blog motivacional de dev ("10 hábitos de programadores de sucesso")
- ❌ Release notes de empresa ("Estamos felizes em anunciar...")
- ❌ Review patrocinado disfarçado ("Testamos o produto X durante uma semana e...")
- ❌ Lista estilo BuzzFeed ("7 bibliotecas Python que vão mudar sua vida")
- ❌ Newsletter de agregador ("A semana em IA: o que aconteceu")
- ❌ Tutorial didático de iniciante ("Neste tutorial vamos aprender a criar uma API REST")
- ❌ Explicação purista de framework ("O que é e como usar o Kubernetes")

Se a pauta cai em qualquer um desses, **muda o ângulo**. Transforme em:
- Denúncia técnica (o vazamento da empresa X)
- Autópsia de decisão arquitetural ruim (o fim do NGINX Ingress)
- Review ácido com viés de mercado BR (os laptops vendo o Celta)
- Observação cultural sobre tech (Silent Hill 2 e estética do vazio)

---

## 13. Arquivos do repo que a IA precisa respeitar

- `_posts/` — onde os posts ficam. **Nunca** apague ou reescreva post existente sem pedir. Só crie novo.
- `_includes/` e `_layouts/` — estrutura do site. Post não mexe aqui.
- `_config.yml` — configuração global. Post não mexe aqui.
- `css/odisseia.css` — design system. Post não mexe aqui.
- `img/` — imagens. Pode adicionar arquivo novo (sempre kebab-case, extensão minúscula).

**Se a tarefa requer mexer fora de `_posts/` e `img/`, avise o humano e pergunte antes.** O design/layout é decisão editorial, não tarefa de redação.

---

## 14. Template pronto de post novo

Copia, cola, preenche. Deixa pra editar o estilo depois — primeiro deixa o esqueleto.

```markdown
---
layout:     post
title:      "TÍTULO PT: Metáfora forte : Tema literal"
subtitle:   "Subtítulo PT picante, 120-160 chars. Já contém o veredito."
en_title:   "EN TITLE: Metaphor : Literal theme"
en_subtitle: "English subtitle, same bite, same length range."
date:       2026-MM-DD HH:MM:SS
author:     "Frederico"
header-img: "img/slug-tematico.png"
category:   [tech, seguranca]
en_content: |
  # English H1: Opening

  Lead paragraph — set the facts + verdict upfront, no warm-up.

  # Anatomy of the Disaster

  Technical meat goes here. Names, numbers, APIs, commands.

  # The Corporate Lie

  Where the PR statement contradicts the evidence.

  # Mitigation

  What to actually do. Short. Bullet list OK here:
  1. Step one, spiteful.
  2. Step two, prescriptive.

  Final knockout paragraph.

  ### Sources
  - [Source 1](https://url)
  - [Source 2](https://url)
---

# H1 de Abertura

Lead em PT — fato + veredito na primeira frase, sem aquecimento.

# A Anatomia do Desastre

Carne técnica aqui. Nomes, números, APIs, comandos.

# A Farsa Corporativa

Onde a nota oficial contradiz a evidência.

# Como Mitigar

O que fazer de verdade. Curto. Bullet list se fizer sentido:

1. Passo um, ácido.
2. Passo dois, prescritivo.

Parágrafo final de knockout.

### Fontes e Referências
- [Fonte 1](https://url)
- [Fonte 2](https://url)
```

---

## 15. Anti-cadência de IA (obrigatório)

Se o texto soar como bloco de relatório robótico, está errado.

### Proibições diretas

- Não usar estrutura dura tipo: `FATO / INFERÊNCIA / OPINIÃO` em cabeçalhos separados (a menos que o Raimundo peça explicitamente).
- Não repetir o mesmo ritmo de frase 5 vezes seguidas.
- Não abrir parágrafo sempre com o mesmo padrão ("A empresa...", "A empresa...", "A empresa...").

### Como fazer certo

- Integrar fato com atribuição no fluxo do texto: *"Segundo a Instructure..."*.
- Marcar inferência com linguagem natural: *"isso sugere..."*, *"indica..."*, *"ainda sem confirmação pública..."*.
- Deixar opinião editorial em tom humano e contínuo, não em bloco burocrático.
- Variar tamanho de frase e parágrafo para quebrar a batida mecânica.

### Checklist de naturalidade (antes de entregar)

- [ ] Troquei pelo menos 2 abstrações por ação concreta.
- [ ] Removi rótulos rígidos de seção.
- [ ] Mantive atribuição de fonte sem quebrar o ritmo narrativo.
- [ ] O texto parece alguém explicando, não um template preenchido.

---

*Qualquer dúvida que este documento não responder é porque o Raimundo ou o
Frederico vão decidir caso a caso. Pergunta antes de chutar — o blog tem
voz consistente por disciplina, não por acidente.*
