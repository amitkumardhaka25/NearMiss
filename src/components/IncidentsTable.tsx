import { useState } from "react";
import { NearMissIncident } from "../models/nearMissSchema";
import { severityLabel } from "../utils/dataHelpers";
import "./IncidentsTable.css";

interface IncidentsTableProps {
  data: NearMissIncident[];
}

export default function IncidentsTable({ data }: IncidentsTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const safeData = data || [];
  const totalPages = Math.ceil(safeData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = safeData.slice(startIndex, endIndex);

  const formatDate = (timestamp: number | undefined): string => {
    if (!timestamp) return "N/A";
    return new Date(timestamp).toLocaleDateString();
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Near Miss Incidents</h2>
        <div className="table-info">
          Showing {startIndex + 1}-{Math.min(endIndex, safeData.length)} of {safeData.length}
        </div>
      </div>

      <div className="table-wrapper">
        <table className="incidents-table">
          <thead>
            <tr>
              <th>Incident Number</th>
              <th>Date</th>
              <th>Primary Category</th>
              <th>Location</th>
              <th>Region</th>
              <th>Severity</th>
              <th>Unsafe Type</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((incident) => (
              <tr key={incident?.id || `incident-${Math.random()}`}>
                <td>{incident?.incident_number || "N/A"}</td>
                <td>{formatDate(incident?.incident_date)}</td>
                <td>{incident?.primary_category || "N/A"}</td>
                <td>{incident?.location || "N/A"}</td>
                <td>{incident?.region || "N/A"}</td>
                <td>
                  <span className={`severity-badge severity-${severityLabel(incident?.severity_level).toLowerCase()}`}>
                    {severityLabel(incident?.severity_level)}
                  </span>
                </td>
                <td>{incident?.unsafe_condition_or_behavior || "N/A"}</td>
                <td>{incident?.job || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="pagination-btn"
        >
          Previous
        </button>
        
        <div className="page-numbers">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
            // Show first page, last page, current page, and pages around current
            if (
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
            ) {
              return (
                <button
                  key={page}
                  onClick={() => handlePageClick(page)}
                  className={`pagination-btn page-number ${
                    currentPage === page ? "active" : ""
                  }`}
                >
                  {page}
                </button>
              );
            } else if (page === currentPage - 2 || page === currentPage + 2) {
              return <span key={page} className="ellipsis">...</span>;
            }
            return null;
          })}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="pagination-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
}
