<template>
  <div>
    <AppNav />

    <section :style="pageStyle">
      <div class="container">

        <!-- Cabeçalho da página -->
        <div class="reveal" :style="headerStyle">
          <p class="eyebrow">Agendamento Online</p>
          <h1 class="h1" :style="{ marginTop: '12px', marginBottom: '16px' }">
            Marque sua consulta
          </h1>
          <p class="lead" :style="{ maxWidth: '480px', margin: '0 auto' }">
            Escolha o serviço, data e horário que melhor se encaixam na sua rotina. Confirmação imediata por WhatsApp.
          </p>
        </div>

        <!-- Steps indicator -->
        <div class="steps-indicator">
          <div
            v-for="(step, i) in steps"
            :key="i"
            class="step-item"
          >
            <div :style="stepCircleStyle(i)">
              <svg v-if="currentStep > i" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span v-else>{{ i + 1 }}</span>
            </div>
            <span class="step-label" :style="stepLabelStyle(i)">{{ step }}</span>
            <div v-if="i < steps.length - 1" class="step-line" />
          </div>
        </div>

        <!-- Layout: painel principal + resumo -->
        <div class="form-layout">

          <!-- Painel principal -->
          <div class="main-panel">

            <!-- PASSO 1: Serviço -->
            <div v-if="currentStep === 0">
              <h2 class="h3" :style="{ marginBottom: '8px' }">Qual serviço você precisa?</h2>
              <p class="p" :style="{ marginBottom: '28px' }">Selecione um dos serviços abaixo para continuar.</p>

              <div class="services-grid">
                <button
                  v-for="service in services"
                  :key="service.id"
                  :style="serviceCardStyle(service.id)"
                  @click="selectService(service.id)"
                >
                  <span class="service-icon" v-html="service.icon" />
                  <span :style="serviceNameStyle">{{ service.name }}</span>
                  <span :style="servicePriceStyle">{{ service.price }}</span>
                  <span :style="serviceDurationStyle">{{ service.duration }}</span>
                </button>
              </div>
            </div>

            <!-- PASSO 2: Data e Horário -->
            <div v-if="currentStep === 1">
              <h2 class="h3" :style="{ marginBottom: '8px' }">Escolha a data e horário</h2>
              <p class="p" :style="{ marginBottom: '28px' }">Horários disponíveis para os próximos 7 dias.</p>

              <!-- Seleção de datas -->
              <div :style="{ marginBottom: '32px' }">
                <p :style="dateLabelStyle">Data</p>
                <div class="dates-row">
                  <button
                    v-for="day in availableDays"
                    :key="day.value"
                    :style="dayButtonStyle(day.value)"
                    @click="selectedDate = day.value"
                  >
                    <span :style="{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7 }">{{ day.weekday }}</span>
                    <span :style="{ fontSize: '22px', fontWeight: 700, lineHeight: 1 }">{{ day.day }}</span>
                    <span :style="{ fontSize: '11px', opacity: 0.6 }">{{ day.month }}</span>
                  </button>
                </div>
              </div>

              <!-- Seleção de horários -->
              <div>
                <p :style="dateLabelStyle">Horário</p>
                <div class="time-slots-grid">
                  <button
                    v-for="slot in timeSlots"
                    :key="slot.time"
                    :style="timeSlotStyle(slot)"
                    :disabled="!slot.available"
                    @click="slot.available && (selectedTime = slot.time)"
                  >
                    {{ slot.time }}
                  </button>
                </div>
              </div>
            </div>

            <!-- PASSO 3: Dados pessoais -->
            <div v-if="currentStep === 2">
              <h2 class="h3" :style="{ marginBottom: '8px' }">Seus dados</h2>
              <p class="p" :style="{ marginBottom: '28px' }">Usamos apenas para confirmar sua consulta.</p>

              <div class="form-grid">
                <div :style="fieldGroupStyle">
                  <label :style="labelStyle">Nome completo</label>
                  <input
                    v-model="form.name"
                    class="input"
                    type="text"
                    placeholder="Ex: Maria Silva"
                  />
                </div>
                <div :style="fieldGroupStyle">
                  <label :style="labelStyle">WhatsApp</label>
                  <input
                    :value="form.phone"
                    class="input"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    maxlength="15"
                    @input="applyPhoneMask"
                  />
                </div>
                <div class="field-full" :style="fieldGroupStyle">
                  <label :style="labelStyle">E-mail</label>
                  <input
                    v-model="form.email"
                    class="input"
                    type="email"
                    placeholder="maria@email.com"
                  />
                </div>
                <div class="field-full" :style="fieldGroupStyle">
                  <label :style="labelStyle">Observações <span :style="{ color: 'var(--ink-300)', fontWeight: 400 }">(opcional)</span></label>
                  <textarea
                    v-model="form.notes"
                    class="input"
                    rows="3"
                    placeholder="Alguma informação importante para o dentista saber..."
                    :style="{ resize: 'vertical', minHeight: '90px' }"
                  />
                </div>
              </div>
            </div>

            <!-- PASSO 4: Confirmação -->
            <div v-if="currentStep === 3" :style="{ textAlign: 'center', padding: '24px 0 8px' }">
              <div :style="successIconStyle">✓</div>
              <h2 class="h2" :style="{ marginBottom: '12px' }">Consulta agendada!</h2>
              <p class="lead" :style="{ marginBottom: '32px' }">
                Você receberá uma confirmação no WhatsApp em instantes.
              </p>
              <div :style="confirmBoxStyle">
                <div :style="confirmRowStyle">
                  <span :style="confirmLabelStyle">Serviço</span>
                  <span :style="confirmValueStyle">{{ selectedServiceData?.name }}</span>
                </div>
                <div :style="confirmRowStyle">
                  <span :style="confirmLabelStyle">Data</span>
                  <span :style="confirmValueStyle">{{ selectedDateLabel }}</span>
                </div>
                <div :style="confirmRowStyle">
                  <span :style="confirmLabelStyle">Horário</span>
                  <span :style="confirmValueStyle">{{ selectedTime }}</span>
                </div>
                <div :style="confirmRowStyle">
                  <span :style="confirmLabelStyle">Paciente</span>
                  <span :style="confirmValueStyle">{{ form.name }}</span>
                </div>
              </div>
              <NuxtLink to="/">
                <button class="btn btn--ghost" :style="{ marginTop: '24px' }">
                  ← Voltar ao início
                </button>
              </NuxtLink>
            </div>

            <!-- Navegação entre passos -->
            <div v-if="currentStep < 3" class="nav-row" :style="navButtonsStyle">
              <button
                v-if="currentStep > 0"
                class="btn btn--ghost"
                @click="currentStep--"
              >
                ← Voltar
              </button>
              <span v-else />
              <button
                class="btn btn--primary"
                :disabled="!canProceed"
                :style="{ opacity: canProceed ? 1 : 0.45, cursor: canProceed ? 'pointer' : 'not-allowed' }"
                @click="advance"
              >
                {{ currentStep === 2 ? 'Confirmar agendamento →' : 'Continuar →' }}
              </button>
            </div>
          </div>

          <!-- Painel lateral: resumo -->
          <div class="summary-panel">
            <p :style="{ ...dateLabelStyle, marginBottom: '20px' }">Resumo do agendamento</p>

            <div v-if="selectedServiceData" :style="summaryItemStyle">
              <span class="summary-icon" v-html="selectedServiceData.icon" />
              <div>
                <p :style="{ fontWeight: 600, fontSize: '14px', color: 'var(--ink-900)', margin: 0 }">{{ selectedServiceData.name }}</p>
                <p class="meta">{{ selectedServiceData.duration }} · {{ selectedServiceData.price }}</p>
              </div>
            </div>
            <div v-else :style="summaryPlaceholderStyle">Nenhum serviço selecionado</div>

            <div v-if="selectedDate && selectedTime" :style="summaryItemStyle">
              <span class="summary-icon" v-html="iconCalendar" />
              <div>
                <p :style="{ fontWeight: 600, fontSize: '14px', color: 'var(--ink-900)', margin: 0 }">{{ selectedDateLabel }}</p>
                <p class="meta">às {{ selectedTime }}</p>
              </div>
            </div>
            <div v-else-if="!selectedDate" :style="summaryPlaceholderStyle">Nenhuma data selecionada</div>

            <div v-if="form.name" :style="summaryItemStyle">
              <span class="summary-icon" v-html="iconUser" />
              <div>
                <p :style="{ fontWeight: 600, fontSize: '14px', color: 'var(--ink-900)', margin: 0 }">{{ form.name }}</p>
                <p class="meta">{{ form.phone }}</p>
              </div>
            </div>

            <!-- Unidades -->
            <div :style="{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border)' }">
              <p :style="{ ...dateLabelStyle, marginBottom: '14px' }">Nossas unidades</p>
              <div v-for="unit in clinicUnits" :key="unit.name" :style="{ marginBottom: '12px' }">
                <p :style="{ fontSize: '13px', fontWeight: 600, color: 'var(--ink-700)', margin: '0 0 2px' }">{{ unit.name }}</p>
                <p class="meta">{{ unit.address }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Agendar Consulta — Clínica Bluetooth',
  description: 'Agende sua consulta online com confirmação imediata. Limpeza, clareamento, ortodontia e muito mais.',
})

useScrollReveal()

// ─── Estado ──────────────────────────────────────────────
const currentStep = ref(0)
const selectedService = ref<string | null>(null)
const selectedDate = ref<string | null>(null)
const selectedTime = ref<string | null>(null)

const form = reactive({ name: '', phone: '', email: '', notes: '' })

const steps = ['Serviço', 'Data & Hora', 'Seus dados', 'Confirmação']

// ─── Ícones SVG ───────────────────────────────────────────
const iconCalendar = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`

const iconUser = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`

// ─── Dados ────────────────────────────────────────────────
const services = [
  {
    id: 'limpeza',
    name: 'Limpeza Dental',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c-2.5 0-4.5 1.8-5 4-.4 1.8-.5 3.5-.5 5 0 2.2.5 3.8 1.3 4.7.3.4.7.5 1.1.4.5-.2.9-.7 1.3-1.5.3-.7.9-1.1 1.8-1.1s1.5.4 1.8 1.1c.4.8.8 1.3 1.3 1.5.4.1.8 0 1.1-.4.8-.9 1.3-2.5 1.3-4.7 0-1.5-.1-3.2-.5-5C16.5 3.8 14.5 2 12 2z"/></svg>`,
    price: 'R$ 150',
    duration: '45 min',
  },
  {
    id: 'clareamento',
    name: 'Clareamento',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`,
    price: 'R$ 450',
    duration: '60 min',
  },
  {
    id: 'ortodontia',
    name: 'Ortodontia',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2"/><path d="M6 20H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2"/><path d="M18 4h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><path d="M18 20h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"/><path d="M8 12h8"/></svg>`,
    price: 'R$ 280',
    duration: '30 min',
  },
  {
    id: 'implante',
    name: 'Implante Dental',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><path d="M12 8v11"/><path d="M9 11h6"/><path d="M8 19h8"/></svg>`,
    price: 'R$ 2.800',
    duration: '90 min',
  },
  {
    id: 'restauracao',
    name: 'Restauração',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    price: 'R$ 220',
    duration: '50 min',
  },
  {
    id: 'consulta',
    name: 'Consulta Geral',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="m9 12 2 2 4-4"/></svg>`,
    price: 'R$ 120',
    duration: '30 min',
  },
]

const clinicUnits = [
  { name: 'Unidade Paulista',  address: 'Av. Paulista, 1.500 – Bela Vista' },
  { name: 'Unidade Pinheiros', address: 'R. dos Pinheiros, 340 – Pinheiros' },
  { name: 'Unidade Moema',     address: 'Av. Ibirapuera, 2.907 – Moema' },
]

const availableDays = computed(() => {
  const days = []
  const weekdays = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb']
  const months   = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
  const today = new Date()
  for (let i = 1; i <= 7; i++) {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    days.push({
      value:   d.toISOString().split('T')[0],
      weekday: weekdays[d.getDay()],
      day:     d.getDate(),
      month:   months[d.getMonth()],
    })
  }
  return days
})

const timeSlots = [
  { time: '08:00', available: true  },
  { time: '09:00', available: true  },
  { time: '10:00', available: false },
  { time: '11:00', available: true  },
  { time: '13:00', available: false },
  { time: '14:00', available: true  },
  { time: '15:00', available: true  },
  { time: '16:00', available: true  },
  { time: '17:00', available: false },
  { time: '18:00', available: true  },
]

// ─── Computed ────────────────────────────────────────────
const selectedServiceData = computed(() =>
  services.find(s => s.id === selectedService.value) ?? null
)

const selectedDateLabel = computed(() => {
  if (!selectedDate.value) return ''
  const day = availableDays.value.find(d => d.value === selectedDate.value)
  return day ? `${day.weekday}, ${day.day} de ${day.month}` : selectedDate.value
})

const canProceed = computed(() => {
  if (currentStep.value === 0) return !!selectedService.value
  if (currentStep.value === 1) return !!selectedDate.value && !!selectedTime.value
  if (currentStep.value === 2) return !!(form.name && form.phone && form.email)
  return true
})

// ─── Ações ────────────────────────────────────────────────
const applyPhoneMask = (e: Event) => {
  const input = e.target as HTMLInputElement
  let digits = input.value.replace(/\D/g, '').slice(0, 11)
  let masked = ''
  if (digits.length === 0) {
    masked = ''
  } else if (digits.length <= 2) {
    masked = `(${digits}`
  } else if (digits.length <= 7) {
    masked = `(${digits.slice(0,2)}) ${digits.slice(2)}`
  } else {
    masked = `(${digits.slice(0,2)}) ${digits.slice(2,7)}-${digits.slice(7)}`
  }
  form.phone = masked
  input.value = masked
}

const selectService = (id: string) => { selectedService.value = id }

const advance = () => {
  if (canProceed.value) currentStep.value++
}

// ─── Estilos ─────────────────────────────────────────────
const pageStyle = {
  paddingTop: '128px',
  paddingBottom: '96px',
}

const headerStyle = {
  textAlign: 'center' as const,
  marginBottom: '52px',
}

const stepCircleStyle = (i: number) => ({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '13px',
  fontWeight: 700,
  flexShrink: 0,
  background: i < currentStep.value
    ? 'var(--primary-500)'
    : i === currentStep.value
      ? 'var(--primary-500)'
      : 'var(--bg-inset)',
  color: i <= currentStep.value ? '#fff' : 'var(--ink-400)',
  border: i === currentStep.value ? '2px solid var(--primary-300)' : '2px solid transparent',
  boxShadow: i === currentStep.value ? '0 0 0 3px rgba(110,91,255,.18)' : 'none',
  transition: 'all 240ms var(--ease-soft)',
})

const stepLabelStyle = (i: number) => ({
  fontSize: '13px',
  fontWeight: 600,
  color: i <= currentStep.value ? 'var(--ink-900)' : 'var(--ink-300)',
  whiteSpace: 'nowrap' as const,
  transition: 'color 240ms var(--ease-soft)',
})

const serviceCardStyle = (id: string) => ({
  background: selectedService.value === id ? 'var(--primary-50)' : 'var(--bg-card)',
  border: `2px solid ${selectedService.value === id ? 'var(--primary-500)' : 'var(--border)'}`,
  borderRadius: 'var(--radius)',
  padding: '20px 16px',
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  gap: '8px',
  cursor: 'pointer',
  transition: 'all 160ms var(--ease-soft)',
  boxShadow: selectedService.value === id ? '0 0 0 3px rgba(110,91,255,.12)' : 'none',
  textAlign: 'center' as const,
})

const serviceNameStyle = { fontSize: '14px', fontWeight: 600, color: 'var(--ink-900)' }
const servicePriceStyle = { fontSize: '13px', fontWeight: 700, color: 'var(--primary-500)' }
const serviceDurationStyle = { fontSize: '12px', color: 'var(--ink-400)' }

const dateLabelStyle = {
  fontSize: '12px',
  fontWeight: 700,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.07em',
  color: 'var(--ink-400)',
  marginBottom: '10px',
}

const dayButtonStyle = (val: string) => ({
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3px',
  minWidth: '64px',
  padding: '14px 10px',
  borderRadius: 'var(--radius)',
  border: `2px solid ${selectedDate.value === val ? 'var(--primary-500)' : 'var(--border)'}`,
  background: selectedDate.value === val ? 'var(--primary-50)' : '#fff',
  cursor: 'pointer',
  color: selectedDate.value === val ? 'var(--primary-700)' : 'var(--ink-700)',
  transition: 'all 160ms var(--ease-soft)',
  boxShadow: selectedDate.value === val ? '0 0 0 3px rgba(110,91,255,.12)' : 'none',
  flexShrink: 0,
})

const timeSlotStyle = (slot: { time: string; available: boolean }) => ({
  padding: '12px',
  borderRadius: 'var(--radius-sm)',
  border: `1.5px solid ${selectedTime.value === slot.time ? 'var(--primary-500)' : slot.available ? 'var(--border)' : 'transparent'}`,
  background: selectedTime.value === slot.time
    ? 'var(--primary-50)'
    : slot.available
      ? '#fff'
      : 'var(--bg-inset)',
  color: !slot.available
    ? 'var(--ink-300)'
    : selectedTime.value === slot.time
      ? 'var(--primary-700)'
      : 'var(--ink-700)',
  fontSize: '14px',
  fontWeight: 600,
  cursor: slot.available ? 'pointer' : 'not-allowed',
  textDecoration: !slot.available ? 'line-through' : 'none',
  transition: 'all 160ms var(--ease-soft)',
  textAlign: 'center' as const,
})

const fieldGroupStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '6px',
}

const labelStyle = {
  fontSize: '13px',
  fontWeight: 600,
  color: 'var(--ink-700)',
}

const navButtonsStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '36px',
  paddingTop: '24px',
  borderTop: '1px solid var(--border)',
}

const summaryItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '16px',
  padding: '14px',
  background: 'var(--bg-card-hi)',
  borderRadius: 'var(--radius)',
  boxShadow: 'var(--shadow-card)',
}

const summaryPlaceholderStyle = {
  fontSize: '13px',
  color: 'var(--ink-300)',
  fontStyle: 'italic',
  marginBottom: '16px',
  padding: '12px 14px',
  background: 'var(--bg-inset)',
  borderRadius: 'var(--radius-sm)',
}

// Confirmação
const successIconStyle = {
  width: '72px',
  height: '72px',
  borderRadius: '50%',
  background: 'var(--primary-500)',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '32px',
  margin: '0 auto 24px',
  boxShadow: 'var(--shadow-pop)',
}

const confirmBoxStyle = {
  background: 'var(--bg-card)',
  borderRadius: 'var(--radius)',
  padding: '20px 24px',
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '12px',
  textAlign: 'left' as const,
  maxWidth: '380px',
  margin: '0 auto',
}

const confirmRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '16px',
}

const confirmLabelStyle = {
  fontSize: '13px',
  color: 'var(--ink-400)',
  fontWeight: 500,
}

const confirmValueStyle = {
  fontSize: '14px',
  color: 'var(--ink-900)',
  fontWeight: 600,
  textAlign: 'right' as const,
}
</script>

<style scoped>
/* ── Steps indicator ─────────────────────────────────── */
.steps-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  margin-bottom: 48px;
  position: relative;
}

.step-item {
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
}

.step-line {
  width: 40px;
  height: 1px;
  background: var(--border);
  margin: 0 8px;
  flex-shrink: 0;
}

/* ── Layout ──────────────────────────────────────────── */
.form-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 24px;
  align-items: start;
}

.main-panel {
  background: var(--bg-card-hi);
  border-radius: var(--radius-lg);
  padding: 40px;
  box-shadow: var(--shadow-card);
  min-width: 0;
}

.summary-panel {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 28px;
  box-shadow: var(--shadow-card);
  position: sticky;
  top: 100px;
  min-width: 0;
}

/* ── Grids internos ──────────────────────────────────── */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.time-slots-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.field-full { grid-column: 1 / -1; }

.dates-row {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 4px;
  -webkit-overflow-scrolling: touch;
}

/* ── Ícones SVG ──────────────────────────────────────── */
.service-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-500);
}

.summary-icon {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-500);
}

/* ── Responsividade ──────────────────────────────────── */
@media (max-width: 900px) {
  .form-layout {
    grid-template-columns: 1fr;
  }

  .summary-panel {
    position: static;
    order: -1; /* Mostra resumo acima do formulário em tablet */
  }
}

@media (max-width: 640px) {
  .main-panel {
    padding: 24px 20px;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .time-slots-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .steps-indicator {
    margin-bottom: 32px;
  }

  .step-label {
    display: none;
  }

  .step-line {
    width: 24px;
    margin: 0 4px;
  }
}

@media (max-width: 480px) {
  section {
    padding-top: 96px !important;
    padding-bottom: 56px !important;
  }

  .summary-panel {
    padding: 20px 16px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .time-slots-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .nav-row {
    flex-direction: column-reverse;
    align-items: stretch !important;
    gap: 8px;
  }

  .nav-row .btn {
    justify-content: center;
  }
}
</style>
