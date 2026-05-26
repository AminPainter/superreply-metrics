import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useDateRange } from '@/features/global-filters'
import { CostByBusinessChart } from './CostByBusinessChart'

export function CostByBusinessView() {
  const { fromTimestamp, toTimestamp } = useDateRange()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cost Per Business</CardTitle>
        <CardDescription>
          Sum of <code>total_cost_usd</code> per <code>business_id</code> in <code>open_ai_consumption</code>.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CostByBusinessChart
          fromTimestamp={fromTimestamp}
          toTimestamp={toTimestamp}
        />
      </CardContent>
    </Card>
  )
}
