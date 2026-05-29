<template>
  <section :style="{ paddingBottom: '96px' }">
    <div class="container" :style="{ textAlign: 'center' }">
      <h2 class="h1 reveal" :style="{ marginBottom: '40px' }">
        <span class="glyph">⚡</span> Pronto para Conquistar <span class="glyph">✦</span> o Seu Sorriso?
      </h2>
      <div
        class="card reveal"
        :style="{
          background: '#fff',
          padding: '20px 24px',
          borderRadius: '999px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '24px', maxWidth: '720px', margin: '0 auto',
          flexWrap: 'wrap',
        }"
      >
        <div :style="{ textAlign: 'left', flex: 1, minWidth: '280px' }">
          <div :style="{ fontSize: '15px', color: 'var(--ink-900)', fontWeight: 600, lineHeight: 1.4 }">
            Entre na onda da Clínica Dental. Comece grátis ou vá pro plano premium com 30 dias de teste.
          </div>
          <div :style="{ fontSize: '13px', color: 'var(--ink-400)', marginTop: '4px' }">
            Sem cartão. Cuidado de verdade, bem rápido.
          </div>
        </div>
        <button class="btn btn--primary" :style="{ padding: '14px 28px' }">
          Agendar Limpeza
        </button>
      </div>
    </div>
  </section>
</template>
