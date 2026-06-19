'use client'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { date: 'May 6',  score: 25 },
  { date: 'May 7',  score: 46 },
  { date: 'May 8',  score: 35 },
  { date: 'May 9',  score: 76 },
  { date: 'May 10', score: 65 },
  { date: 'May 11', score: 65 },
  { date: 'May 12', score: 100 },
]

export function AuditTrendChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
        <defs>
          <linearGradient id="auditGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%"  stopColor="#6366f1" stopOpacity={0.25} />
            <stop offset="95%" stopColor="#6366f1" stopOpacity={0.03} />
          </linearGradient>
        </defs>

        <CartesianGrid
          strokeDasharray=""
          vertical={false}
          stroke="#f3f4f6"
        />

        <XAxis
          dataKey="date"
          tick={{ fontSize: 11, fill: '#9ca3af' }}
          tickLine={false}
          axisLine={false}
          dy={6}
        />

        <YAxis
          domain={[0, 100]}
          ticks={[0, 25, 50, 75, 100]}
          tick={{ fontSize: 11, fill: '#9ca3af' }}
          tickLine={false}
          axisLine={false}
        />

        <Tooltip
          contentStyle={{
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            fontSize: 12,
          }}
          labelStyle={{ fontWeight: 600, color: '#374151' }}
          itemStyle={{ color: '#6366f1' }}
          formatter={(value) => [`${value}`, 'Score']}
        />

        <Area
          type="monotone"
          dataKey="score"
          stroke="#6366f1"
          strokeWidth={2.5}
          fill="url(#auditGradient)"
          dot={false}
          activeDot={{ r: 4, fill: '#6366f1', strokeWidth: 0 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
