<template>
  <section id="planos" :style="{ paddingTop: '96px', paddingBottom: '96px' }">
    <div class="container">
      <div class="reveal" :style="headerStyle">
        <span :style="eyebrowStyle">Planos e Preços</span>
        <h2 class="h2">Encontre o Plano Certo para Você</h2>
        <p :style="headerDescStyle">
          Todos os planos incluem check-in digital, histórico de consultas e suporte via app.
        </p>
      </div>
      <div class="pricing-grid" :style="gridStyle">
        <div
          v-for="plan in plans"
          :key="plan.name"
          class="reveal plan-card"
          :style="planCardStyle(plan.featured)"
        >
          <div v-if="plan.featured" :style="featuredBadgeStyle">Mais popular</div>

          <div :style="{ marginBottom: '20px' }">
            <div :style="planNameStyle(plan.featured)">{{ plan.name }}</div>
            <div :style="{ display: 'flex', alignItems: 'baseline', gap: '4px', margin: '8px 0 6px' }">
              <span :style="priceStyle(plan.featured)">R$&nbsp;{{ plan.price }}</span>
              <span :style="{ fontSize: '13px', color: plan.featured ? 'rgba(255,255,255,.55)' : 'var(--ink-400)' }">/mês</span>
            </div>
            <div :style="{ fontSize: '13px', color: plan.featured ? 'rgba(255,255,255,.6)' : 'var(--ink-400)', lineHeight: 1.4 }">{{ plan.tagline }}</div>
          </div>

          <div :style="dividerStyle(plan.featured)" />

          <ul :style="featureListStyle">
            <li v-for="feat in plan.features" :key="feat.label" :style="featureItemStyle(plan.featured, feat.included)">
              <div :style="checkCircleStyle(plan.featured, feat.included)">
                <svg v-if="feat.included" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                <svg v-else width="10" height="10" viewBox="0 0 24 24" fill="none" :stroke="plan.featured ? 'rgba(255,255,255,.3)' : 'var(--ink-300)'" stroke-width="3" stroke-linecap="round">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </div>
              <span>{{ feat.label }}</span>
              <span v-if="feat.limit" :style="limitStyle(plan.featured)">{{ feat.limit }}</span>
            </li>
          </ul>

          <button
            class="btn"
            :style="ctaBtnStyle(plan.featured)"
          >{{ plan.cta }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Feature { label: string; included: boolean; limit?: string }
interface Plan {
  name: string; price: string; tagline: string
  featured: boolean; cta: string; features: Feature[]
}

const plans: Plan[] = [
  {
    name: 'Essencial',
    price: '79',
    tagline: 'Para começar com o cuidado certo',
    featured: false,
    cta: 'Começar grátis',
    features: [
      { label: 'Consultas de rotina', included: true, limit: '4x/ano' },
      { label: 'Limpeza e profilaxia', included: true, limit: '2x/ano' },
      { label: 'Radiografias', included: true, limit: '6x/ano' },
      { label: 'Clareamento dental', included: false },
      { label: 'Ortodontia', included: false },
      { label: 'Implantes dentários', included: false },
      { label: 'Emergência 24h', included: false },
      { label: 'Cirurgia oral', included: false },
    ],
  },
  {
    name: 'Premium',
    price: '189',
    tagline: 'Cobertura completa para o dia a dia',
    featured: true,
    cta: 'Assinar Premium',
    features: [
      { label: 'Consultas de rotina', included: true, limit: '4x/ano' },
      { label: 'Limpeza e profilaxia', included: true, limit: '2x/ano' },
      { label: 'Radiografias', included: true, limit: '6x/ano' },
      { label: 'Clareamento dental', included: true, limit: '1x/ano' },
      { label: 'Ortodontia', included: true, limit: 'até R$ 3.000' },
      { label: 'Implantes dentários', included: true, limit: 'até R$ 2.500' },
      { label: 'Emergência 24h', included: true },
      { label: 'Cirurgia oral', included: false },
    ],
  },
  {
    name: 'Família',
    price: '249',
    tagline: 'Premium + até 4 dependentes com 30% off',
    featured: false,
    cta: 'Falar com a equipe',
    features: [
      { label: 'Consultas de rotina', included: true, limit: '4x/ano' },
      { label: 'Limpeza e profilaxia', included: true, limit: '2x/ano' },
      { label: 'Radiografias', included: true, limit: '6x/ano' },
      { label: 'Clareamento dental', included: true, limit: '1x/ano' },
      { label: 'Ortodontia', included: true, limit: 'até R$ 3.000' },
      { label: 'Implantes dentários', included: true, limit: 'até R$ 2.500' },
      { label: 'Emergência 24h', included: true },
      { label: 'Cirurgia oral', included: true },
    ],
  },
]

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

const headerDescStyle = {
  fontSize: '16px',
  color: 'var(--ink-500)',
  maxWidth: '480px',
  textAlign: 'center',
  lineHeight: '1.6',
  margin: '0',
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '12px',
  alignItems: 'start',
}

const planCardStyle = (featured: boolean) => ({
  borderRadius: 'var(--radius-lg)',
  padding: '32px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  position: 'relative',
  background: featured
    ? 'linear-gradient(135deg, var(--primary-600) 0%, var(--primary-800) 60%, #2a1f7a 100%)'
    : 'var(--bg-card-hi)',
  border: featured ? 'none' : '1px solid var(--border)',
  boxShadow: featured ? 'var(--shadow-pop)' : 'var(--shadow-card)',
  marginTop: featured ? '0' : '14px',
})

const featuredBadgeStyle = {
  position: 'absolute',
  top: '-14px',
  left: '50%',
  transform: 'translateX(-50%)',
  background: 'linear-gradient(135deg, var(--primary-400), var(--primary-600))',
  color: '#fff',
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  padding: '5px 16px',
  borderRadius: '999px',
  whiteSpace: 'nowrap',
  boxShadow: '0 4px 12px rgba(110,91,255,.4)',
}

const planNameStyle = (featured: boolean) => ({
  fontSize: '18px',
  fontWeight: 700,
  color: featured ? '#fff' : 'var(--ink-900)',
  fontFamily: 'var(--font-display)',
  letterSpacing: '-0.01em',
})

const priceStyle = (featured: boolean) => ({
  fontFamily: 'var(--font-display)',
  fontSize: '36px',
  fontWeight: 800,
  color: featured ? '#fff' : 'var(--ink-900)',
  letterSpacing: '-0.02em',
  lineHeight: '1',
})

const dividerStyle = (featured: boolean) => ({
  height: '1px',
  background: featured ? 'rgba(255,255,255,.15)' : 'var(--border)',
})

const featureListStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  listStyle: 'none',
  padding: '0',
  margin: '0',
  flex: '1',
}

const featureItemStyle = (featured: boolean, included: boolean) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontSize: '13px',
  color: featured
    ? included ? 'rgba(255,255,255,.9)' : 'rgba(255,255,255,.35)'
    : included ? 'var(--ink-700)' : 'var(--ink-300)',
  fontWeight: 500,
})

const checkCircleStyle = (featured: boolean, included: boolean) => ({
  width: '18px',
  height: '18px',
  borderRadius: '50%',
  background: included
    ? featured ? 'rgba(255,255,255,.2)' : 'var(--primary-500)'
    : featured ? 'rgba(255,255,255,.06)' : 'var(--bg-inset)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
})

const limitStyle = (featured: boolean) => ({
  marginLeft: 'auto',
  fontSize: '11px',
  fontWeight: 600,
  color: featured ? 'rgba(255,255,255,.45)' : 'var(--ink-400)',
  whiteSpace: 'nowrap',
})

const ctaBtnStyle = (featured: boolean) => ({
  padding: '13px 20px',
  marginTop: '8px',
  width: '100%',
  borderRadius: '999px',
  fontSize: '14px',
  fontWeight: 700,
  cursor: 'pointer',
  border: featured ? 'none' : '1.5px solid var(--border-strong)',
  background: featured ? '#fff' : 'transparent',
  color: featured ? 'var(--primary-700)' : 'var(--ink-700)',
  boxShadow: featured ? '0 4px 12px rgba(0,0,0,.1)' : 'none',
  transition: 'opacity 160ms ease',
  fontFamily: 'var(--font-body)',
})
</script>

<style scoped>
@media (max-width: 860px) {
  .pricing-grid {
    grid-template-columns: 1fr !important;
    max-width: 440px;
    margin-left: auto;
    margin-right: auto;
  }
  .plan-card { margin-top: 0 !important; }
}
@media (max-width: 640px) {
  .pricing-grid { max-width: 100%; }
  .plan-card { padding: 24px !important; }
}
</style>
