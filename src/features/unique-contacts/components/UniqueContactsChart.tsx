import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useUniqueContacts } from '../hooks/useUniqueContacts'

interface Props {
  fromTimestamp: string
  toTimestamp: string
}

export function UniqueContactsChart({ fromTimestamp, toTimestamp }: Props) {
  const { data, loading, error, totalRows } = useUniqueContacts({
    fromTimestamp,
    toTimestamp,
  })

  if (loading) return <p className="text-muted-foreground text-sm">Loading…</p>
  if (error) return <p className="text-destructive text-sm">Error: {error}</p>
  if (!data || data.length === 0) return <p className="text-muted-foreground text-sm">No data.</p>

  return (
    <div>
      <p className="text-muted-foreground text-xs mb-2">
        {totalRows} rows · {data.length} businesses
      </p>
      <ResponsiveContainer width="100%" height={Math.max(120, data.length * 48 + 40)}>
        <BarChart data={data} layout="vertical" margin={{ top: 8, right: 24, bottom: 8, left: 24 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" allowDecimals={false} />
          <YAxis type="category" dataKey="businessId" width={100} />
          <Tooltip
            formatter={(value) => [`${value} contacts`, 'Unique']}
            labelFormatter={(label) => `Business ${label}`}
          />
          <Bar dataKey="uniqueContacts" fill="var(--color-chart-1)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
