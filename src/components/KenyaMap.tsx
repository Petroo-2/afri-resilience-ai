'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CountyData } from '@/lib/types';

const MapWithNoSSR = dynamic(
  () => import('@/components/KenyaMap'),
  { ssr: false }
);

interface KenyaMapProps {
  counties: CountyData[];
  onCountySelect: (county: CountyData) => void;
}

export function KenyaMapComponent({ counties, onCountySelect }: KenyaMapProps) {
  const getScoreColor = (score: number) => {
    if (score >= 75) return '#2b9b75'; // green
    if (score >= 60) return '#48b7ef'; // blue
    if (score >= 40) return '#f59e0b'; // orange
    return '#d95757'; // red
  };

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden border border-line">
      <MapContainer
        center={[0.3556, 37.5663]}
        zoom={6}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        {counties.map((county) => (
          <CircleMarker
            key={county.code}
            center={[county.latitude, county.longitude]}
            radius={Math.sqrt(county.resilenceScore) * 1.5}
            fillColor={getScoreColor(county.resilenceScore)}
            color="#fff"
            weight={2}
            opacity={0.8}
            fillOpacity={0.7}
            eventHandlers={{
              click: () => onCountySelect(county),
            }}
          >
            <Popup>
              <div className="text-xs">
                <b>{county.name}</b>
                <div>Score: {county.resilenceScore}/100</div>
                <div>Climate: {county.climateScore}</div>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
