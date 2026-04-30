import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useCostByBusiness } from '../hooks/useCostByBusiness'

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
  maximumFractionDigits: 4,
})

export function CostByBusinessChart({
  fromTimestamp,
  toTimestamp,
  environment,
  traceName = 'sales-agent-turn',
}: Props) {
  const { data, loading, error } = useCostByBusiness({
    fromTimestamp,
    toTimestamp,
    environment,
    traceName,
  })

  if (loading) return <p className="text-muted-foreground text-sm">Loading…</p>
  if (error) return <p className="text-destructive text-sm">Error: {error}</p>
  if (!data || data.length === 0) return <p className="text-muted-foreground text-sm">No data.</p>

  const totalCost = data.reduce((acc, row) => acc + row.totalCost, 0)

  return (
    <div>
      <p className="text-muted-foreground text-xs mb-2">
        env={environment} · trace={traceName} · {data.length} businesses · total {usd.format(totalCost)}
      </p>
      <ResponsiveContainer width="100%" height={Math.max(120, data.length * 48 + 40)}>
        <BarChart data={data} layout="vertical" margin={{ top: 8, right: 24, bottom: 8, left: 24 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" tickFormatter={(v: number) => usd.format(v)} />
          <YAxis type="category" dataKey="businessId" width={100} />
          <Tooltip
            formatter={(value) => [usd.format(Number(value)), 'Total cost']}
            labelFormatter={(label) => `Business ${label}`}
          />
          <Bar dataKey="totalCost" fill="var(--color-chart-2)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
