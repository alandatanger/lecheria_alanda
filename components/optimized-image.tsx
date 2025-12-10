"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
}

export function OptimizedImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className,
  priority = false,
  sizes,
  quality = 75,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Reset loading state when src changes
    setIsLoading(true)
    setHasError(false)
  }, [src])

  const imageClassName = cn(
    "transition-opacity duration-500",
    isLoading ? "opacity-0" : "opacity-100",
    className
  )

  return (
    <div className={cn("relative overflow-hidden", fill ? "w-full h-full" : "")}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 animate-pulse z-[1]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      )}
      {hasError ? (
        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex items-center justify-center z-[2]">
          <span className="text-slate-400 text-sm">Image non disponible</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          className={imageClassName}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes={sizes}
          quality={quality}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
          unoptimized={false}
        />
      )}
    </div>
  )
}

