<template>
  <div :style="wrapStyle">
    <nav :style="navStyle">
      <a href="/" :style="brandStyle">
        <img src="~/assets/logo-mark.svg" width="24" height="24" alt="Clínica Bluetooth" />
        <span :style="brandNameStyle">Clínica Bluetooth</span>
      </a>
      <a
        v-for="link in navLinks"
        :key="link"
        href="#"
        :style="navLinkStyle"
      >{{ link }}</a>
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
        <span :style="avatarNameStyle">{{ userName }}</span>
      </NuxtLink>

      <!-- Quando DESLOGADO: botão Entrar abre modal -->
      <button
        v-else
        class="btn btn--ghost"
        style="padding: 9px 14px; font-size: 14px; background: #fff; box-shadow: var(--shadow-card)"
        @click="showModal = true"
      >
        Entrar
      </button>
    </nav>
  </div>

  <!-- Modal de Login -->
  <AppLoginModal v-model="showModal" />
</template>

<script setup lang="ts">
const { isLoggedIn, userName } = useAuth()
const showModal = ref(false)
const scrolled = ref(false)

const navLinks = ['Serviços', 'Preços', 'Equipe', 'Histórias', 'Suporte']

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
