import { Label } from '@/components/ui/label'
import { DateTimeRangePicker } from './DateTimeRangePicker'
import { useDateRange } from '../DateRangeContext'

export function GlobalFiltersBar() {
  const { range, setRange } = useDateRange()

  return (
    <div className="flex flex-wrap items-end gap-4">
      <div className="grid gap-1.5">
        <Label className="text-xs">Date range</Label>
        <DateTimeRangePicker value={range} onChange={setRange} />
      </div>
    </div>
  )
}
