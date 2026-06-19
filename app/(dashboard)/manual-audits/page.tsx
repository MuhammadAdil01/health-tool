import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Plus } from 'lucide-react'

const audits = [
  { url: 'acmestyle.com/home',   type: 'Full Audit',     score: '82/100', status: 'Completed', date: 'Jun 18, 2026 10:30 AM' },
  { url: 'myblog.com',           type: 'SEO Audit',      score: '66/100', status: 'Completed', date: 'Jun 18, 2026 09:15 AM' },
  { url: 'shop.com/products',    type: 'Full Audit',     score: '91/100', status: 'Completed', date: 'Jun 17, 2026 11:30 PM' },
  { url: 'techvista.io',         type: 'Performance',    score: '74/100', status: 'In Progress',date: 'Jun 17, 2026 08:45 PM' },
  { url: 'newsportal.com',       type: 'Security Audit', score: '—',      status: 'Queued',    date: 'Jun 16, 2026 07:10 PM' },
]

const statusVariant: Record<string, 'success' | 'info' | 'secondary'> = {
  Completed:   'success',
  'In Progress':'info',
  Queued:      'secondary',
}

export default function ManualAuditsPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Manual Audits</h1>
          <p className="mt-1 text-sm text-gray-500">Run and review on-demand audits.</p>
        </div>
        <Button className="gap-1.5 text-sm"><Plus size={14} />Run Audit</Button>
      </div>

      <Card className="rounded-xl border border-gray-200 bg-white shadow-none ring-0">
        <CardHeader className="px-5 pb-0 pt-4">
          <h2 className="text-base font-semibold text-gray-900">Recent Manual Audits</h2>
        </CardHeader>
        <CardContent className="px-0 pb-0 pt-3">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-100 hover:bg-transparent">
                <TableHead className="pl-5 text-xs font-semibold text-gray-500">URL</TableHead>
                <TableHead className="text-xs font-semibold text-gray-500">Audit Type</TableHead>
                <TableHead className="text-xs font-semibold text-gray-500">Score</TableHead>
                <TableHead className="text-xs font-semibold text-gray-500">Status</TableHead>
                <TableHead className="pr-5 text-xs font-semibold text-gray-500">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {audits.map((a) => (
                <TableRow key={a.url} className="border-gray-100 hover:bg-gray-50/60">
                  <TableCell className="pl-5 py-3 font-medium text-gray-800">{a.url}</TableCell>
                  <TableCell className="py-3 text-gray-600">{a.type}</TableCell>
                  <TableCell className="py-3 text-gray-700">{a.score}</TableCell>
                  <TableCell className="py-3">
                    <Badge variant={statusVariant[a.status] ?? 'secondary'} className="rounded-full text-xs">
                      {a.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="pr-5 py-3 text-gray-500 text-sm">{a.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
