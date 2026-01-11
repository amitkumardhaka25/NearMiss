/**
 * MongoDB Object ID structure
 */
export interface MongoDBObjectId {
  $oid: string;
}

/**
 * Near Miss Incident Schema
 * Based on the structure of near_miss.json data
 */
export interface NearMissIncident {
  /** MongoDB document ID */
  _id: MongoDBObjectId;
  
  /** Incident ID (string representation) */
  id: string;
  
  /** MongoDB version key */
  __v: number;
  
  /** Action cause category */
  action_cause?: string;
  
  /** Type of behavior observed */
  behavior_type?: string;
  
  /** Company type identifier */
  company_type?: string;
  
  /** Craft code (may be empty) */
  craft_code?: string;
  
  /** Creation timestamp (milliseconds since epoch) */
  createdAt: number;
  
  /** Day of the year (1-366) */
  day_of_year?: number;
  
  /** Global Business Unit */
  gbu?: string;
  
  /** Incident date timestamp (milliseconds since epoch) */
  incident_date: number;
  
  /** Incident number (string) */
  incident_number: string;
  
  /** Is LCV (Life Critical Violation) flag */
  is_lcv: boolean;
  
  /** Job/Project name */
  job?: string;
  
  /** Last update timestamp (milliseconds since epoch) */
  lastUpdated: number;
  
  /** Location of the incident */
  location?: string;
  
  /** Month (1-12) */
  month?: number;
  
  /** Near miss sub-category (may be empty) */
  near_miss_sub_category?: string;
  
  /** Primary category of the incident */
  primary_category?: string;
  
  /** Geographic region */
  region?: string;
  
  /** Severity level (numeric) */
  severity_level?: number;
  
  /** Type: Unsafe Condition or Unsafe Behavior */
  unsafe_condition_or_behavior?: string;
  
  /** Violation probability level (numeric) */
  violation_probability_level?: number;
  
  /** Violation risk severity level (numeric) */
  violation_risk_severity_level?: number;
  
  /** Violation severity level (numeric) */
  violation_severity_level?: number;
  
  /** Week of the year (1-53) */
  week?: number;
  
  /** Year */
  year?: number;
}

/**
 * Array of Near Miss Incidents
 */
export type NearMissData = NearMissIncident[];
