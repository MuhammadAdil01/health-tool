import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { User, Lock, Bell, Globe } from 'lucide-react'

const tabs = [
  { label: 'Profile',        icon: User,  active: true  },
  { label: 'Security',       icon: Lock,  active: false },
  { label: 'Notifications',  icon: Bell,  active: false },
  { label: 'Integrations',   icon: Globe, active: false },
]

const notifications = [
  { label: 'Email digest',       description: 'Weekly summary via email',             enabled: true  },
  { label: 'Audit alerts',       description: 'Notify when an audit completes or fails', enabled: true  },
  { label: 'Product updates',    description: 'Learn about new features',             enabled: false },
  { label: 'Marketing emails',   description: 'Promotional content and offers',       enabled: false },
]

export default function SettingsPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-500">Manage your account preferences.</p>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row">
        {/* Tabs */}
        <nav className="flex gap-1 overflow-x-auto lg:flex-col lg:w-44 lg:flex-shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`flex items-center gap-2.5 whitespace-nowrap rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                tab.active ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <tab.icon size={15} className={tab.active ? 'text-blue-600' : 'text-gray-400'} />
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="flex-1 space-y-4">
          {/* Profile */}
          <Card className="rounded-xl border border-gray-200 bg-white shadow-none ring-0">
            <CardHeader className="px-5 pb-0 pt-5">
              <h3 className="font-semibold text-gray-900">Profile Information</h3>
            </CardHeader>
            <CardContent className="px-5 pb-5 pt-4">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-600 text-xl font-bold text-white ring-4 ring-gray-100">
                  A
                </div>
                <div>
                  <Button variant="outline" className="text-sm h-8">Change avatar</Button>
                  <p className="mt-1 text-xs text-gray-400">JPG, GIF or PNG · 2 MB max</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { label: 'First name',    value: 'Admin',             type: 'text'  },
                  { label: 'Last name',     value: 'User',              type: 'text'  },
                  { label: 'Email address', value: 'admin@siteaudit.io',type: 'email' },
                  { label: 'Phone',         value: '+1 (555) 000-0000', type: 'tel'   },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">{field.label}</label>
                    <input
                      type={field.type}
                      defaultValue={field.value}
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-end gap-3">
                <Button variant="outline" className="text-sm h-9">Cancel</Button>
                <Button className="text-sm h-9">Save changes</Button>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="rounded-xl border border-gray-200 bg-white shadow-none ring-0">
            <CardHeader className="px-5 pb-0 pt-5">
              <h3 className="font-semibold text-gray-900">Notification Preferences</h3>
            </CardHeader>
            <CardContent className="px-5 pb-4 pt-2">
              <div className="divide-y divide-gray-100">
                {notifications.map((n) => (
                  <div key={n.label} className="flex items-center justify-between py-3.5">
                    <div>
                      <p className="text-sm font-medium text-gray-700">{n.label}</p>
                      <p className="text-xs text-gray-400">{n.description}</p>
                    </div>
                    <button
                      className={`relative inline-flex h-5 w-9 rounded-full transition-colors ${n.enabled ? 'bg-blue-600' : 'bg-gray-200'}`}
                      role="switch"
                      aria-checked={n.enabled}
                    >
                      <span className={`inline-block h-4 w-4 translate-y-0.5 rounded-full bg-white shadow transition-transform ${n.enabled ? 'translate-x-4' : 'translate-x-0.5'}`} />
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
