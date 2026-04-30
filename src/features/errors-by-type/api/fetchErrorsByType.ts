import type { ErrorsByType, MetricsResponse } from '../types'

interface FetchOptions {
  fromTimestamp: string
  toTimestamp: string
  environment?: string
  signal?: AbortSignal
}

const ERROR_TAG_PREFIX = 'error:'

export async function fetchErrorsByType(opts: FetchOptions): Promise<ErrorsByType[]> {
  const filters: Array<Record<string, unknown>> = []
  if (opts.environment) {
    filters.push({ column: 'environment', operator: '=', value: opts.environment, type: 'string' })
  }

  const query = {
    view: 'traces',
    metrics: [{ measure: 'count', aggregation: 'count' }],
    dimensions: [{ field: 'tags' }],
    filters,
    fromTimestamp: opts.fromTimestamp,
    toTimestamp: opts.toTimestamp,
  }

  const params = new URLSearchParams({ query: JSON.stringify(query) })
  const res = await fetch(`/api/langfuse/public/metrics?${params}`, { signal: opts.signal })
  if (!res.ok) {
    throw new Error(`Langfuse ${res.status}: ${await res.text()}`)
  }
  const body = (await res.json()) as MetricsResponse

  const counts = new Map<string, number>()
  for (const row of body.data) {
    const n = Number(row.count_count ?? 0)
    if (!n || !row.tags) continue
    for (const tag of row.tags) {
      if (!tag.startsWith(ERROR_TAG_PREFIX)) continue
      const key = tag.slice(ERROR_TAG_PREFIX.length) || 'unknown'
      counts.set(key, (counts.get(key) ?? 0) + n)
    }
  }

  return Array.from(counts, ([errorType, count]) => ({ errorType, count })).sort(
    (a, b) => b.count - a.count,
  )
}
