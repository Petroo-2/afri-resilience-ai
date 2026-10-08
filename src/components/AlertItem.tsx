import { RiskAlert } from '@/lib/types';

interface AlertItemProps {
  alert: RiskAlert;
}

export default function AlertItem({ alert }: AlertItemProps) {
  const severityColor = {
    high: 'border-danger',
    medium: 'border-yellow-500',
    low: 'border-blue',
  }[alert.severity];

  const severityBg = {
    high: 'bg-red-50',
    medium: 'bg-yellow-50',
    low: 'bg-blue-50',
  }[alert.severity];

  return (
    <div className={`p-3 border-l-4 ${severityColor} rounded-lg ${severityBg} my-2`}>
      <div className="font-bold text-sm text-text">
        {alert.title} · {alert.region}
      </div>
      <p className="text-xs text-muted my-1">{alert.description}</p>
      <div className="flex justify-between items-center">
        <small className="text-[8px] text-muted">{alert.timestamp}</small>
        <small className="text-[8px] text-muted">AI confidence: {Math.round(alert.confidence * 100)}%</small>
      </div>
    </div>
  );
}
