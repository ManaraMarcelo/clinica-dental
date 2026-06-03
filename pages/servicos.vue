<template>
  <div>
    <AppNav />
    <ServicesHero />
    <ServicesGrid />
    <ServicesSpotlight />
    <ServicesProcess />
    <ServicesPricing />
    <ServicesFAQ />
    <AppFinalCTA />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Serviços — Clínica Dental',
  description: 'Conheça todos os serviços da Clínica Dental: limpeza, clareamento, ortodontia, implantes e muito mais.',
})

useScrollReveal()
</script>
