import type { AlpineComponent } from "alpinejs"

type Component = AlpineComponent<{
  integrate: () => void
  remove: () => void
}>

export default (): Component => ({
  init() {
    if (this.$store.privacy.config.matomoConsent.given()) this.integrate();
  },
  integrate() {
    
  },
  remove() {
    
  },
})
