<script setup>
import { directoryData } from '@/data/directory'
import { useDirectoryFilter } from '@/composables/useDirectoryFilter'
import BaseSection from '@/components/base/BaseSection.vue'
import SectionHeading from '@/components/base/SectionHeading.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import StatusBadge from '@/components/base/StatusBadge.vue'
import TagBadge from '@/components/base/TagBadge.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const {
  searchQuery,
  selectedCategory,
  selectedStatus,
  availableCategories,
  availableStatuses,
  filteredItems,
  isFiltered,
  totalCount,
  filteredCount,
  resetFilters
} = useDirectoryFilter(directoryData.items)
</script>

<template>
  <BaseSection id="directory" aria-labelledby="directory-heading">
    <!-- Header -->
    <SectionHeading
      heading-id="directory-heading"
      :eyebrow="directoryData.eyebrow"
      :title="directoryData.title"
      :description="directoryData.description"
    />

    <!-- Filter Toolbar -->
    <div class="mb-6 p-4 sm:p-5 rounded-card bg-surface border border-line flex flex-col md:flex-row gap-4 md:items-center justify-between">
      
      <!-- Text Search -->
      <div class="relative flex-1">
        <label for="dir-search" class="sr-only">Search directory by client or keyword</label>
        <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <input
          id="dir-search"
          v-model="searchQuery"
          type="text"
          placeholder="Search by client, deliverable, or keyword..."
          class="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-card bg-background border border-line text-ink placeholder:text-muted/60 transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
        />
      </div>

      <!-- Select Filters & Reset -->
      <div class="flex flex-wrap items-center gap-3">
        <!-- Category Filter -->
        <div class="flex items-center gap-1.5">
          <label for="cat-select" class="text-xs font-semibold text-muted shrink-0">Category:</label>
          <select
            id="cat-select"
            v-model="selectedCategory"
            class="px-3 py-2 text-xs sm:text-sm rounded-card bg-background border border-line text-ink cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
          >
            <option v-for="cat in availableCategories" :key="cat" :value="cat">
              {{ cat }}
            </option>
          </select>
        </div>

        <!-- Status Filter -->
        <div class="flex items-center gap-1.5">
          <label for="status-select" class="text-xs font-semibold text-muted shrink-0">Status:</label>
          <select
            id="status-select"
            v-model="selectedStatus"
            class="px-3 py-2 text-xs sm:text-sm rounded-card bg-background border border-line text-ink cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
          >
            <option v-for="stat in availableStatuses" :key="stat" :value="stat">
              {{ stat }}
            </option>
          </select>
        </div>

        <!-- Clear Button if Filtered -->
        <BaseButton
          v-if="isFiltered"
          variant="ghost"
          size="sm"
          aria-label="Clear active directory filters"
          @click="resetFilters"
        >
          <span>Reset</span>
        </BaseButton>
      </div>
    </div>

    <!-- Active Filter Count Micro-Bar -->
    <div class="flex items-center justify-between text-xs text-muted mb-3 px-1">
      <span>Showing {{ filteredCount }} of {{ totalCount }} engagements</span>
      <span v-if="isFiltered" class="text-accent font-medium">Filtered results</span>
    </div>

    <!-- Empty State -->
    <BaseCard
      v-if="filteredItems.length === 0"
      padding="p-12"
      :hover="false"
      custom-class="text-center bg-surface"
    >
      <div class="max-w-md mx-auto space-y-3">
        <p class="text-base font-semibold text-ink">No engagements match your current filters</p>
        <p class="text-xs sm:text-sm text-muted">Try adjusting your search query or resetting category and status filters.</p>
        <div class="pt-2">
          <BaseButton variant="outline" size="sm" @click="resetFilters">
            Clear all filters
          </BaseButton>
        </div>
      </div>
    </BaseCard>

    <!-- Content: Responsive Table on Desktop / Stacked Cards on Mobile -->
    <div v-else>
      <!-- 1. Desktop Semantic Table -->
      <div class="hidden md:block rounded-card border border-line overflow-hidden bg-surface shadow-sm">
        <table class="w-full text-left border-collapse">
          <thead class="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-line text-xs font-bold uppercase tracking-wider text-muted select-none">
            <tr>
              <th scope="col" class="py-3.5 px-6">Client</th>
              <th scope="col" class="py-3.5 px-6">Category</th>
              <th scope="col" class="py-3.5 px-6">Key Deliverables</th>
              <th scope="col" class="py-3.5 px-6">Status</th>
              <th scope="col" class="py-3.5 px-6 text-right">Year</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-line text-xs sm:text-sm text-ink">
            <tr
              v-for="row in filteredItems"
              :key="row.id"
              class="hover:bg-background/40 transition-colors group"
            >
              <!-- Client Name -->
              <td class="py-4 px-6 font-semibold text-ink">
                {{ row.client }}
              </td>

              <!-- Category -->
              <td class="py-4 px-6 text-muted">
                {{ row.category }}
              </td>

              <!-- Deliverables as Tag Badges -->
              <td class="py-4 px-6">
                <div class="flex flex-wrap gap-1.5">
                  <TagBadge
                    v-for="(del, dIdx) in row.deliverables"
                    :key="dIdx"
                    variant="default"
                  >
                    {{ del }}
                  </TagBadge>
                </div>
              </td>

              <!-- Status using StatusBadge -->
              <td class="py-4 px-6 whitespace-nowrap">
                <StatusBadge :status="row.status" />
              </td>

              <!-- Year -->
              <td class="py-4 px-6 text-right font-mono text-muted text-xs">
                {{ row.year }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 2. Mobile Stacked Cards (Label + Value pairs) -->
      <div class="md:hidden space-y-3">
        <article
          v-for="row in filteredItems"
          :key="row.id"
          class="p-5 rounded-card bg-surface border border-line space-y-3"
        >
          <!-- Top Row: Client & Status -->
          <div class="flex items-start justify-between gap-2">
            <div>
              <span class="text-[11px] font-mono text-muted block mb-0.5">{{ row.year }}</span>
              <h3 class="text-base font-bold text-ink">{{ row.client }}</h3>
            </div>
            <StatusBadge :status="row.status" />
          </div>

          <!-- Category -->
          <div class="flex items-center justify-between text-xs pt-2 border-t border-line">
            <span class="text-muted font-medium">Category:</span>
            <span class="text-ink font-semibold">{{ row.category }}</span>
          </div>

          <!-- Deliverables -->
          <div class="pt-2 border-t border-line space-y-1.5">
            <span class="text-xs text-muted font-medium block">Deliverables:</span>
            <div class="flex flex-wrap gap-1.5">
              <TagBadge
                v-for="(del, dIdx) in row.deliverables"
                :key="dIdx"
                variant="default"
              >
                {{ del }}
              </TagBadge>
            </div>
          </div>
        </article>
      </div>
    </div>
  </BaseSection>
</template>
