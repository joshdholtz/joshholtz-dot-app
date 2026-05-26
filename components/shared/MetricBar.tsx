'use client'

import { MetricBarVariant } from '@/lib/types'
import { motion } from 'framer-motion'

interface MetricBarProps {
  value: number // 0-100
  variant?: MetricBarVariant
  animated?: boolean
  label?: string
}

const variantColors: Record<MetricBarVariant, string> = {
  normal: 'bg-blue-400',
  warning: 'bg-amber-400',
  critical: 'bg-red-400',
  stable: 'bg-blue-500',
}

const variantGlow: Record<MetricBarVariant, string> = {
  normal: 'shadow-[0_0_8px_rgba(96,165,250,0.4)]',
  warning: 'shadow-[0_0_8px_rgba(251,191,36,0.4)]',
  critical: 'shadow-[0_0_8px_rgba(248,113,113,0.4)]',
  stable: 'shadow-[0_0_8px_rgba(59,130,246,0.4)]',
}

export default function MetricBar({
  value,
  variant = 'normal',
  animated = true,
  label,
}: MetricBarProps) {
  const clampedValue = Math.max(0, Math.min(100, value))

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-zinc-500 font-mono">{label}</span>
          <span className="text-xs text-zinc-400 font-mono">{Math.round(clampedValue)}%</span>
        </div>
      )}
      <div className="w-full h-1.5 bg-zinc-950/70 rounded-full overflow-hidden ring-1 ring-white/5">
        <motion.div
          className={`h-full rounded-full ${variantColors[variant]} ${variantGlow[variant]}`}
          initial={animated ? { width: 0 } : { width: `${clampedValue}%` }}
          animate={{ width: `${clampedValue}%` }}
          transition={animated ? { duration: 1, ease: 'easeOut', delay: 0.3 } : { duration: 0.3 }}
        />
      </div>
    </div>
  )
}
