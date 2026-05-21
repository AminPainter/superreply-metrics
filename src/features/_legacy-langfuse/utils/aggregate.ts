import type { ContactsByBusiness, LangfuseTrace } from '../types'

export function aggregateUniqueContacts(traces: LangfuseTrace[]): ContactsByBusiness[] {
  const sessionsByUser = new Map<string, Set<string>>()

  for (const t of traces) {
    if (!t.userId || !t.sessionId) continue
    if (!sessionsByUser.has(t.userId)) sessionsByUser.set(t.userId, new Set())
    sessionsByUser.get(t.userId)!.add(t.sessionId)
  }

  return Array.from(sessionsByUser.entries())
    .map(([businessId, sessions]) => ({ businessId, uniqueContacts: sessions.size }))
    .sort((a, b) => b.uniqueContacts - a.uniqueContacts)
}
