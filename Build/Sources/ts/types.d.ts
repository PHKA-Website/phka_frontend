import type { Alpine } from 'alpinejs'
import type { StorePrivacy } from "./stores/privacy";
import type { StoreSections } from "./stores/sections";

// Global declaration
declare global {
  interface Window {
    Alpine: Alpine,
    _paq: unknown[],
  }
}

declare module 'alpinejs' {
  interface Stores {
    privacy: StorePrivacy;
    sections: StoreSections;
  }
}
