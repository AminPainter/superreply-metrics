import { supabase } from '@/lib/supabase'
import type { ErrorsByType } from '../types'

interface FetchOptions {
  fromTimestamp: string
  toTimestamp?: string
  signal?: AbortSignal
}

export async function fetchErrorsByType(opts: FetchOptions): Promise<ErrorsByType[]> {
  let q = supabase.rpc('errors_by_type', {
    from_ts: opts.fromTimestamp,
    to_ts: opts.toTimestamp,
  })

  if (opts.signal) q = q.abortSignal(opts.signal)

  const { data, error } = await q
  if (error) throw new Error(error.message)

  return (data ?? []).map((r) => ({
    errorType: r.error_type,
    count: Number(r.count),
  }))
}
