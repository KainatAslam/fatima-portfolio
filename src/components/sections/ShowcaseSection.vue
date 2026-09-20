<script setup>
import { useTemplateRef } from 'vue'
import { productsData } from '@/data/products'
import { useScrollCarousel } from '@/composables/useScrollCarousel'
import BaseSection from '@/components/base/BaseSection.vue'
import SectionHeading from '@/components/base/SectionHeading.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const scrollContainerRef = useTemplateRef('scrollContainer')
const { canPrev, canNext, scrollPrev, scrollNext } = useScrollCarousel(scrollContainerRef)
</script>

<template>
  <BaseSection id="showcase" aria-labelledby="showcase-heading">

    <!-- Section Header — tighter bottom margin -->
    <SectionHeading
      heading-id="showcase-heading"
      :eyebrow="productsData.eyebrow"
      :title="productsData.title"
      :description="productsData.description"
      class="mb-4 max-w-2xl"
    />

    <!-- Brown outer wrapper -->
    <div class="w-full bg-[#36241D] rounded-2xl sm:rounded-3xl px-5 sm:px-7 lg:px-9 py-6 sm:py-7 shadow-xl border border-[#4A332A]">

      <!-- Inner top bar: label + carousel nav buttons -->
      <div class="flex items-center justify-between mb-5">
        <span class="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[#CFB3A9]">
          <span class="w-1.5 h-1.5 rounded-full bg-[#CFB3A9]" />
          Formulation Archive
        </span>

        <!-- Carousel nav — now inside the brown box -->
        <div
          class="flex items-center gap-2 shrink-0"
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
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
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
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </BaseButton>
        </div>
      </div>

      <!-- Carousel scroll container -->
      <div
        ref="scrollContainer"
        tabindex="0"
        role="region"
        aria-label="Product formulations carousel"
        class="no-scrollbar flex items-stretch gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory focus-visible:outline-none pb-2"
      >
        <article
          v-for="(item, index) in productsData.items"
          :key="item.id"
          class="snap-start shrink-0 w-[58vw] sm:w-[220px] md:w-[230px] lg:w-[240px] flex flex-col group h-full"
        >
          <!-- Number label -->
          <p class="text-[11px] font-mono font-bold tracking-widest text-[#CFB3A9] mb-2 pl-0.5">
            {{ String(index + 1).padStart(2, '0') }}
          </p>

          <!-- Card wrapper -->
          <div class="flex flex-col h-full rounded-xl overflow-hidden border border-[#4A332A] group-hover:border-[#CFB3A9] group-hover:shadow-lg transition-all duration-200">

            <!-- Portrait image -->
            <div class="relative w-full aspect-[3/4] overflow-hidden bg-[#F1EEEB]">
              <img
                :src="item.image"
                :alt="item.alt || item.product"
                loading="lazy"
                class="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
              <!-- Category pill overlay -->
              <span class="absolute bottom-2 left-2 text-[9px] font-bold uppercase tracking-wider bg-[#36241D]/80 text-[#CFB3A9] px-2 py-0.5 rounded-full backdrop-blur-sm">
                {{ item.category }}
              </span>
            </div>

            <!-- Text body -->
            <div class="p-3">
              <h3 class="font-heading text-sm font-bold text-[#F1EEEB] leading-snug mb-1 group-hover:text-[#CFB3A9] transition-colors duration-200">
                {{ item.product }}
              </h3>
              <p class="text-[11px] text-[#CDC6C3]/80 leading-relaxed line-clamp-2">
                {{ item.description }}
              </p>
            </div>
          </div>
        </article>
      </div>

      <!-- Bottom row -->
      <div class="flex items-center justify-between mt-5 pt-4 border-t border-[#4A332A]">
        <span class="text-[10px] font-mono uppercase tracking-widest text-[#CFB3A9]/60">
          {{ productsData.items.length }} formulations in archive
        </span>
        <span class="flex items-center gap-1.5 text-[10px] font-mono text-[#CFB3A9]/60">
          <span class="w-1.5 h-1.5 rounded-full bg-[#CFB3A9]/40 inline-block" />
          Swipe to explore
        </span>
      </div>
    </div>

  </BaseSection>
</template>
