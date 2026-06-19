import { PageHeader } from '@/components/ui/PageHeader'
import { Badge } from '@/components/ui/badge'
import { Zap, Globe, Clock, CheckCircle } from 'lucide-react'

const trafficSources = [
  { name: 'Organic Search', percentage: 48, color: 'bg-blue-500' },
  { name: 'Direct',         percentage: 27, color: 'bg-violet-500' },
  { name: 'Social Media',   percentage: 15, color: 'bg-emerald-500' },
  { name: 'Referral',       percentage: 10, color: 'bg-amber-500' },
]

const metrics = [
  { label: 'Speed',       value: '82%',  color: 'bg-blue-500' },
  { label: 'Quality',     value: '74%',  color: 'bg-violet-500' },
  { label: 'Uptime',      value: '99.9%',color: 'bg-emerald-500' },
]

const recentOrders = [
  { id: '#ORD-9021', customer: 'Alex Monroe',    product: 'Pro Plan',        status: 'Completed', value: '$299',  date: 'Jun 18' },
  { id: '#ORD-9020', customer: 'Nina Torres',    product: 'Enterprise',      status: 'Pending',   value: '$999',  date: 'Jun 18' },
  { id: '#ORD-9019', customer: 'Sam Williams',   product: 'Starter Plan',    status: 'Completed', value: '$49',   date: 'Jun 17' },
  { id: '#ORD-9018', customer: 'Carol Zhang',    product: 'Pro Plan',        status: 'Completed', value: '$299',  date: 'Jun 17' },
  { id: '#ORD-9017', customer: 'David Park',     product: 'Add-on Bundle',   status: 'Failed',    value: '$79',   date: 'Jun 16' },
]

const statusVariant: Record<string, 'success' | 'warning' | 'destructive'> = {
  Completed: 'success',
  Pending:   'warning',
  Failed:    'destructive',
}

const highlights = [
  { icon: Zap,         label: 'Avg. Response Time', value: '142 ms',    color: 'text-amber-500',   bg: 'bg-amber-50' },
  { icon: Globe,       label: 'Active Regions',     value: '12',        color: 'text-blue-500',    bg: 'bg-blue-50' },
  { icon: Clock,       label: 'Avg. Session Time',  value: '4m 38s',    color: 'text-violet-500',  bg: 'bg-violet-50' },
  { icon: CheckCircle, label: 'SLA Compliance',     value: '99.9%',     color: 'text-emerald-500', bg: 'bg-emerald-50' },
]

export default function OverviewPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Overview"
        subtitle="A high-level summary of platform health and activity."
      />

      {/* Highlight metrics */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {highlights.map((h) => (
          <div key={h.label} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${h.bg}`}>
              <h.icon size={20} className={h.color} />
            </div>
            <div>
              <p className="text-xs text-slate-500">{h.label}</p>
              <p className="text-lg font-bold text-slate-800">{h.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
        {/* Performance score */}
        <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 font-semibold text-slate-800">Performance Score</h3>
          <div className="flex flex-col items-center justify-center py-6">
            <div className="relative h-36 w-36">
              <svg viewBox="0 0 36 36" className="-rotate-90 h-full w-full">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none" stroke="#e2e8f0" strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none" stroke="#3b82f6" strokeWidth="3"
                  strokeDasharray="78, 100" strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-extrabold text-slate-800">78</span>
                <span className="text-xs text-slate-400">/ 100</span>
              </div>
            </div>
            <p className="mt-3 text-sm font-medium text-slate-600">Overall Score</p>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-lg bg-slate-50 p-3 text-center">
                <div className="mb-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                  <div className={`h-full ${m.color} rounded-full`} style={{ width: m.value }} />
                </div>
                <p className="text-base font-bold text-slate-800">{m.value}</p>
                <p className="text-xs text-slate-500">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic sources + orders */}
        <div className="lg:col-span-3 space-y-5">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="mb-4 font-semibold text-slate-800">Traffic Sources</h3>
            <div className="space-y-3.5">
              {trafficSources.map((s) => (
                <div key={s.name}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-medium text-slate-600">{s.name}</span>
                    <span className="font-semibold text-slate-800">{s.percentage}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full ${s.color} rounded-full transition-all`}
                      style={{ width: `${s.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Orders table */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <h3 className="font-semibold text-slate-800">Recent Orders</h3>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700">View all →</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Order ID</th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Customer</th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Product</th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Status</th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Date</th>
                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {recentOrders.map((o) => (
                <tr key={o.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="px-5 py-3.5 font-mono text-xs text-slate-500">{o.id}</td>
                  <td className="px-5 py-3.5 font-medium text-slate-700">{o.customer}</td>
                  <td className="px-5 py-3.5 text-slate-500">{o.product}</td>
                  <td className="px-5 py-3.5"><Badge variant={statusVariant[o.status]}>{o.status}</Badge></td>
                  <td className="px-5 py-3.5 text-slate-500">{o.date}</td>
                  <td className="px-5 py-3.5 text-right font-semibold text-slate-700">{o.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
