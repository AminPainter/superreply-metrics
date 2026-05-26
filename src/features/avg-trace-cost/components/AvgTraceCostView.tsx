import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useDateRange } from '@/features/global-filters'
import { AvgTraceCostChart } from './AvgTraceCostChart'

export function AvgTraceCostView() {
  const { fromTimestamp, toTimestamp } = useDateRange()

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
        <AvgTraceCostChart
          fromTimestamp={fromTimestamp}
          toTimestamp={toTimestamp}
        />
      </CardContent>
    </Card>
  )
}
