import { PageHeader } from '@/components/ui/PageHeader'
import { StatCard } from '@/components/ui/StatCard'
import { MousePointerClick, Eye, ArrowUpRight, Timer } from 'lucide-react'

const weeklyData = [
  { day: 'Mon', visitors: 2840, pageViews: 9200 },
  { day: 'Tue', visitors: 3200, pageViews: 10800 },
  { day: 'Wed', visitors: 2960, pageViews: 9800 },
  { day: 'Thu', visitors: 3580, pageViews: 12400 },
  { day: 'Fri', visitors: 3100, pageViews: 11200 },
  { day: 'Sat', visitors: 1840, pageViews: 6200 },
  { day: 'Sun', visitors: 1560, pageViews: 5100 },
]

const maxVisitors = Math.max(...weeklyData.map((d) => d.visitors))
const maxPageViews = Math.max(...weeklyData.map((d) => d.pageViews))

const topPages = [
  { path: '/dashboard',  views: 14250, bounce: '22%', avgTime: '4:12' },
  { path: '/overview',   views:  9830, bounce: '31%', avgTime: '3:45' },
  { path: '/analytics',  views:  7610, bounce: '18%', avgTime: '5:03' },
  { path: '/users',      views:  6440, bounce: '25%', avgTime: '3:22' },
  { path: '/settings',   views:  3980, bounce: '42%', avgTime: '2:18' },
  { path: '/reports',    views:  3210, bounce: '28%', avgTime: '6:40' },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Analytics"
        subtitle="Detailed insights into platform usage and user behaviour."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Page Views"      value="64,293"  change="+18.3%" changeType="positive" icon={Eye}              color="blue"    />
        <StatCard title="Unique Visitors" value="19,482"  change="+9.7%"  changeType="positive" icon={ArrowUpRight}     color="emerald" />
        <StatCard title="Click Rate"      value="4.28%"   change="+0.6%"  changeType="positive" icon={MousePointerClick} color="violet"  />
        <StatCard title="Avg. Session"    value="3m 52s"  change="-0.3%"  changeType="negative" icon={Timer}            color="amber"   />
      </div>

      {/* Weekly chart */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-slate-800">Weekly Traffic</h3>
            <p className="text-sm text-slate-400">Visitors vs page views this week</p>
          </div>
          <div className="flex gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-blue-500 inline-block" />Visitors</span>
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-violet-400 inline-block" />Page Views</span>
          </div>
        </div>
        <div className="flex h-56 items-end gap-3">
          {weeklyData.map((d) => (
            <div key={d.day} className="flex flex-1 flex-col items-center gap-1">
              <div className="flex w-full items-end gap-1" style={{ height: '210px' }}>
                <div
                  className="flex-1 rounded-t-sm bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer"
                  style={{ height: `${(d.visitors / maxVisitors) * 100}%` }}
                  title={`Visitors: ${d.visitors.toLocaleString()}`}
                />
                <div
                  className="flex-1 rounded-t-sm bg-violet-400/70 hover:bg-violet-500 transition-colors cursor-pointer"
                  style={{ height: `${(d.pageViews / maxPageViews) * 100}%` }}
                  title={`Page Views: ${d.pageViews.toLocaleString()}`}
                />
              </div>
              <span className="text-xs text-slate-400">{d.day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top pages table */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="px-5 py-4 border-b border-slate-100">
          <h3 className="font-semibold text-slate-800">Top Pages</h3>
          <p className="text-sm text-slate-400">Most visited pages this month</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Page Path</th>
                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">Page Views</th>
                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">Bounce Rate</th>
                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">Avg. Time</th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 pl-6">Share</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {topPages.map((p) => (
                <tr key={p.path} className="hover:bg-slate-50/70 transition-colors">
                  <td className="px-5 py-3.5 font-mono text-sm text-blue-600">{p.path}</td>
                  <td className="px-5 py-3.5 text-right font-semibold text-slate-700">{p.views.toLocaleString()}</td>
                  <td className="px-5 py-3.5 text-right text-slate-500">{p.bounce}</td>
                  <td className="px-5 py-3.5 text-right text-slate-500">{p.avgTime}</td>
                  <td className="px-5 py-3.5 pl-6">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-24 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-blue-500"
                          style={{ width: `${(p.views / 14250) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-400">{Math.round((p.views / 45320) * 100)}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
