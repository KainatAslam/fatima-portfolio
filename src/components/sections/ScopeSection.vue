<script setup>
import { scopeData } from '@/data/scope'
import BaseSection from '@/components/base/BaseSection.vue'
import SectionHeading from '@/components/base/SectionHeading.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import TagBadge from '@/components/base/TagBadge.vue'
</script>

<template>
  <BaseSection id="scope" aria-labelledby="scope-heading">
    <!-- Section Header with Title & Help text -->
    <SectionHeading
      heading-id="scope-heading"
      :eyebrow="scopeData.eyebrow"
      :title="scopeData.title"
      :description="scopeData.description"
    />

    <!-- Main Full-Width Card (100% of section container) -->
    <BaseCard padding="p-6 sm:p-8 lg:p-10" :hover="false">
      <!-- 3-Column Steps Grid with Flow Connectors -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative">
        
        <div
          v-for="(step, index) in scopeData.steps"
          :key="step.number"
          class="flex flex-col justify-between relative group/step"
        >
          <!-- Flow Arrow Connector (Visible between steps on desktop) -->
          <div
            v-if="index < scopeData.steps.length - 1"
            class="hidden lg:flex items-center justify-center absolute -right-5 top-1/3 -translate-y-1/2 z-10 text-line group-hover/step:text-accent transition-colors"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>

          <!-- Step Card Content -->
          <div class="flex flex-col h-full bg-background/50 hover:bg-background/80 p-6 sm:p-7 rounded-card border border-line transition-all duration-200">
            
            <!-- Top Row: Stage Number & Status/Phase Badge -->
            <div class="flex items-center justify-between gap-2 mb-5">
              <span class="text-xs font-bold tracking-widest uppercase text-accent">
                {{ step.stage }}
              </span>
              <TagBadge v-if="step.badge" variant="outline">
                {{ step.badge }}
              </TagBadge>
            </div>

            <!-- Step Title -->
            <h3 class="font-heading text-2xl sm:text-3xl font-bold text-ink mb-3">
              {{ step.title }}
            </h3>

            <!-- Step 2-3 line Explanation -->
            <p class="text-sm sm:text-base text-muted leading-relaxed font-normal mb-6">
              {{ step.description }}
            </p>

            <!-- Deliverables / What happens in this step -->
            <div class="space-y-2.5 mb-8 flex-1">
              <div
                v-for="(item, itemIndex) in step.deliverables"
                :key="itemIndex"
                class="flex items-start gap-2.5 text-xs sm:text-sm text-ink font-medium"
              >
                <!-- Check bullet marker -->
                <svg
                  class="w-4 h-4 text-accent shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
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
              class="pt-4 border-t border-line bg-surface -mx-6 -mb-6 p-4 sm:p-5 rounded-b-card mt-auto"
            >
              <p class="text-[11px] font-semibold uppercase tracking-wider text-muted mb-1">
                {{ step.output.label }}
              </p>
              <p class="text-xs sm:text-sm font-semibold text-ink">
                {{ step.output.value }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </BaseCard>
  </BaseSection>
</template>
