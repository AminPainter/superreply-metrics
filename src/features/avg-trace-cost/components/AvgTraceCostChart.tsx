import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useAvgTraceCost } from '../hooks/useAvgTraceCost'

interface Props {
  fromTimestamp: string
  toTimestamp: string
  environment: string
  traceName?: string
}

const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 6,
})

export function AvgTraceCostChart({
  fromTimestamp,
  toTimestamp,
  environment,
  traceName = 'sales-agent-turn',
}: Props) {
  const { data, loading, error } = useAvgTraceCost({
    fromTimestamp,
    toTimestamp,
    environment,
    traceName,
  })

  if (loading) return <p className="text-muted-foreground text-sm">Loading…</p>
  if (error) return <p className="text-destructive text-sm">Error: {error}</p>
  if (!data || data.length === 0) return <p className="text-muted-foreground text-sm">No data.</p>

  const mostExpensive = data[0]

  return (
    <div>
      <p className="text-muted-foreground text-xs mb-2">
        env={environment} · trace={traceName} · {data.length} businesses · most expensive: business{' '}
        {mostExpensive.businessId} ({usd.format(mostExpensive.avgTraceCost)}/trace)
      </p>
      <ResponsiveContainer width="100%" height={Math.max(120, data.length * 48 + 40)}>
        <BarChart data={data} layout="vertical" margin={{ top: 8, right: 24, bottom: 8, left: 24 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" tickFormatter={(v: number) => usd.format(v)} />
          <YAxis type="category" dataKey="businessId" width={100} />
          <Tooltip
            formatter={(value) => [usd.format(Number(value)), 'Avg cost / trace']}
            labelFormatter={(label) => `Business ${label}`}
          />
          <Bar dataKey="avgTraceCost" fill="var(--color-chart-4)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
