<template>
  <div class="account-tab">
    <!-- Cabeçalho -->
    <div class="tab-header">
      <h2 class="tab-title">Configurações da Conta</h2>
      <p class="tab-desc">Gerencie suas informações pessoais e segurança.</p>
    </div>

    <!-- Avatar + Nome -->
    <div class="profile-row">
      <div class="profile-avatar-wrap">
        <div class="profile-avatar">{{ userName.charAt(0).toUpperCase() }}</div>
        <div class="avatar-ring" />
      </div>
      <div>
        <p class="profile-display-name">{{ form.name }}</p>
        <p class="profile-role">Paciente · Membro desde Jan 2024</p>
      </div>
    </div>

    <!-- Seção: Dados Pessoais -->
    <section class="form-section">
      <h3 class="section-title">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="2.5" stroke="currentColor" stroke-width="1.5"/><path d="M2 13c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        Dados Pessoais
      </h3>
      <div class="form-grid">
        <div class="form-field">
          <label class="form-label" for="acc-name">Nome completo</label>
          <input id="acc-name" v-model="form.name" class="form-input" type="text" placeholder="Seu nome" />
        </div>
        <div class="form-field">
          <label class="form-label" for="acc-email">E-mail</label>
          <input id="acc-email" v-model="form.email" class="form-input" type="email" placeholder="email@exemplo.com" />
        </div>
        <div class="form-field">
          <label class="form-label" for="acc-phone">Telefone / WhatsApp</label>
          <input id="acc-phone" v-model="form.phone" class="form-input" type="tel" placeholder="(11) 99999-9999" />
        </div>
        <div class="form-field">
          <label class="form-label" for="acc-birth">Data de nascimento</label>
          <input id="acc-birth" v-model="form.birthdate" class="form-input" type="date" />
        </div>
      </div>
    </section>

    <!-- Seção: Segurança -->
    <section class="form-section">
      <h3 class="section-title">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M5 7V5a3 3 0 016 0v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        Segurança
      </h3>
      <div class="form-grid">
        <div class="form-field">
          <label class="form-label" for="acc-current-pass">Senha atual</label>
          <input id="acc-current-pass" v-model="form.currentPassword" class="form-input" type="password" placeholder="••••••••" />
        </div>
        <div class="form-field">
          <label class="form-label" for="acc-new-pass">Nova senha</label>
          <input id="acc-new-pass" v-model="form.newPassword" class="form-input" type="password" placeholder="••••••••" />
        </div>
      </div>
    </section>

    <!-- Ações -->
    <div class="form-actions">
      <button class="btn btn--ghost" style="font-size: 14px; padding: 11px 20px;" @click="resetForm">
        Descartar mudanças
      </button>
      <button class="btn btn--primary" style="font-size: 14px; padding: 11px 24px;" :disabled="saving" @click="handleSave">
        <span v-if="!saving">Salvar alterações</span>
        <span v-else>Salvando…</span>
      </button>
    </div>

    <!-- Toast de sucesso -->
    <Transition name="toast-up">
      <div v-if="saved" class="toast-success">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" fill="rgba(31,138,91,.12)" stroke="var(--success)" stroke-width="1.5"/><path d="M5 8l2 2 4-4" stroke="var(--success)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Informações salvas com sucesso!
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const { userName } = useAuth()
const config = useRuntimeConfig()

const form = reactive({
  name: 'Usuário Clínica',
  email: config.public.userEmail,
  phone: '(11) 98765-4321',
  birthdate: '1990-05-20',
  currentPassword: '',
  newPassword: '',
})

const saving = ref(false)
const saved = ref(false)

const originalForm = { ...form }

function resetForm() {
  Object.assign(form, originalForm)
}

async function handleSave() {
  saving.value = true
  await new Promise(r => setTimeout(r, 900))
  saving.value = false
  saved.value = true
  setTimeout(() => { saved.value = false }, 3000)
}
</script>

<style scoped>
.account-tab { display: flex; flex-direction: column; gap: 28px; }

.tab-header { padding-bottom: 20px; border-bottom: 1px solid var(--border); }
.tab-title {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--ink-900);
  margin: 0 0 6px;
}
.tab-desc { font-size: 14px; color: var(--ink-400); margin: 0; }

/* Perfil row */
.profile-row {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 20px 24px;
  background: linear-gradient(135deg, var(--primary-50), rgba(255,255,255,.6));
  border: 1px solid var(--primary-100);
  border-radius: var(--radius-md);
}
.profile-avatar-wrap { position: relative; flex-shrink: 0; }
.profile-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-400), var(--primary-600));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 26px;
  font-weight: 700;
  box-shadow: 0 6px 18px rgba(110, 91, 255, .28);
}
.avatar-ring {
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  border: 2px solid var(--primary-300);
  opacity: 0.5;
}
.profile-display-name {
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 700;
  color: var(--ink-900);
  margin: 0 0 3px;
}
.profile-role { font-size: 13px; color: var(--ink-400); margin: 0; }

/* Sections */
.form-section {
  background: var(--bg-card-hi);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 600;
  color: var(--ink-700);
  margin: 0;
}
.section-title svg { color: var(--primary-500); }

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-field { display: flex; flex-direction: column; gap: 6px; }
.form-label { font-size: 13px; font-weight: 600; color: var(--ink-700); }
.form-input {
  padding: 12px 16px;
  background: var(--bg-inset);
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--ink-900);
  outline: none;
  transition: border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft), background var(--dur-fast);
}
.form-input:focus {
  border-color: var(--primary-500);
  background: #fff;
  box-shadow: 0 0 0 3px rgba(110, 91, 255, .1);
}

/* Actions */
.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 4px;
}

/* Toast */
.toast-success {
  position: fixed;
  bottom: 32px;
  right: 32px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border: 1px solid rgba(31, 138, 91, .25);
  border-radius: var(--radius-md);
  padding: 14px 20px;
  font-size: 14px;
  font-weight: 600;
  color: var(--success);
  box-shadow: 0 8px 24px -8px rgba(20, 20, 30, .14);
  z-index: 200;
}
.toast-up-enter-active, .toast-up-leave-active { transition: all .3s var(--ease-soft); }
.toast-up-enter-from, .toast-up-leave-to { opacity: 0; transform: translateY(12px); }

@media (max-width: 640px) {
  .form-grid { grid-template-columns: 1fr; }
}

@media (max-width: 600px) {
  .form-actions {
    flex-direction: column-reverse;
    gap: 8px;
  }
  .form-actions .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
