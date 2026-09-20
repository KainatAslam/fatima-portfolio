<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  ariaLabelledby: {
    type: String,
    default: undefined
  },
  containerClass: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <section
    :id="id"
    :aria-labelledby="ariaLabelledby"
    class="relative w-full py-16 sm:py-20 md:py-28 border-b border-line last:border-b-0"
  >
    <div
      class="max-w-6xl mx-auto px-5 sm:px-6 md:px-8 lg:px-12 w-full"
      :class="containerClass"
    >
      <slot />
    </div>
  </section>
</template>
