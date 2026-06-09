<template>
  <section :style="sectionStyle">
    <div class="container">
      <div class="reveal" :style="headerStyle">
        <span :style="eyebrowStyle">Como funciona</span>
        <h2 class="h2">Três Passos para o Seu Sorriso Ideal</h2>
      </div>
      <div class="steps-wrap" :style="stepsWrapStyle">
        <div class="steps-connector" :style="connectorStyle" />
        <div
          v-for="(step, i) in steps"
          :key="step.title"
          class="card reveal"
          :style="stepCardStyle"
        >
          <div :style="numberStyle">{{ String(i + 1).padStart(2, '0') }}</div>
          <div :style="iconWrapStyle">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--primary-500)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              v-html="step.icon"
            />
          </div>
          <h3 :style="stepTitleStyle">{{ step.title }}</h3>
          <p :style="stepDescStyle">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Agende Online',
    desc: 'Escolha o serviço, a unidade e o horário direto pelo app ou pelo site. Em menos de 2 minutos, tudo confirmado.',
    icon: `<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>`,
  },
  {
    title: 'Consulta Diagnóstica',
    desc: 'Na primeira visita, nosso dentista faz avaliação completa e monta seu plano de tratamento personalizado.',
    icon: `<path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M8 11h8M8 15h5"/>`,
  },
  {
    title: 'Tratamento e Acompanhamento',
    desc: 'Execute o tratamento no seu ritmo. Acompanhamos cada etapa com notificações e check-ins digitais.',
    icon: `<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>`,
  },
]

const sectionStyle = {
  paddingTop: '80px',
  paddingBottom: '96px',
  background: 'var(--bg-card)',
}

const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  alignItems: 'center',
  textAlign: 'center',
  marginBottom: '48px',
}

const eyebrowStyle = {
  display: 'inline-block',
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--primary-500)',
}

const stepsWrapStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '12px',
  position: 'relative',
}

const connectorStyle = {
  position: 'absolute',
  top: '44px',
  left: 'calc(33.33% + 6px)',
  right: 'calc(33.33% + 6px)',
  height: '0',
  borderTop: '1.5px dashed var(--border-strong)',
  pointerEvents: 'none',
  zIndex: 0,
}

const stepCardStyle = {
  padding: '32px 28px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  position: 'relative',
  zIndex: 1,
}

const numberStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
  fontWeight: 700,
  color: 'var(--primary-500)',
  letterSpacing: '0.06em',
}

const iconWrapStyle = {
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  background: 'var(--primary-50)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const stepTitleStyle = {
  fontSize: '18px',
  fontWeight: 700,
  color: 'var(--ink-900)',
  fontFamily: 'var(--font-display)',
  letterSpacing: '-0.01em',
  margin: '0',
}

const stepDescStyle = {
  fontSize: '14px',
  color: 'var(--ink-500)',
  lineHeight: '1.6',
  margin: '0',
}
</script>

<style scoped>
@media (max-width: 860px) {
  .steps-wrap { grid-template-columns: repeat(2, 1fr) !important; }
  .steps-connector { display: none !important; }
}
@media (max-width: 560px) {
  .steps-wrap { grid-template-columns: 1fr !important; }
}
</style>
