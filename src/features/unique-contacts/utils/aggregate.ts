import type { ConsumptionRow, ContactsByBusiness } from '../types'

export function aggregateUniqueContacts(rows: ConsumptionRow[]): ContactsByBusiness[] {
  const contactsByBusiness = new Map<number, Set<number>>()

  for (const r of rows) {
    if (!contactsByBusiness.has(r.business_id)) {
      contactsByBusiness.set(r.business_id, new Set())
    }
    contactsByBusiness.get(r.business_id)!.add(r.contact_id)
  }

  return Array.from(contactsByBusiness.entries())
    .map(([businessId, contacts]) => ({
      businessId: String(businessId),
      uniqueContacts: contacts.size,
    }))
    .sort((a, b) => b.uniqueContacts - a.uniqueContacts)
}
