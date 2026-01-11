import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { NearMissIncident } from "../../models/nearMissSchema";
import { groupByMonth } from "../../utils/dataHelpers";
import { chartColorMap } from "../../utils/colors";

interface TrendLineProps {
  data: NearMissIncident[];
}

export default function TrendLine({ data }: TrendLineProps) {
  const chartData = groupByMonth(data || []);

  return (
    <>
      <h3>Near Miss Trend Over Time</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line 
            dataKey="value" 
            stroke={chartColorMap.trendLine} 
            strokeWidth={2}
            dot={{ fill: chartColorMap.trendLine }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
