/**
 * Color palette for Near Miss Dashboard charts
 */

// Primary chart colors
export const chartColors = {
  primary: '#4F41B9',      // Main purple (matches dashboard background)
  secondary: '#8884d8',     // Light purple
  accent: '#82ca9d',        // Green
  warning: '#ffc658',       // Yellow/Orange
  danger: '#ff7f50',        // Coral/Red
  info: '#0088FE',          // Blue
  success: '#00C49F',       // Teal
  purple: '#9C88FF',        // Light purple variant
  orange: '#FF8042',         // Orange variant
  teal: '#00C9A7',           // Teal variant
} as const;

// Severity level colors
export const severityColors = {
  low: '#82ca9d',           // Green for low severity
  medium: '#ffc658',        // Yellow for medium severity
  high: '#ff7f50',          // Orange for high severity
  critical: '#ff4444',      // Red for critical severity
  unknown: '#888888',        // Gray for unknown
} as const;

// Category colors - array for multiple categories
export const categoryColors = [
  '#4F41B9',  // Primary purple
  '#8884d8',  // Light purple
  '#82ca9d',  // Green
  '#ffc658',  // Yellow
  '#ff7f50',  // Coral
  '#0088FE',  // Blue
  '#00C49F',  // Teal
  '#9C88FF',  // Purple variant
  '#FF8042',  // Orange variant
  '#00C9A7',  // Teal variant
];

// Get color by index (for cycling through colors)
export const getColorByIndex = (index: number): string => {
  return categoryColors[index % categoryColors.length];
};

// Get severity color
export const getSeverityColor = (level: number | undefined): string => {
  if (level === undefined || level === null) return severityColors.unknown;
  if (level === 1) return severityColors.low;
  if (level === 2) return severityColors.medium;
  if (level === 3) return severityColors.high;
  if (level >= 4) return severityColors.critical;
  return severityColors.unknown;
};

// Chart-specific color assignments
export const chartColorMap = {
  categoryBar: chartColors.primary,
  severityPie: categoryColors, // Array for pie chart
  locationBar: chartColors.warning,
  trendLine: chartColors.secondary,
  unsafeTypeBar: chartColors.danger,
} as const;
