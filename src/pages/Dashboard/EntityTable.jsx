import Card from "../../ui/Card"
import { IoTrendingUp, IoTrendingDown, IoExpand } from "react-icons/io5"
import { entityData } from "../../data/dummyData"
import { FaList } from "react-icons/fa6";

/**
 * Entity-wise Performance table component
 */
const EntityTable = () => {
  return (
    <Card className="p-6 rounded-[8px]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
         <FaList className="mr-2" />
          Entity-wise Performance
        </h3>
        <button className="p-2 text-[#00a8e8] hover:text-[#0092e8]">
          <IoExpand size={16} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-600 text-xs">Company Name</th>
              <th className="text-right py-3 px-4 font-medium text-gray-600 text-xs">Revenue</th>
              <th className="text-right py-3 px-4 font-medium text-gray-600 text-xs">Net Profit</th>
              <th className="text-right py-3 px-4 font-medium text-gray-600 text-xs">EBITDA</th>
              <th className="text-right py-3 px-4 font-medium text-gray-600 text-xs">Cash Flow(€M)</th>
              <th className="text-right py-3 px-4 font-medium text-gray-600 text-xs">WC Cycle (Days)</th>
            </tr>
          </thead>
          <tbody>
            {entityData.map((entity) => (
              <tr key={entity.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-600 text-xs font-bold">{entity.name.charAt(0)}</span>
                    </div>
                    <span className="font-medium text-gray-900 text-sm">{entity.name}</span>
                  </div>
                </td>
                <td className="text-right py-3 px-4 text-sm font-medium text-gray-900">{entity.revenue}</td>
                <td className="text-right py-3 px-4 text-sm font-medium text-gray-900">{entity.netProfit}</td>
                <td className="text-right py-3 px-4">
                  <div className="flex items-center justify-end space-x-2">
                    <span className={`text-sm font-medium ${entity.positive ? "text-green-600" : "text-red-600"}`}>
                      {entity.change}
                    </span>
                    {entity.positive ? (
                      <IoTrendingUp className="text-green-600" size={14} />
                    ) : (
                      <IoTrendingDown className="text-red-600" size={14} />
                    )}
                  </div>
                </td>
                <td className="text-right py-3 px-4 text-sm font-medium text-gray-900">{entity.ebitda}</td>
                <td className="text-right py-3 px-4 text-sm font-medium text-gray-900">{entity.cashFlow}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default EntityTable
