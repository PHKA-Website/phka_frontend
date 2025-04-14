import type { AlpineComponent } from 'alpinejs'

type Component = AlpineComponent<{
  /**
   * Initializes the Component.
   * - Configures Matomo connection.
   * - Integrates Matomo if consent is given.
   * 
   * @param siteId
   * @param ...
   * */
  init: () => void

  /**
   * Integrates Matomo to the website.
   * - Adds Matomo script to webpage head if configuration is complete and consent is given.
   * - Activates tracking based on the consent given.
   * @public
   * */
  integrate: () => void

  /**
   * Stops tracking.
   * @public
   * */
  stop: () => void

  // More methods needed to stop dedicated tracking features if the consent is removed.
}>

export default (): Component => ({
  init() {},
  integrate() {},
  stop() {},
})
