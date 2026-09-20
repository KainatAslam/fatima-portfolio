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
    class="mb-6 sm:mb-8 md:mb-10"
    :class="align === 'center' ? 'text-center mx-auto max-w-5xl' : 'text-left max-w-5xl'"
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
      class="mt-2 text-base sm:text-sm text-muted leading-relaxed font-normal"
    >
      {{ description }}
    </p>
  </header>
</template>
