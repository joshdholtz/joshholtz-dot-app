'use client'

import { motion } from 'framer-motion'

const kept = [
  'find patterns in everything',
  'solve real problems',
  'build weird things',
  'hyperfocus as a feature, not a bug',
  'obsess over reducing friction',
  'accidentally create new problems',
  'iterate until it clicks',
  'have fun doing it',
]

const upgraded = [
  { label: 'self-model', from: 'neurotypical.assumption', to: 'audhd.architecture' },
  { label: 'recovery protocol', from: 'ignore until crash', to: 'scheduled + protected' },
  { label: 'environment config', from: 'adapt to default', to: 'design for this brain' },
  { label: 'stimulation budget', from: 'untracked', to: 'actively managed' },
]

const deprecated = [
  'monkey-patching random meds without diagnosis',
  'overclocking until system halts',
  'masking as primary coping strategy',
  'treating burnout as a productivity problem',
]

export default function V2Roadmap() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.85, ease: 'easeOut' }}
      className="mt-4 sm:mt-5"
    >
      <div className="mb-3 flex items-center gap-3 sm:mb-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-300">
          JoshHoltz.app 2.0 — diff
        </span>
        <div className="h-px flex-1 bg-zinc-700/60" />
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-amber-400/80">
          in progress
        </span>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">

        {/* Kept */}
        <div className="rounded-lg border border-zinc-700/40 bg-[linear-gradient(145deg,rgba(39,39,42,0.6),rgba(24,24,27,0.5))] p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2">
            <span className="font-mono text-[10px] text-emerald-400/80 uppercase tracking-widest">+ retained</span>
          </div>
          <ul className="space-y-1.5">
            {kept.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500/60" />
                <span className="font-mono text-xs text-zinc-400 leading-5">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Upgraded */}
        <div className="rounded-lg border border-amber-500/20 bg-[linear-gradient(145deg,rgba(44,33,22,0.45),rgba(24,24,27,0.55))] p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2">
            <span className="font-mono text-[10px] text-amber-400/80 uppercase tracking-widest">~ upgraded</span>
          </div>
          <ul className="space-y-3">
            {upgraded.map((item) => (
              <li key={item.label} className="space-y-0.5">
                <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wide">{item.label}</div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-mono text-[10px] text-red-400/70 line-through">{item.from}</span>
                  <span className="font-mono text-[10px] text-zinc-600">→</span>
                  <span className="font-mono text-[10px] text-amber-300/90">{item.to}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Deprecated */}
        <div className="rounded-lg border border-zinc-700/40 bg-[linear-gradient(145deg,rgba(39,39,42,0.6),rgba(24,24,27,0.5))] p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2">
            <span className="font-mono text-[10px] text-red-400/70 uppercase tracking-widest">- deprecated</span>
          </div>
          <ul className="space-y-1.5">
            {deprecated.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-500/50" />
                <span className="font-mono text-xs text-zinc-500 leading-5 line-through decoration-zinc-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </motion.section>
  )
}
