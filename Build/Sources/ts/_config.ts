// Privacy settings, add more if needed

export interface PrivacyConfiguration {
  /**
   * Unique name of the configuration
   * - Also used in TYPO3 for matching
   */
  id: string

  /**
   * Set to the unique name of another configuration if it is based on it
   */
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
