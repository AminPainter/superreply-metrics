import { DateRangeProvider, GlobalFiltersBar } from './features/global-filters';
import { UniqueContactsView } from './features/unique-contacts';
import { CostByBusinessView } from './features/cost-by-business';
import { AvgCostPerContactView } from './features/avg-cost-per-contact';
import { AvgTraceCostView } from './features/avg-trace-cost';
import { AvgTracesPerSessionView } from './features/avg-traces-per-session';
import { TopConsumptionContactsView } from './features/top-consumption-contacts';
import { ErrorsByTypeView } from './features/errors-by-type';
import './App.css';

function App() {
  return (
    <DateRangeProvider>
      <div className='app'>
        <GlobalFiltersBar />
        <UniqueContactsView />
        <CostByBusinessView />
        <AvgCostPerContactView />
        <AvgTraceCostView />
        <AvgTracesPerSessionView />
        <TopConsumptionContactsView />
        <ErrorsByTypeView />
      </div>
    </DateRangeProvider>
  );
}

export default App;
