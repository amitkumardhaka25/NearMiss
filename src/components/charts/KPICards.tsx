import { NearMissIncident } from "../../models/nearMissSchema";
import "../../App.css";

interface KPICardsProps {
  data: NearMissIncident[];
  onCardClick?: (incidents: NearMissIncident[], title: string) => void;
}

export default function KPICards({ data, onCardClick }: KPICardsProps) {
  const safeData = data || [];
  
  // Calculate KPIs and filtered data
  const total = safeData.length;
  const totalData = safeData;
  
  const highSeverity = safeData.filter(d => d?.severity_level && d.severity_level >= 3).length;
  const highSeverityData = safeData.filter(d => d?.severity_level && d.severity_level >= 3);
  
  const highRiskIncidents = safeData.filter(d => d?.is_lcv === true).length;
  const highRiskData = safeData.filter(d => d?.is_lcv === true);
  
  const criticalSeverity = safeData.filter(d => d?.severity_level === 4).length;
  const criticalData = safeData.filter(d => d?.severity_level === 4);
  
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
  const thisMonthData = safeData.filter(d => {
    if (!d?.incident_date) return false;
    const incidentDate = new Date(d.incident_date);
    return incidentDate.getFullYear() === currentYear && 
           incidentDate.getMonth() + 1 === currentMonth;
  });

  const handleCardClick = (incidents: NearMissIncident[], title: string) => {
    if (onCardClick && incidents.length > 0) {
      onCardClick(incidents, title);
    }
  };

  return (
    <div className="kpi-cards">
      <div 
        className="kpi-card kpi-card-clickable" 
        onClick={() => handleCardClick(totalData, "All Near Miss Incidents")}
      >
        <div className="kpi-value">{total.toLocaleString()}</div>
        <div className="kpi-label">Total Near Misses</div>
      </div>
      
      <div 
        className="kpi-card kpi-card-clickable" 
        onClick={() => handleCardClick(highSeverityData, "High Severity Incidents (3+)")}
      >
        <div className="kpi-value">{highSeverity.toLocaleString()}</div>
        <div className="kpi-label">High Severity (3+)</div>
      </div>
      
      <div 
        className="kpi-card kpi-card-high-risk kpi-card-clickable" 
        onClick={() => handleCardClick(highRiskData, "High Risk Incidents")}
      >
        <div className="kpi-value">{highRiskIncidents.toLocaleString()}</div>
        <div className="kpi-label">High Risk Incidents</div>
      </div>
      
      <div 
        className="kpi-card kpi-card-critical kpi-card-clickable" 
        onClick={() => handleCardClick(criticalData, "Critical Severity Incidents")}
      >
        <div className="kpi-value">{criticalSeverity.toLocaleString()}</div>
        <div className="kpi-label">Critical Severity</div>
      </div>
      
      <div 
        className="kpi-card kpi-card-recent kpi-card-clickable" 
        onClick={() => handleCardClick(thisMonthData, "This Month's Incidents")}
      >
        <div className="kpi-value">{thisMonthIncidents.toLocaleString()}</div>
        <div className="kpi-label">This Month</div>
      </div>
    </div>
  );
}
