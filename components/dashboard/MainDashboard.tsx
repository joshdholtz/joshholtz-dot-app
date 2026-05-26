'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { AppPhase } from '@/lib/types'
import SystemHeader from './SystemHeader'
import HeroSection from './HeroSection'
import MetricsGrid from './MetricsGrid'
import TeaserCard from './TeaserCard'
import StatusBar from './StatusBar'
import ArchitecturePanel from './ArchitecturePanel'
import ProcessMonitor from './ProcessMonitor'

interface MainDashboardProps {
  phase: AppPhase
  onReplayBoot: () => void
}

export default function MainDashboard({ phase, onReplayBoot }: MainDashboardProps) {
  const isVisible = phase === 'revealed'

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="main-dashboard"
          className="relative min-h-screen overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.13),transparent_34%),radial-gradient(circle_at_82%_28%,rgba(59,130,246,0.08),transparent_27%),linear-gradient(180deg,rgba(39,39,42,0.45),rgba(24,24,27,0.96)_56%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.75)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.75)_1px,transparent_1px)] [background-size:64px_64px]" />

          <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-3 pb-4 pt-3 sm:px-5 sm:pt-5 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <SystemHeader />
            </motion.div>

            <main className="flex-1 py-5 sm:py-8 lg:py-10">
              <section className="grid items-stretch gap-4 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] lg:gap-5">
                <HeroSection />
                <ArchitecturePanel />
              </section>

              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.38 }}
                className="mt-4 sm:mt-5"
              >
                <div className="mb-3 flex items-center gap-3 sm:mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                    Live System Metrics
                  </span>
                  <div className="h-px flex-1 bg-zinc-800/80" />
                </div>
                <MetricsGrid />
              </motion.section>

              <section className="mt-4 grid gap-4 sm:mt-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-5">
                <ProcessMonitor />
                <TeaserCard />
              </section>
            </main>

            <StatusBar onReplayBoot={onReplayBoot} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
