import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useAvgTracesPerSession } from '../hooks/useAvgTracesPerSession'

interface Props {
  fromTimestamp: string
  toTimestamp: string
  environment: string
  traceName?: string
}

const numberFmt = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 })

export function AvgTracesPerSessionChart({
  fromTimestamp,
  toTimestamp,
  environment,
  traceName = 'sales-agent-turn',
}: Props) {
  const { data, loading, error } = useAvgTracesPerSession({
    fromTimestamp,
    toTimestamp,
    environment,
    traceName,
  })

  if (loading) return <p className="text-muted-foreground text-sm">Loading…</p>
  if (error) return <p className="text-destructive text-sm">Error: {error}</p>
  if (!data || data.length === 0) return <p className="text-muted-foreground text-sm">No data.</p>

  return (
    <div>
      <p className="text-muted-foreground text-xs mb-2">
        env={environment} · trace={traceName} · {data.length} businesses
      </p>
      <ResponsiveContainer width="100%" height={Math.max(120, data.length * 48 + 40)}>
        <BarChart data={data} layout="vertical" margin={{ top: 8, right: 24, bottom: 8, left: 24 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" tickFormatter={(v: number) => numberFmt.format(v)} />
          <YAxis type="category" dataKey="businessId" width={100} />
          <Tooltip
            formatter={(value, _name, item) => {
              const row = item.payload as { traces: number; sessions: number }
              return [
                `${numberFmt.format(Number(value))} (${row.traces} traces / ${row.sessions} sessions)`,
                'Avg traces / session',
              ]
            }}
            labelFormatter={(label) => `Business ${label}`}
          />
          <Bar dataKey="avgTracesPerSession" fill="var(--color-chart-5)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
