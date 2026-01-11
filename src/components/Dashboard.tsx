import { useState } from "react";
import { NearMissIncident } from "../models/nearMissSchema";
import { incidents } from "../data/incidents";
import "../App.css";
import KPICards from "./charts/KPICards";
import CategoryBar from "./charts/CategoryBar";
import LocationBar from "./charts/LocationBar";
import SeverityPie from "./charts/SeverityPie";
import TrendLine from "./charts/TrendLine";
import UnsafeTypeBar from "./charts/UnsafeTypeBar";
import IncidentsTable from "./IncidentsTable";

export default function Dashboard() {
  const data: NearMissIncident[] = incidents;
  const [viewMode, setViewMode] = useState<"dashboard" | "table">("dashboard");

  if (!data?.length) return <p>No data available</p>;

  return (
    <div className={`dashboard-container ${viewMode === "table" ? "table-view" : "dashboard-view"}`}>
      <div className="dashboard-header">
        <h1>Near Miss Dashboard</h1>
        <button
          className="view-toggle-btn"
          onClick={() => setViewMode(viewMode === "dashboard" ? "table" : "dashboard")}
        >
          {viewMode === "dashboard" ? "📊 Table View" : "📈 Dashboard View"}
        </button>
      </div>

      {viewMode === "dashboard" ? (
        <div className="dashboard-content">
          <KPICards data={data} />

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
      ) : (
        <IncidentsTable data={data} />
      )}
    </div>
  );
}
