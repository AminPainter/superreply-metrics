import { useQuery } from '@tanstack/react-query'
import { fetchAllTraces } from '../api/fetchTraces'
import { aggregateUniqueContacts } from '../utils/aggregate'
import type { ContactsByBusiness } from '../types'

interface UseUniqueContactsOptions {
  fromTimestamp: string
  toTimestamp?: string
  environment?: string
  traceName?: string
}

interface UseUniqueContactsResult {
  data: ContactsByBusiness[] | null
  loading: boolean
  error: string | null
  totalTraces: number
}

export function useUniqueContacts({
  fromTimestamp,
  toTimestamp,
  environment,
  traceName,
}: UseUniqueContactsOptions): UseUniqueContactsResult {
  const query = useQuery({
    queryKey: ['unique-contacts', { fromTimestamp, toTimestamp, environment, traceName }],
    queryFn: async ({ signal }) => {
      const traces = await fetchAllTraces({
        fromTimestamp,
        toTimestamp,
        environment,
        name: traceName,
        signal,
      })
      return { rows: aggregateUniqueContacts(traces), totalTraces: traces.length }
    },
  })

  return {
    data: query.data?.rows ?? null,
    loading: query.isPending,
    error: query.error ? (query.error as Error).message : null,
    totalTraces: query.data?.totalTraces ?? 0,
  }
}
