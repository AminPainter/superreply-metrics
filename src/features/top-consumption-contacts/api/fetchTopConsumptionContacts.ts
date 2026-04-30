import type { MetricsResponse, TopConsumptionContact } from '../types'

interface FetchOptions {
  fromTimestamp: string
  toTimestamp: string
  environment?: string
  traceName?: string
  signal?: AbortSignal
}

export async function fetchTopConsumptionContacts(
  opts: FetchOptions,
): Promise<TopConsumptionContact[]> {
  const filters: Array<Record<string, unknown>> = []
  if (opts.traceName) {
    filters.push({ column: 'name', operator: '=', value: opts.traceName, type: 'string' })
  }
  if (opts.environment) {
    filters.push({ column: 'environment', operator: '=', value: opts.environment, type: 'string' })
  }

  const query = {
    view: 'traces',
    metrics: [{ measure: 'totalCost', aggregation: 'sum' }],
    dimensions: [{ field: 'sessionId' }],
    filters,
    fromTimestamp: opts.fromTimestamp,
    toTimestamp: opts.toTimestamp,
    orderBy: [{ field: 'sum_totalCost', direction: 'desc' }],
  }

  const params = new URLSearchParams({ query: JSON.stringify(query) })
  const res = await fetch(`/api/langfuse/public/metrics?${params}`, { signal: opts.signal })
  if (!res.ok) {
    throw new Error(`Langfuse ${res.status}: ${await res.text()}`)
  }
  const body = (await res.json()) as MetricsResponse

  return body.data
    .filter((row) => row.sessionId && row.sum_totalCost != null && row.sum_totalCost > 0)
    .map((row) => ({ sessionId: row.sessionId!, totalCost: row.sum_totalCost! }))
    .sort((a, b) => b.totalCost - a.totalCost)
}
