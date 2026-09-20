<script setup>
defineProps({
  hover: {
    type: Boolean,
    default: true
  },
  padding: {
    type: String,
    default: 'p-6 sm:p-8'
  },
  customClass: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div
    class="bg-surface border border-line rounded-card transition-all duration-200 relative overflow-hidden"
    :class="[
      padding,
      hover ? 'hover:border-accent/60 hover:shadow-md' : '',
      customClass
    ]"
  >
    <slot />
  </div>
</template>
