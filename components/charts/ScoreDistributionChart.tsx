'use client'

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: '90-100', value: 35, fill: '#3B82F6' },
  { name: '70-89',  value: 28, fill: '#10B981' },
  { name: '50-69',  value: 20, fill: '#F59E0B' },
  { name: '30-49',  value: 12, fill: '#F97316' },
  { name: '0-29',   value:  5, fill: '#EF4444' },
]

export function ScoreDistributionChart() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex-none">
        <ResponsiveContainer width={190} height={190}>
          <PieChart>
            <Pie
              data={data}
              cx={95}
              cy={95}
              innerRadius={55}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              strokeWidth={0}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                fontSize: 12,
              }}
              formatter={(value) => [`${value}%`, 'Share']}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Custom legend */}
      <div className="flex flex-col gap-2.5">
        {data.map((entry) => (
          <div key={entry.name} className="flex items-center gap-2">
            <span
              className="inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full"
              style={{ backgroundColor: entry.fill }}
            />
            <span className="text-sm text-gray-600">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
