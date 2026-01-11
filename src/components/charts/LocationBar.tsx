import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { NearMissIncident } from "../../models/nearMissSchema";
import { chartColorMap } from "../../utils/colors";
import { groupByCount } from "../../utils/dataHelpers";

interface LocationBarProps {
  data: NearMissIncident[];
}

export default function LocationBar({ data }: LocationBarProps) {
  const chartData = groupByCount(data || [], "location");

  return (
    <>
      <h3>Near Misses by Location</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill={chartColorMap.locationBar} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
