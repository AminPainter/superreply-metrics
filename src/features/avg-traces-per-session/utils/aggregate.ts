import type { LangfuseTrace } from '@/features/_legacy-langfuse/types'
import type { AvgTracesPerSession } from '../types'

export function aggregateAvgTracesPerSession(traces: LangfuseTrace[]): AvgTracesPerSession[] {
  const tracesByUser = new Map<string, number>()
  const sessionsByUser = new Map<string, Set<string>>()

  for (const t of traces) {
    if (!t.userId || !t.sessionId) continue
    tracesByUser.set(t.userId, (tracesByUser.get(t.userId) ?? 0) + 1)
    if (!sessionsByUser.has(t.userId)) sessionsByUser.set(t.userId, new Set())
    sessionsByUser.get(t.userId)!.add(t.sessionId)
  }

  return Array.from(tracesByUser.entries())
    .map(([businessId, traceCount]) => {
      const sessionCount = sessionsByUser.get(businessId)?.size ?? 0
      return {
        businessId,
        avgTracesPerSession: sessionCount > 0 ? traceCount / sessionCount : 0,
        traces: traceCount,
        sessions: sessionCount,
      }
    })
    .sort((a, b) => b.avgTracesPerSession - a.avgTracesPerSession)
}
