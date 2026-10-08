import { RegionData } from '@/lib/types';

interface RegionCardProps {
  region: RegionData;
  onClick: (name: string) => void;
}

export default function RegionCard({ region, onClick }: RegionCardProps) {
  return (
    <button
      onClick={() => onClick(region.name)}
      className="text-left bg-white border border-line rounded-lg p-4 hover:shadow-lg hover:border-blue transition cursor-pointer"
    >
      <div className="font-bold text-base text-text mb-3">
        {region.name} <span className="font-display text-xl text-navy">{region.score}/100</span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="text-center p-2 bg-bg rounded">
          <div className="text-muted">Climate</div>
          <div className="font-bold text-text">{region.climate}</div>
        </div>
        <div className="text-center p-2 bg-bg rounded">
          <div className="text-muted">Food</div>
          <div className="font-bold text-text">{region.food}</div>
        </div>
        <div className="text-center p-2 bg-bg rounded">
          <div className="text-muted">Water</div>
          <div className="font-bold text-text">{region.water}</div>
        </div>
        <div className="text-center p-2 bg-bg rounded">
          <div className="text-muted">Livelihood</div>
          <div className="font-bold text-text">{region.livelihood}</div>
        </div>
      </div>
    </button>
  );
}
