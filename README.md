# Dental Clinic — Bluetooth Dental

> Landing page moderna para clínica odontológica fictícia, construída com **Nuxt 3** e **Vue 3**.  
> Projeto acadêmico desenvolvido como trabalho de faculdade.

![Nuxt 3](https://img.shields.io/badge/Nuxt-3-00DC82?style=flat-square&logo=nuxt.js&logoColor=white)
![Vue 3](https://img.shields.io/badge/Vue-3-4FC08D?style=flat-square&logo=vue.js&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A518-339933?style=flat-square&logo=node.js&logoColor=white)
![Licença](https://img.shields.io/badge/licen%C3%A7a-acad%C3%AAmica-lightgrey?style=flat-square)

---

## Sobre o Projeto

**Bluetooth Dental** é uma clínica odontológica fictícia criada para este trabalho. O problema de partida foi simples: toda clínica hoje precisa de presença digital — não apenas um cartão de visitas online, mas um lugar onde o paciente pode conhecer os serviços, entender o que a clínica oferece, fazer login na sua conta e agendar uma consulta.

O sistema cobre a **jornada completa do paciente**: do primeiro contato até o agendamento e a gestão da conta.

### Páginas do sistema

| Rota | Arquivo | O que faz |
|---|---|---|
| `/` | `pages/index.vue` | Landing page — apresenta a clínica, diferenciais e chamada para agendamento |
| `/servicos` | `pages/servicos.vue` | Tratamentos disponíveis, processo de atendimento, planos e FAQ |
| `/agendar` | `pages/agendar.vue` | Formulário wizard de 4 etapas para agendamento de consulta |
| `/usuario` | `pages/usuario.vue` | Dashboard autenticado — dados pessoais, histórico e plano contratado |

> **Contexto acadêmico:** este projeto foi apresentado em sala como trabalho de faculdade, com uma apresentação de 15–20 minutos dividida entre 4 integrantes.

---

## Colaboradores

| Colaborador | Papel na apresentação | GitHub |
|---|---|---|
| Marcelo Manara | Integrante 1 — Abertura e contexto do projeto | [@ManaraMarcelo](https://github.com/ManaraMarcelo) |
| Marcelo Belotto | Integrante 2 — Vue.js vs Nuxt.js e modos de renderização | [@marcelo-belotto](https://github.com/marcelo-belotto) |
| Vinicius Emanuel | Integrante 3 — Como o Nuxt foi aplicado no código | [@vinicius-emanuelds](https://github.com/vinicius-emanuelds) |
| Lucas Vieira | Integrante 4 — Demo ao vivo e conclusão | [@Luca-WBB](https://github.com/Luca-WBB) |

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | [Nuxt 3](https://nuxt.com) |
| UI | [Vue 3](https://vuejs.org) — Composition API com `<script setup>` |
| Estilização | CSS puro com variáveis customizadas (design tokens) |
| Tipografia | Sora (display) · Inter (body) · JetBrains Mono — via Google Fonts |
| Build | Vite (embutido no Nuxt) |
| Runtime | Node.js ≥ 18 |

---

## Funcionalidades

- **Floating nav** — pill com backdrop-blur que escurece no scroll
- **Hero animado** — domo cromado em CSS puro com discos iridescentes flutuantes
- **Feature grid** — layout 2-up + 3-up com demos visuais interativas
- **Testimonials marquee** — scroll horizontal automático com pausa no hover
- **Locations switcher** — painel de agendamento tabulado por unidade
- **Scroll reveal** — fade-in + lift via IntersectionObserver
- **Wizard de agendamento** — formulário de 4 etapas com validação e máscara de telefone
- **Autenticação simulada** — login/logout com estado global e rota protegida
- **SEO** — meta tags e Open Graph via `useSeoMeta`

---

## Por Que Nuxt.js?

### Vue.js vs Nuxt.js

Para entender o Nuxt, é preciso entender primeiro o Vue — porque um depende do outro.

**Vue.js** é um framework JavaScript para criar interfaces web. Em vez de escrever HTML, CSS e JavaScript soltos, o Vue oferece uma estrutura onde você cria **componentes** — pedaços reutilizáveis de tela. O botão de agendar, o menu de navegação, o card de serviço: cada um desses é um componente.

**Nuxt.js** é um framework construído em cima do Vue. A analogia é direta:

> **Se o Vue é o motor, o Nuxt é o carro completo.**

O Vue te dá o poder de criar interfaces; o Nuxt te dá a estrutura inteira para um sistema web real: roteamento de páginas, organização de arquivos, carregamento automático de componentes, SSR, e muito mais.

Quem conhece o ecossistema React vai reconhecer a relação: assim como o **Next.js está para o React**, o **Nuxt.js está para o Vue**. Frameworks que pegam uma biblioteca de interface e adicionam tudo que falta para construir uma aplicação de verdade.

O Nuxt foi criado em 2016 pelos irmãos Sébastien e Alexandre Chopin com um objetivo claro: resolver os problemas que aparecem ao tentar construir um sistema real com Vue puro.

### Problemas que o Nuxt resolve

| Problema (Vue puro) | Solução (Nuxt) |
|---|---|
| Roteamento manual — cada nova página exige editar um arquivo de config | File-based routing — criar o arquivo já cria a rota |
| Sem estrutura de pastas padrão — cada time organiza de um jeito diferente | Convenções de pasta (`pages/`, `components/`, `composables/`) |
| Componentes precisam de `import` manual em cada arquivo | Auto-import — basta colocar o arquivo em `components/` |
| SEO ruim — a SPA pura monta tudo no browser, Google não indexa | SSR — HTML completo entregue pelo servidor |
| Primeiro carregamento lento — browser baixa tudo antes de mostrar algo | SSR/SSG — conteúdo já vem renderizado |
| Configurações espalhadas pelo projeto | `nuxt.config.ts` — painel de controle centralizado |

### Tabela comparativa

| | Vue.js | Nuxt.js |
|---|---|---|
| **O que é** | Framework de interface | Framework de aplicação completa |
| **Faz o quê** | Cria componentes e reatividade | Adiciona rotas, SSR, estrutura de projeto |
| **Renderização** | Só no browser (SPA) | Servidor + browser (SSR/SSG) |
| **Analogia** | O motor | O carro completo |

---

## Modos de Renderização

O Nuxt suporta três modos de renderização, e entender a diferença é fundamental:

### SPA — Single Page Application
O modo como o Vue puro funciona. O servidor entrega uma página quase vazia e o browser do usuário monta tudo. É rápido depois que carrega, mas o **primeiro carregamento é lento** e o **Google não consegue ler o conteúdo** (prejudica o SEO).

### SSR — Server-Side Rendering _(modo usado neste projeto)_
Quando o usuário acessa o site, o servidor já monta o HTML completo e entrega pronto para o browser. O conteúdo aparece muito mais rápido e o Google consegue indexar normalmente. O HTML que chega ainda não é interativo — é aí que entra a **hidratação**: o Vue "acorda" por cima desse HTML estático e o torna reativo. A partir daí, a navegação entre páginas acontece direto no browser, sem novas requisições ao servidor.

### SSG — Static Site Generation
O Nuxt gera todos os arquivos HTML **no momento do deploy** — antes de qualquer usuário acessar. As páginas ficam completamente estáticas, ainda mais rápidas que o SSR e sem precisar de servidor Node rodando. Ideal para sites com conteúdo que não muda com frequência.

> **Neste projeto:** usamos o modo **SSR** — o padrão do Nuxt — que garante melhor performance e compatibilidade com buscadores.

---

## Como o Nuxt Foi Aplicado no Projeto

O Nuxt tem **convenções de pasta**: cada pasta tem um significado. Isso deixa o projeto organizado por padrão, sem configuração manual.

### 1. Roteamento por arquivo — `pages/`

No Nuxt, você não configura rotas — o arquivo vira a rota automaticamente:

```
pages/
  index.vue      →  rota "/"           (página inicial)
  servicos.vue   →  rota "/servicos"   (serviços)
  agendar.vue    →  rota "/agendar"    (agendamento)
  usuario.vue    →  rota "/usuario"    (área do paciente)
```

Criou o arquivo, criou a página. Sem nenhum arquivo de rotas para gerenciar.

### 2. Componentes automáticos — `components/`

Todos os arquivos `.vue` em `components/` são importados automaticamente pelo Nuxt — sem nenhuma linha de `import` no código. Os componentes seguem uma nomenclatura por prefixo que indica em qual seção são usados:

| Prefixo | Seção | Componentes |
|---|---|---|
| `App*` | Globais / Home | `AppNav`, `AppHero`, `AppFeatures`, `AppFeatureCard`, `AppManifesto`, `AppPlatforms`, `AppTestimonials`, `AppFinalCTA`, `AppFooter`, `AppLoginModal` |
| `Services*` | Página de Serviços | `ServicesHero`, `ServicesGrid`, `ServicesSpotlight`, `ServicesProcess`, `ServicesPricing`, `ServicesFAQ` |
| `User*` | Dashboard do paciente | `UserSidebar`, `UserAccountTab`, `UserHistoryTab`, `UserPlanTab` |

Cada arquivo `.vue` tem três blocos: `<template>` (HTML), `<script setup>` (lógica) e `<style>` (CSS). Esse formato é o **Single File Component** — tudo que o componente precisa em um único arquivo.

### 3. Composables — `composables/`

Composables são funções reutilizáveis que encapsulam lógica. O Nuxt também os importa automaticamente.

| Composable | Responsabilidade |
|---|---|
| `useScrollReveal` | Anima elementos conforme o usuário rola a página (IntersectionObserver) |
| `useAuth` | Gerencia estado de autenticação: login, logout, isLoggedIn, userName |

Em vez de copiar a mesma lógica em cada componente, ela fica centralizada no composable e qualquer arquivo pode usá-la chamando `useScrollReveal()` ou `useAuth()`.

### 4. Configuração centralizada — `nuxt.config.ts`

O `nuxt.config.ts` é o painel de controle da aplicação. É onde centralizamos: CSS global, variáveis de ambiente, configurações de head/meta, devtools e muito mais. Sem o Nuxt, essas configurações ficariam espalhadas pelo projeto.

### 5. Ponto de entrada — `app.vue`

O `app.vue` é o arquivo raiz do sistema — ele envolve todas as páginas. Basicamente diz: *"aqui dentro vai existir um `<NuxtPage>`, que é onde o Nuxt vai renderizar a página correta de acordo com a rota."* É o esqueleto da aplicação.

---

## Composables

### `useAuth`

Gerencia o estado de autenticação globalmente via `useState` do Nuxt (SSR-safe), com persistência em `sessionStorage`.

```ts
const { isLoggedIn, userName, login, logout } = useAuth()

// Fazer login
const sucesso = login('usuario@clinica.com', 'clinica123') // retorna boolean

// Fazer logout (redireciona para '/')
logout()
```

As credenciais válidas são lidas de `runtimeConfig.public` (variáveis de ambiente). Há valores padrão para facilitar o desenvolvimento local — veja a seção [Autenticação Simulada](#autenticação-simulada).

### `useScrollReveal`

Observa elementos com a classe `.reveal` e adiciona a classe `.in` quando entram no viewport, disparando animações CSS de fade-in + lift. Usa `IntersectionObserver` com threshold de 12% e para de observar o elemento após a primeira revelação.

```ts
// Chamado uma vez por página no onMounted
useScrollReveal()
```

---

## Autenticação Simulada

A autenticação é **simulada para fins acadêmicos** — não há backend real. As credenciais são comparadas com os valores das variáveis de ambiente.

**Credenciais padrão (modo desenvolvimento):**

| Campo | Valor |
|---|---|
| E-mail | `usuario@clinica.com` |
| Senha | `clinica123` |

**Como funciona:**

1. O modal de login (`AppLoginModal`) valida os campos e chama `useAuth().login(email, senha)`
2. O composable compara com os valores de `runtimeConfig.public.userEmail` e `userPassword`
3. Em caso de sucesso: `isLoggedIn` vira `true`, `userName` é salvo em `sessionStorage` e o usuário é redirecionado para `/usuario`
4. A página `/usuario` é uma **rota protegida**: verifica `isLoggedIn` no `onMounted` e em um `watch` — redireciona para `/` se não autenticado

> Para alterar as credenciais, edite as variáveis `NUXT_PUBLIC_USER_EMAIL` e `NUXT_PUBLIC_USER_PASSWORD` no `.env`.

---

## Validações de Formulário

Toda a validação é **manual, sem bibliotecas externas** (sem vee-validate, zod ou yup).

### AppLoginModal — validação completa por campo

O modal de login é o formulário mais completo do projeto:

- **Campo e-mail:** obrigatório + validação de formato por regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- **Campo senha:** obrigatório + mínimo de 4 caracteres
- **Quando dispara:** no evento `@blur` de cada campo (ao sair do campo) e no `@submit` do formulário
- **Exibição de erros:** mensagens inline em `<span class="field-error">` logo abaixo de cada campo
- **Erro global:** banner no topo do modal quando as credenciais não conferem
- **Feedback visual:** animação `.shake` no formulário inteiro quando o login falha

### agendar.vue — validação por bloqueio (wizard 4 etapas)

O wizard bloqueia o avanço de etapa via `canProceed` computed — o botão "Continuar" fica desabilitado até todos os campos obrigatórios da etapa atual serem preenchidos:

| Etapa | Condição para avançar |
|---|---|
| 0 — Escolher serviço | Um serviço deve estar selecionado |
| 1 — Data e horário | Data **e** horário devem estar selecionados |
| 2 — Dados pessoais | Nome, telefone e e-mail preenchidos |
| 3 — Confirmação | Sempre liberado (tela de resumo) |

O campo de telefone aplica automaticamente a máscara `(XX) XXXXX-XXXX` via `applyPhoneMask()` no evento `@input`.

> Não há mensagens de erro inline nesta página — o feedback é dado pelo bloqueio do botão.

### UserAccountTab — sem validação

O formulário de edição de dados do usuário (`/usuario`) não possui validação de campos. Ao clicar em "Salvar", uma simulação de 900ms é executada e um **toast de confirmação** aparece fixo na tela: *"Informações salvas com sucesso!"*.

---

## Pré-requisitos

- **Node.js 18+** — [nodejs.org](https://nodejs.org)
- **npm 9+** (incluído com o Node.js)

---

## Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/ManaraMarcelo/clinica-dental
cd clinica-dental
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

```bash
cp .env.example .env
```

Edite o `.env` conforme necessário (veja a seção [Variáveis de ambiente](#variáveis-de-ambiente)).

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Acesse **http://localhost:3000**

---

## Iniciar um Projeto Nuxt do Zero

Caso queira criar um novo projeto Nuxt do zero (não clonar este repositório):

```bash
# 1. Confirme que o Node.js 18+ está instalado
node -v

# 2. Crie o projeto com o Nuxi (CLI oficial do Nuxt)
npx nuxi@latest init meu-projeto

# 3. Acesse a pasta e instale as dependências
cd meu-projeto
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse **http://localhost:3000** — o projeto estará rodando.

### Estrutura gerada pelo Nuxi

```
meu-projeto/
├── app.vue          ← ponto de entrada da aplicação
├── nuxt.config.ts   ← configuração centralizada
├── package.json
└── public/          ← arquivos estáticos (favicon, imagens)
```

A partir daí, basta criar as pastas `pages/`, `components/` e `composables/` conforme a necessidade — o Nuxt as reconhece automaticamente.

> Documentação oficial completa: [nuxt.com/docs/getting-started/introduction](https://nuxt.com/docs/getting-started/introduction)

---

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento com HMR |
| `npm run build` | Build de produção (SSR) |
| `npm run generate` | Geração estática (SSG) — todas as páginas como HTML puro |
| `npm run preview` | Preview do build de produção |

---

## Variáveis de ambiente

| Variável | Padrão | Descrição |
|---|---|---|
| `NUXT_PUBLIC_SITE_URL` | `http://localhost:3000` | URL pública do site |
| `NUXT_PUBLIC_SITE_NAME` | `Clinica Bluetooth` | Nome do site (usado em meta tags) |
| `NUXT_PUBLIC_USER_EMAIL` | `usuario@clinica.com` | E-mail para login simulado |
| `NUXT_PUBLIC_USER_PASSWORD` | `clinica123` | Senha para login simulado |
| `PORT` | `3000` | Porta do servidor de desenvolvimento |

> Copie `.env.example` para `.env` e ajuste os valores. O arquivo `.env` **não é versionado**.

---

## Estrutura do projeto

```
clinica-dental/
├── app.vue                        ← ponto de entrada (contém <NuxtPage />)
├── nuxt.config.ts                 ← configuração centralizada
├── package.json
├── .env.example
│
├── pages/                         ← roteamento automático por arquivo
│   ├── index.vue                  →  /
│   ├── servicos.vue               →  /servicos
│   ├── agendar.vue                →  /agendar
│   └── usuario.vue                →  /usuario  (rota protegida)
│
├── components/                    ← auto-import pelo Nuxt
│   ├── AppFeatureCard.vue
│   ├── AppFeatures.vue
│   ├── AppFinalCTA.vue
│   ├── AppFooter.vue
│   ├── AppHero.vue
│   ├── AppLoginModal.vue          ← modal com validação de formulário
│   ├── AppManifesto.vue
│   ├── AppNav.vue
│   ├── AppPlatforms.vue
│   ├── AppTestimonials.vue
│   ├── ServicesFAQ.vue
│   ├── ServicesGrid.vue
│   ├── ServicesHero.vue
│   ├── ServicesPricing.vue
│   ├── ServicesProcess.vue
│   ├── ServicesSpotlight.vue
│   ├── UserAccountTab.vue
│   ├── UserHistoryTab.vue
│   ├── UserPlanTab.vue
│   └── UserSidebar.vue
│
├── composables/                   ← lógica reutilizável com auto-import
│   ├── useAuth.ts                 ← autenticação simulada
│   └── useScrollReveal.ts        ← animações de scroll
│
├── assets/
│   ├── css/
│   │   └── main.css               ← design system (CSS tokens globais)
│   ├── glyphs/                    ← ícones SVG (bolt, burst, gem, smile...)
│   ├── logo-lockup.svg
│   └── logo-mark.svg
│
├── public/
│   ├── family.png
│   ├── logo-lockup.svg
│   └── logo-mark.svg
│
├── docs/
│   └── nuxtjs-artigo.pdf          ← referência acadêmica
│
└── preview/                       ← previews isolados do design system (HTML)
    ├── buttons.html
    ├── cards.html
    ├── colors-primary.html
    └── ...
```

---

## Design System

O sistema visual é definido inteiramente em `assets/css/main.css` via **variáveis CSS nativas** (sem Tailwind ou outra biblioteca). Não há nenhuma dependência de UI externa — 100% CSS puro.

| Token | Valor | Uso |
|---|---|---|
| Cor primária | `#6E5BFF` | Botões, links, destaques |
| Background | `#E9E8E6` | Fundo geral da página |
| Card | `#F5F4F2` | Superfície de cards e modais |
| Fonte display | Sora 700 | Títulos e headings |
| Fonte body | Inter 400/500 | Texto corrido |
| Fonte mono | JetBrains Mono | Destaques de código |
| Border radius padrão | `12px` | Cards, inputs, painéis |
| Raio de botões | `999px` | Todos os botões (sempre pill) |

A pasta `preview/` contém arquivos HTML isolados para visualizar cada token do design system (cores, tipografia, sombras, espaçamento, botões, cards...).

---

## Features do Nuxt utilizadas

| Feature | Como foi usada |
|---|---|
| **File-based routing** | `pages/index.vue` mapeia automaticamente para `/` — sem router manual |
| **Auto-import de componentes** | Todos os `.vue` em `components/` disponíveis sem `import` |
| **Auto-import de composables** | `useScrollReveal` e `useAuth` usados sem importação explícita |
| **`useState`** | Estado reativo global e SSR-safe para autenticação |
| **`useSeoMeta`** | Meta tags e Open Graph configurados por página |
| **`useRuntimeConfig`** | Acesso às variáveis de ambiente tipadas no client e server |
| **`navigateTo`** | Redirecionamento programático (ex: após login, logout, rota protegida) |
| **CSS global** | `assets/css/main.css` injetado via `nuxt.config.ts` sem `import` manual |
| **Devtools** | `devtools: { enabled: true }` para debug em desenvolvimento |

---

## Deploy

Este projeto ainda não possui uma URL de deploy pública. Abaixo estão as opções recomendadas para publicar o projeto:

### Vercel _(recomendado para SSR)_

```bash
# Instale a CLI da Vercel
npm install -g vercel

# Faça o deploy (na raiz do projeto)
vercel
```

Ou conecte o repositório diretamente no painel [vercel.com](https://vercel.com) para deploy automático a cada push.

### Netlify _(recomendado para SSG)_

Gere os arquivos estáticos e faça o deploy:

```bash
npm run generate
# Arraste a pasta .output/public/ para app.netlify.com
```

### Variáveis de ambiente no deploy

Independente da plataforma escolhida, configure as seguintes variáveis de ambiente no painel:

```
NUXT_PUBLIC_SITE_URL=https://seu-dominio.com
NUXT_PUBLIC_SITE_NAME=Clinica Bluetooth
NUXT_PUBLIC_USER_EMAIL=usuario@clinica.com
NUXT_PUBLIC_USER_PASSWORD=clinica123
```

---

## Documentação Oficial

| Tecnologia | Link |
|---|---|
| Nuxt 3 | [nuxt.com/docs](https://nuxt.com/docs) |
| Vue 3 | [vuejs.org/guide/introduction](https://vuejs.org/guide/introduction) |
| Vite | [vite.dev](https://vite.dev) |
| Node.js | [nodejs.org](https://nodejs.org) |

---


## Licença

Projeto acadêmico — uso educacional.  
© 2025 Marcelo Manara, Marcelo Belotto, Vinicius Emanuel, Lucas Vieira.
