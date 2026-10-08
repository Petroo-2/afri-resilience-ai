'use client';

import { useState, useEffect } from 'react';
import KPICard from '@/components/KPICard';
import ChartCard from '@/components/ChartCard';
import AlertItem from '@/components/AlertItem';
import InterventionProgress from '@/components/InterventionProgress';
import RegionCard from '@/components/RegionCard';
import {
  fetchDashboardMetrics,
  fetchRainfallData,
  fetchFoodSecurityData,
  fetchWaterStressData,
  fetchAlerts,
  fetchInterventions,
  fetchRegions,
} from '@/lib/api';
import { RiskAlert, InterventionTracker, RegionData, ChartDataPoint } from '@/lib/types';

export default function Dashboard() {
  const [metrics, setMetrics] = useState({ overallScore: 0, activeAlerts: 0, communitiesMonitored: 0, interventionsOnTrack: 0 });
  const [alerts, setAlerts] = useState<RiskAlert[]>([]);
  const [interventions, setInterventions] = useState<InterventionTracker[]>([]);
  const [regions, setRegions] = useState<RegionData[]>([]);
  const [rainfallData, setRainfallData] = useState<ChartDataPoint[]>([]);
  const [foodSecurityData, setFoodSecurityData] = useState<ChartDataPoint[]>([]);
  const [waterStressData, setWaterStressData] = useState<ChartDataPoint[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [filterHighOnly, setFilterHighOnly] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const m = await fetchDashboardMetrics();
      setMetrics(m);
      const a = await fetchAlerts();
      setAlerts(a);
      const int = await fetchInterventions();
      setInterventions(int);
      const r = await fetchRegions();
      setRegions(r);
      const rf = await fetchRainfallData();
      setRainfallData(rf);
      const fs = await fetchFoodSecurityData();
      setFoodSecurityData(fs);
      const ws = await fetchWaterStressData();
      setWaterStressData(ws);
    };
    loadData();
  }, []);

  const handleRegionClick = (name: string) => {
    setSelectedRegion(name);
    setMetrics((prev) => ({
      ...prev,
      overallScore: regions.find((r) => r.name === name)?.score || prev.overallScore,
    }));
  };

  const displayedAlerts = filterHighOnly ? alerts.filter((a) => a.severity === 'high') : alerts;

  return (
    <main className="bg-bg min-h-screen">
      <div className="w-full max-w-[1180px] mx-auto px-[4%] py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <div>
            <div className="text-sm font-bold tracking-wider text-blue mb-2">KENYA · DEMONSTRATION</div>
            <h1 className="text-4xl font-bold font-display mb-2">Resilience Intelligence</h1>
            <p className="text-muted">Integrated view of climate, food, water and livelihood risk.</p>
          </div>
          <select className="border border-line rounded-lg p-3 bg-white font-sm">
            <option>All pilot areas</option>
            <option>Kajiado</option>
            <option>Makueni</option>
            <option>Nakuru</option>
          </select>
        </div>

        {/* KPIs */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <KPICard label="AFRI-RESILIENCE SCORE" value={metrics.overallScore} subtitle="Moderate" />
          <KPICard label="ACTIVE ALERTS" value={metrics.activeAlerts} subtitle="3 high priority" highlight="red" />
          <KPICard label="COMMUNITIES MONITORED" value={metrics.communitiesMonitored} subtitle="Demo coverage" />
          <KPICard label="INTERVENTIONS" value={metrics.interventionsOnTrack} subtitle="11 on track" highlight="green" />
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {/* Left Column */}
          <div className="md:col-span-2">
            {/* Charts Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <ChartCard title="Rainfall Anomaly" subtitle="30-day trend" data={rainfallData} type="line" dataKey="value" />
              <ChartCard title="Food Security Score" subtitle="By region" data={foodSecurityData} type="bar" dataKey="value" color="#2b9b75" />
            </div>

            {/* Region Cards */}
            <div className="bg-white rounded-lg p-5 border border-line mb-4">
              <h3 className="font-bold text-lg mb-4">Risk by Region</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {regions.map((r) => (
                  <RegionCard key={r.name} region={r} onClick={handleRegionClick} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Alerts */}
            <div className="bg-white rounded-lg p-5 border border-line mb-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Priority Alerts</h3>
                <button
                  onClick={() => setFilterHighOnly(!filterHighOnly)}
                  className="text-xs font-bold text-blue hover:text-navy transition"
                >
                  {filterHighOnly ? 'All alerts' : 'High priority'}
                </button>
              </div>
              <div className="max-h-[400px] overflow-y-auto">
                {displayedAlerts.map((alert) => (
                  <AlertItem key={alert.id} alert={alert} />
                ))}
              </div>
            </div>

            {/* Water Stress Chart */}
            <ChartCard title="Water Stress Index" subtitle="Composite trend" data={waterStressData} type="line" dataKey="value" color="#68e0db" />
          </div>
        </div>

        {/* Intervention Tracker */}
        <div className="bg-white rounded-lg p-5 border border-line">
          <h3 className="font-bold text-lg mb-4">Action Tracker</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {interventions.map((int) => (
              <div key={int.id}>
                <InterventionProgress intervention={int} />
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-xs text-yellow-800">
          <b>⚠ Demo Disclaimer:</b> These values are illustrative. Production deployment requires validated datasets, governance, model evaluation,
          scientific review and human decision-making. The platform does not diagnose individuals.
        </div>
      </div>
    </main>
  );
}
