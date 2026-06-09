<template>
  <section :style="{ paddingBottom: '96px' }">
    <div class="container">
      <div class="reveal" :style="headerStyle">
        <span :style="eyebrowStyle">O que oferecemos</span>
        <h2 class="h2">Tratamentos para Cada Fase do Seu Sorriso</h2>
      </div>
      <div class="svc-grid" :style="gridStyle">
        <div
          v-for="service in services"
          :key="service.name"
          class="card service-card reveal"
          :style="cardBaseStyle"
        >
          <div :style="iconWrap(service)">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              :stroke="service.stroke"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              v-html="service.icon"
            />
          </div>
          <div style="flex: 1">
            <div :style="nameStyle">{{ service.name }}</div>
            <div :style="descStyle">{{ service.desc }}</div>
          </div>
          <span :style="badge(service.plan)">{{ service.plan }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Service {
  name: string
  desc: string
  plan: string
  stroke: string
  bg: string
  icon: string
}

const services: Service[] = [
  {
    name: 'Consulta Geral',
    desc: 'Avaliação completa da saúde bucal com diagnóstico personalizado e plano de tratamento.',
    plan: 'Coberto pelo plano',
    stroke: '#6E5BFF',
    bg: 'rgba(110,91,255,.1)',
    icon: `<path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="m9 12 2 2 4-4"/>`,
  },
  {
    name: 'Limpeza e Profilaxia',
    desc: 'Remoção de tártaro e biofilme com equipamentos ultrassônicos. Sorriso limpo e saudável.',
    plan: 'Coberto pelo plano',
    stroke: '#2EB3BF',
    bg: 'rgba(46,179,191,.1)',
    icon: `<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>`,
  },
  {
    name: 'Clareamento Dental',
    desc: 'Clareamento a laser de sessão única ou moldeiras personalizadas para uso em casa.',
    plan: 'Premium',
    stroke: '#E0974A',
    bg: 'rgba(224,151,74,.1)',
    icon: `<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>`,
  },
  {
    name: 'Ortodontia',
    desc: 'Aparelhos convencionais, autoligados ou alinhadores transparentes para correção do alinhamento.',
    plan: 'Premium',
    stroke: '#6E5BFF',
    bg: 'rgba(110,91,255,.1)',
    icon: `<path d="M5 4h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5"/><path d="M19 4h-2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2"/><path d="M10 12h4"/>`,
  },
  {
    name: 'Implantes Dentários',
    desc: 'Implantes de titânio com osseointegração monitorada. Resultado permanente com aparência natural.',
    plan: 'Premium',
    stroke: '#6E5BFF',
    bg: 'rgba(110,91,255,.1)',
    icon: `<circle cx="12" cy="5" r="3"/><path d="M12 8v13"/><path d="M9 11h6"/><path d="M8 21h8"/>`,
  },
  {
    name: 'Endodontia',
    desc: 'Tratamento de canal com localizador apical eletrônico. Sem dor, sem surpresas.',
    plan: 'Coberto pelo plano',
    stroke: '#2EA572',
    bg: 'rgba(46,165,114,.1)',
    icon: `<path d="M12 2c-2.8 0-5 2-5.5 4.8-.3 1.4-.5 2.8-.5 4.2 0 2.2.6 3.8 1.7 4.7.4.4.9.3 1.3.3.6 0 1-.5 1.4-1.5.4-1 1-1.5 1.6-1.5s1.2.5 1.6 1.5c.4 1 .8 1.5 1.4 1.5.4 0 .9.1 1.3-.3 1.1-.9 1.7-2.5 1.7-4.7 0-1.4-.2-2.8-.5-4.2C17 4 14.8 2 12 2z"/><path d="M9.5 10.5c.8.5 1.7.7 2.5.7s1.7-.2 2.5-.7"/>`,
  },
  {
    name: 'Odontopediatria',
    desc: 'Atendimento especializado para crianças em ambiente acolhedor. Prevenção desde o início.',
    plan: 'Coberto pelo plano',
    stroke: '#E45CA8',
    bg: 'rgba(228,92,168,.1)',
    icon: `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>`,
  },
  {
    name: 'Emergência 24h',
    desc: 'Dor de dente não espera. Atendemos urgências dentárias a qualquer hora do dia ou noite.',
    plan: 'Premium',
    stroke: '#D97757',
    bg: 'rgba(217,119,87,.1)',
    icon: `<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>`,
  },
  {
    name: 'Cirurgia Oral',
    desc: 'Extrações, biópsias e pequenas cirurgias com anestesia local e acompanhamento pós-operatório.',
    plan: 'Plano Família',
    stroke: '#2EB3BF',
    bg: 'rgba(46,179,191,.1)',
    icon: `<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12"/>`,
  },
]

const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginBottom: '40px',
}

const eyebrowStyle = {
  display: 'inline-block',
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--primary-500)',
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '12px',
}

const cardBaseStyle = {
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
}

const iconWrap = (s: Service) => ({
  width: '44px',
  height: '44px',
  borderRadius: 'var(--radius-sm)',
  background: s.bg,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
})

const nameStyle = {
  fontSize: '16px',
  fontWeight: 700,
  color: 'var(--ink-900)',
  fontFamily: 'var(--font-display)',
  letterSpacing: '-0.01em',
  marginBottom: '4px',
}

const descStyle = {
  fontSize: '13px',
  color: 'var(--ink-500)',
  lineHeight: '1.55',
}

const badge = (plan: string) => {
  const isIncluded = plan === 'Coberto pelo plano'
  const isFamilia = plan === 'Plano Família'
  return {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.04em',
    padding: '3px 10px',
    borderRadius: '999px',
    width: 'fit-content',
    marginTop: 'auto',
    background: isIncluded
      ? 'rgba(31,138,91,.1)'
      : isFamilia
        ? 'rgba(46,179,191,.12)'
        : 'rgba(110,91,255,.1)',
    color: isIncluded
      ? '#1F8A5B'
      : isFamilia
        ? '#2EB3BF'
        : '#5A48E8',
  }
}
</script>

<style scoped>
.service-card {
  transition: box-shadow var(--dur-base) var(--ease-soft), transform var(--dur-base) var(--ease-soft);
}
.service-card:hover {
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-2px);
}

@media (max-width: 860px) {
  .svc-grid { grid-template-columns: repeat(2, 1fr) !important; }
}
@media (max-width: 640px) {
  .svc-grid { grid-template-columns: 1fr !important; }
}
</style>
