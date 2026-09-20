<script setup>
import { ref, computed } from 'vue'
import { caseStudiesData } from '@/data/caseStudies'
import BaseSection from '@/components/base/BaseSection.vue'
import SectionHeading from '@/components/base/SectionHeading.vue'
import TagBadge from '@/components/base/TagBadge.vue'

const selectedIndex = ref(0)

const activeCase = computed(() => caseStudiesData.cases[selectedIndex.value] || caseStudiesData.cases[0])

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
    <SectionHeading
      heading-id="case-studies-heading"
      :eyebrow="caseStudiesData.eyebrow"
      :title="caseStudiesData.title"
      :description="caseStudiesData.description"
    />

    <!-- Case Selector Tabs -->
    <div
      role="tablist"
      aria-label="Case studies selector"
      class="flex gap-2 sm:gap-3 mb-6 overflow-x-auto no-scrollbar pb-1"
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
        class="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#6B483D]"
        :class="selectedIndex === index
          ? 'bg-[#36241D] text-[#F1EEEB] border-[#36241D]'
          : 'bg-transparent text-[#6B483D] border-[#CDC6C3] hover:border-[#6B483D]'"
        @click="selectedIndex = index"
      >
        <span class="font-mono opacity-60">{{ String(index + 1).padStart(2, '0') }}</span>
        {{ item.client }}
      </button>
    </div>

    <!-- Detail Panel — Split Card Design -->
    <Transition
      mode="out-in"
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
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
        <!-- ── CARD 1: Split — Text left / Image-like brown right ── -->
        <div class="grid grid-cols-1 lg:grid-cols-2 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#CDC6C3] shadow-lg mb-5">

          <!-- Left: White cream text panel -->
          <div class="bg-[#F6F2EE] p-7 sm:p-10 flex flex-col justify-between">
            <div>
              <p class="text-[10px] font-mono font-bold uppercase tracking-widest text-[#6B483D] mb-4">
                {{ activeCase.client }} — The Problem
              </p>
              <h3 class="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#241E1C] leading-tight mb-4 uppercase">
                {{ activeCase.title }}
              </h3>
              <div class="w-10 h-px bg-[#CDC6C3] mb-5" />
              <p class="text-sm text-[#6E625B] leading-relaxed">
                {{ activeCase.problem.challenge }}
              </p>
            </div>

            <!-- Constraints -->
            <ul class="mt-6 space-y-2">
              <li
                v-for="(c, i) in activeCase.problem.constraints"
                :key="i"
                class="flex items-start gap-2.5 text-xs text-[#6E625B]"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-[#6B483D] mt-1.5 shrink-0" />
                {{ c }}
              </li>
            </ul>
          </div>

          <!-- Right: Dark brown image panel -->
          <div class="relative bg-[#36241D] p-7 sm:p-10 flex flex-col justify-between min-h-[260px]">
            <!-- Decorative grid lines -->
            <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(#CFB3A9 1px, transparent 1px), linear-gradient(90deg, #CFB3A9 1px, transparent 1px); background-size: 40px 40px;" />

            <div class="relative">
              <p class="text-[10px] font-mono font-bold uppercase tracking-widest text-[#CFB3A9] mb-3">
                The Solution
              </p>
              <p class="text-sm sm:text-base text-[#F1EEEB] leading-relaxed font-medium">
                {{ activeCase.solution.approach }}
              </p>
            </div>

            <!-- Tech stack badges -->
            <div class="relative flex flex-wrap gap-2 mt-6">
              <TagBadge
                v-for="tag in activeCase.solution.stack"
                :key="tag"
                variant="default"
                class="bg-[#4A332A]/80 text-muted border-[#4A332A]"
              >
                {{ tag }}
              </TagBadge>
            </div>
          </div>
        </div>

        <!-- ── CARD 2: Decisions + Results ── -->
        <div class="grid grid-cols-1 lg:grid-cols-2 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#CDC6C3] shadow-md">

          <!-- Left: Key decisions — warm panel -->
          <div class="bg-[#E4D8CB] p-7 sm:p-10">
            <p class="text-[10px] font-mono font-bold uppercase tracking-widest text-[#6B483D] mb-5">
              Key Decisions
            </p>
            <div class="space-y-3">
              <div
                v-for="(decision, dIdx) in activeCase.solution.decisions"
                :key="dIdx"
                class="flex items-start gap-3 bg-white/60 rounded-xl p-3.5"
              >
                <span class="font-mono text-[10px] font-bold text-[#6B483D] mt-0.5 shrink-0">{{ String(dIdx + 1).padStart(2, '0') }}</span>
                <p class="text-xs sm:text-sm text-[#241E1C] leading-relaxed">{{ decision }}</p>
              </div>
            </div>
          </div>

          <!-- Right: Metrics — white panel -->
          <div class="bg-white p-7 sm:p-10 flex flex-col justify-center">
            <p class="text-[10px] font-mono font-bold uppercase tracking-widest text-[#6B483D] mb-6">
              Quantified Outcomes
            </p>
            <div class="space-y-6">
              <div
                v-for="(res, rIdx) in activeCase.solution.results"
                :key="rIdx"
                class="flex items-end gap-4 pb-4 border-b border-[#E4D8CB] last:border-b-0 last:pb-0"
              >
                <span class="font-heading text-3xl sm:text-4xl font-bold text-[#6B483D] leading-none shrink-0">
                  {{ res.value }}
                </span>
                <span class="text-xs text-[#6E625B] leading-snug font-medium mb-0.5">
                  {{ res.label }}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Transition>

  </BaseSection>
</template>
