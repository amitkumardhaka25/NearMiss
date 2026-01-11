import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { NearMissIncident } from "../../models/nearMissSchema";
import { groupByCount } from "../../utils/dataHelpers";
import { chartColorMap } from "../../utils/colors";

interface UnsafeTypeBarProps {
  data: NearMissIncident[];
}

export default function UnsafeTypeBar({ data }: UnsafeTypeBarProps) {
  const chartData = groupByCount(data || [], "unsafe_condition_or_behavior");

  return (
    <>
      <h3>Unsafe Condition vs Behavior</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill={chartColorMap.unsafeTypeBar} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

