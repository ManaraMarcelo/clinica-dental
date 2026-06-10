<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="modelValue"
        class="modal-overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        @click.self="$emit('update:modelValue', false)"
        @keydown.esc="$emit('update:modelValue', false)"
      >
        <div class="modal-card" :class="{ shake: shaking }">
          <!-- Header -->
          <div class="modal-header">
            <div class="modal-logo">
              <img src="~/assets/logo-mark.svg" width="32" height="32" alt="Clínica Dental" />
            </div>
            <h2 id="modal-title" class="modal-title">Bem-vindo de volta</h2>
            <p class="modal-subtitle">Entre com sua conta para continuar</p>
            <button
              class="modal-close"
              aria-label="Fechar modal"
              @click="$emit('update:modelValue', false)"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M14 4L4 14M4 4l10 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>

          <!-- Error -->
          <Transition name="error-slide">
            <div v-if="errorMsg" class="modal-error" role="alert">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/>
                <path d="M8 5v3.5M8 11v.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              {{ errorMsg }}
            </div>
          </Transition>

          <!-- Form -->
          <form class="modal-form" novalidate @submit.prevent="handleSubmit">
            <!-- E-mail -->
            <div class="field-group">
              <label class="field-label" for="login-email">E-mail</label>
              <div class="field-wrap" :class="{ 'field-wrap--error': emailError }">
                <svg class="field-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M1 5.5l7 4.5 7-4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                <input
                  id="login-email"
                  v-model="email"
                  type="email"
                  class="field-input"
                  placeholder="usuario@clinica.com"
                  autocomplete="email"
                  :aria-invalid="!!emailError"
                  @blur="validateEmail"
                />
              </div>
              <span v-if="emailError" class="field-error">{{ emailError }}</span>
            </div>

            <!-- Senha -->
            <div class="field-group">
              <label class="field-label" for="login-password">Senha</label>
              <div class="field-wrap" :class="{ 'field-wrap--error': passwordError }">
                <svg class="field-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M5 7V5a3 3 0 016 0v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                <input
                  id="login-password"
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  class="field-input"
                  placeholder="••••••••"
                  autocomplete="current-password"
                  :aria-invalid="!!passwordError"
                  @blur="validatePassword"
                />
                <button
                  type="button"
                  class="toggle-password"
                  :aria-label="showPassword ? 'Ocultar senha' : 'Mostrar senha'"
                  @click="showPassword = !showPassword"
                >
                  <!-- Eye icon -->
                  <svg v-if="!showPassword" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z" stroke="currentColor" stroke-width="1.5"/>
                    <circle cx="8" cy="8" r="2" stroke="currentColor" stroke-width="1.5"/>
                  </svg>
                  <!-- Eye-off icon -->
                  <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 2l12 12M6.5 6.7A2 2 0 009.3 9.5M4.1 4.2C2.4 5.2 1 8 1 8s2.5 5 7 5c1.4 0 2.6-.4 3.7-1M6.9 3.1C7.2 3 7.6 3 8 3c4.5 0 7 5 7 5s-.7 1.5-2 2.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </button>
              </div>
              <span v-if="passwordError" class="field-error">{{ passwordError }}</span>
            </div>

            <!-- Submit -->
            <button
              type="submit"
              class="btn btn--primary modal-submit"
              :disabled="loading"
            >
              <span v-if="!loading">Entrar na conta</span>
              <span v-else class="loading-dots">
                <span /><span /><span />
              </span>
            </button>
          </form>

          <!-- Hint -->
          <p class="modal-hint">
            Credenciais de acesso disponíveis no <code>.env</code>
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits<{ (e: 'update:modelValue', v: boolean): void }>()

const { login } = useAuth()
const router = useRouter()

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)
const errorMsg = ref('')
const emailError = ref('')
const passwordError = ref('')
const shaking = ref(false)

function validateEmail() {
  if (!email.value) { emailError.value = 'E-mail é obrigatório'; return false }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { emailError.value = 'E-mail inválido'; return false }
  emailError.value = ''
  return true
}

function validatePassword() {
  if (!password.value) { passwordError.value = 'Senha é obrigatória'; return false }
  if (password.value.length < 4) { passwordError.value = 'Senha muito curta'; return false }
  passwordError.value = ''
  return true
}

async function handleSubmit() {
  const emailOk = validateEmail()
  const passOk = validatePassword()
  if (!emailOk || !passOk) return

  loading.value = true
  errorMsg.value = ''
  await new Promise(r => setTimeout(r, 700)) // simula latência

  const ok = login(email.value, password.value)
  loading.value = false

  if (ok) {
    emit('update:modelValue', false)
    email.value = ''
    password.value = ''
    router.push('/usuario')
  } else {
    errorMsg.value = 'E-mail ou senha incorretos. Tente novamente.'
    shaking.value = true
    setTimeout(() => { shaking.value = false }, 600)
  }
}

// Resetar ao fechar
watch(() => props.modelValue, (v) => {
  if (!v) {
    email.value = ''
    password.value = ''
    errorMsg.value = ''
    emailError.value = ''
    passwordError.value = ''
    showPassword.value = false
  }
})
</script>

<style scoped>
/* ── Overlay ───────────────────────────────────────── */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(20, 20, 30, 0.55);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

/* ── Card ──────────────────────────────────────────── */
.modal-card {
  position: relative;
  width: 100%;
  max-width: 420px;
  box-sizing: border-box;
  background: var(--bg-card-hi);
  border-radius: var(--radius-lg);
  padding: 40px 36px 32px;
  box-shadow:
    0 0 0 1px rgba(255,255,255,.8) inset,
    0 32px 64px -16px rgba(20, 20, 30, .28),
    0 8px 24px -8px rgba(110, 91, 255, .12);
}

.shake {
  animation: shakeX 0.5s cubic-bezier(.36,.07,.19,.97) both;
}

@keyframes shakeX {
  10%, 90%  { transform: translateX(-3px); }
  20%, 80%  { transform: translateX(4px); }
  30%, 50%, 70% { transform: translateX(-5px); }
  40%, 60%  { transform: translateX(5px); }
}

/* ── Header ────────────────────────────────────────── */
.modal-header {
  text-align: center;
  margin-bottom: 24px;
}

.modal-logo {
  width: 56px;
  height: 56px;
  background: var(--primary-50);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  box-shadow: 0 4px 12px rgba(110, 91, 255, .16);
}

.modal-title {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--ink-900);
  margin: 0 0 6px;
}

.modal-subtitle {
  font-size: 14px;
  color: var(--ink-400);
  margin: 0;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: var(--bg-inset);
  color: var(--ink-400);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft);
}
.modal-close:hover {
  background: var(--border);
  color: var(--ink-900);
}

/* ── Error ─────────────────────────────────────────── */
.modal-error {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: rgba(209, 75, 75, .08);
  border: 1px solid rgba(209, 75, 75, .2);
  border-radius: var(--radius-sm);
  color: var(--danger);
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 16px;
}

/* ── Form ──────────────────────────────────────────── */
.modal-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--ink-700);
}

.field-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.field-icon {
  position: absolute;
  left: 14px;
  color: var(--ink-300);
  pointer-events: none;
  flex-shrink: 0;
}

.field-input {
  width: 100%;
  box-sizing: border-box;
  padding: 13px 44px;
  background: var(--bg-inset);
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--ink-900);
  transition:
    border-color var(--dur-fast) var(--ease-soft),
    box-shadow var(--dur-fast) var(--ease-soft),
    background var(--dur-fast) var(--ease-soft);
  outline: none;
}
.field-input:focus {
  border-color: var(--primary-500);
  background: #fff;
  box-shadow: 0 0 0 3px rgba(110, 91, 255, .1);
}
.field-wrap--error .field-input {
  border-color: var(--danger);
  box-shadow: 0 0 0 3px rgba(209, 75, 75, .08);
}

.toggle-password {
  position: absolute;
  right: 14px;
  border: none;
  background: none;
  color: var(--ink-400);
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: 4px;
  transition: color var(--dur-fast);
}
.toggle-password:hover { color: var(--ink-700); }

.field-error {
  font-size: 12px;
  color: var(--danger);
  font-weight: 500;
}

/* ── Submit ────────────────────────────────────────── */
.modal-submit {
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  padding: 14px;
  font-size: 15px;
  margin-top: 4px;
}
.modal-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none !important;
}

/* ── Loading dots ──────────────────────────────────── */
.loading-dots {
  display: flex;
  gap: 5px;
  align-items: center;
}
.loading-dots span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255,255,255,.8);
  animation: dotBounce 0.9s ease-in-out infinite;
}
.loading-dots span:nth-child(2) { animation-delay: 0.15s; }
.loading-dots span:nth-child(3) { animation-delay: 0.3s; }

@keyframes dotBounce {
  0%, 80%, 100% { transform: translateY(0); }
  40%            { transform: translateY(-6px); }
}

/* ── Hint ──────────────────────────────────────────── */
.modal-hint {
  text-align: center;
  font-size: 12px;
  color: var(--ink-300);
  margin-top: 16px;
}
.modal-hint code {
  background: var(--bg-inset);
  padding: 1px 5px;
  border-radius: 4px;
  font-size: 11px;
}

/* ── Transitions ───────────────────────────────────── */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity var(--dur-base) var(--ease-soft);
}
.modal-fade-enter-active .modal-card,
.modal-fade-leave-active .modal-card {
  transition: transform var(--dur-base) var(--ease-soft), opacity var(--dur-base) var(--ease-soft);
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-from .modal-card {
  transform: translateY(20px) scale(.97);
  opacity: 0;
}
.modal-fade-leave-to .modal-card {
  transform: translateY(10px) scale(.98);
  opacity: 0;
}

.error-slide-enter-active,
.error-slide-leave-active {
  transition: all 0.22s var(--ease-soft);
}
.error-slide-enter-from,
.error-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
  max-height: 0;
}
</style>
