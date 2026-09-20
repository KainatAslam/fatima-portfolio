<script setup>
import IntroSection from '@/components/sections/IntroSection.vue'
import ScopeSection from '@/components/sections/ScopeSection.vue'
import ShowcaseSection from '@/components/sections/ShowcaseSection.vue'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection.vue'
import DirectorySection from '@/components/sections/DirectorySection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import FloatingNav from '@/components/layout/FloatingNav.vue'
</script>

<template>
  <div class="min-h-screen bg-background text-ink flex flex-col selection:bg-accent selection:text-accent-ink relative">
    <!-- Floating Quick Navigation Pill (Visible after scrolling past Intro) -->
    <FloatingNav />

    <!-- Main Content Sections Flow -->
    <main id="main-content" class="flex-1">
      <!-- Section 1: Intro / Identity (id: intro) -->
      <IntroSection />

      <!-- Section 2: Scope & Development Method (id: scope) -->
      <ScopeSection />

      <!-- Section 3: Product Showcase Carousel (id: showcase) -->
      <ShowcaseSection />

      <!-- Section 4: Technical Case Studies (id: case-studies) -->
      <CaseStudiesSection />

      <!-- Section 5: Work Directory (id: directory) -->
      <DirectorySection />

      <!-- Section 6: Biographical Notes (id: about) -->
      <AboutSection />

      <!-- Section 7: Let's Talk (id: contact) -->
      <ContactSection />
    </main>

    <!-- Base Semantic Footer -->
    <footer class="py-12 border-t border-line text-center text-xs text-muted">
      <div class="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {{ new Date().getFullYear() }} Fatima Aslam. All formulations, dossiers &amp; clinical data proprietary.</p>
        <p class="text-muted">Built with Vue 3 (Composition API), Vite &amp; Tailwind CSS</p>
      </div>
    </footer>
  </div>
</template>
