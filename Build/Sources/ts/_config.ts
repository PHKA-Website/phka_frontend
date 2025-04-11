// Privacy settings, add more if needed

export interface PrivacyConfiguration {
  id: string
  requires: string | null
}

export const privacyConfigurations: PrivacyConfiguration[] = [
  {
    id: 'matomo',
    requires: null,
  }, {
    id: 'matomoCookie',
    requires: 'matomo',
  }, {
    id: 'matomoUsergroupTracking',
    requires: 'matomo',
  }, {
    id: 'vimeo',
    requires: null,
  }, {
    id: 'vimeoCookie',
    requires: 'vimeo',
  }, {
    id: 'youtube',
    requires: null,
  }, {
    id: 'youtubeCookie',
    requires: 'youtube',
  }, {
    id: 'bite',
    requires: null,
  },
]

// Heading tags that should be visible in the section navigation
export const sectionnavigationFilter = ['H2']
