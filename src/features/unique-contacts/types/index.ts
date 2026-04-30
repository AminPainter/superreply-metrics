export interface LangfuseTrace {
  id: string
  name: string | null
  timestamp: string
  environment: string
  userId: string | null
  sessionId: string | null
}

export interface TracesListResponse {
  data: LangfuseTrace[]
  meta: {
    page: number
    limit: number
    totalItems: number
    totalPages: number
  }
}

export interface ContactsByBusiness {
  businessId: string
  uniqueContacts: number
}
