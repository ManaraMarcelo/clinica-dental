<template>
  <div class="card reveal" :style="cardStyle">
    <div>
      <h3 :style="{ fontSize: '19px', fontWeight: 600, marginBottom: '6px' }">{{ title }}</h3>
      <p :style="{ fontSize: '14px', color: 'var(--ink-500)', lineHeight: 1.5 }">{{ sub }}</p>
    </div>
    <div :style="{ flex: 1, marginTop: 'auto' }">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  sub: string
  span?: number
  tall?: boolean
}>()

const cardStyle = computed(() => ({
  gridColumn: `span ${props.span ?? 1}`,
  padding: '28px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  minHeight: props.tall ? '320px' : '280px',
}))
</script>
