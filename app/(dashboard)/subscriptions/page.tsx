import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'Perfect for small websites and freelancers.',
    features: ['50 audits/month', '5 projects', 'Email reports', 'SEO checks'],
    current: false,
  },
  {
    name: 'Pro',
    price: '$149',
    period: '/month',
    description: 'For growing teams and agencies.',
    features: ['500 audits/month', 'Unlimited projects', 'Scheduled audits', 'API access', 'Priority support'],
    current: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored for large organisations.',
    features: ['Unlimited audits', 'Dedicated account manager', 'SSO / SAML', 'SLA guarantee', 'Custom integrations'],
    current: false,
  },
]

export default function SubscriptionsPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Subscriptions</h1>
        <p className="mt-1 text-sm text-gray-500">Manage your plan and billing details.</p>
      </div>

      <Card className="rounded-xl border border-green-200 bg-green-50 shadow-none ring-0">
        <CardContent className="flex items-center justify-between p-4">
          <div>
            <p className="font-semibold text-green-800">You are on the <span className="font-bold">Pro</span> plan</p>
            <p className="text-sm text-green-600">Renews on July 1, 2026 · $149/month</p>
          </div>
          <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-100 text-sm">
            Manage Billing
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`rounded-xl shadow-none ${plan.current ? 'border-2 border-blue-500 ring-0' : 'border border-gray-200 ring-0'} bg-white`}
          >
            <CardHeader className="px-5 pt-5 pb-0">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-gray-900">{plan.name}</h3>
                {plan.current && <Badge variant="info" className="rounded-full text-xs">Current Plan</Badge>}
              </div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-sm text-gray-500">{plan.period}</span>
              </div>
              <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
            </CardHeader>
            <CardContent className="px-5 pb-5 pt-4">
              <ul className="space-y-2 mb-5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check size={14} className="flex-shrink-0 text-green-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full text-sm ${plan.current ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                variant={plan.current ? 'default' : 'outline'}
              >
                {plan.current ? 'Current Plan' : plan.name === 'Enterprise' ? 'Contact Sales' : 'Upgrade'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
