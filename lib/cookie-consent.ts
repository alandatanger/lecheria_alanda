export const COOKIE_CONSENT_STORAGE_KEY = "alanda_cookie_consent_v1"
export const COOKIE_ANALYTICS_STORAGE_KEY = "alanda_cookie_analytics_v1"
export const COOKIE_CONSENT_EVENT = "alanda:cookie-consent-changed"
export const OPEN_COOKIE_PREFERENCES_EVENT = "alanda:open-cookie-preferences"

export type CookieConsentState = {
  status: "accepted" | "rejected" | "custom"
  analytics: boolean
}

export function readCookieConsent(): CookieConsentState | null {
  if (typeof window === "undefined") {
    return null
  }

  const status = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)
  const analytics = window.localStorage.getItem(COOKIE_ANALYTICS_STORAGE_KEY) === "true"

  if (status !== "accepted" && status !== "rejected" && status !== "custom") {
    return null
  }

  return {
    status,
    analytics: status === "accepted" ? true : analytics,
  }
}

export function writeCookieConsent(consent: CookieConsentState) {
  if (typeof window === "undefined") {
    return
  }

  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, consent.status)
  window.localStorage.setItem(COOKIE_ANALYTICS_STORAGE_KEY, String(consent.analytics))
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: consent }))
}
