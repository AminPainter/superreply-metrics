import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FiltersBar } from '@/features/_legacy-langfuse/components/FiltersBar'
import type { DateTimeRange } from '@/features/unique-contacts/components/DateTimeRangePicker'
import type { Environment } from '@/features/_legacy-langfuse/components/EnvironmentSelect'
import { CostByBusinessChart } from './CostByBusinessChart'

function defaultRange(): DateTimeRange {
  const now = new Date()
  const from = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  return { from, to: now }
}

export function CostByBusinessView() {
  const [range, setRange] = useState<DateTimeRange>(defaultRange)
  const [environment, setEnvironment] = useState<Environment>('staging')

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cost Per Business</CardTitle>
        <CardDescription>
          Sum of <code>totalCost</code> from <code>sales-agent-turn</code> traces, grouped by userId.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FiltersBar
          range={range}
          onRangeChange={setRange}
          environment={environment}
          onEnvironmentChange={setEnvironment}
        />
        <CostByBusinessChart
          fromTimestamp={range.from.toISOString()}
          toTimestamp={range.to.toISOString()}
          environment={environment}
        />
      </CardContent>
    </Card>
  )
}
