<template>
  <footer :style="{ padding: '40px 0 64px', textAlign: 'center' }">
    <div class="container">
      <div :style="{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }">
        <img src="/logo-mark.svg" width="28" height="28" alt="Dental Clinic" />
        <span :style="{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: 'var(--ink-900)', letterSpacing: '-0.01em' }">
          Dental Clinic
        </span>
      </div>

      <div :style="{ display: 'flex', gap: '24px', justifyContent: 'center', marginBottom: '18px', flexWrap: 'wrap' }">
        <a
          v-for="link in footerLinks"
          :key="link"
          href="#"
          :style="{ fontSize: '13px', color: 'var(--ink-500)', textDecoration: 'none', fontWeight: 500 }"
        >{{ link }}</a>
      </div>

      <div :style="{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '24px' }">
        <a
          v-for="icon in socialIcons"
          :key="icon"
          href="#"
          :style="socialStyle"
        >{{ icon }}</a>
      </div>

      <div :style="{ fontSize: '12px', color: 'var(--ink-400)', fontFamily: 'var(--font-mono)' }">
        © 2026 Dental Clinic · All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const footerLinks = ['About Us', 'Pricing', 'Stories', 'Support', 'Privacy', 'Terms']
const socialIcons = ['𝕏', '◎', 'ig', 'in']

const socialStyle = {
  width: '32px', height: '32px',
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  borderRadius: '50%',
  background: 'var(--bg-card)',
  color: 'var(--ink-500)',
  textDecoration: 'none',
  fontSize: '14px',
}
</script>
