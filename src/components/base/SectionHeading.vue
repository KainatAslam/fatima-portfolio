<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  eyebrow: {
    type: String,
    default: ''
  },
  align: {
    type: String,
    default: 'left',
    validator: (val) => ['left', 'center'].includes(val)
  },
  headingId: {
    type: String,
    default: undefined
  }
})
</script>

<template>
  <header
    class="mb-10 sm:mb-12 md:mb-16"
    :class="align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-3xl'"
  >
    <p
      v-if="eyebrow"
      class="text-xs sm:text-sm font-semibold tracking-widest uppercase text-accent mb-2.5 sm:mb-3"
    >
      {{ eyebrow }}
    </p>

    <h2
      :id="headingId"
      class="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-tight"
    >
      {{ title }}
    </h2>

    <p
      v-if="description"
      class="mt-3 sm:mt-4 text-base sm:text-lg text-muted leading-relaxed font-normal"
    >
      {{ description }}
    </p>
  </header>
</template>
