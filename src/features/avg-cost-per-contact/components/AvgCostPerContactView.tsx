import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useDateRange } from '@/features/global-filters'
import { AvgCostPerContactChart } from './AvgCostPerContactChart'

export function AvgCostPerContactView() {
  const { fromTimestamp, toTimestamp } = useDateRange()

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
        <AvgCostPerContactChart
          fromTimestamp={fromTimestamp}
          toTimestamp={toTimestamp}
        />
      </CardContent>
    </Card>
  )
}
