import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useErrorsByType } from '../hooks/useErrorsByType'

interface Props {
  fromTimestamp: string
  toTimestamp: string
}

const numberFmt = new Intl.NumberFormat('en-US')

export function ErrorsByTypeChart({ fromTimestamp, toTimestamp }: Props) {
  const { data, loading, error } = useErrorsByType({
    fromTimestamp,
    toTimestamp,
  })

  if (loading) return <p className="text-muted-foreground text-sm">Loading…</p>
  if (error) return <p className="text-destructive text-sm">Error: {error}</p>
  if (!data || data.length === 0) return <p className="text-muted-foreground text-sm">No errors.</p>

  const total = data.reduce((acc, row) => acc + row.count, 0)
  const top = data[0]

  return (
    <div>
      <p className="text-muted-foreground text-xs mb-2">
        {data.length} error types · {numberFmt.format(total)} total · top: {top.errorType} (
        {numberFmt.format(top.count)})
      </p>
      <ResponsiveContainer width="100%" height={Math.max(120, data.length * 48 + 40)}>
        <BarChart data={data} layout="vertical" margin={{ top: 8, right: 24, bottom: 8, left: 24 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" tickFormatter={(v: number) => numberFmt.format(v)} />
          <YAxis
            type="category"
            dataKey="errorType"
            width={220}
            interval={0}
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            formatter={(value) => [numberFmt.format(Number(value)), 'Errors']}
            labelFormatter={(label) => `Type: ${label}`}
          />
          <Bar dataKey="count" fill="var(--color-chart-5)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
