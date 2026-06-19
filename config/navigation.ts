import {
  LayoutDashboard,
  Eye,
  BarChart2,
  FileText,
  Users,
  Settings,
  type LucideIcon,
} from 'lucide-react'

export interface NavItem {
  label: string
  href: string
  icon: LucideIcon
  badge?: string
}

export interface NavGroup {
  label: string
  items: NavItem[]
}

export const navGroups: NavGroup[] = [
  {
    label: 'Main',
    items: [
      { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
      { label: 'Overview', href: '/overview', icon: Eye },
    ],
  },
  {
    label: 'Analytics',
    items: [
      { label: 'Analytics', href: '/analytics', icon: BarChart2 },
      { label: 'Reports', href: '/reports', icon: FileText, badge: '3' },
    ],
  },
  {
    label: 'Management',
    items: [
      { label: 'Users', href: '/users', icon: Users },
      { label: 'Settings', href: '/settings', icon: Settings },
    ],
  },
]
