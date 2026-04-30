import { useQuery } from '@tanstack/react-query'
import { fetchErrorsByType } from '../api/fetchErrorsByType'
import type { ErrorsByType } from '../types'

interface UseErrorsByTypeOptions {
  fromTimestamp: string
  toTimestamp: string
  environment?: string
}

interface UseErrorsByTypeResult {
  data: ErrorsByType[] | null
  loading: boolean
  error: string | null
}

export function useErrorsByType({
  fromTimestamp,
  toTimestamp,
  environment,
}: UseErrorsByTypeOptions): UseErrorsByTypeResult {
  const query = useQuery({
    queryKey: ['errors-by-type', { fromTimestamp, toTimestamp, environment }],
    queryFn: ({ signal }) =>
      fetchErrorsByType({ fromTimestamp, toTimestamp, environment, signal }),
  })

  return {
    data: query.data ?? null,
    loading: query.isPending,
    error: query.error ? (query.error as Error).message : null,
  }
}
