import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FiltersBar } from '@/features/unique-contacts/components/FiltersBar'
import type { DateTimeRange } from '@/features/unique-contacts/components/DateTimeRangePicker'
import { ErrorsByTypeChart } from './ErrorsByTypeChart'

function defaultRange(): DateTimeRange {
  const now = new Date()
  const from = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  return { from, to: now }
}

export function ErrorsByTypeView() {
  const [range, setRange] = useState<DateTimeRange>(defaultRange)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Errors by Type</CardTitle>
        <CardDescription>
          Distinct <code>trace_id</code> grouped by <code>error_category</code> in{' '}
          <code>open_ai_consumption</code>. Highest bar = most frequent error type.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FiltersBar range={range} onRangeChange={setRange} />
        <ErrorsByTypeChart
          fromTimestamp={range.from.toISOString()}
          toTimestamp={range.to.toISOString()}
        />
      </CardContent>
    </Card>
  )
}
