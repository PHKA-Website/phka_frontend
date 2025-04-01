import type { AlpineComponent } from "alpinejs"
import scrollToTop from '../utilities/_scrollToTop'

type Component = AlpineComponent<{
    scrollToTop: () => void
}>

export default (): Component => ({
    scrollToTop
})
