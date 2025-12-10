"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface SimpleImageProps {
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

export function SimpleImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className,
  priority = false,
  sizes,
  quality = 75,
}: SimpleImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={cn("object-cover", className)}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      sizes={sizes}
      quality={quality}
    />
  )
}



