import type { AlpineComponent } from "alpinejs"

type Component = AlpineComponent<{
  visible: boolean
  show: () => void
  accept: () => void
  manage: () => void
  decline: () => void
  hide: () => void
  confirm: () => void
}>

export default (): Component => ({
  visible: false,
  init() {
    if (!this.$store.privacy.confirmed) {
      this.$nextTick(() => {
        setTimeout(this.show.bind(this), 1000)
      })
    }
  },
  show() {
    this.visible = true
  },
  accept() {
    this.$store.privacy.addAll()
    this.confirm()
    this.hide()
  },
  manage() {
    this.$store.privacy.removeAll()
    this.confirm()
  },
  decline() {
    this.$store.privacy.removeAll()
    this.confirm()
    this.hide()
  },
  hide() {
    this.visible = false
  },
  confirm() {
    this.$store.privacy.confirmed = true
  },
})
