import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useDateRange } from '@/features/global-filters'
import { UniqueContactsChart } from './UniqueContactsChart'

export function UniqueContactsView() {
  const { fromTimestamp, toTimestamp } = useDateRange()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Unique Contacts Per Business</CardTitle>
        <CardDescription>
          Distinct <code>contact_id</code> per <code>business_id</code> in <code>open_ai_consumption</code>.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <UniqueContactsChart
          fromTimestamp={fromTimestamp}
          toTimestamp={toTimestamp}
        />
      </CardContent>
    </Card>
  )
}
