import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const logs = [
  { level: 'INFO',  message: 'Audit started for acmestyle.com',            user: 'admin@dashpro.io',  time: 'Jun 18, 2026 10:28 AM' },
  { level: 'INFO',  message: 'Audit completed — score: 82/100',            user: 'system',            time: 'Jun 18, 2026 10:30 AM' },
  { level: 'WARN',  message: 'Rate limit approaching: 480/500 audits used', user: 'system',           time: 'Jun 18, 2026 09:45 AM' },
  { level: 'ERROR', message: 'Connection timeout for techvista.io',         user: 'system',            time: 'Jun 17, 2026 08:47 PM' },
  { level: 'INFO',  message: 'New user carol@company.io registered',        user: 'admin@dashpro.io',  time: 'Jun 17, 2026 03:10 PM' },
  { level: 'INFO',  message: 'Scheduled audit queued for myblog.com',       user: 'scheduler',         time: 'Jun 17, 2026 00:00 AM' },
  { level: 'WARN',  message: 'SSL certificate expiring in 7 days — shop.com', user: 'system',          time: 'Jun 16, 2026 06:00 AM' },
  { level: 'INFO',  message: 'Subscription renewed — Pro plan $149',        user: 'billing',           time: 'Jun 01, 2026 12:00 AM' },
]

const levelVariant: Record<string, 'info' | 'warning' | 'destructive'> = {
  INFO:  'info',
  WARN:  'warning',
  ERROR: 'destructive',
}

export default function LogsPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Logs</h1>
        <p className="mt-1 text-sm text-gray-500">System and audit activity logs.</p>
      </div>

      <Card className="rounded-xl border border-gray-200 bg-white shadow-none ring-0">
        <CardHeader className="px-5 pb-0 pt-4">
          <h2 className="text-base font-semibold text-gray-900">Activity Log</h2>
        </CardHeader>
        <CardContent className="px-0 pb-0 pt-2">
          <ul className="divide-y divide-gray-100 font-mono text-xs">
            {logs.map((log, i) => (
              <li key={i} className="flex items-start gap-3 px-5 py-3 hover:bg-gray-50/60 transition-colors">
                <Badge variant={levelVariant[log.level]} className="rounded text-[10px] font-mono w-14 justify-center flex-shrink-0 mt-0.5">
                  {log.level}
                </Badge>
                <span className="flex-1 text-gray-700 font-sans text-[13px]">{log.message}</span>
                <span className="flex-shrink-0 text-gray-400">{log.user}</span>
                <span className="flex-shrink-0 text-gray-400 whitespace-nowrap">{log.time}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
