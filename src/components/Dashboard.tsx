import { NearMissIncident } from "../models/nearMissSchema";
import { incidents } from "../data/incidents";
import "./Dashboard.css";
import CategoryBar from "./charts/CategoryBar";
import LocationBar from "./charts/LocationBar";
import SeverityPie from "./charts/SeverityPie";
import TrendLine from "./charts/TrendLine";
import UnsafeTypeBar from "./charts/UnsafeTypeBar";

export default function Dashboard() {
  const data: NearMissIncident[] = incidents;

  if (!data.length) return <p>No data available</p>;

  return (
    <div className="dashboard-container">
      <h1>Near Miss Dashboard</h1>

      <div className="kpi-cards">
        <div className="kpi-card">Total Near Misses: {data.length}</div>
        <div className="kpi-card">
          High Severity (3+): {data.filter(d => d?.severity_level && d?.severity_level >= 3).length}
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-wrapper">
          <div className="chart-title">Near Misses by Category</div>
          <CategoryBar data={data} />
        </div>

        <div className="chart-wrapper">
          <div className="chart-title">Severity Distribution</div>
          <SeverityPie data={data} />
        </div>

        <div className="chart-wrapper">
          <div className="chart-title">Trend Over Time</div>
          <TrendLine data={data} />
        </div>

        <div className="chart-wrapper">
          <div className="chart-title">Near Misses by Location</div>
          <LocationBar data={data} />
        </div>

        <div className="chart-wrapper">
          <div className="chart-title">Unsafe Condition vs Behavior</div>
          <UnsafeTypeBar data={data} />
        </div>
      </div>
    </div>
  );
}
