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
import IncidentsModal from "./charts/IncidentsModal";

export default function Dashboard() {
  const data: NearMissIncident[] = incidents;
  const [viewMode, setViewMode] = useState<"dashboard" | "table">("dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIncidents, setModalIncidents] = useState<NearMissIncident[]>([]);
  const [modalTitle, setModalTitle] = useState<string>("Near Miss Incidents");

  const openModal = (incidents: NearMissIncident[], title: string = "Near Miss Incidents") => {
    console.log("Opening modal with incidents:", incidents);
    setModalIncidents(incidents);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalIncidents([]);
  };

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
          <KPICards data={data} onCardClick={openModal} />

          <div className="charts-grid">
            <div className="chart-wrapper">
              <CategoryBar data={data} onOpenModal={openModal} />
            </div>

            <div className="chart-wrapper">
              <SeverityPie data={data} />
            </div>

            <div className="chart-wrapper">
              <TrendLine data={data} />
            </div>

            <div className="chart-wrapper">
              <LocationBar data={data} />
            </div>

            <div className="chart-wrapper">
              <UnsafeTypeBar data={data} />
            </div>
          </div>
        </div>
      ) : (
        <IncidentsTable data={data} />
      )}

      <IncidentsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        incidents={modalIncidents}
        title={modalTitle}
      />
    </div>
  );
}
