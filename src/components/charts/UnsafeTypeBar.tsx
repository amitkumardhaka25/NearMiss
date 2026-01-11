import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { groupByCount } from "../../utils/dataHelpers";

export default function UnsafeTypeBar({ data }) {
  const chartData = groupByCount(data, "unsafe_condition_or_behavior");

  return (
    <>
      <h3>Unsafe Condition vs Behavior</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#ff7f50" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

