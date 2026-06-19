import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link2, Code2, FileSearch, ShieldCheck, Gauge, Search } from 'lucide-react'

const tools = [
  { icon: Link2,       name: 'Broken Link Checker',   description: 'Scan any URL for broken internal and external links.',    action: 'Launch' },
  { icon: Code2,       name: 'HTML Validator',         description: 'Validate HTML markup against W3C standards.',            action: 'Launch' },
  { icon: FileSearch,  name: 'Meta Tag Analyser',      description: 'Inspect Open Graph, Twitter cards and meta tags.',       action: 'Launch' },
  { icon: ShieldCheck, name: 'SSL/TLS Inspector',      description: 'Check certificate validity, expiry, and cipher suites.', action: 'Launch' },
  { icon: Gauge,       name: 'PageSpeed Tester',       description: 'Measure Core Web Vitals and Lighthouse scores.',         action: 'Launch' },
  { icon: Search,      name: 'Robots.txt Tester',      description: 'Test robot directives and sitemap discovery.',           action: 'Launch' },
]

const iconColors = [
  'text-blue-600 bg-blue-50',
  'text-violet-600 bg-violet-50',
  'text-amber-600 bg-amber-50',
  'text-green-600 bg-green-50',
  'text-orange-600 bg-orange-50',
  'text-cyan-600 bg-cyan-50',
]

export default function ToolsPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Tools</h1>
        <p className="mt-1 text-sm text-gray-500">Standalone utilities for website diagnosis and testing.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool, i) => {
          const [textColor, bgColor] = iconColors[i].split(' ')
          return (
            <Card key={tool.name} className="rounded-xl border border-gray-200 bg-white shadow-none ring-0 hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${bgColor}`}>
                  <tool.icon size={19} className={textColor} />
                </div>
                <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{tool.description}</p>
                <Button className="mt-4 w-full text-sm" variant="outline">{tool.action}</Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
