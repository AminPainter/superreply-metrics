import { supabase } from '@/lib/supabase'
import type { ContactsByBusiness } from '../types'

interface FetchOptions {
  fromTimestamp: string
  toTimestamp?: string
  signal?: AbortSignal
}

export async function fetchUniqueContactsByBusiness(
  opts: FetchOptions,
): Promise<ContactsByBusiness[]> {
  let q = supabase.rpc('unique_contacts_by_business', {
    from_ts: opts.fromTimestamp,
    to_ts: opts.toTimestamp,
  })

  if (opts.signal) q = q.abortSignal(opts.signal)

  const { data, error } = await q
  if (error) throw new Error(error.message)

  return (data ?? []).map((r) => ({
    businessId: String(r.business_id),
    uniqueContacts: r.unique_contacts,
  }))
}
