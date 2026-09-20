<script setup>
import { useTemplateRef } from 'vue'
import { productsData } from '@/data/products'
import { useScrollCarousel } from '@/composables/useScrollCarousel'
import BaseSection from '@/components/base/BaseSection.vue'
import SectionHeading from '@/components/base/SectionHeading.vue'
import TagBadge from '@/components/base/TagBadge.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const scrollContainerRef = useTemplateRef('scrollContainer')
const { canPrev, canNext, scrollPrev, scrollNext } = useScrollCarousel(scrollContainerRef)
</script>

<template>
  <BaseSection id="showcase" aria-labelledby="showcase-heading">
    <!-- Section Header with Carousel Controls -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
      <SectionHeading
        heading-id="showcase-heading"
        :eyebrow="productsData.eyebrow"
        :title="productsData.title"
        :description="productsData.description"
        class="mb-0 max-w-2xl"
      />

      <!-- Carousel Navigation Buttons -->
      <div
        class="flex items-center gap-3 shrink-0"
        role="group"
        aria-label="Carousel pagination controls"
      >
        <BaseButton
          variant="outline"
          size="sm"
          :disabled="!canPrev"
          aria-label="Previous product card"
          @click="scrollPrev"
        >
          <svg
            class="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span class="sr-only">Previous</span>
        </BaseButton>

        <BaseButton
          variant="outline"
          size="sm"
          :disabled="!canNext"
          aria-label="Next product card"
          @click="scrollNext"
        >
          <span class="sr-only">Next</span>
          <svg
            class="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </BaseButton>
      </div>
    </div>

    <!-- Scroll-snap horizontal carousel container -->
    <div
      ref="scrollContainer"
      tabindex="0"
      role="region"
      aria-label="Product formulations carousel"
      class="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 -mx-5 px-5 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12 focus-visible:outline-none"
    >
      <article
        v-for="item in productsData.items"
        :key="item.id"
        class="snap-start shrink-0 w-[85vw] sm:w-[360px] md:w-[380px] lg:w-[400px] flex flex-col bg-surface border border-line rounded-card overflow-hidden transition-all duration-200 hover:border-accent hover:shadow-lg group"
      >
        <!-- Product Image Container (16:10 aspect ratio) -->
        <div class="relative aspect-[16/10] w-full overflow-hidden bg-background">
          <img
            :src="item.image"
            :alt="item.alt || item.product"
            loading="lazy"
            class="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
          <div
            class="absolute top-3 right-3 z-10"
          >
            <TagBadge variant="accent">
              {{ item.category }}
            </TagBadge>
          </div>
        </div>

        <!-- Product Card Body -->
        <div class="p-6 flex flex-col flex-1 justify-between gap-4">
          <div>
            <p class="text-xs font-semibold tracking-wider uppercase text-muted mb-1">
              {{ item.client }}
            </p>

            <h3 class="font-heading text-2xl font-bold text-ink group-hover:text-accent transition-colors leading-tight">
              {{ item.product }}
            </h3>

            <p
              v-if="item.description"
              class="mt-2 text-xs sm:text-sm text-muted leading-relaxed font-normal line-clamp-2"
            >
              {{ item.description }}
            </p>
          </div>

          <!-- Bottom Meta Footer -->
          <div class="pt-4 border-t border-line flex items-center justify-between text-xs text-muted">
            <span class="font-mono font-medium">{{ item.code || 'BATCH-R&D' }}</span>
            <span class="inline-flex items-center gap-1 text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              View monograph
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </div>
  </BaseSection>
</template>
