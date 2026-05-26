import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useDateRange } from '@/features/global-filters'
import { TopConsumptionContactsChart } from './TopConsumptionContactsChart'

export function TopConsumptionContactsView() {
  const { fromTimestamp, toTimestamp } = useDateRange()

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
        <TopConsumptionContactsChart
          fromTimestamp={fromTimestamp}
          toTimestamp={toTimestamp}
        />
      </CardContent>
    </Card>
  )
}
