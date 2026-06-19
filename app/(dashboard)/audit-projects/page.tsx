import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, FolderOpen } from 'lucide-react'

const projects = [
  { name: 'E-commerce Redesign',  sites: 14, lastAudit: 'Jun 18, 2026', status: 'Active',   score: 84 },
  { name: 'Corporate Website',    sites:  3, lastAudit: 'Jun 16, 2026', status: 'Active',   score: 91 },
  { name: 'Blog Platform',        sites:  8, lastAudit: 'Jun 10, 2026', status: 'Paused',   score: 67 },
  { name: 'Landing Pages Q2',     sites: 22, lastAudit: 'Jun 05, 2026', status: 'Active',   score: 79 },
  { name: 'Legacy Migration',     sites:  5, lastAudit: 'May 28, 2026', status: 'Archived', score: 55 },
]

const statusVariant: Record<string, 'success' | 'warning' | 'secondary'> = {
  Active:   'success',
  Paused:   'warning',
  Archived: 'secondary',
}

export default function AuditProjectsPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Audit Projects</h1>
          <p className="mt-1 text-sm text-gray-500">Organise and manage all your audit projects.</p>
        </div>
        <Button className="gap-1.5 text-sm">
          <Plus size={14} />
          New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.name} className="rounded-xl border border-gray-200 bg-white shadow-none ring-0 hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                  <FolderOpen size={18} className="text-blue-600" />
                </div>
                <Badge variant={statusVariant[p.status]}>{p.status}</Badge>
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">{p.name}</h3>
              <p className="text-sm text-gray-500">{p.sites} sites · Last audit {p.lastAudit}</p>
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>Avg. score</span>
                  <span className="font-semibold text-gray-700">{p.score}/100</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className={`h-full rounded-full ${p.score >= 80 ? 'bg-green-500' : p.score >= 60 ? 'bg-amber-500' : 'bg-red-500'}`}
                    style={{ width: `${p.score}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
