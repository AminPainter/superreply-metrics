import type { LangfuseTrace, TracesListResponse } from '../types'

interface FetchOptions {
  environment?: string
  name?: string
  fromTimestamp: string
  toTimestamp?: string
  signal?: AbortSignal
}

const PAGE_SIZE = 100

export async function fetchAllTraces(opts: FetchOptions): Promise<LangfuseTrace[]> {
  const traces: LangfuseTrace[] = []
  let page = 1

  while (true) {
    const params = new URLSearchParams({
      fields: 'core',
      limit: String(PAGE_SIZE),
      page: String(page),
      fromTimestamp: opts.fromTimestamp,
    })
    if (opts.toTimestamp) params.set('toTimestamp', opts.toTimestamp)
    if (opts.environment) params.append('environment', opts.environment)
    if (opts.name) params.set('name', opts.name)

    const res = await fetch(`/api/langfuse/public/traces?${params}`, { signal: opts.signal })
    if (!res.ok) {
      throw new Error(`Langfuse ${res.status}: ${await res.text()}`)
    }
    const body = (await res.json()) as TracesListResponse

    traces.push(...body.data)
    if (page >= body.meta.totalPages || body.data.length === 0) break
    page += 1
  }

  return traces
}
