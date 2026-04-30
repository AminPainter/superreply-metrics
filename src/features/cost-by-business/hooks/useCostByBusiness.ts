import { useQuery } from '@tanstack/react-query'
import { fetchCostByBusiness } from '../api/fetchCostByBusiness'
import type { CostByBusiness } from '../types'

interface UseCostByBusinessOptions {
  fromTimestamp: string
  toTimestamp: string
  environment?: string
  traceName?: string
}

interface UseCostByBusinessResult {
  data: CostByBusiness[] | null
  loading: boolean
  error: string | null
}

export function useCostByBusiness({
  fromTimestamp,
  toTimestamp,
  environment,
  traceName,
}: UseCostByBusinessOptions): UseCostByBusinessResult {
  const query = useQuery({
    queryKey: ['cost-by-business', { fromTimestamp, toTimestamp, environment, traceName }],
    queryFn: ({ signal }) =>
      fetchCostByBusiness({ fromTimestamp, toTimestamp, environment, traceName, signal }),
  })

  return {
    data: query.data ?? null,
    loading: query.isPending,
    error: query.error ? (query.error as Error).message : null,
  }
}
