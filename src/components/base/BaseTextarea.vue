<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  rows: {
    type: [Number, String],
    default: 4
  },
  name: {
    type: String,
    default: undefined
  }
})

defineEmits(['update:modelValue', 'blur', 'focus'])
</script>

<template>
  <div class="flex flex-col gap-1.5 w-full">
    <!-- Visible Label with Required Marker -->
    <label
      :for="id"
      class="text-xs sm:text-sm font-semibold text-ink flex items-center justify-between"
    >
      <span>
        {{ label }}
        <span v-if="required" class="text-accent ml-0.5" aria-hidden="true">*</span>
      </span>
      <span v-if="!required" class="text-[11px] font-normal text-muted">Optional</span>
    </label>

    <!-- Textarea Field -->
    <textarea
      :id="id"
      :name="name || id"
      :rows="rows"
      :value="modelValue"
      :required="required"
      :disabled="disabled"
      :placeholder="placeholder"
      :aria-invalid="error ? 'true' : 'false'"
      :aria-describedby="error ? `${id}-error` : undefined"
      class="w-full px-4 py-3 rounded-card bg-surface border text-ink placeholder:text-muted/60 text-sm transition-all duration-200 resize-y disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
      :class="error ? 'border-accent ring-1 ring-accent/30' : 'border-line hover:border-line'"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
    />

    <!-- Validation Error Text -->
    <p
      v-if="error"
      :id="`${id}-error`"
      class="text-xs text-accent font-medium mt-0.5 flex items-center gap-1.5"
      role="alert"
    >
      <svg
        class="w-3.5 h-3.5 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      <span>{{ error }}</span>
    </p>
  </div>
</template>
