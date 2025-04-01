// Privacy settings, add more if needed

export interface privacyConfiguration {
  id: String
  requires: String[]
}

export const privacyConfigurations: privacyConfiguration[] = [
  {
    id: 'matomoConsent',
    requires: [],
  }, {
    id: 'matomoCookieConsent',
    requires: [
      'matomoConsent',
    ],
  }, {
    id: 'vimeoConsent',
    requires: [],
  }, {
    id: 'vimeoCookieConsent',
    requires: [
      'vimeoConsent',
    ],
  }, {
    id: 'youtubeConsent',
    requires: [],
  }, {
    id: 'youtubeCookieConsent',
    requires: [
      'youtubeConsent',
    ],
  }, {
    id: 'biteConsent',
    requires: [],
  },
]

// Heading tags that should be visible in the section navigation
export const sectionnavigationFilter = ['H2']
