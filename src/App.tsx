import { UniqueContactsView } from './features/unique-contacts'
import { CostByBusinessView } from './features/cost-by-business'
import { AvgCostPerContactView } from './features/avg-cost-per-contact'
import { AvgTraceCostView } from './features/avg-trace-cost'
import { AvgTracesPerSessionView } from './features/avg-traces-per-session'
import { TopConsumptionContactsView } from './features/top-consumption-contacts'
import { ErrorsByTypeView } from './features/errors-by-type'
import './App.css'

function App() {
  return (
    <div className="app">
      <UniqueContactsView />
      <CostByBusinessView />
      <AvgCostPerContactView />
      <AvgTraceCostView />
      <AvgTracesPerSessionView />
      <TopConsumptionContactsView />
      <ErrorsByTypeView />
    </div>
  )
}

export default App
