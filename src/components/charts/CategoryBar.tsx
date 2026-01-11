import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { NearMissIncident } from "../../models/nearMissSchema";
import { chartColorMap } from "../../utils/colors";
import { groupByCount } from "../../utils/dataHelpers";

interface CategoryBarProps {
  data: NearMissIncident[];
  onOpenModal?: (incidents: NearMissIncident[], title: string) => void;
}

export default function CategoryBar({ data, onOpenModal }: CategoryBarProps) {
  const safeData = data || [];
  const chartData = groupByCount(safeData, "primary_category");

  const handleBarClick = (categoryName: string) => {

    const filteredIncidents = safeData?.filter(
      (incident) => incident?.primary_category?.toLowerCase() === categoryName?.toLowerCase()
       || incident?.primary_category?.length === 0
    );

    if (filteredIncidents?.length > 0) {
      onOpenModal?.(filteredIncidents, `Incidents: ${categoryName}`);
    }
  };

  return (
    <>
      <h3>Near Misses by Category</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar 
            dataKey="value" 
            fill={chartColorMap.categoryBar}
            onClick={(data: any) => {
              if (data && data?.name) {
                handleBarClick(data.name);
              }
            }}
            style={{ cursor: onOpenModal ? 'pointer' : 'default' }}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
