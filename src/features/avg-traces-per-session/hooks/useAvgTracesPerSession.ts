import { useQuery } from '@tanstack/react-query'
import { fetchAvgTracesPerSession } from '../api/fetchAvgTracesPerSession'
import type { AvgTracesPerSession } from '../types'

interface UseAvgTracesPerSessionOptions {
  fromTimestamp: string
  toTimestamp?: string
}

interface UseAvgTracesPerSessionResult {
  data: AvgTracesPerSession[] | null
  loading: boolean
  error: string | null
}

export function useAvgTracesPerSession({
  fromTimestamp,
  toTimestamp,
}: UseAvgTracesPerSessionOptions): UseAvgTracesPerSessionResult {
  const query = useQuery({
    queryKey: ['avg-traces-per-session', { fromTimestamp, toTimestamp }],
    queryFn: ({ signal }) =>
      fetchAvgTracesPerSession({ fromTimestamp, toTimestamp, signal }),
  })

  return {
    data: query.data ?? null,
    loading: query.isPending,
    error: query.error ? (query.error as Error).message : null,
  }
}
