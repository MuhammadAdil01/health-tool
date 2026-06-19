import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { AuditTrendChart } from '@/components/charts/AuditTrendChart'
import { ScoreDistributionChart } from '@/components/charts/ScoreDistributionChart'

/* ─── Static data ─────────────────────────────────────────── */

const stats = [
  { title: 'Total Audits',       value: '1,248',  change: '+12.5% this month' },
  { title: 'Total Users',        value: '532',    change: '+8.3% this month'  },
  { title: 'Reports Generated',  value: '1,102',  change: '+15.1% this month' },
  { title: 'Credits Used',       value: '24,860', change: '+18.7% this month' },
]

const recentAudits = [
  { website: 'acmestyle.com',   type: 'Full Audit',     score: '82/100', status: 'Completed', date: 'May 12, 2024 10:30 AM' },
  { website: 'myblog.com',      type: 'SEO Audit',      score: '66/100', status: 'Completed', date: 'May 12, 2024 09:15 AM' },
  { website: 'shop.com',        type: 'Full Audit',     score: '91/100', status: 'Completed', date: 'May 11, 2024 11:30 PM' },
  { website: 'techvista.io',    type: 'Performance',    score: '74/100', status: 'Completed', date: 'May 11, 2024 08:45 PM' },
  { website: 'newsportal.com',  type: 'Security Audit', score: '48/100', status: 'Completed', date: 'May 11, 2024 07:10 PM' },
]

/* ─── Page ────────────────────────────────────────────────── */

export default function DashboardPage() {
  return (
    <div className="space-y-5">
      {/* Page heading */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">Welcome back, Admin 👋</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.title} className="rounded-xl border border-gray-200 bg-white shadow-none ring-0">
            <CardContent className="p-5">
              <p className="text-sm text-gray-500">{s.title}</p>
              <p className="mt-1.5 text-3xl font-bold text-gray-900">{s.value}</p>
              <p className="mt-1.5 text-sm font-medium text-green-600">{s.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Audits */}
      <Card className="rounded-xl border border-gray-200 bg-white shadow-none ring-0">
        <CardHeader className="flex flex-row items-center justify-between px-5 pb-0 pt-4">
          <h2 className="text-base font-semibold text-gray-900">Recent Audits</h2>
          <Button
            variant="outline"
            className="h-8 rounded-lg border-gray-200 px-3 text-xs font-medium text-gray-600 hover:bg-gray-50"
          >
            View all
          </Button>
        </CardHeader>
        <CardContent className="px-0 pb-0 pt-3">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-100 hover:bg-transparent">
                <TableHead className="pl-5 text-xs font-semibold text-gray-500">Website</TableHead>
                <TableHead className="text-xs font-semibold text-gray-500">Audit Type</TableHead>
                <TableHead className="text-xs font-semibold text-gray-500">Score</TableHead>
                <TableHead className="text-xs font-semibold text-gray-500">Status</TableHead>
                <TableHead className="pr-5 text-xs font-semibold text-gray-500">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentAudits.map((audit) => (
                <TableRow
                  key={audit.website}
                  className="border-gray-100 hover:bg-gray-50/60 transition-colors"
                >
                  <TableCell className="pl-5 py-3 font-medium text-gray-800">
                    {audit.website}
                  </TableCell>
                  <TableCell className="py-3 text-gray-600">{audit.type}</TableCell>
                  <TableCell className="py-3 text-gray-700">{audit.score}</TableCell>
                  <TableCell className="py-3">
                    <Badge variant="success" className="rounded-full px-2.5 py-0.5 text-xs font-medium">
                      {audit.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="pr-5 py-3 text-gray-500 text-sm">{audit.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Charts row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Audit Trend */}
        <Card className="rounded-xl border border-gray-200 bg-white shadow-none ring-0">
          <CardHeader className="px-5 pb-0 pt-4">
            <h2 className="text-base font-semibold text-gray-900">Audit Trend (Last 7 Days)</h2>
          </CardHeader>
          <CardContent className="px-2 pb-4 pt-3">
            <AuditTrendChart />
          </CardContent>
        </Card>

        {/* Score Distribution */}
        <Card className="rounded-xl border border-gray-200 bg-white shadow-none ring-0">
          <CardHeader className="px-5 pb-0 pt-4">
            <h2 className="text-base font-semibold text-gray-900">Top Score Distribution</h2>
          </CardHeader>
          <CardContent className="flex items-center justify-center px-5 pb-4 pt-3">
            <ScoreDistributionChart />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
