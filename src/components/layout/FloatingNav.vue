<script setup>
import { computed } from 'vue'
import { useActiveSection } from '@/composables/useActiveSection'
import BaseButton from '@/components/base/BaseButton.vue'

const sectionMap = {
  intro: 'Intro',
  scope: 'Philosophy & Scope',
  showcase: 'Showcase',
  'case-studies': 'Case Studies',
  directory: 'Work Directory',
  about: 'Biographical Notes',
  contact: 'Contact'
}

const { activeSectionId, isPastIntro } = useActiveSection([
  'intro',
  'scope',
  'showcase',
  'case-studies',
  'directory',
  'about',
  'contact'
])

const currentSectionName = computed(() => {
  return sectionMap[activeSectionId.value] || 'Overview'
})
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4 pointer-events-none"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4 pointer-events-none"
  >
    <nav
      v-show="isPastIntro"
      aria-label="Quick navigation"
      class="fixed bottom-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div
        class="pointer-events-auto flex items-center gap-3 sm:gap-4 p-1.5 sm:p-2 pl-4 sm:pl-5 bg-surface border border-line rounded-interactive shadow-lg shadow-ink/10 text-xs sm:text-sm"
      >
        <!-- Current section indicator -->
        <div class="flex items-center gap-2 select-none">
          <span class="w-2 h-2 rounded-full bg-accent" />
          <span class="text-muted hidden sm:inline text-xs uppercase tracking-wider">Viewing:</span>
          <span class="text-ink font-semibold">{{ currentSectionName }}</span>
        </div>

        <div class="w-px h-4 bg-line" />

        <!-- "Let's talk" CTA linking to #contact -->
        <BaseButton
          href="#contact"
          variant="primary"
          size="sm"
          aria-label="Jump to contact section"
        >
          <span>Let's talk</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </BaseButton>
      </div>
    </nav>
  </Transition>
</template>
