import { useQuery } from '@tanstack/react-query'
import { fetchAvgTraceCost } from '../api/fetchAvgTraceCost'
import type { AvgTraceCost } from '../types'

interface UseAvgTraceCostOptions {
  fromTimestamp: string
  toTimestamp?: string
}

interface UseAvgTraceCostResult {
  data: AvgTraceCost[] | null
  loading: boolean
  error: string | null
}

export function useAvgTraceCost({
  fromTimestamp,
  toTimestamp,
}: UseAvgTraceCostOptions): UseAvgTraceCostResult {
  const query = useQuery({
    queryKey: ['avg-trace-cost', { fromTimestamp, toTimestamp }],
    queryFn: ({ signal }) =>
      fetchAvgTraceCost({ fromTimestamp, toTimestamp, signal }),
  })

  return {
    data: query.data ?? null,
    loading: query.isPending,
    error: query.error ? (query.error as Error).message : null,
  }
}
