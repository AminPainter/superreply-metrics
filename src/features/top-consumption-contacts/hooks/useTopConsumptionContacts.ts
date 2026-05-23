import { useQuery } from '@tanstack/react-query'
import { fetchTopConsumptionContacts } from '../api/fetchTopConsumptionContacts'
import type { TopConsumptionContact } from '../types'

interface UseTopConsumptionContactsOptions {
  fromTimestamp: string
  toTimestamp?: string
}

interface UseTopConsumptionContactsResult {
  data: TopConsumptionContact[] | null
  loading: boolean
  error: string | null
}

export function useTopConsumptionContacts({
  fromTimestamp,
  toTimestamp,
}: UseTopConsumptionContactsOptions): UseTopConsumptionContactsResult {
  const query = useQuery({
    queryKey: ['top-consumption-contacts', { fromTimestamp, toTimestamp }],
    queryFn: ({ signal }) =>
      fetchTopConsumptionContacts({ fromTimestamp, toTimestamp, signal }),
  })

  return {
    data: query.data ?? null,
    loading: query.isPending,
    error: query.error ? (query.error as Error).message : null,
  }
}
