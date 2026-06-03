<template>
  <section class="svc-hero" :style="sectionStyle">
    <div class="container hero-inner" :style="innerStyle">

      <div class="reveal" :style="textColStyle">
        <span :style="eyebrowStyle">Nossos Serviços</span>
        <h1 class="h1" :style="{ marginBottom: '0' }">
          Cuidado Dental que<br>Vai Além da Consulta
        </h1>
        <p :style="leadStyle">
          De limpezas de rotina a implantes de alta precisão, cada tratamento é pensado para o seu caso. Tecnologia de
          ponta, equipe certificada, resultado real.
        </p>
        <div :style="ctaRowStyle">
          <NuxtLink to="/agendar">
            <button class="btn btn--primary" :style="{ padding: '14px 28px' }">Agendar Consulta</button>
          </NuxtLink>
          <a href="#planos" class="btn btn--ghost"
            :style="{ padding: '14px 28px', background: 'var(--bg-card-hi)', boxShadow: 'var(--shadow-card)' }">Ver
            Planos</a>
        </div>
      </div>

      <div class="reveal hero-visual" :style="visualColStyle">
        <div :style="visualWrapStyle">

          <div :style="topBadgeStyle">
            <div :style="dotStyle" />
            9 serviços disponíveis
          </div>

          <div class="card" :style="appointmentCardStyle">
            <div :style="cardHeaderStyle">
              <div :style="avatarStyle">M</div>
              <div style="flex: 1; min-width: 0">
                <div :style="{ fontSize: '13px', fontWeight: 600, color: 'var(--ink-900)' }">Dr. Marcelo Souza</div>
                <div :style="{ fontSize: '12px', color: 'var(--ink-400)', marginTop: '2px' }">Clínica — Centro</div>
              </div>
              <span :style="confirmedBadgeStyle">Confirmado</span>
            </div>

            <div :style="dividerStyle" />

            <div :style="infoRowStyle">
              <div v-for="info in infos" :key="info.label"
                :style="{ display: 'flex', flexDirection: 'column', gap: '2px' }">
                <span :style="{ fontSize: '11px', color: 'var(--ink-400)' }">{{ info.label }}</span>
                <span :style="{ fontSize: '13px', fontWeight: 600, color: 'var(--ink-900)' }">{{ info.value }}</span>
              </div>
            </div>

            <div :style="progressWrapStyle">
              <div
                :style="{ fontSize: '11px', color: 'var(--ink-400)', display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }">
                <span>Consultas usadas</span>
                <span :style="{ fontWeight: 600, color: 'var(--ink-700)' }">2 / 4</span>
              </div>
              <div :style="{ height: '5px', background: 'var(--border)', borderRadius: '999px', overflow: 'hidden' }">
                <div
                  :style="{ width: '50%', height: '100%', background: 'var(--primary-500)', borderRadius: '999px' }" />
              </div>
            </div>
          </div>

          <div :style="bottomBadgeStyle">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6E5BFF" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Plano Premium ativo
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const infos = [
  { label: 'Data', value: '12 Jun' },
  { label: 'Horário', value: '14:30' },
  { label: 'Serviço', value: 'Limpeza' },
]

const sectionStyle = { paddingTop: '140px', paddingBottom: '80px' }

const innerStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '64px',
  alignItems: 'center',
}

const textColStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
}

const eyebrowStyle = {
  display: 'inline-block',
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--primary-500)',
}

const leadStyle = {
  fontSize: '17px',
  lineHeight: '1.6',
  color: 'var(--ink-500)',
  maxWidth: '440px',
  margin: '0',
}

const ctaRowStyle = {
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
}

const visualColStyle = {
  display: 'flex',
  justifyContent: 'center',
}

const visualWrapStyle = {
  position: 'relative',
  width: '340px',
  height: '380px',
}

const topBadgeStyle = {
  position: 'absolute',
  top: '8px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  background: 'var(--bg-card-hi)',
  border: '1px solid var(--border)',
  borderRadius: '999px',
  padding: '8px 16px',
  fontSize: '13px',
  fontWeight: 600,
  color: 'var(--ink-700)',
  boxShadow: 'var(--shadow-card)',
  whiteSpace: 'nowrap',
  animation: 'floatY 5s ease-in-out 0.4s infinite',
  zIndex: 2,
}

const dotStyle = {
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  background: 'var(--success)',
  boxShadow: '0 0 0 3px rgba(31,138,91,.2)',
  flexShrink: 0,
}

const appointmentCardStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -46%)',
  width: '288px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  animation: 'floatY 6.5s ease-in-out infinite',
}

const cardHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}

const avatarStyle = {
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #8775FF, #5A48E8)',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  fontWeight: 700,
  flexShrink: 0,
}

const confirmedBadgeStyle = {
  fontSize: '11px',
  fontWeight: 700,
  color: 'var(--success)',
  background: 'rgba(31,138,91,.1)',
  padding: '3px 10px',
  borderRadius: '999px',
  whiteSpace: 'nowrap',
}

const dividerStyle = { height: '1px', background: 'var(--border)' }

const infoRowStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '8px',
}

const progressWrapStyle = {
  background: 'var(--bg-inset)',
  borderRadius: 'var(--radius-sm)',
  padding: '10px 12px',
}

const bottomBadgeStyle = {
  position: 'absolute',
  bottom: '20px',
  right: '-12px',
  display: 'flex',
  alignItems: 'center',
  gap: '7px',
  background: 'var(--primary-50)',
  border: '1px solid var(--primary-100)',
  borderRadius: '999px',
  padding: '8px 14px',
  fontSize: '12px',
  fontWeight: 600,
  color: 'var(--primary-700)',
  boxShadow: 'var(--shadow-card)',
  whiteSpace: 'nowrap',
  animation: 'floatY 7s ease-in-out 1.2s infinite',
}
</script>

<style scoped>
@media (max-width: 860px) {
  .svc-hero {
    padding-top: 100px !important;
    padding-bottom: 48px !important;
  }

  .hero-inner {
    grid-template-columns: 1fr !important;
    gap: 0 !important;
  }

  .hero-visual {
    display: none;
  }
}

@media (max-width: 640px) {
  .svc-hero {
    padding-top: 88px !important;
  }
}
</style>
