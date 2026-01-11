export const groupByCount = (data, key) => {
  const map = {};
  data.forEach(item => {
    const value = item[key] || "Unknown";
    map[value] = (map[value] || 0) + 1;
  });
  return Object.entries(map).map(([name, value]) => ({ name, value }));
};

export const groupByMonth = (data) => {
  const map = {};
  data.forEach(item => {
    if (!item.month || !item.year) return;
    const label = `${item.year}-${String(item.month).padStart(2, "0")}`;
    map[label] = (map[label] || 0) + 1;
  });
  return Object.entries(map)
    .sort()
    .map(([name, value]) => ({ name, value }));
};

export const severityLabel = (level) => {
  const labels = {
    1: "Low",
    2: "Medium",
    3: "High",
    4: "Critical"
  };
  return labels[level] || "Unknown";
};
