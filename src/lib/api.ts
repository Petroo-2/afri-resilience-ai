import { regions, alerts, interventions, rainfallData, foodSecurityData, waterStressData } from './data';

// Mock API endpoints - replace with real API calls
export async function fetchDashboardMetrics() {
  return {
    overallScore: 68,
    activeAlerts: 6,
    communitiesMonitored: 126,
    interventionsOnTrack: 11,
  };
}

export async function fetchRegions() {
  return regions;
}

export async function fetchAlerts() {
  return alerts;
}

export async function fetchInterventions() {
  return interventions;
}

export async function fetchRainfallData() {
  return rainfallData;
}

export async function fetchFoodSecurityData() {
  return foodSecurityData;
}

export async function fetchWaterStressData() {
  return waterStressData;
}

export async function updateAlertFilter(severity: string) {
  if (severity === 'high') {
    return alerts.filter((a) => a.severity === 'high');
  }
  return alerts;
}
