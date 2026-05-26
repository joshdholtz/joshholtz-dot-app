'use client'

import PulsingDot from '@/components/shared/PulsingDot'
import { useEffect, useState } from 'react'

export default function SystemHeader() {
  const [time, setTime] = useState('')
  const [uptime, setUptime] = useState(0)

  useEffect(() => {
    const uptimeStart = Date.now()

    const tick = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      )
      setUptime(Math.floor((Date.now() - uptimeStart) / 1000))
    }

    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatUptime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }

  return (
    <header className="flex items-center justify-between rounded-lg border border-zinc-700/45 bg-zinc-950/35 px-3 py-2.5 shadow-[0_18px_80px_rgba(0,0,0,0.22)] backdrop-blur-md sm:px-4 sm:py-3">
      <div className="flex items-center gap-2">
        <PulsingDot color="amber" size="sm" />
        <span className="font-mono text-xs text-zinc-300 tracking-wider">joshholtz.app</span>
      </div>

      <div className="hidden sm:flex items-center">
        <span className="font-mono text-[10px] px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-300 uppercase tracking-[0.24em]">
          Diagnostics Mode
        </span>
      </div>

      <div className="flex items-center gap-4 font-mono text-xs text-zinc-500">
        <span className="hidden md:inline">
          up {formatUptime(uptime)}
        </span>
        <span>{time}</span>
      </div>
    </header>
  )
}
