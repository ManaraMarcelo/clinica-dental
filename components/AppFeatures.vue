<template>
  <section :style="{ paddingBottom: '96px' }">
    <div class="container">
      <div :style="grid2" class="features-grid-2">
        <AppFeatureCard title="Radar de Cáries" sub="Varreduras precoces com alertas em tempo real — sem surpresas na conta.">
          <div :style="demoFrame">
            <div v-for="(size, i) in [52, 90, 128, 166]" :key="i" :style="ringStyle(size, i)" />
            <div :style="radarCenter">!</div>
            <div :style="monoLabel">VARRENDO · EM TEMPO REAL</div>
          </div>
        </AppFeatureCard>

        <AppFeatureCard title="Nota do Sorriso Turbinada" sub="Leitura em tempo real da sua saúde bucal com próximos passos personalizados.">
          <div :style="demoFrame">
            <div :style="scorePill">
              <div :style="{ display: 'flex', gap: '5px', flex: 1 }">
                <div v-for="i in 8" :key="i" :style="scoreDot(i)" />
              </div>
              <div :style="eyeBtn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </div>
            <div :style="monoLabel">NOTA DO SORRISO · 86 / 100</div>
          </div>
        </AppFeatureCard>
      </div>

      <div :style="grid3" class="features-grid-3">
        <AppFeatureCard title="Preenchimento Automático" sub="Traga seu plano uma vez. A gente entra em cada consulta por você.">
          <div :style="demoFrame">
            <div :style="autofillBox">
              <div :style="afField">Itaú Odonto</div>
              <div :style="afField">26/05/2026</div>
              <div :style="afActive">
                <span>jamie.smith@gmail.com</span>
                <div :style="afCheck">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </AppFeatureCard>

        <AppFeatureCard title="Tecnologia Sem Dor" sub="Lasers, escaneamentos suaves e salas tranquilas. Certificado.">
          <div :style="demoFrame">
            <div :style="orbitCenter">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div v-for="(item, i) in orbitItems" :key="i" :style="item.style">
              {{ item.glyph }}
            </div>
          </div>
        </AppFeatureCard>

        <AppFeatureCard title="Check-In por Reconhecimento" sub="Entre, sorria pro totem e sente. A papelada já está pronta.">
          <div :style="demoFrame">
            <div :style="checkinGlow" />
            <div :style="checkinBadge">
              <div :style="checkinOk">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              Check-in confirmado
            </div>
            <div :style="checkinIcon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                <path d="M12 11v4" />
                <path d="M8 9a4 4 0 0 1 8 0v6" />
                <path d="M5 11a7 7 0 0 1 14 0v3" />
                <path d="M2 13a10 10 0 0 1 20 0" />
              </svg>
            </div>
          </div>
        </AppFeatureCard>
      </div>
      <span id="depoimentos"></span>
    </div>
  </section>
</template>

<script setup lang="ts">
const grid2 = { display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '12px', marginBottom: '12px' }
const grid3 = { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }

const demoFrame = {
  position: 'relative',
  flex: 1,
  minHeight: '160px',
  background: 'linear-gradient(160deg, #f5f3ff 0%, #faf9ff 100%)',
  borderRadius: '12px',
  overflow: 'hidden',
  margin: '16px',
}

const monoLabel = {
  position: 'absolute', bottom: '12px', left: 0, right: 0, textAlign: 'center',
  fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--ink-400)', letterSpacing: '.04em',
}

/* --- Radar --- */
const ringStyle = (size: number, i: number) => ({
  position: 'absolute',
  left: '50%', top: '50%',
  width: `${size}px`, height: `${size}px`,
  transform: 'translate(-50%, -50%)',
  borderRadius: '50%',
  border: '1.5px solid rgba(110,91,255,.22)',
  animation: `ringPulse 3s ease-out ${i * 0.5}s infinite`,
})

const radarCenter = {
  position: 'absolute', left: '50%', top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '48px', height: '48px', borderRadius: '50%',
  background: 'linear-gradient(145deg, #8A6BFF, #5b43e8)',
  boxShadow: '0 0 0 6px rgba(110,91,255,.15), 0 8px 20px rgba(110,91,255,.35)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: '#fff', fontSize: '18px', fontWeight: 700,
  animation: 'dotBeat 2s ease-in-out infinite',
}

/* --- Smile Score --- */
const scorePill = {
  position: 'absolute', inset: '20% 10%', background: '#fff', borderRadius: '999px',
  boxShadow: '0 4px 20px rgba(110,91,255,.12), 0 1px 4px rgba(0,0,0,.06)',
  display: 'flex', alignItems: 'center', padding: '0 16px', gap: '8px',
}

const scoreDot = (i: number) => ({
  width: '14px', height: '14px', borderRadius: '50%',
  background: i <= 6 ? 'var(--primary-500)' : 'var(--ink-200)',
  animation: `dotPop 2.4s ease-in-out ${(i - 1) * 0.15}s infinite`,
})

const eyeBtn = {
  width: '28px', height: '28px', borderRadius: '50%', background: '#f3f2fa',
  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-400)',
}

/* --- Autofill --- */
const autofillBox = {
  position: 'absolute', inset: '12% 10%', background: '#fff', borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(110,91,255,.10)', padding: '12px',
  display: 'flex', flexDirection: 'column', gap: '7px', fontSize: '11px',
}
const afField = { padding: '8px 10px', background: '#f5f4fc', borderRadius: '8px', color: 'var(--ink-400)', fontFamily: 'var(--font-mono)' }
const afActive = {
  padding: '8px 10px', borderRadius: '8px', color: '#fff', fontFamily: 'var(--font-mono)',
  background: 'linear-gradient(90deg, var(--primary-500), #8A6BFF)',
  animation: 'shimmer 2.5s ease-in-out infinite',
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
}
const afCheck = {
  width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(255,255,255,.25)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
}

/* --- Orbit --- */
const orbitCenter = {
  position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
  width: '64px', height: '64px', borderRadius: '50%',
  background: 'linear-gradient(145deg, #8A6BFF, #5b43e8)',
  boxShadow: '0 0 0 8px rgba(110,91,255,.12), 0 10px 28px rgba(110,91,255,.3)',
  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
}

const orbitItems = ['💎', '🦷', '✦', '✧', '⚡', '💠'].map((glyph, i) => {
  const angle = (i / 6) * Math.PI * 2 - Math.PI / 2
  const r = 72
  return {
    glyph,
    style: {
      position: 'absolute',
      left: `calc(50% + ${Math.cos(angle) * r}px)`,
      top: `calc(50% + ${Math.sin(angle) * r}px)`,
      transform: 'translate(-50%, -50%)',
      width: '34px', height: '34px', borderRadius: '10px', background: '#fff',
      boxShadow: '0 3px 12px rgba(110,91,255,.12)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '15px', color: 'var(--primary-500)',
      animation: `floatY 5s ease-in-out ${i * 0.4}s infinite`,
    },
  }
})

/* --- Check-in --- */
const checkinGlow = {
  position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
  width: '100px', height: '100px',
  background: 'radial-gradient(circle, rgba(110,91,255,.18) 0%, transparent 70%)',
}
const checkinBadge = {
  position: 'absolute', top: '22%', left: '50%', transform: 'translateX(-50%)',
  background: '#fff', padding: '10px 20px', borderRadius: '999px', whiteSpace: 'nowrap',
  boxShadow: '0 4px 16px rgba(110,91,255,.12)', fontSize: '12px', fontWeight: 600, color: 'var(--ink-900)',
  display: 'flex', alignItems: 'center', gap: '8px',
}
const checkinOk = {
  width: '18px', height: '18px', borderRadius: '50%', background: '#22c55e',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
}
const checkinIcon = {
  position: 'absolute', bottom: '14%', left: '50%', transform: 'translateX(-50%)',
  width: '58px', height: '58px', borderRadius: '50%',
  background: 'linear-gradient(145deg, #8A6BFF, #5b43e8)',
  boxShadow: '0 0 0 8px rgba(110,91,255,.12), 0 10px 24px rgba(110,91,255,.35)',
  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
  animation: 'scanPulse 2.5s ease-in-out infinite',
}
</script>

<style>
@keyframes ringPulse {
  0%   { opacity: .8; transform: translate(-50%, -50%) scale(.9); }
  60%  { opacity: .3; }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(1.15); }
}
@keyframes dotBeat {
  0%, 100% { box-shadow: 0 0 0 6px rgba(110,91,255,.15), 0 8px 20px rgba(110,91,255,.35); }
  50%       { box-shadow: 0 0 0 12px rgba(110,91,255,.10), 0 8px 28px rgba(110,91,255,.45); }
}
@keyframes dotPop  { 0%,100%{transform:scale(1)}50%{transform:scale(1.25)} }
@keyframes shimmer { 0%,100%{opacity:1}50%{opacity:.85} }
@keyframes floatY  { 0%,100%{transform:translate(-50%,-50%) translateY(0)}50%{transform:translate(-50%,-50%) translateY(-4px)} }
@keyframes scanPulse {
  0%, 100% { box-shadow: 0 0 0 8px rgba(110,91,255,.12), 0 10px 24px rgba(110,91,255,.35); }
  50%       { box-shadow: 0 0 0 16px rgba(110,91,255,.06), 0 10px 28px rgba(110,91,255,.40); }
}

@media (max-width: 860px) {
  .features-grid-2,
  .features-grid-3 { grid-template-columns: 1fr 1fr !important; }
}
@media (max-width: 560px) {
  .features-grid-2,
  .features-grid-3 { grid-template-columns: 1fr !important; }
}
</style>