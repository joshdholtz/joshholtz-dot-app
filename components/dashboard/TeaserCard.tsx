'use client'

import { motion } from 'framer-motion'

const topics = [
  'autism',
  'ADHD',
  'burnout',
  'masking',
  'hyperfocus',
  'sensory processing',
  'diagnosis at 34',
  'rebuilding',
]

export default function TeaserCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.68, ease: 'easeOut' }}
      className="h-full"
    >
      <div className="relative h-full overflow-hidden rounded-lg border border-amber-500/25 bg-[linear-gradient(145deg,rgba(44,33,22,0.55),rgba(24,24,27,0.72))] shadow-[0_26px_110px_rgba(245,158,11,0.1)] backdrop-blur-md">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-amber-500/[0.04] blur-3xl pointer-events-none" />

        <div className="relative flex h-full flex-col p-5 sm:p-6 md:p-7">
          <div className="flex items-center gap-2 mb-5">
            <motion.div
              className="h-1.5 w-1.5 rounded-full bg-amber-400"
              animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-amber-300/80">
              Extended Diagnostics: Complete
            </span>
          </div>

          <div className="mb-5 h-px w-full bg-gradient-to-r from-amber-400/40 via-zinc-700/60 to-transparent" />

          <div className="mb-6 space-y-3">
            <p className="text-base font-light leading-7 text-zinc-200 md:text-lg">
              It took a full system crash to run the right diagnostics.
            </p>
            <p className="text-sm font-light leading-6 text-zinc-400 md:text-base">
              Burnout. Medication that muted the wrong signal.
              A 4-hour neuropsychological evaluation.
              And finally — a diagnosis that actually fit.
            </p>
            <p className="text-sm font-light leading-6 text-zinc-500">
              autism.kernel (primary) · adhd.scheduler (secondary)
            </p>
          </div>

          <div className="mb-6 flex flex-wrap gap-1.5">
            {topics.map((topic) => (
              <span
                key={topic}
                className="rounded border border-zinc-700/60 bg-zinc-900/60 px-2 py-0.5 font-mono text-[10px] text-zinc-500 tracking-wide"
              >
                {topic}
              </span>
            ))}
          </div>

          <div className="mb-4 rounded-md border border-zinc-800/60 bg-zinc-950/40 px-3 py-2.5">
            <p className="font-mono text-xs text-zinc-500 italic leading-5">
              &ldquo;Understanding my newly recognized operating system&rdquo;
            </p>
          </div>

          <motion.div
            className="mt-auto inline-flex w-fit items-center gap-2.5 rounded-md border border-amber-500/25 bg-amber-500/[0.08] px-3 py-2 sm:px-4"
            animate={{
              boxShadow: [
                '0 0 0px rgba(245,158,11,0)',
                '0 0 20px rgba(245,158,11,0.18)',
                '0 0 0px rgba(245,158,11,0)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-mono text-xs text-amber-300 tracking-wide sm:text-sm">
              Full report — May 27, 2026
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
