import { MetricStatus } from './types'

export interface SystemMetric {
  id: string
  label: string
  value: number
  unit: string
  max?: number
  status: MetricStatus
  subtext: string
  displayValue?: string
}

export const initialMetrics: SystemMetric[] = [
  {
    id: 'working-memory',
    label: 'Working Memory',
    value: 91,
    unit: '%',
    max: 100,
    status: 'warning',
    subtext: '6 open loops · 1 song on repeat · 3 unfinished projects',
    displayValue: '14.6 GB / 16 GB',
  },
  {
    id: 'context-load',
    label: 'Context Switch Load',
    value: 78,
    unit: '%',
    max: 100,
    status: 'warning',
    subtext: 'Last meeting ended 3h ago. Still decompressing.',
  },
  {
    id: 'social-battery',
    label: 'Social Battery',
    value: 19,
    unit: '%',
    max: 100,
    status: 'critical',
    subtext: 'Last solo recharge: 2 days ago. ETA: unknown.',
  },
  {
    id: 'sensory-input',
    label: 'Sensory Input',
    value: 61,
    unit: '%',
    max: 100,
    status: 'stable',
    subtext: 'AC hum: present · shirt tag: suppressed · lights: filtered',
  },
]

export function fluctuateValue(value: number, amplitude: number = 2): number {
  const delta = (Math.random() - 0.5) * amplitude * 2
  return Math.max(0, Math.min(100, value + delta))
}

export interface SystemProcess {
  name: string
  detail: string
  load: string
  status: MetricStatus
}

export const backgroundProcesses: SystemProcess[] = [
  {
    name: 'masking.framework',
    detail: 'Active since age ~7. Consuming significant background CPU.',
    load: '43% cpu',
    status: 'warning',
  },
  {
    name: 'hyperfocusd',
    detail: 'Armed. Last trigger: Tue 11pm, ran 6h uninterrupted.',
    load: 'armed',
    status: 'stable',
  },
  {
    name: 'conversation_replay',
    detail: 'Currently processing: that thing I said at dinner in 2019.',
    load: 'looping',
    status: 'warning',
  },
  {
    name: 'shutdown_prevention',
    detail: 'Overriding scheduled sleep. Again.',
    load: 'active',
    status: 'warning',
  },
  {
    name: 'recoveryd',
    detail: 'Isolation mode initiated. Cooling systems nominal.',
    load: '52%',
    status: 'stable',
  },
  {
    name: 'interest_based_scheduler',
    detail: 'Ignoring low-interest tasks. High-interest queue: 14 items.',
    load: 'selective',
    status: 'stable',
  },
]

export const architectureChecks = [
  { label: 'Standard neurotypical firmware', value: 'absent', status: 'critical' as const },
  { label: 'AuDHD compatibility layer', value: 'detected', status: 'warning' as const },
  { label: 'masking.framework', value: 'loaded @ boot', status: 'warning' as const },
  { label: 'Interest-based scheduler', value: 'confirmed', status: 'stable' as const },
  { label: 'Previous self-model', value: 'deprecated', status: 'critical' as const },
  { label: 'Full diagnostic report', value: 'tomorrow', status: 'normal' as const },
]
