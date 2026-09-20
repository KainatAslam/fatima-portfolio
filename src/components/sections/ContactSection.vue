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

    <!-- Two-Column Desktop Layout / Stacked Mobile -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      
      <!-- Left Column: Direct Channels & Socials -->
      <div class="lg:col-span-5 space-y-6">
        <BaseCard padding="p-6 sm:p-8" :hover="false" custom-class="bg-surface border-line">
          <h3 class="text-base font-bold text-ink mb-1">
            Direct Communications
          </h3>
          <p class="text-xs sm:text-sm text-muted mb-6">
            For rapid inquiries, laboratory monographs, or immediate consultation availability:
          </p>

          <!-- Contact Channel Links -->
          <div class="space-y-4">
            <a
              v-for="item in contact.channels"
              :key="item.id"
              :href="item.href"
              :target="item.href.startsWith('http') ? '_blank' : undefined"
              :rel="item.href.startsWith('http') ? 'noopener noreferrer' : undefined"
              class="flex items-start gap-4 p-3.5 rounded-card bg-background/60 hover:bg-background border border-line hover:border-accent/60 transition-all duration-200 group focus-visible:outline-2 focus-visible:outline-accent"
            >
              <!-- Icon Container -->
              <div class="w-10 h-10 rounded-full bg-surface border border-line flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-ink transition-colors shrink-0">
                <!-- Mail Icon -->
                <svg v-if="item.icon === 'Mail'" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <!-- MessageSquare / WhatsApp Icon -->
                <svg v-else-if="item.icon === 'MessageSquare'" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <!-- LinkedIn Icon -->
                <svg v-else-if="item.icon === 'Linkedin'" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <!-- Instagram Icon -->
                <svg v-else class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>

              <!-- Channel Details -->
              <div class="min-w-0 flex-1">
                <p class="text-xs font-semibold text-muted mb-0.5">
                  {{ item.label }}
                </p>
                <p class="text-xs sm:text-sm font-bold text-ink group-hover:text-accent transition-colors truncate">
                  {{ item.value }}
                </p>
              </div>

              <!-- External arrow -->
              <div class="text-muted group-hover:text-accent transition-colors pt-1">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </a>
          </div>

          <!-- Bottom Response SLA Note -->
          <div class="mt-6 pt-5 border-t border-line flex items-center gap-2 text-xs text-muted">
            <span class="w-2 h-2 rounded-full bg-signal shrink-0" aria-hidden="true" />
            <span>Average formulation inquiry response time: <strong>24–48 hours</strong></span>
          </div>
        </BaseCard>
      </div>

      <!-- Right Column: Interactive Contact Form -->
      <div class="lg:col-span-7">
        <BaseCard padding="p-6 sm:p-8 lg:p-10" :hover="false" custom-class="bg-surface border-line">
          
          <!-- Success State -->
          <div
            v-if="submitted"
            class="py-8 text-center space-y-4 animate-fade-in"
            role="status"
            aria-live="polite"
          >
            <div class="w-14 h-14 mx-auto rounded-full bg-accent text-accent-ink flex items-center justify-center shadow-md">
              <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-ink">Inquiry Submitted Successfully</h3>
            <p class="text-sm text-muted max-w-md mx-auto leading-relaxed">
              Thank you for reaching out. Your project requirements have been recorded and Fatima will review your dossier shortly.
            </p>
            <div class="pt-4">
              <BaseButton variant="outline" size="sm" @click="reset">
                Send another message
              </BaseButton>
            </div>
          </div>

          <!-- Active Form -->
          <form
            v-else
            novalidate
            class="space-y-5"
            @submit.prevent="handleSubmit"
          >
            <!-- Honeypot Field (hidden from screen and keyboard) -->
            <div class="hidden" aria-hidden="true">
              <label for="contact-honey">Leave this field blank</label>
              <input
                id="contact-honey"
                v-model="values._honey"
                type="text"
                tabindex="-1"
                autocomplete="off"
              />
            </div>

            <!-- Server / Submit Error Alert -->
            <div
              v-if="submitError"
              class="p-4 rounded-card bg-accent/10 border border-accent text-accent text-xs sm:text-sm font-medium flex items-start gap-2.5"
              role="alert"
            >
              <svg class="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>{{ submitError }}</span>
            </div>

            <!-- Row 1: Name & Email -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <BaseInput
                id="contact-name"
                v-model="values.name"
                label="Full Name"
                placeholder="Dr. Alexander Vance"
                :required="true"
                autocomplete="name"
                :error="errors.name"
                :disabled="submitting"
                @blur="validateField('name')"
              />

              <BaseInput
                id="contact-email"
                v-model="values.email"
                label="Email Address"
                type="email"
                placeholder="alexander@domain.com"
                :required="true"
                autocomplete="email"
                :error="errors.email"
                :disabled="submitting"
                @blur="validateField('email')"
              />
            </div>

            <!-- Row 2: Phone Number (Optional) -->
            <BaseInput
              id="contact-phone"
              v-model="values.phone"
              label="Phone / WhatsApp (Optional)"
              type="tel"
              placeholder="+1 (555) 019-2834"
              :required="false"
              autocomplete="tel"
              :error="errors.phone"
              :disabled="submitting"
              @blur="validateField('phone')"
            />

            <!-- Row 3: Description -->
            <BaseTextarea
              id="contact-description"
              v-model="values.description"
              label="Project Scope & Formulation Requirements"
              placeholder="Tell me about your product target, timeline, clinical requirements, or batch scale goals..."
              :required="true"
              :rows="4"
              :error="errors.description"
              :disabled="submitting"
              @blur="validateField('description')"
            />

            <!-- Form Actions -->
            <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p class="text-xs text-muted font-light order-2 sm:order-1">
                Strict NDA &amp; IP protection guaranteed.
              </p>

              <BaseButton
                type="submit"
                variant="primary"
                size="md"
                :disabled="submitting"
                class="w-full sm:w-auto order-1 sm:order-2"
                aria-label="Submit formulation inquiry"
              >
                <!-- Loading Spinner -->
                <svg
                  v-if="submitting"
                  class="animate-spin -ml-1 mr-2 h-4 w-4 text-accent-ink"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>{{ submitting ? 'Sending inquiry...' : 'Send inquiry' }}</span>
                <svg
                  v-if="!submitting"
                  class="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </BaseButton>
            </div>
          </form>
        </BaseCard>
      </div>

    </div>
  </BaseSection>
</template>
