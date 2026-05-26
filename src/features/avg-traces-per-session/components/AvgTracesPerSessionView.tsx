import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useDateRange } from '@/features/global-filters'
import { AvgTracesPerSessionChart } from './AvgTracesPerSessionChart'

export function AvgTracesPerSessionView() {
  const { fromTimestamp, toTimestamp } = useDateRange()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Average Traces per Session</CardTitle>
        <CardDescription>
          Distinct <code>trace_id</code> ÷ distinct <code>contact_id</code>, per{' '}
          <code>business_id</code> in <code>open_ai_consumption</code>. Higher = longer
          conversations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AvgTracesPerSessionChart
          fromTimestamp={fromTimestamp}
          toTimestamp={toTimestamp}
        />
      </CardContent>
    </Card>
  )
}
