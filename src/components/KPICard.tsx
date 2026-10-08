interface KPICardProps {
  label: string;
  value: string | number;
  subtitle: string;
  highlight?: 'red' | 'green' | 'default';
}

export default function KPICard({ label, value, subtitle, highlight = 'default' }: KPICardProps) {
  const highlightClass = {
    red: 'text-danger',
    green: 'text-success',
    default: 'text-muted',
  }[highlight];

  return (
    <div className="bg-white border border-line rounded-lg p-5">
      <div className="text-[9px] font-bold tracking-widest text-blue uppercase">{label}</div>
      <div className="text-4xl font-bold my-2 font-display">{value}</div>
      <div className={`text-xs ${highlightClass}`}>{subtitle}</div>
    </div>
  );
}
