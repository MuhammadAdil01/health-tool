import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MessageCircle, BookOpen, Video, Mail } from 'lucide-react'

const faqs = [
  { q: 'How many audits can I run per month?',    a: 'The number depends on your plan. Starter gets 50, Pro gets 500, and Enterprise is unlimited.' },
  { q: 'Can I schedule automated audits?',        a: 'Yes — head to Scheduled Audits to set up daily, weekly, or monthly automatic runs.' },
  { q: 'How do I invite team members?',           a: 'Go to Users and click "Invite User". Invitations are sent by email.' },
  { q: 'What is a credit?',                       a: 'One credit = one page audited. A full-site audit costs credits equal to the number of pages crawled.' },
  { q: 'Can I export reports as PDF?',            a: 'Yes. From any audit result, click "Export" and choose PDF, CSV, or HTML format.' },
]

const contactOptions = [
  { icon: MessageCircle, label: 'Live Chat',        description: 'Chat with our support team', action: 'Start Chat',   color: 'text-blue-600 bg-blue-50' },
  { icon: Mail,          label: 'Email Support',    description: 'support@siteaudit.io',       action: 'Send Email',   color: 'text-violet-600 bg-violet-50' },
  { icon: BookOpen,      label: 'Documentation',    description: 'Browse all guides and docs', action: 'View Docs',    color: 'text-green-600 bg-green-50' },
  { icon: Video,         label: 'Video Tutorials',  description: 'Watch how-to videos',        action: 'Watch Videos', color: 'text-amber-600 bg-amber-50' },
]

export default function HelpPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Help & Support</h1>
        <p className="mt-1 text-sm text-gray-500">Find answers, tutorials, and ways to reach our team.</p>
      </div>

      {/* Contact options */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {contactOptions.map((c) => {
          const [textColor, bgColor] = c.color.split(' ')
          return (
            <Card key={c.label} className="rounded-xl border border-gray-200 bg-white shadow-none ring-0 hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${bgColor}`}>
                  <c.icon size={19} className={textColor} />
                </div>
                <p className="font-semibold text-gray-900 text-sm">{c.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{c.description}</p>
                <Button variant="outline" className="mt-3 w-full text-xs h-8">{c.action}</Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* FAQ */}
      <Card className="rounded-xl border border-gray-200 bg-white shadow-none ring-0">
        <CardHeader className="px-5 pb-0 pt-4">
          <h2 className="text-base font-semibold text-gray-900">Frequently Asked Questions</h2>
        </CardHeader>
        <CardContent className="px-5 pb-5 pt-3">
          <dl className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-lg border border-gray-100 p-4">
                <dt className="font-semibold text-gray-800 text-sm">{faq.q}</dt>
                <dd className="mt-1 text-sm text-gray-500">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </CardContent>
      </Card>
    </div>
  )
}
