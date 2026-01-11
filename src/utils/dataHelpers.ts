import { NearMissIncident } from "../models/nearMissSchema";

interface ChartDataPoint {
  name: string;
  value: number;
}

export const groupByCount = (
  data: NearMissIncident[], 
  key: keyof NearMissIncident
): ChartDataPoint[] => {
  const map: Record<string, number> = {};
  data.forEach((item: NearMissIncident) => {
    const value = (item[key] as string | undefined) || "Unknown";
    map[value] = (map[value] || 0) + 1;
  });
  return Object.entries(map).map(([name, value]) => ({ name, value }));
};

export const groupByMonth = (data: NearMissIncident[]): ChartDataPoint[] => {
  const map: Record<string, number> = {};
  data.forEach((item: NearMissIncident) => {
    if (!item.month || !item.year) return;
    const label = `${item.year}-${String(item.month).padStart(2, "0")}`;
    map[label] = (map[label] || 0) + 1;
  });
  return Object.entries(map)
    .sort()
    .map(([name, value]) => ({ name, value }));
};

export const severityLabel = (level: number | undefined): string => {
  const labels: Record<number, string> = {
    1: "Low",
    2: "Medium",
    3: "High",
    4: "Critical"
  };
  return (level !== undefined && level !== null && labels[level]) ? labels[level] : "Unknown";
};
