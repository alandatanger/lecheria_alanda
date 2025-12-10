"use client"

import { ReactNode } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface AnimatedSectionProps {
  children: ReactNode
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "rotate"
  delay?: number
  className?: string
}

export function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px",
    triggerOnce: true,
  })

  const animationClass = `animate-${animation}`
  const delayClass = delay > 0 ? `delay-${delay}` : ""

  return (
    <div
      ref={elementRef}
      className={`${animationClass} ${delayClass} ${className} ${
        isIntersecting ? "animate-visible" : ""
      }`}
    >
      {children}
    </div>
  )
}

