import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FiltersBar } from '@/features/unique-contacts/components/FiltersBar'
import type { DateTimeRange } from '@/features/unique-contacts/components/DateTimeRangePicker'
import { TopConsumptionContactsChart } from './TopConsumptionContactsChart'

function defaultRange(): DateTimeRange {
  const now = new Date()
  const from = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  return { from, to: now }
}

export function TopConsumptionContactsView() {
  const [range, setRange] = useState<DateTimeRange>(defaultRange)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Consumption Contacts</CardTitle>
        <CardDescription>
          Contacts ranked by total <code>total_cost_usd</code> in{' '}
          <code>open_ai_consumption</code>, descending. Highest bar = most expensive conversation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FiltersBar range={range} onRangeChange={setRange} />
        <TopConsumptionContactsChart
          fromTimestamp={range.from.toISOString()}
          toTimestamp={range.to.toISOString()}
        />
      </CardContent>
    </Card>
  )
}
