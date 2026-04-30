export interface MetricsRow {
  sessionId: string | null
  sum_totalCost: number | null
}

export interface MetricsResponse {
  data: MetricsRow[]
}

export interface TopConsumptionContact {
  sessionId: string
  totalCost: number
}
