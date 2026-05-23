import { supabase } from '@/lib/supabase'
import type { TopConsumptionContact } from '../types'

interface FetchOptions {
  fromTimestamp: string
  toTimestamp?: string
  signal?: AbortSignal
}

export async function fetchTopConsumptionContacts(
  opts: FetchOptions,
): Promise<TopConsumptionContact[]> {
  let q = supabase.rpc('top_consumption_contacts', {
    from_ts: opts.fromTimestamp,
    to_ts: opts.toTimestamp,
  })

  if (opts.signal) q = q.abortSignal(opts.signal)

  const { data, error } = await q
  if (error) throw new Error(error.message)

  return (data ?? []).map((r) => ({
    contactId: String(r.contact_id),
    totalCost: Number(r.total_cost),
  }))
}
