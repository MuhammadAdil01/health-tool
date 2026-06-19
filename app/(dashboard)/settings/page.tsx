import { PageHeader } from '@/components/ui/PageHeader'
import { User, Lock, Bell, Palette, Globe, Shield } from 'lucide-react'

const tabs = [
  { label: 'Profile',        icon: User,    active: true  },
  { label: 'Security',       icon: Lock,    active: false },
  { label: 'Notifications',  icon: Bell,    active: false },
  { label: 'Appearance',     icon: Palette, active: false },
  { label: 'Integrations',   icon: Globe,   active: false },
  { label: 'Privacy',        icon: Shield,  active: false },
]

const notificationSettings = [
  { label: 'Email digest',          description: 'Receive a weekly summary via email',            enabled: true  },
  { label: 'Security alerts',        description: 'Notify on new login or suspicious activity',    enabled: true  },
  { label: 'Product updates',        description: 'Learn about new features and improvements',     enabled: false },
  { label: 'Marketing emails',       description: 'Promotional content and special offers',        enabled: false },
  { label: 'Slack notifications',    description: 'Push updates to a connected Slack workspace',   enabled: true  },
]

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Settings"
        subtitle="Manage your account preferences and platform configuration."
      />

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Sidebar tabs */}
        <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:w-52 lg:flex-shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`flex items-center gap-2.5 whitespace-nowrap rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                tab.active
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
              }`}
            >
              <tab.icon size={16} className={tab.active ? 'text-blue-600' : 'text-slate-400'} />
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Content */}
        <div className="flex-1 space-y-5">
          {/* Profile section */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-5 font-semibold text-slate-800">Profile Information</h3>
            <div className="mb-6 flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-2xl font-extrabold text-white ring-4 ring-blue-100">
                A
              </div>
              <div>
                <button className="rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-600 shadow-sm hover:bg-slate-50 transition-colors">
                  Change avatar
                </button>
                <p className="mt-1 text-xs text-slate-400">JPG, GIF or PNG. 2MB max.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { label: 'First name',    defaultValue: 'Admin',           type: 'text'  },
                { label: 'Last name',     defaultValue: 'User',            type: 'text'  },
                { label: 'Email address', defaultValue: 'admin@dashpro.io',type: 'email' },
                { label: 'Phone number',  defaultValue: '+1 (555) 000-0000',type: 'tel'  },
              ].map((field) => (
                <div key={field.label}>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">{field.label}</label>
                  <input
                    type={field.type}
                    defaultValue={field.defaultValue}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Bio</label>
                <textarea
                  rows={3}
                  defaultValue="Platform administrator with full access to all modules."
                  className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>
            </div>
            <div className="mt-5 flex justify-end gap-3">
              <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm hover:bg-slate-50 transition-colors">
                Cancel
              </button>
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors">
                Save changes
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5">
              <h3 className="font-semibold text-slate-800">Notification Preferences</h3>
              <p className="mt-1 text-sm text-slate-500">Choose what notifications you receive.</p>
            </div>
            <div className="divide-y divide-slate-100">
              {notificationSettings.map((n) => (
                <div key={n.label} className="flex items-center justify-between py-4">
                  <div>
                    <p className="text-sm font-medium text-slate-700">{n.label}</p>
                    <p className="text-xs text-slate-400">{n.description}</p>
                  </div>
                  <button
                    className={`relative inline-flex h-5 w-9 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ${
                      n.enabled ? 'bg-blue-600' : 'bg-slate-200'
                    }`}
                    role="switch"
                    aria-checked={n.enabled}
                  >
                    <span
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition-transform duration-200 ${
                        n.enabled ? 'translate-x-4' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Danger zone */}
          <div className="rounded-xl border border-red-200 bg-white p-6 shadow-sm">
            <h3 className="mb-1 font-semibold text-red-700">Danger Zone</h3>
            <p className="mb-4 text-sm text-slate-500">Irreversible actions. Proceed with caution.</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
                Deactivate account
              </button>
              <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition-colors">
                Delete account permanently
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
