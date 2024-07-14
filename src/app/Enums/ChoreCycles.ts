enum ChoreCycles {
  Daily = "Daily",
  Weekly = "Weekly",
  Monthly = "Monthly",
}

export function getAllChoreCycles() {
  return [ChoreCycles.Daily, ChoreCycles.Monthly, ChoreCycles.Weekly];
}

export default ChoreCycles;
