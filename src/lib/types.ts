export interface CountyData {
  id: string;
  name: string;
  code: string;
  region: string;
  latitude: number;
  longitude: number;
  resilenceScore: number;
  climateScore: number;
  foodScore: number;
  waterScore: number;
  livelihoodScore: number;
  alerts: number;
  communities: number;
  interventions: number;
  lastUpdated: Date;
  updatedAt: Date;
}

export interface UserSession {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  expires: string;
}
