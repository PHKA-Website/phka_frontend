import type { Alpine } from 'alpinejs';
import type { StorePrivacy } from './stores/privacy'

// Global declaration
declare global {
  interface Window {
    Alpine: Alpine
    _paq: unknown[]
  }
}

declare module 'alpinejs' {
  interface Stores {
    privacy: StorePrivacy
  }
}
