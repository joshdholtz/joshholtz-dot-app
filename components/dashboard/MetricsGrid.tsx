'use client'

import MetricBar from '@/components/shared/MetricBar'
import Panel from '@/components/shared/Panel'
import { fluctuateValue, initialMetrics, SystemMetric } from '@/lib/systemMetrics'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function MetricCard({ metric, index }: { metric: SystemMetric; index: number }) {
  const hasBar = metric.max !== undefined

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: 'easeOut' }}
      className="min-w-0 animate-float"
      style={{ animationDelay: `${index * 0.8}s` }}
    >
      <Panel variant={metric.status === 'critical' ? 'critical' : metric.status === 'warning' ? 'warning' : 'stable'}>
        <div className="space-y-3">
          {/* Label */}
          <div className="flex items-center justify-between">
            <span className="truncate text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-mono">
              {metric.label}
            </span>
            <span
              className={`shrink-0 rounded border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                metric.status === 'critical'
                  ? 'text-red-300 bg-red-400/10 border-red-400/20'
                  : metric.status === 'warning'
                  ? 'text-amber-300 bg-amber-400/10 border-amber-400/20'
                  : 'text-blue-300 bg-blue-400/10 border-blue-400/20'
              }`}
            >
              {metric.status}
            </span>
          </div>

          {/* Value */}
          <div className="font-mono text-2xl font-light text-zinc-100 md:text-3xl">
            {metric.displayValue ?? (
              <>
                {metric.status === 'critical'
                  ? Math.round(metric.value)
                  : metric.status === 'warning'
                  ? metric.value.toFixed(0)
                  : metric.value.toFixed(0)}
                {metric.unit && (
                  <span className="text-base text-zinc-500 ml-1">{metric.unit}</span>
                )}
              </>
            )}
          </div>

          {/* Progress bar for percentage metrics */}
          {hasBar && (
            <MetricBar
              value={metric.value}
              variant={
                metric.status === 'critical'
                  ? 'critical'
                  : metric.status === 'warning'
                  ? 'warning'
                  : 'normal'
              }
              animated={true}
            />
          )}

          {/* Subtext */}
          <p className="min-h-8 text-xs text-zinc-500 font-mono leading-relaxed">
            {metric.subtext}
          </p>
        </div>
      </Panel>
    </motion.div>
  )
}

export default function MetricsGrid() {
  const [metrics, setMetrics] = useState<SystemMetric[]>(initialMetrics)

  // Gently fluctuate metrics every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((m) => {
          if (m.id === 'working-memory') {
            const newVal = fluctuateValue(m.value, 1.5)
            return {
              ...m,
              value: newVal,
              displayValue: `${(newVal / 100 * 16).toFixed(1)} GB / 16 GB`,
            }
          }
          if (m.id === 'context-load') {
            return { ...m, value: fluctuateValue(m.value, 2.3) }
          }
          if (m.id === 'social-battery') {
            const newVal = fluctuateValue(m.value, 1)
            return { ...m, value: Math.max(5, newVal) }
          }
          if (m.id === 'sensory-input') {
            return { ...m, value: fluctuateValue(m.value, 1.8) }
          }
          return m
        })
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
      {metrics.map((metric, index) => (
        <MetricCard key={metric.id} metric={metric} index={index} />
      ))}
    </div>
  )
}
