import Card from "../../ui/Card"
import { IoTrendingUp, IoTrendingDown } from "react-icons/io5"
import { dashboardMetrics } from "../../data/dummyData"

/**
 * Metrics cards component displaying key business metrics
 */
const MetricsCards = () => {
  const metrics = [
    {
      title: "Consolidated Revenue",
      value: dashboardMetrics.consolidatedRevenue.value,
      change: dashboardMetrics.consolidatedRevenue.change,
      positive: dashboardMetrics.consolidatedRevenue.positive,
    },
    {
      title: "Net Profit",
      value: dashboardMetrics.netProfit.value,
      change: dashboardMetrics.netProfit.change,
      positive: dashboardMetrics.netProfit.positive,
    },
    {
      title: "EBITDA Margin",
      value: dashboardMetrics.ebitdaMargin.value,
      change: dashboardMetrics.ebitdaMargin.change,
      positive: dashboardMetrics.ebitdaMargin.positive,
    },
    {
      title: "Working Capital",
      value: dashboardMetrics.workingCapital.value,
      change: dashboardMetrics.workingCapital.change,
      positive: dashboardMetrics.workingCapital.positive,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index} className="p-6 rounded-[7px]">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-600">{metric.title}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-2xl font-bold text-gray-900">{metric.value}</h3>
              <div
                className={`flex items-center space-x-1 text-sm font-medium ${
                  metric.positive ? "text-green-600" : "text-red-600"
                }`}
              >
                {metric.positive ? <IoTrendingUp size={16} /> : <IoTrendingDown size={16} />}
                <span>{metric.change}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default MetricsCards
