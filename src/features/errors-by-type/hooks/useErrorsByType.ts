import { useQuery } from '@tanstack/react-query'
import { fetchErrorsByType } from '../api/fetchErrorsByType'
import type { ErrorsByType } from '../types'

interface UseErrorsByTypeOptions {
  fromTimestamp: string
  toTimestamp?: string
}

interface UseErrorsByTypeResult {
  data: ErrorsByType[] | null
  loading: boolean
  error: string | null
}

export function useErrorsByType({
  fromTimestamp,
  toTimestamp,
}: UseErrorsByTypeOptions): UseErrorsByTypeResult {
  const query = useQuery({
    queryKey: ['errors-by-type', { fromTimestamp, toTimestamp }],
    queryFn: ({ signal }) =>
      fetchErrorsByType({ fromTimestamp, toTimestamp, signal }),
  })

  return {
    data: query.data ?? null,
    loading: query.isPending,
    error: query.error ? (query.error as Error).message : null,
  }
}
