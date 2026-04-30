import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useTopConsumptionContacts } from '../hooks/useTopConsumptionContacts'

interface Props {
  fromTimestamp: string
  toTimestamp: string
  environment: string
  traceName?: string
  topN?: number
}

const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 4,
})

function shortSessionId(id: string) {
  return id.length > 12 ? `${id.slice(0, 8)}…${id.slice(-3)}` : id
}

export function TopConsumptionContactsChart({
  fromTimestamp,
  toTimestamp,
  environment,
  traceName = 'sales-agent-turn',
  topN = 20,
}: Props) {
  const { data, loading, error } = useTopConsumptionContacts({
    fromTimestamp,
    toTimestamp,
    environment,
    traceName,
  })

  if (loading) return <p className="text-muted-foreground text-sm">Loading…</p>
  if (error) return <p className="text-destructive text-sm">Error: {error}</p>
  if (!data || data.length === 0) return <p className="text-muted-foreground text-sm">No data.</p>

  const top = data.slice(0, topN).map((row) => ({ ...row, label: shortSessionId(row.sessionId) }))
  const totalCost = data.reduce((acc, row) => acc + row.totalCost, 0)

  return (
    <div>
      <p className="text-muted-foreground text-xs mb-2">
        env={environment} · trace={traceName} · {data.length} contacts · showing top {top.length} ·
        total {usd.format(totalCost)}
      </p>
      <ResponsiveContainer width="100%" height={Math.max(160, top.length * 32 + 40)}>
        <BarChart data={top} layout="vertical" margin={{ top: 8, right: 24, bottom: 8, left: 24 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" tickFormatter={(v: number) => usd.format(v)} />
          <YAxis type="category" dataKey="label" width={120} />
          <Tooltip
            formatter={(value) => [usd.format(Number(value)), 'Total cost']}
            labelFormatter={(_label, payload) => {
              const id = payload?.[0]?.payload?.sessionId
              return id ? `Session ${id}` : ''
            }}
          />
          <Bar dataKey="totalCost" fill="var(--color-chart-3)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
