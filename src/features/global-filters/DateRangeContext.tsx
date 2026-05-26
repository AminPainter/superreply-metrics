import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { DateTimeRange } from './components/DateTimeRangePicker'

interface DateRangeContextValue {
  range: DateTimeRange
  setRange: (next: DateTimeRange) => void
  fromTimestamp: string
  toTimestamp: string
}

const DateRangeContext = createContext<DateRangeContextValue | null>(null)

function defaultRange(): DateTimeRange {
  const now = new Date()
  const from = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  return { from, to: now }
}

export function DateRangeProvider({ children }: { children: ReactNode }) {
  const [range, setRange] = useState<DateTimeRange>(defaultRange)

  const value = useMemo<DateRangeContextValue>(
    () => ({
      range,
      setRange,
      fromTimestamp: range.from.toISOString(),
      toTimestamp: range.to.toISOString(),
    }),
    [range],
  )

  return <DateRangeContext.Provider value={value}>{children}</DateRangeContext.Provider>
}

export function useDateRange(): DateRangeContextValue {
  const ctx = useContext(DateRangeContext)
  if (!ctx) throw new Error('useDateRange must be used within DateRangeProvider')
  return ctx
}
