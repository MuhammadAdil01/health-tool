interface BadgeProps {
  children: React.ReactNode
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'neutral'
}

const variants: Record<NonNullable<BadgeProps['variant']>, string> = {
  success: 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20',
  warning: 'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20',
  danger:  'bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/20',
  info:    'bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/20',
  neutral: 'bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-600/20',
}

export function Badge({ children, variant = 'neutral' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}
