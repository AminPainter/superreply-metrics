import { Label } from '@/components/ui/label'
import { DateTimeRangePicker, type DateTimeRange } from './DateTimeRangePicker'

interface Props {
  range: DateTimeRange
  onRangeChange: (next: DateTimeRange) => void
}

export function FiltersBar({ range, onRangeChange }: Props) {
  return (
    <div className="flex flex-wrap items-end gap-4 mb-4">
      <div className="grid gap-1.5">
        <Label className="text-xs">Date range</Label>
        <DateTimeRangePicker value={range} onChange={onRangeChange} />
      </div>
    </div>
  )
}
