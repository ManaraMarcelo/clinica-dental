<template>
  <aside class="sidebar">
    <!-- Perfil -->
    <div class="sidebar-profile">
      <div class="sidebar-avatar">{{ userName.charAt(0).toUpperCase() }}</div>
      <div class="sidebar-info">
        <p class="sidebar-name">{{ userName }}</p>
        <p class="sidebar-email">{{ userEmail }}</p>
      </div>
    </div>

    <!-- Plano badge -->
    <div class="sidebar-plan-badge">
      <span class="plan-dot" />
      Plano Premium ativo
    </div>

    <!-- Nav -->
    <nav class="sidebar-nav">
      <button
        v-for="item in navItems"
        :key="item.id"
        class="sidebar-nav-item"
        :class="{ active: activeTab === item.id }"
        @click="$emit('changeTab', item.id)"
      >
        <span class="nav-icon" v-html="item.icon" />
        <span>{{ item.label }}</span>
        <span v-if="activeTab === item.id" class="nav-active-dot" />
      </button>
    </nav>

    <!-- Sair -->
    <button class="sidebar-logout" @click="handleLogout">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6 14H3a1 1 0 01-1-1V3a1 1 0 011-1h3M11 11l3-3-3-3M14 8H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Sair da conta
    </button>
  </aside>
</template>

<script setup lang="ts">
defineProps<{ activeTab: string }>()
defineEmits<{ (e: 'changeTab', tab: string): void }>()

const { logout, userName } = useAuth()
const config = useRuntimeConfig()
const userEmail = config.public.userEmail

const navItems = [
  {
    id: 'conta',
    label: 'Configurações',
    icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="5" r="2.5" stroke="currentColor" stroke-width="1.5"/>
      <path d="M2 13c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'plano',
    label: 'Meu Plano',
    icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
      <path d="M1.5 6.5h13" stroke="currentColor" stroke-width="1.5"/>
      <path d="M4.5 9.5h3M4.5 11h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'historico',
    label: 'Histórico',
    icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.5"/>
      <path d="M8 4.5V8l2.5 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
]

function handleLogout() {
  logout()
}
</script>

<style scoped>
.sidebar {
  width: 260px;
  flex-shrink: 0;
  background: var(--bg-card-hi);
  border-radius: var(--radius-lg);
  padding: 28px 20px;
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: fit-content;
  position: sticky;
  top: 100px;
}

/* Perfil */
.sidebar-profile {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 8px;
}

.sidebar-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-400), var(--primary-600));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(110, 91, 255, .25);
}

.sidebar-info {
  min-width: 0;
}

.sidebar-name {
  font-weight: 700;
  font-size: 15px;
  color: var(--ink-900);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sidebar-email {
  font-size: 12px;
  color: var(--ink-400);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Plano badge */
.sidebar-plan-badge {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 600;
  color: var(--glyph-mint);
  background: rgba(46, 165, 114, .08);
  border: 1px solid rgba(46, 165, 114, .2);
  border-radius: var(--radius-pill);
  padding: 5px 12px;
  width: fit-content;
  margin-bottom: 8px;
}

.plan-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--glyph-mint);
  animation: pulseDot 2s ease-in-out infinite;
}

@keyframes pulseDot {
  0%, 100% { box-shadow: 0 0 0 0 rgba(46, 165, 114, .4); }
  50%       { box-shadow: 0 0 0 4px rgba(46, 165, 114, 0); }
}

/* Nav */
.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}

.sidebar-nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 14px;
  border-radius: var(--radius);
  border: none;
  background: transparent;
  color: var(--ink-500);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  width: 100%;
  position: relative;
  transition: background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft);
}
.sidebar-nav-item:hover {
  background: var(--bg-inset);
  color: var(--ink-900);
}
.sidebar-nav-item.active {
  background: var(--primary-50);
  color: var(--primary-600);
  font-weight: 600;
}
.sidebar-nav-item.active .nav-icon {
  color: var(--primary-500);
}

.nav-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  color: var(--ink-300);
  transition: color var(--dur-fast);
}

.nav-active-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary-500);
  margin-left: auto;
}

/* Sair */
.sidebar-logout {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: var(--radius);
  border: none;
  background: transparent;
  color: var(--ink-400);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  margin-top: 8px;
  border-top: 1px solid var(--border);
  padding-top: 16px;
  transition: color var(--dur-fast), background var(--dur-fast);
}
.sidebar-logout:hover {
  color: var(--danger);
  background: rgba(209, 75, 75, .06);
}

@media (max-width: 860px) {
  .sidebar {
    width: 100%;
    position: static;
  }
}
</style>
