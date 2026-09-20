<script setup>
import { ref, computed } from 'vue'
import { caseStudiesData } from '@/data/caseStudies'
import BaseSection from '@/components/base/BaseSection.vue'
import SectionHeading from '@/components/base/SectionHeading.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import TagBadge from '@/components/base/TagBadge.vue'

const selectedIndex = ref(0)

const activeCase = computed(() => {
  return caseStudiesData.cases[selectedIndex.value] || caseStudiesData.cases[0]
})

const handleKeydown = (event) => {
  const total = caseStudiesData.cases.length
  if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
    event.preventDefault()
    selectedIndex.value = (selectedIndex.value + 1) % total
  } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
    event.preventDefault()
    selectedIndex.value = (selectedIndex.value - 1 + total) % total
  }
}
</script>

<template>
  <BaseSection id="case-studies" aria-labelledby="case-studies-heading">
    <!-- Header -->
    <SectionHeading
      heading-id="case-studies-heading"
      :eyebrow="caseStudiesData.eyebrow"
      :title="caseStudiesData.title"
      :description="caseStudiesData.description"
    />

    <!-- Master-Detail Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
      
      <!-- Master List (Left Column on Desktop, Horizontal Scroll on Mobile) -->
      <div
        role="tablist"
        aria-label="Case studies selector"
        class="lg:col-span-4 flex lg:flex-col gap-3 overflow-x-auto no-scrollbar pb-2 lg:pb-0"
        @keydown="handleKeydown"
      >
        <button
          v-for="(item, index) in caseStudiesData.cases"
          :id="`tab-${item.id}`"
          :key="item.id"
          role="tab"
          type="button"
          :aria-selected="selectedIndex === index"
          :aria-controls="`panel-${item.id}`"
          :tabindex="selectedIndex === index ? 0 : -1"
          class="shrink-0 w-[280px] sm:w-[320px] lg:w-full text-left p-5 rounded-card border transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
          :class="[
            selectedIndex === index
              ? 'bg-surface border-accent shadow-md shadow-ink/5 ring-1 ring-accent/30'
              : 'bg-surface/50 border-line hover:border-line hover:bg-surface'
          ]"
          @click="selectedIndex = index"
        >
          <div class="flex items-center justify-between gap-2 mb-2">
            <span
              class="text-xs font-bold tracking-wider uppercase"
              :class="selectedIndex === index ? 'text-accent' : 'text-muted'"
            >
              {{ item.client }}
            </span>
            <span
              class="text-[11px] font-mono"
              :class="selectedIndex === index ? 'text-ink font-semibold' : 'text-muted'"
            >
              0{{ index + 1 }}
            </span>
          </div>

          <h3 class="text-sm sm:text-base font-bold text-ink leading-snug mb-1.5">
            {{ item.title }}
          </h3>

          <p class="text-xs text-muted leading-relaxed line-clamp-2">
            {{ item.shortProblem }}
          </p>
        </button>
      </div>

      <!-- Detail Panel (Right Column) with Smooth Fade Transition -->
      <div class="lg:col-span-8">
        <Transition
          mode="out-in"
          enter-active-class="transition-opacity duration-200 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-150 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            :id="`panel-${activeCase.id}`"
            :key="activeCase.id"
            role="tabpanel"
            :aria-labelledby="`tab-${activeCase.id}`"
            tabindex="0"
            class="focus-visible:outline-none"
          >
            <BaseCard padding="p-6 sm:p-8 lg:p-10" :hover="false">
              <!-- Top Case Header -->
              <div class="border-b border-line pb-6 mb-8">
                <div class="flex items-center gap-2 mb-2">
                  <TagBadge variant="accent">{{ activeCase.client }}</TagBadge>
                  <span class="text-xs text-muted">Technical Deep Dive</span>
                </div>
                <h3 class="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ink leading-tight">
                  {{ activeCase.title }}
                </h3>
              </div>

              <!-- Two Separated Halves: The Problem & The Solution -->
              <div class="space-y-10">
                
                <!-- 1. The Problem -->
                <div class="space-y-4">
                  <div class="flex items-center gap-2">
                    <span class="w-1.5 h-4 bg-accent rounded-full" aria-hidden="true" />
                    <h4 class="text-xs sm:text-sm font-bold tracking-wider uppercase text-ink">
                      The Problem &amp; Constraints
                    </h4>
                  </div>

                  <p class="text-sm sm:text-base text-ink leading-relaxed font-normal bg-background/50 p-4 rounded-lg border border-line">
                    {{ activeCase.problem.challenge }}
                  </p>

                  <div class="space-y-2 pt-1">
                    <p class="text-xs font-semibold uppercase tracking-wider text-muted">Strict Constraints:</p>
                    <ul class="space-y-2">
                      <li
                        v-for="(constraint, cIdx) in activeCase.problem.constraints"
                        :key="cIdx"
                        class="flex items-start gap-2.5 text-xs sm:text-sm text-muted"
                      >
                        <span class="w-1.5 h-1.5 rounded-full bg-line mt-2 shrink-0" />
                        <span>{{ constraint }}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- 2. The Solution -->
                <div class="space-y-6 pt-4 border-t border-line">
                  <div class="flex items-center gap-2">
                    <span class="w-1.5 h-4 bg-accent rounded-full" aria-hidden="true" />
                    <h4 class="text-xs sm:text-sm font-bold tracking-wider uppercase text-ink">
                      The Solution &amp; Architectural Decisions
                    </h4>
                  </div>

                  <!-- Approach -->
                  <p class="text-sm sm:text-base text-ink leading-relaxed font-normal">
                    {{ activeCase.solution.approach }}
                  </p>

                  <!-- Key Technical Decisions & Trade-offs -->
                  <div class="space-y-2.5">
                    <p class="text-xs font-semibold uppercase tracking-wider text-muted">Key Engineering Decisions:</p>
                    <div class="grid grid-cols-1 gap-2.5">
                      <div
                        v-for="(decision, dIdx) in activeCase.solution.decisions"
                        :key="dIdx"
                        class="flex items-start gap-2.5 p-3.5 rounded-lg bg-surface border border-line text-xs sm:text-sm text-ink"
                      >
                        <svg
                          class="w-4 h-4 text-accent shrink-0 mt-0.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span>{{ decision }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Tech Stack / Methods as TagBadges -->
                  <div class="pt-2">
                    <p class="text-xs font-semibold uppercase tracking-wider text-muted mb-2.5">Domain Disciplines &amp; Stack:</p>
                    <div class="flex flex-wrap gap-2">
                      <TagBadge
                        v-for="tag in activeCase.solution.stack"
                        :key="tag"
                        variant="default"
                      >
                        {{ tag }}
                      </TagBadge>
                    </div>
                  </div>

                  <!-- Result Metrics (Large numbers with small labels) -->
                  <div class="pt-4">
                    <p class="text-xs font-semibold uppercase tracking-wider text-muted mb-3">Quantified Clinical Outcomes:</p>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div
                        v-for="(res, rIdx) in activeCase.solution.results"
                        :key="rIdx"
                        class="p-4 rounded-card bg-background border border-line flex flex-col justify-center"
                      >
                        <span class="font-heading text-2xl sm:text-3xl font-bold text-accent mb-1">
                          {{ res.value }}
                        </span>
                        <span class="text-xs text-muted font-medium leading-snug">
                          {{ res.label }}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </BaseCard>
          </div>
        </Transition>
      </div>

    </div>
  </BaseSection>
</template>
