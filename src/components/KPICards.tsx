export default function KPICards({ data }) {
  const total = data.length;
  const highSeverity = data.filter(d => d.severity_level >= 3).length;

  return (
    <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
      <div style={{ padding: 10, border: "1px solid #ccc", borderRadius: 8 }}>Total Near Misses: {total}</div>
      <div style={{ padding: 10, border: "1px solid #ccc", borderRadius: 8 }}>High Severity (3+): {highSeverity}</div>
    </div>
  );
}

