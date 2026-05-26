'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const SUBTITLE = 'Unexpected architecture detected.'

export default function HeroSection() {
  const [subtitleText, setSubtitleText] = useState('')
  const [subtitleDone, setSubtitleDone] = useState(false)

  useEffect(() => {
    let index = 0
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        index++
        setSubtitleText(SUBTITLE.slice(0, index))
        if (index >= SUBTITLE.length) {
          clearInterval(interval)
          setSubtitleDone(true)
        }
      }, 28)
      return () => clearInterval(interval)
    }, 600)

    return () => clearTimeout(delay)
  }, [])

  return (
    <section className="relative overflow-hidden rounded-lg border border-zinc-700/45 bg-[linear-gradient(145deg,rgba(39,39,42,0.7),rgba(24,24,27,0.48))] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-7 lg:p-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
      <div className="mb-8 flex items-center justify-between gap-3 sm:mb-10">
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
          runtime report
        </div>
        <div className="rounded-md border border-zinc-700/55 bg-zinc-950/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
          tonight
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-[clamp(1.75rem,5.5vw,5.5rem)] font-light leading-[0.96] tracking-tight text-stone-50">
          JoshHoltz.app
        </h1>
      </motion.div>

      <motion.div
        className="mt-4 sm:mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <p className="font-mono text-sm tracking-wide text-amber-300 sm:text-base md:text-lg">
          {subtitleText}
          {!subtitleDone && (
            <motion.span
              className="inline-block w-0.5 h-4 bg-amber-400 ml-0.5 align-middle"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          )}
        </p>
      </motion.div>

      <motion.div
        className="mt-7 max-w-2xl sm:mt-8"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.85, ease: 'easeOut' }}
      >
        <p className="text-sm font-light leading-7 text-zinc-300 sm:text-base md:text-lg">
          For 34 years, I assumed this system was running
          standard firmware.
        </p>
        <p className="mt-3 text-sm font-light leading-7 text-zinc-400 sm:text-base md:text-lg">
          Turns out I was debugging the wrong operating system.
        </p>
        <p className="mt-3 text-xs font-light leading-6 text-zinc-500 sm:text-sm">
          Extended diagnostics complete. Full report tomorrow.
        </p>
      </motion.div>
    </section>
  )
}
