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
    message: 'masking.framework: loaded  [resident since boot]',
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
    timestamp: '  2.908',
    message: 'Background task still open: replaying conversation from 2019',
    variant: 'warning',
    delay: 2060,
  },
  {
    timestamp: '  3.336',
    message: 'context_switch_monitor: threshold exceeded — recovery time: elevated',
    variant: 'warning',
    delay: 2380,
  },
  {
    timestamp: '  3.812',
    message: 'Working memory pressure: 91%  — 6 unresolved loops, 1 song on repeat',
    variant: 'warning',
    delay: 2700,
  },
  {
    timestamp: '  4.482',
    message: 'Cooling systems active  — sensory load nominal, fluorescents: suppressed',
    variant: 'normal',
    delay: 3020,
  },
  {
    timestamp: '  5.108',
    message: 'Validating core behavioral signatures against known architecture patterns…',
    variant: 'normal',
    delay: 3360,
  },
  {
    timestamp: '  5.826',
    message: 'Pattern recognized. Cross-referencing 34 years of diagnostic history…',
    variant: 'normal',
    delay: 3700,
  },
  {
    timestamp: '  6.290',
    message: '⚠  UNEXPECTED ARCHITECTURE DETECTED',
    variant: 'highlight',
    delay: 4060,
  },
  {
    timestamp: '  6.714',
    message: 'This system has never been correctly diagnosed.',
    variant: 'highlight',
    delay: 4420,
  },
  {
    timestamp: '  7.108',
    message: 'Previous self-model: deprecated. Running extended analysis…',
    variant: 'warning',
    delay: 4760,
  },
  {
    timestamp: '  7.891',
    message: 'Full report ready tomorrow. Preparing teaser interface.',
    variant: 'success',
    delay: 5100,
  },
]

export const TOTAL_BOOT_DURATION = 6200
