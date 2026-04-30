import { useQuery } from '@tanstack/react-query'
import { fetchAllTraces } from '@/features/unique-contacts/api/fetchTraces'
import { aggregateAvgTracesPerSession } from '../utils/aggregate'
import type { AvgTracesPerSession } from '../types'

interface UseAvgTracesPerSessionOptions {
  fromTimestamp: string
  toTimestamp?: string
  environment?: string
  traceName?: string
}

interface UseAvgTracesPerSessionResult {
  data: AvgTracesPerSession[] | null
  loading: boolean
  error: string | null
}

export function useAvgTracesPerSession({
  fromTimestamp,
  toTimestamp,
  environment,
  traceName,
}: UseAvgTracesPerSessionOptions): UseAvgTracesPerSessionResult {
  const query = useQuery({
    queryKey: ['avg-traces-per-session', { fromTimestamp, toTimestamp, environment, traceName }],
    queryFn: async ({ signal }) => {
      const traces = await fetchAllTraces({
        fromTimestamp,
        toTimestamp,
        environment,
        name: traceName,
        signal,
      })
      return aggregateAvgTracesPerSession(traces)
    },
  })

  return {
    data: query.data ?? null,
    loading: query.isPending,
    error: query.error ? (query.error as Error).message : null,
  }
}
