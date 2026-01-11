import { NearMissIncident } from "../../models/nearMissSchema";
import "./KPICards.css";

interface KPICardsProps {
  data: NearMissIncident[];
}

export default function KPICards({ data }: KPICardsProps) {
  const safeData = data || [];
  
  // Calculate KPIs
  const total = safeData.length;
  const highSeverity = safeData.filter(d => d?.severity_level && d.severity_level >= 3).length;
  const highRiskIncidents = safeData.filter(d => d?.is_lcv === true).length;
  const criticalSeverity = safeData.filter(d => d?.severity_level === 4).length;
  
  // Get current month and year for "This Month" calculation
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1; // getMonth() returns 0-11
  
  const thisMonthIncidents = safeData.filter(d => {
    if (!d?.incident_date) return false;
    const incidentDate = new Date(d.incident_date);
    return incidentDate.getFullYear() === currentYear && 
           incidentDate.getMonth() + 1 === currentMonth;
  }).length;

  return (
    <div className="kpi-cards">
      <div className="kpi-card">
        <div className="kpi-value">{total.toLocaleString()}</div>
        <div className="kpi-label">Total Near Misses</div>
      </div>
      
      <div className="kpi-card">
        <div className="kpi-value">{highSeverity.toLocaleString()}</div>
        <div className="kpi-label">High Severity (3+)</div>
      </div>
      
      <div className="kpi-card kpi-card-high-risk">
        <div className="kpi-value">{highRiskIncidents.toLocaleString()}</div>
        <div className="kpi-label">High Risk Incidents</div>
      </div>
      
      <div className="kpi-card kpi-card-critical">
        <div className="kpi-value">{criticalSeverity.toLocaleString()}</div>
        <div className="kpi-label">Critical Severity</div>
      </div>
      
      <div className="kpi-card kpi-card-recent">
        <div className="kpi-value">{thisMonthIncidents.toLocaleString()}</div>
        <div className="kpi-label">This Month</div>
      </div>
    </div>
  );
}
