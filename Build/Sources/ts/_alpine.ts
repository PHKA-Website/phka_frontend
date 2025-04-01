import type { EnvMap } from '@parcel/types'

import Alpine from 'alpinejs'

import pluginUi from '@alpinejs/ui'
import pluginCollapse from '@alpinejs/collapse'
import pluginFocus from '@alpinejs/focus'
import pluginPersist from '@alpinejs/persist'

import storePrivacy from './stores/privacy'
import storeSections from './stores/sections'

import componentPrivacy from './components/privacy'
import componentScrolltotop from './components/scrolltotop'
import componentSectionindex from './components/sectionindex'

import domReady from './utilities/_domReady'

const env: EnvMap = process.env
if (env.NODE_ENV === 'development') {
  window.Alpine = Alpine
}

Alpine.plugin(pluginUi)
Alpine.plugin(pluginCollapse)
Alpine.plugin(pluginFocus)
Alpine.plugin(pluginPersist)

Alpine.plugin(storePrivacy)
Alpine.plugin(storeSections)

Alpine.data('privacy', componentPrivacy)
Alpine.data('scrolltotop', componentScrolltotop)
Alpine.data('sectionindex', componentSectionindex)

;(async () => {
  await domReady()
  Alpine.start()
})()
