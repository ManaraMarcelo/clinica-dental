# Dental Clinic — Landing Page

Landing page moderna para clínica odontológica fictícia, construída com **Nuxt 3** e **Vue 3**.  
Projeto acadêmico desenvolvido como trabalho de faculdade.

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
- **SEO** — meta tags e Open Graph via `useSeoMeta`

---

## Pré-requisitos

- Node.js **18+**
- npm **9+**

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

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento com HMR |
| `npm run build` | Build de produção (SSR) |
| `npm run generate` | Geração estática (SSG) |
| `npm run preview` | Preview do build de produção |

---

## Variáveis de ambiente

| Variável | Padrão | Descrição |
|---|---|---|
| `NUXT_PUBLIC_SITE_URL` | `http://localhost:3000` | URL pública do site |
| `NUXT_PUBLIC_SITE_NAME` | `Clinica Bluetooth` | Nome do site (usado em meta tags) |
| `PORT` | `3000` | Porta do servidor de desenvolvimento |

> Copie `.env.example` para `.env` e ajuste os valores. O arquivo `.env` **não é versionado**.

---

## Estrutura do projeto

```
clinica-dental/
├── app.vue
├── assets
│   ├── css
│   │   └── main.css
│   ├── glyphs
│   │   ├── bolt.svg
│   │   ├── burst.svg
│   │   ├── gem.svg
│   │   ├── smile.svg
│   │   ├── sparkle.svg
│   │   ├── spark.svg
│   │   └── tooth.svg
│   ├── logo-lockup.svg
│   └── logo-mark.svg
├── colors_and_type.css
├── components
│   ├── AppFeatureCard.vue
│   ├── AppFeatures.vue
│   ├── AppFinalCTA.vue
│   ├── AppFooter.vue
│   ├── AppHero.vue
│   ├── AppLoginModal.vue
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
├── composables
│   ├── useAuth.ts
│   └── useScrollReveal.ts
├── docs
│   └── nuxtjs-artigo.pdf
├── nuxt.config.ts
├── package.json
├── pages
│   ├── agendar.vue
│   ├── index.vue
│   ├── servicos.vue
│   └── usuario.vue
├── preview
│   ├── brand-logo.html
│   ├── buttons.html
│   ├── cards.html
│   ├── colors-primary.html
│   ├── colors-semantic.html
│   ├── colors-surfaces.html
│   ├── feature-card.html
│   ├── inputs.html
│   ├── navbar.html
│   ├── radii.html
│   ├── shadows.html
│   ├── spacing-scale.html
│   ├── testimonials.html
│   ├── type-body.html
│   ├── type-display.html
│   └── type-glyphs.html
├── public
│   ├── family.png
│   ├── logo-lockup.svg
│   └── logo-mark.svg
├── README.md
├── ui_kits
│   └── web
│       ├── Features.jsx
│       ├── FinalCTA.jsx
│       ├── Footer.jsx
│       ├── Hero.jsx
│       ├── index.html
│       ├── Manifesto.jsx
│       ├── Nav.jsx
│       ├── Platforms.jsx
│       ├── README.md
│       └── Testimonials.jsx
└── uploads
    └── db7d943e5691c9cb3fa012a9217e5750.jpg
```

---

## Design System

O sistema visual é definido em `assets/css/main.css` via variáveis CSS nativas:

| Token | Valor |
|---|---|
| Cor primária | `#6E5BFF` (violeta) |
| Background | `#E9E8E6` (cinza quente) |
| Card | `#F5F4F2` |
| Fonte display | Sora 700 |
| Fonte body | Inter 400/500 |
| Border radius padrão | `12px` |
| Raio de botões | `999px` (sempre pill) |

---

## Features do Nuxt utilizadas

- **File-based routing** — `pages/index.vue` mapeia automaticamente para `/`
- **Auto-import de componentes** — todos os `.vue` em `components/` são importados automaticamente
- **Auto-import de composables** — `useScrollReveal` disponível sem importação explícita
- **`useSeoMeta`** — composable nativo para meta tags e Open Graph
- **`runtimeConfig`** — variáveis de ambiente tipadas e seguras
- **CSS global** — injetado via `nuxt.config.ts` sem importação manual

---

## Referência visual

O design foi extraído de um único screenshot de referência (`uploads/`) e re-aplicado ao domínio odontológico. A ilustração do hero é uma composição em CSS puro (gradientes radiais + sombras) que substitui uma render 3D real.

---

## Licença

Projeto acadêmico — uso educacional.
