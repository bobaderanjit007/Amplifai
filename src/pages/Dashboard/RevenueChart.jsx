import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Card from "../../ui/Card";
import { IoExpand } from "react-icons/io5";
import { revenueData } from "../../data/dummyData";
import { FaChartLine } from "react-icons/fa6";

/**
 * Revenue and Profit Trend chart component
 */
const RevenueChart = () => {
  return (
    <Card className="p-6 rounded-[7px]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <FaChartLine className="mr-2" />
            Revenue & Profit Trend
          </h3>
          <p className="text-sm text-gray-500 mt-1">(€)</p>
        </div>
        <button className="p-2 text-[#00a8e8] hover:text-[#0092e8]">
          <IoExpand size={16} />
        </button>
      </div>

      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={revenueData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
            />
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
                `€${value}M`,
                name === "revenue" ? "Revenue" : "Profit Trend",
              ]}
            />
            <Legend
              wrapperStyle={{ paddingTop: 20, fontSize: "12px" }}
              iconType="line"
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
              name="Revenue"
              tick={{ fontSize: 4, fill: "#6b7280" }}
            />
            <Line
              type="monotone"
              dataKey="profit"
              stroke="#ef4444"
              strokeWidth={2}
              dot={{ fill: "#ef4444", strokeWidth: 2, r: 4 }}
              name="Profit Trend"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default RevenueChart;
