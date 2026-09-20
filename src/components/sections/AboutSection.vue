<script setup>
import { profileData } from '@/data/profile'
import BaseSection from '@/components/base/BaseSection.vue'
import SectionHeading from '@/components/base/SectionHeading.vue'
import BaseCard from '@/components/base/BaseCard.vue'

const about = profileData.about
</script>

<template>
  <BaseSection id="about" aria-labelledby="about-heading">
    <!-- Header -->
    <SectionHeading
      heading-id="about-heading"
      :eyebrow="about.eyebrow"
      :title="about.title"
      align="center"
    />

    <!-- Narrow Column Layout (max ~70 chars per line) -->
    <div class="max-w-2xl mx-auto space-y-8">
      
      <!-- Optional Portrait Image -->
      <div
        v-if="about.showPortrait && about.portrait"
        class="flex justify-center mb-6"
      >
        <div class="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-accent/40 shadow-md p-1 bg-surface">
          <img
            :src="about.portrait.src"
            :alt="about.portrait.alt"
            class="w-full h-full object-cover rounded-full"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Main Biography Paragraphs (Max ~70 characters line length) -->
      <div class="space-y-5 text-base sm:text-lg text-ink font-normal leading-relaxed">
        <p
          v-for="(paragraph, pIdx) in about.paragraphs"
          :key="pIdx"
        >
          {{ paragraph }}
        </p>
      </div>

      <!-- Single Highlighted Line Stating Core Working Goal -->
      <BaseCard
        padding="p-6 sm:p-7"
        :hover="false"
        custom-class="bg-surface border-l-4 border-l-accent border-line shadow-sm"
      >
        <div class="flex items-start gap-3.5">
          <!-- Sparkle / Target indicator -->
          <div class="p-1.5 rounded-full bg-accent/10 text-accent shrink-0 mt-0.5" aria-hidden="true">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>

          <div class="space-y-1">
            <p class="text-xs font-bold tracking-widest uppercase text-accent">
              Core Objective &amp; Goal
            </p>
            <p class="text-base sm:text-lg font-bold text-ink leading-snug">
              {{ about.goal }}
            </p>
          </div>
        </div>
      </BaseCard>

    </div>
  </BaseSection>
</template>
