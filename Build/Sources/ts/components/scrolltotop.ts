import type { AlpineComponent } from 'alpinejs'
import scrollToTop from '../utilities/_scrollToTop'

type Component = AlpineComponent<{
  /**
   * Scrolls page to top
   * @public
   */
  scrollToTop: () => void
}>

export default (): Component => ({
  scrollToTop
})
