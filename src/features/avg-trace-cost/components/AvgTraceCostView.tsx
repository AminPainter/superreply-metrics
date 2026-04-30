import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FiltersBar } from '@/features/unique-contacts/components/FiltersBar'
import type { DateTimeRange } from '@/features/unique-contacts/components/DateTimeRangePicker'
import type { Environment } from '@/features/unique-contacts/components/EnvironmentSelect'
import { AvgTraceCostChart } from './AvgTraceCostChart'

function defaultRange(): DateTimeRange {
  const now = new Date()
  const from = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  return { from, to: now }
}

export function AvgTraceCostView() {
  const [range, setRange] = useState<DateTimeRange>(defaultRange)
  const [environment, setEnvironment] = useState<Environment>('staging')

  return (
    <Card>
      <CardHeader>
        <CardTitle>Average Trace Cost per Business</CardTitle>
        <CardDescription>
          Mean <code>totalCost</code> per <code>sales-agent-turn</code> trace, grouped by userId.
          Highest bar = most expensive business per call.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FiltersBar
          range={range}
          onRangeChange={setRange}
          environment={environment}
          onEnvironmentChange={setEnvironment}
        />
        <AvgTraceCostChart
          fromTimestamp={range.from.toISOString()}
          toTimestamp={range.to.toISOString()}
          environment={environment}
        />
      </CardContent>
    </Card>
  )
}
