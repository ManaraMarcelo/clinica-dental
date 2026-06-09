<template>
  <section :style="{ padding: '40px 0' }">
    <div class="container">
      <div
        class="card reveal manifesto-card"
        :style="{
          padding: '72px 48px',
          textAlign: 'center',
          background: 'linear-gradient(180deg, var(--bg-card-hi) 0%, var(--bg-card) 100%)',
        }"
      >
        <h2 class="h1" :style="{ marginBottom: '20px' }">
          Problemas com cáries?.
          <br />A gente resolve!.
        </h2>
        <p class="lead" :style="{ maxWidth: '540px', margin: '0 auto', color: 'var(--ink-500)' }">
          Limpezas ruins, papelada sem fim, redes duvidosas? A Clínica Bluetooth entrega uma odontologia moderna
          e baseada em ciência que combina com o seu estilo de vida conectado. Fique saudável, não seja leiloado.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 640px) {
  .manifesto-card { padding: 40px 24px !important; }
}
@media (max-width: 480px) {
  .manifesto-card { padding: 32px 20px !important; }
}
</style>
