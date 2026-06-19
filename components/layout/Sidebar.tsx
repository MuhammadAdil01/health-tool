'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X, LogOut } from 'lucide-react'
import { navGroups } from '@/config/navigation'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-56 flex-col transition-transform duration-300 ease-in-out lg:static lg:z-auto lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundColor: '#0B1328' }}
      >
        {/* Logo */}
        <div className="flex h-14 items-center gap-2.5 border-b border-white/10 px-4">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600">
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-white">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
          </div>
          <span className="text-[15px] font-bold tracking-tight text-white">SiteAudit</span>
          <button
            onClick={onClose}
            className="ml-auto rounded p-1 text-slate-400 hover:bg-white/10 hover:text-white transition-colors lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={16} />
          </button>
        </div>

        {/* Navigation — groups separated by spacing only, no text labels */}
        <nav className="flex-1 overflow-y-auto px-2 py-3">
          {navGroups.map((group, groupIndex) => (
            <div key={groupIndex} className={groupIndex > 0 ? 'mt-1 border-t border-white/8 pt-1' : ''}>
              <ul className="space-y-px">
                {group.items.map((item) => {
                  const isActive =
                    pathname === item.href || pathname.startsWith(item.href + '/')
                  const Icon = item.icon

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => onClose()}
                        className={`group flex items-center gap-2.5 rounded-md px-3 py-2 text-[13.5px] font-medium transition-all duration-100 ${
                          isActive
                            ? 'bg-[#282A5A] text-white'
                            : 'text-slate-400 hover:bg-white/8 hover:text-white'
                        }`}
                      >
                        <Icon
                          size={16}
                          className={isActive ? 'text-white' : 'text-slate-500 group-hover:text-white/80 transition-colors'}
                        />
                        <span className="flex-1 leading-none">{item.label}</span>

                        {/* Notification dot */}
                        {item.dot && (
                          <span className="h-1.5 w-1.5 rounded-full bg-red-500 flex-shrink-0" />
                        )}

                        {/* Count badge */}
                        {item.badge && (
                          <span
                            className={`rounded-full px-1.5 py-px text-[10px] font-semibold leading-none ${
                              isActive ? 'bg-white/20 text-white' : 'bg-blue-500/20 text-blue-400'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* User profile footer */}
        <div className="border-t border-white/10 p-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-600 text-xs font-bold text-white ring-2 ring-white/10">
              A
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-semibold leading-none text-white">Admin</p>
              <p className="mt-0.5 truncate text-[11px] leading-none text-slate-500">Super Administrator</p>
            </div>
            <button
              className="rounded p-1 text-slate-500 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Log out"
            >
              <LogOut size={14} />
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}
