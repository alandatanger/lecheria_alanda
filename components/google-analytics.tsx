"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

export function GoogleAnalytics({ gaId }: { gaId: string }) {
    const [consent, setConsent] = useState<boolean | null>(null)

    useEffect(() => {
        // Check local storage for consent
        const storedConsent = localStorage.getItem("cookie_analytics")
        setConsent(storedConsent === "true")

        // Listen for custom event from CookieBanner if needed, 
        // but typically CookieBanner forces a reload on change, so this runs again.
    }, [])

    if (consent === true) {
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

            gtag('config', '${gaId}');
          `}
                </Script>
            </>
        )
    }

    return null
}
