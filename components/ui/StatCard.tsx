import { TrendingUp, TrendingDown, type LucideIcon } from 'lucide-react'

export interface StatCardProps {
  title: string
  value: string
  change: string
  changeType: 'positive' | 'negative' | 'neutral'
  icon: LucideIcon
  color: 'blue' | 'emerald' | 'violet' | 'amber' | 'rose'
  description?: string
}

const colorMap: Record<StatCardProps['color'], { bg: string; iconBg: string; iconText: string }> = {
  blue:    { bg: 'bg-blue-50',    iconBg: 'bg-blue-500',    iconText: 'text-white' },
  emerald: { bg: 'bg-emerald-50', iconBg: 'bg-emerald-500', iconText: 'text-white' },
  violet:  { bg: 'bg-violet-50',  iconBg: 'bg-violet-500',  iconText: 'text-white' },
  amber:   { bg: 'bg-amber-50',   iconBg: 'bg-amber-500',   iconText: 'text-white' },
  rose:    { bg: 'bg-rose-50',    iconBg: 'bg-rose-500',    iconText: 'text-white' },
}

export function StatCard({ title, value, change, changeType, icon: Icon, color, description }: StatCardProps) {
  const { bg, iconBg, iconText } = colorMap[color]
  const isPositive = changeType === 'positive'

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="text-2xl font-bold tracking-tight text-slate-800">{value}</p>
        </div>
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${bg}`}>
          <Icon size={20} className={`${iconBg.replace('bg-', 'text-')}`} />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1.5">
        {changeType !== 'neutral' && (
          isPositive
            ? <TrendingUp size={14} className="text-emerald-500" />
            : <TrendingDown size={14} className="text-red-500" />
        )}
        <span
          className={`text-sm font-semibold ${
            changeType === 'neutral'
              ? 'text-slate-500'
              : isPositive
              ? 'text-emerald-600'
              : 'text-red-600'
          }`}
        >
          {change}
        </span>
        <span className="text-sm text-slate-400">{description ?? 'vs last month'}</span>
      </div>
    </div>
  )
}
