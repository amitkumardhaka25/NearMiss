import { NearMissIncident } from "../models/nearMissSchema";

interface KPICardsProps {
  data: NearMissIncident[];
}

export default function KPICards({ data }: KPICardsProps) {
  const total = data?.length || 0;
  const highSeverity = data?.filter(d => d?.severity_level && d.severity_level >= 3).length || 0;

  return (
    <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
      <div style={{ padding: 10, border: "1px solid #ccc", borderRadius: 8 }}>Total Near Misses: {total}</div>
      <div style={{ padding: 10, border: "1px solid #ccc", borderRadius: 8 }}>High Severity (3+): {highSeverity}</div>
    </div>
  );
}

