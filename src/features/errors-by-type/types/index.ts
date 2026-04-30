export interface MetricsRow {
  tags: string[] | null
  count_count: string | number | null
}

export interface MetricsResponse {
  data: MetricsRow[]
}

export interface ErrorsByType {
  errorType: string
  count: number
}
