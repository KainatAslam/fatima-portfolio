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
    class="relative w-full py-8 sm:py-10 md:py-12 border-b border-line last:border-b-0"
  >
    <div
      class="max-w-8xl mx-auto px-5 sm:px-6 md:px-8 lg:px-12 w-full"
      :class="containerClass"
    >
      <slot />
    </div>
  </section>
</template>
