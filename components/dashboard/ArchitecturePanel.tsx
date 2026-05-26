'use client'

import Panel from '@/components/shared/Panel'
import PulsingDot from '@/components/shared/PulsingDot'
import { architectureChecks } from '@/lib/systemMetrics'
import { MetricStatus } from '@/lib/types'
import { motion } from 'framer-motion'

const statusClasses: Record<MetricStatus, string> = {
  normal: 'text-zinc-400 bg-zinc-500/10 border-zinc-500/20',
  warning: 'text-amber-300 bg-amber-500/10 border-amber-500/20',
  critical: 'text-red-300 bg-red-500/10 border-red-500/20',
  stable: 'text-blue-300 bg-blue-500/10 border-blue-500/20',
}

export default function ArchitecturePanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.28, ease: 'easeOut' }}
    >
      <Panel title="Architecture Scan" badge="active" variant="warning" className="h-full">
        <div className="space-y-5">
          <div className="rounded-md border border-amber-500/20 bg-amber-500/[0.06] p-4">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-amber-300">
              <PulsingDot color="amber" size="sm" />
              unexpected architecture detected
            </div>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              Existing assumptions no longer explain the system behavior. A full report is being prepared.
            </p>
          </div>

          <div className="space-y-2">
            {architectureChecks.map((check, index) => (
              <motion.div
                key={check.label}
                className="flex items-center justify-between gap-3 rounded-md border border-white/[0.06] bg-zinc-950/35 px-3 py-2.5"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.45 + index * 0.08 }}
              >
                <span className="min-w-0 truncate font-mono text-xs text-zinc-400">
                  {check.label}
                </span>
                <span className={`shrink-0 rounded border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${statusClasses[check.status]}`}>
                  {check.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Panel>
    </motion.div>
  )
}
