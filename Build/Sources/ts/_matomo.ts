import Alpine from 'alpinejs'

/* eslint no-underscore-dangle: ["error", { "allow": ["_paq"] }] */

// Set in TypoScript Configuration
// page.inlineSettings.matomo {
//   url = ;
//   id = ;
// }

(async () => {
  window.TYPO3 = window.TYPO3 || {};
  const { TYPO3 } = window;
  const { matomo = {} } = TYPO3;
  const { url = undefined, id = undefined } = matomo;

  if (url && id) {
    window._paq = window._paq || [];
    const { _paq } = window;
    _paq.push(['requireConsent']);
    _paq.push(['requireCookieConsent']);
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);

    const u = `//${url}/`;
    _paq.push(['setTrackerUrl', `${u}matomo.php`]);
    _paq.push(['setSiteId', id]);
    const g = document.createElement('script');
    const s = document.getElementsByTagName('script')[0];
    g.type = 'text/javascript';
    g.async = true;
    g.src = `${u}matomo.js`;
    s.parentNode.insertBefore(g, s);

    document.addEventListener('alpine:initialized', () => {
      if (Alpine.store('privacy')?.matomoConsent?.value) {
        _paq.push(['setConsentGiven', false]);
      } else {
        _paq.push(['forgetConsentGiven']);
      }
      if (Alpine.store('privacy')?.matomoCookieConsent?.value) {
        _paq.push(['setCookieConsentGiven']);
      } else {
        _paq.push(['forgetCookieConsentGiven']);
      }
    });

    // Zusätzliches Event bei Consent klick

  }
})();
