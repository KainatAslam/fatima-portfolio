import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable to track active section in viewport using IntersectionObserver
 * @param {string[]} sectionIds - Array of section element IDs to observe
 * @param {Object} options - IntersectionObserver options
 */
export function useActiveSection(
  sectionIds = ['intro', 'scope', 'showcase', 'case-studies', 'directory', 'about', 'contact'],
  options = {}
) {
  const activeSectionId = ref(sectionIds[0] || 'intro')
  const isIntroVisible = ref(true)
  const isPastIntro = ref(false)

  let observer = null
  let scrollListener = null

  onMounted(() => {
    // 1. IntersectionObserver for active section detection
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
      ...options
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSectionId.value = entry.target.id
          if (entry.target.id === 'intro') {
            isIntroVisible.value = true
          }
        } else if (entry.target.id === 'intro') {
          isIntroVisible.value = false
        }
      })
    }, observerOptions)

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    // 2. Scroll listener to accurately detect when scrolled past the intro section
    scrollListener = () => {
      const introEl = document.getElementById('intro')
      if (introEl) {
        const rect = introEl.getBoundingClientRect()
        isPastIntro.value = rect.bottom < 120
      } else {
        isPastIntro.value = window.scrollY > 200
      }
    }

    window.addEventListener('scroll', scrollListener, { passive: true })
    scrollListener()
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
    if (scrollListener) window.removeEventListener('scroll', scrollListener)
  })

  return {
    activeSectionId,
    isIntroVisible,
    isPastIntro
  }
}
