import Card from "../../ui/Card"
import { IoExpand, IoTrendingDown, IoTrendingUp, IoFlash } from "react-icons/io5";
import { BsStars } from "react-icons/bs";

/**
 * Insights panel component with business insights and recommendations
 */
const InsightsPanel = () => {
  const insights = [
    {
      id: 1,
      type: "warning",
      icon: IoTrendingDown,
      title: "Monthly Variance Summaries",
      description:
        "Helix Digital Innovations reported an 8% decline in profit this month, primarily driven by increased logistics expenses.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      id: 2,
      type: "recommendation",
      icon: IoFlash,
      title: "Recommended Actions",
      description: "Reduce payroll costs in Innovative Technologies by 12% to improve efficiency.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 3,
      type: "trend",
      icon: IoTrendingUp,
      title: "Market Trends",
      description:
        "Quantum Innovations LLC has seen a 15% increase in customer demand, attributed to the launch of their new product line.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: 4,
      type: "projection",
      icon: IoTrendingUp,
      title: "Future Projections",
      description:
        "Analysts predict a 10% growth in revenue for Helix Digital Innovations next quarter, as new partnerships are expected to enhance market reach.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <Card className="p-6 rounded-[7px]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <BsStars className="mr-2" />
          Insights
        </h3>
        <button className="p-2 text-[#00a8e8] hover:text-[#0092e8]">
          <IoExpand size={16} />
        </button>
      </div>

      <div className="space-y-4">
        {insights.map((insight) => {
          const IconComponent = insight.icon
          return (
            <div key={insight.id} className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${insight.bgColor}`}>
                  <IconComponent className={`${insight.color}`} size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">{insight.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{insight.description}</p>
                </div>
              </div>
              {insight.id < insights.length && <div className="border-b border-gray-100"></div>}
            </div>
          )
        })}
      </div>
    </Card>
  )
}

export default InsightsPanel
