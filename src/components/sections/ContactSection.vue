<script setup>
import { profileData } from '@/data/profile'
import { useContactForm } from '@/composables/useContactForm'
import BaseSection from '@/components/base/BaseSection.vue'
import SectionHeading from '@/components/base/SectionHeading.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTextarea from '@/components/base/BaseTextarea.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const contact = profileData.contact

const {
  values,
  errors,
  submitting,
  submitted,
  submitError,
  validateField,
  submit,
  reset
} = useContactForm()

const handleSubmit = async () => {
  await submit()
}
</script>

<template>
  <BaseSection id="contact" aria-labelledby="contact-heading">
    <!-- Header -->
    <SectionHeading
      heading-id="contact-heading"
      :eyebrow="contact.eyebrow"
      :title="contact.title"
      :description="contact.description"
    />

    <!-- Contact Channels: horizontal row of cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      
        v-for="item in contact.channels"
        :key="item.id"
        :href="item.href"
        :target="item.href.startsWith('http') ? '_blank' : undefined"
        :rel="item.href.startsWith('http') ? 'noopener noreferrer' : undefined"
        class="group flex flex-col justify-between gap-6 p-5 rounded-card bg-surface border border-line hover:border-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <!-- Top row: icon + arrow -->
        <div class="flex items-start justify-between">
          <div class="w-10 h-10 rounded-full bg-background border border-line flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-ink group-hover:border-accent transition-colors shrink-0">
            <!-- Mail Icon -->
            <svg v-if="item.icon === 'Mail'" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <!-- MessageSquare / WhatsApp Icon -->
            <svg v-else-if="item.icon === 'MessageSquare'" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <!-- LinkedIn Icon -->
            <svg v-else-if="item.icon === 'Linkedin'" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <!-- Instagram Icon -->
            <svg v-else class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </div>

          <!-- External arrow -->
          <svg class="w-4 h-4 text-muted group-hover:text-accent transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </div>

        <!-- Channel Details -->
        <div class="min-w-0">
          <p class="text-xs font-semibold text-muted mb-1">
            {{ item.label }}
          </p>
          <p class="text-sm font-bold text-ink group-hover:text-accent transition-colors truncate" :title="item.value">
            {{ item.value }}
          </p>
        </div>
      
    </div>

    <!-- Response time note -->
    <div class="mt-5 flex items-center gap-2 text-xs text-muted">
      <span class="w-2 h-2 rounded-full bg-signal shrink-0" aria-hidden="true" />
      <span>Average response time: <strong class="text-ink">24–48 hours</strong></span>
    </div>

    <!-- Contact Form -->
    <BaseCard padding="p-6 sm:p-8 lg:p-10" :hover="false" custom-class="mt-10 bg-surface border-line">
      <!-- Success state -->
      <div v-if="submitted" class="text-center py-8" role="status">
        <h3 class="text-xl font-bold text-ink mb-2">Message sent</h3>
        <p class="text-muted mb-6">Thanks for reaching out. I'll reply within 24–48 hours.</p>
        <BaseButton variant="ghost" type="button" @click="reset">
          Send another message
        </BaseButton>
      </div>

      <!-- Form -->
      <form v-else novalidate class="relative" @submit.prevent="handleSubmit">
        <h3 class="text-lg font-bold text-ink mb-6">Send a message</h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <BaseInput
            id="contact-name"
            v-model="values.name"
            label="Name"
            type="text"
            required
            :error="errors.name"
            @blur="validateField('name')"
          />
          <BaseInput
            id="contact-email"
            v-model="values.email"
            label="Email"
            type="email"
            required
            :error="errors.email"
            @blur="validateField('email')"
          />
          <BaseInput
            id="contact-phone"
            v-model="values.phone"
            label="Phone number"
            type="tel"
            :error="errors.phone"
            @blur="validateField('phone')"
          />
        </div>

        <div class="mt-5">
          <BaseTextarea
            id="contact-description"
            v-model="values.description"
            label="Description"
            required
            :error="errors.description"
            @blur="validateField('description')"
          />
        </div>

        <!-- Honeypot: hidden from people, bots tend to fill it -->
        <div class="absolute -left-[9999px]" aria-hidden="true">
          <label for="contact-website">Website</label>
          <input id="contact-website" v-model="values.website" type="text" tabindex="-1" autocomplete="off" />
        </div>

        <p v-if="submitError" class="mt-4 text-sm text-ink" role="alert">
          {{ submitError }}
        </p>

        <div class="mt-6 flex items-center justify-end">
          <BaseButton type="submit" :disabled="submitting">
            {{ submitting ? 'Sending…' : 'Send message' }}
          </BaseButton>
        </div>
      </form>
    </BaseCard>
  </BaseSection>
</template>