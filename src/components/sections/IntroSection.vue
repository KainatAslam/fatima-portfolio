<script setup>
import { profileData } from '@/data/profile'
</script>

<template>
  <section
    id="intro"
    aria-label="Introduction"
    class="relative min-h-[85vh] md:min-h-screen w-full flex items-center justify-center py-16 sm:py-20 md:py-28 px-5 sm:px-6 md:px-8 lg:px-12 border-b border-line"
  >
    <div
      class="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center animate-fade-in-up"
    >
      <!-- Left Column: Name & Designation -->
      <div class="lg:col-span-7 flex flex-col justify-center">
        <p
          v-if="profileData.eyebrow"
          class="text-xs sm:text-sm font-semibold tracking-widest uppercase text-accent mb-3 sm:mb-4"
        >
          {{ profileData.eyebrow }}
        </p>

        <h1
          class="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-ink leading-[1.05]"
        >
          {{ profileData.name }}
        </h1>

        <p
          class="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-muted font-normal leading-relaxed max-w-xl"
        >
          {{ profileData.designation }}
        </p>
      </div>

      <!-- Right Column: Keywords & Work Values along a thin dimmed line -->
      <div class="lg:col-span-5 flex flex-col justify-center">
        <div
          class="relative pl-6 sm:pl-8 border-l border-line py-2 space-y-4 sm:space-y-5"
        >
          <!-- Bullet Items -->
          <div
            v-for="(keyword, index) in profileData.keywords"
            :key="index"
            class="relative flex items-center gap-3 text-ink sm:text-lg font-medium tracking-wide group"
          >
            <!-- Bullet marker positioned on the vertical line -->
            <span
              class="absolute -left-[31px] sm:-left-[39px] w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-background transition-transform duration-200 group-hover:scale-125"
              aria-hidden="true"
            />
            <span class="text-ink transition-colors">
              {{ keyword }}
            </span>
          </div>

          <!-- Bottom micro metadata bar -->
          <div
            v-if="profileData.location || profileData.subline"
            class="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-line flex items-center justify-between text-xs tracking-widest uppercase text-muted font-medium"
          >
            <span>{{ profileData.location }}</span>
            <span>{{ profileData.subline }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
