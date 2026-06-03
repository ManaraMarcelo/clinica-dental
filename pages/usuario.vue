<template>
  <div class="usuario-page">
    <!-- Navbar -->
    <AppNav />

    <!-- Page body -->
    <main class="usuario-main container">
      <!-- Page title -->
      <div class="page-heading reveal">
        <div>
          <span class="eyebrow">Minha Conta</span>
          <h1 class="page-title">Olá, {{ userName }} 👋</h1>
          <p class="page-subtitle">Gerencie sua conta, plano e histórico de atendimentos.</p>
        </div>
      </div>

      <!-- Layout: sidebar + content -->
      <div class="usuario-layout">
        <UserSidebar :active-tab="activeTab" @change-tab="activeTab = $event" />

        <div class="tab-content reveal">
          <Transition name="tab-fade" mode="out-in">
            <UserAccountTab v-if="activeTab === 'conta'" key="conta" />
            <UserPlanTab v-else-if="activeTab === 'plano'" key="plano" />
            <UserHistoryTab v-else-if="activeTab === 'historico'" key="historico" />
          </Transition>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Minha Conta — Clínica Bluetooth',
  description: 'Gerencie suas configurações, plano odontológico e histórico de consultas.',
})

const { isLoggedIn, userName } = useAuth()

// Protege a rota — redireciona se não estiver logado
onMounted(() => {
  if (!isLoggedIn.value) {
    navigateTo('/')
  }
})

watch(isLoggedIn, (v) => {
  if (!v) navigateTo('/')
})

const activeTab = ref<'conta' | 'plano' | 'historico'>('conta')

useScrollReveal()
</script>

<style scoped>
.usuario-page {
  min-height: 100vh;
  background: var(--bg-page);
}

.usuario-main {
  padding-top: 120px;
  padding-bottom: 80px;
}

/* Page heading */
.page-heading {
  margin-bottom: 36px;
}
.page-title {
  font-family: var(--font-display);
  font-size: clamp(28px, 3.5vw, 40px);
  font-weight: 800;
  letter-spacing: -0.025em;
  color: var(--ink-900);
  margin: 6px 0 8px;
}
.page-subtitle {
  font-size: 16px;
  color: var(--ink-500);
  margin: 0;
}

/* Layout */
.usuario-layout {
  display: flex;
  align-items: flex-start;
  gap: 28px;
}

/* Tab content area */
.tab-content {
  flex: 1;
  min-width: 0;
  background: var(--bg-card-hi);
  border-radius: var(--radius-lg);
  padding: 36px;
  box-shadow: var(--shadow-card);
}

/* Tab transition */
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: opacity 200ms var(--ease-soft), transform 200ms var(--ease-soft);
}
.tab-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.tab-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* Responsive */
@media (max-width: 860px) {
  .usuario-layout {
    flex-direction: column;
  }
  .tab-content {
    padding: 24px;
    width: 100%;
  }
}
</style>
