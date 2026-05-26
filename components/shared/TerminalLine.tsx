'use client'

import { MessageVariant } from '@/lib/types'
import { motion } from 'framer-motion'

interface TerminalLineProps {
  timestamp?: string
  message: string
  variant?: MessageVariant
  delay?: number
}

const variantMessageStyles: Record<MessageVariant, string> = {
  normal: 'text-zinc-300',
  warning: 'text-amber-400',
  error: 'text-red-400',
  success: 'text-emerald-400',
  highlight: 'text-amber-300 font-semibold drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]',
}

export default function TerminalLine({
  timestamp,
  message,
  variant = 'normal',
  delay = 0,
}: TerminalLineProps) {
  return (
    <motion.div
      className="flex items-start gap-3 leading-relaxed"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut', delay: delay / 1000 }}
    >
      {timestamp && (
        <span className="text-zinc-600 font-mono text-xs shrink-0 pt-0.5 select-none">
          [{timestamp}]
        </span>
      )}
      <span className={`font-mono text-xs md:text-sm ${variantMessageStyles[variant]}`}>
        {message}
      </span>
    </motion.div>
  )
}
