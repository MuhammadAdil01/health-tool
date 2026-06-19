'use client'

import { Menu, Bell, Search } from 'lucide-react'

interface TopbarProps {
  onMenuClick: () => void
}

export function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="flex h-14 flex-shrink-0 items-center justify-between border-b border-gray-200 bg-white px-5">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 transition-colors lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>

        <div className="hidden sm:flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 w-64 focus-within:border-blue-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
          <Search size={14} className="flex-shrink-0 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="relative rounded-lg p-2 text-gray-500 hover:bg-gray-100 transition-colors">
          <Bell size={18} />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-gray-100 transition-colors">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-600 text-xs font-bold text-white">
            A
          </div>
          <div className="hidden md:block text-left">
            <p className="text-[13px] font-medium text-gray-700 leading-none">Admin</p>
          </div>
        </button>
      </div>
    </header>
  )
}
