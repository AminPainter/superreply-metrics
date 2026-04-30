export interface MetricsRow {
  userId: string | null
  avg_totalCost: number | null
}

export interface MetricsResponse {
  data: MetricsRow[]
}

export interface AvgTraceCost {
  businessId: string
  avgTraceCost: number
}
