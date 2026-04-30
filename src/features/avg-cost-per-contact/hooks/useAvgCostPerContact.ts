import { useQueries } from '@tanstack/react-query'
import { fetchAllTraces } from '@/features/unique-contacts/api/fetchTraces'
import { aggregateUniqueContacts } from '@/features/unique-contacts/utils/aggregate'
import { fetchCostByBusiness } from '@/features/cost-by-business/api/fetchCostByBusiness'
import type { AvgCostPerContact } from '../types'

interface UseAvgCostPerContactOptions {
  fromTimestamp: string
  toTimestamp: string
  environment?: string
  traceName?: string
}

interface UseAvgCostPerContactResult {
  data: AvgCostPerContact[] | null
  loading: boolean
  error: string | null
}

export function useAvgCostPerContact({
  fromTimestamp,
  toTimestamp,
  environment,
  traceName,
}: UseAvgCostPerContactOptions): UseAvgCostPerContactResult {
  const filters = { fromTimestamp, toTimestamp, environment, traceName }

  const results = useQueries({
    queries: [
      {
        queryKey: ['unique-contacts', filters],
        queryFn: async ({ signal }: { signal: AbortSignal }) => {
          const traces = await fetchAllTraces({
            fromTimestamp,
            toTimestamp,
            environment,
            name: traceName,
            signal,
          })
          return { rows: aggregateUniqueContacts(traces), totalTraces: traces.length }
        },
      },
      {
        queryKey: ['cost-by-business', filters],
        queryFn: ({ signal }: { signal: AbortSignal }) =>
          fetchCostByBusiness({ fromTimestamp, toTimestamp, environment, traceName, signal }),
      },
    ],
  })

  const [contactsQuery, costQuery] = results
  const loading = results.some((r) => r.isPending)
  const errorObj = results.find((r) => r.error)?.error
  const error = errorObj ? (errorObj as Error).message : null

  if (loading || error || !contactsQuery.data || !costQuery.data) {
    return { data: null, loading, error }
  }

  const costByBusiness = new Map(costQuery.data.map((row) => [row.businessId, row.totalCost]))

  const data: AvgCostPerContact[] = contactsQuery.data.rows
    .map((row) => {
      const totalCost = costByBusiness.get(row.businessId) ?? 0
      return {
        businessId: row.businessId,
        avgCostPerContact: row.uniqueContacts > 0 ? totalCost / row.uniqueContacts : 0,
        totalCost,
        contacts: row.uniqueContacts,
      }
    })
    .filter((row) => row.avgCostPerContact > 0)
    .sort((a, b) => b.avgCostPerContact - a.avgCostPerContact)

  return { data, loading: false, error: null }
}
