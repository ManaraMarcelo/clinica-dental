<template>
  <section :style="{ padding: '40px 0 96px' }">
    <div class="container" :style="{ textAlign: 'center', marginBottom: '48px' }">
      <h2 class="h1 reveal">
        Encontre a Clínica Dental <span class="glyph">✦</span>
        <br />Onde <span class="glyph">📍</span> Você Estiver
      </h2>
      <p class="lead reveal" :style="{ maxWidth: '520px', margin: '20px auto 0' }">
        Três unidades em São Paulo e uma no seu bolso. Escolha o ambiente, agende o horário.
      </p>
    </div>

    <div class="container reveal">
      <div class="card" :style="{ padding: '16px', background: 'var(--bg-card)' }">
        <!-- Abas -->
        <div :style="tabStrip">
          <button
            v-for="loc in locations"
            :key="loc.id"
            @click="active = loc.id"
            :style="tabStyle(loc.id)"
          >
            <span>{{ loc.icon }}</span>{{ loc.label }}
          </button>
        </div>

        <!-- Painel principal -->
        <div :style="dashGrid">
          <!-- Barra lateral -->
          <aside :style="sidebarStyle">
            <div :style="{ display: 'flex', gap: '6px', marginBottom: '18px' }">
              <span :style="{ width: '10px', height: '10px', borderRadius: '999px', background: '#D14B4B' }" />
              <span :style="{ width: '10px', height: '10px', borderRadius: '999px', background: '#FFD58A' }" />
              <span :style="{ width: '10px', height: '10px', borderRadius: '999px', background: 'var(--success)' }" />
            </div>
            <div :style="{ fontSize: '11px', color: 'var(--ink-400)', fontFamily: 'var(--font-mono)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '8px' }">
              Agenda
            </div>
            <div :style="{ display: 'flex', flexDirection: 'column', gap: '2px' }">
              <div
                v-for="(slot, i) in scheduleSlots"
                :key="i"
                :style="{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '12px', background: i === 0 ? '#fff' : 'transparent' }"
              >
                <span
                  v-if="slot.color"
                  :style="{ width: '14px', height: '14px', borderRadius: '50%', background: slot.color }"
                />
                <span
                  v-else
                  :style="{ width: '10px', height: '10px', borderRadius: '50%', background: slot.dot, marginLeft: '2px', marginRight: '2px' }"
                />
                <span :style="{ fontSize: '13.5px', color: 'var(--ink-700)', fontWeight: 500, flex: 1 }">{{ slot.name }}</span>
                <span :style="{ fontSize: '11px', color: 'var(--ink-400)', fontFamily: 'var(--font-mono)' }">{{ slot.count }}</span>
              </div>
            </div>
          </aside>

          <!-- Principal -->
          <main :style="{ padding: '24px' }">
            <div :style="{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '18px' }">
              <h3 :style="{ fontSize: '19px', fontWeight: 700 }">Hoje · {{ currentLoc.label }}</h3>
              <span :style="{ fontSize: '12px', color: 'var(--ink-400)', fontFamily: 'var(--font-mono)' }">{{ currentLoc.address }}</span>
            </div>
            <div :style="progressBar">
              <div :style="{ width: '46%', background: 'var(--success)' }" />
              <div :style="{ width: '32%', background: '#FFD58A' }" />
              <div :style="{ width: '22%', background: '#D14B4B' }" />
            </div>
            <div :style="{ display: 'flex', gap: '14px', fontSize: '11px', color: 'var(--ink-400)', marginBottom: '20px', fontFamily: 'var(--font-mono)' }">
              <span>● livres 18</span><span>● reservados 12</span><span>● agendados 8</span>
            </div>
            <div :style="{ display: 'flex', flexDirection: 'column', gap: '8px' }">
              <div
                v-for="appt in appointments"
                :key="appt.tag"
                :style="{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', borderRadius: '12px', background: 'var(--bg-card)' }"
              >
                <div :style="{ width: '32px', height: '32px', borderRadius: '8px', background: `linear-gradient(135deg, ${appt.g})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px' }">{{ appt.logo }}</div>
                <div :style="{ fontSize: '14px', color: 'var(--ink-900)', fontWeight: 500, flex: 1 }">{{ appt.who }}</div>
                <div :style="{ fontSize: '12px', color: 'var(--ink-400)', fontFamily: 'var(--font-mono)' }">{{ appt.tag }}</div>
              </div>
            </div>
          </main>

          <!-- Painel direito -->
          <aside :style="rightPanel">
            <div :style="rightPanelIcon">🦷</div>
            <div :style="{ fontSize: '12px', color: 'var(--ink-400)', fontFamily: 'var(--font-mono)' }">{{ currentLoc.hours }}</div>
            <div :style="{ fontSize: '17px', fontWeight: 700, marginTop: '4px', marginBottom: '18px', color: 'var(--ink-900)' }">
              Próximo horário · 9:30
            </div>
            <div :style="{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }">
              <div
                v-for="row in currentRows"
                :key="row.label"
                :style="{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }"
              >
                <span :style="{ color: 'var(--ink-400)' }">{{ row.label }}</span>
                <span :style="{ color: 'var(--ink-900)', fontWeight: 500, fontFamily: 'var(--font-mono)', fontSize: '11.5px' }">{{ row.value }}</span>
              </div>
            </div>
            <div :style="warningBadge">
              <span :style="{ width: '8px', height: '8px', borderRadius: '999px', background: 'var(--warning)' }" />
              <span :style="{ fontSize: '12.5px', color: 'var(--ink-700)' }">Recomendamos atualizar o raio-X</span>
              <span :style="{ marginLeft: 'auto', fontSize: '11px', color: 'var(--primary-500)', fontWeight: 600, cursor: 'pointer' }">Agendar</span>
            </div>
          </aside>
        </div>
      </div>

      <div :style="{ textAlign: 'center', marginTop: '32px' }">
        <button class="btn btn--primary" :style="{ padding: '16px 28px' }">
          Agendar em {{ currentLoc.label }} <span aria-hidden="true">→</span>
        </button>
        <div :style="{ marginTop: '12px', fontSize: '12px', color: 'var(--ink-400)' }">
          Primeira consulta grátis · todos os planos aceitos
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const locations = [
  { id: 'downtown',  label: 'Centro',     icon: '🏙️', address: 'R. Augusta, 1240 · São Paulo',       hours: 'Seg–Sáb · 8h–21h',  chair: 'Sala 03 · Dra. Aline'  },
  { id: 'jardins',   label: 'Jardins',    icon: '🌿', address: 'Al. Lorena, 880 · São Paulo',         hours: 'Seg–Sex · 9h–19h',  chair: 'Sala 01 · Dr. Bruno'   },
  { id: 'pinheiros', label: 'Pinheiros',  icon: '🎨', address: 'R. dos Pinheiros, 412 · São Paulo',   hours: 'Ter–Dom · 10h–20h', chair: 'Sala 02 · Dra. Camila' },
  { id: 'remote',    label: 'Tele-Sorriso', icon: '📱', address: 'Consultas por vídeo · em qualquer lugar', hours: '7 dias · 7h–23h', chair: 'Assíncrono · resposta em 24h' },
]

const scheduleSlots = [
  { name: 'Todos os horários', count: 38, color: 'linear-gradient(90deg,#6E5BFF,#FF6EC4,#FFD58A,#6EDBE0,#B7F0C6)' },
  { name: 'Livres',            count: 18, dot: 'var(--success)' },
  { name: 'Reservados',        count: 12, dot: '#FFD58A' },
  { name: 'Agendados',         count: 8,  dot: '#D14B4B' },
]

const appointments = [
  { who: 'Limpeza · Jamie',          tag: '09:30', logo: '🦷', g: '#8A6BFF,#FF6EC4' },
  { who: 'Clareamento · Priya',      tag: '10:15', logo: '💎', g: '#6EDBE0,#8A6BFF' },
  { who: 'Consulta implante · Leo',  tag: '11:00', logo: '✦',  g: '#FFD58A,#A496FF' },
  { who: 'Alinhadores · Mira',       tag: '11:45', logo: '✧',  g: '#B7F0C6,#6EDBE0' },
]

const active = ref('downtown')

const currentLoc = computed(() => locations.find(l => l.id === active.value)!)
const currentRows = computed(() => [
  { label: 'Dentista',       value: currentLoc.value.chair },
  { label: 'Paciente',       value: 'ryan.kelly@email.com' },
  { label: 'Plano de saúde', value: 'Bradesco Saúde' },
  { label: 'Última visita',  value: 'há 4 meses' },
])

const tabStyle = (id: string) => ({
  border: 'none',
  cursor: 'pointer',
  padding: '10px 20px',
  borderRadius: '999px',
  fontSize: '14px',
  fontWeight: 600,
  background: active.value === id ? '#fff' : 'transparent',
  color: active.value === id ? 'var(--ink-900)' : 'var(--ink-500)',
  boxShadow: active.value === id ? 'var(--shadow-card)' : 'none',
  transition: 'all 200ms var(--ease-soft)',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontFamily: 'var(--font-body)',
})

const tabStrip = {
  display: 'flex', gap: '4px', padding: '6px',
  background: 'var(--bg-inset)', borderRadius: '999px',
  width: 'fit-content', margin: '0 auto 24px',
}

const dashGrid = {
  background: '#fff',
  borderRadius: '12px',
  overflow: 'hidden',
  display: 'grid',
  gridTemplateColumns: '240px 1fr 320px',
  minHeight: '420px',
  boxShadow: 'var(--shadow-card)',
}

const sidebarStyle = {
  padding: '20px',
  borderRight: '1px solid var(--border)',
  background: 'var(--bg-card)',
}

const progressBar = {
  height: '8px', borderRadius: '999px', overflow: 'hidden', marginBottom: '6px',
  background: 'var(--bg-inset)', display: 'flex',
}

const rightPanel = {
  padding: '24px',
  background: 'linear-gradient(180deg, var(--bg-card), #fff)',
  borderLeft: '1px solid var(--border)',
}

const rightPanelIcon = {
  width: '56px', height: '56px',
  borderRadius: '12px',
  background: 'linear-gradient(160deg, #8A6BFF, #6E5BFF)',
  marginBottom: '16px',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: '#fff', fontSize: '24px',
  boxShadow: 'var(--shadow-pop)',
}

const warningBadge = {
  background: '#FFF3EE', borderRadius: '12px',
  padding: '10px 14px',
  display: 'flex', alignItems: 'center', gap: '8px',
  marginBottom: '18px',
}
</script>
