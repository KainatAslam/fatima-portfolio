import { ref, onMounted, onUnmounted, nextTick } from 'vue'

/**
 * Composable for native CSS scroll-snap carousels with programatic controls
 * @param {import('vue').Ref<HTMLElement | null>} containerRef - Ref to the scroll container element
 */
export function useScrollCarousel(containerRef) {
  const canPrev = ref(false)
  const canNext = ref(false)

  const updateScrollState = () => {
    const el = containerRef.value
    if (!el) return

    const { scrollLeft, scrollWidth, clientWidth } = el
    // Tolerances for fractional subpixel rendering
    const tolerance = 6
    canPrev.value = scrollLeft > tolerance
    canNext.value = scrollLeft + clientWidth < scrollWidth - tolerance
  }

  const getCardStep = () => {
    const el = containerRef.value
    if (!el) return 300
    // Try to calculate the first child's outer width (width + gap)
    const firstChild = el.firstElementChild
    if (firstChild) {
      const computed = window.getComputedStyle(el)
      const gap = parseFloat(computed.columnGap || computed.gap || '0') || 24
      return firstChild.getBoundingClientRect().width + gap
    }
    return el.clientWidth * 0.8
  }

  const scrollPrev = () => {
    const el = containerRef.value
    if (!el) return
    const step = getCardStep()
    el.scrollBy({ left: -step, behavior: 'smooth' })
  }

  const scrollNext = () => {
    const el = containerRef.value
    if (!el) return
    const step = getCardStep()
    el.scrollBy({ left: step, behavior: 'smooth' })
  }

  let resizeObserver = null

  onMounted(() => {
    nextTick(() => {
      const el = containerRef.value
      if (!el) return

      updateScrollState()
      el.addEventListener('scroll', updateScrollState, { passive: true })

      if (window.ResizeObserver) {
        resizeObserver = new ResizeObserver(() => {
          updateScrollState()
        })
        resizeObserver.observe(el)
      }
    })
  })

  onUnmounted(() => {
    const el = containerRef.value
    if (el) {
      el.removeEventListener('scroll', updateScrollState)
    }
    if (resizeObserver) {
      resizeObserver.disconnect()
    }
  })

  return {
    canPrev,
    canNext,
    scrollPrev,
    scrollNext,
    updateScrollState
  }
}
