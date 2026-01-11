import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { groupByMonth } from "../../utils/dataHelpers";

export default function TrendLine({ data }) {
  const chartData = groupByMonth(data);

  return (
    <>
      <h3>Near Miss Trend Over Time</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
