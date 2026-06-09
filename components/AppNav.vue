<template>
  <div :style="wrapStyle">
    <nav :style="navStyle">
      <a href="/" :style="brandStyle">
        <img src="~/assets/logo-mark.svg" width="24" height="24" alt="Clínica Bluetooth" />
        <span :style="brandNameStyle" class="nav-brand-name">Clínica Bluetooth</span>
      </a>
      <NuxtLink
        v-for="link in navLinks"
        :key="link.label"
        :to="link.to"
        :style="navLinkStyle"
        class="nav-link"
      >{{ link.label }}</NuxtLink>
      <NuxtLink to="/agendar">
        <button class="btn btn--primary" style="padding: 9px 18px; font-size: 14px; margin-left: 6px">Agendar</button>
      </NuxtLink>

      <!-- Quando LOGADO: avatar + link para /usuario -->
      <NuxtLink
        v-if="isLoggedIn"
        to="/usuario"
        :style="avatarLinkStyle"
        :title="`Olá, ${userName}`"
      >
        <span :style="avatarStyle">{{ userName.charAt(0).toUpperCase() }}</span>
        <span :style="avatarNameStyle" class="nav-avatar-name">{{ userName }}</span>
      </NuxtLink>

      <!-- Quando DESLOGADO: botão Entrar abre modal -->
      <button
        v-else
        class="btn btn--ghost nav-entrar"
        style="padding: 9px 14px; font-size: 14px; background: #fff; box-shadow: var(--shadow-card)"
        @click="showModal = true"
      >
        Entrar
      </button>

      <!-- Hambúrguer (só visível em mobile) -->
      <button
        class="nav-hamburger"
        :aria-label="mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <svg v-if="!mobileMenuOpen" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
        <svg v-else width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
      </button>
    </nav>
  </div>

  <!-- Menu mobile -->
  <Transition name="mmenu">
    <div v-if="mobileMenuOpen" class="mobile-menu" @click.self="mobileMenuOpen = false">
      <div class="mobile-menu-card">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.to"
          class="mobile-menu-link"
          @click="mobileMenuOpen = false"
        >{{ link.label }}</NuxtLink>
        <div class="mobile-menu-sep" />
        <button
          v-if="!isLoggedIn"
          class="btn btn--primary mobile-menu-cta"
          @click="showModal = true; mobileMenuOpen = false"
        >Entrar na conta</button>
      </div>
    </div>
  </Transition>

  <!-- Modal de Login -->
  <AppLoginModal v-model="showModal" />
</template>

<script setup lang="ts">
const { isLoggedIn, userName } = useAuth()
const showModal = ref(false)
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Serviços', to: '/servicos' },
  { label: 'Preços', to: '/servicos/#planos' },
  { label: 'Histórias', to: '/#depoimentos' },
]

const wrapStyle = {
  position: 'fixed',
  top: '24px',
  left: 0,
  right: 0,
  zIndex: 100,
  display: 'flex',
  justifyContent: 'center',
  pointerEvents: 'none',
}

const navStyle = computed(() => ({
  pointerEvents: 'auto',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  background: scrolled.value ? 'rgba(245,244,242,.78)' : 'rgba(245,244,242,.55)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  padding: '8px 8px 8px 20px',
  borderRadius: '999px',
  boxShadow: scrolled.value
    ? '0 10px 30px -10px rgba(20,20,30,.18), 0 1px 2px rgba(20,20,30,.04)'
    : '0 1px 2px rgba(20,20,30,.04), 0 8px 24px -8px rgba(20,20,30,.06)',
  transition: 'background 240ms var(--ease-soft), box-shadow 240ms var(--ease-soft)',
}))

const brandStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  paddingRight: '16px',
  marginRight: '6px',
  borderRight: '1px solid var(--border)',
  textDecoration: 'none',
}

const brandNameStyle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: '15px',
  color: 'var(--ink-900)',
  letterSpacing: '-0.01em',
}

const navLinkStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '14px',
  fontWeight: 500,
  color: 'var(--ink-700)',
  padding: '9px 14px',
  borderRadius: '999px',
  textDecoration: 'none',
  transition: 'background 160ms ease, color 160ms ease',
}

const avatarLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '6px 14px 6px 6px',
  borderRadius: '999px',
  background: 'var(--primary-50)',
  textDecoration: 'none',
  marginLeft: '4px',
  transition: 'background 160ms ease',
}

const avatarStyle = {
  width: '28px',
  height: '28px',
  borderRadius: '50%',
  background: 'var(--primary-500)',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '13px',
  fontWeight: 700,
  flexShrink: 0,
}

const avatarNameStyle = {
  fontSize: '13px',
  fontWeight: 600,
  color: 'var(--primary-700)',
}

const onScroll = () => {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
/* Hambúrguer — escondido no desktop */
.nav-hamburger {
  display: none;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: var(--ink-700);
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: background 160ms ease;
  margin-left: 2px;
}
.nav-hamburger:hover { background: var(--bg-inset); }

/* Responsividade */
@media (max-width: 640px) {
  .nav-link,
  .nav-entrar,
  .nav-avatar-name { display: none !important; }
  .nav-brand-name { display: none !important; }
  .nav-hamburger { display: flex !important; }
}

/* Menu mobile */
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 99;
  background: transparent;
}

.mobile-menu-card {
  position: absolute;
  top: 86px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 48px);
  max-width: 320px;
  background: rgba(245, 244, 242, 0.97);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-radius: 20px;
  padding: 12px;
  box-shadow: 0 8px 32px -8px rgba(20, 20, 30, 0.2), 0 1px 2px rgba(20, 20, 30, 0.06);
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.mobile-menu-link {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 500;
  color: var(--ink-700);
  padding: 12px 16px;
  border-radius: 12px;
  text-decoration: none;
  display: block;
  transition: background 160ms ease;
}
.mobile-menu-link:hover { background: var(--bg-inset); }

.mobile-menu-sep {
  height: 1px;
  background: var(--border);
  margin: 6px 0;
}

.mobile-menu-cta {
  width: 100%;
  justify-content: center;
  font-size: 14px;
  padding: 12px;
}

/* Transição do menu mobile */
.mmenu-enter-active,
.mmenu-leave-active { transition: opacity 200ms ease; }
.mmenu-enter-from,
.mmenu-leave-to { opacity: 0; }
</style>
