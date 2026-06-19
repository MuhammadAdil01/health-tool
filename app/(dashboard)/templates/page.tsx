import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, LayoutTemplate } from 'lucide-react'

const templates = [
  { name: 'Full Site Audit',       checks: 48, category: 'All-in-one', builtin: true  },
  { name: 'SEO Optimisation',      checks: 22, category: 'SEO',        builtin: true  },
  { name: 'Core Web Vitals',       checks: 12, category: 'Performance', builtin: true },
  { name: 'Security Hardening',    checks: 18, category: 'Security',   builtin: true  },
  { name: 'Accessibility (WCAG)',  checks: 31, category: 'A11y',       builtin: true  },
  { name: 'E-commerce Checklist',  checks: 27, category: 'Custom',     builtin: false },
]

export default function TemplatesPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Templates</h1>
          <p className="mt-1 text-sm text-gray-500">Pre-configured audit profiles for common use cases.</p>
        </div>
        <Button className="gap-1.5 text-sm"><Plus size={14} />Create Template</Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((t) => (
          <Card key={t.name} className="rounded-xl border border-gray-200 bg-white shadow-none ring-0 hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50">
                  <LayoutTemplate size={17} className="text-violet-600" />
                </div>
                {t.builtin
                  ? <Badge variant="secondary" className="rounded-full text-xs">Built-in</Badge>
                  : <Badge variant="info" className="rounded-full text-xs">Custom</Badge>}
              </div>
              <h3 className="font-semibold text-gray-900">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.checks} checks · {t.category}</p>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" className="flex-1 text-xs h-8">Preview</Button>
                <Button className="flex-1 text-xs h-8">Use Template</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
