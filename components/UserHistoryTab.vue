<template>
  <div class="history-tab">
    <!-- Cabeçalho -->
    <div class="tab-header">
      <div>
        <h2 class="tab-title">Histórico de Consultas</h2>
        <p class="tab-desc">Acompanhe todos os seus atendimentos e procedimentos.</p>
      </div>
      <!-- Filtro mock -->
      <div class="filter-group">
        <button
          v-for="f in filters"
          :key="f.value"
          class="filter-btn"
          :class="{ active: activeFilter === f.value }"
          @click="activeFilter = f.value"
        >
          {{ f.label }}
        </button>
      </div>
    </div>

    <!-- Estatísticas rápidas -->
    <div class="stats-row">
      <div v-for="stat in stats" :key="stat.label" class="stat-card">
        <span class="stat-value" :style="{ color: stat.color }">{{ stat.value }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </div>
    </div>

    <!-- Timeline -->
    <div class="timeline">
      <div
        v-for="(item, i) in filteredHistory"
        :key="item.id"
        class="timeline-item"
        :class="{ 'timeline-item--last': i === filteredHistory.length - 1 }"
      >
        <!-- Linha e bolinha -->
        <div class="timeline-spine">
          <div class="timeline-dot" :style="{ background: statusColor(item.status) }">
            <span v-html="item.icon" />
          </div>
          <div v-if="i < filteredHistory.length - 1" class="timeline-line" />
        </div>

        <!-- Conteúdo -->
        <div class="timeline-card">
          <div class="timeline-card-header">
            <div>
              <span :class="['status-badge', `status-badge--${item.status}`]">
                {{ statusLabel(item.status) }}
              </span>
              <h4 class="timeline-procedure">{{ item.procedure }}</h4>
              <p class="timeline-doctor">Dr(a). {{ item.doctor }} · {{ item.specialty }}</p>
            </div>
            <div class="timeline-date-block">
              <p class="timeline-date">{{ formatDate(item.date) }}</p>
              <p class="timeline-time">{{ item.time }}</p>
            </div>
          </div>
          <div v-if="item.notes" class="timeline-notes">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1" y="1" width="11" height="11" rx="2" stroke="currentColor" stroke-width="1.2"/><path d="M3.5 4.5h6M3.5 6.5h6M3.5 8.5h4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
            {{ item.notes }}
          </div>
          <div v-if="item.status === 'agendado'" class="timeline-actions">
            <button class="action-btn action-btn--cancel">Cancelar</button>
            <button class="action-btn action-btn--reschedule">Reagendar</button>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-if="filteredHistory.length === 0" class="empty-state">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" stroke="var(--border-strong)" stroke-width="2"/><path d="M16 24h16M24 16v16" stroke="var(--ink-200)" stroke-width="2" stroke-linecap="round"/></svg>
        <p>Nenhuma consulta encontrada neste filtro.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeFilter = ref('todos')

const filters = [
  { label: 'Todos', value: 'todos' },
  { label: 'Concluídos', value: 'concluido' },
  { label: 'Agendados', value: 'agendado' },
  { label: 'Cancelados', value: 'cancelado' },
]

const history = [
  {
    id: 1,
    date: '2025-06-20',
    time: '10:00',
    procedure: 'Consulta de Retorno',
    doctor: 'Amanda Souza',
    specialty: 'Dentista Geral',
    status: 'agendado',
    notes: null,
    icon: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="4" r="2" stroke="currentColor" stroke-width="1.4"/><path d="M2 10c0-2.21 1.79-3.5 4-3.5s4 1.29 4 3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  },
  {
    id: 2,
    date: '2025-05-14',
    time: '14:30',
    procedure: 'Clareamento Dental (2ª sessão)',
    doctor: 'Ricardo Lima',
    specialty: 'Estética Dental',
    status: 'concluido',
    notes: 'Tom B2 atingido. Recomendado gel de manutenção por 7 dias.',
    icon: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1C4 1 2 3 2 5.5S4 11 6 11s4-3 4-5.5S8 1 6 1z" stroke="currentColor" stroke-width="1.4"/></svg>`,
  },
  {
    id: 3,
    date: '2025-04-03',
    time: '09:00',
    procedure: 'Limpeza e Profilaxia',
    doctor: 'Camila Ferreira',
    specialty: 'Periodontia',
    status: 'concluido',
    notes: 'Remoção de tártaro. Próxima limpeza em 6 meses.',
    icon: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 9l2-2 2 2 4-6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    id: 4,
    date: '2025-03-10',
    time: '16:00',
    procedure: 'Clareamento Dental (1ª sessão)',
    doctor: 'Ricardo Lima',
    specialty: 'Estética Dental',
    status: 'concluido',
    notes: 'Aplicação inicial do gel. Sensibilidade leve esperada.',
    icon: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1C4 1 2 3 2 5.5S4 11 6 11s4-3 4-5.5S8 1 6 1z" stroke="currentColor" stroke-width="1.4"/></svg>`,
  },
  {
    id: 5,
    date: '2025-02-18',
    time: '11:00',
    procedure: 'Radiografia Panorâmica',
    doctor: 'Paulo Mendes',
    specialty: 'Radiologia',
    status: 'concluido',
    notes: null,
    icon: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="2" width="10" height="8" rx="1.5" stroke="currentColor" stroke-width="1.4"/><path d="M4 5h4M4 7h2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  },
  {
    id: 6,
    date: '2025-01-07',
    time: '15:30',
    procedure: 'Consulta de Urgência',
    doctor: 'Amanda Souza',
    specialty: 'Dentista Geral',
    status: 'cancelado',
    notes: 'Consulta cancelada pelo paciente. Taxa não cobrada.',
    icon: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 2l8 8M10 2L2 10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  },
]

const filteredHistory = computed(() =>
  activeFilter.value === 'todos'
    ? history
    : history.filter(h => h.status === activeFilter.value),
)

const stats = computed(() => [
  {
    label: 'Total de consultas',
    value: history.length,
    color: 'var(--ink-900)',
  },
  {
    label: 'Concluídas',
    value: history.filter(h => h.status === 'concluido').length,
    color: 'var(--success)',
  },
  {
    label: 'Agendadas',
    value: history.filter(h => h.status === 'agendado').length,
    color: 'var(--primary-500)',
  },
  {
    label: 'Canceladas',
    value: history.filter(h => h.status === 'cancelado').length,
    color: 'var(--warning)',
  },
])

function statusColor(status: string) {
  const map: Record<string, string> = {
    concluido: 'var(--success)',
    agendado: 'var(--primary-500)',
    cancelado: 'var(--warning)',
  }
  return map[status] ?? 'var(--ink-300)'
}

function statusLabel(status: string) {
  const map: Record<string, string> = {
    concluido: '✓ Concluído',
    agendado: '⏳ Agendado',
    cancelado: '✕ Cancelado',
  }
  return map[status] ?? status
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
}
</script>

<style scoped>
.history-tab { display: flex; flex-direction: column; gap: 24px; }

.tab-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border);
}
.tab-title {
  font-family: var(--font-display);
  font-size: 22px; font-weight: 700;
  letter-spacing: -0.02em; color: var(--ink-900); margin: 0 0 6px;
}
.tab-desc { font-size: 14px; color: var(--ink-400); margin: 0; }

/* Filtros */
.filter-group {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  align-self: flex-end;
}
.filter-btn {
  padding: 7px 14px;
  border-radius: var(--radius-pill);
  border: 1.5px solid var(--border);
  background: var(--bg-card-hi);
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  color: var(--ink-500);
  cursor: pointer;
  transition: all var(--dur-fast) var(--ease-soft);
}
.filter-btn:hover { border-color: var(--primary-300); color: var(--primary-600); }
.filter-btn.active {
  background: var(--primary-50);
  border-color: var(--primary-300);
  color: var(--primary-600);
  font-weight: 600;
}

/* Stats */
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 16px;
  background: var(--bg-card-hi);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
}
.stat-value { font-family: var(--font-display); font-size: 28px; font-weight: 800; }
.stat-label { font-size: 12px; color: var(--ink-400); font-weight: 500; text-align: center; }

/* Timeline */
.timeline { display: flex; flex-direction: column; }
.timeline-item {
  display: flex;
  gap: 16px;
  padding-bottom: 24px;
}
.timeline-item--last { padding-bottom: 0; }

.timeline-spine { display: flex; flex-direction: column; align-items: center; }
.timeline-dot {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,.12);
}
.timeline-line {
  width: 2px;
  flex: 1;
  min-height: 20px;
  background: var(--border);
  margin: 6px 0;
}

/* Card da timeline */
.timeline-card {
  flex: 1;
  background: var(--bg-card-hi);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: box-shadow var(--dur-fast) var(--ease-soft);
}
.timeline-card:hover { box-shadow: var(--shadow-card-hover); }

.timeline-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}
.timeline-procedure {
  font-family: var(--font-display);
  font-size: 15px; font-weight: 700;
  color: var(--ink-900); margin: 4px 0 3px;
}
.timeline-doctor { font-size: 13px; color: var(--ink-400); margin: 0; }

.timeline-date-block { text-align: right; flex-shrink: 0; }
.timeline-date { font-size: 13px; font-weight: 600; color: var(--ink-700); margin: 0 0 2px; }
.timeline-time { font-size: 12px; color: var(--ink-300); margin: 0; }

/* Status badge */
.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: var(--radius-pill);
  font-size: 11px;
  font-weight: 700;
}
.status-badge--concluido {
  background: rgba(31, 138, 91, .1);
  color: var(--success);
}
.status-badge--agendado {
  background: rgba(110, 91, 255, .1);
  color: var(--primary-600);
}
.status-badge--cancelado {
  background: rgba(217, 119, 87, .1);
  color: var(--warning);
}

/* Notes */
.timeline-notes {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  font-size: 13px;
  color: var(--ink-500);
  background: var(--bg-inset);
  border-radius: var(--radius-sm);
  padding: 8px 12px;
  line-height: 1.5;
}
.timeline-notes svg { flex-shrink: 0; margin-top: 2px; color: var(--ink-300); }

/* Action buttons for "agendado" */
.timeline-actions { display: flex; gap: 8px; }
.action-btn {
  padding: 6px 14px;
  border-radius: var(--radius-pill);
  font-family: var(--font-body);
  font-size: 12px; font-weight: 600;
  cursor: pointer;
  border: 1.5px solid transparent;
  transition: all var(--dur-fast);
}
.action-btn--cancel {
  background: transparent;
  border-color: var(--border-strong);
  color: var(--ink-500);
}
.action-btn--cancel:hover { border-color: var(--danger); color: var(--danger); }
.action-btn--reschedule {
  background: var(--primary-50);
  border-color: var(--primary-200);
  color: var(--primary-600);
}
.action-btn--reschedule:hover { background: var(--primary-100); }

/* Empty */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 48px;
  color: var(--ink-400);
  font-size: 14px;
}

@media (max-width: 640px) {
  .stats-row { grid-template-columns: 1fr 1fr; }
  .tab-header { flex-direction: column; }
}
</style>
