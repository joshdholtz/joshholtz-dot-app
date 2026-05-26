import { MessageVariant } from './types'

export interface BootMessage {
  timestamp: string
  message: string
  variant: MessageVariant
  delay: number // ms from start
}

export const bootMessages: BootMessage[] = [
  {
    timestamp: '  0.000',
    message: 'Initializing JoshHoltz.app diagnostics runtime…',
    variant: 'normal',
    delay: 0,
  },
  {
    timestamp: '  0.142',
    message: 'Loading memory subsystems…',
    variant: 'normal',
    delay: 280,
  },
  {
    timestamp: '  0.891',
    message: 'Mounting persistent storage: /self/history/34y (read-only)',
    variant: 'normal',
    delay: 620,
  },
  {
    timestamp: '  1.203',
    message: 'masking.framework: loaded  [resident since early boot]',
    variant: 'warning',
    delay: 1020,
  },
  {
    timestamp: '  1.774',
    message: 'Checking compatibility layers… 4 active shims detected',
    variant: 'normal',
    delay: 1380,
  },
  {
    timestamp: '  2.241',
    message: 'social_interaction_daemon: responding (degraded)  — 340ms latency',
    variant: 'warning',
    delay: 1720,
  },
  {
    timestamp: '  2.814',
    message: 'WARNING: burnout event logged — February. System halted for 3 weeks.',
    variant: 'error',
    delay: 2060,
  },
  {
    timestamp: '  3.102',
    message: 'medication_trial.log: side effects critical — muting primary signal',
    variant: 'error',
    delay: 2380,
  },
  {
    timestamp: '  3.698',
    message: 'Neuropsychological evaluation: 4h session — results pending review',
    variant: 'normal',
    delay: 2720,
  },
  {
    timestamp: '  4.201',
    message: 'Validating core behavioral signatures against known architecture patterns…',
    variant: 'normal',
    delay: 3060,
  },
  {
    timestamp: '  4.883',
    message: 'Pattern recognized. Cross-referencing 34 years of diagnostic history…',
    variant: 'normal',
    delay: 3400,
  },
  {
    timestamp: '  5.441',
    message: '⚠  UNEXPECTED ARCHITECTURE DETECTED',
    variant: 'highlight',
    delay: 3780,
  },
  {
    timestamp: '  5.918',
    message: 'autism.kernel: primary  |  adhd.scheduler: secondary',
    variant: 'highlight',
    delay: 4160,
  },
  {
    timestamp: '  6.334',
    message: 'Previous self-model: deprecated. This was never standard firmware.',
    variant: 'warning',
    delay: 4520,
  },
  {
    timestamp: '  7.102',
    message: 'Full report ready tomorrow. Preparing teaser interface.',
    variant: 'success',
    delay: 4900,
  },
]

export const TOTAL_BOOT_DURATION = 6200
