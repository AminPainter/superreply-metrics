import { useQueries } from '@tanstack/react-query'
import { fetchCostByBusiness } from '@/features/cost-by-business/api/fetchCostByBusiness'
import { fetchUniqueContactsByBusiness } from '@/features/unique-contacts/api/fetchConsumption'
import type { AvgCostPerContact } from '../types'

interface UseAvgCostPerContactOptions {
  fromTimestamp: string
  toTimestamp?: string
}

interface UseAvgCostPerContactResult {
  data: AvgCostPerContact[] | null
  loading: boolean
  error: string | null
}

export function useAvgCostPerContact({
  fromTimestamp,
  toTimestamp,
}: UseAvgCostPerContactOptions): UseAvgCostPerContactResult {
  const filters = { fromTimestamp, toTimestamp }

  const results = useQueries({
    queries: [
      {
        queryKey: ['unique-contacts', filters],
        queryFn: ({ signal }: { signal: AbortSignal }) =>
          fetchUniqueContactsByBusiness({ fromTimestamp, toTimestamp, signal }),
      },
      {
        queryKey: ['cost-by-business', filters],
        queryFn: ({ signal }: { signal: AbortSignal }) =>
          fetchCostByBusiness({ fromTimestamp, toTimestamp, signal }),
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

  const data: AvgCostPerContact[] = contactsQuery.data
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
