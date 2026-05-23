import { supabase } from '@/lib/supabase'
import type { AvgTraceCost } from '../types'

interface FetchOptions {
  fromTimestamp: string
  toTimestamp?: string
  signal?: AbortSignal
}

export async function fetchAvgTraceCost(opts: FetchOptions): Promise<AvgTraceCost[]> {
  let q = supabase.rpc('avg_trace_cost_by_business', {
    from_ts: opts.fromTimestamp,
    to_ts: opts.toTimestamp,
  })

  if (opts.signal) q = q.abortSignal(opts.signal)

  const { data, error } = await q
  if (error) throw new Error(error.message)

  return (data ?? []).map((r) => ({
    businessId: String(r.business_id),
    avgTraceCost: Number(r.avg_trace_cost),
  }))
}
