import type { EnvMap } from '@parcel/types'

import Alpine from 'alpinejs'

import pluginCollapse from '@alpinejs/collapse'
import pluginFocus from '@alpinejs/focus'
import pluginPersist from '@alpinejs/persist'

import storePrivacy from './stores/privacy'

import componentMatomoIntegration from './components/matomoIntegration'
import componentPrivacyNotice from './components/privacyNotice'
import componentScrollToTop from './components/scrollToTop'

import domReady from './utilities/_domReady'

const env: EnvMap = process.env
if (env.NODE_ENV === 'development') {
  window.Alpine = Alpine
}

Alpine.plugin(pluginCollapse)
Alpine.plugin(pluginFocus)
Alpine.plugin(pluginPersist)

Alpine.plugin(storePrivacy)

Alpine.data('matomoIntegration', componentMatomoIntegration)
Alpine.data('privacyNotice', componentPrivacyNotice)
Alpine.data('scrollToTop', componentScrollToTop)

;(async () => {
  await domReady()
  Alpine.start()
})()
