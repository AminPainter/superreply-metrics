import { supabase } from '@/lib/supabase'
import type { ConsumptionRow } from '../types'

interface FetchOptions {
  fromTimestamp: string
  toTimestamp?: string
  signal?: AbortSignal
}

const PAGE_SIZE = 1000

export async function fetchConsumptionPairs(opts: FetchOptions): Promise<ConsumptionRow[]> {
  const rows: ConsumptionRow[] = []
  let from = 0

  while (true) {
    let q = supabase
      .from('open_ai_consumption')
      .select('business_id, contact_id')
      .not('business_id', 'is', null)
      .not('contact_id', 'is', null)
      .gte('created_at', opts.fromTimestamp)
      .order('id', { ascending: true })
      .range(from, from + PAGE_SIZE - 1)

    if (opts.toTimestamp) q = q.lte('created_at', opts.toTimestamp)
    if (opts.signal) q = q.abortSignal(opts.signal)

    const { data, error } = await q
    if (error) throw new Error(error.message)
    if (!data || data.length === 0) break

    for (const r of data) {
      if (r.business_id != null && r.contact_id != null) {
        rows.push({ business_id: r.business_id, contact_id: r.contact_id })
      }
    }

    if (data.length < PAGE_SIZE) break
    from += PAGE_SIZE
  }

  return rows
}
