'use client'

import { DotColor } from '@/lib/types'

interface PulsingDotProps {
  color?: DotColor
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const colorStyles: Record<DotColor, { dot: string; ring: string }> = {
  green: {
    dot: 'bg-emerald-400',
    ring: 'bg-emerald-400',
  },
  amber: {
    dot: 'bg-amber-400',
    ring: 'bg-amber-400',
  },
  red: {
    dot: 'bg-red-400',
    ring: 'bg-red-400',
  },
}

const sizeStyles = {
  sm: { dot: 'w-1.5 h-1.5', ring: 'w-1.5 h-1.5' },
  md: { dot: 'w-2 h-2', ring: 'w-2 h-2' },
  lg: { dot: 'w-3 h-3', ring: 'w-3 h-3' },
}

export default function PulsingDot({
  color = 'green',
  size = 'md',
  className = '',
}: PulsingDotProps) {
  const colors = colorStyles[color]
  const sizes = sizeStyles[size]

  return (
    <span className={`relative inline-flex ${className}`}>
      <span
        className={`animate-ping absolute inline-flex ${sizes.ring} rounded-full ${colors.ring} opacity-75`}
      />
      <span className={`relative inline-flex rounded-full ${sizes.dot} ${colors.dot}`} />
    </span>
  )
}
