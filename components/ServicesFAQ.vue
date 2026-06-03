<template>
  <section :style="{ paddingBottom: '96px' }">
    <div :style="{ maxWidth: '720px', margin: '0 auto', padding: '0 var(--gutter)' }">
      <div class="reveal" :style="headerStyle">
        <span :style="eyebrowStyle">Dúvidas frequentes</span>
        <h2 class="h2">Perguntas sobre os Serviços</h2>
      </div>
      <div :style="{ display: 'flex', flexDirection: 'column', gap: '8px' }">
        <div
          v-for="(faq, i) in faqs"
          :key="faq.q"
          class="card reveal"
          :style="{ padding: '0', overflow: 'hidden' }"
        >
          <button :style="questionStyle" @click="toggle(i)">
            <span>{{ faq.q }}</span>
            <div :style="chevronStyle(open === i)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>
          </button>
          <div :style="answerWrapStyle(open === i)">
            <p :style="answerStyle">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const open = ref<number | null>(null)

const toggle = (i: number) => {
  open.value = open.value === i ? null : i
}

const faqs = [
  {
    q: 'Quais convênios são aceitos pela Clínica Dental?',
    a: 'Além do nosso próprio plano odontológico, aceitamos os principais convênios do mercado, incluindo Amil, SulAmérica, Bradesco Saúde, Unimed e Porto Seguro. Entre em contato para verificar a cobertura específica do seu plano.',
  },
  {
    q: 'Quanto tempo dura uma sessão de clareamento?',
    a: 'Nosso protocolo de clareamento a laser dura aproximadamente 60 minutos em sessão única. Você sai com o sorriso até 8 tons mais branco. Para quem prefere moldeiras personalizadas, disponibilizamos kit para uso em casa por 10 a 14 dias.',
  },
  {
    q: 'Implante dentário é doloroso? Qual é o tempo de recuperação?',
    a: 'O procedimento é realizado com anestesia local, por isso você não sente dor durante a cirurgia. Após a cirurgia, é normal um desconforto leve por 2 a 3 dias, controlado com analgésicos comuns. A osseointegração completa leva de 3 a 6 meses, mas a função mastigatória é restaurada muito antes disso.',
  },
  {
    q: 'A clínica atende crianças? A partir de qual idade?',
    a: 'Sim. Nossa equipe de odontopediatria atende crianças a partir dos 12 meses, seguindo a orientação da primeira consulta ao dentista com o surgimento do primeiro dente de leite. O ambiente é pensado para deixar os pequenos à vontade, com atendimento especializado e acolhedor.',
  },
  {
    q: 'Como funciona o atendimento de emergência 24h?',
    a: 'Assinantes do plano Premium têm acesso ao canal de emergência 24h via app. Em casos de dor aguda, fratura ou perda de dente, um dentista de plantão avalia o caso remotamente e agenda atendimento presencial com prioridade — geralmente no mesmo dia.',
  },
  {
    q: 'Posso parcelar o tratamento?',
    a: 'Sim. Para tratamentos não cobertos pelo plano ou que excedam o limite da cobertura, oferecemos parcelamento em até 12x sem juros no cartão de crédito. Também trabalhamos com financiamento via parceiros financeiros. Consulte nossa equipe para simular o valor.',
  },
]

const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  alignItems: 'center',
  textAlign: 'center',
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

const questionStyle = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  padding: '20px 24px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '15px',
  fontWeight: 600,
  color: 'var(--ink-900)',
  textAlign: 'left',
  fontFamily: 'var(--font-body)',
}

const chevronStyle = (isOpen: boolean) => ({
  color: isOpen ? 'var(--primary-500)' : 'var(--ink-400)',
  transition: 'transform 240ms var(--ease-soft), color 160ms ease',
  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  flexShrink: 0,
  display: 'flex',
})

const answerWrapStyle = (isOpen: boolean) => ({
  maxHeight: isOpen ? '400px' : '0',
  overflow: 'hidden',
  transition: 'max-height 360ms var(--ease-soft)',
})

const answerStyle = {
  padding: '0 24px 20px',
  fontSize: '14px',
  lineHeight: '1.7',
  color: 'var(--ink-500)',
  margin: '0',
}
</script>

<style scoped>
@media (max-width: 640px) {
  button { font-size: 14px !important; padding: 16px 20px !important; }
  p { padding: 0 20px 18px !important; }
}
</style>
