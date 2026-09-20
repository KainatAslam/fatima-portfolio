<script setup>
import { profileData } from '@/data/profile'
</script>

<template>
  <section
    id="intro"
    aria-label="Introduction"
    class="relative min-h-[85vh] md:min-h-screen w-full flex items-center justify-center py-8 sm:py-20 md:py-10 px-5 sm:px-6 md:px-8 lg:px-12 bg-[#36241D] text-[#F1EEEB] border-b border-[#4A332A] overflow-hidden"
  >
    <!-- Background Subtle Radial Ambient Glow -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#4A332A] via-transparent to-transparent opacity-60 pointer-events-none" />

    <div
      class="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10 animate-fade-in-up"
    >
      <!-- Left Column: Name & Designation -->
      <div class="lg:col-span-7 flex flex-col justify-center">
        <!-- Status / Eyebrow Badge -->
        <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 w-fit mb-6 shadow-2xs backdrop-blur-xs">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CFB3A9] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-[#CFB3A9]"></span>
          </span>
          <span class="text-xs font-semibold tracking-wider uppercase text-[#CFB3A9] font-mono">
            {{ profileData.eyebrow }}
          </span>
        </div>

        <!-- Name -->
        <h1
          class="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#F1EEEB] leading-[1.05]"
        >
          {{ profileData.name }}
        </h1>

        <!-- Designation -->
        <p
          class="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-[#CDC6C3] font-normal leading-relaxed max-w-xl"
        >
          {{ profileData.designation }}
        </p>

        <!-- CTA Button -->
        <div class="mt-8 flex items-center gap-4">
          <a
            :href="profileData.ctaLink || '#contact'"
            class="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#E4D8CB] hover:bg-white text-[#241E1C] font-semibold text-sm tracking-wide shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            {{ profileData.ctaText || "Let's talk" }}
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>

      <!-- Right Column: Dedicated Bullet Point Container Area (Skin-shade Container inspired by Reference) -->
      <div class="lg:col-span-5 flex flex-col justify-center">
        <!-- Bullet Point Card Container (Skin/Chai Shade) -->
        <div
          class="relative bg-[#E4D8CB] text-[#241E1C] border border-[#CDC6C3] rounded-3xl sm:rounded-[36px] p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <!-- Fine Arch Hairline Geometric Outline (Inspired by reference arch curve) -->
          <div class="absolute inset-2  rounded-[28px] sm:rounded-[30px] pointer-events-none" />

          <!-- Card Header / Title -->
          <div class="flex items-center justify-between pb-4 mb-5 border-b border-[#36241D]/15 relative z-10">
            <span class="text-xs font-bold tracking-widest uppercase text-[#36241D] flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#6B483D] inline-block"></span>
              Work Morals & Keywords
            </span>
            <span class="text-[11px] font-mono text-[#6E625B] uppercase font-semibold">01 / Intro</span>
          </div>

          <!-- Bullet Points List (1-2 Word Keywords) -->
          <div class="space-y-3 relative z-10">
            <div
              v-for="(keyword, index) in profileData.keywords"
              :key="index"
              class="group flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white/80 hover:bg-white border border-[#CDC6C3] hover:border-[#6B483D]/40 transition-all duration-200 shadow-2xs"
            >
              <!-- Bullet Accent Badge -->
              <span
                class="w-7 h-7 rounded-xl bg-[#36241D] text-[#F1EEEB] flex items-center justify-center text-xs font-mono font-bold shrink-0 group-hover:bg-[#6B483D] transition-colors"
              >
                0{{ index + 1 }}
              </span>

              <!-- Keyword Text (1-2 Words) -->
              <span class="text-[#241E1C] font-semibold text-sm sm:text-base tracking-wide group-hover:translate-x-1 transition-transform">
                {{ keyword }}
              </span>
            </div>
          </div>

          <!-- Bottom Micro Metadata Bar -->
          <div
            v-if="profileData.location || profileData.subline"
            class="pt-5 mt-5 border-t border-[#36241D]/15 flex items-center justify-between text-[11px] tracking-wider uppercase text-[#6E625B] font-medium font-mono relative z-10"
          >
            <span>📍 {{ profileData.location }}</span>
            <span>✦ {{ profileData.subline }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
