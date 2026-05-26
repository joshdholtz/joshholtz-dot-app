'use client'

import { bootMessages, TOTAL_BOOT_DURATION } from '@/lib/bootMessages'
import { AppPhase } from '@/lib/types'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import TerminalLine from '../shared/TerminalLine'

interface BootSequenceProps {
  phase: AppPhase
  onComplete: () => void
}

export default function BootSequence({ phase, onComplete }: BootSequenceProps) {
  const [visibleCount, setVisibleCount] = useState(1)

  useEffect(() => {
    if (phase !== 'boot' && phase !== 'scanning') return

    const timers: ReturnType<typeof setTimeout>[] = []

    bootMessages.slice(1).forEach((msg, index) => {
      const timer = setTimeout(() => {
        setVisibleCount(index + 2)
      }, msg.delay)
      timers.push(timer)
    })

    const completeTimer = setTimeout(() => {
      setTimeout(onComplete, 600)
    }, TOTAL_BOOT_DURATION)

    timers.push(completeTimer)

    return () => {
      timers.forEach(clearTimeout)
    }
  }, [phase, onComplete])

  const isVisible = phase === 'boot' || phase === 'scanning'
  const activeMessage = bootMessages[Math.min(visibleCount - 1, bootMessages.length - 1)]
  const modules = ['runtime', 'memory', 'compat', 'scheduler', 'kernel', 'report']

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="boot-sequence"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#18181b] px-5"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_22%,rgba(245,158,11,0.12),transparent_30%),linear-gradient(180deg,rgba(39,39,42,0.35),rgba(24,24,27,0.9))]" />
          <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:48px_48px]" />

          <div className="relative w-full max-w-[720px] rounded-lg border border-zinc-700/50 bg-zinc-950/32 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-md sm:p-6 max-h-[calc(100dvh-2rem)] overflow-y-auto">
            <div className="boot-scan-line" />
            <div className="mb-7 flex items-center justify-between border-b border-zinc-800/70 pb-3">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-zinc-500">
                  Diagnostics Mode
                </div>
                <div className="mt-1 font-mono text-xs text-zinc-300">
                  JoshHoltz.app / v1.0 runtime
                </div>
              </div>
              <div className="hidden rounded-md border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-amber-300 sm:block">
                scanning
              </div>
            </div>

            <div className="mb-5 grid grid-cols-3 gap-2 sm:grid-cols-6">
              {modules.map((module, index) => {
                const active = visibleCount >= index * 2
                return (
                  <motion.div
                    key={module}
                    className={`rounded border px-2 py-2 text-center font-mono text-[9px] uppercase tracking-[0.18em] ${
                      active
                        ? 'border-amber-400/35 bg-amber-400/10 text-amber-300'
                        : 'border-zinc-800/80 bg-zinc-950/35 text-zinc-600'
                    }`}
                    animate={
                      active
                        ? { opacity: [0.55, 1, 0.72], y: [0, -1, 0] }
                        : { opacity: 0.45 }
                    }
                    transition={{ duration: 1.1, repeat: active ? Infinity : 0, ease: 'easeInOut' }}
                  >
                    {module}
                  </motion.div>
                )
              })}
            </div>

            <div className="mb-4 rounded-md border border-white/[0.06] bg-zinc-950/45 px-3 py-3">
              <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                active check
              </div>
              <motion.div
                key={activeMessage.message}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22 }}
                className="font-mono text-sm text-amber-300"
              >
                {activeMessage.message}
              </motion.div>
            </div>

            <div className="space-y-1 overflow-hidden">
              {bootMessages.slice(Math.max(0, visibleCount - 7), visibleCount).map((msg, index) => (
                <TerminalLine
                  key={index}
                  timestamp={msg.timestamp}
                  message={msg.message}
                  variant={msg.variant}
                  delay={0} // Already handled by visibleCount timing
                />
              ))}

              {/* Blinking cursor */}
              {visibleCount > 0 && visibleCount < bootMessages.length && (
                <div className="flex items-start gap-3 mt-1">
                  <span className="text-zinc-600 font-mono text-xs shrink-0 select-none opacity-0">
                    [  0.000]
                  </span>
                  <motion.span
                    className="font-mono text-xs text-amber-400 inline-block w-2 h-4 bg-amber-400/70"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
              )}
            </div>

            <div className="mt-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-zinc-500 font-mono text-xs">
                  architecture validation
                </span>
                <span className="text-amber-400/80 font-mono text-xs uppercase tracking-[0.2em]">
                  running
                </span>
              </div>
              <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  key="boot-progress"
                  className="h-full bg-amber-400/70 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                  initial={{ x: '-35%', width: '28%' }}
                  animate={{ x: ['-35%', '410%'] }}
                  transition={{ duration: 1.25, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
