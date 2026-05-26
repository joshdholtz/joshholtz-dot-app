'use client'

import BootSequence from '@/components/boot/BootSequence'
import MainDashboard from '@/components/dashboard/MainDashboard'
import { AppPhase } from '@/lib/types'
import { useCallback, useState } from 'react'

export default function OrchestratorClient() {
  const [phase, setPhase] = useState<AppPhase>('boot')
  const [bootRun, setBootRun] = useState(0)

  const handleBootComplete = useCallback(() => {
    setPhase('revealed')
  }, [])

  const handleReplayBoot = useCallback(() => {
    setBootRun((run) => run + 1)
    setPhase('boot')
  }, [])

  return (
    <div className="relative min-h-screen">
      <BootSequence key={bootRun} phase={phase} onComplete={handleBootComplete} />
      <MainDashboard phase={phase} onReplayBoot={handleReplayBoot} />
    </div>
  )
}
