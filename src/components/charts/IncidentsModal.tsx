import { NearMissIncident } from "../../models/nearMissSchema";
import IncidentsTable from "../IncidentsTable";
import "../App.css";

interface IncidentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  incidents: NearMissIncident[];
  title?: string;
}

export default function IncidentsModal({ 
  isOpen, 
  onClose, 
  incidents, 
  title = "Near Miss Incidents" 
}: IncidentsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <IncidentsTable data={incidents} />
        </div>
      </div>
    </div>
  );
}
