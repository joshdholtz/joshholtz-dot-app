'use client'

import Panel from '@/components/shared/Panel'
import { backgroundProcesses } from '@/lib/systemMetrics'
import { MetricStatus } from '@/lib/types'
import { motion } from 'framer-motion'

const dotClasses: Record<MetricStatus, string> = {
  normal: 'bg-zinc-400',
  warning: 'bg-amber-400',
  critical: 'bg-red-400',
  stable: 'bg-blue-400',
}

export default function ProcessMonitor() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.58, ease: 'easeOut' }}
    >
      <Panel title="Process Monitor" badge="sparse sample">
        <div className="divide-y divide-zinc-800/70">
          {backgroundProcesses.map((process, index) => (
            <motion.div
              key={process.name}
              className="grid grid-cols-[1fr_auto] gap-4 py-3 first:pt-0 last:pb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.72 + index * 0.08 }}
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${dotClasses[process.status]}`} />
                  <span className="truncate font-mono text-sm text-zinc-200">
                    {process.name}
                  </span>
                </div>
                <p className="mt-1 truncate text-xs text-zinc-500 sm:text-clip">
                  {process.detail}
                </p>
              </div>
              <div className="self-center rounded-md border border-zinc-700/60 bg-zinc-950/45 px-2 py-1 font-mono text-xs text-zinc-400">
                {process.load}
              </div>
            </motion.div>
          ))}
        </div>
      </Panel>
    </motion.div>
  )
}
