"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import {
  COOKIE_CONSENT_EVENT,
  readCookieConsent,
  type CookieConsentState,
} from "@/lib/cookie-consent"

export function GoogleAnalytics({ gaId }: { gaId?: string }) {
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    const syncConsent = () => {
      const consent = readCookieConsent()
      setIsEnabled(Boolean(consent?.analytics))
    }

    syncConsent()

    const handleConsentChanged = (event: Event) => {
      const customEvent = event as CustomEvent<CookieConsentState>
      setIsEnabled(Boolean(customEvent.detail?.analytics))
    }

    window.addEventListener(COOKIE_CONSENT_EVENT, handleConsentChanged)

    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, handleConsentChanged)
    }
  }, [])

  if (!gaId || !isEnabled) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  )
}

