import { useQuery } from '@tanstack/react-query'
import { fetchUniqueContactsByBusiness } from '../api/fetchConsumption'
import type { ContactsByBusiness } from '../types'

interface UseUniqueContactsOptions {
  fromTimestamp: string
  toTimestamp?: string
}

interface UseUniqueContactsResult {
  data: ContactsByBusiness[] | null
  loading: boolean
  error: string | null
}

export function useUniqueContacts({
  fromTimestamp,
  toTimestamp,
}: UseUniqueContactsOptions): UseUniqueContactsResult {
  const query = useQuery({
    queryKey: ['unique-contacts', { fromTimestamp, toTimestamp }],
    queryFn: ({ signal }) =>
      fetchUniqueContactsByBusiness({ fromTimestamp, toTimestamp, signal }),
  })

  return {
    data: query.data ?? null,
    loading: query.isPending,
    error: query.error ? (query.error as Error).message : null,
  }
}
