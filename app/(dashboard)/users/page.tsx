import { PageHeader } from '@/components/ui/PageHeader'
import { Badge } from '@/components/ui/badge'
import { Search, UserPlus, MoreHorizontal } from 'lucide-react'

const users = [
  { id: 1,  name: 'Alex Monroe',     email: 'alex@company.io',    role: 'Admin',    status: 'Active',   joined: 'Jan 12, 2026', avatar: 'AM' },
  { id: 2,  name: 'Nina Torres',     email: 'nina@company.io',    role: 'Editor',   status: 'Active',   joined: 'Feb 03, 2026', avatar: 'NT' },
  { id: 3,  name: 'Sam Williams',    email: 'sam@company.io',     role: 'Viewer',   status: 'Inactive', joined: 'Feb 18, 2026', avatar: 'SW' },
  { id: 4,  name: 'Carol Zhang',     email: 'carol@company.io',   role: 'Editor',   status: 'Active',   joined: 'Mar 05, 2026', avatar: 'CZ' },
  { id: 5,  name: 'David Park',      email: 'david@company.io',   role: 'Viewer',   status: 'Active',   joined: 'Mar 22, 2026', avatar: 'DP' },
  { id: 6,  name: 'Emma Johnson',    email: 'emma@company.io',    role: 'Admin',    status: 'Active',   joined: 'Apr 09, 2026', avatar: 'EJ' },
  { id: 7,  name: 'Frank Lee',       email: 'frank@company.io',   role: 'Viewer',   status: 'Suspended',joined: 'Apr 14, 2026', avatar: 'FL' },
  { id: 8,  name: 'Grace Kim',       email: 'grace@company.io',   role: 'Editor',   status: 'Active',   joined: 'May 01, 2026', avatar: 'GK' },
]

const avatarColors = [
  'bg-blue-500', 'bg-violet-500', 'bg-emerald-500', 'bg-amber-500',
  'bg-rose-500',  'bg-cyan-500',   'bg-orange-500',  'bg-pink-500',
]

const statusVariant: Record<string, 'success' | 'secondary' | 'destructive'> = {
  Active:    'success',
  Inactive:  'secondary',
  Suspended: 'destructive',
}

const roleVariant: Record<string, 'info' | 'warning' | 'secondary'> = {
  Admin:  'info',
  Editor: 'warning',
  Viewer: 'secondary',
}

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Users"
        subtitle={`Managing ${users.length} team members`}
        actions={
          <button className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors">
            <UserPlus size={14} />
            Invite User
          </button>
        }
      />

      {/* Search + filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 w-full sm:w-72 shadow-sm focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
          <Search size={15} className="flex-shrink-0 text-slate-400" />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>
        <div className="flex items-center gap-2">
          {['All', 'Admin', 'Editor', 'Viewer'].map((f) => (
            <button
              key={f}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                f === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Users table */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">User</th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Role</th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Status</th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Joined</th>
                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {users.map((user, i) => (
                <tr key={user.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${avatarColors[i % avatarColors.length]}`}>
                        {user.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-slate-700">{user.name}</p>
                        <p className="text-xs text-slate-400">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <Badge variant={roleVariant[user.role]}>{user.role}</Badge>
                  </td>
                  <td className="px-5 py-3.5">
                    <Badge variant={statusVariant[user.status]}>{user.status}</Badge>
                  </td>
                  <td className="px-5 py-3.5 text-slate-500">{user.joined}</td>
                  <td className="px-5 py-3.5 text-right">
                    <button className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3.5">
          <p className="text-sm text-slate-500">Showing 1–{users.length} of {users.length} users</p>
          <div className="flex items-center gap-1">
            {[1, 2, 3].map((p) => (
              <button
                key={p}
                className={`h-8 w-8 rounded-lg text-sm font-medium transition-colors ${
                  p === 1
                    ? 'bg-blue-600 text-white'
                    : 'border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
