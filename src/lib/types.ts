export interface RiskAlert {
  id: string;
  severity: 'high' | 'medium' | 'low';
  title: string;
  region: string;
  description: string;
  timestamp: string;
  confidence: number;
}

export interface RegionData {
  name: string;
  score: number;
  climate: number;
  food: number;
  water: number;
  livelihood: number;
  alerts: number;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  timestamp?: string;
}

export interface InterventionTracker {
  id: string;
  name: string;
  region: string;
  progress: number;
  status: 'on-track' | 'at-risk' | 'completed';
  target: string;
}

export interface DashboardMetrics {
  overallScore: number;
  activeAlerts: number;
  communitiesMonitored: number;
  interventionsOnTrack: number;
}
