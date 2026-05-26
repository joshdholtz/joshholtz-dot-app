'use client'

import { PanelVariant } from '@/lib/types'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PanelProps {
  children: ReactNode
  className?: string
  variant?: PanelVariant
  title?: string
  badge?: string
}

const variantStyles: Record<PanelVariant, string> = {
  default: 'border-zinc-700/45',
  warning: 'border-amber-500/35',
  stable: 'border-blue-400/30',
  critical: 'border-red-400/30',
}

const variantGlow: Record<PanelVariant, string> = {
  default: 'shadow-[0_24px_80px_rgba(0,0,0,0.18)]',
  warning: 'shadow-[0_24px_90px_rgba(245,158,11,0.08)]',
  stable: 'shadow-[0_24px_90px_rgba(59,130,246,0.07)]',
  critical: 'shadow-[0_24px_90px_rgba(239,68,68,0.07)]',
}

export default function Panel({
  children,
  className = '',
  variant = 'default',
  title,
  badge,
}: PanelProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.005 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`
        relative rounded-lg overflow-hidden
        bg-[linear-gradient(145deg,rgba(39,39,42,0.74),rgba(24,24,27,0.62))]
        backdrop-blur-md
        border ${variantStyles[variant]}
        ${variantGlow[variant]}
        ${className}
      `}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
      {(title || badge) && (
        <div className="flex items-center justify-between px-4 pt-4 pb-2 border-b border-zinc-800/60">
          {title && (
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
              {title}
            </span>
          )}
          {badge && (
            <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono uppercase tracking-wider">
              {badge}
            </span>
          )}
        </div>
      )}
      <div className="p-4">{children}</div>
    </motion.div>
  )
}
