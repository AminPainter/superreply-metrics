import { supabase } from '@/lib/supabase'
import type { CostByBusiness } from '../types'

interface FetchOptions {
  fromTimestamp: string
  toTimestamp?: string
  signal?: AbortSignal
}

export async function fetchCostByBusiness(opts: FetchOptions): Promise<CostByBusiness[]> {
  let q = supabase.rpc('cost_by_business', {
    from_ts: opts.fromTimestamp,
    to_ts: opts.toTimestamp,
  })

  if (opts.signal) q = q.abortSignal(opts.signal)

  const { data, error } = await q
  if (error) throw new Error(error.message)

  return (data ?? []).map((r) => ({
    businessId: String(r.business_id),
    totalCost: Number(r.total_cost),
  }))
}
