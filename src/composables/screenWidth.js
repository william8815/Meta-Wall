import { ref, onMounted, onBeforeUnmount } from 'vue'
export function useScreenWidth() {
  const screenWidth = ref(window.innerWidth)
  function handleResize() {
    screenWidth.value = window.innerWidth
  }
  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
  })
  return screenWidth
}
