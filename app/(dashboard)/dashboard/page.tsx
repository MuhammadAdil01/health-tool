import { Users, DollarSign, Activity, TrendingUp, Download, Plus } from 'lucide-react'
import { StatCard } from '@/components/ui/StatCard'
import { PageHeader } from '@/components/ui/PageHeader'
import { Badge } from '@/components/ui/Badge'

const chartBars = [42, 68, 55, 78, 60, 88, 72, 95, 65, 84, 73, 91]
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const recentActivity = [
  { initials: 'JD', color: 'bg-blue-500',    message: 'John Doe created a new account',         time: '2 minutes ago' },
  { initials: 'SA', color: 'bg-violet-500',  message: 'Sarah A. updated her profile settings',  time: '15 minutes ago' },
  { initials: 'MK', color: 'bg-emerald-500', message: 'Mike Kim completed a purchase of $249',  time: '1 hour ago' },
  { initials: 'RP', color: 'bg-amber-500',   message: 'Rachel Patel submitted a monthly report', time: '3 hours ago' },
  { initials: 'TC', color: 'bg-rose-500',    message: 'Tom Chen raised a support ticket #482',  time: '5 hours ago' },
]

const transactions = [
  { name: 'Stripe Payment',       id: '#TXN-4821', status: 'Completed', date: 'Jun 18, 2026', amount: '+$2,400.00' },
  { name: 'Subscription Renewal', id: '#TXN-4820', status: 'Completed', date: 'Jun 17, 2026', amount: '+$799.00'   },
  { name: 'Refund Request',       id: '#TXN-4819', status: 'Pending',   date: 'Jun 17, 2026', amount: '-$150.00'   },
  { name: 'Enterprise License',   id: '#TXN-4818', status: 'Completed', date: 'Jun 16, 2026', amount: '+$4,999.00' },
  { name: 'Failed Payment',       id: '#TXN-4817', status: 'Failed',    date: 'Jun 16, 2026', amount: '$329.00'    },
]

const statusVariant: Record<string, 'success' | 'warning' | 'danger'> = {
  Completed: 'success',
  Pending:   'warning',
  Failed:    'danger',
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back! Here's what's happening with your platform today."
        actions={
          <>
            <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-600 shadow-sm hover:bg-slate-50 transition-colors">
              <Download size={14} />
              Export
            </button>
            <button className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors">
              <Plus size={14} />
              New Report
            </button>
          </>
        }
      />

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total Users"       value="12,847" change="+12.5%" changeType="positive" icon={Users}       color="blue"    />
        <StatCard title="Monthly Revenue"   value="$48,295" change="+8.2%"  changeType="positive" icon={DollarSign}  color="emerald" />
        <StatCard title="Active Sessions"   value="3,241"  change="+2.1%"  changeType="positive" icon={Activity}    color="violet"  />
        <StatCard title="Growth Rate"       value="24.8%"  change="-1.4%"  changeType="negative" icon={TrendingUp}  color="amber"   />
      </div>

      {/* Chart + Activity */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Revenue chart */}
        <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-800">Revenue Overview</h3>
              <p className="text-sm text-slate-400">Monthly revenue for 2026</p>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-blue-500 inline-block" />Revenue</span>
            </div>
          </div>
          <div className="flex h-52 items-end gap-1.5">
            {chartBars.map((h, i) => (
              <div key={i} className="group flex flex-1 flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-sm bg-blue-500/80 hover:bg-blue-600 transition-colors cursor-pointer"
                  style={{ height: `${h}%` }}
                  title={`${months[i]}: $${(h * 520).toLocaleString()}`}
                />
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-slate-400">
            {months.map((m) => <span key={m}>{m}</span>)}
          </div>
        </div>

        {/* Activity feed */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 font-semibold text-slate-800">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${a.color}`}>
                  {a.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm leading-snug text-slate-700">{a.message}</p>
                  <p className="mt-0.5 text-xs text-slate-400">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transactions table */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div>
            <h3 className="font-semibold text-slate-800">Recent Transactions</h3>
            <p className="text-sm text-slate-400">Latest 5 payment activities</p>
          </div>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
            View all →
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Transaction</th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Status</th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Date</th>
                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="px-5 py-3.5">
                    <p className="font-medium text-slate-700">{tx.name}</p>
                    <p className="text-xs text-slate-400">{tx.id}</p>
                  </td>
                  <td className="px-5 py-3.5">
                    <Badge variant={statusVariant[tx.status]}>{tx.status}</Badge>
                  </td>
                  <td className="px-5 py-3.5 text-slate-500">{tx.date}</td>
                  <td className="px-5 py-3.5 text-right font-semibold text-slate-700">{tx.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
