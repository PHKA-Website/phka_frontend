import type { Alpine, InterceptorObject } from "alpinejs"
import type { privacyConfiguration } from '../_config'

import { privacyConfigurations } from '../_config';

export interface StorePrivacy {
  consent: privacySetting
  settings: privacySetting[]
  init: () => void
  addAll: () => void
  removeAll: () => void
  _initSetting: (arg1: privacyConfiguration) => privacySetting
}

export interface privacySetting {
  value: InterceptorObject<boolean> | boolean
  add: () => void
  remove: () => void
  toggle: () => void
  given: () => InterceptorObject<boolean> | boolean
}

export default (Alpine: Alpine) => Alpine.store('privacy', {
  consent: this._initSetting(),
  settings: [],
  init() {
      privacyConfigurations.forEach({ id, requires } => this._initSetting);
  },
  addAll() {
    privacyConfigurations.forEach(({ id }) => {
      ;(this[id] as privacySetting).add()
    })
  },
  removeAll() {
    privacyConfigurations.forEach(({ id }) => {
      ;(this[id] as privacySetting).remove()
    })
  },
  _initSetting({ id }) {
    return {
      value: Alpine.$persist(false).as(`privacy.settings.${id}`),
      add() {
        this.value = true
      },
      remove() {
        this.value = false
      },
      toggle() {
        return this.value ? this.remove() : this.add()
      },
      given() {
        return this.value;
      },
    } as privacySetting
  }
} as StorePrivacy)
