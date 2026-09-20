<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'default',
    validator: (val) => ['default', 'accent', 'outline'].includes(val)
  }
})
</script>

<template>
  <span
    class="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-interactive transition-colors"
    :class="{
      'bg-surface text-ink border border-line': variant === 'default',
      'bg-accent text-accent-ink': variant === 'accent',
      'bg-transparent text-muted border border-line': variant === 'outline',
    }"
  >
    <slot>{{ label }}</slot>
  </span>
</template>
