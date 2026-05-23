import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FiltersBar } from '@/features/unique-contacts/components/FiltersBar'
import type { DateTimeRange } from '@/features/unique-contacts/components/DateTimeRangePicker'
import { AvgTraceCostChart } from './AvgTraceCostChart'

function defaultRange(): DateTimeRange {
  const now = new Date()
  const from = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  return { from, to: now }
}

export function AvgTraceCostView() {
  const [range, setRange] = useState<DateTimeRange>(defaultRange)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Average Trace Cost per Business</CardTitle>
        <CardDescription>
          Mean cost per <code>trace_id</code> in <code>open_ai_consumption</code>, grouped by{' '}
          <code>business_id</code>. Highest bar = most expensive business per call.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FiltersBar range={range} onRangeChange={setRange} />
        <AvgTraceCostChart
          fromTimestamp={range.from.toISOString()}
          toTimestamp={range.to.toISOString()}
        />
      </CardContent>
    </Card>
  )
}
