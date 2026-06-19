import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCheck } from 'lucide-react'

const notifications = [
  { id: 1, title: 'Audit Completed',             body: 'Full audit for acmestyle.com finished with score 82/100.', time: '2 min ago',   read: false, type: 'success' },
  { id: 2, title: 'Scheduled Audit Failed',       body: 'Bi-weekly audit for techvista.io could not connect to server.', time: '1 hr ago', read: false, type: 'error' },
  { id: 3, title: 'Report Ready',                 body: 'Your Q2 Performance report is ready to download.',        time: '3 hr ago',  read: false, type: 'info' },
  { id: 4, title: 'New User Registered',           body: 'carol@company.io joined the platform.',                  time: 'Jun 17',    read: true,  type: 'info' },
  { id: 5, title: 'Credit Balance Low',            body: 'You have 120 credits remaining. Upgrade to continue.',   time: 'Jun 16',    read: true,  type: 'warning' },
  { id: 6, title: 'Subscription Renewed',          body: 'Your Pro plan was successfully renewed for $149.',       time: 'Jun 01',    read: true,  type: 'success' },
]

const typeVariant: Record<string, 'success' | 'destructive' | 'info' | 'warning'> = {
  success: 'success',
  error:   'destructive',
  info:    'info',
  warning: 'warning',
}

const typeDot: Record<string, string> = {
  success: 'bg-green-500',
  error:   'bg-red-500',
  info:    'bg-blue-500',
  warning: 'bg-amber-500',
}

export default function NotificationsPage() {
  const unread = notifications.filter((n) => !n.read).length

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Notifications</h1>
          <p className="mt-1 text-sm text-gray-500">{unread} unread notifications</p>
        </div>
        <Button variant="outline" className="gap-1.5 text-sm h-9">
          <CheckCheck size={14} />
          Mark all read
        </Button>
      </div>

      <Card className="rounded-xl border border-gray-200 bg-white shadow-none ring-0">
        <CardHeader className="px-5 pb-0 pt-4">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">All Notifications</h2>
        </CardHeader>
        <CardContent className="px-0 pb-2 pt-2">
          <ul className="divide-y divide-gray-100">
            {notifications.map((n) => (
              <li
                key={n.id}
                className={`flex items-start gap-3 px-5 py-3.5 transition-colors hover:bg-gray-50/60 ${!n.read ? 'bg-blue-50/30' : ''}`}
              >
                <span className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${typeDot[n.type]}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-gray-800">{n.title}</p>
                    {!n.read && <Badge variant={typeVariant[n.type]} className="rounded-full text-[10px] px-2">New</Badge>}
                  </div>
                  <p className="text-sm text-gray-500 mt-0.5">{n.body}</p>
                </div>
                <span className="flex-shrink-0 text-xs text-gray-400">{n.time}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
