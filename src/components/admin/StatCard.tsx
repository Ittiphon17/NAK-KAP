interface StatCardProps {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: any;
}

export function StatCard({ label, value, change, trend, icon: Icon }: StatCardProps) {
  return (
    <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 bg-surface rounded-2xl flex items-center justify-center text-primary border border-gray-50">
          <Icon size={24} />
        </div>
        <div className={`flex items-center gap-1 text-xs font-bold ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
          {trend === 'up' ? '↑' : '↓'} {change}
        </div>
      </div>
      <div>
        <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">{label}</p>
        <h3 className="text-3xl font-bold text-primary">{value}</h3>
      </div>
    </div>
  );
}
