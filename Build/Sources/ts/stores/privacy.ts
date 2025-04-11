import type { Alpine, InterceptorObject } from "alpinejs"
import type { PrivacyConfiguration } from "../_config"
import { privacyConfigurations } from '../_config'

export interface StorePrivacy {
  _settings: StorePrivacySetting[] | null
  init: () => void
  addAll: () => void
  removeAll: () => void
  confirm: () => void
  addConsent: (id: string, force?: boolean) => void
  removeConsent: (id: string, force?: boolean) => void
  hasConsent: (id: string) => InterceptorObject<boolean> | boolean | null
}

export interface StorePrivacySetting extends PrivacyConfiguration {
  value: InterceptorObject<boolean> | boolean
}

export default (Alpine: Alpine) => Alpine.store('privacy', {
  _settings: null,
  init() {
    privacyConfigurations
      .concat([{ id: 'confirmed', requires: null}])
      .forEach(({ id, requires }) => {
        this._settings.push({
          id,
          requires,
          value: Alpine.$persist(true).as(`privacy.settings.${id}`)
        })
      })
  },
  addAll() {
    privacyConfigurations.forEach(({ id }) => {
      this.addConsent(id, true)
    })
  },
  removeAll() {
    privacyConfigurations.forEach(({ id }) => {
      this.removeConsent(id, true)
    })
  },
  confirm() {
    this.addConsent('confirmed', true)
  },
  addConsent(id, force = false) {
    if (!this._settings.has(id)) return
    if (
      force ||
      this._settings.get(id).requires === null ||
      this.hasConsent(this._settings.get(id).requires) === true
    ) {
      this._settings.get(id).value = true
    }
  },
  removeConsent(id, force = false) {
    if (!this._settings.has(id)) return
    this._settings.get(id).value = false
    if (force) return
    this._settings.values.
  },
  hasConsent(id = null) {
    if (id === null || !this._settings.has(id)) return null
    return this._settings.get(id).value.valueOf()
  },
} as StorePrivacy)
