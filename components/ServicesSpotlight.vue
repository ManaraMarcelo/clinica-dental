<template>
  <section :style="{ paddingBottom: '96px' }">
    <div class="container">
      <div class="card reveal spotlight-inner" :style="spotlightCardStyle">

        <div :style="textSideStyle">
          <span :style="popularBadgeStyle">Mais Solicitado</span>
          <h2 class="h2" :style="{ marginBottom: '0' }">Clareamento Dental de Alta Performance</h2>
          <p :style="descStyle">
            Nosso protocolo combina luz LED de última geração com gel profissional, devolvendo até 8 tons de brancura em uma única sessão de 60 minutos.
          </p>
          <ul :style="listStyle">
            <li v-for="item in benefits" :key="item" :style="listItemStyle">
              <div :style="checkStyle">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>
              {{ item }}
            </li>
          </ul>
          <div :style="{ display: 'flex', gap: '12px' }">
            <button class="btn btn--primary" :style="{ padding: '13px 24px' }">Agendar Clareamento</button>
            <button class="btn btn--ghost" :style="{ padding: '13px 20px', background: 'var(--bg-inset)' }">Saiba mais</button>
          </div>
        </div>

        <div class="spotlight-visual" :style="visualSideStyle">
          <div :style="visualCardStyle">
            <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }">
              <span :style="{ fontSize: '13px', fontWeight: 600, color: 'var(--ink-900)' }">Resultado esperado</span>
              <span :style="sessionBadgeStyle">1 sessão</span>
            </div>

            <div :style="teethRowStyle">
              <div
                v-for="(tooth, i) in teeth"
                :key="i"
                :style="toothStyle(tooth)"
              />
            </div>

            <div :style="{ display: 'flex', gap: '3px', height: '8px', marginTop: '12px' }">
              <div
                v-for="i in 8"
                :key="i"
                :style="{ flex: 1, borderRadius: '999px', background: `hsl(48, ${Math.round(65 - i * 6)}%, ${20 + i * 9}%)` }"
              />
            </div>
            <div :style="{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--ink-400)', marginTop: '6px' }">
              <span>Antes</span>
              <span :style="{ fontWeight: 600, color: 'var(--ink-700)' }">+8 tons</span>
              <span>Depois</span>
            </div>

            <div :style="metaGridStyle">
              <div v-for="m in metas" :key="m.label" :style="metaItemStyle">
                <span :style="{ fontSize: '18px', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--ink-900)', letterSpacing: '-0.02em' }">{{ m.value }}</span>
                <span :style="{ fontSize: '11px', color: 'var(--ink-400)' }">{{ m.label }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const benefits = [
  '1 sessão de 60 minutos — sem dor',
  'Gel profissional com proteção do esmalte',
  'Resultado de até 8 tons mais branco',
  'Coberto pelo plano Premium (1x/ano)',
]

const teeth = [22, 30, 40, 52, 64, 76, 86, 94]

const metas = [
  { value: '60min', label: 'Duração' },
  { value: '8 tons', label: 'Resultado' },
  { value: '1ª visita', label: 'Disponível' },
]

const spotlightCardStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '64px',
  padding: '56px',
  alignItems: 'center',
  background: 'var(--bg-card-hi)',
}

const textSideStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
}

const popularBadgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: '#E0974A',
  background: 'rgba(224,151,74,.12)',
  padding: '4px 12px',
  borderRadius: '999px',
  width: 'fit-content',
}

const descStyle = {
  fontSize: '15px',
  lineHeight: '1.65',
  color: 'var(--ink-500)',
  margin: '0',
}

const listStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  listStyle: 'none',
  padding: '0',
  margin: '0',
}

const listItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontSize: '14px',
  color: 'var(--ink-700)',
  fontWeight: 500,
}

const checkStyle = {
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  background: 'var(--primary-500)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}

const visualSideStyle = {
  display: 'flex',
  justifyContent: 'center',
}

const visualCardStyle = {
  background: 'var(--bg-card)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-md)',
  padding: '28px',
  width: '100%',
  maxWidth: '320px',
}

const sessionBadgeStyle = {
  fontSize: '11px',
  fontWeight: 700,
  color: '#E0974A',
  background: 'rgba(224,151,74,.12)',
  padding: '3px 10px',
  borderRadius: '999px',
}

const teethRowStyle = {
  display: 'flex',
  gap: '5px',
  justifyContent: 'center',
}

const toothStyle = (lightness: number) => ({
  width: '28px',
  height: '52px',
  borderRadius: '6px 6px 14px 14px',
  background: `hsl(48, ${Math.round(Math.max(0, 62 - lightness * 0.55))}%, ${lightness}%)`,
})

const metaGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '8px',
  marginTop: '20px',
}

const metaItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  background: 'var(--bg-card-hi)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-sm)',
  padding: '10px 12px',
}
</script>

<style scoped>
@media (max-width: 860px) {
  .spotlight-inner {
    grid-template-columns: 1fr !important;
    gap: 32px !important;
    padding: 32px !important;
  }
  .spotlight-visual { order: -1; }
}
@media (max-width: 640px) {
  .spotlight-inner { padding: 24px !important; }
}
</style>
