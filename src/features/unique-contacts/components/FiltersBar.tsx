import { Label } from '@/components/ui/label'
import { DateTimeRangePicker, type DateTimeRange } from './DateTimeRangePicker'
import { EnvironmentSelect, type Environment } from './EnvironmentSelect'

interface Props {
  range: DateTimeRange
  onRangeChange: (next: DateTimeRange) => void
  environment: Environment
  onEnvironmentChange: (next: Environment) => void
}

export function FiltersBar({ range, onRangeChange, environment, onEnvironmentChange }: Props) {
  return (
    <div className="flex flex-wrap items-end gap-4 mb-4">
      <div className="grid gap-1.5">
        <Label className="text-xs">Environment</Label>
        <EnvironmentSelect value={environment} onChange={onEnvironmentChange} />
      </div>
      <div className="grid gap-1.5">
        <Label className="text-xs">Date range</Label>
        <DateTimeRangePicker value={range} onChange={onRangeChange} />
      </div>
    </div>
  )
}
