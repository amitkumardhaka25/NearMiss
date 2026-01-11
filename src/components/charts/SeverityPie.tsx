import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { severityLabel } from "../../utils/dataHelpers";

export default function SeverityPie({ data }) {
  const map = {};
  data.forEach(d => {
    const label = severityLabel(d.severity_level);
    map[label] = (map[label] || 0) + 1;
  });
  const chartData = Object.entries(map).map(([name, value]) => ({ name, value }));

  return (
    <>
      <h3>Severity Distribution</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={chartData} dataKey="value" nameKey="name" fill="#82ca9d" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}
