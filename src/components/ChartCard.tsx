'use client';

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartCardProps {
  title: string;
  subtitle: string;
  data: any[];
  type: 'line' | 'bar';
  dataKey: string;
  color?: string;
}

export default function ChartCard({
  title,
  subtitle,
  data,
  type,
  dataKey,
  color = '#48b7ef',
}: ChartCardProps) {
  return (
    <div className="bg-white border border-line rounded-lg p-5">
      <div className="mb-4">
        <h3 className="font-bold text-lg font-display text-text">{title}</h3>
        <p className="text-xs text-muted">{subtitle}</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        {type === 'line' ? (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#dce5ed" />
            <XAxis dataKey="name" stroke="#6d7d90" />
            <YAxis stroke="#6d7d90" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #dce5ed',
                borderRadius: '8px',
              }}
            />
            <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} dot={{ fill: color }} />
          </LineChart>
        ) : (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#dce5ed" />
            <XAxis dataKey="name" stroke="#6d7d90" />
            <YAxis stroke="#6d7d90" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #dce5ed',
                borderRadius: '8px',
              }}
            />
            <Bar dataKey={dataKey} fill={color} radius={[8, 8, 0, 0]} />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
