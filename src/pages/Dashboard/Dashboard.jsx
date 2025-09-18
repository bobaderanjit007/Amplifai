import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import MetricsCards from "./MetricsCards"
import RevenueChart from "./RevenueChart"
import MarginChart from "./MarginChart"
import EntityTable from "./EntityTable"
import InsightsPanel from "./InsightsPanel"

/**
 * Main Dashboard page component
 */
const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header title="Dashboard" dropMenu={true} />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Metrics Cards */}
            <MetricsCards />

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Revenue Chart - Takes 2 columns */}
              <div className="lg:col-span-2">
                <RevenueChart />
              </div>

              {/* Margin Chart - Takes 1 column */}
              <div className="lg:col-span-1">
                <MarginChart />
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Entity Table - Takes 2 columns */}
              <div className="lg:col-span-2">
                <EntityTable />
              </div>

              {/* Insights Panel - Takes 1 column */}
              <div className="lg:col-span-1">
                <InsightsPanel />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
