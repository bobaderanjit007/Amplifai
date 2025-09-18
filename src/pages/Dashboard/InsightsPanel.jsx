import { BsStars } from "react-icons/bs";
import { IoExpand } from "react-icons/io5";
import { PiStarFourLight } from "react-icons/pi";

const InsightsPanel = () => {
  const insights = [
    {
      id: 1,
      title: "Monthly Variance Summaries",
      description: (
        <>
          <span className="text-orange-500 font-medium">
            Helix Digital Innovations
          </span>{" "}
          reported an 8% decline in profit this month, primarily driven by
          increased logistics expenses.
        </>
      ),
    },
    {
      id: 2,
      title: "Recommended Actions",
      description: (
        <>
          Reduce payroll costs in{" "}
          <span className="text-orange-500 font-medium">
            Crestview Technologies
          </span>{" "}
          by 12% to improve efficiency.
        </>
      ),
    },
    {
      id: 3,
      title: "Market Trends",
      description: (
        <>
          <span className="text-orange-500 font-medium">
            Quantum Innovations LLC
          </span>{" "}
          has seen a 15% increase in customer demand, attributed to the launch
          of their new product line.
        </>
      ),
    },
    {
      id: 4,
      title: "Future Projections",
      description: (
        <>
          Analysts predict a 10% growth in revenue for{" "}
          <span className="text-orange-500 font-medium">
            Helix Digital Innovations
          </span>{" "}
          next quarter, as new partnerships are expected to enhance market
          reach.
        </>
      ),
    },
  ];

  return (
    <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          <BsStars className="text-orange-500 mr-2" />
          Insights
        </h3>
        <button className="p-2 text-[#00a8e8] hover:text-[#0092e8]">
          <IoExpand size={16} />
        </button>
      </div>

      <div className="space-y-5">
        {insights.map((insight) => (
          <div key={insight.id} className="flex items-start space-x-3">
            <div className="mt-1">
              <PiStarFourLight className="text-orange-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-700 mb-1">
                {insight.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {insight.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsPanel;
