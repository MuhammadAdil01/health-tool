'use client'

import { useState } from 'react'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-1 flex-col overflow-hidden bg-gray-50">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-screen-xl p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
