import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FiltersBar } from '@/features/unique-contacts/components/FiltersBar'
import type { DateTimeRange } from '@/features/unique-contacts/components/DateTimeRangePicker'
import type { Environment } from '@/features/unique-contacts/components/EnvironmentSelect'
import { ErrorsByTypeChart } from './ErrorsByTypeChart'

function defaultRange(): DateTimeRange {
  const now = new Date()
  const from = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  return { from, to: now }
}

export function ErrorsByTypeView() {
  const [range, setRange] = useState<DateTimeRange>(defaultRange)
  const [environment, setEnvironment] = useState<Environment>('staging')

  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Errors by Type</CardTitle>
        <CardDescription>
          Count of traces tagged with <code>error:&lt;category&gt;</code>, grouped by category.
          Highest bar = most frequent error type.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FiltersBar
          range={range}
          onRangeChange={setRange}
          environment={environment}
          onEnvironmentChange={setEnvironment}
        />
        <ErrorsByTypeChart
          fromTimestamp={range.from.toISOString()}
          toTimestamp={range.to.toISOString()}
          environment={environment}
        />
      </CardContent>
    </Card>
  )
}
