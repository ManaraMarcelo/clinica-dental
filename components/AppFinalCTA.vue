<template>
  <section :style="{ paddingBottom: '96px' }">
    <div class="container" :style="{ textAlign: 'center' }">
      <h2 class="h1 reveal" :style="{ marginBottom: '40px' }">
        Pronto para conquistar o seu novo sorriso?
      </h2>
      <div class="card reveal cta-card" :style="{
        background: '#fff',
        padding: '20px 24px',
        borderRadius: '999px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: '24px', maxWidth: '720px', margin: '0 auto',
        flexWrap: 'wrap',
      }">
        <div class="cta-text" :style="{ textAlign: 'left', flex: 1, minWidth: 0 }">
          <div :style="{ fontSize: '15px', color: 'var(--ink-900)', fontWeight: 600, lineHeight: 1.4 }">
            Entre na onda da clínica Bluetooth. Comece grátis ou vá pro plano premium com 30 dias de teste.
          </div>
          <div :style="{ fontSize: '13px', color: 'var(--ink-400)', marginTop: '4px' }">
            Sem cartão. Cuidado de verdade, bem rápido.
          </div>
        </div>
        <NuxtLink to="/agendar">
          <button class="btn btn--primary" :style="{ padding: '14px 28px' }">
            Agendar Limpeza
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 600px) {
  .cta-card {
    border-radius: var(--radius-lg) !important;
    flex-direction: column !important;
    text-align: center !important;
    padding: 28px 24px !important;
    align-items: stretch !important;
  }
  .cta-text { text-align: center !important; }
  .cta-card .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
