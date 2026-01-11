import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { severityLabel } from "../../utils/dataHelpers";
import { getSeverityColor, severityColors } from "../../utils/colors";

export default function SeverityPie({ data }: { data: any[] }) {
  const map: Record<string, number> = {};
  data.forEach(d => {
    const label = severityLabel(d.severity_level);
    map[label] = (map[label] || 0) + 1;
  });
  const chartData = Object.entries(map).map(([name, value]) => ({ name, value }));

  // Map severity labels to colors
  const getColorForLabel = (label: string): string => {
    if (label === "Low") return severityColors.low;
    if (label === "Medium") return severityColors.medium;
    if (label === "High") return severityColors.high;
    if (label === "Critical") return severityColors.critical;
    return severityColors.unknown;
  };

  return (
    <>
      <h3>Severity Distribution</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie 
            data={chartData} 
            dataKey="value" 
            nameKey="name" 
            cx="50%" 
            cy="50%" 
            outerRadius={80}
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColorForLabel(entry.name)} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}
