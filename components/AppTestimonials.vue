<template>
  <section :style="{ padding: '40px 0 96px', position: 'relative' }">
    <div class="container" :style="{ textAlign: 'center', marginBottom: '48px' }">
      <h2 class="h1 reveal">
        Papo Reto <span class="glyph">✧</span> de
        <br />Sorrisos <span class="glyph">🦷</span> Reais
      </h2>
    </div>

    <div :style="{ position: 'relative', overflow: 'hidden', padding: '12px 0' }">
      <div :style="fadeLeft" />
      <div :style="fadeRight" />

      <div class="marquee" :style="{ display: 'flex', gap: '14px', width: 'max-content' }">
        <div
          v-for="(b, i) in [...quotes, ...quotes]"
          :key="i"
          :style="bubbleStyle"
        >
          <div :style="{ width: '38px', height: '38px', borderRadius: '50%', background: `linear-gradient(135deg, ${b.g})`, flexShrink: 0, boxShadow: 'inset 0 2px 0 rgba(255,255,255,.4)' }" />
          <div>
            <div :style="{ fontSize: '14px', color: 'var(--ink-700)', lineHeight: 1.35, fontWeight: 500 }">{{ b.q }}</div>
            <div :style="{ fontSize: '12px', color: 'var(--ink-400)', fontFamily: 'var(--font-mono)', marginTop: '2px' }">{{ b.h }}</div>
          </div>
        </div>
      </div>

      <div class="marquee marquee--rev" :style="{ display: 'flex', gap: '14px', width: 'max-content', marginTop: '14px' }">
        <div
          v-for="(b, i) in [...reversedQuotes, ...reversedQuotes]"
          :key="i"
          :style="bubbleStyle"
        >
          <div :style="{ width: '38px', height: '38px', borderRadius: '50%', background: `linear-gradient(135deg, ${b.g})`, flexShrink: 0, boxShadow: 'inset 0 2px 0 rgba(255,255,255,.4)' }" />
          <div>
            <div :style="{ fontSize: '14px', color: 'var(--ink-700)', lineHeight: 1.35, fontWeight: 500 }">{{ b.q }}</div>
            <div :style="{ fontSize: '12px', color: 'var(--ink-400)', fontFamily: 'var(--font-mono)', marginTop: '2px' }">{{ b.h }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const quotes = [
  { q: 'Zero ansiedade, sorriso 10/10. Eles entenderam.',       h: '@miladentin',   g: '#8A6BFF,#FF6EC4' },
  { q: 'Clareamento que realmente funciona. Viciada.',          h: '@kevhasteeth',  g: '#6EDBE0,#8A6BFF' },
  { q: 'Agendei, escaneei, saí polida. 38 min no total.',       h: '@emisardo9',    g: '#FFD58A,#FF6EC4' },
  { q: 'Primeiro dentista que não me dá pavor. Incrível.',      h: '@tobyrenn7',    g: '#B7F0C6,#6EDBE0' },
  { q: 'Recebi minha contenção no mesmo dia. A tecnologia é real.', h: '@nia.j',    g: '#FF6EC4,#A496FF' },
  { q: 'A assinatura de limpeza é genial.',                     h: '@drew.codes',   g: '#A496FF,#6EDBE0' },
  { q: 'Os lembretes por mensagem são úteis de verdade.',        h: '@laraax',       g: '#6EDBE0,#B7F0C6' },
  { q: 'Reembolso automático do plano = surreal.',              h: '@samtheman',    g: '#FFD58A,#A496FF' },
]

const reversedQuotes = [...quotes].reverse()

const bubbleStyle = {
  flexShrink: 0,
  background: '#fff',
  borderRadius: '999px',
  padding: '14px 22px 14px 14px',
  display: 'flex', alignItems: 'center', gap: '14px',
  boxShadow: 'var(--shadow-card)',
  minWidth: '320px', maxWidth: '380px',
}

const fadeLeft = {
  position: 'absolute', top: 0, bottom: 0, left: 0, width: '120px',
  background: 'linear-gradient(90deg, var(--bg-page), transparent)',
  zIndex: 2, pointerEvents: 'none',
}

const fadeRight = {
  position: 'absolute', top: 0, bottom: 0, right: 0, width: '120px',
  background: 'linear-gradient(-90deg, var(--bg-page), transparent)',
  zIndex: 2, pointerEvents: 'none',
}
</script>
