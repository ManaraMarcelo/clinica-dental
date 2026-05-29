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
git clone <url-do-repositório>
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
| `NUXT_PUBLIC_SITE_NAME` | `Dental Clinic` | Nome do site (usado em meta tags) |
| `PORT` | `3000` | Porta do servidor de desenvolvimento |

> Copie `.env.example` para `.env` e ajuste os valores. O arquivo `.env` **não é versionado**.

---

## Estrutura do projeto

```
clinica-dental/
├── app.vue                      # Raiz do app — renderiza <NuxtPage />
├── nuxt.config.ts               # Configuração do Nuxt (CSS global, head, runtimeConfig)
├── pages/
│   └── index.vue                # Rota "/" — orquestra todas as seções
├── components/                  # Auto-importados pelo Nuxt
│   ├── AppNav.vue               # Nav flutuante com blur no scroll
│   ├── AppHero.vue              # Hero com ilustração CSS + glyphs animados
│   ├── AppManifesto.vue         # Card wide centralizado
│   ├── AppFeatureCard.vue       # Card de feature reutilizável (usa slot)
│   ├── AppFeatures.vue          # Grid 2-up + 3-up de funcionalidades
│   ├── AppTestimonials.vue      # Rail de depoimentos com marquee
│   ├── AppPlatforms.vue         # Switcher de localidades com dashboard mock
│   ├── AppFinalCTA.vue          # CTA final
│   └── AppFooter.vue            # Rodapé com links e redes sociais
├── composables/
│   └── useScrollReveal.ts       # IntersectionObserver para fade-in no scroll
├── assets/
│   └── css/
│       └── main.css             # Design tokens + animações + classes globais
├── public/
│   ├── logo-mark.svg            # Ícone da marca
│   └── logo-lockup.svg          # Logo completo
└── ui_kits/web/                 # Referência original em React JSX (não usado no build)
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
