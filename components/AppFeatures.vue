<template>
  <section :style="{ paddingBottom: '96px' }">
    <div class="container">
      <!-- 2-up wide row -->
      <div :style="{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '12px', marginBottom: '12px' }">

        <AppFeatureCard title="Cavity Radar" sub="We scan early and ping you the moment something's off — no surprise bills.">
          <div :style="demoFrame">
            <div :style="{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 60%, rgba(110,91,255,.18), transparent 60%)' }" />
            <div
              v-for="(size, i) in [60, 100, 140]"
              :key="i"
              :style="{
                position: 'absolute', left: '50%', top: '55%',
                width: `${size}px`, height: `${size}px`,
                marginLeft: `${-size / 2}px`, marginTop: `${-size / 2}px`,
                borderRadius: '50%',
                border: '1.5px solid rgba(110,91,255,.25)',
                animation: `pulse 3s ease-out ${i * 0.6}s infinite`,
              }"
            />
            <div :style="radarCenter">!</div>
          </div>
        </AppFeatureCard>

        <AppFeatureCard title="Smile Score on Steroids" sub="A live read of your dental health with personalized next steps. No guessing.">
          <div :style="demoFrame">
            <div :style="smileScorePill">
              <div :style="{ display: 'flex', gap: '6px' }">
                <div
                  v-for="i in 8"
                  :key="i"
                  :style="{
                    width: '16px', height: '16px', borderRadius: '50%',
                    background: i <= 6 ? 'var(--primary-500)' : 'var(--ink-200)',
                    animation: `dotPop 2s ease-in-out ${(i - 1) * 0.15}s infinite`,
                  }"
                />
              </div>
              <div :style="eyeIconStyle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </div>
            <div :style="{ position: 'absolute', bottom: '14%', left: 0, right: 0, textAlign: 'center', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--ink-400)' }">
              SMILE SCORE · 86 / 100
            </div>
          </div>
        </AppFeatureCard>
      </div>

      <!-- 3-up row -->
      <div :style="{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }">

        <AppFeatureCard title="Auto-Fill That Slaps" sub="Bring your insurance once. We auto-claim every visit so you don't lift a finger.">
          <div :style="demoFrame">
            <div :style="autoFillBox">
              <div :style="autoFillField">Name on insurance</div>
              <div :style="autoFillField">Last cleaning date</div>
              <div :style="autoFillHighlight">
                jamie.smith@email.com
                <span :style="{ position: 'absolute', right: '10px', top: '8px', fontSize: '9px', opacity: 0.7 }">auto · Dental Clinic</span>
              </div>
            </div>
          </div>
        </AppFeatureCard>

        <AppFeatureCard title="Pain-Proof Tech" sub="Lasers, gentle scans, calm rooms. Backed by board-certified specialists.">
          <div :style="demoFrame">
            <div :style="{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }">
              <div :style="lockIconStyle">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
            </div>
            <div
              v-for="(orbit, i) in orbitItems"
              :key="i"
              :style="orbit.style"
            >{{ orbit.glyph }}</div>
          </div>
        </AppFeatureCard>

        <AppFeatureCard title="Check-In by Face" sub="Walk in, smile at the kiosk, sit down. Paperwork's already done.">
          <div :style="demoFrame">
            <div :style="{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 55%, rgba(110,91,255,.16), transparent 60%)' }" />
            <div :style="checkinBadge">Check-in confirmed</div>
            <div :style="fingerprintIconStyle">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                <path d="M12 11v4" />
                <path d="M8 9a4 4 0 0 1 8 0v6" />
                <path d="M5 11a7 7 0 0 1 14 0v3" />
                <path d="M2 13a10 10 0 0 1 20 0" />
              </svg>
            </div>
          </div>
        </AppFeatureCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const demoFrame = {
  position: 'relative',
  height: '100%',
  minHeight: '160px',
  background: 'linear-gradient(180deg, var(--bg-card-hi), var(--bg-card))',
  borderRadius: '12px',
  overflow: 'hidden',
}

/* --- Radar visual --- */
const radarCenter = {
  position: 'absolute',
  left: '50%', top: '55%',
  width: '56px', height: '56px',
  marginLeft: '-28px', marginTop: '-28px',
  borderRadius: '50%',
  background: 'linear-gradient(160deg, #8A6BFF, #6E5BFF)',
  boxShadow: '0 10px 24px rgba(110,91,255,.4), inset 0 2px 0 rgba(255,255,255,.5)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: '#fff', fontSize: '22px', fontWeight: 700,
}

/* --- Smile score visual --- */
const smileScorePill = {
  position: 'absolute',
  inset: '18% 8%',
  background: '#fff',
  borderRadius: '999px',
  boxShadow: 'var(--shadow-card)',
  display: 'flex', alignItems: 'center',
  padding: '0 18px', gap: '10px',
}

const eyeIconStyle = {
  marginLeft: 'auto',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  width: '28px', height: '28px',
  borderRadius: '999px',
  background: 'var(--bg-inset)',
  color: 'var(--ink-400)',
}

/* --- Auto-fill visual --- */
const autoFillBox = {
  position: 'absolute',
  inset: '14% 12% 14% 12%',
  background: '#fff',
  borderRadius: '12px',
  boxShadow: 'var(--shadow-card)',
  padding: '12px',
  display: 'flex', flexDirection: 'column', gap: '8px',
  fontSize: '11px', color: 'var(--ink-400)',
}

const autoFillField = {
  padding: '8px 10px',
  background: 'var(--bg-card)',
  borderRadius: '8px',
}

const autoFillHighlight = {
  padding: '8px 10px',
  background: 'var(--primary-500)',
  borderRadius: '8px',
  color: '#fff',
  fontFamily: 'var(--font-mono)',
  boxShadow: '0 4px 12px rgba(110,91,255,.35)',
  position: 'relative',
}

/* --- Stack / orbit visual --- */
const lockIconStyle = {
  width: '72px', height: '72px',
  borderRadius: '999px',
  background: 'linear-gradient(160deg, #8A6BFF, #6E5BFF)',
  boxShadow: '0 12px 30px rgba(110,91,255,.4), inset 0 2px 0 rgba(255,255,255,.5)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: '#fff',
}

const orbitItems = ['💎', '🦷', '✦', '✧', '⚡', '💠'].map((glyph, i) => {
  const angle = (i / 6) * Math.PI * 2 - Math.PI / 2
  const r = 78
  return {
    glyph,
    style: {
      position: 'absolute',
      left: `calc(50% + ${Math.cos(angle) * r}px)`,
      top: `calc(50% + ${Math.sin(angle) * r}px)`,
      width: '36px', height: '36px',
      marginLeft: '-18px', marginTop: '-18px',
      borderRadius: '8px',
      background: '#fff',
      boxShadow: 'var(--shadow-card)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '16px', color: 'var(--primary-500)',
      animation: `floatY 5s ease-in-out ${i * 0.3}s infinite`,
    },
  }
})

/* --- Fingerprint visual --- */
const checkinBadge = {
  position: 'absolute', top: '32%', left: '20%',
  background: '#fff',
  padding: '10px 18px',
  borderRadius: '999px',
  boxShadow: 'var(--shadow-card)',
  fontSize: '13px', fontWeight: 600, color: 'var(--ink-900)',
}

const fingerprintIconStyle = {
  position: 'absolute', bottom: '12%', right: '18%',
  width: '64px', height: '64px',
  borderRadius: '50%',
  background: 'linear-gradient(160deg, #8A6BFF, #6E5BFF)',
  boxShadow: '0 12px 24px rgba(110,91,255,.4), inset 0 2px 0 rgba(255,255,255,.5)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: '#fff',
}
</script>
