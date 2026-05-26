import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useDateRange } from '@/features/global-filters'
import { ErrorsByTypeChart } from './ErrorsByTypeChart'

export function ErrorsByTypeView() {
  const { fromTimestamp, toTimestamp } = useDateRange()

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
        <ErrorsByTypeChart
          fromTimestamp={fromTimestamp}
          toTimestamp={toTimestamp}
        />
      </CardContent>
    </Card>
  )
}
