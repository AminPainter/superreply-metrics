import { useQuery } from '@tanstack/react-query'
import { fetchConsumptionPairs } from '../api/fetchConsumption'
import { aggregateUniqueContacts } from '../utils/aggregate'
import type { ContactsByBusiness } from '../types'

interface UseUniqueContactsOptions {
  fromTimestamp: string
  toTimestamp?: string
}

interface UseUniqueContactsResult {
  data: ContactsByBusiness[] | null
  loading: boolean
  error: string | null
  totalRows: number
}

export function useUniqueContacts({
  fromTimestamp,
  toTimestamp,
}: UseUniqueContactsOptions): UseUniqueContactsResult {
  const query = useQuery({
    queryKey: ['unique-contacts', { fromTimestamp, toTimestamp }],
    queryFn: async ({ signal }) => {
      const rows = await fetchConsumptionPairs({ fromTimestamp, toTimestamp, signal })
      return { rows: aggregateUniqueContacts(rows), totalRows: rows.length }
    },
  })

  return {
    data: query.data?.rows ?? null,
    loading: query.isPending,
    error: query.error ? (query.error as Error).message : null,
    totalRows: query.data?.totalRows ?? 0,
  }
}
