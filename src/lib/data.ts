import { RiskAlert, RegionData, InterventionTracker, ChartDataPoint } from './types';

export const regions: RegionData[] = [
  {
    name: 'Kajiado',
    score: 74,
    climate: 72,
    food: 68,
    water: 58,
    livelihood: 76,
    alerts: 3,
  },
  {
    name: 'Makueni',
    score: 66,
    climate: 61,
    food: 64,
    water: 58,
    livelihood: 72,
    alerts: 2,
  },
  {
    name: 'Nakuru',
    score: 59,
    climate: 55,
    food: 62,
    water: 51,
    livelihood: 68,
    alerts: 1,
  },
];

export const alerts: RiskAlert[] = [
  {
    id: '1',
    severity: 'high',
    title: 'Elevated water stress',
    region: 'Kajiado',
    description: 'Water availability indicators show sustained pressure.',
    timestamp: '2 hours ago',
    confidence: 0.92,
  },
  {
    id: '2',
    severity: 'high',
    title: 'Rainfall deficit',
    region: 'Makueni',
    description: 'Seasonal rainfall signal below reference range.',
    timestamp: '4 hours ago',
    confidence: 0.88,
  },
  {
    id: '3',
    severity: 'high',
    title: 'Food price pressure',
    region: 'Nakuru',
    description: 'Selected staple prices show upward pressure.',
    timestamp: '6 hours ago',
    confidence: 0.85,
  },
  {
    id: '4',
    severity: 'medium',
    title: 'Livestock condition pressure',
    region: 'Kajiado',
    description: 'Pasture and water indicators require field verification.',
    timestamp: '8 hours ago',
    confidence: 0.76,
  },
  {
    id: '5',
    severity: 'medium',
    title: 'Vegetation decline',
    region: 'Makueni',
    description: 'Vegetation index below seasonal baseline.',
    timestamp: '12 hours ago',
    confidence: 0.82,
  },
  {
    id: '6',
    severity: 'low',
    title: 'Market access watch',
    region: 'Nakuru',
    description: 'Monitor transport and market-access indicators.',
    timestamp: '1 day ago',
    confidence: 0.71,
  },
];

export const interventions: InterventionTracker[] = [
  {
    id: '1',
    name: 'Water access support',
    region: 'Kajiado',
    progress: 78,
    status: 'on-track',
    target: '100 boreholes',
  },
  {
    id: '2',
    name: 'Climate-smart agriculture',
    region: 'Makueni',
    progress: 64,
    status: 'on-track',
    target: '250 farmers trained',
  },
  {
    id: '3',
    name: 'Food market support',
    region: 'Nakuru',
    progress: 52,
    status: 'at-risk',
    target: '15 markets stabilized',
  },
  {
    id: '4',
    name: 'Community early warning',
    region: 'All areas',
    progress: 88,
    status: 'on-track',
    target: '500 alerts disseminated',
  },
];

export const rainfallData: ChartDataPoint[] = [
  { name: 'Jan', value: 85 },
  { name: 'Feb', value: 78 },
  { name: 'Mar', value: 92 },
  { name: 'Apr', value: 65 },
  { name: 'May', value: 58 },
  { name: 'Jun', value: 42 },
];

export const foodSecurityData: ChartDataPoint[] = [
  { name: 'Kajiado', value: 68 },
  { name: 'Makueni', value: 64 },
  { name: 'Nakuru', value: 62 },
];

export const waterStressData: ChartDataPoint[] = [
  { name: 'Jan', value: 0.35 },
  { name: 'Feb', value: 0.42 },
  { name: 'Mar', value: 0.55 },
  { name: 'Apr', value: 0.68 },
  { name: 'May', value: 0.71 },
  { name: 'Jun', value: 0.78 },
];

export const riskScoreBreakdown = [
  { name: 'Climate', value: 72, percentage: 30 },
  { name: 'Food', value: 61, percentage: 25 },
  { name: 'Water', value: 58, percentage: 20 },
  { name: 'Livelihood', value: 76, percentage: 15 },
  { name: 'Nutrition', value: 55, percentage: 10 },
];
