import { supabase } from '@/lib/supabase'
import type { AvgTracesPerSession } from '../types'

interface FetchOptions {
  fromTimestamp: string
  toTimestamp?: string
  signal?: AbortSignal
}

export async function fetchAvgTracesPerSession(
  opts: FetchOptions,
): Promise<AvgTracesPerSession[]> {
  let q = supabase.rpc('avg_traces_per_session_by_business', {
    from_ts: opts.fromTimestamp,
    to_ts: opts.toTimestamp,
  })

  if (opts.signal) q = q.abortSignal(opts.signal)

  const { data, error } = await q
  if (error) throw new Error(error.message)

  return (data ?? []).map((r) => ({
    businessId: String(r.business_id),
    avgTracesPerSession: Number(r.avg_traces_per_session),
    traces: Number(r.traces),
    sessions: Number(r.sessions),
  }))
}
