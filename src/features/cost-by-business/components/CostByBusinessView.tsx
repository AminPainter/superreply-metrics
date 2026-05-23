import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FiltersBar } from '@/features/unique-contacts/components/FiltersBar'
import type { DateTimeRange } from '@/features/unique-contacts/components/DateTimeRangePicker'
import { CostByBusinessChart } from './CostByBusinessChart'

function defaultRange(): DateTimeRange {
  const now = new Date()
  const from = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  return { from, to: now }
}

export function CostByBusinessView() {
  const [range, setRange] = useState<DateTimeRange>(defaultRange)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cost Per Business</CardTitle>
        <CardDescription>
          Sum of <code>total_cost_usd</code> per <code>business_id</code> in <code>open_ai_consumption</code>.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FiltersBar range={range} onRangeChange={setRange} />
        <CostByBusinessChart
          fromTimestamp={range.from.toISOString()}
          toTimestamp={range.to.toISOString()}
        />
      </CardContent>
    </Card>
  )
}
