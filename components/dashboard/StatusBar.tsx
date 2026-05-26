'use client'

import PulsingDot from '@/components/shared/PulsingDot'
import { useEffect, useState } from 'react'

interface StatusBarProps {
  onReplayBoot: () => void
}

export default function StatusBar({ onReplayBoot }: StatusBarProps) {
  const [countdown, setCountdown] = useState('')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      // Target: next day midnight
      const tomorrow = new Date(now)
      tomorrow.setDate(tomorrow.getDate() + 1)
      tomorrow.setHours(0, 0, 0, 0)

      const diff = tomorrow.getTime() - now.getTime()
      const h = Math.floor(diff / 3600000)
      const m = Math.floor((diff % 3600000) / 60000)
      const s = Math.floor((diff % 60000) / 1000)

      setCountdown(
        `${String(h).padStart(2, '0')}h ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s`
      )
    }

    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="sticky bottom-3 mt-auto">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-zinc-700/45 bg-zinc-950/55 px-3 py-2.5 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-md sm:grid-cols-[1fr_auto_1fr] sm:px-4">
          <div className="flex items-center gap-2">
            <PulsingDot color="green" size="sm" />
            <span className="font-mono text-xs text-zinc-400 hidden sm:inline">
              SYSTEM ONLINE
            </span>
          </div>

          <button
            type="button"
            onClick={onReplayBoot}
            className="hidden rounded-md border border-zinc-700/70 bg-zinc-900/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 transition hover:border-amber-500/35 hover:text-amber-300 sm:block"
          >
            Replay boot
          </button>

          <div className="justify-self-end font-mono text-xs text-zinc-500">
            <span className="hidden sm:inline">Extended analysis: </span>
            <span className="text-amber-500/70">{countdown}</span>
          </div>

          <button
            type="button"
            onClick={onReplayBoot}
            className="col-span-2 rounded-md border border-zinc-700/70 bg-zinc-900/70 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 transition hover:border-amber-500/35 hover:text-amber-300 sm:hidden"
          >
            Replay boot sequence
          </button>
        </div>
      </div>
    </div>
  )
}
