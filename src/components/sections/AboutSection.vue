<script setup>
import { profileData } from '@/data/profile'
import BaseSection from '@/components/base/BaseSection.vue'
import SectionHeading from '@/components/base/SectionHeading.vue'
import BaseCard from '@/components/base/BaseCard.vue'

const about = profileData.about
</script>

<template>
  <BaseSection id="about" aria-labelledby="about-heading">
    <div class="max-w-6xl mx-auto">
      <SectionHeading
        heading-id="about-heading"
        :eyebrow="about.eyebrow"
        :title="about.title"
        description="A practice built where clinical discipline meets considered sensory design."
      />

      <div class="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] border border-line shadow-lg">
        <div class="bg-surface p-7 sm:p-10 lg:p-14 flex flex-col justify-between min-h-[420px]">
          <div class="max-w-xl space-y-6">
            <p class="text-[10px] font-mono font-bold uppercase tracking-[0.24em] text-accent">
              The person behind the formula
            </p>
            <div class="space-y-5 text-base sm:text-lg text-ink leading-relaxed">
              <p v-for="(paragraph, pIdx) in about.paragraphs" :key="pIdx">
                {{ paragraph }}
              </p>
            </div>
          </div>

          <div class="flex items-center gap-3 mt-10 pt-5 border-t border-line">
            <span class="w-8 h-px bg-accent" aria-hidden="true" />
            <span class="text-xs font-mono uppercase tracking-widest text-muted">Lahore · Pakistan</span>
          </div>
        </div>

        <div class="relative overflow-hidden bg-[#D7C2A7] p-7 sm:p-10 min-h-[360px] flex flex-col justify-between">
          <div class="absolute inset-0 opacity-40" style="background-image: linear-gradient(135deg, transparent 49.5%, #F1EEEB 50%, transparent 50.5%); background-size: 32px 32px;" />
          <div class="relative flex justify-between items-start">
            <span class="text-[10px] font-mono font-bold uppercase tracking-[0.24em] text-[#6B483D]">01 / Notes</span>
            <span class="text-3xl font-heading text-[#6B483D]/60" aria-hidden="true">✦</span>
          </div>

          <div v-if="about.showPortrait && about.portrait" class="relative flex justify-center py-5">
            <div class="w-52 h-52 sm:w-64 sm:h-64 bg-[#F1EEEB] border-8 border-[#F1EEEB]/70 shadow-xl rotate-2 p-2">
              <img
                :src="about.portrait.src"
                :alt="about.portrait.alt"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <p class="relative max-w-xs text-sm text-[#6B483D] leading-relaxed">
            Formulation is research made tangible: precise enough for a dossier, considered enough for daily use.
          </p>
        </div>
      </div>

     
    </div>
  </BaseSection>
</template>
