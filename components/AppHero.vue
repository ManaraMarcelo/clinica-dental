<template>
  <section :style="{ paddingTop: '140px', paddingBottom: '80px', position: 'relative' }">
    <div class="container" :style="{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '48px', alignItems: 'center' }">
      <!-- Conteúdo -->
      <div class="reveal">
        <h1 class="display" :style="{ marginBottom: '24px' }">
          Turbine Seu <span class="glyph">⚡</span> Sorriso
          <br />para uma Confiança <span class="glyph">✦</span> Total
        </h1>
        <p class="lead" :style="{ marginBottom: '32px', maxWidth: '460px' }">
          Chega de pavor do dentista. A Clínica Dental oferece um atendimento moderno e tranquilo que se encaixa na sua
          rotina agitada — limpezas sem dor, clareamento na cadeira e design de sorriso de outro nível.
        </p>
        <div :style="{ display: 'flex', gap: '12px', alignItems: 'center' }">
          <button class="btn btn--primary" :style="{ padding: '16px 28px' }">
            Agendar Limpeza <span aria-hidden="true">→</span>
          </button>
          <a href="#" :style="{ color: 'var(--ink-700)', fontSize: '14px', fontWeight: 500, textDecoration: 'none', padding: '12px 8px' }">
            Ver preços →
          </a>
        </div>
        <div :style="{ marginTop: '36px', display: 'flex', gap: '20px', alignItems: 'center', color: 'var(--ink-400)', fontSize: '13px' }">
          <span>4,9 ★ +1.200 avaliações</span>
          <span :style="{ width: '4px', height: '4px', borderRadius: '999px', background: 'currentColor' }" />
          <span>Aberto 7 dias</span>
          <span :style="{ width: '4px', height: '4px', borderRadius: '999px', background: 'currentColor' }" />
          <span>3 unidades</span>
        </div>
      </div>

      <!-- Ilustração -->
      <div :style="illustrationWrap">
        <div :style="stageHighlight" />
        <div
          v-for="disk in iriDisks"
          :key="disk.delay"
          :style="disk.style"
        />
        <div :style="chromeDome">
          <div :style="domeHighlight" />
          <div :style="prismStrip" />
        </div>
        <svg
          viewBox="0 0 600 600"
          :style="{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }"
        >
          <defs>
            <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#FFFFFF" stop-opacity=".95" />
              <stop offset=".5" stop-color="#E9E6FF" stop-opacity=".85" />
              <stop offset="1" stop-color="#FFFFFF" stop-opacity=".7" />
            </linearGradient>
          </defs>
          <path
            d="M40 420 C 180 380, 240 480, 360 440 S 540 380, 580 420"
            stroke="url(#ribbon)"
            stroke-width="34"
            fill="none"
            stroke-linecap="round"
            opacity=".75"
            style="filter: drop-shadow(0 8px 16px rgba(110,91,255,.18))"
          />
        </svg>
        <div class="float-y" :style="{ position: 'absolute', top: '6%', right: '20%', fontSize: '28px', color: 'var(--primary-500)', animationDelay: '0s' }">✦</div>
        <div class="float-y" :style="{ position: 'absolute', bottom: '14%', right: '8%', fontSize: '22px', color: 'var(--primary-400)', animationDelay: '1.2s' }">✧</div>
        <div class="float-y" :style="{ position: 'absolute', top: '40%', right: '4%', fontSize: '18px', color: 'var(--iri-pink)', animationDelay: '2.4s' }">✦</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const illustrationWrap = {
  position: 'relative',
  width: '100%',
  aspectRatio: '1 / 1',
  maxWidth: '560px',
  marginLeft: 'auto',
}

const stageHighlight = {
  position: 'absolute',
  inset: '-10%',
  background: 'radial-gradient(circle at 60% 55%, rgba(255,255,255,.9), rgba(255,255,255,0) 60%)',
  filter: 'blur(8px)',
}

const iriDisks = [
  { top: '8%',  left: '12%', size: 160, c1: '#A496FF', c2: '#FF6EC4', delay: 0   },
  { top: '62%', left: '4%',  size: 140, c1: '#6EDBE0', c2: '#8A6BFF', delay: 1.4 },
  { top: '70%', left: '60%', size: 120, c1: '#FF9AD1', c2: '#A496FF', delay: 2.8 },
].map(({ top, left, size, c1, c2, delay }) => ({
  delay,
  style: {
    position: 'absolute',
    top,
    left,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    background: `radial-gradient(circle at 40% 35%, ${c1}, ${c2} 60%, transparent 75%)`,
    filter: 'blur(2px)',
    opacity: 0.85,
    animation: 'floatY 7s ease-in-out infinite',
    animationDelay: `${delay}s`,
    mixBlendMode: 'multiply',
  },
}))

const chromeDome = {
  position: 'absolute',
  top: '14%', left: '24%',
  width: '58%', height: '72%',
  borderRadius: '46% 46% 42% 42% / 52% 52% 48% 48%',
  background: 'linear-gradient(160deg, #FFFFFF 0%, #EDECEE 30%, #C9C7D0 55%, #FFFFFF 78%, #D9D7DE 100%)',
  boxShadow: `
    inset 12px 30px 40px -10px rgba(255,255,255,.95),
    inset -22px -10px 40px -10px rgba(80,76,110,.35),
    0 30px 60px -20px rgba(110,91,255,.28),
    0 20px 40px -10px rgba(20,20,30,.18)
  `,
}

const domeHighlight = {
  position: 'absolute',
  top: '6%', left: '18%',
  width: '42%', height: '22%',
  borderRadius: '50%',
  background: 'radial-gradient(ellipse at center, rgba(255,255,255,.95), rgba(255,255,255,0) 70%)',
}

const prismStrip = {
  position: 'absolute',
  top: '46%', left: '8%',
  width: '84%', height: '6%',
  background: 'linear-gradient(90deg, #FF6EC4, #A496FF, #6EDBE0, #B7F0C6, #FFD58A)',
  borderRadius: '999px',
  filter: 'blur(6px)',
  opacity: 0.55,
  mixBlendMode: 'screen',
}
</script>
