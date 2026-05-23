import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FiltersBar } from '@/features/unique-contacts/components/FiltersBar'
import type { DateTimeRange } from '@/features/unique-contacts/components/DateTimeRangePicker'
import { AvgCostPerContactChart } from './AvgCostPerContactChart'

function defaultRange(): DateTimeRange {
  const now = new Date()
  const from = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  return { from, to: now }
}

export function AvgCostPerContactView() {
  const [range, setRange] = useState<DateTimeRange>(defaultRange)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Average Cost per Contact</CardTitle>
        <CardDescription>
          <code>sum(total_cost_usd)</code> ÷ distinct <code>contact_id</code>, per{' '}
          <code>business_id</code> in <code>open_ai_consumption</code>.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FiltersBar range={range} onRangeChange={setRange} />
        <AvgCostPerContactChart
          fromTimestamp={range.from.toISOString()}
          toTimestamp={range.to.toISOString()}
        />
      </CardContent>
    </Card>
  )
}
