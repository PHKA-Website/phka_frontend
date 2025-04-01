import type { AlpineComponent } from "alpinejs"

type Component = AlpineComponent<object>

export default (id: string): Component => ({
  init() {
    const el = document.getElementById(id)
    if (el) this.$store.sections.append(id, el, this.$el.innerText, this.$el.tagName)
  },
  destroy() {
    this.$store.sections.remove(id);
  },
})
