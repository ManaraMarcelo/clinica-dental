<template>
  <div class="plan-tab">
    <!-- Cabeçalho -->
    <div class="tab-header">
      <h2 class="tab-title">Meu Plano</h2>
      <p class="tab-desc">Detalhes do seu plano odontológico atual.</p>
    </div>

    <!-- Card principal do plano -->
    <div class="plan-card">
      <div class="plan-card-bg" />
      <div class="plan-card-content">
        <div class="plan-top">
          <div>
            <span class="plan-badge plan-badge--premium">⭐ Premium</span>
            <h3 class="plan-name">Plano Odonto Premium</h3>
            <p class="plan-tagline">Cobertura completa para toda a família</p>
          </div>
          <div class="plan-price-block">
            <span class="plan-price">R$&nbsp;189</span>
            <span class="plan-price-period">/mês</span>
          </div>
        </div>

        <!-- Métricas -->
        <div class="plan-metrics">
          <div v-for="metric in metrics" :key="metric.label" class="metric-item">
            <div class="metric-icon" v-html="metric.icon" />
            <div>
              <p class="metric-value">{{ metric.value }}</p>
              <p class="metric-label">{{ metric.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Progresso de uso -->
    <div class="usage-section">
      <h3 class="section-title">Uso mensal</h3>
      <div class="usage-list">
        <div v-for="item in usageItems" :key="item.label" class="usage-item">
          <div class="usage-header">
            <span class="usage-label">{{ item.label }}</span>
            <span class="usage-count">{{ item.used }} / {{ item.total }}</span>
          </div>
          <div class="usage-bar-bg">
            <div
              class="usage-bar-fill"
              :style="{ width: `${(item.used / item.total) * 100}%`, background: item.color }"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Coberturas -->
    <div class="coverage-section">
      <h3 class="section-title">Procedimentos cobertos</h3>
      <div class="coverage-grid">
        <div
          v-for="cov in coverages"
          :key="cov.label"
          class="coverage-item"
          :class="{ 'coverage-item--included': cov.included }"
        >
          <span class="coverage-icon">{{ cov.included ? '✓' : '✕' }}</span>
          <span class="coverage-label">{{ cov.label }}</span>
          <span v-if="cov.limit" class="coverage-limit">{{ cov.limit }}</span>
        </div>
      </div>
    </div>

    <!-- CTA Upgrade -->
    <div class="upgrade-banner">
      <div>
        <p class="upgrade-title">Conheça o Plano Família</p>
        <p class="upgrade-desc">Adicione até 4 dependentes com 30% de desconto.</p>
      </div>
      <button class="btn btn--primary" style="font-size: 14px; padding: 11px 22px; flex-shrink: 0;">
        Ver upgrade →
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const metrics = [
  {
    label: 'Validade',
    value: 'Dez 2025',
    icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M2 8h16M7 2v4M13 2v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  },
  {
    label: 'Dependentes',
    value: '0 / 4',
    icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="8" cy="6" r="3" stroke="currentColor" stroke-width="1.5"/><path d="M2 17c0-3.866 2.686-6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="15" cy="10" r="2.5" stroke="currentColor" stroke-width="1.5"/><path d="M11 18c0-2.761 1.791-4 4-4s4 1.239 4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  },
  {
    label: 'Reembolsos restantes',
    value: '3 / 4',
    icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2v4M10 14v4M2 10h4M14 10h4M4.2 4.2l2.8 2.8M13 13l2.8 2.8M4.2 15.8l2.8-2.8M13 7l2.8-2.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  },
]

const usageItems = [
  { label: 'Consultas de Rotina', used: 2, total: 4, color: 'var(--primary-500)' },
  { label: 'Limpezas (Profilaxia)', used: 1, total: 2, color: 'var(--glyph-cyan)' },
  { label: 'Radiografias', used: 0, total: 6, color: 'var(--glyph-amber)' },
]

const coverages = [
  { label: 'Consultas de rotina', included: true, limit: '4x/ano' },
  { label: 'Limpeza e profilaxia', included: true, limit: '2x/ano' },
  { label: 'Radiografias', included: true, limit: '6x/ano' },
  { label: 'Clareamento dental', included: true, limit: '1x/ano' },
  { label: 'Ortodontia (braces)', included: true, limit: 'até R$ 3.000' },
  { label: 'Implantes dentários', included: true, limit: 'até R$ 2.500' },
  { label: 'Cirurgia bucomaxilar', included: false },
  { label: 'Próteses totais', included: false },
]
</script>

<style scoped>
.plan-tab { display: flex; flex-direction: column; gap: 24px; }

.tab-header { padding-bottom: 20px; border-bottom: 1px solid var(--border); }
.tab-title {
  font-family: var(--font-display);
  font-size: 22px; font-weight: 700;
  letter-spacing: -0.02em; color: var(--ink-900); margin: 0 0 6px;
}
.tab-desc { font-size: 14px; color: var(--ink-400); margin: 0; }

/* Plan card */
.plan-card {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  padding: 28px;
  min-height: 160px;
}
.plan-card-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--primary-600) 0%, var(--primary-800) 60%, #2a1f7a 100%);
}
.plan-card-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 80% 20%, rgba(164, 150, 255, .35), transparent 60%),
    radial-gradient(circle at 20% 80%, rgba(110, 219, 224, .2), transparent 50%);
}
.plan-card-content { position: relative; z-index: 1; }

.plan-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  gap: 16px;
}

.plan-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.plan-badge--premium {
  background: rgba(255, 220, 100, .2);
  color: #FFD966;
  border: 1px solid rgba(255, 220, 100, .3);
}

.plan-name {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 4px;
}
.plan-tagline { font-size: 13px; color: rgba(255,255,255,.65); margin: 0; }

.plan-price-block { text-align: right; flex-shrink: 0; }
.plan-price {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 800;
  color: #fff;
  display: block;
  line-height: 1;
}
.plan-price-period { font-size: 13px; color: rgba(255,255,255,.6); }

.plan-metrics {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.metric-item {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255,255,255,.1);
  border: 1px solid rgba(255,255,255,.15);
  border-radius: var(--radius);
  padding: 10px 16px;
  flex: 1;
  min-width: 140px;
}
.metric-icon { color: rgba(255,255,255,.8); flex-shrink: 0; }
.metric-value { font-size: 15px; font-weight: 700; color: #fff; margin: 0 0 2px; }
.metric-label { font-size: 11px; color: rgba(255,255,255,.6); margin: 0; }

/* Usage */
.usage-section {
  background: var(--bg-card-hi);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 24px;
}
.section-title {
  font-family: var(--font-display);
  font-size: 15px; font-weight: 700;
  color: var(--ink-900); margin: 0 0 18px;
}
.usage-list { display: flex; flex-direction: column; gap: 14px; }
.usage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
}
.usage-label { font-size: 14px; font-weight: 500; color: var(--ink-700); }
.usage-count { font-size: 13px; font-weight: 600; color: var(--ink-400); }
.usage-bar-bg {
  height: 6px;
  border-radius: 999px;
  background: var(--bg-inset);
  overflow: hidden;
}
.usage-bar-fill {
  height: 100%;
  border-radius: 999px;
  transition: width 0.8s var(--ease-soft);
}

/* Coverage */
.coverage-section {
  background: var(--bg-card-hi);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 24px;
}
.coverage-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.coverage-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  background: var(--bg-inset);
  border: 1px solid transparent;
}
.coverage-item--included {
  background: rgba(31, 138, 91, .06);
  border-color: rgba(31, 138, 91, .15);
}
.coverage-icon {
  font-size: 13px;
  font-weight: 700;
  width: 20px;
  text-align: center;
  flex-shrink: 0;
}
.coverage-item--included .coverage-icon { color: var(--success); }
.coverage-item:not(.coverage-item--included) .coverage-icon { color: var(--ink-300); }
.coverage-label { font-size: 13px; font-weight: 500; color: var(--ink-700); flex: 1; }
.coverage-limit {
  font-size: 11px;
  font-weight: 600;
  color: var(--glyph-mint);
  background: rgba(46, 165, 114, .1);
  padding: 2px 8px;
  border-radius: var(--radius-pill);
  white-space: nowrap;
}

/* Upgrade banner */
.upgrade-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 24px;
  background: linear-gradient(135deg, var(--primary-50), #fff);
  border: 1px solid var(--primary-100);
  border-radius: var(--radius-md);
}
.upgrade-title {
  font-family: var(--font-display);
  font-size: 15px; font-weight: 700; color: var(--ink-900); margin: 0 0 4px;
}
.upgrade-desc { font-size: 13px; color: var(--ink-500); margin: 0; }

@media (max-width: 640px) {
  .coverage-grid { grid-template-columns: 1fr; }
  .plan-top { flex-direction: column; }
  .upgrade-banner { flex-direction: column; align-items: flex-start; }
}
</style>
