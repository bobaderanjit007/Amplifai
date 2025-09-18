import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import Card from "../../ui/Card"
import { IoExpand } from "react-icons/io5"
import { marginData } from "../../data/dummyData"
import { FaChartBar } from "react-icons/fa";

/**
 * Margin Trends bar chart component
 */
const MarginChart = () => {
  return (
    <Card className="p-6 rounded-[8px]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <FaChartBar className="mr-2" />
            Margin Trends
          </h3>
          <p className="text-sm text-gray-500 mt-1">(Last 6 Months)</p>
        </div>
        <button className="p-2 text-[#00a8e8] hover:text-[#0092e8]">
          <IoExpand size={16} />
        </button>
      </div>

      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={marginData} barSize={4}  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              tickFormatter={(value) => `${value}M`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
              formatter={(value, name) => [
                `${value}M`,
                name === "revenue" ? "Revenue" : name === "opEx" ? "Op Ex" : "COGS",
              ]}
            />
            <Legend wrapperStyle={{ paddingTop: "20px", fontSize:12 }} />
            <Bar dataKey="revenue" fill="#3b82f6" name="Revenue" radius={[2, 2, 0, 0]} />
            <Bar dataKey="opEx" fill="#8b5cf6" name="Operating Expenses" radius={[2, 2, 0, 0]} />
            <Bar dataKey="cogs" fill="#f59e0b" name="COGS" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

export default MarginChart
