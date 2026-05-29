<template>
  <div>
    <AppNav />
    <AppHero />
    <AppManifesto />
    <AppFeatures />
    <AppTestimonials />
    <AppPlatforms />
    <AppFinalCTA />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Dental Clinic — Smiles That Slap',
  description: 'Modern dental care that vibes with your always-on life — pain-free cleanings, in-chair whitening, and next-level smile design.',
})

useScrollReveal()
</script>
