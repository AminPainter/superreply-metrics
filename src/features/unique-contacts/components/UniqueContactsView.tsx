import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FiltersBar } from './FiltersBar'
import { UniqueContactsChart } from './UniqueContactsChart'
import type { DateTimeRange } from './DateTimeRangePicker'
import type { Environment } from './EnvironmentSelect'

function defaultRange(): DateTimeRange {
  const now = new Date()
  const from = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  return { from, to: now }
}

export function UniqueContactsView() {
  const [range, setRange] = useState<DateTimeRange>(defaultRange)
  const [environment, setEnvironment] = useState<Environment>('staging')

  return (
    <Card>
      <CardHeader>
        <CardTitle>Unique Contacts Per Business</CardTitle>
        <CardDescription>
          Distinct sessionIds per userId from <code>sales-agent-turn</code> traces. 1 sessionId = 1 contact.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FiltersBar
          range={range}
          onRangeChange={setRange}
          environment={environment}
          onEnvironmentChange={setEnvironment}
        />
        <UniqueContactsChart
          fromTimestamp={range.from.toISOString()}
          toTimestamp={range.to.toISOString()}
          environment={environment}
        />
      </CardContent>
    </Card>
  )
}
