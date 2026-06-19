import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, CalendarClock, Globe } from 'lucide-react'

const schedules = [
  { name: 'Weekly Full Audit — acmestyle.com',    freq: 'Weekly',   nextRun: 'Jun 23, 2026', status: 'Active',   lastScore: '82/100' },
  { name: 'Daily SEO Check — myblog.com',          freq: 'Daily',    nextRun: 'Jun 19, 2026', status: 'Active',   lastScore: '66/100' },
  { name: 'Monthly Security — shop.com',           freq: 'Monthly',  nextRun: 'Jul 01, 2026', status: 'Active',   lastScore: '91/100' },
  { name: 'Bi-weekly Performance — techvista.io',  freq: 'Bi-weekly',nextRun: 'Jun 25, 2026', status: 'Paused',   lastScore: '74/100' },
  { name: 'Weekly Crawl — newsportal.com',         freq: 'Weekly',   nextRun: '—',            status: 'Disabled', lastScore: '48/100' },
]

const statusVariant: Record<string, 'success' | 'warning' | 'secondary'> = {
  Active:   'success',
  Paused:   'warning',
  Disabled: 'secondary',
}

export default function ScheduledAuditsPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Scheduled Audits</h1>
          <p className="mt-1 text-sm text-gray-500">Automate recurring audits on a schedule.</p>
        </div>
        <Button className="gap-1.5 text-sm"><Plus size={14} />New Schedule</Button>
      </div>

      <div className="space-y-3">
        {schedules.map((s) => (
          <Card key={s.name} className="rounded-xl border border-gray-200 bg-white shadow-none ring-0">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50">
                <CalendarClock size={17} className="text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-800 truncate">{s.name}</p>
                <div className="flex items-center gap-3 mt-0.5 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><Globe size={11} />{s.freq}</span>
                  <span>Next: {s.nextRun}</span>
                  <span>Last score: {s.lastScore}</span>
                </div>
              </div>
              <Badge variant={statusVariant[s.status]}>{s.status}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
