<template>
  <section :style="{ padding: '40px 0 96px' }">
    <div class="container" :style="{ textAlign: 'center', marginBottom: '48px' }">
      <h2 class="h1 reveal">
        Find Dental Clinic <span class="glyph">✦</span>
        <br />Wherever <span class="glyph">📍</span> You Are
      </h2>
      <p class="lead reveal" :style="{ maxWidth: '520px', margin: '20px auto 0' }">
        Three rooms in São Paulo and one in your pocket. Pick the vibe, book the slot.
      </p>
    </div>

    <div class="container reveal">
      <div class="card" :style="{ padding: '16px', background: 'var(--bg-card)' }">
        <!-- Tab strip -->
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

        <!-- Mock dashboard -->
        <div :style="dashGrid">
          <!-- Sidebar -->
          <aside :style="sidebarStyle">
            <div :style="{ display: 'flex', gap: '6px', marginBottom: '18px' }">
              <span :style="{ width: '10px', height: '10px', borderRadius: '999px', background: '#D14B4B' }" />
              <span :style="{ width: '10px', height: '10px', borderRadius: '999px', background: '#FFD58A' }" />
              <span :style="{ width: '10px', height: '10px', borderRadius: '999px', background: 'var(--success)' }" />
            </div>
            <div :style="{ fontSize: '11px', color: 'var(--ink-400)', fontFamily: 'var(--font-mono)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '8px' }">
              Schedule
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

          <!-- Main -->
          <main :style="{ padding: '24px' }">
            <div :style="{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '18px' }">
              <h3 :style="{ fontSize: '19px', fontWeight: 700 }">Today · {{ currentLoc.label }}</h3>
              <span :style="{ fontSize: '12px', color: 'var(--ink-400)', fontFamily: 'var(--font-mono)' }">{{ currentLoc.address }}</span>
            </div>
            <div :style="progressBar">
              <div :style="{ width: '46%', background: 'var(--success)' }" />
              <div :style="{ width: '32%', background: '#FFD58A' }" />
              <div :style="{ width: '22%', background: '#D14B4B' }" />
            </div>
            <div :style="{ display: 'flex', gap: '14px', fontSize: '11px', color: 'var(--ink-400)', marginBottom: '20px', fontFamily: 'var(--font-mono)' }">
              <span>● open 18</span><span>● held 12</span><span>● booked 8</span>
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

          <!-- Right panel -->
          <aside :style="rightPanel">
            <div :style="rightPanelIcon">🦷</div>
            <div :style="{ fontSize: '12px', color: 'var(--ink-400)', fontFamily: 'var(--font-mono)' }">{{ currentLoc.hours }}</div>
            <div :style="{ fontSize: '17px', fontWeight: 700, marginTop: '4px', marginBottom: '18px', color: 'var(--ink-900)' }">
              Next slot · 9:30
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
              <span :style="{ fontSize: '12.5px', color: 'var(--ink-700)' }">Recommend X-ray refresh</span>
              <span :style="{ marginLeft: 'auto', fontSize: '11px', color: 'var(--primary-500)', fontWeight: 600, cursor: 'pointer' }">Schedule</span>
            </div>
          </aside>
        </div>
      </div>

      <div :style="{ textAlign: 'center', marginTop: '32px' }">
        <button class="btn btn--primary" :style="{ padding: '16px 28px' }">
          Book at {{ currentLoc.label }} <span aria-hidden="true">→</span>
        </button>
        <div :style="{ marginTop: '12px', fontSize: '12px', color: 'var(--ink-400)' }">
          Free first consult · all insurance accepted
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const locations = [
  { id: 'downtown',  label: 'Downtown',   icon: '🏙️', address: 'R. Augusta, 1240 · São Paulo',       hours: 'Mon–Sat · 8a–9p',  chair: 'Chair 03 · Dr. Aline'  },
  { id: 'jardins',   label: 'Jardins',    icon: '🌿', address: 'Al. Lorena, 880 · São Paulo',         hours: 'Mon–Fri · 9a–7p',  chair: 'Chair 01 · Dr. Bruno'  },
  { id: 'pinheiros', label: 'Pinheiros',  icon: '🎨', address: 'R. dos Pinheiros, 412 · São Paulo',   hours: 'Tue–Sun · 10a–8p', chair: 'Chair 02 · Dr. Camila' },
  { id: 'remote',    label: 'Tele-Smile', icon: '📱', address: 'Video consults · anywhere',           hours: '7 days · 7a–11p',  chair: 'Async · 24h response'  },
]

const scheduleSlots = [
  { name: 'All slots', count: 38, color: 'linear-gradient(90deg,#6E5BFF,#FF6EC4,#FFD58A,#6EDBE0,#B7F0C6)' },
  { name: 'Open',      count: 18, dot: 'var(--success)' },
  { name: 'Held',      count: 12, dot: '#FFD58A' },
  { name: 'Booked',    count: 8,  dot: '#D14B4B' },
]

const appointments = [
  { who: 'Cleaning · Jamie',       tag: '09:30', logo: '🦷', g: '#8A6BFF,#FF6EC4' },
  { who: 'Whitening · Priya',      tag: '10:15', logo: '💎', g: '#6EDBE0,#8A6BFF' },
  { who: 'Implant consult · Leo',  tag: '11:00', logo: '✦',  g: '#FFD58A,#A496FF' },
  { who: 'Aligners · Mira',        tag: '11:45', logo: '✧',  g: '#B7F0C6,#6EDBE0' },
]

const active = ref('downtown')

const currentLoc = computed(() => locations.find(l => l.id === active.value)!)
const currentRows = computed(() => [
  { label: 'Doctor',    value: currentLoc.value.chair },
  { label: 'Patient',   value: 'ryan.kelly@email.com' },
  { label: 'Insurance', value: 'Bradesco Saúde' },
  { label: 'Last visit',value: '4 months ago' },
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
