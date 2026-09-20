<script setup>
import { scopeData } from '@/data/scope'
import BaseSection from '@/components/base/BaseSection.vue'
import SectionHeading from '@/components/base/SectionHeading.vue'
import TagBadge from '@/components/base/TagBadge.vue'
</script>

<template>
  <BaseSection id="scope" aria-labelledby="scope-heading">
    <!-- Section Header with Title & Concise Help text -->
    <SectionHeading
      heading-id="scope-heading"
      :eyebrow="scopeData.eyebrow"
      :title="scopeData.title"
      :description="scopeData.description"
    />

    <!-- Main Full-Width Outer Container in Deep Roasted Brown for Focus -->
    <div class="w-full bg-[#36241D] text-[#F1EEEB] border border-[#4A332A] rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-9 shadow-xl relative overflow-hidden">
      
      <!-- Top Subtle Heading within the Brown Box -->
      <div class="flex items-center justify-between pb-4 mb-6 border-b border-[#4A332A] text-xs font-mono uppercase tracking-wider text-[#CFB3A9]">
        <span class="flex items-center gap-2 font-bold">
          <span class="w-2 h-2 rounded-full bg-[#CFB3A9]" />
          Methodology &amp; Workflow
        </span>
        <span class="text-[#CDC6C3]/70">3-Stage Framework</span>
      </div>

      <!-- 3-Column Steps Grid with Flow Connectors -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
        
        <div
          v-for="(step, index) in scopeData.steps"
          :key="step.number"
          class="flex flex-col justify-between relative group/step"
        >
          <!-- Individual Step Card (Light Froth Surface on top of Deep Brown Box) -->
          <div class="flex flex-col h-full min-h-[26rem] bg-[#F1EEEB] text-[#241E1C] p-4 rounded-xl sm:rounded-2xl border border-[#CDC6C3] shadow-md hover:shadow-lg transition-all duration-200">
            
            <!-- Top Row: Stage Number & Status Badge -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="text-[11px] font-bold tracking-widest uppercase text-[#6B483D] font-mono">
                {{ step.stage }}
              </span>
              <TagBadge v-if="step.badge" variant="outline" class="text-[10px] px-2 py-0.5 border-[#CDC6C3]">
                {{ step.badge }}
              </TagBadge>
            </div>

            <!-- Step Title -->
            <h3 class="font-heading text-xl sm:text-2xl font-bold text-[#241E1C] mb-2">
              {{ step.title }}
            </h3>

            <!-- Step Concise Explanation -->
            <p class="text-xs sm:text-sm text-[#6E625B] leading-relaxed font-normal mb-6">
              {{ step.description }}
            </p>

            <!-- Deliverables -->
            <div class="space-y-3 mb-6 flex-1">
              <div
                v-for="(item, itemIndex) in step.deliverables"
                :key="itemIndex"
                class="flex items-start gap-2 text-xs text-[#241E1C] font-medium"
              >
                <!-- Check Icon -->
                <svg
                  class="w-3.5 h-3.5 text-[#6B483D] shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>{{ item }}</span>
              </div>
            </div>

            <!-- Bottom Stage Output Box -->
            <div
              v-if="step.output"
              class="pt-4 border-t border-[#CDC6C3]/60 bg-[#E4D8CB]/50 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-4 sm:p-5 rounded-b-xl sm:rounded-b-2xl mt-auto"
            >
              <p class="text-[10px] font-bold uppercase tracking-wider text-[#6E625B] mb-0.5">
                {{ step.output.label }}
              </p>
              <p class="text-xs font-bold text-[#241E1C]">
                {{ step.output.value }}
              </p>
            </div>
          </div>

          <!-- Desktop Flow Arrow Connector: centered in the column gap -->
          <div
            v-if="index < scopeData.steps.length - 1"
            class="hidden lg:flex items-center justify-center absolute -right-4 top-1/2 -translate-y-1/2 translate-x-1/2 z-30 w-8 h-8 text-[#CFB3A9]"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </div>

          <!-- Mobile Flow Downward Indicator (Centered between stacked cards) -->
          <div
            v-if="index < scopeData.steps.length - 1"
            class="lg:hidden flex items-center justify-center my-1 text-[#CFB3A9]"
            aria-hidden="true"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 5v14" />
              <path d="M6 13l6 6 6-6" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  </BaseSection>
</template>
