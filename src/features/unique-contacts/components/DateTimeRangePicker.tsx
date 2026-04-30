import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import type { DateRange } from 'react-day-picker'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

export interface DateTimeRange {
  from: Date
  to: Date
}

interface Props {
  value: DateTimeRange
  onChange: (next: DateTimeRange) => void
}

function toTimeInputValue(d: Date): string {
  return format(d, 'HH:mm:ss')
}

function applyTime(date: Date, hhmmss: string): Date {
  const [h, m, s] = hhmmss.split(':').map(Number)
  const next = new Date(date)
  next.setHours(h ?? 0, m ?? 0, s ?? 0, 0)
  return next
}

export function DateTimeRangePicker({ value, onChange }: Props) {
  const range: DateRange = { from: value.from, to: value.to }

  function handleSelect(next: DateRange | undefined) {
    if (!next?.from) return
    const from = applyTime(next.from, toTimeInputValue(value.from))
    const to = next.to
      ? applyTime(next.to, toTimeInputValue(value.to))
      : applyTime(next.from, toTimeInputValue(value.to))
    onChange({ from, to })
  }

  function handleFromTime(hhmmss: string) {
    onChange({ from: applyTime(value.from, hhmmss), to: value.to })
  }

  function handleToTime(hhmmss: string) {
    onChange({ from: value.from, to: applyTime(value.to, hhmmss) })
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-[320px] justify-start text-left font-normal',
            !value.from && 'text-muted-foreground',
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value.from && value.to ? (
            <>
              {format(value.from, 'LLL d, y HH:mm')} – {format(value.to, 'LLL d, y HH:mm')}
            </>
          ) : (
            <span>Pick a date range</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={range}
          onSelect={handleSelect}
          numberOfMonths={2}
          defaultMonth={value.from}
        />
        <div className="grid grid-cols-2 gap-3 border-t p-3">
          <div className="grid gap-1.5">
            <Label htmlFor="from-time" className="text-xs">From time</Label>
            <Input
              id="from-time"
              type="time"
              step="1"
              value={toTimeInputValue(value.from)}
              onChange={(e) => handleFromTime(e.target.value)}
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="to-time" className="text-xs">To time</Label>
            <Input
              id="to-time"
              type="time"
              step="1"
              value={toTimeInputValue(value.to)}
              onChange={(e) => handleToTime(e.target.value)}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
