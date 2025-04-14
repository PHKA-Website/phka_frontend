import type { Alpine, InterceptorObject } from 'alpinejs'
import { privacyConfigurations } from '../_config'

export interface StorePrivacy {
  /**
   * Initializes the Store
   * - Initializes values based on Alpine.$persist(false).as(privacy.`${id}`)
   * */
  init: () => void

  /**
   * Sets all consents
   * */
  addAll: () => void

  /**
   * Removes all consents
   * */
  removeAll: () => void

  /**
   * User confirms the notice
   * */
  confirm: () => void

  /**
   * Checks if user confirmed the notice
   * */
  isConfirmed: () => InterceptorObject<boolean> | boolean
}

export default (Alpine: Alpine) => Alpine.store('privacy', {
  init() {
    
  },
  addAll() {

  },
  removeAll() {

  },
  confirm() {
    
  },
  isConfirmed() {
    // ...
    return false
  }
} as StorePrivacy)
