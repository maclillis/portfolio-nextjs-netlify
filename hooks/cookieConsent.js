export const COOKIE_CONSENT_KEY = 'trackingAllowed';

export const setCookieConsent = (consent) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(COOKIE_CONSENT_KEY, consent ? 'true' : 'false');
  }
};

export const getCookieConsent = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(COOKIE_CONSENT_KEY) === 'true';
  }
  return false;
};