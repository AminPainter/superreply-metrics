export interface MetricsRow {
  userId: string | null
  sum_totalCost: number | null
}

export interface MetricsResponse {
  data: MetricsRow[]
}

export interface CostByBusiness {
  businessId: string
  totalCost: number
}
