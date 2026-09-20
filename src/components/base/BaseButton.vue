<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (val) => ['primary', 'ghost', 'outline'].includes(val)
  },
  href: {
    type: String,
    default: undefined
  },
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md',
    validator: (val) => ['sm', 'md', 'lg'].includes(val)
  },
  ariaLabel: {
    type: String,
    default: undefined
  }
})

const isLink = computed(() => !!props.href)

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-4 py-1.5 text-xs'
    case 'lg':
      return 'px-7 py-3 text-base'
    default:
      return 'px-5 py-2.5 text-sm'
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'ghost':
      return 'bg-transparent text-muted hover:text-ink hover:bg-surface border border-transparent'
    case 'outline':
      return 'bg-surface text-ink hover:text-accent border border-line hover:border-accent'
    case 'primary':
    default:
      return 'bg-accent text-accent-ink font-semibold hover:opacity-90 active:translate-y-0.5 shadow-sm'
  }
})
</script>

<template>
  <component
    :is="isLink ? 'a' : 'button'"
    :href="isLink ? href : undefined"
    :type="isLink ? undefined : type"
    :disabled="isLink ? undefined : disabled"
    :aria-disabled="disabled ? 'true' : undefined"
    :aria-label="ariaLabel"
    class="inline-flex items-center justify-center gap-2 font-medium rounded-interactive transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    :class="[sizeClasses, variantClasses]"
  >
    <slot />
  </component>
</template>
