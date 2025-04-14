import type { AlpineComponent } from 'alpinejs'

type Component = AlpineComponent<{
  /**
   * Visibility of the privacy notice
   * @interal
   * */
  _visible: boolean

  /**
   * Initializes the Component
   * - Makes the privacy notice visible if the user hasn't confirmed it yet.
   * */
  init: () => void

  /**
   * Makes the privacy notice visible
   * @interal
   * */
  _show: () => void

  /**
   * User gives all consents
   * @public
   * */
  accept: () => void
  
  /**
   * User gives no consent at all
   * @public
   * */
  decline: () => void

  /**
   * User likes to configure consents
   * @public
   * */
  configure: () => void

  /**
   * Hides privacy notice
   * @internal
   * */
  _hide: () => void
}>

export default (): Component => ({
  _visible: false,
  init() {
    if (this.$store.privacy.isConfirmed()) return
    this._show()
  },
  _show() {
    this._visible = true
  },
  accept() {
    this.$store.privacy.addAll()
    this.$store.privacy.confirm()
    this._hide()
  },
  decline() {
    this.$store.privacy.removeAll()
    this.$store.privacy.confirm()
    this._hide()
  },
  configure() {
    this.decline()
    // Afterwards the page is changed via link
  },
  _hide() {
    this._visible = false
  },
})
