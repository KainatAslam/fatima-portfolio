<script setup>
import { computed } from 'vue'

const props = defineProps({
  status: {
    type: String,
    default: 'Completed', // 'Completed' | 'In progress' | 'On hold' | 'Discovery'
  },
  label: {
    type: String,
    default: ''
  }
})

// Map statuses to token classes:
// - Completed: dot in 'ink'
// - In progress: dot in 'accent'
// - On hold: dot in 'muted'
// - Discovery: dot in 'signal'
const dotClass = computed(() => {
  const norm = props.status.toLowerCase()
  if (norm.includes('progress') || norm === 'active') {
    return 'bg-accent'
  }
  if (norm.includes('discovery') || norm === 'research') {
    return 'bg-signal'
  }
  if (norm.includes('hold') || norm === 'paused') {
    return 'bg-muted'
  }
  // Default 'completed' or done
  return 'bg-ink'
})

const displayLabel = computed(() => {
  return props.label || props.status
})
</script>

<template>
  <span
    class="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-interactive bg-surface text-ink border border-line"
  >
    <!-- Status Dot -->
    <span
      class="inline-block w-2 h-2 rounded-full shrink-0"
      :class="dotClass"
      aria-hidden="true"
    />
    <span>{{ displayLabel }}</span>
  </span>
</template>
