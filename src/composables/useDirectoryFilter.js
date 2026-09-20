import { ref, computed } from 'vue'

/**
 * Composable for client directory search & category/status filtering
 * @param {Array} initialItems - Array of directory project records
 */
export function useDirectoryFilter(initialItems = []) {
  const searchQuery = ref('')
  const selectedCategory = ref('All')
  const selectedStatus = ref('All')

  // Extract unique categories for dropdown
  const availableCategories = computed(() => {
    const categories = new Set(initialItems.map((item) => item.category))
    return ['All', ...Array.from(categories).sort()]
  })

  // Extract unique statuses for dropdown
  const availableStatuses = computed(() => {
    const statuses = new Set(initialItems.map((item) => item.status))
    return ['All', ...Array.from(statuses).sort()]
  })

  // Computed filtered items
  const filteredItems = computed(() => {
    const query = searchQuery.value.trim().toLowerCase()
    const cat = selectedCategory.value
    const stat = selectedStatus.value

    return initialItems.filter((item) => {
      // 1. Search text filter (client name or category or deliverables)
      const matchesSearch =
        !query ||
        item.client.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.deliverables.some((d) => d.toLowerCase().includes(query))

      // 2. Category filter
      const matchesCategory = cat === 'All' || item.category === cat

      // 3. Status filter
      const matchesStatus = stat === 'All' || item.status === stat

      return matchesSearch && matchesCategory && matchesStatus
    })
  })

  const isFiltered = computed(() => {
    return (
      searchQuery.value.trim() !== '' ||
      selectedCategory.value !== 'All' ||
      selectedStatus.value !== 'All'
    )
  })

  const resetFilters = () => {
    searchQuery.value = ''
    selectedCategory.value = 'All'
    selectedStatus.value = 'All'
  }

  return {
    searchQuery,
    selectedCategory,
    selectedStatus,
    availableCategories,
    availableStatuses,
    filteredItems,
    isFiltered,
    totalCount: computed(() => initialItems.length),
    filteredCount: computed(() => filteredItems.value.length),
    resetFilters
  }
}
