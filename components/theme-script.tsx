"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

export function ThemeScript() {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    // Force l'application de la classe dark sur html
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return null
}



