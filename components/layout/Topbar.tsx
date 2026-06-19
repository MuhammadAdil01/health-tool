'use client'

import { Menu, Bell, Search, ChevronDown } from 'lucide-react'

interface TopbarProps {
  onMenuClick: () => void
}

export function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="flex h-16 flex-shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 lg:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        <div className="hidden sm:flex items-center gap-2.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 w-72 focus-within:border-blue-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
          <Search size={15} className="flex-shrink-0 text-slate-400" />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors">
          <Bell size={19} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-500 ring-2 ring-white" />
        </button>

        <div className="ml-1 flex items-center">
          <button className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-slate-600 hover:bg-slate-100 transition-colors">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-xs font-semibold text-white ring-2 ring-blue-200">
              A
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium text-slate-700 leading-none">Admin</p>
            </div>
            <ChevronDown size={13} className="hidden md:block text-slate-400" />
          </button>
        </div>
      </div>
    </header>
  )
}
