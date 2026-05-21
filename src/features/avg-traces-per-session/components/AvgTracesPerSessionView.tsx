import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FiltersBar } from '@/features/_legacy-langfuse/components/FiltersBar'
import type { DateTimeRange } from '@/features/unique-contacts/components/DateTimeRangePicker'
import type { Environment } from '@/features/_legacy-langfuse/components/EnvironmentSelect'
import { AvgTracesPerSessionChart } from './AvgTracesPerSessionChart'

function defaultRange(): DateTimeRange {
  const now = new Date()
  const from = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  return { from, to: now }
}

export function AvgTracesPerSessionView() {
  const [range, setRange] = useState<DateTimeRange>(defaultRange)
  const [environment, setEnvironment] = useState<Environment>('staging')

  return (
    <Card>
      <CardHeader>
        <CardTitle>Average Traces per Session</CardTitle>
        <CardDescription>
          Trace count ÷ distinct sessions, per business. Higher = longer conversations from{' '}
          <code>sales-agent-turn</code>.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FiltersBar
          range={range}
          onRangeChange={setRange}
          environment={environment}
          onEnvironmentChange={setEnvironment}
        />
        <AvgTracesPerSessionChart
          fromTimestamp={range.from.toISOString()}
          toTimestamp={range.to.toISOString()}
          environment={environment}
        />
      </CardContent>
    </Card>
  )
}
