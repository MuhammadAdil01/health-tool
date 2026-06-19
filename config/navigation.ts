import {
  LayoutDashboard,
  FolderOpen,
  ClipboardList,
  CalendarClock,
  Users,
  CreditCard,
  Settings,
  LayoutTemplate,
  Bell,
  ScrollText,
  Wrench,
  HelpCircle,
  type LucideIcon,
} from 'lucide-react'

export interface NavItem {
  label: string
  href: string
  icon: LucideIcon
  /** Small badge count shown inline */
  badge?: string
  /** Red notification dot */
  dot?: boolean
}

export interface NavGroup {
  items: NavItem[]
}

export const navGroups: NavGroup[] = [
  {
    items: [
      { label: 'Dashboard',       href: '/dashboard',        icon: LayoutDashboard },
      { label: 'Audit Projects',  href: '/audit-projects',   icon: FolderOpen },
      { label: 'Manual Audits',   href: '/manual-audits',    icon: ClipboardList },
      { label: 'Scheduled Audits',href: '/scheduled-audits', icon: CalendarClock },
    ],
  },
  {
    items: [
      { label: 'Users',           href: '/users',            icon: Users },
      { label: 'Subscriptions',   href: '/subscriptions',    icon: CreditCard },
      { label: 'Settings',        href: '/settings',         icon: Settings },
    ],
  },
  {
    items: [
      { label: 'Templates',       href: '/templates',        icon: LayoutTemplate },
      { label: 'Notifications',   href: '/notifications',    icon: Bell, dot: true },
      { label: 'Logs',            href: '/logs',             icon: ScrollText },
      { label: 'Tools',           href: '/tools',            icon: Wrench },
    ],
  },
  {
    items: [
      { label: 'Help & Support',  href: '/help',             icon: HelpCircle },
    ],
  },
]
