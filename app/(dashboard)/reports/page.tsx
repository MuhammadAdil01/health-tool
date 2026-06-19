import { PageHeader } from '@/components/ui/PageHeader'
import { Badge } from '@/components/ui/Badge'
import { Download, Plus, FileText, BarChart2, Users, DollarSign } from 'lucide-react'

const reports = [
  {
    id: 'RPT-001',
    title: 'Monthly Revenue Summary',
    description: 'Full breakdown of revenue streams, subscriptions, and refunds for May 2026.',
    type: 'Financial',
    status: 'Ready',
    created: 'Jun 01, 2026',
    size: '2.4 MB',
    icon: DollarSign,
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-50',
  },
  {
    id: 'RPT-002',
    title: 'User Growth Analysis',
    description: 'Cohort analysis and user acquisition breakdown across all channels.',
    type: 'Users',
    status: 'Ready',
    created: 'Jun 05, 2026',
    size: '1.8 MB',
    icon: Users,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-50',
  },
  {
    id: 'RPT-003',
    title: 'Q2 Performance Report',
    description: 'Quarterly KPIs, OKR tracking, and department-level performance metrics.',
    type: 'Analytics',
    status: 'Processing',
    created: 'Jun 10, 2026',
    size: '—',
    icon: BarChart2,
    iconColor: 'text-violet-500',
    iconBg: 'bg-violet-50',
  },
  {
    id: 'RPT-004',
    title: 'Infrastructure Cost Report',
    description: 'Cloud spending summary with cost-optimisation recommendations.',
    type: 'Financial',
    status: 'Ready',
    created: 'Jun 12, 2026',
    size: '956 KB',
    icon: FileText,
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-50',
  },
  {
    id: 'RPT-005',
    title: 'Security Audit Log',
    description: 'Detailed access logs, failed login attempts, and security event timeline.',
    type: 'Security',
    status: 'Pending',
    created: 'Jun 15, 2026',
    size: '—',
    icon: FileText,
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-50',
  },
  {
    id: 'RPT-006',
    title: 'Customer Satisfaction Index',
    description: 'NPS survey results and CSAT scores from Q2 customer feedback.',
    type: 'Analytics',
    status: 'Ready',
    created: 'Jun 17, 2026',
    size: '1.1 MB',
    icon: BarChart2,
    iconColor: 'text-cyan-500',
    iconBg: 'bg-cyan-50',
  },
]

const statusVariant: Record<string, 'success' | 'warning' | 'neutral'> = {
  Ready:      'success',
  Processing: 'warning',
  Pending:    'neutral',
}

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Reports"
        subtitle="Generate, download, and manage platform reports."
        actions={
          <button className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors">
            <Plus size={14} />
            Generate Report
          </button>
        }
      />

      {/* Summary cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { label: 'Total Reports',    value: '6',  sub: 'All time',       color: 'text-blue-600',    bg: 'bg-blue-50' },
          { label: 'Ready to Download', value: '4',  sub: '4 new this week', color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'In Progress',       value: '2',  sub: 'Est. 2 hours',   color: 'text-amber-600',   bg: 'bg-amber-50' },
        ].map((c) => (
          <div key={c.label} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className={`rounded-xl px-4 py-3 text-2xl font-extrabold ${c.bg} ${c.color}`}>{c.value}</div>
            <div>
              <p className="font-semibold text-slate-700">{c.label}</p>
              <p className="text-xs text-slate-400">{c.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Reports grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {reports.map((r) => (
          <div key={r.id} className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${r.iconBg}`}>
                <r.icon size={19} className={r.iconColor} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-slate-800 truncate">{r.title}</p>
                  <Badge variant={statusVariant[r.status]}>{r.status}</Badge>
                </div>
                <p className="mt-1 text-sm text-slate-500 line-clamp-2">{r.description}</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-400">
              <div className="flex items-center gap-4">
                <span>ID: <span className="font-mono text-slate-500">{r.id}</span></span>
                <span>Type: <span className="text-slate-500">{r.type}</span></span>
                <span>{r.created}</span>
              </div>
              {r.status === 'Ready' && (
                <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
                  <Download size={12} />
                  {r.size}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
