import { InterventionTracker } from '@/lib/types';

interface InterventionProgressProps {
  intervention: InterventionTracker;
}

export default function InterventionProgress({ intervention }: InterventionProgressProps) {
  const statusColor = {
    'on-track': 'bg-success',
    'at-risk': 'bg-yellow-500',
    'completed': 'bg-green-600',
  }[intervention.status];

  return (
    <div className="my-4">
      <div className="flex justify-between items-center mb-2">
        <div>
          <div className="font-bold text-sm text-text">{intervention.name}</div>
          <div className="text-xs text-muted">{intervention.target}</div>
        </div>
        <div className="font-bold text-sm text-text">{intervention.progress}%</div>
      </div>
      <div className="w-full bg-line rounded-full h-1.5 overflow-hidden">
        <div
          className={`h-full ${statusColor} transition-all duration-300`}
          style={{ width: `${intervention.progress}%` }}
        />
      </div>
    </div>
  );
}
