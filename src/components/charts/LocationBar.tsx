import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { groupByCount } from "../../utils/dataHelpers";

export default function LocationBar({ data }) {
  const chartData = groupByCount(data, "location");

  return (
    <>
      <h3>Near Misses by Location</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
